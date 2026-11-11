import { POI } from './world.js';

// Mission chain for the Jason & Lucia story. Each step has a waypoint, a check and
// optional enter logic. The MissionSystem drives objective HUD + payout.
export class MissionSystem {
  constructor(game) {
    this.g = game;
    this.missions = buildMissions();
    this.index = -1;
    this.step = 0;
    this.stepTime = 0;
    this.active = false;
    this.pending = -1;
    this.pendingT = 0;
    this.marker = null;
    this.finished = false;
  }

  start(index) {
    if (index >= this.missions.length) { this.finished = true; return; }
    this.index = index; this.step = 0; this.stepTime = 0; this.active = true;
    const m = this.missions[index];
    this.g.toast(`MISSION · ${m.title}`, 'money');
    this.g.clearMissionFlags?.();
    this.enterStep();
    this.g.say(m.who || 'JASON', m.intro || m.title, 4.2);
  }

  get mission() { return this.missions[this.index]; }
  get current() { return this.mission?.steps[this.step]; }

  enterStep() {
    const s = this.current;
    if (!s) return;
    this.stepTime = 0;
    if (s.enter) s.enter(this.g);
    if (s.text) this.g.toast(s.text, '');
  }

  update(dt) {
    if (this.pending >= 0) {
      this.pendingT -= dt;
      if (this.pendingT <= 0) {
        const idx = this.pending; this.pending = -1;
        this.start(idx);
      }
      return;
    }
    if (!this.active) return;
    this.stepTime += dt;
    const s = this.current;
    if (!s) return;
    const wp = s.waypoint ? s.waypoint(this.g) : null;
    this.marker = wp;
    let dist = 0;
    if (wp) {
      const c = this.g.activeChar;
      dist = Math.hypot(c.pos.x - wp.x, c.pos.z - wp.z);
    }
    this.g.updateMissionHud(this.mission, s, dist);
    if (s.check && s.check(this.g, this.stepTime)) this.advance();
  }

  advance() {
    const m = this.mission;
    this.step++;
    if (this.step >= m.steps.length) {
      this.complete();
      return;
    }
    this.g.audio?.pickup?.(true);
    this.enterStep();
  }

  complete() {
    const m = this.mission;
    this.active = false;
    this.marker = null;
    this.g.onMissionComplete(m);
    if (this.index + 1 < this.missions.length) {
      this.pending = this.index + 1;
      this.pendingT = 9;
      this.g.updateMissionHud(null, null, 0);
    } else {
      this.finished = true;
      this.g.freeRoam = true;
      this.g.updateMissionHud(null, null, 0);
    }
  }

  failReset() {
    if (!this.active) return;
    this.step = 0; this.stepTime = 0;
    this.g.clearMissionFlags?.();
    this.enterStep();
    this.g.toast('MISSION RESET · GET BACK TO IT', 'bad');
  }

  cancel() {
    this.active = false; this.marker = null;
    this.g.updateMissionHud(null, null, 0);
  }
}

