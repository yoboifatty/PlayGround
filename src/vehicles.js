import * as THREE from 'three';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

export const CAR_TYPES = {
  grotto: { name: 'GROTTO GT', maxSpeed: 47, accel: 17, brake: 26, handling: 1.55, fuel: 100, consumption: 1.15, mass: 1300, color: 0xff2f8e },
  sedan: { name: 'LEONIDA SEDAN', maxSpeed: 38, accel: 12, brake: 22, handling: 1.35, fuel: 90, consumption: 0.9, mass: 1500, color: 0x6d8fa8 },
  muscle: { name: 'VICE MUSCLE', maxSpeed: 46, accel: 16, brake: 20, handling: 1.2, fuel: 95, consumption: 1.35, mass: 1600, color: 0xb03a2e },
  van: { name: 'GELHORN VAN', maxSpeed: 31, accel: 9, brake: 18, handling: 1.0, fuel: 110, consumption: 1.0, mass: 2200, color: 0xb9b2a6 },
  sports: { name: 'VAPID TORERO', maxSpeed: 54, accel: 21, brake: 30, handling: 1.7, fuel: 85, consumption: 1.5, mass: 1200, color: 0xffd166 },
  police: { name: 'POLICE CRUISER', maxSpeed: 50, accel: 19, brake: 28, handling: 1.5, fuel: 120, consumption: 1.4, mass: 1500, color: 0x1b2430 },
  ev: { name: 'VOLT EV', maxSpeed: 43, accel: 18, brake: 26, handling: 1.45, fuel: 100, consumption: 0, mass: 1400, color: 0x9fe8ff, isEV: true },
  taxi: { name: 'BEACH TAXI', maxSpeed: 39, accel: 13, brake: 23, handling: 1.4, fuel: 90, consumption: 1.0, mass: 1450, color: 0xf2c14e },
};

const wheelGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.26, 10);
wheelGeo.rotateZ(Math.PI / 2);

function box(w, h, d, color, opts = {}) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness: opts.rough ?? 0.42, metalness: opts.metal ?? 0.5, emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.ei ?? 0 }));
}

