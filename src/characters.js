import * as THREE from 'three';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

export const WEAPONS = [
  { id: 'pistol', name: 'PISTOL', damage: 32, head: 3.2, mag: 12, reserve: 96, rate: 0.28, spread: 0.008, recoil: 0.012, pellets: 1, weight: 1.0, range: 140, sound: 'pistol' },
  { id: 'smg', name: 'SMG', damage: 15, head: 2.4, mag: 30, reserve: 150, rate: 0.085, spread: 0.022, recoil: 0.007, pellets: 1, weight: 0.9, range: 110, sound: 'smg' },
  { id: 'shotgun', name: 'SHOTGUN', damage: 14, head: 2.0, mag: 6, reserve: 36, rate: 0.82, spread: 0.062, recoil: 0.045, pellets: 8, weight: 1.6, range: 55, sound: 'shotgun' },
];

function mat(color, rough = 0.9, metal = 0.02) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
}

export function buildHuman(kind) {
  const isLucia = kind === 'lucia';
  const g = new THREE.Group();
  const skin = mat(isLucia ? 0xb97a54 : 0xc98f6a, 0.85);
  const shirt = mat(isLucia ? 0x201f26 : 0xe8e2d6, 0.9);
  const jacket = mat(isLucia ? 0x6f2338 : 0x2e3b4a, 0.85);
  const pants = mat(isLucia ? 0x2b2f3c : 0x4b5866, 0.95);
  const hairMat = mat(isLucia ? 0x1b1310 : 0x2a211a, 0.95);
  const shoe = mat(0x17161a, 0.8);

  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  // pelvis
  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.3, 0.32), pants);
  pelvis.position.y = 1.0; body.add(pelvis);
  // torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.72, 0.36), isLucia ? shirt : jacket);
  torso.position.y = 1.46; body.add(torso);
  if (!isLucia) {
    const inner = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.64, 0.38), mat(0xd8d2c4));
    inner.position.y = 1.48; body.add(inner);
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.12, 0.4), mat(0x1c242e));
    collar.position.y = 1.8; body.add(collar);
  } else {
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.09, 0.36), mat(0x0d0d10));
    belt.position.y = 1.12; body.add(belt);
  }
  // neck/head
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.16, 8), skin);
  neck.position.y = 1.86; body.add(neck);
  const headGroup = new THREE.Group(); headGroup.position.y = 2.0; body.add(headGroup);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.225, 14, 12), skin);
  head.scale.set(0.92, 1.06, 0.95); headGroup.add(head);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.09, 0.08), skin);
  nose.position.set(0, -0.02, 0.21); headGroup.add(nose);
  // eyes
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 5), mat(0x14100e, 0.4));
    eye.position.set(sx * 0.08, 0.04, 0.2); headGroup.add(eye);
  }
  // hair
  let hairGroup = new THREE.Group();
  if (isLucia) {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.248, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat);
    cap.position.y = 0.03; cap.scale.set(1, 1.08, 1); headGroup.add(cap);
    // long strands
    for (let i = 0; i < 7; i++) {
      const w = 0.1 + Math.random() * 0.05;
      const len = 0.55 + Math.random() * 0.28;
      const strand = new THREE.Mesh(new THREE.BoxGeometry(w, len, 0.07), hairMat);
      strand.position.set(-0.18 + i * 0.06, -len / 2 - 0.1, -0.15 - (i % 2) * 0.04);
      strand.rotation.z = (i - 3) * 0.06;
      hairGroup.add(strand);
    }
    const fringe = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.16, 0.1), hairMat);
    fringe.position.set(0, 0.13, 0.17); fringe.rotation.x = 0.2; headGroup.add(fringe);
    headGroup.add(hairGroup);
  } else {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.238, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMat);
    cap.position.y = 0.035; headGroup.add(cap);
    const beard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.08), hairMat);
    beard.position.set(0, -0.14, 0.17); headGroup.add(beard);
  }
  // arms
  const armL = new THREE.Group(), armR = new THREE.Group();
  armL.position.set(-0.4, 1.72, 0); armR.position.set(0.4, 1.72, 0);
  for (const [arm, mirror] of [[armL, -1], [armR, 1]]) {
    const upper = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.46, 0.2), isLucia && mirror < 0 ? jacket : shirt);
    upper.position.y = -0.22; arm.add(upper);
    const lower = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.17), isLucia ? skin : jacket);
    lower.position.y = -0.6; arm.add(lower);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.085, 7, 6), skin);
    hand.position.y = -0.82; arm.add(hand);
    body.add(arm);
  }
  // legs
  const legL = new THREE.Group(), legR = new THREE.Group();
  legL.position.set(-0.17, 0.9, 0); legR.position.set(0.17, 0.9, 0);
  for (const [leg, mirror] of [[legL, -1], [legR, 1]]) {
    const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.46, 0.26), pants);
    thigh.position.y = -0.22; leg.add(thigh);
    const shin = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.44, 0.22), pants);
    shin.position.y = -0.65; leg.add(shin);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.36), shoe);
    foot.position.set(0, -0.9, 0.06); leg.add(foot);
    body.add(leg);
  }
  // gun
  const gun = new THREE.Group();
  const gm = new THREE.MeshStandardMaterial({ color: 0x23242a, roughness: 0.45, metalness: 0.75 });
  const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.42), gm); barrel.position.z = 0.2; gun.add(barrel);
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 0.1), gm); grip.position.set(0, -0.13, 0.03); grip.rotation.x = -0.2; gun.add(grip);
  if (kind === 'shotgun') { barrel.scale.z = 1.6; barrel.position.z = 0.36; }
  gun.position.set(0, -0.82, 0.12); gun.visible = false; armR.add(gun);

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  g.add(root);
  return {
    kind, group: g, root, body, headGroup, hairGroup, armL, armR, legL, legR, gun,
    parts: { head, torso, pelvis, armL, armR, legL, legR },
  };
}

