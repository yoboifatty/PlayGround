import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

class RNG {
  constructor(seed = 1337) { this.s = seed >>> 0; }
  r() { this.s = (this.s * 1664525 + 1013904223) >>> 0; return this.s / 4294967296; }
  range(a, b) { return a + (b - a) * this.r(); }
  pick(arr) { return arr[Math.floor(this.r() * arr.length)]; }
}

export const CITY = {
  center: new THREE.Vector2(0, 0),
  extent: 960,
  road: 80,
  roadW: 14,
  gridMin: -6,
  gridMax: 5,
  beachR: 660,
};

export const POI = {
  motel: { x: -120, z: 200, door: { x: -120, z: 236 }, label: 'PALM SHADE MOTEL', color: '#ff5da8' },
  gas: { x: 120, z: 120, door: { x: 120, z: 147 }, label: 'GAS & GO', color: '#ffd166' },
  pawn: { x: -360, z: 40, door: { x: -360, z: 73 }, label: 'PAWN & PWN', color: '#7dff9c' },
  bank: { x: 40, z: -120, door: { x: 40, z: -86 }, label: 'LEONIDA NATIONAL', color: '#38e8ff' },
  store: { x: 280, z: -40, door: { x: 280, z: -7 }, label: '24/7 MART', color: '#ff9c5b' },
  hospital: { x: -40, z: -280, door: { x: -40, z: -246 }, label: 'MERCY HOSPITAL', color: '#ff6b6b' },
  charger: { x: 360, z: 120, door: { x: 360, z: 120 }, label: 'VOLT CHARGE', color: '#38e8ff' },
};

function makeRNG(seed) { return new RNG(seed); }

function canvasTexture(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(opts.repeat[0], opts.repeat[1]); }
  return t;
}

function facadeTexture() {
  const tex = canvasTexture(128, 256, (g, w, h) => {
    g.fillStyle = '#3d3f4b'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#30323c';
    for (let y = 0; y < h; y += 32) g.fillRect(0, y, w, 10);
    for (let y = 8; y < h - 12; y += 32) {
      for (let x = 6; x < w - 8; x += 18) {
        const lit = Math.random() > 0.35;
        if (lit) {
          const warm = Math.random() > 0.5;
          g.fillStyle = warm ? 'rgba(255,214,150,.9)' : 'rgba(190,225,255,.82)';
        } else g.fillStyle = 'rgba(22,26,38,.9)';
        g.fillRect(x, y, 11, 15);
        g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(x, y + 15, 11, 2);
      }
    }
    g.fillStyle = 'rgba(255,255,255,.05)';
    for (let x = 0; x < w; x += 64) g.fillRect(x, 0, 1, h);
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function asphaltTexture() {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#24232b'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      const v = Math.random() * 40 + 20;
      g.fillStyle = `rgba(${v},${v},${v + 4},${Math.random() * 0.25})`;
      g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
    g.strokeStyle = 'rgba(0,0,0,.2)'; g.lineWidth = 1;
    for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(Math.random() * w, 0); g.lineTo(Math.random() * w, h); g.stroke(); }
  }, { repeat: [46, 46] });
}

function sandTexture() {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#d9bf94'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 6000; i++) {
      const v = 150 + Math.random() * 70;
      g.fillStyle = `rgba(${v},${v * 0.88},${v * 0.66},${Math.random() * 0.35})`;
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  }, { repeat: [40, 40] });
}

function concreteTexture() {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#6f6d72'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 3000; i++) {
      const v = 90 + Math.random() * 50;
      g.fillStyle = `rgba(${v},${v},${v + 3},.2)`;
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    g.strokeStyle = 'rgba(35,35,40,.55)'; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); }
  }, { repeat: [14, 14] });
}