export function buildCarMesh(type, colorOverride) {
  const spec = CAR_TYPES[type] || CAR_TYPES.sedan;
  const color = colorOverride ?? spec.color;
  const g = new THREE.Group();
  const body = new THREE.Group();
  const isVan = type === 'van';
  const isSports = type === 'sports';
  const len = isVan ? 4.9 : isSports ? 4.35 : 4.15;
  const wid = isVan ? 2.1 : 1.92;
  const main = box(wid, 0.52, len, color, { rough: 0.32, metal: 0.75 });
  main.position.y = 0.66; body.add(main);
  const lower = box(wid + 0.03, 0.28, len - 0.2, 0x17171c, { rough: 0.7, metal: 0.3 });
  lower.position.y = 0.38; body.add(lower);
  // hood wedge
  const hood = box(wid - 0.12, 0.22, len * 0.3, color, { rough: 0.32, metal: 0.75 });
  hood.position.set(0, 0.95, len * 0.28); body.add(hood);
  const cabinH = isVan ? 1.5 : isSports ? 0.56 : 0.68;
  const cabin = box(wid - 0.16, cabinH, len * 0.44, 0x1c2630, { rough: 0.12, metal: 0.9 });
  cabin.position.set(0, 0.92 + cabinH / 2, isVan ? 0.25 : -0.15); body.add(cabin);
  const cabinTop = box(wid - 0.2, 0.12, len * 0.4, color, { rough: 0.3, metal: 0.7 });
  cabinTop.position.set(0, 0.92 + cabinH + 0.04, isVan ? 0.25 : -0.15); body.add(cabinTop);
  // bumpers
  const bumperF = box(wid + 0.04, 0.22, 0.24, 0x22222a, { metal: 0.6 });
  bumperF.position.set(0, 0.5, len / 2 + 0.06); body.add(bumperF);
  const bumperR = box(wid + 0.04, 0.22, 0.24, 0x22222a, { metal: 0.6 });
  bumperR.position.set(0, 0.5, -len / 2 - 0.06); body.add(bumperR);
  // lights
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff2c8, toneMapped: false });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2233, toneMapped: false });
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.06), headMat);
    hl.position.set(sx * (wid / 2 - 0.3), 0.78, len / 2 + 0.11); body.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.14, 0.06), tailMat);
    tl.position.set(sx * (wid / 2 - 0.3), 0.78, -len / 2 - 0.1); body.add(tl);
  }
  if (type === 'police') {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.14, 0.32), new THREE.MeshBasicMaterial({ color: 0xff2233, toneMapped: false }));
    bar.position.set(0, 1.9, -0.05); body.add(bar);
    const bar2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.14, 0.32), new THREE.MeshBasicMaterial({ color: 0x2233ff, toneMapped: false, transparent: true, opacity: 0.6 }));
    bar2.position.set(0, 1.9, -0.05); body.add(bar2);
    g.userData.bar1 = bar; g.userData.bar2 = bar2;
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(wid - 0.04, 0.5), new THREE.MeshBasicMaterial({ color: 0xe9e9ee }));
    stripe.position.set(0, 0.68, -len / 2 - 0.13); stripe.rotation.y = Math.PI; body.add(stripe);
  }
  if (type === 'taxi') {
    const sign = box(0.6, 0.22, 0.3, 0xffd166, { emissive: 0xffb300, ei: 1.2 });
    sign.position.set(0, 1.78, -0.1); body.add(sign);
  }
  if (isSports) {
    const spoiler = box(wid - 0.2, 0.08, 0.4, 0x17171c, { metal: 0.7 });
    spoiler.position.set(0, 1.2, -len / 2 + 0.24); body.add(spoiler);
    for (const sx of [-0.6, 0.6]) { const sup = box(0.08, 0.24, 0.08, 0x17171c); sup.position.set(sx, 1.08, -len / 2 + 0.24); body.add(sup); }
  }
  // wheels
  const wheels = [];
  const wb = len * 0.31;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const w = new THREE.Mesh(wheelGeo, new THREE.MeshStandardMaterial({ color: 0x121216, roughness: 0.9 }));
    w.position.set(sx * (wid / 2 - 0.03), 0.37, sz * wb); w.castShadow = true;
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.28, 8), new THREE.MeshStandardMaterial({ color: 0x9b9ba8, metalness: 0.9, roughness: 0.25 }));
    hub.rotation.z = Math.PI / 2; hub.position.copy(w.position); 
    body.add(w); body.add(hub);
    wheels.push({ w, hub, sx, sz });
  }
  g.add(body);
  // underglow
  if (type === 'grotto' || type === 'ev') {
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(wid + 1.0, len + 0.6), new THREE.MeshBasicMaterial({ color: type === 'ev' ? 0x38e8ff : 0xff2f8e, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.y = 0.06; g.add(glow); g.userData.underglow = glow;
  }
  g.userData = { ...g.userData, body, wheels, headMat, tailMat, len, wid };
  return g;
}

export class Vehicle {
  constructor(type, scene, opts = {}) {
    this.type = type;
    this.spec = CAR_TYPES[type] || CAR_TYPES.sedan;
    this.scene = scene;
    this.mesh = buildCarMesh(type, opts.color);
    scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.heading = opts.heading ?? 0;
    this.speed = 0;
    this.fuel = opts.fuel ?? this.spec.fuel;
    this.maxFuel = this.spec.fuel;
    this.health = 100;
    this.maxHealth = 100;
    this.locked = !!opts.locked;
    this.personal = !!opts.personal;
    this.isEV = !!this.spec.isEV;
    this.occupied = !!opts.occupied;
    this.police = type === 'police';
    this.driver = opts.driver || null;
    this.ai = opts.ai || null;
    this.seats = 2;
    this.driverSeat = null;
    this.passengerSeat = null;
    this.steerVisual = 0;
    this.wheelSpin = 0;
    this.sirenT = 0;
    this.prevSpeed = 0;
    this.smokeT = 0;
    this.dead = false;
    this.parkedBrake = true;
    this.throttle = 0;
    this.node = opts.node || null;
    this.spawnedByPolice = !!opts.policeSpawn;
    this.aiTimer = 0;
    this.hitCooldown = 0;
    this.braking = false;
    this.turning = 0;
    this.mesh.userData.vehicle = this;
    this.mesh.traverse(o => { o.userData.vehicle = this; });
    if (opts.x !== undefined) this.pos.set(opts.x, 0, opts.z);
    this.mesh.rotation.y = this.heading;
    this.parkedBrake = !opts.ai;
    this.setLights(0);
  }

  setLights(night) {
    const { headMat, tailMat } = this.mesh.userData;
    if (headMat) headMat.color.setHex(this.speed !== 0 || this.driver ? 0xfff2c8 : 0x8a846f);
    if (tailMat) tailMat.color.setHex(this.braking ? 0xff5544 : 0x9c1420);
    if (this.mesh.userData.underglow) this.mesh.userData.underglow.material.opacity = 0.18 + night * 0.3;
  }

  headingVector(out = new THREE.Vector3()) {
    return out.set(Math.sin(this.heading), 0, Math.cos(this.heading));
  }

  forwardPoint(dist, out = new THREE.Vector3()) {
    return out.set(this.pos.x + Math.sin(this.heading) * dist, 0, this.pos.z + Math.cos(this.heading) * dist);
  }

  update(dt, controls, world, time, game) {
    if (this.dead) return;
    const spec = this.spec;
    const throttle = controls?.throttle || 0;
    const brake = controls?.brake || 0;
    const steer = controls?.steer || 0;
    const handbrake = !!controls?.handbrake;
    this.throttle = throttle;
    this.braking = brake > 0;

    if (this.fuel <= 0) this.fuel = 0;
    const canDrive = this.fuel > 0;

    if (canDrive) {
      if (throttle > 0) this.speed += spec.accel * throttle * dt * (this.speed < 0 ? 2.2 : 1);
      if (brake > 0) {
        if (this.speed > 0.4) this.speed -= spec.brake * brake * dt;
        else this.speed -= spec.accel * 0.42 * brake * dt;
      }
      // idle creep down
      if (throttle === 0 && brake === 0) this.speed *= 1 - 0.55 * dt;
      this.fuel = Math.max(0, this.fuel - (Math.abs(throttle) * spec.consumption + 0.05) * dt);
    } else {
      this.speed *= 1 - 1.2 * dt;
    }

    this.speed = clamp(this.speed, -spec.maxSpeed * 0.35, spec.maxSpeed);
    if (handbrake) this.speed *= 1 - 3.2 * dt;

    const speedFactor = clamp(Math.abs(this.speed) / 13, 0, 1.25);
    const direction = this.speed < 0 ? -1 : 1;
    const turn = steer * spec.handling * speedFactor * 0.95 * direction;
    this.heading += turn * dt * (handbrake ? 1.3 : 1);
    this.turning = turn;

    const fwd = this.headingVector(this._fwd || (this._fwd = new THREE.Vector3()));
    this.pos.x += fwd.x * this.speed * dt;
    this.pos.z += fwd.z * this.speed * dt;

    // collision with world, check front + rear
    const r = 1.15;
    const front = this.forwardPoint(1.45, this._p1 || (this._p1 = new THREE.Vector3()));
    const rear = this.forwardPoint(-1.45, this._p2 || (this._p2 = new THREE.Vector3()));
    let hit = false;
    const tp = new THREE.Vector3(front.x, 0, front.z);
    if (world.collideCircle(tp, r)) hit = true;
    this.pos.x += tp.x - front.x; this.pos.z += tp.z - front.z;
    const tp2 = new THREE.Vector3(rear.x, 0, rear.z);
    if (world.collideCircle(tp2, r)) hit = true;
    this.pos.x += tp2.x - rear.x; this.pos.z += tp2.z - rear.z;
    if (hit) {
      const impact = Math.abs(this.speed);
      if (impact > 12) {
        this.damage(impact * 0.7, game);
        if (game?.onCarCrash) game.onCarCrash(this, impact);
      }
      this.speed *= -0.12;
    }

    // collide with other vehicles (simple)
    if (game && game.vehicles) {
      for (const other of game.vehicles) {
        if (other === this || other.dead) continue;
        const dx = other.pos.x - this.pos.x, dz = other.pos.z - this.pos.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 7.5 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const push = (2.74 - d) * 0.5;
          this.pos.x -= (dx / d) * push; this.pos.z -= (dz / d) * push;
          other.pos.x += (dx / d) * push; other.pos.z += (dz / d) * push;
          if (Math.abs(this.speed) > 8) {
            this.damage(Math.abs(this.speed) * 0.25, game); other.damage(Math.abs(this.speed) * 0.2, game);
            this.speed *= 0.55;
            if (game.onCarCrash) game.onCarCrash(this, Math.abs(this.speed));
          }
        }
      }
    }

    // visuals
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = this.heading;
    this.mesh.rotation.z = lerp(this.mesh.rotation.z, -turn * 0.06 * clamp(Math.abs(this.speed) / 25, 0, 1), 0.1);
    this.wheelSpin += this.speed * dt / 0.36;
    for (const wh of this.mesh.userData.wheels) {
      wh.w.rotation.x = this.wheelSpin;
      if (wh.sz > 0) wh.w.rotation.y = steer * 0.42;
      wh.hub.rotation.x = this.wheelSpin;
    }
    this.setLights(world.nightFactor);
    // siren flash
    if (this.police && this.mesh.userData.bar1) {
      this.sirenT += dt;
      const on = Math.sin(this.sirenT * 8) > 0;
      this.mesh.userData.bar1.material.color.setHex(on ? 0xff2233 : 0x2a0a0e);
      this.mesh.userData.bar2.material.opacity = on ? 0.12 : 0.95;
    }
    // damage smoke
    if (this.health < 35) {
      this.smokeT += dt;
      if (this.smokeT > 1.4) { this.smokeT = 0; game?.spawnSmoke?.(this); }
    }
  }

  damage(amount, game) {
    if (this.dead) return;
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
      if (game) game.explodeVehicle(this);
    }
  }

  refuel(world, amount, game) {
    if (this.isEV) this.fuel = Math.min(this.maxFuel, this.fuel + amount);
    else this.fuel = Math.min(this.maxFuel, this.fuel + amount);
    this.health = Math.min(100, this.health + 25);
    if (game) game.toast(`${this.isEV ? 'CHARGE' : 'FUEL'} ${Math.round(this.fuel)}% · BODY REPAIRED`, 'good');
  }

  enterSeat(who, seat) {
    if (seat === 'driver') this.driverSeat = who;
    else this.passengerSeat = who;
    this.occupied = true;
    this.parkedBrake = false;
  }

  exitSeat(who) {
    if (this.driverSeat === who) this.driverSeat = null;
    if (this.passengerSeat === who) this.passengerSeat = null;
    if (!this.driverSeat && !this.passengerSeat) this.occupied = false;
  }

  seatPosition(seat, out = new THREE.Vector3()) {
    const x = seat === 'driver' ? -0.42 : 0.42;
    const z = -0.1;
    const s = Math.sin(this.heading), c = Math.cos(this.heading);
    out.set(this.pos.x + c * x + s * z, 0.7, this.pos.z - s * x + c * z);
    return out;
  }
}

