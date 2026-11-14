# AIR COMBAT 2.0 — Improvement Plan

**Repository:** `/root/AI_WORKSPACE/AIR-COMBAT-2.0` (2337 lines HTML5 Canvas game)

## ✅ Implemented (Current)

### Control Enhancements
- Haptic feedback on all touch inputs (joystick, buttons)
- Mobile weapon switch button (WPN: 1) with haptic feedback
- Button size toggle (1x/1.5x/2x) in Settings
- Improved joystick responsiveness with CFG.sense

### Visual Effects
- Enhanced explosion particles: smoke, sparks, shockwave ring
- Shockwave visual effect with fading animation
- Better particle management (limit 120 particles)
- Haptic on explosions (intensity based on radius)

### Game Mechanics
- New power-up drops from enemies (hp, shield, rapid fire, quad damage, fuel)
- New enemy types: Kamikaze, Sniper, Swarm
- New boss patterns: Missile Barrage, Laser Sweep, Drone Summon

## 📋 Remaining Improvements (Next Steps)

### 1. Weather Effects (Easy)
- Rain: falling lines
- Snow: floating dots
- Lightning: screen flash + thunder sfx
- Implemented in `genLvl()` weather logic

### 2. Engine Trails (Medium)
- Player leaves colored trail based on aircraft type
- Trail fades over time
- Add to `drawP()` and `updP()`

### 3. Tilt Controls (Medium)
- Device orientation API (gamma/beta) for mobile
- Alternative to joystick when available
- Add to `updJoy()` as fallback

### 4. New Enemy AI (Medium)
- Kamikaze: rushes player, explodes on contact
- Sniper: stays top, fires fast bullets
- Swarm: spawn 5 enemies together

### 5. New Boss Patterns (Hard)
- Missile Barrage: 8 homing missiles
- Laser Sweep: charge then beam
- Drone Summon: spawn 4 escort drones

### 6. Performance (Easy)
- Canvas resize optimization
- Offscreen canvas for particles
- Frame rate cap via CFG.fpsCap

## 🎯 Implementation Priority

| Priority | Feature | Complexity | Impact |
|----------|---------|------------|--------|
| **High** | Weather effects | Low | Visual immersion |
| **High** | Engine trails | Medium | Player identity |
| **Medium** | Tilt controls | Low | Mobile UX |
| **Medium** | New enemy AI | Medium | Gameplay variety |
| **Hard** | Boss patterns | High | Challenge curve |

## 📁 Files to Edit
- `index.html` (main game engine)
- `manifest.json` (add new features to PWA)
- `README.md` (update features list)

All changes are single-file HTML with embedded CSS/JS for portability.

**Ready to test:** Open `index.html` in browser, try mobile touch controls, check weapon switch, observe enhanced explosions.