export class Character {
  constructor(kind, scene, opts = {}) {
    this.kind = kind;
    this.name = kind === 'jason' ? 'JASON' : 'LUCIA';
    const b = buildHuman(kind);
    this.model = b;
    this.group = b.group;
    this.group.position.set(opts.x ?? 0, 0.27, opts.z ?? 0);
    this.pos = this.group.position;
    this.vel = new THREE.Vector3();
    this.heading = opts.heading ?? 0;
    this.moveSpeed = 4.7;
    this.sprintSpeed = 8.4;
    this.speed = 0;
    this.vy = 0;
    this.onGround = true;
    this.hp = 100;
    this.maxHp = 100;
    this.armor = 0;
    this.focus = 100;
    this.maxFocus = 100;
    this.focusActive = false;
    this.aim = false;
    this.sprinting = false;
    this.inVehicle = null;
    this.seat = null;
    this.dead = false;
    this.phase = Math.random() * 6;
    this.weapons = WEAPONS.map(w => ({ ...w, magAmmo: w.mag, reserveAmmo: w.reserve }));
    this.weapon = 0;
    this.fireCooldown = 0;
    this.reloading = false;
    this.reloadT = 0;
    this.recoil = 0;
    this.aimSway = 0;
    this.lastShot = 0;
    this.beam = null;
    this.setVisible = true;
    this.hairPhase = Math.random() * 7;
    scene.add(this.group);
    this.model.gun.visible = true;
    this.btn = { x: 0, z: 0 };
  }

  get weaponDef() { return this.weapons[this.weapon]; }

  lookAtPoint(x, z) { this.heading = Math.atan2(x - this.pos.x, z - this.pos.z); }