// ------------------------------------------------------------------ traffic
const ROAD = 80;
export class TrafficSystem {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.vehicles = [];
    this.peds = [];
    this.rngSeed = 77;
  }
  rng() { this.rngSeed = (this.rngSeed * 1664525 + 1013904223) >>> 0; return this.rngSeed / 4294967296; }
  range(a, b) { return a + (b - a) * this.rng(); }
  pick(a) { return a[Math.floor(this.rng() * a.length)]; }

  spawnTraffic(game) {
    const road = 80, min = -5, max = 4;
    const types = ['sedan', 'muscle', 'taxi', 'van', 'sports', 'ev'];
    for (let i = 0; i < 16; i++) {
      let gx = Math.floor(this.range(min, max + 1)), gz = Math.floor(this.range(min, max + 1));
      if (Math.abs(gx * road) < 90 && Math.abs(gz * road) < 90) { gx += 2; gz += 1; }
      const dir = this.pick([[1, 0], [-1, 0], [0, 1], [0, -1]]);
      const x = gx * road - dir[0] * 4 * this.range(-1, 1);
      const z = gz * road - dir[1] * 4 * this.range(-1, 1);
      const heading = Math.atan2(dir[0], dir[1]);
      const v = new Vehicle(this.pick(types), this.scene, { x, z, heading, locked: false, ai: true, occupied: true });
      v.traffic = true;
      v.aiDir = dir;
      v.aiNode = { x: gx * road, z: gz * road };
      v.aiTarget = { x: (gx + dir[0]) * road, z: (gz + dir[1]) * road };
      v.cruise = this.range(9, 15);
      this.vehicles.push(v);
      game.vehicles.push(v);
      game.trafficCars.push(v);
    }
    // parked, locked cars
    for (let i = 0; i < 8; i++) {
      const gx = Math.floor(this.range(-5, 5)), gz = Math.floor(this.range(-5, 5));
      const axis = this.rng() > 0.5;
      const x = axis ? gx * road + this.range(-4, 4) : gx * road + this.range(20, 55);
      const z = axis ? gz * road + this.range(20, 55) : gz * road + this.range(-4, 4);
      const v = new Vehicle(this.pick(types), this.scene, { x, z, heading: axis ? Math.PI / 2 : 0, locked: this.rng() > 0.25, occupied: false });
      v.parked = true;
      v.parkedBrake = true;
      this.vehicles.push(v); game.vehicles.push(v); game.parkedCars.push(v);
    }
  }

  spawnPeds(game) {
    const clothes = [0xd88a6a, 0x7f9fbf, 0xb0a0d0, 0xe0c090, 0x9f7f6f, 0x6aa08a, 0xd0d0d0];
    for (let i = 0; i < 26; i++) {
      const gx = Math.floor(this.range(-5, 5)), gz = Math.floor(this.range(-5, 5));
      const side = this.rng() > 0.5 ? 1 : -1;
      const x = gx * ROAD + side * 31.5 + this.range(-1.5, 1.5);
      const z = gz * ROAD + this.range(-30, 30);
      const p = makePed(clothes[Math.floor(this.rng() * clothes.length)], this.range(0.9, 1.08));
      p.isPed = true; p.hp = 30; p.maxHp = 30; p.dead = false;
      p.group.position.set(x, 0.27, z);
      p.walkDir = this.range(0, Math.PI * 2);
      p.walkT = 0; p.speed = this.range(0.7, 1.4);
      p.home = { x, z };
      this.scene.add(p.group);
      game.peds.push(p);
      // a couple of vehicles for flavor
    }
  }

  update(dt, game, time) {
    for (const v of this.vehicles) {
      if (v.dead) continue;
      if (v.traffic) this.updateTrafficCar(v, dt, game);
      else if (v.parked || (!v.driverSeat && !v.personal)) {
        v.update(dt, null, this.world, time, game);
      }
    }
    for (const p of game.peds) {
      if (p.dead || p.isPlayer) continue;
      p.walkT += dt;
      const target = p.flee ? game.player.pos : null;
      if (!p.flee) {
        p.group.position.x += Math.sin(p.walkDir) * p.speed * dt;
        p.group.position.z += Math.cos(p.walkDir) * p.speed * dt;
        const dHome = Math.hypot(p.group.position.x - p.home.x, p.group.position.z - p.home.z);
        if (dHome > 26) p.walkDir += Math.PI;
        const r = this.world;
        if (r.isInsideBuilding(p.group.position.x, p.group.position.z, 0.6)) p.walkDir += Math.PI * 0.7;
        if (Math.hypot(p.group.position.x, p.group.position.z) > 640) p.walkDir += Math.PI;
        p.group.rotation.y = p.walkDir;
      } else if (target) {
        const dx = p.group.position.x - target.x, dz = p.group.position.z - target.z;
        const d = Math.hypot(dx, dz) || 1;
        if (d < 22) { p.group.position.x += (dx / d) * 3.4 * dt; p.group.position.z += (dz / d) * 3.4 * dt; p.group.rotation.y = Math.atan2(-dx, -dz); }
      }
      const w = p.group.userData.walker;
      if (w) {
        const sw = Math.sin(p.walkT * (p.flee ? 12 : 7)) * 0.55 * (p.flee ? 1.5 : 1);
        w.legL.rotation.x = sw; w.legR.rotation.x = -sw;
        w.armL.rotation.x = -sw * 0.8; w.armR.rotation.x = sw * 0.8;
      }
      p.group.position.y = 0.27;
    }
  }

  updateTrafficCar(v, dt, game) {
    const target = v.aiTarget;
    const dx = target.x - v.pos.x, dz = target.z - v.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 9) {
      // choose next grid node, avoid U-turn
      const gx = Math.round(target.x / ROAD), gz = Math.round(target.z / ROAD);
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(d => !(d[0] === -v.aiDir[0] && d[1] === -v.aiDir[1]));
      const d = this.pick(dirs);
      v.aiDir = d;
      v.aiTarget = { x: (gx + d[0]) * ROAD, z: (gz + d[1]) * ROAD };
      if (Math.abs(v.aiTarget.x) > 380 || Math.abs(v.aiTarget.z) > 380) v.aiTarget = { x: 0, z: 0 };
    }
    const desired = Math.atan2(dx, dz);
    let diff = ((desired - v.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
    const steer = clamp(diff * 1.8, -1, 1);
    // slow near player / obstacles
    let obstacle = false;
    for (const o of game.vehicles) {
      if (o === v || o.dead) continue;
      const ox = o.pos.x - v.pos.x, oz = o.pos.z - v.pos.z;
      const d = Math.hypot(ox, oz);
      if (d < 9) {
        const fwd = Math.sin(v.heading) * ox + Math.cos(v.heading) * oz;
        if (fwd > 2) { obstacle = true; break; }
      }
    }
    const wanted = obstacle ? 0 : (Math.abs(diff) > 0.8 ? 4 : v.cruise || 11);
    const throttle = v.speed < wanted ? 0.85 : 0;
    const brake = v.speed > wanted + 2 ? 1 : 0;
    v.update(dt, { throttle, brake, steer, handbrake: false }, this.world, game.time, game);
    if (v.health <= 0 && !v.dead) { v.dead = true; game.explodeVehicle(v); }
    // simple ped collision
  }
}