function textTexture(text, color = '#ff2f8e', bg = 'rgba(6,4,12,.88)', sub = '', w = 512, h = 160) {
  return canvasTexture(w, h, (g) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.strokeStyle = color; g.lineWidth = 5; g.strokeRect(5, 5, w - 10, h - 10);
    g.shadowColor = color; g.shadowBlur = 26;
    g.fillStyle = '#fff';
    g.font = `900 ${Math.floor(h * 0.34)}px "Arial Black", Impact, sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, sub ? h * 0.42 : h * 0.52);
    if (sub) {
      g.fillStyle = color; g.font = `700 ${Math.floor(h * 0.13)}px Arial, sans-serif`;
      g.fillText(sub, w / 2, h * 0.72);
    }
  });
}

function cloudTexture() {
  return canvasTexture(256, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    for (let i = 0; i < 28; i++) {
      const x = w / 2 + (Math.random() - 0.5) * w * 0.8;
      const y = h * 0.55 + (Math.random() - 0.5) * h * 0.4;
      const r = 20 + Math.random() * 44;
      const grd = g.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, 'rgba(255,255,255,.55)');
      grd.addColorStop(0.55, 'rgba(255,255,255,.22)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
  });
}

function glowTexture() {
  return canvasTexture(128, 128, (g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.3, 'rgba(255,255,255,.55)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  });
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.rng = makeRNG(90210);
    this.colliders = [];
    this.windObjects = [];
    this.streetMaterials = [];
    this.puddles = [];
    this.time = 0;
    this.hour = 19.2;
    this.dayLength = 420;
    this.weather = { mode: 'clear', rain: 0, wind: 0.7, wetness: 0, targetRain: 0, timer: 55, flash: 0, lightningTimer: 7 };
    this._tmp = new THREE.Vector3();
    this._tmp2 = new THREE.Vector3();
    this.nightFactor = 0;
    this.cameraPos = V(0, 20, 0);

    this._buildEnvironment();
    this._buildGround();
    this._buildCity();
    this._buildSpecials();
    this._buildVegetation();
    this._buildStreetLights();
    this._buildWeather();
    this._buildInterior();
    this._buildMapCanvas();
  }

  // ---------------------------------------------------------------- environment
  _buildEnvironment() {
    const s = this.scene;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    s.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    s.fog = new THREE.FogExp2(0x2c2438, 0.0016);

    this.hemi = new THREE.HemisphereLight(0x9fc6ff, 0x3a2a30, 0.7);
    s.add(this.hemi);

    this.sun = new THREE.DirectionalLight(0xffd9b0, 2.1);
    this.sun.position.set(-160, 210, 90);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.near = 20;
    this.sun.shadow.camera.far = 620;
    const sc = 150;
    this.sun.shadow.camera.left = -sc; this.sun.shadow.camera.right = sc;
    this.sun.shadow.camera.top = sc; this.sun.shadow.camera.bottom = -sc;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.02;
    s.add(this.sun);
    s.add(this.sun.target);

    this.moon = new THREE.DirectionalLight(0x7997d6, 0.22);
    this.moon.position.set(120, 160, -80);
    s.add(this.moon);

    // neon accent lights (limited, cheap)
    const addL = (color, x, y, z, d = 40, i = 5) => {
      const l = new THREE.PointLight(color, i, d, 2);
      l.position.set(x, y, z); s.add(l); return l;
    };
    this.neonLights = [
      addL(0xff2f8e, -120, 7, 212, 34, 10),
      addL(0x38e8ff, 40, 15, -95, 44, 12),
      addL(0xffd166, 120, 6, 120, 30, 7),
      addL(0x7dff9c, -360, 6, 58, 26, 7),
    ];

    // sky dome
    this.skyUniforms = {
      top: { value: new THREE.Color(0x1b1636) },
      mid: { value: new THREE.Color(0x6d3d66) },
      bottom: { value: new THREE.Color(0xff9a6a) },
      sunDir: { value: new THREE.Vector3(-0.4, 0.3, 0.2).normalize() },
      sunCol: { value: new THREE.Color(0xffd0a0) },
      night: { value: 0 },
    };
    const skyGeo = new THREE.SphereGeometry(1300, 32, 20);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: this.skyUniforms,
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 top, mid, bottom, sunCol; uniform vec3 sunDir; uniform float night;
        varying vec3 vDir;
        void main(){
          float h = clamp(vDir.y*0.5+0.5, 0.0, 1.0);
          vec3 col = mix(bottom, mid, smoothstep(0.42,0.62,h));
          col = mix(col, top, smoothstep(0.6,0.98,h));
          float sd = max(dot(normalize(vDir), normalize(sunDir)),0.0);
          col += sunCol * pow(sd, 90.0) * 1.25;
          col += sunCol * pow(sd, 8.0) * 0.18;
          // horizon haze
          col = mix(col, bottom*1.05, pow(1.0-abs(vDir.y),8.0)*0.35);
          gl_FragColor = vec4(col,1.0);
        }`,
    });
    this.sky = new THREE.Mesh(skyGeo, skyMat);
    this.sky.frustumCulled = false;
    s.add(this.sky);

    // stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.random() * Math.PI * 0.48;
      starPos[i * 3] = Math.cos(th) * Math.sin(ph) * 1100;
      starPos[i * 3 + 1] = Math.cos(ph) * 900 + 60;
      starPos[i * 3 + 2] = Math.sin(th) * Math.sin(ph) * 1100;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, transparent: true, opacity: 0, depthWrite: false, fog: false });
    this.stars = new THREE.Points(starGeo, this.starMat);
    s.add(this.stars);

    // sun disc
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffe1b0, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.sunSprite.scale.set(130, 130, 1);
    s.add(this.sunSprite);
  }

  _buildGround() {
    const s = this.scene;
    // ocean
    const oceanGeo = new THREE.PlaneGeometry(5200, 5200, 90, 90);
    oceanGeo.rotateX(-Math.PI / 2);
    this.oceanUniforms = {
      time: { value: 0 }, deep: { value: new THREE.Color(0x08243a) }, shallow: { value: new THREE.Color(0x1a6b7a) },
      sky: { value: new THREE.Color(0x5a4a72) }, sun: { value: new THREE.Vector3(0.4, 0.3, 0.2) },
    };
    const oceanMat = new THREE.ShaderMaterial({
      uniforms: this.oceanUniforms, transparent: false,
      vertexShader: `uniform float time; varying vec3 vPos; varying vec3 vN;
        void main(){ vec3 p = position; float w = sin(p.x*0.035 + time*0.8)*0.35 + sin(p.z*0.05 - time*0.6)*0.28;
          p.y += w; vPos = p; vN = normalize(vec3(-cos(p.x*0.035+time*0.8)*0.02, 1.0, -cos(p.z*0.05-time*0.6)*0.02));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0); }`,
      fragmentShader: `uniform vec3 deep, shallow, sky; uniform float time; varying vec3 vPos; varying vec3 vN;
        void main(){ vec3 v = normalize(cameraPosition - vPos);
          float fres = pow(1.0 - max(dot(v, normalize(vN)), 0.0), 2.2);
          float waves = sin(vPos.x*0.11 + time*1.2 + sin(vPos.z*0.08))*0.5+0.5;
          vec3 col = mix(deep, shallow, waves*0.18 + 0.18);
          col = mix(col, sky, fres*0.55);
          col += vec3(0.9,0.75,0.5)*pow(max(dot(normalize(vN), normalize(vec3(0.3,0.4,0.2))),0.0), 20.0)*0.18;
          gl_FragColor = vec4(col, 1.0); }`,
    });
    this.ocean = new THREE.Mesh(oceanGeo, oceanMat);
    this.ocean.position.y = -0.9;
    s.add(this.ocean);

    // island sand
    const sandGeo = new THREE.CircleGeometry(CITY.beachR, 96);
    sandGeo.rotateX(-Math.PI / 2);
    const sandMat = new THREE.MeshStandardMaterial({ map: sandTexture(), roughness: 0.96, metalness: 0 });
    this.sand = new THREE.Mesh(sandGeo, sandMat);
    this.sand.position.y = -0.32;
    this.sand.receiveShadow = true;
    s.add(this.sand);

    // city ground
    const concrete = concreteTexture();
    concrete.repeat.set(22, 22);
    const cityMat = new THREE.MeshStandardMaterial({ map: concrete, roughness: 0.74, metalness: 0.08, color: 0xa7a1a7 });
    const cityGeo = new THREE.PlaneGeometry(1000, 1000);
    cityGeo.rotateX(-Math.PI / 2);
    this.cityGround = new THREE.Mesh(cityGeo, cityMat);
    this.cityGround.position.y = 0.005;
    this.cityGround.receiveShadow = true;
    s.add(this.cityGround);
    this.cityMat = cityMat;

    // ocean-side promenade ring
    const ringGeo = new THREE.RingGeometry(468, 480, 96);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x8b8790, roughness: 0.8 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.03; s.add(ring);

    // road strips
    const roadGeos = [];
    const roadW = CITY.roadW;
    for (let i = CITY.gridMin; i <= CITY.gridMax + 1; i++) {
      const p = i * CITY.road;
      const gx = new THREE.PlaneGeometry(roadW, (CITY.gridMax - CITY.gridMin + 1) * CITY.road + 30);
      gx.rotateX(-Math.PI / 2); gx.translate(p, 0.02, (CITY.gridMin + CITY.gridMax + 1) * CITY.road / 2);
      roadGeos.push(gx);
      const gz = new THREE.PlaneGeometry((CITY.gridMax - CITY.gridMin + 1) * CITY.road + 30, roadW);
      gz.rotateX(-Math.PI / 2); gz.translate((CITY.gridMin + CITY.gridMax + 1) * CITY.road / 2, 0.025, p);
      roadGeos.push(gz);
    }
    const asphalt = asphaltTexture();
    this.roadMat = new THREE.MeshStandardMaterial({ map: asphalt, color: 0x8f8b95, roughness: 0.88, metalness: 0.12 });
    const roadMesh = new THREE.Mesh(mergeGeometries(roadGeos), this.roadMat);
    roadMesh.receiveShadow = true; s.add(roadMesh);
    this.streetMaterials.push({ mat: this.roadMat, baseColor: new THREE.Color(0x8f8b95), wetColor: new THREE.Color(0x3d3f4c), rough: [0.88, 0.28] });

    // lane markings
    const markGeos = [];
    for (let i = CITY.gridMin; i <= CITY.gridMax + 1; i++) {
      const p = i * CITY.road;
      for (let j = -460; j < 400; j += 13) {
        const a = new THREE.PlaneGeometry(0.22, 5.4); a.rotateX(-Math.PI / 2); a.translate(p, 0.045, j + 3);
        markGeos.push(a);
      }
      for (let j = -460; j < 400; j += 13) {
        const a = new THREE.PlaneGeometry(5.4, 0.22); a.rotateX(-Math.PI / 2); a.translate(j + 3, 0.047, p);
        markGeos.push(a);
      }
    }
    const markMat = new THREE.MeshBasicMaterial({ color: 0xe8e0c8, transparent: true, opacity: 0.42 });
    this.markMesh = new THREE.Mesh(mergeGeometries(markGeos), markMat);
    s.add(this.markMesh);

    // sidewalk slabs
    const sideGeos = [];
    for (let gx = CITY.gridMin; gx <= CITY.gridMax; gx++) {
      for (let gz = CITY.gridMin; gz <= CITY.gridMax; gz++) {
        const cx = gx * CITY.road + 40, cz = gz * CITY.road + 40;
        const g = new THREE.BoxGeometry(72, 0.26, 72);
        g.translate(cx, 0.13, cz); sideGeos.push(g);
      }
    }
    const sideMat = new THREE.MeshStandardMaterial({ color: 0x9a96a0, roughness: 0.85, metalness: 0.04 });
    this.sideMat = sideMat;
    const sideMesh = new THREE.Mesh(mergeGeometries(sideGeos), sideMat);
    sideMesh.receiveShadow = true; s.add(sideMesh);
    this.streetMaterials.push({ mat: sideMat, baseColor: new THREE.Color(0x9a96a0), wetColor: new THREE.Color(0x5a5862), rough: [0.85, 0.45] });

    // puddles
    const puddleMat = new THREE.MeshStandardMaterial({
      color: 0x2b3546, roughness: 0.06, metalness: 0.92, transparent: true, opacity: 0,
      envMapIntensity: 1.4, depthWrite: false, side: THREE.DoubleSide,
    });
    const puddleGeo = new THREE.CircleGeometry(1, 12); puddleGeo.rotateX(-Math.PI / 2);
    this.puddleMesh = new THREE.InstancedMesh(puddleGeo, puddleMat, 90);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 90; i++) {
      const onX = Math.random() > 0.5;
      const roadIdx = Math.floor(this.rng.range(CITY.gridMin, CITY.gridMax + 1));
      const l = this.rng.range(-440, 360);
      const off = this.rng.range(-4.6, 4.6);
      dummy.position.set(onX ? roadIdx * CITY.road + off : l, 0.055, onX ? l : roadIdx * CITY.road + off);
      dummy.rotation.set(0, this.rng.range(0, 6.28), 0);
      dummy.scale.set(this.rng.range(1.2, 4.2), 1, this.rng.range(0.8, 2.6));
      dummy.updateMatrix(); this.puddleMesh.setMatrixAt(i, dummy.matrix);
    }
    this.puddleMat = puddleMat;
    s.add(this.puddleMesh);

    // beach palms / outer ground patches
    this._outerDressing();
  }

  _outerDressing() {
    const rng = this.rng;
    for (let i = 0; i < 70; i++) {
      const a = rng.range(0, Math.PI * 2), r = rng.range(500, 640);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      this._palm(x, z, rng.range(0.8, 1.35));
    }
    // distant island silhouettes
    for (let i = 0; i < 9; i++) {
      const a = rng.range(0, Math.PI * 2), r = rng.range(950, 1350);
      const h = rng.range(20, 60);
      const m = new THREE.Mesh(new THREE.ConeGeometry(rng.range(80, 170), h, 6), new THREE.MeshStandardMaterial({ color: 0x1a2430, roughness: 1 }));
      m.position.set(Math.cos(a) * r, -2, Math.sin(a) * r);
      this.scene.add(m);
    }
  }

  // ---------------------------------------------------------------- city
  _buildCity() {
    const rng = this.rng;
    this.buildingGeos = [];
    const reserved = new Set(['-2,2', '1,1', '-5,0', '0,-2', '3,-1', '-1,-4', '1,0', '4,1']);
    const colors = {
      downtown: [0x9b8fa5, 0x7f8ea0, 0xb0a3a1, 0x6e7b8c, 0xa69a8c, 0x8a8397, 0x5e6a78],
      beach: [0xffb7c8, 0x9fe0d8, 0xffe0a8, 0xc8b8ff, 0xa8e6ff, 0xffc3a0, 0xf4e6d8],
      port: [0x8a8578, 0x6d726c, 0x9c8a72, 0x7d6f61, 0x5f676b, 0x9a9587],
      keys: [0xc9a6a0, 0x8fb7a8, 0xd8c3a0, 0xa8b8c8, 0xe0b8b0],
    };
    const col = new THREE.Color();
    for (let gx = CITY.gridMin; gx <= CITY.gridMax; gx++) {
      for (let gz = CITY.gridMin; gz <= CITY.gridMax; gz++) {
        if (reserved.has(`${gx},${gz}`)) continue;
        const cx = gx * CITY.road + 40, cz = gz * CITY.road + 40;
        const dist = Math.hypot(cx, cz);
        let palette = colors.downtown;
        if (cx > 240) palette = colors.beach;
        else if (cx < -250) palette = colors.port;
        else if (cz > 300) palette = colors.keys;
        // parks
        if (rng.r() < 0.07) { this._park(cx, cz); continue; }
        const lotW = 60, lotD = 60;
        const n = 1 + Math.floor(rng.r() * 3);
        if (n === 1) {
          const h = this._heightFor(cx, cz, dist, palette);
          const w = rng.range(34, 56), d = rng.range(34, 56);
          this._building(cx + rng.range(-3, 3), cz + rng.range(-3, 3), w, d, h, rng.pick(palette), rng);
        } else {
          for (let i = 0; i < n; i++) {
            const w = rng.range(20, 32), d = rng.range(20, 32);
            const ox = rng.range(-lotW / 2 + w / 2 + 3, lotW / 2 - w / 2 - 3);
            const oz = rng.range(-lotD / 2 + d / 2 + 3, lotD / 2 - d / 2 - 3);
            const h = this._heightFor(cx, cz, dist, palette);
            this._building(cx + ox, cz + oz, w, d, h, rng.pick(palette), rng);
          }
        }
        // occasional billboard / sign
        if (rng.r() < 0.28) this._neonSign(cx + rng.range(-24, 24), cz + rng.range(-24, 24), rng.range(5, 18), rng.pick(['VICE', 'HOTEL', 'LIQUOR', 'TACOS', 'MOTEL', 'CLUB', 'PAWN', '24/7', 'GYM', 'BAIT', 'SUNSET', 'LEONIDA']), rng);
      }
    }
    const facade = facadeTexture();
    this.bodies = new THREE.Mesh(mergeGeometries(this.buildingGeos), new THREE.MeshStandardMaterial({
      map: facade, emissiveMap: facade, vertexColors: true, roughness: 0.78, metalness: 0.12,
      emissive: 0xffd6a0, emissiveIntensity: 0.2,
    }));
    this.bodies.castShadow = true; this.bodies.receiveShadow = true;
    this.buildingMat = this.bodies.material;
    this.scene.add(this.bodies);

    // park trees
    for (const p of this.parks || []) {
      for (let i = 0; i < 5; i++) this._palm(p.x + this.rng.range(-25, 25), p.z + this.rng.range(-25, 25), this.rng.range(0.7, 1.1));
    }
  }

  _heightFor(x, z, dist, palette) {
    const rng = this.rng;
    if (palette === 'beach') return rng.range(7, 21);
    if (x < -250) return rng.range(8, 18);
    if (z > 300) return rng.range(6, 13);
    if (dist < 170) return rng.range(34, 105) * (1 - dist / 420);
    if (dist < 300) return rng.range(14, 46);
    return rng.range(8, 22);
  }

  _building(x, z, w, d, h, color, rng) {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const us = Math.max(w, d) / 12, vs = h / 16;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * us, uv.getY(i) * vs);
    g.translate(x, h / 2 + 0.26, z);
    const c = new THREE.Color(color).convertSRGBToLinear();
    const arr = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < g.attributes.position.count; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    this.buildingGeos.push(g);
    this.colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h });
    if (h > 45 && rng.r() < 0.75) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, h * 0.16, 5), new THREE.MeshStandardMaterial({ color: 0x8f8f9a, roughness: 0.5, metalness: 0.7 }));
      ant.position.set(x, h + 0.26 + h * 0.08, z); this.scene.add(ant);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3344 }));
      tip.position.set(x, h + 0.26 + h * 0.16, z); this.scene.add(tip);
    }
  }

  _park(cx, cz) {
    this.parks = this.parks || [];
    this.parks.push({ x: cx, z: cz });
    const geo = new THREE.PlaneGeometry(56, 56); geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x4f6b48, roughness: 1 });
    const m = new THREE.Mesh(geo, mat); m.position.set(cx, 0.28, cz); m.receiveShadow = true; this.scene.add(m);
    const path = new THREE.PlaneGeometry(5, 56); path.rotateX(-Math.PI / 2);
    const pm = new THREE.Mesh(path, new THREE.MeshStandardMaterial({ color: 0x8c8578, roughness: 0.95 }));
    pm.position.set(cx, 0.29, cz); this.scene.add(pm);
  }

  _neonSign(x, z, y, text, rng) {
    const color = rng.pick(['#ff2f8e', '#38e8ff', '#ffd166', '#7dff9c', '#ff7a4d', '#c38bff']);
    const tex = textTexture(text, color, 'rgba(8,6,14,.92)', rng.r() > 0.5 ? 'LEONIDA' : '');
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, toneMapped: false });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(11, 3.4), mat);
    m.position.set(x, y, z);
    m.rotation.y = rng.pick([0, Math.PI / 2, Math.PI, -Math.PI / 2]);
    this.scene.add(m);
    return m;
  }

  _buildSpecials() {
    // ---------------- Palm Shade Motel ----------------
    const motelMat = new THREE.MeshStandardMaterial({ color: 0xd9a6a2, roughness: 0.85 });
    const trim = new THREE.MeshStandardMaterial({ color: 0x6a3d58, roughness: 0.7 });
    const motel = new THREE.Group();
    const block = new THREE.Mesh(new THREE.BoxGeometry(46, 9, 16), motelMat);
    block.position.set(-120, 4.76, 214); motel.add(block);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(50, 0.6, 19), trim); roof.position.set(-120, 9.4, 214); motel.add(roof);
    for (let i = 0; i < 6; i++) {
      const door = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.4), new THREE.MeshBasicMaterial({ color: 0x2a1c2a }));
      door.position.set(-142 + i * 8.6, 2.5, 205.9); door.rotation.y = 0; motel.add(door);
      const win = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.0), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffd9a0 : 0x33445c }));
      win.position.set(-138.8 + i * 8.6, 5.5, 205.9); motel.add(win);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffbf7a }));
      lamp.position.set(-142 + i * 8.6, 6.4, 205.6); motel.add(lamp);
    }
    const signTex = textTexture('PALM SHADE', '#ff5da8', 'rgba(10,5,15,.9)', 'MOTEL · VACANCY');
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(20, 6), new THREE.MeshBasicMaterial({ map: signTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    sign.position.set(-120, 13, 206.5); motel.add(sign);
    this.motelSignMat = sign.material;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 8, 6), trim); post.position.set(-120, 13.5, 208.5); post.rotation.x = 0.08; motel.add(post);
    // pool
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(16, 9), new THREE.MeshStandardMaterial({ color: 0x1e8ca0, roughness: 0.1, metalness: 0.6 }));
    pool.rotation.x = -Math.PI / 2; pool.position.set(-120, 0.33, 228); motel.add(pool);
    this.scene.add(motel);
    this.colliders.push({ minX: -143, maxX: -97, minZ: 206, maxZ: 222, h: 9 });
    this.colliders.push({ minX: -128, maxX: -112, minZ: 224, maxZ: 232, h: 0.4 });

    // ---------------- Gas & Go ----------------
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(30, 0.8, 20), new THREE.MeshStandardMaterial({ color: 0xd7d2c4, roughness: 0.6, metalness: 0.4 }));
    canopy.position.set(120, 6.2, 120); this.scene.add(canopy);
    for (const [x, z] of [[107, 113], [133, 113], [107, 127], [133, 127]]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 6.2, 8), new THREE.MeshStandardMaterial({ color: 0x8f8b88, metalness: 0.6, roughness: 0.4 }));
      col.position.set(x, 3.1, z); this.scene.add(col);
    }
    const gstore = new THREE.Mesh(new THREE.BoxGeometry(16, 8, 12), new THREE.MeshStandardMaterial({ color: 0xe7dfcf, roughness: 0.8 }));
    gstore.position.set(138, 4.26, 129); this.scene.add(gstore);
    this.colliders.push({ minX: 130, maxX: 146, minZ: 123, maxZ: 135, h: 8 });
    for (const z of [118, 122]) {
      const pump = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.2, 0.8), new THREE.MeshStandardMaterial({ color: 0xdedad2, roughness: 0.5 }));
      base.position.y = 1.1; pump.add(base);
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), new THREE.MeshBasicMaterial({ color: 0x38e8ff }));
      scr.position.set(0, 1.55, 0.42); pump.add(scr);
      pump.position.set(122, 0.3, z); this.scene.add(pump);
    }
    const gsignTex = textTexture('GAS & GO', '#ffd166', 'rgba(10,7,4,.9)', 'FUEL · REPAIR · ICE');
    const gsign = new THREE.Mesh(new THREE.PlaneGeometry(22, 6), new THREE.MeshBasicMaterial({ map: gsignTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    gsign.position.set(138, 10.5, 123); this.scene.add(gsign);

    // ---------------- Pawn & Pwn (Port Gellhorn) ----------------
    const pawnB = new THREE.Mesh(new THREE.BoxGeometry(34, 11, 22), new THREE.MeshStandardMaterial({ color: 0x8f7c62, roughness: 0.85 }));
    pawnB.position.set(-360, 5.76, 40); this.scene.add(pawnB);
    this.colliders.push({ minX: -377, maxX: -343, minZ: 29, maxZ: 51, h: 11 });
    const pawnTex = textTexture('PAWN & PWN', '#7dff9c', 'rgba(5,10,7,.92)', 'WE BUY · NO QUESTIONS');
    const pawnSign = new THREE.Mesh(new THREE.PlaneGeometry(24, 6), new THREE.MeshBasicMaterial({ map: pawnTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    pawnSign.position.set(-360, 9.4, 52); this.scene.add(pawnSign);
    for (let i = 0; i < 8; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 0.4), new THREE.MeshStandardMaterial({ color: 0xb0a58f, roughness: 0.6 }));
      bar.position.set(-372 + i * 3.4, 0.9, 52.3); this.scene.add(bar);
    }
    // fence counter
    const counter = new THREE.Mesh(new THREE.BoxGeometry(4, 1, 1.6), new THREE.MeshStandardMaterial({ color: 0x3d332a }));
    counter.position.set(-360, 0.8, 24.5); this.scene.add(counter);

    // ---------------- Leonida National Bank ----------------
    const bankGeo = new THREE.BoxGeometry(52, 74, 42);
    bankGeo.translate(40, 37.26, -120);
    const bc = new THREE.Color(0x8c9aaa).convertSRGBToLinear();
    const arr = new Float32Array(bankGeo.attributes.position.count * 3);
    for (let i = 0; i < bankGeo.attributes.position.count; i++) { arr[i * 3] = bc.r; arr[i * 3 + 1] = bc.g; arr[i * 3 + 2] = bc.b; }
    bankGeo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    // merged with body happens too late; add as separate textured mesh
    const bank = new THREE.Mesh(bankGeo, new THREE.MeshStandardMaterial({ color: 0x9aa8ba, roughness: 0.55, metalness: 0.35, emissive: 0x1b2a3a, emissiveIntensity: 0.5 }));
    bank.castShadow = true; this.scene.add(bank);
    this.colliders.push({ minX: 14, maxX: 66, minZ: -141, maxZ: -99, h: 74 });
    const bankTex = textTexture('LEONIDA NATIONAL', '#38e8ff', 'rgba(5,8,14,.94)', 'SECURE YOUR FUTURE');
    const bankSign = new THREE.Mesh(new THREE.PlaneGeometry(34, 8), new THREE.MeshBasicMaterial({ map: bankTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    bankSign.position.set(40, 58, -98.6); this.scene.add(bankSign);
    for (let i = 0; i < 6; i++) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 16, 10), new THREE.MeshStandardMaterial({ color: 0xbcc6d2, roughness: 0.6 }));
      col.position.set(18 + i * 9, 8, -92); this.scene.add(col);
    }
    // steps
    const steps = new THREE.Mesh(new THREE.BoxGeometry(40, 1.2, 10), new THREE.MeshStandardMaterial({ color: 0x777f8a, roughness: 0.9 }));
    steps.position.set(40, 0.6, -93); this.scene.add(steps);

    // ---------------- 24/7 Mart (Ocean Beach) ----------------
    const store = new THREE.Mesh(new THREE.BoxGeometry(30, 7, 20), new THREE.MeshStandardMaterial({ color: 0xf0d9a0, roughness: 0.8 }));
    store.position.set(280, 3.76, -40); this.scene.add(store);
    this.colliders.push({ minX: 265, maxX: 295, minZ: -50, maxZ: -30, h: 7 });
    const storeTex = textTexture('24/7 MART', '#ff9c5b', 'rgba(12,7,4,.9)', 'OPEN ALL NIGHT');
    const storeSign = new THREE.Mesh(new THREE.PlaneGeometry(18, 5), new THREE.MeshBasicMaterial({ map: storeTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    storeSign.position.set(280, 8.6, -29); this.scene.add(storeSign);
    const canopyStore = new THREE.Mesh(new THREE.BoxGeometry(22, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0xc4523a, roughness: 0.7 }));
    canopyStore.position.set(280, 5, -27); this.scene.add(canopyStore);

    // ---------------- Mercy Hospital ----------------
    const hosp = new THREE.Mesh(new THREE.BoxGeometry(40, 28, 34), new THREE.MeshStandardMaterial({ color: 0xd6dbe2, roughness: 0.7 }));
    hosp.position.set(-40, 14.26, -280); this.scene.add(hosp);
    this.colliders.push({ minX: -60, maxX: -20, minZ: -297, maxZ: -263, h: 28 });
    const crossMat = new THREE.MeshBasicMaterial({ color: 0xff4060, toneMapped: false });
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 0.5), crossMat); c1.position.set(-40, 22, -262.7); this.scene.add(c1);
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(3, 10, 0.5), crossMat); c2.position.set(-40, 22, -262.7); this.scene.add(c2);
    const hTex = textTexture('MERCY HOSPITAL', '#ff6b6b', 'rgba(8,5,8,.9)', 'TRAUMA · 24H');
    const hSign = new THREE.Mesh(new THREE.PlaneGeometry(18, 5), new THREE.MeshBasicMaterial({ map: hTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    hSign.position.set(-40, 15, -262.5); this.scene.add(hSign);

    // ---------------- Volt Charge ----------------
    for (let i = 0; i < 3; i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(1.6, 3.2, 1), new THREE.MeshStandardMaterial({ color: 0xe8f6ff, emissive: 0x38e8ff, emissiveIntensity: 1.1, roughness: 0.4 }));
      p.position.set(348 + i * 6, 1.9, 122); this.scene.add(p);
    }
    const vTex = textTexture('VOLT', '#38e8ff', 'rgba(4,8,12,.9)', 'EV CHARGE');
    const vSign = new THREE.Mesh(new THREE.PlaneGeometry(12, 5), new THREE.MeshBasicMaterial({ map: vTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    vSign.position.set(360, 7, 110); this.scene.add(vSign);

    // store gas station pump position for interactions
    this.pumps = [{ x: 122, z: 118 }, { x: 122, z: 122 }];
  }

  _buildVegetation() {
    const rng = this.rng;
    for (let i = 0; i < 120; i++) {
      const gx = Math.floor(rng.range(CITY.gridMin, CITY.gridMax + 1));
      const gz = Math.floor(rng.range(CITY.gridMin, CITY.gridMax + 1));
      const cx = gx * CITY.road + 40, cz = gz * CITY.road + 40;
      const edge = rng.r();
      let x, z;
      if (edge < 0.5) { x = cx + rng.range(-35, 35); z = cz + (rng.r() > 0.5 ? 34.4 : -34.4); }
      else { x = cx + (rng.r() > 0.5 ? 34.4 : -34.4); z = cz + rng.range(-35, 35); }
      if (this.isInsideBuilding(x, z, 2)) continue;
      this._palm(x, z, rng.range(0.7, 1.2));
    }
  }

  _palm(x, z, scale = 1) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.26 * scale, 0.42 * scale, 7 * scale, 6), new THREE.MeshStandardMaterial({ color: 0x6b4d34, roughness: 0.95 }));
    trunk.position.y = 3.5 * scale; trunk.rotation.z = this.rng.range(-0.09, 0.09); trunk.castShadow = true; g.add(trunk);
    const crown = new THREE.Group();
    const leafMat = new THREE.MeshStandardMaterial({ color: this.rng.r() > 0.35 ? 0x2f6b45 : 0x3d7a4a, roughness: 0.9, side: THREE.DoubleSide });
    const leafGeos = [];
    for (let i = 0; i < 7; i++) {
      const leaf = new THREE.PlaneGeometry(0.9, 4.6);
      leaf.translate(0, 2.3, 0);
      leaf.rotateX(-0.55 - this.rng.range(0, 0.2));
      leaf.rotateY((i / 7) * Math.PI * 2 + this.rng.range(-0.2, 0.2));
      leafGeos.push(leaf);
    }
    const leaves = new THREE.Mesh(mergeGeometries(leafGeos), leafMat);
    leaves.position.y = 7 * scale; leaves.castShadow = true; leaves.scale.setScalar(scale);
    crown.add(leaves);
    g.add(crown);
    g.position.set(x, 0.28, z);
    g.userData.phase = this.rng.range(0, 6.28);
    g.userData.crown = crown;
    this.windObjects.push(g);
    this.scene.add(g);
  }

  _buildStreetLights() {
    const positions = [];
    for (let i = CITY.gridMin; i <= CITY.gridMax + 1; i++) {
      for (let j = -440; j < 380; j += 40) {
        positions.push([i * CITY.road + 8.2, j, 0]);
        positions.push([j, i * CITY.road + 8.2, 1]);
      }
    }
    const poleGeo = new THREE.CylinderGeometry(0.13, 0.18, 7.2, 6);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3c3b44, roughness: 0.6, metalness: 0.5 });
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, positions.length);
    const bulbGeo = new THREE.SphereGeometry(0.34, 7, 6);
    this.bulbMat = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffc270, emissiveIntensity: 0.2 });
    const bulbs = new THREE.InstancedMesh(bulbGeo, this.bulbMat, positions.length);
    const d = new THREE.Object3D();
    positions.forEach((p, idx) => {
      d.position.set(p[0], 3.6, p[2] === 0 ? p[1] : p[0]);
      if (p[2] === 1) d.position.set(p[0], 3.6, p[1]);
      d.rotation.set(0, 0, 0); d.updateMatrix();
      poles.setMatrixAt(idx, d.matrix);
      d.position.y = 7.25; d.updateMatrix(); bulbs.setMatrixAt(idx, d.matrix);
    });
    this.scene.add(poles); this.scene.add(bulbs);
    this.streetBulbs = bulbs;
  }

  // ---------------------------------------------------------------- weather
  _buildWeather() {
    // clouds (billboards)
    this.cloudGroup = new THREE.Group(); this.scene.add(this.cloudGroup);
    const cloudTex = cloudTexture();
    this.clouds = [];
    for (let i = 0; i < 16; i++) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, transparent: true, opacity: 0.25, depthWrite: false, color: 0xffffff, fog: false }));
      const a = (i / 16) * Math.PI * 2 + this.rng.range(-0.3, 0.3);
      const r = this.rng.range(250, 900);
      m.position.set(Math.cos(a) * r, this.rng.range(150, 290), Math.sin(a) * r);
      const s = this.rng.range(280, 620);
      m.scale.set(s, s * 0.45, 1);
      m.userData.base = { x: m.position.x, z: m.position.z, o: m.material.opacity, r };
      this.cloudGroup.add(m); this.clouds.push(m);
    }

    // rain
    const RAIN = 4500;
    const rp = new Float32Array(RAIN * 3);
    for (let i = 0; i < RAIN; i++) {
      rp[i * 3] = this.rng.range(-55, 55);
      rp[i * 3 + 1] = this.rng.range(0, 45);
      rp[i * 3 + 2] = this.rng.range(-55, 55);
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
    const rainTex = canvasTexture(16, 64, (g, w, h) => {
      const grd = g.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, 'rgba(200,225,255,0)'); grd.addColorStop(0.5, 'rgba(210,232,255,.9)'); grd.addColorStop(1, 'rgba(180,210,255,0)');
      g.fillStyle = grd; g.fillRect(w / 2 - 1.5, 0, 3, h);
    });
    this.rainMat = new THREE.PointsMaterial({ map: rainTex, size: 1.6, transparent: true, opacity: 0, depthWrite: false, color: 0xcfe6ff, sizeAttenuation: true, blending: THREE.AdditiveBlending });
    this.rain = new THREE.Points(rg, this.rainMat);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.scene.add(this.rain);
    this.rainData = { count: RAIN, speeds: new Float32Array(RAIN) };
    for (let i = 0; i < RAIN; i++) this.rainData.speeds[i] = this.rng.range(22, 42);
  }

  _buildInterior() {
    const room = new THREE.Group();
    room.position.set(1600, 0, 1600);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x6d4b42, roughness: 0.7 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x8e7a6d, roughness: 0.9 });
    const floor = new THREE.Mesh(new THREE.BoxGeometry(18, 0.3, 15), floorMat); floor.position.y = 0.1; room.add(floor);
    const ceil = new THREE.Mesh(new THREE.BoxGeometry(18, 0.3, 15), new THREE.MeshStandardMaterial({ color: 0xd8cbb8, roughness: 0.8 })); ceil.position.y = 4.2; room.add(ceil);
    const mkWall = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 4.4, d), wallMat); m.position.set(x, 2.2, z); room.add(m); };
    mkWall(18, 0.4, 0, -7.3); mkWall(0.4, 15, -8.8, 0); mkWall(0.4, 15, 8.8, 0);
    mkWall(6, 0.4, -6, 7.3); mkWall(6, 0.4, 6, 7.3);
    // back door frame
    const doorGeo = new THREE.BoxGeometry(2.2, 3.6, 0.2);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x3a2a24 });
    const front = new THREE.Mesh(doorGeo, doorMat); front.position.set(0, 1.9, 7.28); room.add(front);
    const back = new THREE.Mesh(doorGeo, doorMat); back.position.set(0, 1.9, -7.1); room.add(back);
    const backGlow = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.8), new THREE.MeshBasicMaterial({ color: 0x7dff9c, transparent: true, opacity: 0.22, side: THREE.DoubleSide }));
    backGlow.position.set(0, 1.9, -7.02); room.add(backGlow);
    const frontGlow = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.8), new THREE.MeshBasicMaterial({ color: 0xff2f8e, transparent: true, opacity: 0.18, side: THREE.DoubleSide }));
    frontGlow.position.set(0, 1.9, 7.22); room.add(frontGlow);
    // bed
    const bed = new THREE.Group();
    const bm = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.8, 6), new THREE.MeshStandardMaterial({ color: 0x5c3242, roughness: 0.9 })); bm.position.y = 0.7; bed.add(bm);
    const sheet = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.22, 5.6), new THREE.MeshStandardMaterial({ color: 0xe6d6d0, roughness: 0.95 })); sheet.position.y = 1.2; bed.add(sheet);
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.4, 1.2), new THREE.MeshStandardMaterial({ color: 0xffe9df })); pillow.position.set(0, 1.4, -2.2); bed.add(pillow);
    bed.position.set(-5.8, 0.25, -2.4); room.add(bed);
    // TV + couch
    const tv = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.2), new THREE.MeshBasicMaterial({ color: 0x1b3f60 })); tv.position.set(0.2, 2.4, -7.0); room.add(tv);
    const tvGlow = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.1), new THREE.MeshBasicMaterial({ color: 0x38e8ff, transparent: true, opacity: 0.15 })); tvGlow.position.set(0.2, 2.4, -6.98); room.add(tvGlow);
    const couch = new THREE.Mesh(new THREE.BoxGeometry(5, 1.2, 1.8), new THREE.MeshStandardMaterial({ color: 0x4b3a52 })); couch.position.set(0, 0.9, -4.6); room.add(couch);
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.2, 0.15, 12), new THREE.MeshStandardMaterial({ color: 0x3a2a24 })); table.position.set(0.2, 1.25, -1.8); room.add(table);
    const light = new THREE.PointLight(0xffbf8a, 18, 22, 2); light.position.set(0, 3.6, 0); room.add(light);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd9a0 })); lamp.position.set(0, 3.6, 0); room.add(lamp);
    const bag = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 1.7), new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.9 })); bag.position.set(3.2, 1.7, -1.6); room.add(bag);
    room.visible = false;
    this.interior = { group: room, front: { x: 1600, z: 1607.5 }, back: { x: 1600, z: 1592.5 }, center: { x: 1600, z: 1600 } };
    this.scene.add(room);
  }

  // ---------------------------------------------------------------- helpers
  isInsideBuilding(x, z, pad = 0) {
    for (const c of this.colliders) {
      if (c.h < 0.8) continue;
      if (x > c.minX - pad && x < c.maxX + pad && z > c.minZ - pad && z < c.maxZ + pad) return true;
    }
    return false;
  }

  lineBlocked(x1, z1, x2, z2) {
    const steps = 7;
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      if (this.isInsideBuilding(lerp(x1, x2, t), lerp(z1, z2, t), 0.2)) return true;
    }
    return false;
  }

  collideCircle(pos, radius) {
    let hit = false;
    for (const c of this.colliders) {
      if (c.h < 0.5) continue;
      const cx = clamp(pos.x, c.minX, c.maxX), cz = clamp(pos.z, c.minZ, c.maxZ);
      let dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < radius * radius) {
        let d = Math.sqrt(d2);
        if (d < 0.0001) { dx = pos.x - (c.minX + c.maxX) / 2; dz = pos.z - (c.minZ + c.maxZ) / 2; d = Math.hypot(dx, dz) || 1; }
        const push = radius - d;
        pos.x += (dx / d) * push; pos.z += (dz / d) * push;
        hit = true;
      }
    }
    // island edge
    const r = Math.hypot(pos.x, pos.z);
    if (r > CITY.beachR - 4) {
      const k = (CITY.beachR - 4) / r;
      pos.x *= k; pos.z *= k; hit = true;
    }
    return hit;
  }

  districtAt(x, z) {
    if (Math.hypot(x - POI.motel.x, z - POI.motel.z) < 130) return 'PALM SHADE';
    if (x < -250) return 'PORT GELLHORN';
    if (z > 300) return 'LEONIDA KEYS';
    if (x > 230) return 'OCEAN BEACH';
    if (Math.abs(x) < 180 && Math.abs(z) < 200) return 'DOWNTOWN VICE CITY';
    return 'VICE CITY';
  }

  setWeather(mode) {
    const w = this.weather;
    w.mode = mode;
    if (mode === 'clear') { w.targetRain = 0; w.wind = 0.55; w.timer = 70 + Math.random() * 60; }
    if (mode === 'cloudy') { w.targetRain = 0; w.wind = 0.9; w.timer = 45 + Math.random() * 50; }
    if (mode === 'rain') { w.targetRain = 0.7; w.wind = 1.15; w.timer = 60 + Math.random() * 50; }
    if (mode === 'storm') { w.targetRain = 1; w.wind = 2.1; w.timer = 45 + Math.random() * 40; }
  }

  // ---------------------------------------------------------------- update
  update(dt, camera, focusActive, game) {
    this.time += dt;
    this.cameraPos.copy(camera.position);
    const w = this.weather;

    // weather state machine
    w.timer -= dt;
    if (w.timer <= 0) {
      const modes = ['clear', 'clear', 'cloudy', 'rain', 'storm'];
      let next = modes[Math.floor(Math.random() * modes.length)];
      if (next === w.mode) next = 'cloudy';
      this.setWeather(next);
      game?.onWeatherChange?.(next);
    }
    w.rain += (w.targetRain - w.rain) * Math.min(1, dt * 0.35);
    if (w.rain > 0.01) w.wetness = Math.min(1, w.wetness + dt * 0.06 * w.rain);
    else w.wetness = Math.max(0, w.wetness - dt * 0.012);
    w.wind += ((0.55 + w.rain * 1.5) - w.wind) * Math.min(1, dt * 0.4);
    w.flash = Math.max(0, w.flash - dt * 4.5);
    if (w.rain > 0.55) {
      w.lightningTimer -= dt;
      if (w.lightningTimer <= 0) {
        w.lightningTimer = 6 + Math.random() * 12;
        w.flash = 1;
        if (game?.audio) game.audio.thunder();
      }
    }

    // day-night
    this.hour = (this.hour + (24 / this.dayLength) * dt) % 24;
    const t = this.hour / 24;
    const sunEl = Math.sin((t - 0.25) * Math.PI * 2); // +1 noon
    const sunAz = t * Math.PI * 2;
    const sunDir = new THREE.Vector3(Math.cos(sunAz) * Math.cos(sunEl * 0.8), sunEl, Math.sin(sunAz) * Math.cos(sunEl * 0.8)).normalize();
    const daylight = smooth(-0.12, 0.22, sunEl);
    const dusk = Math.max(0, 1 - Math.abs(sunEl) * 3.2);
    this.nightFactor = 1 - daylight;

    const dayTop = new THREE.Color(0x3f79b8), dayMid = new THREE.Color(0x9cc0dd), dayBot = new THREE.Color(0xffdfba);
    const duskTop = new THREE.Color(0x241a44), duskMid = new THREE.Color(0x7c3d6a), duskBot = new THREE.Color(0xff9a6a);
    const nightTop = new THREE.Color(0x040610), nightMid = new THREE.Color(0x0b1026), nightBot = new THREE.Color(0x1d2038);
    const top = nightTop.clone().lerp(dayTop, daylight).lerp(duskTop, dusk * 0.7);
    const mid = nightMid.clone().lerp(dayMid, daylight).lerp(duskMid, dusk * 0.75);
    const bot = nightBot.clone().lerp(dayBot, daylight).lerp(duskBot, dusk * 0.85);
    this.skyUniforms.top.value.copy(top);
    this.skyUniforms.mid.value.copy(mid);
    this.skyUniforms.bottom.value.copy(bot);
    this.skyUniforms.sunDir.value.copy(sunDir);
    this.skyUniforms.night.value = this.nightFactor;

    const fogCol = bot.clone().lerp(mid, 0.4);
    this.scene.fog.color.copy(fogCol);
    this.scene.fog.density = 0.0014 + w.rain * 0.0025;
    this.oceanUniforms.sky.value.copy(fogCol);
    this.oceanUniforms.time.value = this.time;
    this.oceanUniforms.sun.value.copy(sunDir);

    this.sun.position.copy(sunDir).multiplyScalar(320);
    this.sun.position.y = Math.max(30, this.sun.position.y);
    this.sun.intensity = lerp(0.25, 2.35, daylight) * (1 - w.rain * 0.55) + 1.5 * w.flash;
    this.sun.color.copy(new THREE.Color(0xff9a63).lerp(new THREE.Color(0xfff0d6), daylight));
    this.sun.target.position.set(this.cameraPos.x, 0, this.cameraPos.z);
    this.hemi.intensity = lerp(0.22, 0.72, daylight) * (1 - w.rain * 0.25);
    this.hemi.color.copy(new THREE.Color(0x223055).lerp(new THREE.Color(0xa8d2ff), daylight));
    this.hemi.groundColor.copy(new THREE.Color(0x16121c).lerp(new THREE.Color(0x5b4a3a), daylight));
    this.moon.intensity = this.nightFactor * 0.28;
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);
    this.starMat.opacity = this.nightFactor * 0.9;
    this.sunSprite.position.copy(camera.position).add(sunDir.clone().multiplyScalar(950));
    this.sunSprite.material.opacity = clamp(sunEl * 2.5, 0, 0.85);
    this.sunSprite.material.color.copy(new THREE.Color(0xffb070).lerp(new THREE.Color(0xfff4d0), daylight));
    this.sunSprite.scale.setScalar(lerp(70, 150, clamp(sunEl, 0, 1)));

    const night = this.nightFactor;
    this.buildingMat.emissiveIntensity = lerp(0.05, 0.55, night) + dusk * 0.12;
    this.bulbMat.emissiveIntensity = lerp(0.1, 2.2, night);
    if (this.neonLights) this.neonLights.forEach((l, i) => { l.intensity = (i < 2 ? 10 : 7) * (0.35 + night * 1.1); });

    // wet streets
    for (const sm of this.streetMaterials) {
      const k = w.wetness;
      sm.mat.roughness = lerp(sm.rough[0], sm.rough[1], k);
      sm.mat.color.copy(sm.baseColor).lerp(sm.wetColor, k * 0.75);
    }
    this.puddleMat.opacity = w.wetness * 0.8;

    // vegetation wind
    const wind = w.wind;
    for (const p of this.windObjects) {
      const ph = p.userData.phase + this.time;
      p.userData.crown.rotation.z = Math.sin(ph * 1.1) * 0.055 * wind;
      p.userData.crown.rotation.x = Math.cos(ph * 0.8) * 0.04 * wind;
    }

    // clouds
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      c.position.x += dt * 2.2 * wind * (0.6 + (i % 3) * 0.15);
      if (c.position.x - this.cameraPos.x > 900) c.position.x = this.cameraPos.x - 900;
      c.position.z += Math.sin(this.time * 0.05 + i) * dt * 0.6;
      c.material.opacity = (w.mode === 'storm' ? 0.72 : w.mode === 'rain' ? 0.55 : w.mode === 'cloudy' ? 0.4 : 0.22) * (0.5 + this.rng.r() * 0.02);
      c.material.color.setHex(w.mode === 'storm' ? 0x4a4d5e : w.mode === 'rain' ? 0x7b8296 : 0xffffff);
    }

    // rain particles
    this.rain.visible = w.rain > 0.02;
    if (this.rain.visible) {
      const pos = this.rain.geometry.attributes.position.array;
      const sp = this.rainData.speeds;
      const cx = camera.position.x, cy = camera.position.y, cz = camera.position.z;
      const fall = 0.9 + w.rain;
      for (let i = 0; i < this.rainData.count; i++) {
        pos[i * 3 + 1] -= sp[i] * dt * fall;
        pos[i * 3] += wind * 4.5 * dt;
        pos[i * 3 + 2] += wind * 1.5 * dt;
        if (pos[i * 3 + 1] < cy - 6) {
          pos[i * 3] = cx + (Math.random() - 0.5) * 110;
          pos[i * 3 + 1] = cy + 38 + Math.random() * 12;
          pos[i * 3 + 2] = cz + (Math.random() - 0.5) * 110;
        }
        if (Math.abs(pos[i * 3] - cx) > 70) pos[i * 3] = cx + (Math.random() - 0.5) * 110;
        if (Math.abs(pos[i * 3 + 2] - cz) > 70) pos[i * 3 + 2] = cz + (Math.random() - 0.5) * 110;
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
      this.rainMat.opacity = w.rain * 0.62;
    }
    if (game?.audio) game.audio.setRain(w.rain);

    // lightning flash light
    if (w.flash > 0.01) this.hemi.intensity += w.flash * 2.5;

    // camera-facing visibility of interior
    this.sky.visible = !this.interiorActive;
    if (this.interiorActive) {
      this.scene.fog.density = 0.0;
    }
  }

  clockString() {
    const h = Math.floor(this.hour), m = Math.floor((this.hour % 1) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  weatherLabel() {
    const w = this.weather;
    if (w.mode === 'storm') return 'HURRICANE WARNING';
    if (w.mode === 'rain') return 'TROPICAL RAIN';
    if (w.mode === 'cloudy') return 'OVERCAST';
    return this.nightFactor > 0.5 ? 'CLEAR NIGHT' : 'CLEAR';
  }

  // ---------------------------------------------------------------- radar map
  _buildMapCanvas() {
    const S = 2048, span = 1400;
    const c = document.createElement('canvas'); c.width = c.height = S;
    const g = c.getContext('2d');
    const sx = S / span, cx = S / 2;
    g.fillStyle = '#0a1a26'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#1a2a33';
    g.beginPath(); g.arc(cx, cx, 660 * sx, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#2f2b36';
    g.beginPath(); g.arc(cx, cx, 500 * sx, 0, Math.PI * 2); g.fill();
    // roads
    g.strokeStyle = '#4b4756'; g.lineWidth = 14 * sx;
    for (let i = CITY.gridMin; i <= CITY.gridMax + 1; i++) {
      const p = cx + i * CITY.road * sx;
      g.beginPath(); g.moveTo(p, cx + (CITY.gridMin * CITY.road) * sx); g.lineTo(p, cx + ((CITY.gridMax + 1) * CITY.road) * sx); g.stroke();
      g.beginPath(); g.moveTo(cx + (CITY.gridMin * CITY.road) * sx, p); g.lineTo(cx + ((CITY.gridMax + 1) * CITY.road) * sx, p); g.stroke();
    }
    // blocks
    for (let gx = CITY.gridMin; gx <= CITY.gridMax; gx++) {
      for (let gz = CITY.gridMin; gz <= CITY.gridMax; gz++) {
        const x = cx + (gx * CITY.road + 40) * sx, z = cx + (gz * CITY.road + 40) * sx;
        g.fillStyle = gx < -2 ? '#4c4a42' : gx > 3 ? '#5c464e' : '#3f3b4b';
        g.fillRect(x - 30 * sx, z - 30 * sx, 60 * sx, 60 * sx);
      }
    }
    // POI
    const poiCol = { motel: '#ff5da8', gas: '#ffd166', pawn: '#7dff9c', bank: '#38e8ff', store: '#ff9c5b', hospital: '#ff6b6b', charger: '#38e8ff' };
    for (const k in POI) {
      g.fillStyle = poiCol[k] || '#fff';
      const x = cx + POI[k].x * sx, z = cx + POI[k].z * sx;
      g.fillRect(x - 9, z - 9, 18, 18);
      g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 3; g.strokeRect(x - 9, z - 9, 18, 18);
    }
    this.mapCanvas = c; this.mapScale = sx; this.mapCenter = cx;
  }

  drawRadar(ctx, x, z, heading, entities, marker) {
    const W = ctx.canvas.width, R = W / 2;
    const range = 115; // world meters across radius
    const pxPerM = R / range;
    ctx.clearRect(0, 0, W, W);
    ctx.save();
    ctx.beginPath(); ctx.arc(R, R, R, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = '#0a1a26'; ctx.fillRect(0, 0, W, W);
    const mapPx = this.mapScale / pxPerM;
    const cxMap = this.mapCenter + x * this.mapScale;
    const czMap = this.mapCenter + z * this.mapScale;
    ctx.drawImage(this.mapCanvas, cxMap - R * mapPx, czMap - R * mapPx, R * 2 * mapPx, R * 2 * mapPx, 0, 0, W, W);
    // darken
    ctx.fillStyle = 'rgba(4,6,12,.18)'; ctx.fillRect(0, 0, W, W);
    const toScreen = (wx, wz) => [R + (wx - x) * pxPerM, R + (wz - z) * pxPerM];
    // marker
    if (marker) {
      const [mx, my] = toScreen(marker.x, marker.z);
      ctx.fillStyle = '#ffd166';
      ctx.beginPath(); ctx.moveTo(mx, my - 9); ctx.lineTo(mx + 7, my + 5); ctx.lineTo(mx - 7, my + 5); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.5)'; ctx.lineWidth = 2; ctx.stroke();
    }
    // entities
    for (const e of entities) {
      const [ex, ey] = toScreen(e.x, e.z);
      if (Math.hypot(ex - R, ey - R) > R - 4) continue;
      if (e.type === 'police') {
        ctx.fillStyle = e.flash ? '#ffffff' : '#ff3b46';
        ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = e.flash ? '#ff3b46' : '#ffffff'; ctx.lineWidth = 1.5; ctx.stroke();
      } else if (e.type === 'personal') {
        ctx.fillStyle = '#38e8ff'; ctx.fillRect(ex - 4, ey - 4, 8, 8);
      } else if (e.type === 'partner') {
        ctx.fillStyle = '#ffd166'; ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fill();
      } else if (e.type === 'enemy') {
        ctx.fillStyle = '#ff6b6b'; ctx.beginPath(); ctx.arc(ex, ey, 3.5, 0, Math.PI * 2); ctx.fill();
      } else if (e.type === 'poi') {
        ctx.fillStyle = e.color || '#7dff9c'; ctx.fillRect(ex - 3, ey - 3, 6, 6);
      }
    }
    // player arrow
    ctx.save();
    ctx.translate(R, R); ctx.rotate(heading);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 8); ctx.lineTo(0, 4); ctx.lineTo(-7, 8); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#ff2f8e'; ctx.lineWidth = 2; ctx.stroke();
    ctx.restore();
    ctx.restore();
    // north tick
    ctx.fillStyle = 'rgba(56,232,255,.9)'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.fillText('N', R, 16);
  }

  setInterior(active) {
    this.interiorActive = active;
    this.interior.group.visible = active;
    this.ocean.visible = !active;
    this.sand.visible = !active;
    this.cityGround.visible = !active;
    this.hiddenWorld = this.hiddenWorld || [];
  }
}