  update(dt, input, cameraYaw, world, game) {
    if (this.dead) return;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.recoil = Math.max(0, this.recoil - dt * 5.5);
    this.aimSway += dt * (0.8 + this.weaponDef.weight * 0.7);

    if (this.reloading) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        const w = this.weaponDef;
        const need = w.mag - w.magAmmo;
        const take = Math.min(need, w.reserveAmmo);
        w.magAmmo += take; w.reserveAmmo -= take;
        this.reloading = false;
        game?.updateHud?.();
      }
    }

    // focus
    if (this.inVehicle == null) {
      if (input.focus && !this.focusActive && this.focus > 2) {
        this.focusActive = true;
        game?.audio?.pickup?.(true);
      }
      if (!input.focus || this.focus <= 0.5) this.focusActive = false;
      if (this.focusActive) this.focus = Math.max(0, this.focus - dt * 12);
      else this.focus = Math.min(this.maxFocus, this.focus + dt * 4.5);
    } else {
      this.focusActive = false;
      this.focus = Math.min(this.maxFocus, this.focus + dt * 2);
    }

    // movement relative to camera
    let mx = 0, mz = 0;
    if (!this.inVehicle && !game.uiLocked) {
      if (input.forward) mz += 1;
      if (input.back) mz -= 1;
      if (input.left) mx -= 1;
      if (input.right) mx += 1;
    }
    const len = Math.hypot(mx, mz);
    let moving = false;
    if (len > 0.01) {
      mx /= len; mz /= len;
      const sin = Math.sin(cameraYaw), cos = Math.cos(cameraYaw);
      const wx = mx * cos + mz * sin;
      const wz = -mx * sin + mz * cos;
      const target = this.aim ? 3.1 : this.sprinting ? this.sprintSpeed : this.moveSpeed;
      const heavy = this.weaponDef.weight > 1.3 ? 0.86 : 1;
      const sp = target * heavy;
      this.pos.x += wx * sp * dt;
      this.pos.z += wz * sp * dt;
      this.heading = Math.atan2(wx, wz);
      this.speed = sp;
      moving = true;
    } else this.speed = 0;

    if (this.inVehicle == null) {
      world.collideCircle(this.pos, 0.48);
      // jump
      if (input.jump && this.onGround) { this.vy = 6.4; this.onGround = false; }
      this.vy -= 19 * dt;
      this.pos.y += this.vy * dt;
      if (this.pos.y <= 0.27) { this.pos.y = 0.27; this.vy = 0; this.onGround = true; }
      // clamp world
      if (Math.hypot(this.pos.x, this.pos.z) > 650) { this.pos.x *= 0.99; this.pos.z *= 0.99; }
    }

    this.group.rotation.y = this.heading;
    this.animate(dt, moving, world);
  }

  animate(dt, moving, world) {
    const b = this.model;
    const aim = this.aim && !this.inVehicle;
    if (moving) this.phase += dt * (this.sprinting ? 12 : 8);
    else this.phase += dt * 1.6;
    const sw = moving ? Math.sin(this.phase) * (this.sprinting ? 0.95 : 0.62) : 0;
    b.legL.rotation.x = sw;
    b.legR.rotation.x = -sw;
    if (aim) {
      b.armR.rotation.x = lerp(b.armR.rotation.x, -1.55 - this.recoil * 0.8, 0.35);
      b.armL.rotation.x = lerp(b.armL.rotation.x, -1.2, 0.3);
      b.armL.rotation.y = 0.35; b.armR.rotation.y = -0.05;
    } else {
      b.armL.rotation.x = lerp(b.armL.rotation.x, -sw * 0.8, 0.4);
      b.armR.rotation.x = lerp(b.armR.rotation.x, sw * 0.8, 0.4);
      b.armL.rotation.y = 0; b.armR.rotation.y = 0;
    }
    b.body.position.y = moving ? Math.abs(Math.sin(this.phase)) * 0.045 : Math.sin(this.phase) * 0.012;
    b.headGroup.rotation.x = aim ? -0.08 : Math.sin(this.phase * 0.5) * 0.02;
    // hair wind
    if (this.kind === 'lucia' && b.hairGroup) {
      const t = performance.now() * 0.001;
      const wind = world?.weather?.wind || 0.6;
      b.hairGroup.children.forEach((c, i) => {
        c.rotation.x = Math.sin(t * 2.2 + i * 0.4) * 0.08 * wind + (this.sprinting ? -0.2 : 0);
        c.rotation.z = (i - 3) * 0.06 + Math.sin(t * 1.7 + i) * 0.03 * wind;
      });
    }
    // muzzle/recoil arm kick
    if (this.recoil > 0.001 && !aim) b.armR.rotation.x -= this.recoil * 0.5;
  }

  shoot(game, spreadMult = 1) {
    const w = this.weaponDef;
    if (this.fireCooldown > 0 || this.reloading) return false;
    if (w.magAmmo <= 0) { this.reload(game); return false; }
    w.magAmmo--;
    this.fireCooldown = w.rate;
    this.recoil = Math.min(1, this.recoil + w.recoil * 20);
    this.lastShot = performance.now();
    game.audio?.shot(w.sound);
    game.fireBullet(this, w, spreadMult);
    game.updateHud();
    if (w.magAmmo === 0) this.reload(game);
    return true;
  }

  reload(game) {
    const w = this.weaponDef;
    if (this.reloading || w.magAmmo >= w.mag || w.reserveAmmo <= 0) return;
    this.reloading = true;
    this.reloadT = 1.35;
    game.audio?.reload();
    game.toast(`RELOADING ${w.name}`, '');
  }

  switchWeapon(i, game) {
    if (i === this.weapon) return;
    this.weapon = i; this.reloading = false; this.fireCooldown = 0.2;
    game.audio?.tick();
    game.updateHud();
  }

  damage(amount, game, source) {
    if (this.dead) return;
    let dmg = amount;
    if (this.armor > 0) { const abs = Math.min(this.armor, dmg * 0.7); this.armor -= abs; dmg -= abs; }
    this.hp -= dmg;
    game?.onPlayerDamaged?.(this, dmg, source);
    if (this.hp <= 0) { this.hp = 0; this.dead = true; game?.onPlayerDeath?.(this); }
  }

  heal(n) { this.hp = Math.min(this.maxHp, this.hp + n); }

  setWeaponModel() {
    const w = this.weaponDef;
    this.model.gun.visible = true;
    this.model.gun.scale.set(1, 1, w.id === 'shotgun' ? 1.5 : w.id === 'smg' ? 1.15 : 1);
  }
}