function buildMissions() {
  return [
    {
      id: 'm1', title: 'FIRST SHIFT', who: 'LUCIA',
      intro: 'Nice ride. Shame it is running on fumes. Gas station first, then we talk business.',
      steps: [
        {
          text: 'Get in the Grotto GT', waypoint: g => g.personalCar ? { x: g.personalCar.pos.x, z: g.personalCar.pos.z } : null,
          check: g => g.activeChar.inVehicle === g.personalCar,
        },
        {
          text: 'Fuel up at Gas & Go — pull in and press E', waypoint: () => POI.gas.door,
          enter: g => { g.personalCar.fuel = Math.min(g.personalCar.fuel, 18); g.toast('TANK IS DRY · FOLLOW THE GOLD BEAM', 'bad'); },
          check: g => g.flags.m1refuel,
        },
        {
          text: 'Drive to the Palm Shade Motel', waypoint: () => POI.motel.door,
          enter: g => { g.setTaskHint?.('The motel is where the crew plans the score.'); },
          check: (g, t) => {
            const d = Math.hypot(g.activeChar.pos.x - POI.motel.door.x, g.activeChar.pos.z - POI.motel.door.z);
            return d < 18 && t > 6.5;
          },
        },
      ],
      reward: 300,
      outro: 'Look at us. Two broke dreamers with one car and a city full of opportunity. Deposit that money through BuckMe — bank money is safe money.',
    },
    {
      id: 'm2', title: 'GAS MONEY', who: 'JASON',
      intro: 'The 24/7 on Ocean Beach cashes out heavy and the clerk is half asleep. In and out, no auto-aim heroics.',
      steps: [
        {
          text: 'Go to the 24/7 Mart on Ocean Beach', waypoint: () => POI.store.door,
          check: g => Math.hypot(g.activeChar.pos.x - POI.store.door.x, g.activeChar.pos.z - POI.store.door.z) < 9,
        },
        {
          text: 'Hold E to clean out the register', waypoint: () => POI.store.door,
          enter: g => { g.flags.m2rob = true; g.toast('HOLD E · SILENT ALARM WILL TRIP', 'bad'); g.setTaskHint?.(''); },
          check: g => g.flags.m2stolen,
        },
        {
          text: 'Lose the heat — break line of sight', waypoint: null,
          enter: g => { if (!g.flags.m2stolen) {} g.setTaskHint?.('Duck through alleys. White stars are eyes on you; red stars are dispatch.'); },
          check: g => g.flags.m2dispatched && g.heat <= 0.01 && g.suspicion <= 0.01,
        },
        {
          text: 'Open BuckMe (M) and deposit the cash', waypoint: null,
          enter: g => g.toast('BANK MONEY SURVIVES DEATH AND ARREST', 'money'),
          check: g => g.flags.m2deposit,
        },
      ],
      reward: 450,
      outro: 'See? Clean money. Now we need muscle and a trunk big enough for the kind of trouble I bring home.',
    },
    {
      id: 'm3', title: 'HEAVY TRUNK', who: 'LUCIA',
      intro: 'A dock worker in Port Gellhorn is holding a duffel for us. Grab it, stow it, and let the fence make it disappear.',
      steps: [
        {
          text: 'Collect the duffel at the Port Gellhorn docks', waypoint: () => ({ x: -360, z: 160 }),
          enter: g => g.showDuffel(),
          check: g => g.flags.m3bag,
        },
        {
          text: 'Store the duffel in the Grotto trunk (T near your car)', waypoint: g => g.personalCar ? { x: g.personalCar.pos.x, z: g.personalCar.pos.z } : null,
          enter: g => g.toast('TRUNKS HOLD BAGS, WEAPONS AND PROBLEMS', ''),
          check: g => g.flags.m3stored,
        },
        {
          text: 'Fence the loot at Pawn & Pwn, Port Gellhorn (E)', waypoint: () => POI.pawn.door,
          check: g => g.flags.m3fenced,
        },
      ],
      reward: 600,
      outro: 'Fenced. Clean. Enough for petrol and bad decisions. Word is a buyer wants to meet at the Palm Shade.',
    },
    {
      id: 'm4', title: 'NO BACK DOOR', who: 'JASON',
      intro: 'Buyer wants to meet inside the motel. Something feels off. Keep your hand near the pistol.',
      steps: [
        {
          text: 'Meet the buyer inside the Palm Shade Motel (E at the door)', waypoint: () => POI.motel.door,
          enter: g => g.setTaskHint?.('The motel has a front door and a rear exit. Remember both.'),
          check: g => g.inInterior,
        },
        {
          text: 'The deal is burned. Take the rear exit.', waypoint: null,
          enter: g => {
            g.say('BUYER', 'Cops! Front door! You set me up!', 4);
            g.say('LUCIA', 'Rear exit. Move, Jason!', 3.4);
          },
          check: g => g.flags.m4rear,
        },
        {
          text: 'Reach the Grotto and lose the tail', waypoint: g => g.personalCar ? { x: g.personalCar.pos.x, z: g.personalCar.pos.z } : null,
          enter: g => {
            g.setHeat(3, true);
            g.spawnCopWave(2, true);
            g.toast('3-STAR HEAT · DISPATCH CONFIRMED', 'bad');
            g.setTaskHint?.('They came in the front. You are already behind them.');
          },
          check: g => g.activeChar.inVehicle === g.personalCar,
        },
        {
          text: 'Swap seats (X / TAB) — Lucia drives, you shoot', waypoint: null,
          enter: g => {
            if (!g.isDuoInCar()) g.boardPartner(g.personalCar);
            g.toast('PRESS X · PASSENGER BECOMES GUNNER', '');
            g.spawnCopWave(2, false);
          },
          check: g => g.flags.m4swap,
        },
        {
          text: 'Wreck the pursuit', waypoint: null,
          enter: g => { g.setHeat(3, true); g.toast('FOCUS (Q) HIGHLIGHTS WEAK POINTS', 'money'); },
          check: g => (g.policeKills >= 2) || (g.heat <= 0.01 && g.flags.m4swap),
        },
      ],
      reward: 2000,
      outro: 'That is how we work. One drives, one shoots. Now the whole city knows our names. Time to make it count.',
    },
    {
      id: 'm5', title: 'LEONIDA DREAMING', who: 'LUCIA',
      intro: 'Leonida National. Vault, duffels, four stars, hurricane. The whole dream in one night. No auto-aim, no turning back.',
      steps: [
        {
          text: 'Drive to Leonida National Bank downtown', waypoint: () => POI.bank.door,
          check: g => Math.hypot(g.activeChar.pos.x - POI.bank.door.x, g.activeChar.pos.z - POI.bank.door.z) < 12,
        },
        {
          text: 'Hold E at the vault', waypoint: () => POI.bank.door,
          enter: g => { g.setTaskHint?.('Get the duffels. The alarm is already screaming.'); },
          check: g => g.flags.m5vault,
        },
        {
          text: 'Escape Vice City — lose the heat', waypoint: null,
          enter: g => {
            g.setHeat(4, true);
            g.spawnCopWave(4, true);
            g.world.setWeather('storm');
            g.toast('HURRICANE + 4 STARS · GOOD LUCK', 'bad');
            g.setTaskHint?.('Trunk full of duffels. Lose them before you fence it.');
          },
          check: g => g.heat <= 0.01 && g.suspicion <= 0.01,
        },
        {
          text: 'Deposit the clean score through BuckMe (M)', waypoint: null,
          enter: g => g.toast('FENCE THE DUFFELS, THEN DEPOSIT', 'money'),
          check: g => g.flags.m5deposit && g.totalBags() === 0,
        },
        {
          text: 'Return to the Palm Shade with Lucia', waypoint: () => POI.motel.door,
          check: g => Math.hypot(g.activeChar.pos.x - POI.motel.door.x, g.activeChar.pos.z - POI.motel.door.z) < 16,
        },
      ],
      reward: 25000,
      outro: 'We did it. Bank full, trunk empty, sun coming up over Leonida. For the first time, tomorrow is ours.',
    },
  ];
}
