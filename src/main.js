import * as THREE from 'three';
import { World, POI } from './world.js';
import { Character, Enemy, WEAPONS } from './characters.js';
import { Vehicle, TrafficSystem, CAR_TYPES } from './vehicles.js';
import { AudioEngine } from './audio.js';
import { MissionSystem } from './missions.js';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const angleLerp = (a, b, t) => {
  let d = ((b - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  return a + d * t;
};
const fmt = n => '$' + Math.round(n).toLocaleString('en-US');

function raySphere(ro, rd, center, radius) {
  const ox = center.x - ro.x, oy = center.y - ro.y, oz = center.z - ro.z;
  const t = ox * rd.x + oy * rd.y + oz * rd.z;
  if (t < 0) return null;
  const d2 = ox * ox + oy * oy + oz * oz - t * t;
  const r2 = radius * radius;
  if (d2 > r2) return null;
  return t - Math.sqrt(Math.max(0, r2 - d2));
}

function rayBox(ro, rd, box) {
  let tmin = 0, tmax = 1e9;
  const axes = [['x', 'minX', 'maxX'], ['y', null, null], ['z', 'minZ', 'maxZ']];
  for (const [ax, lo, hi] of axes) {
    const o = ro[ax], d = rd[ax];
    let mn, mx;
    if (ax === 'y') { mn = 0; mx = box.h; }
    else { mn = box[lo]; mx = box[hi]; }
    if (Math.abs(d) < 1e-8) {
      if (o < mn || o > mx) return null;
    } else {
      let t1 = (mn - o) / d, t2 = (mx - o) / d;
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; }
      tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
      if (tmin > tmax) return null;
    }
  }
  return tmin > 0 ? tmin : null;
}

class Game {
  constructor() {
    this.state = 'boot';
    this.started = false;
    this.uiLocked = false;
    this.time = 0;
    this.clock = new THREE.Clock();
    this.timeScale = 1;
    this.cash = 420;
    this.bank = 1250;
    this.bags = [1250, 1680];
    this.policeKills = 0;
    this.flags = {};
    this.freeRoam = false;
    this.inInterior = false;
    this.heat = 0;
    this.suspicion = 0;
    this.visualContact = false;
    this.escapeTimer = 0;
    this.dispatch = { t: 0, pending: 0, severity: 0 };
    this.profile = { violence: 0, notoriety: 0, witnesses: 0 };
    this.vehicles = [];
    this.policeCars = [];
    this.police = [];
    this.enemies = [];
    this.peds = [];
    this.parkedCars = [];
    this.trafficCars = [];
    this.pickups = [];
    this.corpses = [];
    this.effects = [];
    this.toasts = [];
    this.subQueue = [];
    this.subCurrent = null;
    this.subT = 0;
    this.promptCache = '';
    this.heatCooldown = 0;
    this.dispatchSpawnT = 0;
    this.copSpawnT = 0;
    this.arrestT = 0;
    this.deathT = 0;
    this.shake = 0;
    this.recoilKick = 0;
    this.spread = 0;
    this.mouseDown = false;
    this.touchFire = false;
    this.focus = false;
    this.lastDamage = 0;
    this.radioT = 0;
    this.camYaw = Math.PI / 2;
    this.camPitch = -0.16;
    this.camDist = 5;
    this.camLook = new THREE.Vector3();
    this.recentMouse = 0;
    this.isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    this.frameTimes = [];
    this.lowPerf = false;
    this.stats = { kills: 0, arrests: 0, stolen: 0, missions: 0, distance: 0 };
    this.duffelVisible = false;
    this.hold = null;
    this.input = { forward: false, back: false, left: false, right: false, jump: false, sprint: false, aim: false, focus: false, interact: false, interactPressed: false, firePressed: false };
    this._tmp = new THREE.Vector3();
    this._tmp2 = new THREE.Vector3();
    this._tmp3 = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this.init();
  }

  init() {
    const app = document.getElementById('app');
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', stencil: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isTouch ? 1.25 : 1.6));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    app.appendChild(this.renderer.domElement);
    this.canvas = this.renderer.domElement;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.08, 2600);
    this.camera.position.set(-150, 12, 270);
    this.world = new World(this.scene, this.renderer);
    this.audio = new AudioEngine();

    this.traffic = new TrafficSystem(this.scene, this.world);
    this.personalCar = new Vehicle('grotto', this.scene, { x: -96, z: 244, heading: Math.PI / 2, personal: true, fuel: 34 });
    this.vehicles.push(this.personalCar);
    this.traffic.spawnTraffic(this);
    this.traffic.spawnPeds(this);

    this.jason = new Character('jason', this.scene, { x: -112, z: 239, heading: Math.PI / 2 });
    this.lucia = new Character('lucia', this.scene, { x: -110.4, z: 235.2, heading: Math.PI / 2 });
    this.activeChar = this.jason;
    this.partner = this.lucia;

    this.missions = new MissionSystem(this);
    this.buildMarkers();
    this.buildProps();
    this.bindUI();
    this.bindInput();
    this.buildStars();
    this.updateHud();

    window.addEventListener('resize', () => this.onResize());
    this.onResize();
    this.clock.start();
    this.loop = this.loop.bind(this);
    this.renderer.setAnimationLoop(this.loop);

    setTimeout(() => {
      document.getElementById('boot').style.opacity = '0';
      setTimeout(() => document.getElementById('boot').classList.add('hidden'), 700);
      document.getElementById('title').classList.add('show');
      this.state = 'title';
      this.titleTime = 0;
    }, 450);
  }

  onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  buildMarkers() {
    const g = new THREE.Group();
    const cyl = new THREE.Mesh(
      new THREE.CylinderGeometry(1.7, 1.7, 18, 20, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    cyl.position.y = 9; g.add(cyl);
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.5, 2.2, 28), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.12; g.add(ring);
    const beam = new THREE.Mesh(
      new THREE.PlaneGeometry(0.5, 18),
      new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    beam.position.y = 9; g.add(beam);
    const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.6), new THREE.MeshBasicMaterial({ color: 0xffd166, toneMapped: false }));
    diamond.position.y = 19; g.add(diamond);
    g.visible = false;
    this.marker = g;
    this.markerParts = { cyl, ring, beam, diamond };
    this.scene.add(g);
  }

  buildProps() {
    // duffel bag
    const bag = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.55, 0.6), new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.86 }));
    body.position.y = 0.3; bag.add(body);
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.055, 6, 14, Math.PI), new THREE.MeshStandardMaterial({ color: 0x5a5a60, roughness: 0.7 }));
    strap.rotation.z = Math.PI; strap.position.y = 0.58; bag.add(strap);
    const glow = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.6, 24), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.y = 0.08; bag.add(glow);
    bag.position.set(-360, 0.3, 160);
    bag.visible = false;
    this.scene.add(bag);
    this.duffel = bag;

    // active car headlight
    this.carLight = new THREE.PointLight(0xffe6b0, 0, 34, 2);
    this.scene.add(this.carLight);
    this.carLight2 = new THREE.PointLight(0xff3b7a, 0, 16, 2);
    this.scene.add(this.carLight2);

    // focus overlay mesh? handled via CSS
    // explosion light
    this.boomLight = new THREE.PointLight(0xff8a3a, 0, 60, 2);
    this.scene.add(this.boomLight);
  }

  buildStars() {
    const w = document.getElementById('wanted');
    const path = 'M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17l-6 3.3 1.3-6.7-5-4.6 6.8-.8z';
    for (let i = 0; i < 5; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.innerHTML = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${path}"/></svg>`;
      w.appendChild(s);
    }
    this.starEls = [...w.children];
  }

  bindUI() {
    const byId = id => document.getElementById(id);
    this.el = {
      boot: byId('boot'), title: byId('title'), hud: byId('hud'), missionKicker: byId('missionKicker'),
      missionObj: byId('missionObj'), missionDist: byId('missionDist'), missionPayout: byId('missionPayout'),
      clock: byId('clock'), weather: byId('weatherLabel'), loc: byId('locName'),
      hpFill: byId('hpFill'), hpVal: byId('hpVal'), arFill: byId('arFill'), arVal: byId('arVal'),
      foFill: byId('foFill'), foVal: byId('foVal'), cash: byId('cashHud'), bank: byId('bankHud'), loot: byId('lootHud'),
      weaponName: byId('weaponName'), ammoMag: byId('ammoMag'), ammoRes: byId('ammoReserve'),
      roleTag: byId('roleTag'), prompt: byId('prompt'), promptKey: byId('promptKey'), promptText: byId('promptText'),
      subtitle: byId('subtitle'), subWho: byId('subWho'), subLine: byId('subLine'),
      swapBanner: byId('swapBanner'), swapBig: byId('swapBig'), swapSmall: byId('swapSmall'),
      crosshair: byId('crosshair'), focusVig: byId('focusVignette'), damageVig: byId('damageVignette'),
      hitflash: byId('hitflash'), cinema: byId('cinema'), toasts: byId('toasts'),
      vehicleHud: byId('vehicleHud'), vSpeed: byId('vSpeed'), vGear: byId('vGear'), vFuel: byId('vFuel'),
      vHealth: byId('vHealth'), vSeat: byId('vSeat'),
      phone: byId('phone'), trunk: byId('trunk'), lockpick: byId('lockpick'), qte: byId('qte'), pause: byId('pause'),
      phoneBank: byId('phoneBank'), phoneCash: byId('phoneCash'), phoneLoot: byId('phoneLoot'), phoneBags: byId('phoneBags'),
      phoneAcct: byId('phoneAcct'), phoneHeat: byId('phoneHeat'), phoneSeverity: byId('phoneSeverity'),
      profViolence: byId('profViolence'), profNotoriety: byId('profNotoriety'), profWitness: byId('profWitness'),
      trunkBags: byId('trunkBags'), trunkBodies: byId('trunkBodies'), trunkCapacity: byId('trunkCapacity'),
      carriedBags: byId('carriedBags'), trunkWeapons: byId('trunkWeapons'), bodyCount: byId('bodyCount'),
      trunkSub: byId('trunkSub'), phoneClock: byId('phoneClock'),
    };
    this.el.hud.classList.add('hidden');

    byId('btnPlay').addEventListener('click', () => this.startGame());
    byId('btnDeposit').addEventListener('click', () => this.depositCash());
    byId('btnWithdraw').addEventListener('click', () => this.withdrawCash());
    byId('btnSummon').addEventListener('click', () => { this.summonCar(); this.updatePhone(); });
    byId('btnStoreBag').addEventListener('click', () => this.storeBag());
    byId('btnTakeBag').addEventListener('click', () => this.takeBag());
    byId('btnStoreBody').addEventListener('click', () => this.concealBody(true));
    byId('btnLockPick').addEventListener('click', () => this.pickLock());
    byId('btnLockCancel').addEventListener('click', () => this.closeLockpick(false));
    byId('btnResume').addEventListener('click', () => this.togglePause(false));
    byId('btnHelpPhone').addEventListener('click', () => { this.togglePause(false, true); this.togglePhone(true); });
    byId('btnQuit').addEventListener('click', () => this.quitToTitle());

    document.querySelectorAll('[data-close="trunk"]').forEach(b => b.addEventListener('click', () => this.toggleTrunk(false)));
    byId('phone').addEventListener('click', e => { if (e.target === byId('phone')) this.togglePhone(false); });
    document.querySelectorAll('.phoneTabbar button').forEach(b => b.addEventListener('click', () => {
      const tab = b.dataset.tab;
      if (tab === 'close') return this.togglePhone(false);
      document.querySelectorAll('.phoneTabbar button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      if (tab === 'profile') document.querySelector('.crimeBars')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.audio.ui();
    }));
    byId('btnLockPick').tabIndex = 0;

    // slider settings
    byId('setVol').addEventListener('input', e => this.audio.setVolume(e.target.value / 100));
    byId('setSens').addEventListener('input', e => { this.sens = e.target.value / 100; });
    byId('setTouchSens').addEventListener('input', e => { this.touchSens = e.target.value / 100; });
    this.sens = 1; this.touchSens = 1.1;

    // reset audio unlock on first interaction
    const unlock = () => { this.audio.unlock(); };
    window.addEventListener('pointerdown', unlock, { once: false });
    window.addEventListener('keydown', unlock, { once: false });
  }

  bindInput() {
    const keyMap = { KeyW: 'forward', KeyS: 'back', KeyA: 'left', KeyD: 'right', ArrowUp: 'forward', ArrowDown: 'back', ArrowLeft: 'left', ArrowRight: 'right' };
    window.addEventListener('keydown', e => {
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (this.qte) { this.handleQteKey(e.code); return; }
      if (this.lockpick) {
        if (e.code === 'Space' || e.code === 'KeyE') { e.preventDefault(); this.pickLock(); }
        return;
      }
      if (keyMap[e.code]) this.input[keyMap[e.code]] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.sprint = true;
      if (e.repeat) return;
      if (e.code === 'Enter' && this.state === 'title') { this.startGame(); return; }
      if (e.code === 'Escape') {
        if (this.lockpick) return this.closeLockpick(false);
        if (!this.el.phone.classList.contains('hidden')) return this.togglePhone(false);
        if (!this.el.trunk.classList.contains('hidden')) return this.toggleTrunk(false);
        if (!this.el.pause.classList.contains('hidden')) return this.togglePause(false);
        if (this.state === 'playing') return this.togglePause(true);
        return;
      }
      if (this.state !== 'playing' || this.uiLocked) return;
      switch (e.code) {
        case 'KeyQ': this.input.focus = true; break;
        case 'KeyE': this.input.interact = true; this.input.interactPressed = true; break;
        case 'KeyF': this.enterExitVehicle(); break;
        case 'Tab': this.switchOrSwap(); break;
        case 'KeyX': this.swapSeats(); break;
        case 'KeyT': this.toggleTrunk(true); break;
        case 'KeyM': this.togglePhone(true); break;
        case 'KeyR': this.activeChar?.reload(this); break;
        case 'Digit1': this.activeChar?.switchWeapon(0, this); break;
        case 'Digit2': this.activeChar?.switchWeapon(1, this); break;
        case 'Digit3': this.activeChar?.switchWeapon(2, this); break;
        case 'KeyH': if (this.activeChar?.inVehicle) this.audio.horn(); break;
        case 'Space':
          if (this.activeChar?.inVehicle) this.input.jump = true;
          else this.input.jump = true;
          break;
      }
    });
    window.addEventListener('keyup', e => {
      if (keyMap[e.code]) this.input[keyMap[e.code]] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.sprint = false;
      if (e.code === 'KeyQ') this.input.focus = false;
      if (e.code === 'KeyE') this.input.interact = false;
      if (e.code === 'Space') this.input.jump = false;
    });

    const canvas = this.canvas;
    canvas.addEventListener('click', () => {
      if (this.state === 'playing' && !this.uiLocked && document.pointerLockElement !== canvas) {
        canvas.requestPointerLock?.();
      }
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas && this.state === 'playing' && !this.uiLocked) {
        this.togglePause(true);
      }
    });
    document.addEventListener('mousemove', e => {
      if (this.state !== 'playing' || this.uiLocked) return;
      const locked = document.pointerLockElement === canvas;
      if (!locked && !this.dragging) return;
      const s = 0.0022 * (this.sens || 1);
      this.camYaw += e.movementX * s;
      this.camPitch = clamp(this.camPitch - e.movementY * s * 0.85, -0.62, 0.48);
      this.recentMouse = 0.7;
    });
    canvas.addEventListener('mousedown', e => {
      if (this.state !== 'playing' || this.uiLocked) return;
      if (e.button === 0) {
        this.mouseDown = true;
        this.attemptShoot();
      } else if (e.button === 2) {
        this.input.aim = true;
      } else if (e.button === 1) {
        this.dragging = true;
        e.preventDefault();
      }
    });
    window.addEventListener('mouseup', e => {
      if (e.button === 0) this.mouseDown = false;
      if (e.button === 2) this.input.aim = false;
      if (e.button === 1) this.dragging = false;
    });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('blur', () => { this.mouseDown = false; this.touchFire = false; this.input.aim = false; });

    // touch controls
    if (this.isTouch) document.body.classList.add('touch');
    const stick = document.getElementById('stickBase');
    const knob = document.getElementById('stickKnob');
    let stickId = null;
    const setStick = (dx, dy) => {
      const max = 44;
      const len = Math.hypot(dx, dy);
      const k = len > max ? max / len : 1;
      knob.style.transform = `translate(${dx * k}px,${dy * k}px)`;
      const nx = (dx * k) / max, ny = (dy * k) / max;
      this.input.left = nx < -0.25; this.input.right = nx > 0.25;
      this.input.forward = ny < -0.25; this.input.back = ny > 0.25;
      this.input.sprint = Math.hypot(nx, ny) > 0.92;
    };
    stick?.addEventListener('pointerdown', e => { stickId = e.pointerId; stick.setPointerCapture(e.pointerId); this.audio.unlock(); });
    stick?.addEventListener('pointermove', e => {
      if (e.pointerId !== stickId) return;
      const r = stick.getBoundingClientRect();
      setStick(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    });
    const endStick = e => {
      if (e.pointerId !== stickId) return;
      stickId = null; knob.style.transform = 'translate(0,0)';
      this.input.forward = this.input.back = this.input.left = this.input.right = false; this.input.sprint = false;
    };
    stick?.addEventListener('pointerup', endStick); stick?.addEventListener('pointercancel', endStick);

    const look = document.getElementById('touchLook');
    let lookId = null, lx = 0, ly = 0;
    look?.addEventListener('pointerdown', e => {
      if (e.target !== look) return;
      lookId = e.pointerId; lx = e.clientX; ly = e.clientY; this.audio.unlock();
    });
    look?.addEventListener('pointermove', e => {
      if (e.pointerId !== lookId) return;
      const s = 0.0045 * (this.touchSens || 1);
      this.camYaw += (e.clientX - lx) * s;
      this.camPitch = clamp(this.camPitch - (e.clientY - ly) * s * 0.8, -0.62, 0.48);
      lx = e.clientX; ly = e.clientY; this.recentMouse = 0.7;
    });
    const endLook = e => { if (e.pointerId === lookId) lookId = null; };
    look?.addEventListener('pointerup', endLook); look?.addEventListener('pointercancel', endLook);

    const holdBtn = (id, down, up) => {
      const b = document.getElementById(id);
      if (!b) return;
      b.addEventListener('pointerdown', e => { e.preventDefault(); this.audio.unlock(); down(); });
      b.addEventListener('pointerup', e => { e.preventDefault(); up?.(); });
      b.addEventListener('pointercancel', () => up?.());
      b.addEventListener('pointerleave', () => up?.());
    };
    if (this.isTouch) {
      holdBtn('tbFire', () => { this.touchFire = true; this.attemptShoot(); }, () => { this.touchFire = false; });
      holdBtn('tbFocus', () => { this.input.focus = true; }, () => { this.input.focus = false; });
      holdBtn('tbEnter', () => { this.input.interactPressed = true; this.input.interact = true; }, () => { this.input.interact = false; });
      holdBtn('tbSwap', () => this.switchOrSwap());
      holdBtn('tbPhone', () => this.togglePhone());
      holdBtn('tbJump', () => { this.input.jump = true; setTimeout(() => this.input.jump = false, 180); });
      holdBtn('tbFocus2', () => { this.activeChar.switchWeapon((this.activeChar.weapon + 1) % 3, this); });
    }
  }

  startGame() {
    if (this.started) return;
    this.started = true;
    this.state = 'playing';
    this.audio.unlock();
    this.audio.ui();
    document.getElementById('title').classList.remove('show');
    this.el.hud.classList.remove('hidden');
    this.el.hud.classList.add('show');
    this.canvas.requestPointerLock?.();
    this.world.hour = 19.55;
    this.world.setWeather('clear');
    this.camYaw = Math.PI / 2; this.camPitch = -0.15;
    this.say('JASON', 'There she is. The Grotto. Half a tank and a full trunk of bad ideas.', 4.5);
    this.say('LUCIA', 'Gas first, romance later. Press E to get in. I am not pushing.', 4.5);
    this.toast('WASD MOVE · MOUSE LOOK · E INTERACT · F ENTER/EXIT', '');
    this.toast('Q FOCUS · TAB SWAP · M BUCKME PHONE', 'money');
    this.missions.start(0);
    this.updateHud();
  }

  quitToTitle() {
    location.reload();
  }

  togglePause(force, silent) {
    if (this.state === 'title') return;
    const open = force !== undefined ? force : this.el.pause.classList.contains('hidden');
    this.el.pause.classList.toggle('hidden', !open);
    this.uiLocked = open;
    this.input.forward = this.input.back = this.input.left = this.input.right = false;
    this.mouseDown = false;
    if (open) {
      document.exitPointerLock?.();
      this.state = 'paused';
    } else {
      this.state = 'playing';
      if (!silent) this.canvas.requestPointerLock?.();
    }
  }

  togglePhone(force) {
    if (this.state === 'title') return;
    const open = force !== undefined ? force : this.el.phone.classList.contains('hidden');
    if (open && this.state === 'playing') {
      this.el.phone.classList.remove('hidden');
      this.uiLocked = true;
      document.exitPointerLock?.();
      this.updatePhone();
      this.audio.ui();
    } else if (!open) {
      this.el.phone.classList.add('hidden');
      this.uiLocked = false;
      if (this.state === 'playing') this.canvas.requestPointerLock?.();
      this.audio.ui();
    }
  }

  updatePhone() {
    const personal = this.personalCar;
    this.el.phoneBank.textContent = Math.round(this.bank).toLocaleString('en-US');
    this.el.phoneCash.textContent = fmt(this.cash);
    const lootVal = this.bags.reduce((a, b) => a + b, 0) + (personal?.trunkBags || []).reduce((a, b) => a + b, 0);
    this.el.phoneLoot.textContent = fmt(lootVal);
    this.el.phoneBags.textContent = this.bags.length + (personal?.trunkBags?.length || 0);
    this.el.phoneHeat.textContent = this.heat > 0 ? `${this.heat.toFixed(1)} / 5` : 'CLEAR';
    const sev = Math.floor(this.profile.violence / 34) + (this.heat > 0 ? 1 : 0);
    this.el.phoneSeverity.textContent = sev > 3 ? 'EXTREME' : sev > 1 ? 'HIGH' : 'LOW';
    this.el.phoneHeat.style.color = this.heat > 0 ? '#ff6b6b' : '#7dff9c';
    this.el.profViolence.style.width = `${Math.min(100, this.profile.violence)}%`;
    this.el.profNotoriety.style.width = `${Math.min(100, this.profile.notoriety)}%`;
    this.el.profWitness.style.width = `${Math.min(100, this.profile.witnesses)}%`;
    this.el.phoneClock.textContent = this.world.clockString();
    this.el.phoneAcct.textContent = `•••• 0417 · ${this.activeChar.kind === 'jason' ? 'J. DUVAL' : 'L. CAMINOS'}`;
  }

  depositCash() {
    if (this.cash <= 0) { this.toast('NOTHING TO DEPOSIT', 'bad'); return; }
    const amount = this.cash;
    this.bank += amount; this.cash = 0;
    if (amount > 0) { this.flags.m2deposit = true; this.flags.m5deposit = true; }
    this.audio.pickup(true);
    this.toast(`DEPOSITED ${fmt(amount)} · SECURE`, 'money');
    this.updatePhone(); this.updateHud();
  }

  withdrawCash() {
    if (this.bank < 500) { this.toast('BANK BALANCE TOO LOW', 'bad'); return; }
    this.bank -= 500; this.cash += 500;
    this.audio.pickup(false);
    this.toast('WITHDREW $500 CASH', '');
    this.updatePhone(); this.updateHud();
  }

  toggleTrunk(force) {
    if (!this.personalCar) return;
    const open = force !== undefined ? force : this.el.trunk.classList.contains('hidden');
    if (open) {
      const d = Math.hypot(this.activeChar.pos.x - this.personalCar.pos.x, this.activeChar.pos.z - this.personalCar.pos.z);
      if (d > 8 && this.activeChar.inVehicle !== this.personalCar) { this.toast('GET TO THE GROTTO TRUNK', 'bad'); return; }
      this.el.trunk.classList.remove('hidden');
      this.uiLocked = true;
      document.exitPointerLock?.();
      this.updateTrunkUI();
      this.audio.ui();
    } else {
      this.el.trunk.classList.add('hidden');
      this.uiLocked = false;
      if (this.state === 'playing') this.canvas.requestPointerLock?.();
      this.audio.ui();
    }
  }

  updateTrunkUI() {
    const c = this.personalCar;
    c.trunkBags = c.trunkBags || [];
    c.bodies = c.bodies || 0;
    this.el.trunkBags.textContent = c.trunkBags.length;
    this.el.trunkBodies.textContent = c.bodies;
    this.el.trunkCapacity.textContent = `${c.trunkBags.length + c.bodies}/8`;
    this.el.carriedBags.textContent = `${this.bags.length} bags · ${fmt(this.bags.reduce((a, b) => a + b, 0))}`;
    this.el.trunkWeapons.textContent = 'PISTOL · SMG · SHOTGUN';
    this.el.bodyCount.textContent = `${c.bodies} concealed`;
    this.el.trunkSub.textContent = `PERSONAL VEHICLE · ${c.spec.name.toUpperCase()} · FUEL ${Math.round(c.fuel)}%`;
    this.el.btnStoreBody = this.el.btnStoreBody || document.getElementById('btnStoreBody');
    if (this.el.btnStoreBody) this.el.btnStoreBody.disabled = this.corpses.length === 0 || c.bodies >= 4;
  }

  storeBag() {
    const c = this.personalCar;
    c.trunkBags = c.trunkBags || [];
    if (!this.bags.length) { this.toast('NO DUFFEL BAGS CARRIED', 'bad'); return; }
    if (c.trunkBags.length + c.bodies >= 8) { this.toast('TRUNK FULL', 'bad'); return; }
    const val = this.bags.pop();
    c.trunkBags.push(val);
    this.flags.m3stored = true;
    this.audio.pickup(true);
    this.toast(`DUFFEL STORED · ${fmt(val)} RAW`, 'good');
    this.updateTrunkUI(); this.updateHud();
  }

  takeBag() {
    const c = this.personalCar;
    c.trunkBags = c.trunkBags || [];
    if (!c.trunkBags.length) { this.toast('TRUNK HAS NO DUFFELS', 'bad'); return; }
    this.bags.push(c.trunkBags.pop());
    this.audio.pickup(true);
    this.toast('DUFFEL MOVED TO CARRY', '');
    this.updateTrunkUI(); this.updateHud();
  }

  concealBody(fromUI = false) {
    if (!this.corpses.length) { this.toast('NO BODY NEARBY', 'bad'); return; }
    const c = this.personalCar;
    c.bodies = c.bodies || 0;
    if (c.bodies >= 4) { this.toast('TOO MANY BODIES IN THE TRUNK', 'bad'); return; }
    const dCar = Math.hypot(this.activeChar.pos.x - c.pos.x, this.activeChar.pos.z - c.pos.z);
    if (dCar > 20) { this.toast('PARK THE GROTTO CLOSER', 'bad'); return; }
    let nearest = null, nd = 24;
    for (const body of this.corpses) {
      const d = Math.hypot(body.x - this.activeChar.pos.x, body.z - this.activeChar.pos.z);
      if (d < nd) { nd = d; nearest = body; }
    }
    if (!nearest) { this.toast('NO BODY NEARBY', 'bad'); return; }
    c.bodies++;
    if (nearest.obj) this.scene.remove(nearest.obj);
    this.corpses = this.corpses.filter(b => b !== nearest);
    this.suspicion = Math.max(0, this.suspicion - 0.5);
    this.audio.pickup(false);
    this.toast('BODY CONCEALED · WITNESSES REDUCED', 'good');
    if (fromUI) this.updateTrunkUI();
    this.updateHud();
  }

  // ---------------------------------------------------------------- minigames
  startLockpick(car) {
    this.lockpick = { car, needle: 0.18, dir: 1, speed: 0.82, pins: 0, fails: 0 };
    this.uiLocked = true;
    this.el.lockpick.classList.remove('hidden');
    document.getElementById('lockCar').textContent = `${car.spec.name.toUpperCase()} · LOCKED · 3 PINS`;
    document.getElementById('lockMsg').textContent = 'CLICK / SPACE IN THE GREEN';
    document.querySelectorAll('.pin').forEach(p => p.classList.remove('ok'));
    document.exitPointerLock?.();
    this.newLockZone();
    this.updateLockpickUI();
  }

  newLockZone() {
    const w = 0.15 + Math.random() * 0.06;
    const s = 0.08 + Math.random() * (0.84 - w);
    this.lockpick.zoneStart = s; this.lockpick.zoneW = w;
    document.getElementById('lockZone').style.left = `${s * 100}%`;
    document.getElementById('lockZone').style.width = `${w * 100}%`;
  }

  updateLockpickUI() {
    const l = this.lockpick; if (!l) return;
    document.getElementById('lockNeedle').style.left = `${clamp(l.needle, 0, 0.995) * 100}%`;
    for (let i = 0; i < 3; i++) {
      const pin = document.getElementById(`pin${i + 1}`);
      if (pin) pin.classList.toggle('ok', i < l.pins);
    }
  }

  pickLock() {
    const l = this.lockpick; if (!l) return;
    if (l.needle >= l.zoneStart && l.needle <= l.zoneStart + l.zoneW) {
      l.pins++;
      this.audio.tick();
      if (l.pins >= 3) {
        document.getElementById('lockMsg').textContent = 'IGNITION LIVE · GO';
        this.closeLockpick(true);
        this.reportCrime(1, { label: 'CAR THEFT', witnessed: true, delay: 6 });
        return;
      }
      l.speed += 0.12;
      document.getElementById('lockMsg').textContent = `PIN ${l.pins}/3 · KEEP GOING`;
      this.newLockZone();
    } else {
      l.fails++;
      this.audio.alarm();
      document.getElementById('lockMsg').textContent = 'SLIPPED';
      if (l.fails >= 2) {
        this.toast('ALARM TRIPPED · WITNESSES CALLING', 'bad');
        this.closeLockpick(false);
        this.reportCrime(1, { label: 'ATTEMPTED THEFT', witnessed: true, delay: 5 });
      }
    }
    this.updateLockpickUI();
  }

  closeLockpick(success) {
    const l = this.lockpick;
    this.el.lockpick.classList.add('hidden');
    this.lockpick = null;
    this.uiLocked = false;
    if (l?.car) {
      if (success) {
        l.car.locked = false;
        this.toast('HOTWIRED · ENGINE READY', 'good');
        this.enterVehicle(l.car);
      } else {
        this.toast('WALKED AWAY', '');
      }
    }
    if (this.state === 'playing') this.canvas.requestPointerLock?.();
  }

  startHijack(car) {
    const keys = ['KeyA', 'KeyD', 'KeyW', 'KeyS'];
    const seq = [];
    for (let i = 0; i < 3; i++) seq.push(keys[Math.floor(Math.random() * keys.length)]);
    this.qte = { car, seq, index: 0, t: 4.6, max: 4.6, fails: 0 };
    this.uiLocked = true;
    this.el.qte.classList.remove('hidden');
    document.body.classList.add('qte-open');
    const lid = document.getElementById('qteKeys');
    lid.innerHTML = seq.map((k, i) => `<div class="qk${i === 0 ? ' next' : ''}" data-i="${i}">${k.replace('Key', '')}</div>`).join('');
    document.getElementById('qteTitle').textContent = 'Hijack';
    document.getElementById('qteFill').style.width = '100%';
    document.exitPointerLock?.();
  }

  handleQteKey(code) {
    const q = this.qte; if (!q) return;
    const want = q.seq[q.index];
    const els = [...document.querySelectorAll('.qk')];
    if (code === want) {
      els[q.index].classList.remove('next'); els[q.index].classList.add('ok');
      q.index++;
      this.audio.tick();
      if (q.index >= q.seq.length) {
        els.forEach(e => e.classList.remove('next'));
        this.finishHijack(true);
      } else els[q.index].classList.add('next');
    } else {
      q.fails++;
      this.audio.hit();
      els[q.index]?.classList.add('fail');
      if (q.fails >= 2) this.finishHijack(false);
    }
  }

  finishHijack(success) {
    const q = this.qte; this.qte = null;
    this.el.qte.classList.add('hidden');
    document.body.classList.remove('qte-open');
    this.uiLocked = false;
    if (!q) return;
    const car = q.car;
    if (success) {
      car.occupied = false; car.driver = null; car.traffic = false;
      if (car.ai) car.ai = null;
      if (car.driverSeat) car.driverSeat = null;
      if (car.passengerSeat) car.passengerSeat = null;
      this.stats.stolen++;
      this.toast('HIJACKED · DRIVER EJECTED', 'good');
      this.reportCrime(1, { label: 'CARJACKING', witnessed: true, delay: 5 });
      this.enterVehicle(car);
    } else {
      this.activeChar.damage(14, this);
      this.toast('THE DRIVER FOUGHT BACK', 'bad');
      car.speed = Math.max(car.speed, 10);
      this.reportCrime(1, { label: 'CARJACKING', witnessed: true, delay: 5 });
      this.showBanner('SHAKEN', 'THEY GOT AWAY');
    }
    if (this.state === 'playing') this.canvas.requestPointerLock?.();
  }

  // ---------------------------------------------------------------- loop
  loop() {
    const dtRaw = Math.min(0.05, this.clock.getDelta());
    if (this.state === 'title') {
      this.titleTime = (this.titleTime || 0) + dtRaw;
      const a = this.titleTime * 0.075 + 2.35;
      this.camera.position.set(-108 + Math.cos(a) * 31, 8.6 + Math.sin(this.titleTime * 0.2) * 0.7, 226 + Math.sin(a) * 31);
      this.camera.lookAt(-114, 3.2, 219);
      this.world.update(dtRaw, this.camera, false, this);
      this.traffic.update(dtRaw, this, this.time);
      this.animateIdle(dtRaw);
      this.updateHudClock();
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.state === 'paused') {
      this.world.update(0, this.camera, false, this);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.state === 'playing') {
      this.time += dtRaw;
      this.frameTimes.push(dtRaw);
      if (this.frameTimes.length > 60) this.frameTimes.shift();
      this.updatePlaying(dtRaw);
      this.updateHudClock();
      this.renderer.render(this.scene, this.camera);
    }
  }

  animateIdle(dt) {
    for (const c of [this.jason, this.lucia]) {
      if (!c) continue;
      c.phase += dt * 1.2;
      c.model.body.position.y = Math.sin(c.phase) * 0.012;
      if (c.kind === 'lucia' && c.model.hairGroup) {
        const t = performance.now() * 0.001;
        c.model.hairGroup.children.forEach((m, i) => { m.rotation.z = (i - 3) * 0.06 + Math.sin(t * 1.4 + i) * 0.04 * this.world.weather.wind; });
      }
    }
  }

  updatePlaying(dtRaw) {
    if (this.down) { this.updateDown(dtRaw); return; }
    const focusNow = this.activeChar.focusActive && !this.uiLocked;
    this.focus = focusNow;
    this.timeScale = lerp(this.timeScale, focusNow ? 0.34 : 1, Math.min(1, dtRaw * 9));
    const dt = dtRaw * this.timeScale;
    this.recentMouse = Math.max(0, this.recentMouse - dtRaw);

    const car = this.activeChar.inVehicle;
    if (car) {
      this.syncCharactersToVehicle(car);
      if (this.activeChar.seat === 'driver') {
        const controls = {
          throttle: this.uiLocked ? 0 : (this.input.forward ? 1 : 0),
          brake: this.uiLocked ? 1 : (this.input.back ? 1 : 0),
          steer: this.uiLocked ? 0 : ((this.input.right ? 1 : 0) - (this.input.left ? 1 : 0)),
          handbrake: this.uiLocked ? true : !!this.input.jump,
        };
        car.update(dt, controls, this.world, this.time, this);
        car.engineOn = true;
      } else {
        this.partnerAutoDrive(car, dt);
        car.update(dt, car._autoControls || { throttle: 0, brake: 1, steer: 0 }, this.world, this.time, this);
      }
      if (this.activeChar.seat === 'driver' && this.partner.inVehicle === car) this.partnerAutoShoot(dt, car);
      if (this.activeChar.seat === 'passenger') this.activeChar.aim = !this.uiLocked && (this.input.aim || this.mouseDown);
    } else {
      this.activeChar.update(dt, this.input, this.camYaw, this.world, this);
      this.partnerFollow(dt);
      this.activeChar.aim = !this.uiLocked && (this.input.aim || this.mouseDown);
    }

    for (const v of this.vehicles) {
      if (v === car || v === this.personalCar) continue;
      if (v.traffic || v.parked || v.police) continue;
      if (v.driverSeat) continue;
      v.update(dt, null, this.world, this.time, this);
    }
    if (this.personalCar && this.personalCar !== car) {
      this.personalCar.update(dt, null, this.world, this.time, this);
    }
    this.traffic.update(dt, this, this.time);
    this.updatePolice(dt);
    for (const e of this.enemies) e.update(dt, this);
    this.updatePlayerShoot(dt);
    this.updateCamera(dtRaw);
    this.updateInteractions(dtRaw);
    this.updateEffects(dtRaw);
    this.updateMissionMarker(dtRaw);
    this.missions.update(dtRaw);
    this.world.update(dtRaw, this.camera, this.focus, this);
    this.updateDialogue(dtRaw);
    this.updateHudTick(dtRaw);
    this.updateAudio(dtRaw);
    this.updateDownCheck(dtRaw);
    this.updateLockpick(dtRaw);
    this.updateQte(dtRaw);
    this.checkArrest(dtRaw);
    if (this.focus) this.activeChar.focus = Math.max(0, this.activeChar.focus - dtRaw * 2.2);
    this.stats.distance += Math.abs(this.activeChar.speed) * dt;
  }

  updateDown(dt) {
    this.down.t -= dt;
    this.world.update(dt, this.camera, false, this);
    this.updateEffects(dt);
    this.updateDialogue(dt);
    this.updateHudTick(dt);
    this.updateAudio(dt);
    if (this.down.t <= 0) this.respawn(this.down.kind);
  }

  updateDownCheck(dt) {
    if (this.heat >= 1 && !this.activeChar.inVehicle && !this.activeChar.dead) {
      const nearCop = this.enemies.some(e => e.kind === 'cop' && !e.dead && Math.hypot(e.pos.x - this.activeChar.pos.x, e.pos.z - this.activeChar.pos.z) < 2.4)
        || this.policeCars.some(v => !v.dead && Math.hypot(v.pos.x - this.activeChar.pos.x, v.pos.z - this.activeChar.pos.z) < 3.0);
      if (nearCop) {
        this.arrestT += dt;
        if (this.arrestT > 1.6) this.bust();
      } else this.arrestT = Math.max(0, this.arrestT - dt * 2);
    } else this.arrestT = 0;
  }

  checkArrest(dt) {
    if (this.heat < 1 || this.activeChar.inVehicle || this.activeChar.dead) return;
    if (this.arrestT > 1.2 && this.arrestT < 1.3) this.toast('HANDS UP OR RUN', 'bad');
  }

  bust() {
    if (this.down) return;
    this.down = { kind: 'busted', t: 4.2 };
    this.stats.arrests++;
    this.showBanner('BUSTED', 'CASH AND LOOT SEIZED');
    this.el.cinema.classList.add('on');
    this.audio.pickup(false);
    this.activeChar.dead = false;
    this.input.forward = this.input.back = this.input.left = this.input.right = false;
    this.mouseDown = false;
  }

  onPlayerDeath(char) {
    if (this.down) return;
    this.down = { kind: 'wasted', t: 4.4 };
    this.showBanner('WASTED', 'CASH AND LOOT LOST');
    this.el.cinema.classList.add('on');
    char.model.root.rotation.z = Math.PI / 2;
    char.model.root.position.y = 0.3;
    this.audio.hit();
    this.mouseDown = false;
    if (char.inVehicle) {
      const v = char.inVehicle;
      v.exitSeat(char);
      char.inVehicle = null;
      char.group.visible = true;
    }
  }

  respawn(kind) {
    this.down = null;
    this.el.cinema.classList.remove('on');
    this.cash = 0; this.bags = [];
    this.heat = 0; this.suspicion = 0; this.dispatch.pending = 0; this.dispatch.t = 0;
    this.clearPolice();
    const c = this.activeChar;
    c.dead = false; c.hp = 100; c.armor = 0;
    c.model.root.rotation.z = 0; c.model.root.position.y = 0;
    c.group.visible = true;
    c.pos.set(POI.hospital.door.x, 0.27, POI.hospital.door.z + 6);
    c.heading = Math.PI;
    if (this.partner) {
      this.partner.dead = false;
      this.partner.hp = 100;
      this.partner.inVehicle = null;
      this.partner.group.visible = true;
      this.partner.pos.set(POI.hospital.door.x + 3, 0.27, POI.hospital.door.z + 6);
    }
    this.escapeTimer = 0;
    this.visualContact = false;
    this.state = 'playing';
    this.uiLocked = false;
    this.missions.failReset();
    this.updateHud();
    this.updatePhone();
    this.toast(kind === 'busted' ? 'RELEASED · NO CASH, NO LOOT' : 'PATCHED UP AT MERCY HOSPITAL', 'bad');
    this.say('LUCIA', 'You okay? We lost the cash. Bank is still clean. Get back to it.', 4.2);
    this.canvas.requestPointerLock?.();
  }

  // ---------------------------------------------------------------- camera
  updateCamera(dt) {
    const car = this.activeChar.inVehicle;
    let focus;
    if (car) {
      focus = this._tmp.set(car.pos.x, car.pos.y + 1.25, car.pos.z);
      if (this.recentMouse <= 0 && this.activeChar.seat === 'driver') {
        this.camYaw = angleLerp(this.camYaw, car.heading, Math.min(1, dt * 2.6));
      }
    } else {
      focus = this._tmp.set(this.activeChar.pos.x, this.activeChar.pos.y + 1.5, this.activeChar.pos.z);
    }
    const aiming = (this.input.aim || this.mouseDown) && this.activeChar.seat !== 'driver';
    const dist = car ? (aiming ? 5.0 : 9.2) : (aiming ? 2.15 : 4.9);
    this.camDist = lerp(this.camDist, dist, Math.min(1, dt * 7));
    const cp = this.camPitch;
    const dir = this._dir.set(Math.sin(this.camYaw) * Math.cos(cp), Math.sin(cp), Math.cos(this.camYaw) * Math.cos(cp)).normalize();
    const pos = this._tmp2.copy(focus).addScaledVector(dir, -this.camDist);
    pos.y = Math.max(pos.y, 0.55);
    if (this.inInterior) { pos.x = clamp(pos.x, 1591.4, 1608.6); pos.z = clamp(pos.z, 1592.0, 1607.8); }
    this.camera.position.lerp(pos, Math.min(1, dt * 18));
    const look = this._tmp3.copy(focus);
    if (aiming && !car) {
      const right = new THREE.Vector3(Math.cos(this.camYaw), 0, -Math.sin(this.camYaw));
      this.camera.position.addScaledVector(right, 0.62);
      look.addScaledVector(right, 0.5);
    }
    if (this.shake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.6;
      this.camera.position.z += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.pow(0.02, dt);
    }
    const kick = this.recoilKick;
    this.recoilKick = Math.max(0, this.recoilKick - dt * 2.4);
    look.y += kick * 0.5;
    this.camera.lookAt(look);
    this.camLook.copy(look);
    if (car) {
      const fx = car.pos.x + Math.sin(car.heading) * 3.2, fz = car.pos.z + Math.cos(car.heading) * 3.2;
      this.carLight.position.set(fx, 1.2, fz);
      this.carLight.intensity = this.world.nightFactor * 24 + 2;
      this.carLight2.position.set(car.pos.x, 0.5, car.pos.z);
      this.carLight2.intensity = 5 + this.world.nightFactor * 8;
      this.carLight2.color.setHex(car.isEV ? 0x38e8ff : 0xff2f8e);
    } else {
      this.carLight.intensity = 0; this.carLight2.intensity = 0;
    }
  }

  boardPartner(car) {
    if (!car) return;
    if (this.partner.inVehicle === car) return;
    const free = car.driverSeat === this.activeChar ? 'passenger' : (car.driverSeat ? 'passenger' : 'driver');
    if ((free === 'driver' && car.driverSeat) || (free === 'passenger' && car.passengerSeat)) return;
    this.partner.inVehicle = car; this.partner.seat = free;
    car.enterSeat(this.partner, free);
    this.partner.group.visible = false;
    this.partner.pos.copy(car.seatPosition(free));
  }

  isDuoInCar() {
    const car = this.activeChar.inVehicle;
    return !!(car && this.partner.inVehicle === car && car.driverSeat && car.passengerSeat);
  }

  syncCharactersToVehicle(car) {
    const a = this.activeChar;
    a.pos.copy(car.seatPosition(a.seat || 'driver'));
    a.group.position.copy(a.pos);
    a.group.visible = false;
    if (this.partner.inVehicle === car) {
      this.partner.pos.copy(car.seatPosition(this.partner.seat || 'passenger'));
      this.partner.group.position.copy(this.partner.pos);
      this.partner.group.visible = false;
    }
  }

  enterVehicle(car) {
    if (!car || car.dead) return;
    if (this.activeChar.inVehicle) return;
    if (car.locked) { this.startLockpick(car); return; }
    if (car.occupied && !car.personal) {
      if (car.police) { this.toast('NOT GETTING IN A CRUISER WITH COPS WATCHING', 'bad'); return; }
      this.startHijack(car); return;
    }
    const seat = car.driverSeat ? 'passenger' : 'driver';
    if (car.driverSeat && car.passengerSeat) { this.toast('CAR IS FULL', 'bad'); return; }
    this.activeChar.inVehicle = car;
    this.activeChar.seat = seat;
    car.enterSeat(this.activeChar, seat);
    this.activeChar.group.visible = false;
    this.activeChar.pos.copy(car.seatPosition(seat));
    if (car.traffic) { car.traffic = false; car.ai = null; }
    if (car.parked) car.parked = false;
    this.boardPartner(car);
    this.camYaw = car.heading;
    this.camPitch = -0.12;
    this.audio.ui();
    this.toast(`ENTERED · ${car.spec.name}`, 'good');
    if (car.fuel < 12) this.toast('LOW FUEL · FIND A STATION', 'bad');
    this.flags.m2car = true;
  }

  exitVehicle() {
    const car = this.activeChar.inVehicle;
    if (!car) return;
    if (Math.abs(car.speed) > 9) { this.toast('SLOW DOWN BEFORE EXITING', 'bad'); return; }
    const a = this.activeChar, p = this.partner;
    car.exitSeat(a); car.exitSeat(p);
    a.inVehicle = null; p.inVehicle = null;
    a.seat = null; p.seat = null;
    a.group.visible = true; p.group.visible = true;
    const side = 2.1;
    a.group.position.set(car.pos.x + Math.cos(car.heading) * side, 0.27, car.pos.z - Math.sin(car.heading) * side);
    p.group.position.set(car.pos.x - Math.cos(car.heading) * side, 0.27, car.pos.z + Math.sin(car.heading) * side);
    a.pos.copy(a.group.position); p.pos.copy(p.group.position);
    this.world.collideCircle(a.pos, 0.5); this.world.collideCircle(p.pos, 0.5);
    car.parked = false;
    car.parkedBrake = true;
    this.audio.ui();
    this.toast('EXITED VEHICLE', '');
  }

  enterExitVehicle() {
    if (this.uiLocked) return;
    if (this.activeChar.inVehicle) { this.exitVehicle(); return; }
    const car = this.nearestVehicle(4.2);
    if (car) this.enterVehicle(car);
    else this.toast('NO VEHICLE IN REACH', 'bad');
  }

  nearestVehicle(maxDist = 5) {
    let best = null, bd = maxDist;
    for (const v of this.vehicles) {
      if (v.dead) continue;
      const d = Math.hypot(v.pos.x - this.activeChar.pos.x, v.pos.z - this.activeChar.pos.z);
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }

  switchOrSwap() {
    if (this.uiLocked) return;
    const car = this.activeChar.inVehicle;
    if (car && this.partner.inVehicle === car) { this.swapSeats(); return; }
    this.switchCharacter();
  }

  swapSeats() {
    const car = this.activeChar.inVehicle;
    if (!car) { this.toast('GET IN A CAR TO SWAP SEATS', 'bad'); return; }
    if (this.partner.inVehicle !== car) { this.toast('LUCIA IS NOT IN THE CAR', 'bad'); return; }
    const a = this.activeChar, p = this.partner;
    const as = a.seat, ps = p.seat;
    if (!as || !ps || as === ps) { this.toast('NO FREE SEAT TO SWAP', 'bad'); return; }
    car.driverSeat = null; car.passengerSeat = null;
    a.seat = ps; p.seat = as;
    car.enterSeat(a, ps); car.enterSeat(p, as);
    this.activeChar = p; this.partner = a;
    this.activeChar.inVehicle = car; this.partner.inVehicle = car;
    this.flags.m4swap = true;
    this.showBanner(this.activeChar.name, 'REAL-TIME ROLE SWAP · ' + (ps === 'driver' ? 'YOU DRIVE' : 'YOU SHOOT'));
    this.toast(ps === 'driver' ? 'LUCIA TAKES THE WHEEL' : 'JASON TAKES THE WHEEL', 'money');
    this.audio.tick();
    this.camYaw = car.heading;
    this.updateHud();
  }

  switchCharacter() {
    if (this.activeChar.inVehicle) { this.swapSeats(); return; }
    if (this.partner.inVehicle) { this.toast('YOUR PARTNER IS DRIVING', 'bad'); return; }
    const a = this.activeChar;
    this.activeChar = this.partner;
    this.partner = a;
    this.showBanner(this.activeChar.name, 'PROTAGONIST SWITCH');
    this.toast(`NOW PLAYING AS ${this.activeChar.name}`, 'money');
    this.camYaw = this.activeChar.heading;
    this.updateHud();
  }

  partnerFollow(dt) {
    const p = this.partner, a = this.activeChar;
    if (!p || p.dead || p.inVehicle) return;
    const dx = a.pos.x - p.pos.x, dz = a.pos.z - p.pos.z;
    const d = Math.hypot(dx, dz);
    if (d > 75) { p.pos.set(a.pos.x - Math.sin(a.heading) * 2, 0.27, a.pos.z - Math.cos(a.heading) * 2); return; }
    if (d > 2.6 && !a.inVehicle) {
      const nx = dx / d, nz = dz / d;
      const sp = d > 10 ? 7.4 : 4.4;
      p.pos.x += nx * sp * dt; p.pos.z += nz * sp * dt;
      p.heading = Math.atan2(nx, nz);
      p.speed = sp;
      this.world.collideCircle(p.pos, 0.45);
      p.animate(dt, true, this.world);
      p.phase += dt * 6;
    } else {
      p.heading = a.heading;
      p.animate(dt, false, this.world);
      p.speed = 0;
    }
    p.group.rotation.y = p.heading;
  }

  partnerAutoDrive(car, dt) {
    const marker = this.missions?.marker;
    let tx, tz;
    if (marker) { tx = marker.x; tz = marker.z; }
    else { tx = car.pos.x + Math.sin(car.heading) * 65; tz = car.pos.z + Math.cos(car.heading) * 65; }
    const dx = tx - car.pos.x, dz = tz - car.pos.z;
    const dist = Math.hypot(dx, dz);
    const desired = Math.atan2(dx, dz);
    let diff = ((desired - car.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
    car._stuckT = car._stuckT || 0;
    if (Math.abs(car.speed) < 1 && Math.abs(diff) < 1.2) car._stuckT += dt; else car._stuckT = 0;
    const reverse = car._stuckT > 1.5;
    let throttle = 0, brake = 0, steer = 0;
    if (reverse) { throttle = -1; steer = -Math.sign(diff) || 0.5; if (car._stuckT > 3) car._stuckT = 0; }
    else {
      const wanted = dist < 14 ? 0 : Math.abs(diff) > 1 ? 6 : (dist < 40 ? 11 : 19);
      throttle = car.speed < wanted ? 0.95 : 0;
      brake = car.speed > wanted + 6 ? 1 : 0;
      steer = clamp(diff * 1.7, -1, 1);
    }
    car._autoControls = { throttle, brake, steer, handbrake: false };
  }

  partnerAutoShoot(dt, car) {
    this.partnerShootT = (this.partnerShootT || 0) - dt;
    if (this.partnerShootT > 0) return;
    let target = null, bd = 55;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.pos.x - car.pos.x, e.pos.z - car.pos.z);
      if (d < bd) { bd = d; target = e; }
    }
    if (!target) return;
    this.partnerShootT = 0.85 + Math.random() * 0.5;
    this.audio.shot('smg');
    const from = new THREE.Vector3(car.pos.x, 1.2, car.pos.z);
    const to = new THREE.Vector3(target.pos.x, 1.3, target.pos.z);
    this.addTracer(from, to, 0xfff2a0);
    if (Math.random() < 0.62) target.damage(14, this, false);
  }

  // ---------------------------------------------------------------- combat
  attemptShoot() {
    if (this.state !== 'playing' || this.uiLocked || this.down) return;
    const car = this.activeChar.inVehicle;
    if (car && this.activeChar.seat === 'driver') {
      if ((this.hornWarnT || 0) < this.time) {
        this.hornWarnT = this.time + 2;
        this.toast('SWAP SEATS TO SHOOT · X', 'bad');
      }
      return;
    }
    const focus = this.focus ? 0.5 : 1;
    const aim = this.input.aim ? 0.55 : 1;
    const moved = this.activeChar.speed > 1 ? 1.35 : 1;
    this.activeChar.shoot(this, focus * aim * moved);
    this.recoilKick += this.activeChar.weaponDef.recoil * 2.2;
    this.spread = Math.min(1, (this.spread || 0) + this.activeChar.weaponDef.recoil * 12);
  }

  updatePlayerShoot(dt) {
    this.spread = Math.max(0, (this.spread || 0) - dt * 1.6);
    if (this.activeChar.inVehicle) {
      const a = this.activeChar;
      a.fireCooldown = Math.max(0, a.fireCooldown - dt);
      if (a.reloading) {
        a.reloadT -= dt;
        if (a.reloadT <= 0) {
          const w = a.weaponDef;
          const need = w.mag - w.magAmmo;
          const take = Math.min(need, w.reserveAmmo);
          w.magAmmo += take; w.reserveAmmo -= take;
          a.reloading = false;
          this.updateHud();
        }
      }
    }
    if (!this.uiLocked && (this.mouseDown || this.touchFire)) this.attemptShoot();
  }

  fireBullet(char, weapon, spreadMult = 1) {
    const ro = this.camera.position.clone();
    const baseDir = new THREE.Vector3();
    this.camera.getWorldDirection(baseDir);
    const pellets = weapon.pellets || 1;
    for (let p = 0; p < pellets; p++) {
      const dir = baseDir.clone();
      const spread = weapon.spread * spreadMult * (1 + this.spread * 0.8);
      dir.x += (Math.random() - 0.5) * spread * 2;
      dir.y += (Math.random() - 0.5) * spread * 2;
      dir.z += (Math.random() - 0.5) * spread * 2;
      dir.normalize();
      const hit = this.traceShot(ro, dir, weapon, char);
      const end = ro.clone().addScaledVector(dir, hit ? hit.t : weapon.range);
      this.addTracer(ro.clone().addScaledVector(dir, 0.8), end, 0xfff0b0);
    }
    this.addMuzzleFlash(ro.clone().addScaledVector(baseDir, 1.4));
    this.shake = Math.max(this.shake, weapon.recoil * 2.5);
    // peds react to gunfire
    for (const ped of this.peds) {
      if (ped.dead) continue;
      if (Math.hypot(ped.group.position.x - char.pos.x, ped.group.position.z - char.pos.z) < 42) ped.flee = true;
    }
  }

  traceShot(ro, dir, weapon, shooter) {
    let best = null;
    const consider = (t, kind, obj, head) => {
      if (t === null || t < 0 || t > weapon.range) return;
      if (!best || t < best.t) best = { t, kind, obj, head };
    };
    const chest = new THREE.Vector3(), head = new THREE.Vector3();
    for (const e of this.enemies) {
      if (e.dead) continue;
      chest.set(e.pos.x, e.pos.y + 1.25, e.pos.z);
      head.set(e.pos.x, e.pos.y + 1.87, e.pos.z);
      consider(raySphere(ro, dir, head, 0.28), 'enemy', e, true);
      consider(raySphere(ro, dir, chest, 0.48), 'enemy', e, false);
    }
    for (const ped of this.peds) {
      if (ped.dead) continue;
      chest.set(ped.group.position.x, 1.2, ped.group.position.z);
      consider(raySphere(ro, dir, chest, 0.45), 'ped', ped, false);
    }
    for (const v of this.vehicles) {
      if (v.dead || v === this.activeChar.inVehicle) continue;
      const c = new THREE.Vector3(v.pos.x, v.pos.y + 0.85, v.pos.z);
      consider(raySphere(ro, dir, c, 1.55), 'vehicle', v, false);
    }
    for (const b of this.world.colliders) {
      consider(rayBox(ro, dir, b), 'world', b, false);
    }
    if (dir.y < -0.01) {
      const t = -ro.y / dir.y;
      if (t > 0) consider(t, 'ground', null, false);
    }
    if (!best) return null;
    const hitPoint = ro.clone().addScaledVector(dir, best.t);
    if (best.kind === 'enemy') {
      const e = best.obj;
      const dmg = weapon.damage * (best.head ? weapon.head : 1);
      e.damage(dmg, this, best.head);
      this.hitMarker(best.head ? 1 : 0);
      this.audio.hit();
      this.addBlood(hitPoint);
      if (shooter === this.activeChar) this.profile.violence = Math.min(100, this.profile.violence + (best.head ? 3 : 1.2));
    } else if (best.kind === 'ped') {
      this.killPed(best.obj, shooter);
      this.addBlood(hitPoint);
    } else if (best.kind === 'vehicle') {
      best.obj.damage(weapon.damage * 1.7, this);
      this.addSpark(hitPoint);
      if (best.obj.traffic && best.obj.driver) {
        // panic driver
        best.obj.aiTarget = { x: best.obj.pos.x - dir.x * 120, z: best.obj.pos.z - dir.z * 120 };
      }
    } else if (best.kind === 'world') {
      this.addSpark(hitPoint);
    } else {
      this.addSpark(hitPoint);
    }
    return { t: best.t, kind: best.kind, obj: best.obj };
  }

  enemyShoot(enemy, dist) {
    if (this.down) return;
    const car = this.activeChar.inVehicle;
    const from = new THREE.Vector3(enemy.pos.x, 1.6, enemy.pos.z);
    const to = new THREE.Vector3(this.activeChar.pos.x, 1.25, this.activeChar.pos.z);
    this.audio.shot('pistol');
    this.addTracer(from, to, 0xffb060);
    const baseAcc = enemy.kind === 'cop' ? 0.56 : 0.44;
    const acc = clamp(baseAcc - dist / 190 + this.profile.violence * -0.001, 0.12, 0.72);
    if (Math.random() < acc) {
      if (car) {
        car.damage(7, this);
        to.y = 1.1;
        this.addSpark(to);
        if (Math.random() < 0.35) this.activeChar.damage(4, this, enemy);
        this.toast('TAKING FIRE', 'bad');
      } else {
        this.activeChar.damage(enemy.kind === 'cop' ? 9 : 7, this, enemy);
        this.addBlood(to);
      }
    } else {
      const miss = to.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, 0.5, (Math.random() - 0.5) * 3));
      this.addTracer(from, miss, 0xffb060);
    }
  }

  killPed(p, shooter) {
    if (p.dead) return;
    p.dead = true;
    p.group.rotation.x = -Math.PI / 2;
    p.group.position.y = 0.4;
    this.corpses.push({ x: p.group.position.x, z: p.group.position.z, obj: p.group });
    this.profile.violence = Math.min(100, this.profile.violence + 6);
    this.profile.notoriety = Math.min(100, this.profile.notoriety + 3);
    this.stats.kills++;
    const witnesses = this.countWitnesses();
    if (witnesses > 0) this.reportCrime(1, { label: 'CIVILIAN DOWN', witnessed: true, delay: 6 });
    else this.toast('NO WITNESSES · HEAT AVOIDED', 'good');
  }

  countWitnesses() {
    let n = 0;
    for (const p of this.peds) {
      if (p.dead) continue;
      if (Math.hypot(p.group.position.x - this.activeChar.pos.x, p.group.position.z - this.activeChar.pos.z) < 45) n++;
    }
    return n;
  }

  onEnemyKilled(e, headshot) {
    this.stats.kills++;
    this.profile.violence = Math.min(100, this.profile.violence + (e.kind === 'cop' ? 10 : 6));
    this.profile.notoriety = Math.min(100, this.profile.notoriety + 8);
    this.corpses.push({ x: e.pos.x, z: e.pos.z, obj: e.group });
    if (this.corpses.length > 18) {
      const old = this.corpses.shift();
      if (old.obj) this.scene.remove(old.obj);
    }
    if (e.kind === 'cop') {
      this.heat = clamp(Math.max(this.heat + 0.8, 1), 0, 5);
      this.escapeTimer = 0;
      this.toast('OFFICER DOWN · HEAT RISING', 'bad');
    } else {
      this.cash += 45 + Math.floor(Math.random() * 80);
      this.toast(`DROPPED ${fmt(45)} · VIOLENCE +`, 'money');
    }
    this.hitMarker(headshot ? 2 : 1);
  }

  // ---------------------------------------------------------------- police & heat
  reportCrime(severity, opts = {}) {
    const witnessed = opts.force ? true : (opts.witnessed !== false && this.countWitnesses() > 0);
    this.profile.notoriety = Math.min(100, this.profile.notoriety + severity * 4);
    this.profile.violence = Math.min(100, this.profile.violence + severity * 1.5);
    if (!witnessed) {
      this.toast(`${opts.label || 'CRIME'} · NO WITNESSES`, 'good');
      return;
    }
    this.profile.witnesses = Math.min(100, this.profile.witnesses + severity * 10);
    if (opts.immediate) {
      this.heat = clamp(Math.max(this.heat, severity), 0, 5);
      this.escapeTimer = 0;
      this.spawnCopWave(Math.ceil(severity / 2) + 1, true);
      this.toast(`${opts.label || 'CRIME'} · DISPATCH CONFIRMED`, 'bad');
      return;
    }
    this.suspicion = clamp(this.suspicion + severity, 0, 5);
    const delay = opts.delay ?? 6;
    this.dispatch.pending = Math.max(this.dispatch.pending, delay);
    this.dispatch.severity = Math.max(this.dispatch.severity, this.suspicion);
    this.dispatch.label = opts.label || 'CRIME';
    for (const p of this.peds) {
      if (!p.dead && Math.hypot(p.group.position.x - this.activeChar.pos.x, p.group.position.z - this.activeChar.pos.z) < 48) p.flee = true;
    }
    this.toast(`${opts.label || 'CRIME'} WITNESSED · CALLS IN ${Math.ceil(delay)}s`, 'bad');
    if (this.flags.m2stolen) this.flags.m2dispatched = true;
  }

  setHeat(n, confirmed = false) {
    this.heat = clamp(Math.max(this.heat, n), 0, 5);
    if (confirmed) {
      this.suspicion = 0;
      this.dispatch.pending = 0;
      this.escapeTimer = 0;
    }
    this.updateHud();
  }

  spawnCopWave(n = 2, surround = false) {
    for (let i = 0; i < n; i++) this.spawnPoliceCar(surround ? i : undefined);
  }

  spawnPoliceCar(forcedAngle) {
    if (this.policeCars.filter(v => !v.dead).length >= 6) return null;
    const a = forcedAngle !== undefined ? (forcedAngle / 3) * Math.PI * 2 + Math.random() * 0.5 : Math.random() * Math.PI * 2;
    const dist = 95 + Math.random() * 60;
    let x = this.activeChar.pos.x + Math.cos(a) * dist;
    let z = this.activeChar.pos.z + Math.sin(a) * dist;
    x = Math.round(x / 80) * 80 + (Math.random() > 0.5 ? 4 : -4);
    z = Math.round(z / 80) * 80 + (Math.random() > 0.5 ? 4 : -4);
    if (Math.hypot(x, z) > 560) { x = 0; z = this.activeChar.pos.z + 120; }
    const heading = Math.atan2(this.activeChar.pos.x - x, this.activeChar.pos.z - z);
    const v = new Vehicle('police', this.scene, { x, z, heading, occupied: false, policeSpawn: true });
    v.police = true; v.policeAI = true; v.deployed = false; v.shootT = 1 + Math.random();
    v.despawnT = 0;
    this.vehicles.push(v);
    this.policeCars.push(v);
    return v;
  }

  deployCops(car) {
    if (car.deployed) return;
    car.deployed = true;
    for (let i = 0; i < 2; i++) {
      const ox = Math.cos(car.heading) * (1.8 + i * 0.8) * (i ? -1 : 1);
      const oz = -Math.sin(car.heading) * (1.8 + i * 0.8) * (i ? -1 : 1);
      const e = new Enemy(this.scene, car.pos.x + ox, car.pos.z + oz, 'cop', this);
      e.aggro = true;
      this.enemies.push(e);
      this.police.push(e);
    }
  }

  updatePolice(dt) {
    // suspicion -> dispatch
    if (this.dispatch.pending > 0) {
      this.dispatch.pending -= dt;
      if (this.dispatch.pending <= 0) {
        const sev = Math.max(1, Math.min(5, this.dispatch.severity));
        this.suspicion = 0;
        this.heat = clamp(Math.max(this.heat, sev), 0, 5);
        this.escapeTimer = 0;
        this.toast('DISPATCH CONFIRMED · UNITS EN ROUTE', 'bad');
        if (this.flags.m2stolen) this.flags.m2dispatched = true;
        this.dispatch.severity = 0;
        this.spawnCopWave(Math.ceil(sev / 2) + 1, true);
      }
    }
    // line of sight from police
    let seen = false;
    const px = this.activeChar.pos.x, pz = this.activeChar.pos.z;
    for (const car of this.policeCars) {
      if (car.dead) continue;
      const d = Math.hypot(car.pos.x - px, car.pos.z - pz);
      if (d < 70 && !this.world.lineBlocked(car.pos.x, car.pos.z, px, pz)) { seen = true; break; }
    }
    if (!seen) {
      for (const e of this.police) {
        if (e.dead) continue;
        const d = Math.hypot(e.pos.x - px, e.pos.z - pz);
        if (d < 58 && !this.world.lineBlocked(e.pos.x, e.pos.z, px, pz)) { seen = true; break; }
      }
    }
    if (this.heat > 0 && this.suspicion > 0 && seen) { /* confirmed sighting below */ }
    this.visualContact = seen && (this.heat > 0.01 || this.suspicion > 0.01);
    if (this.heat > 0) {
      if (seen) this.escapeTimer = 0;
      else {
        this.escapeTimer += dt;
        if (this.escapeTimer > 3.5) {
          this.heat = Math.max(0, this.heat - dt * 0.115);
          this.suspicion = Math.max(0, this.suspicion - dt * 0.08);
          if (this.heat <= 0.005) {
            this.heat = 0;
            if (!this.heatLostShown) {
              this.heatLostShown = true;
              this.toast('HEAT LOST · LAY LOW', 'good');
              this.audio.pickup(true);
            }
          }
        }
      }
      if (this.heat > 0.01) this.heatLostShown = false;
    } else {
      this.escapeTimer = 0;
      if (this.suspicion <= 0.01 && this.dispatch.pending <= 0) this.heatLostShown = false;
    }
    if (this.dispatch.pending <= 0) this.suspicion = Math.max(0, this.suspicion - dt * 0.12);

    // spawn / maintain units
    this.copSpawnT -= dt;
    const severityBonus = Math.floor(this.profile.violence / 35);
    const desired = this.heat > 0.01 ? clamp(Math.ceil(this.heat / 1.5) + severityBonus, 1, 5) : 0;
    const live = this.policeCars.filter(v => !v.dead);
    if (this.heat > 0.01 && live.length < desired && this.copSpawnT <= 0) {
      this.spawnPoliceCar();
      this.copSpawnT = 2.8 - Math.min(1.2, this.heat * 0.25);
    }
    for (const car of this.policeCars) {
      if (car.dead) { car.despawnT += dt; if (car.despawnT > 2) car.mesh.visible = false; continue; }
      if (this.heat <= 0.01 && this.escapeTimer > 2.5) {
        car.despawnT += dt;
        if (car.despawnT > 9) { this.removeVehicle(car); continue; }
      }
      const dx = px - car.pos.x, dz = pz - car.pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist > 230) { this.removeVehicle(car); continue; }
      const desiredH = Math.atan2(dx, dz);
      let diff = ((desiredH - car.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      car._stuckT = (car._stuckT || 0) + (Math.abs(car.speed) < 1 ? dt : -dt * 2);
      let throttle = 0, brake = 0, steer = 0;
      if (car._stuckT > 2) { throttle = -1; steer = -Math.sign(diff) || 0.4; if (car._stuckT > 4) car._stuckT = 0; }
      else {
        const wanted = dist < 18 ? 0 : dist < 45 ? 11 : 27;
        throttle = car.speed < wanted ? 0.95 : 0;
        brake = car.speed > wanted + 7 ? 1 : 0;
        steer = clamp(diff * 1.9, -1, 1);
      }
      car.update(dt, { throttle, brake, steer, handbrake: false }, this.world, this.time, this);
      if (dist < 30) this.deployCops(car);
      // drive-by shots
      car.shootT -= dt;
      if (dist < 46 && car.shootT <= 0 && this.heat > 0) {
        car.shootT = 1.25 + Math.random() * 0.8;
        this.audio.shot('pistol');
        const from = new THREE.Vector3(car.pos.x, 1.5, car.pos.z);
        const to = new THREE.Vector3(this.activeChar.pos.x, 1.1, this.activeChar.pos.z);
        this.addTracer(from, to, 0xffb060);
        if (Math.random() < 0.5) {
          if (this.activeChar.inVehicle) { this.activeChar.inVehicle.damage(5, this); this.activeChar.damage(2, this); }
          else this.activeChar.damage(6, this);
          this.addSpark(to);
        }
      }
    }
    // cops on foot cleanup
    for (const e of this.police) {
      if (e.dead) continue;
      const d = Math.hypot(e.pos.x - this.activeChar.pos.x, e.pos.z - this.activeChar.pos.z);
      if (this.heat <= 0.01 && d > 55) e.dead = true;
    }
    // update siren based on nearest cruiser
    let nearest = 999;
    for (const c of this.policeCars) if (!c.dead) nearest = Math.min(nearest, Math.hypot(c.pos.x - px, c.pos.z - pz));
    const sirenVol = this.heat > 0.01 ? clamp(1 - nearest / 160, 0, 1) : 0;
    this.audio.setSiren(sirenVol, this.time);
  }

  removeVehicle(v) {
    v.dead = true; v.mesh.visible = false;
    this.policeCars = this.policeCars.filter(x => x !== v);
    this.vehicles = this.vehicles.filter(x => x !== v);
    this.scene.remove(v.mesh);
  }

  clearPolice() {
    for (const v of this.policeCars) { this.scene.remove(v.mesh); this.vehicles = this.vehicles.filter(x => x !== v); }
    for (const e of this.police) { this.scene.remove(e.group); this.enemies = this.enemies.filter(x => x !== e); }
    this.policeCars = [];
    this.police = [];
    this.audio.setSiren(0, this.time);
  }

  explodeVehicle(v) {
    if (v.exploded) return;
    v.exploded = true; v.dead = true;
    this.audio.explosion();
    this.shake = Math.max(this.shake, 1.4);
    const p = v.pos.clone();
    this.boomLight.position.set(p.x, 2, p.z);
    this.boomLight.intensity = 120;
    const flash = new THREE.Mesh(new THREE.SphereGeometry(1.8, 14, 10), new THREE.MeshBasicMaterial({ color: 0xffb060, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    flash.position.copy(p); flash.position.y = 1.2; this.scene.add(flash);
    this.effects.push({ mesh: flash, life: 0.6, max: 0.6, type: 'fire' });
    for (let i = 0; i < 9; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.6 + Math.random() * 0.8, 8, 6), new THREE.MeshBasicMaterial({ color: 0x2a2a2e, transparent: true, opacity: 0.55, depthWrite: false }));
      s.position.set(p.x + (Math.random() - 0.5) * 2, 1 + Math.random(), p.z + (Math.random() - 0.5) * 2);
      this.scene.add(s);
      this.effects.push({ mesh: s, life: 2.4 + Math.random() * 2, max: 3.5, type: 'smoke', vy: 1 + Math.random() * 1.5, vx: (Math.random() - 0.5), vz: (Math.random() - 0.5) });
    }
    if (v.police) {
      this.policeKills++;
      this.profile.notoriety = Math.min(100, this.profile.notoriety + 6);
    }
    if (this.vehicles.includes(v)) { this.vehicles = this.vehicles.filter(x => x !== v); }
    if (this.policeCars.includes(v)) { this.policeCars = this.policeCars.filter(x => x !== v); }
    if (v.driverSeat === this.activeChar) this.activeChar.damage(100, this);
    // blast damage
    for (const e of this.enemies) {
      if (!e.dead && Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < 8) e.damage(80, this, false);
    }
    for (const ped of this.peds) {
      if (!ped.dead && Math.hypot(ped.group.position.x - p.x, ped.group.position.z - p.z) < 8) this.killPed(ped, this.activeChar);
    }
    setTimeout(() => { v.mesh.visible = false; }, 2200);
  }

  spawnSmoke(v) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.28 + Math.random() * 0.3, 7, 5), new THREE.MeshBasicMaterial({ color: 0x333338, transparent: true, opacity: 0.4, depthWrite: false }));
    s.position.set(v.pos.x + (Math.random() - 0.5), 1, v.pos.z + (Math.random() - 0.5));
    this.scene.add(s);
    this.effects.push({ mesh: s, life: 1.6, max: 1.6, type: 'smoke', vy: 1.6, vx: 0.2, vz: 0.2 });
  }

  addTracer(from, to, color = 0xfff0b0) {
    const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.effects.push({ mesh: line, life: 0.075, max: 0.075, type: 'tracer' });
  }

  addMuzzleFlash(pos) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.13, 7, 5), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(pos); this.scene.add(m);
    this.effects.push({ mesh: m, life: 0.06, max: 0.06, type: 'tracer' });
  }

  addBlood(pos) {
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 3), new THREE.MeshBasicMaterial({ color: 0x8a1020, transparent: true, opacity: 0.8 }));
      m.position.copy(pos);
      this.scene.add(m);
      this.effects.push({ mesh: m, life: 0.4, max: 0.4, type: 'tracer' });
    }
  }

  addSpark(pos) {
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.035, 3, 3), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
      m.position.copy(pos);
      this.scene.add(m);
      this.effects.push({ mesh: m, life: 0.18, max: 0.18, type: 'spark', vx: (Math.random() - .5) * 4, vy: Math.random() * 4, vz: (Math.random() - .5) * 4 });
    }
  }

  updateEffects(dt) {
    this.boomLight.intensity = Math.max(0, this.boomLight.intensity - dt * 300);
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= dt;
      if (e.life <= 0) {
        this.scene.remove(e.mesh);
        if (e.mesh.geometry) e.mesh.geometry.dispose?.();
        if (e.mesh.material) e.mesh.material.dispose?.();
        this.effects.splice(i, 1);
        continue;
      }
      const k = e.life / e.max;
      if (e.type === 'tracer' || e.type === 'fire') e.mesh.material.opacity = k;
      if (e.type === 'fire') e.mesh.scale.setScalar(1 + (1 - k) * 2.2);
      if (e.type === 'smoke') {
        e.mesh.material.opacity = 0.5 * k;
        e.mesh.position.y += (e.vy || 1) * dt;
        e.mesh.position.x += (e.vx || 0) * dt;
        e.mesh.position.z += (e.vz || 0) * dt;
        e.mesh.scale.setScalar(1 + (1 - k) * 3);
      }
      if (e.type === 'spark') {
        e.mesh.material.opacity = k;
        e.mesh.position.x += (e.vx || 0) * dt;
        e.mesh.position.y += (e.vy || 0) * dt;
        e.mesh.position.z += (e.vz || 0) * dt;
        e.vy -= 9 * dt;
      }
    }
    this.shake = Math.max(0, this.shake - dt * 1.6);
    this.el.damageVig.style.opacity = String(clamp((1 - this.activeChar.hp / 100) * 1.2 + (this.lastDamage > 0 ? 0.35 : 0), 0, 0.9));
  }

  hitMarker(level) {
    this.el.hitflash.style.opacity = '0.16';
    setTimeout(() => { this.el.hitflash.style.opacity = '0'; }, 60);
    this.el.crosshair.classList.add('enemy');
    clearTimeout(this.crossT);
    this.crossT = setTimeout(() => this.el.crosshair.classList.remove('enemy'), 180);
  }

  // ---------------------------------------------------------------- interactions
  updateInteractions(dt) {
    if (!this.promptCandidate) this.promptCandidate = null;
    if (this.uiLocked || this.down) { this.el.prompt.classList.remove('show'); return; }
    const a = this.activeChar;
    let cand = null;
    const inCar = a.inVehicle;

    if (this.inInterior) {
      const back = Math.hypot(a.pos.x - 1600, a.pos.z - 1592.6);
      const front = Math.hypot(a.pos.x - 1600, a.pos.z - 1607.4);
      if (back < 2.4) cand = { key: 'E', text: 'Take rear exit', action: () => this.exitInterior('back') };
      else if (front < 2.4) cand = { key: 'E', text: 'Exit to the front', action: () => this.exitInterior('front') };
      this.showInteraction(cand, dt);
      return;
    }

    if (inCar) {
      const car = inCar;
      const pumpDist = Math.min(...this.world.pumps.map(p => Math.hypot(car.pos.x - p.x, car.pos.z - p.z)));
      const chargerDist = Math.hypot(car.pos.x - POI.charger.x, car.pos.z - POI.charger.z);
      if (pumpDist < 9.5) {
        cand = { key: 'E', text: `Refuel & repair · $60`, action: () => this.buyFuel(car, 'fuel') };
      } else if (car.isEV && chargerDist < 13) {
        cand = { key: 'E', text: `Charge & repair · $40`, action: () => this.buyFuel(car, 'charge') };
      } else if (Math.abs(car.speed) < 1.2 && car === this.personalCar) {
        cand = { key: 'F', text: 'Exit · T trunk', action: null, hintOnly: true };
      }
      if (cand) this.showInteraction(cand, dt);
      else this.el.prompt.classList.remove('show');
      return;
    }

    // on foot priorities
    const px = a.pos.x, pz = a.pos.z;
    const near = (x, z, r) => Math.hypot(px - x, pz - z) < r;
    if (this.duffelVisible && near(this.duffel.position.x, this.duffel.position.z, 4.2)) {
      cand = { key: 'E', text: 'Grab the duffel', action: () => this.collectDuffel() };
    } else if (near(POI.motel.door.x, POI.motel.door.z, 7)) {
      cand = { key: 'E', text: 'Enter Palm Shade Motel', action: () => this.enterInterior() };
    } else if (near(POI.store.door.x, POI.store.door.z, 8.5) && !this.storeLooted) {
      cand = { key: 'E', text: 'Hold E · rob the register', hold: 2.6, need: 2.6, action: () => this.robStore() };
    } else if (near(POI.bank.door.x, POI.bank.door.z, 9) && this.missions.index === 4 && this.missions.step === 1 && !this.bankLooted) {
      cand = { key: 'E', text: 'Hold E · crack the vault', hold: 5.0, need: 5.0, action: () => this.robBank() };
    } else if (near(POI.pawn.door.x, POI.pawn.door.z, 7)) {
      const count = this.totalBags();
      if (count > 0) cand = { key: 'E', text: `Fence ${count} duffel${count > 1 ? 's' : ''} · ${fmt(this.totalLootValue())}`, action: () => this.fenceLoot() };
      else cand = { key: 'E', text: 'Pawn & Pwn · no loot', action: () => this.toast('BRING ME DUFFEL BAGS, NOT EXCUSES', 'bad') };
    } else if (near(POI.hospital.door.x, POI.hospital.door.z, 8)) {
      cand = { key: 'E', text: this.activeChar.hp < 90 ? 'Patch up · $50' : 'Mercy Hospital', action: () => this.hospitalHeal() };
    } else {
      const car = this.nearestVehicle(4.4);
      if (car) {
        let text;
        if (car.locked) text = `Hotwire ${car.spec.name}`;
        else if (car.occupied && !car.personal) text = `Hijack ${car.spec.name}`;
        else text = `Enter ${car.spec.name}`;
        if (car === this.personalCar) text += ' · T trunk';
        cand = { key: 'E', text, action: () => this.enterVehicle(car) };
      } else if (this.corpses.length) {
        const nearBody = this.corpses.find(b => Math.hypot(b.x - px, b.z - pz) < 5);
        if (nearBody) cand = { key: 'E', text: 'Conceal body in trunk', action: () => this.concealBody(false) };
      }
    }
    // nearest locked/hijack car when no mission prop near
    this.showInteraction(cand, dt);
  }

  showInteraction(cand, dt) {
    if (!cand) { this.el.prompt.classList.remove('show'); this.holdT = 0; this.promptCandidate = null; return; }
    this.promptCandidate = cand;
    if (cand.hintOnly) {
      this.el.promptKey.textContent = cand.key;
      this.el.promptText.textContent = cand.text;
      this.el.prompt.classList.add('show');
      return;
    }
    if (cand.hold) {
      if (this.input.interact) this.holdT = (this.holdT || 0) + dt;
      else this.holdT = Math.max(0, (this.holdT || 0) - dt * 3);
      const pct = Math.round(clamp((this.holdT || 0) / cand.need, 0, 1) * 100);
      this.el.promptKey.textContent = cand.key;
      this.el.promptText.textContent = `${cand.text.replace('Hold E · ', '')} · ${pct}%`;
      this.el.prompt.classList.add('show');
      if (this.holdT >= cand.need) { this.holdT = 0; cand.action(); this.input.interactPressed = false; }
      return;
    }
    this.holdT = 0;
    this.el.promptKey.textContent = cand.key;
    this.el.promptText.textContent = cand.text;
    this.el.prompt.classList.add('show');
    if (this.input.interactPressed) { cand.action(); this.input.interactPressed = false; }
  }

  buyFuel(car, kind) {
    const cost = kind === 'charge' ? 40 : 60;
    if (this.cash < cost) { this.toast(`NEED ${fmt(cost)} CASH`, 'bad'); return; }
    this.cash -= cost;
    if (kind === 'charge') car.fuel = Math.min(car.maxFuel, car.fuel + 100);
    else car.refuel(this.world, 100, this);
    car.health = 100;
    this.flags.m1refuel = true;
    this.audio.pickup(true);
    this.toast(`${kind === 'charge' ? 'CHARGED' : 'REFUELED'} · BODY REPAIRED · -${fmt(cost)}`, 'good');
    this.updateHud();
  }

  robStore() {
    if (this.storeLooted) return;
    this.storeLooted = true;
    const take = 280 + Math.floor(Math.random() * 220);
    this.cash += take;
    this.flags.m2stolen = true;
    this.audio.pickup(true);
    this.toast(`REGISTER CLEANED · +${fmt(take)} CASH`, 'money');
    this.reportCrime(2, { label: 'ARMED ROBBERY', witnessed: 'force', force: true, delay: 5.5 });
    this.profile.notoriety = Math.min(100, this.profile.notoriety + 12);
    this.updateHud();
  }

  robBank() {
    if (this.bankLooted) return;
    this.bankLooted = true;
    const take = 2600;
    this.cash += take;
    this.bags.push(1900, 2350, 2100, 2500);
    this.flags.m5vault = true;
    this.audio.alarm();
    this.audio.pickup(true);
    this.toast(`VAULT OPEN · ${fmt(take)} CASH + 4 DUFFELS`, 'money');
    this.setHeat(4, true);
    this.spawnCopWave(4, true);
    this.updateHud();
  }

  fenceLoot() {
    const total = this.totalLootValue();
    const count = this.totalBags();
    if (!count) return;
    this.bags = [];
    if (this.personalCar.trunkBags) this.personalCar.trunkBags = [];
    this.cash += total;
    this.flags.m3fenced = true;
    this.audio.pickup(true);
    this.toast(`FENCED ${count} DUFFEL${count > 1 ? 'S' : ''} · +${fmt(total)} CASH`, 'money');
    this.profile.notoriety = Math.min(100, this.profile.notoriety + 5);
    this.updateHud();
    if (this.missions.index === 2) this.say('LUCIA', 'Now that is what I call a clean transaction.', 3);
  }

  totalBags() { return this.bags.length + (this.personalCar.trunkBags?.length || 0); }
  totalLootValue() { return this.bags.reduce((a, b) => a + b, 0) + (this.personalCar.trunkBags || []).reduce((a, b) => a + b, 0); }

  collectDuffel() {
    if (!this.duffelVisible) return;
    const value = 1850;
    this.duffel.visible = false;
    this.duffelVisible = false;
    this.bags.push(value);
    this.flags.m3bag = true;
    this.audio.pickup(true);
    this.toast(`DUFFEL SECURED · ${fmt(value)} RAW LOOT`, 'money');
    this.updateHud();
    this.say('LUCIA', 'Do not open it in the street. Trunk. Now.', 3.2);
  }

  hospitalHeal() {
    if (this.activeChar.hp >= 99 && this.activeChar.armor >= 90) { this.toast('YOU LOOK FINE TO ME', ''); return; }
    if (this.cash < 50) { this.toast('NEED $50 CASH', 'bad'); return; }
    this.cash -= 50;
    this.activeChar.hp = 100;
    this.activeChar.armor = Math.min(100, this.activeChar.armor + 25);
    this.audio.pickup(true);
    this.toast('PATCHED UP · -$50', 'good');
    this.updateHud();
  }

  enterInterior() {
    if (this.inInterior) return;
    if (this.activeChar.inVehicle) { this.toast('EXIT THE VEHICLE FIRST', 'bad'); return; }
    this.savedPos = { a: this.activeChar.pos.clone(), p: this.partner.pos.clone() };
    this.inInterior = true;
    this.world.setInterior(true);
    const a = this.activeChar, p = this.partner;
    a.pos.set(1600, 0.27, 1604.2); a.heading = Math.PI;
    p.pos.set(1598.4, 0.27, 1602.4); p.heading = Math.PI;
    a.group.visible = true; p.group.visible = true;
    a.group.position.copy(a.pos); p.group.position.copy(p.pos);
    this.camYaw = Math.PI; this.camPitch = -0.1;
    this.camera.position.set(1600, 2.6, 1611);
    this.world.hour = this.world.hour;
    this.audio.ui();
    this.toast('PALM SHADE MOTEL · ROOM 6 · TWO EXITS', '');
    this.say('BUYER', 'Close the door. The money is in the bag. Where is the product?', 4);
    this.say('JASON', 'Easy. We do this the quiet way.', 3.4);
  }

  exitInterior(kind) {
    if (!this.inInterior) return;
    this.inInterior = false;
    this.world.setInterior(false);
    const a = this.activeChar, p = this.partner;
    if (kind === 'back') {
      a.pos.set(-120, 0.27, 203.4); p.pos.set(-116.5, 0.27, 203.4);
      a.heading = 0; p.heading = 0;
      this.flags.m4rear = true;
      this.toast('REAR EXIT · STAY LOW', 'good');
      this.say('LUCIA', 'Rear alley. They are all watching the front.', 3.4);
    } else {
      a.pos.set(-120, 0.27, 238.5); p.pos.set(-116.5, 0.27, 238.5);
      a.heading = 0; p.heading = 0;
      this.toast('FRONT EXIT · SMILE FOR THE CAMERAS', '');
    }
    a.group.position.copy(a.pos); p.group.position.copy(p.pos);
    this.camYaw = 0; this.camPitch = -0.16;
    this.camera.position.set(a.pos.x, 3, a.pos.z + 6);
    this.audio.ui();
  }

  // ---------------------------------------------------------------- mission bridge
  updateMissionHud(m, s, dist) {
    if (!m) {
      if (this.freeRoam) {
        this.el.missionKicker.textContent = 'FREE ROAM';
        this.el.missionObj.textContent = 'Leonida is yours. Rob, race, fence, repeat.';
        this.el.missionDist.textContent = 'BANK ' + fmt(this.bank) + ' · CASH ' + fmt(this.cash);
      } else {
        this.el.missionKicker.textContent = 'STORY';
        this.el.missionObj.textContent = '—';
        this.el.missionDist.textContent = '';
      }
      this.el.missionPayout.textContent = '';
      return;
    }
    this.el.missionKicker.textContent = `MISSION ${this.missions.index + 1}/${this.missions.missions.length} · ${m.title}`;
    this.el.missionObj.textContent = s?.text || '';
    this.el.missionDist.textContent = s?.waypoint && dist ? `${Math.round(dist)}m` : '';
    this.el.missionPayout.textContent = m.reward ? `PAYOUT ${fmt(m.reward)}` : '';
  }

  onMissionComplete(m) {
    this.bank += m.reward || 0;
    this.stats.missions++;
    this.audio.pickup(true);
    this.showBanner('MISSION COMPLETE', `${m.title} · ${fmt(m.reward || 0)} DEPOSITED`);
    this.toast(`+${fmt(m.reward || 0)} BANKED · CLEAN MONEY`, 'money');
    if (m.outro) this.say(m.who || 'LUCIA', m.outro, 6);
    this.updateHud();
    if (this.missions.index === this.missions.missions.length - 1) this.ending();
  }

  ending() {
    this.freeRoam = true;
    this.world.hour = 6.25;
    this.world.setWeather('clear');
    this.el.cinema.classList.add('on');
    setTimeout(() => {
      this.showBanner('LEONIDA DREAMING', 'THE END · FREE ROAM UNLOCKED');
      this.say('JASON', 'Sun coming up. Bank full. Trunk empty. What now?', 5);
      this.say('LUCIA', 'Now we find another city that thinks it can stop us.', 5);
      this.toast(`STATS · KILLS ${this.stats.kills} · MISSIONS ${this.stats.missions} · STOLEN ${this.stats.stolen}`, '');
      setTimeout(() => this.el.cinema.classList.remove('on'), 9000);
    }, 1200);
  }

  clearMissionFlags() {
    this.flags = {
      m1refuel: false, m2rob: false, m2stolen: false, m2dispatched: false, m2deposit: false,
      m3bag: false, m3stored: false, m3fenced: false, m4rear: false, m4swap: false,
      m5vault: false, m5deposit: false,
    };
    this.storeLooted = false;
    this.bankLooted = false;
  }

  setTaskHint(text) {
    if (!text) return;
    this.taskHint = text;
    this.toast(text, '');
  }

  showDuffel() {
    this.duffel.visible = true;
    this.duffelVisible = true;
    this.toast('DUFFEL SPOTTED AT THE DOCKS', 'money');
  }

  updateMissionMarker(dt) {
    const marker = this.missions.marker;
    if (!marker || this.inInterior) { this.marker.visible = false; return; }
    this.marker.visible = true;
    this.marker.position.set(marker.x, 0, marker.z);
    this.markerParts.diamond.rotation.y += dt * 1.6;
    this.markerParts.diamond.position.y = 19 + Math.sin(this.time * 2) * 0.4;
    this.markerParts.ring.rotation.z += dt * 0.8;
    this.markerParts.cyl.material.opacity = 0.1 + Math.sin(this.time * 2.4) * 0.04 + 0.06;
    this.markerParts.beam.rotation.y += dt * 0.6;
  }

  onWeatherChange(mode) {
    if (mode === 'storm') { this.toast('HURRICANE WARNING · WIND RISING', 'bad'); this.say('LUCIA', 'Storm coming. Drive like the ocean is chasing us.', 3.6); }
    else if (mode === 'rain') this.toast('TROPICAL RAIN · STREETS GET SLICK', '');
    else if (mode === 'clear') this.toast('SKIES CLEARING OVER LEONIDA', '');
  }

  // ---------------------------------------------------------------- hud & ui
  updateHudClock() {
    if (!this.el) return;
    this.el.clock.textContent = this.world.clockString();
    this.el.weather.textContent = this.world.weatherLabel();
    this.el.loc.textContent = this.inInterior ? 'PALM SHADE · ROOM 6' : this.world.districtAt(this.activeChar.pos.x, this.activeChar.pos.z);
    if (!this.el.phone.classList.contains('hidden')) this.el.phoneClock.textContent = this.world.clockString();
  }

  updateHud() {
    if (!this.el) return;
    const a = this.activeChar;
    if (!a) return;
    const hp = Math.max(0, Math.round(a.hp));
    this.el.hpFill.style.width = `${hp}%`;
    this.el.hpVal.textContent = hp;
    this.el.arFill.style.width = `${Math.round(a.armor)}%`;
    this.el.arVal.textContent = Math.round(a.armor);
    this.el.foFill.style.width = `${Math.round(a.focus)}%`;
    this.el.foVal.textContent = Math.round(a.focus);
    this.el.cash.textContent = fmt(this.cash);
    this.el.bank.textContent = fmt(this.bank);
    this.el.loot.textContent = this.totalBags();
    const w = a.weaponDef;
    this.el.weaponName.textContent = a.reloading ? `${w.name} · RELOADING` : w.name;
    this.el.ammoMag.textContent = w.magAmmo;
    this.el.ammoRes.textContent = w.reserveAmmo;
    const car = a.inVehicle;
    const role = car ? `${a.name} · ${a.seat === 'driver' ? 'DRIVER' : 'GUNNER'}` : a.name;
    this.el.roleTag.innerHTML = `${role} <span class="swap">${car ? 'X SWAP' : 'TAB SWAP'}</span>`;
    document.querySelectorAll('.slot').forEach(s => s.classList.toggle('active', Number(s.dataset.slot) === a.weapon + 1));
    const tb = document.getElementById('titleBank'), tc = document.getElementById('titleCash');
    if (tb) tb.textContent = fmt(this.bank);
    if (tc) tc.textContent = fmt(this.cash);

    const count = Math.ceil(Math.max(this.heat, this.suspicion) - 1e-4);
    for (let i = 0; i < this.starEls.length; i++) {
      const on = i < count;
      const isHeat = i < Math.ceil(this.heat - 1e-4);
      const white = on && (!isHeat || this.visualContact);
      const red = on && isHeat && !this.visualContact;
      const el = this.starEls[i];
      el.classList.toggle('on', on);
      el.classList.toggle('white', white);
      el.classList.toggle('red', red);
      el.classList.toggle('pulse', on && (white || this.suspicion > 0));
    }
    // vehicle hud
    if (car) {
      this.el.vehicleHud.classList.add('show');
      const mph = Math.round(Math.abs(car.speed) * 2.23694);
      this.el.vSpeed.textContent = mph;
      this.el.vGear.textContent = car.speed < -0.5 ? 'R' : Math.abs(car.speed) < 0.5 ? 'N' : 'D';
      this.el.vFuel.style.width = `${Math.round(car.fuel)}%`;
      this.el.vHealth.style.width = `${Math.round(car.health)}%`;
      this.el.vFuel.classList.toggle('low', car.fuel < 18);
      this.el.vHealth.classList.toggle('low', car.health < 32);
      this.el.vSeat.textContent = `${a.name} · ${a.seat === 'driver' ? 'DRIVER' : 'GUNNER'} · ${car.spec.name}`;
    } else {
      this.el.vehicleHud.classList.remove('show');
    }
    this.el.focusVig.classList.toggle('on', this.focus);
    this.el.crosshair.classList.toggle('focus', this.focus);
  }

  updateHudTick(dt) {
    this.uiT = (this.uiT || 0) + dt;
    if (this.uiT > 0.1) {
      this.uiT = 0;
      this.updateHud();
      this.drawRadar();
      if (!this.el.phone.classList.contains('hidden')) this.updatePhone();
      if (!this.el.trunk.classList.contains('hidden')) this.updateTrunkUI();
    }
    // crosshair
    const car = this.activeChar.inVehicle;
    this.el.crosshair.style.opacity = car && this.activeChar.seat === 'driver' ? '0' : '1';
    const scale = 1 + (this.spread || 0) * 2.4 + (this.input.aim ? -0.18 : 0);
    this.el.crosshair.style.transform = `translate(-50%,-50%) scale(${clamp(scale, 0.6, 2.2)})`;
    // subtitle timer handled in updateDialogue
  }

  drawRadar() {
    if (!this.radarCtx) {
      const c = document.getElementById('radar');
      if (!c) return;
      this.radarCtx = c.getContext('2d');
    }
    const car = this.activeChar.inVehicle;
    const px = car ? car.pos.x : this.activeChar.pos.x;
    const pz = car ? car.pos.z : this.activeChar.pos.z;
    const heading = car ? car.heading : this.activeChar.heading;
    const entities = [];
    for (const v of this.policeCars) if (!v.dead) entities.push({ type: 'police', x: v.pos.x, z: v.pos.z, flash: Math.sin(this.time * 8) > 0 });
    for (const e of this.enemies) if (!e.dead && e.kind === 'cop') entities.push({ type: 'police', x: e.pos.x, z: e.pos.z, flash: true });
    for (const e of this.enemies) if (!e.dead && e.kind !== 'cop') entities.push({ type: 'enemy', x: e.pos.x, z: e.pos.z });
    if (this.partner && this.partner.inVehicle !== car) entities.push({ type: 'partner', x: this.partner.pos.x, z: this.partner.pos.z });
    if (this.personalCar && this.personalCar !== car && !this.personalCar.dead) entities.push({ type: 'personal', x: this.personalCar.pos.x, z: this.personalCar.pos.z });
    for (const k in POI) entities.push({ type: 'poi', x: POI[k].x, z: POI[k].z, color: POI[k].color });
    this.world.drawRadar(this.radarCtx, px, pz, Math.PI - heading, entities, this.missions.marker);
  }

  // ---------------------------------------------------------------- dialogue
  say(who, text, dur = 4) {
    this.subQueue.push({ who, text, dur });
    if (!this.subCurrent) this.nextSub();
  }

  nextSub() {
    if (!this.subQueue.length) { this.subCurrent = null; return; }
    this.subCurrent = this.subQueue.shift();
    this.subT = this.subCurrent.dur;
    this.el.subWho.textContent = this.subCurrent.who;
    this.el.subLine.textContent = this.subCurrent.text;
    this.el.subtitle.classList.add('show');
  }

  updateDialogue(dt) {
    if (this.subCurrent) {
      this.subT -= dt;
      if (this.subT <= 0) {
        this.el.subtitle.classList.remove('show');
        this.subCurrent = null;
        this.subGap = 0.22;
      }
    } else if (this.subGap > 0) {
      this.subGap -= dt;
      if (this.subGap <= 0) this.nextSub();
    } else if (this.subQueue.length) this.nextSub();
  }

  showBanner(big, small) {
    this.el.swapBig.textContent = big;
    this.el.swapSmall.textContent = small || '';
    this.el.swapBanner.classList.add('show');
    clearTimeout(this.bannerT);
    this.bannerT = setTimeout(() => this.el.swapBanner.classList.remove('show'), 2800);
  }

  toast(text, kind = '') {
    if (!this.el) { this.toasts = this.toasts || []; this.toasts.push({ text, kind }); return; }
    const d = document.createElement('div');
    d.className = 'toast ' + kind;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    while (this.el.toasts.children.length > 5) this.el.toasts.removeChild(this.el.toasts.firstChild);
    setTimeout(() => d.remove(), 4200);
  }

  // ---------------------------------------------------------------- sub-systems
  updateAudio(dt) {
    const car = this.activeChar?.inVehicle;
    if (car && !car.dead) {
      this.audio.setEngine(true, car.speed, car.throttle > 0);
    } else this.audio.setEngine(false, 0, false);
    this.lastDamage = Math.max(0, this.lastDamage - dt * 2);
    const carDist = car ? 0 : 0;
    // engine / tyre ambience handled above
  }

  updateLockpick(dt) {
    const l = this.lockpick;
    if (!l) return;
    l.needle += l.dir * l.speed * dt;
    if (l.needle > 1) { l.needle = 1; l.dir = -1; }
    if (l.needle < 0) { l.needle = 0; l.dir = 1; }
    this.updateLockpickUI();
  }

  updateQte(dt) {
    const q = this.qte;
    if (!q) return;
    q.t -= dt;
    document.getElementById('qteFill').style.width = `${clamp(q.t / q.max, 0, 1) * 100}%`;
    if (q.t <= 0) this.finishHijack(false);
  }

  onPlayerDamaged(char, dmg, source) {
    this.lastDamage = 1;
    this.el.damageVig.style.opacity = '0.75';
    this.el.hitflash.style.opacity = '0.12';
    setTimeout(() => { this.el.damageVig.style.opacity = ''; this.el.hitflash.style.opacity = '0'; }, 160);
    this.shake = Math.max(this.shake, Math.min(0.5, dmg * 0.02));
    if (char === this.activeChar) this.updateHud();
  }

  onCarCrash(car, impact) {
    this.audio.hit();
    this.shake = Math.max(this.shake, Math.min(0.7, impact * 0.03));
  }

  summonCar() {
    if (this.inInterior) { this.toast('NOT FROM INSIDE THE MOTEL', 'bad'); return; }
    if (this.activeChar.inVehicle) { this.toast('YOU ARE ALREADY IN A CAR', 'bad'); return; }
    if (!this.personalCar || this.personalCar.dead) {
      this.personalCar = new Vehicle('grotto', this.scene, { x: this.activeChar.pos.x, z: this.activeChar.pos.z, personal: true, fuel: 70 });
      this.vehicles.push(this.personalCar);
    }
    const ax = this.activeChar.pos.x, az = this.activeChar.pos.z;
    const rx = Math.round(ax / 80) * 80, rz = Math.round(az / 80) * 80;
    const cands = [
      { x: rx + 4.5, z: az, h: 0 }, { x: rx - 4.5, z: az, h: Math.PI },
      { x: ax, z: rz + 4.5, h: Math.PI / 2 }, { x: ax, z: rz - 4.5, h: -Math.PI / 2 },
    ];
    let pick = cands.find(c => !this.world.isInsideBuilding(c.x, c.z, 2)) || cands[0];
    this.personalCar.pos.set(pick.x, 0, pick.z);
    this.personalCar.heading = pick.h;
    this.personalCar.mesh.rotation.y = pick.h;
    this.personalCar.dead = false;
    this.personalCar.mesh.visible = true;
    this.personalCar.speed = 0;
    this.toast('GROTTO GT DELIVERED · BUCKME CONCIERGE', 'money');
    this.audio.ui();
  }

  // dev helper used by automated smoke checks
  debugSummary() {
    return {
      state: this.state, started: this.started, mission: this.missions?.index, step: this.missions?.step,
      pos: { x: +this.activeChar.pos.x.toFixed(1), z: +this.activeChar.pos.z.toFixed(1) },
      cash: this.cash, bank: this.bank, heat: this.heat, vehicles: this.vehicles.length, peds: this.peds.length,
    };
  }
}

const game = new Game();
window.game = game;