// Simple enemy class used for cops and gang members
export class Enemy {
  constructor(scene, x, z, kind = 'gang', game) {
    this.kind = kind;
    this.scene = scene;
    this.group = new THREE.Group();
    this.hp = kind === 'cop' ? 70 : 55;
    this.maxHp = this.hp;
    this.dead = false;
    this.pos = this.group.position;
    this.pos.set(x, 0.27, z);
    this.heading = 0;
    this.phase = Math.random() * 5;
    this.fireT = 1 + Math.random() * 2;
    this.state = 'idle';
    this.speed = kind === 'cop' ? 4.1 : 3.4;
    this.game = game;
    this.aggro = false;
    this.weak = null;
    this.corpseT = 0;
    this.walkT = 0;
    this.hitFlash = 0;
    const shirt = kind === 'cop' ? 0x24304f : [0x8f2f3f, 0x2f5f3f, 0x3a3a4a, 0x6f4f2f][Math.floor(Math.random() * 4)];
    const pants = kind === 'cop' ? 0x1c2333 : 0x2b2b34;
    const skin = [0xc98f6a, 0x8a5a3d, 0xe0b090, 0x6f4630][Math.floor(Math.random() * 4)];
    const mk = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.78, 0.36), mk(shirt)); torso.position.y = 1.28; this.group.add(torso);
    if (kind === 'cop') {
      const vest = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.5, 0.4), mk(0x12161f)); vest.position.y = 1.3; this.group.add(vest);
      const badge = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.08), new THREE.MeshBasicMaterial({ color: 0xffd166 })); badge.position.set(-0.15, 1.42, 0.2); this.group.add(badge);
    }
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.23, 10, 8), mk(skin)); head.position.y = 1.87; this.group.add(head); this.head = head;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.235, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), mk(kind === 'cop' ? 0x1b2538 : 0x201812)); hair.position.y = 1.9; this.group.add(hair);
    if (kind === 'cop') {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.27, 0.16, 10), mk(0x1a2436)); cap.position.y = 2.05; this.group.add(cap);
      const brim = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.2), mk(0x111826)); brim.position.set(0, 1.99, 0.2); this.group.add(brim);
    }
    // weak point: neon head halo only visible in focus
    this.weak = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0, wireframe: true, depthWrite: false }));
    this.weak.position.y = 1.87; this.group.add(this.weak);
    this.weak2 = new THREE.Mesh(new THREE.SphereGeometry(0.46, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2f8e, transparent: true, opacity: 0, wireframe: true, depthWrite: false }));
    this.weak2.position.y = 1.25; this.group.add(this.weak2);
    const legL = new THREE.Group(), legR = new THREE.Group();
    for (const [leg, sx] of [[legL, -0.17], [legR, 0.17]]) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.82, 0.26), mk(pants)); l.position.y = -0.36; leg.add(l); leg.position.set(sx, 0.82, 0); this.group.add(leg);
    }
    const armL = new THREE.Group(), armR = new THREE.Group();
    for (const [arm, sx] of [[armL, -0.42], [armR, 0.42]]) {
      const a = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.68, 0.2), mk(shirt)); a.position.y = -0.3; arm.add(a); arm.position.set(sx, 1.6, 0); this.group.add(arm);
    }
    // gun
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.5), new THREE.MeshStandardMaterial({ color: 0x1b1b20, metalness: 0.8, roughness: 0.4 }));
    gun.position.set(0, -0.65, 0.22); armR.add(gun);
    this.armL = armL; this.armR = armR; this.legL = legL; this.legR = legR;
    this.group.traverse(o => { if (o.isMesh) o.castShadow = true; });
    scene.add(this.group);
  }

  update(dt, game) {
    if (this.dead) {
      this.corpseT += dt;
      return;
    }
    this.fireT -= dt;
    this.hitFlash = Math.max(0, this.hitFlash - dt * 4);
    const player = game.activeChar;
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    this.weak.material.opacity = game.focus ? 0.85 : 0;
    this.weak2.material.opacity = game.focus ? 0.55 : 0;
    const headTarget = this.head;
    if (game.focus) { this.weak.material.opacity = 0.6 + Math.sin(game.time * 6) * 0.25; }
    if (this.hitFlash > 0) { this.head.material.emissive = new THREE.Color(0xff5566); this.head.material.emissiveIntensity = 0.6; }
    else { this.head.material.emissiveIntensity = 0; }

    if (this.aggro && dist > 2.2 && dist < 80) {
      const nx = dx / (dist || 1), nz = dz / (dist || 1);
      if (dist > 9) {
        this.pos.x += nx * this.speed * dt; this.pos.z += nz * this.speed * dt;
      } else if (dist < 6) {
        this.pos.x -= nx * this.speed * 0.5 * dt; this.pos.z -= nz * this.speed * 0.5 * dt;
      }
      // strafe
      this.pos.x += -nz * Math.sin(game.time * 0.8 + this.phase) * 1.2 * dt;
      this.pos.z += nx * Math.sin(game.time * 0.8 + this.phase) * 1.2 * dt;
      game.world.collideCircle(this.pos, 0.45);
      this.heading = Math.atan2(dx, dz);
      this.walkT += dt * 8;
      this.legL.rotation.x = Math.sin(this.walkT) * 0.6;
      this.legR.rotation.x = -Math.sin(this.walkT) * 0.6;
      this.armR.rotation.x = -1.45;
      this.armL.rotation.x = -1.1;
      // shoot
      if (this.fireT <= 0 && dist < 48) {
        this.fireT = (this.kind === 'cop' ? 1.1 : 1.35) + Math.random() * 0.9;
        game.enemyShoot(this, dist);
      }
    } else {
      this.walkT += dt * 2.2;
      this.legL.rotation.x = Math.sin(this.walkT) * 0.1;
      this.legR.rotation.x = -Math.sin(this.walkT) * 0.1;
      this.armR.rotation.x = 0; this.armL.rotation.x = 0;
    }
    this.group.rotation.y = this.heading;
    this.group.position.y = 0.27;
  }

  damage(amount, game, fromHead = false) {
    if (this.dead) return;
    this.hp -= amount;
    this.hitFlash = 1;
    this.aggro = true;
    game?.audio?.hit?.();
    if (this.hp <= 0) {
      this.dead = true;
      this.aggro = false;
      this.group.rotation.x = -Math.PI / 2;
      this.group.position.y = 0.35;
      this.weak.material.opacity = 0; this.weak2.material.opacity = 0;
      game?.onEnemyKilled?.(this, fromHead);
    }
  }
}