export function makePed(shirtColor, scale = 1) {
  const g = new THREE.Group();
  const skin = [0xc98f6a, 0x8a5a3d, 0xe0b090, 0x6f4630][Math.floor(Math.random() * 4)];
  const pants = [0x2a3040, 0x40352a, 0x1f242c, 0x5a4a3a][Math.floor(Math.random() * 4)];
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 });
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.78, 0.34), mat(shirtColor));
  torso.position.y = 1.18; g.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat(skin));
  head.position.y = 1.75; g.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.225, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), mat(0x241a14));
  hair.position.y = 1.78; g.add(hair);
  const legL = new THREE.Group(), legR = new THREE.Group();
  for (const [leg, sx] of [[legL, -0.17], [legR, 0.17]]) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.78, 0.24), mat(pants));
    l.position.y = -0.34; leg.add(l); leg.position.set(sx, 0.78, 0); g.add(leg);
  }
  const armL = new THREE.Group(), armR = new THREE.Group();
  for (const [arm, sx] of [[armL, -0.42], [armR, 0.42]]) {
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.64, 0.19), mat(shirtColor));
    a.position.y = -0.28; arm.add(a); arm.position.set(sx, 1.5, 0); g.add(arm);
  }
  g.scale.setScalar(scale);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  g.userData.walker = { legL, legR, armL, armR };
  return { group: g, torso, head, hair, legL, legR, armL, armR, scale };
}
