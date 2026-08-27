# ✈️ Air Combat 2.0 - Ultimate HD 3D Fighter Squadron

[![GitHub Deployment](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)]()
[![License](https://img.shields.io/badge/License-MIT-blue)]()

**Air Combat 2.0** is an ultra-immersive, high-performance HTML5 Canvas & PWA arcade flight combat game featuring advanced tactical squadron mechanics, military-grade briefing dialogues, custom responsive touch controls, and high-intensity aerial warfare missions.

---

## 🎖️ Key Features & Recent Enhancements

### 1. 🎯 Professional Military Army Squadron Storyline
- **Tactical Briefings:** Immersive pre-mission commander dialogues styled after elite military air force operations.
- **Squadron Formation:** Command supporting wingmen (Attack, Defense, Support units) during intense dogfights.
- **Diverse Combat Zones:** Campaigns spanning across Desert Storm, Night Ops, Thunderstorms, Ocean Patrol, Arctic Frost, Volcano Siege, and Sky Fortresses.

### 2. ⚡ Increased Enemy Limits & Wave Scaling
- **Intense Aerial Combat:** Escalated enemy wave counts and dynamic enemy spawning rates per wave.
- **Challenging Boss Encounters:** Multi-phase boss battles with tactical attack patterns and escalating difficulty levels (Easy, Normal, Hard).

### 3. ⚙️ Fixed Settings & Drag-and-Drop Control Editor
- **Customizable HUD & Controls:** Fully draggable mobile control map editor supporting touch positioning, snap guides, grid lines, and button size scaling.
- **Persistent Settings:** Drag-to-reorder settings panel with automatic local storage synchronization.

### 4. 🎨 Sci-Fi Glassmorphism UI & Audio
- **Futuristic Aesthetics:** Clean glassmorphism UI accented with Orbitron and Rajdhani typography, neon glows, and custom visual effects.
- **Procedural Sound & PWA:** Built-in Web Audio API sound effects and PWA offline support with service workers.

---

## 🎮 Controls Guide

| Action / Control | Keyboard | Touch / Mobile |
| :--- | :--- | :--- |
| **Movement** | `WASD` / `Arrow Keys` | Left On-Screen Joystick |
| **Machine Gun** | `Spacebar` (Hold for Auto-fire) | `FIRE` Button |
| **Homing Missiles** | `M` | `MSL` Button |
| **Area Bomb** | `G` | `BOMB` Button |
| **Special Laser** | `F` | `SPEC` Button |
| **Afterburner Boost** | `B` | Drag Joystick / Tilt |
| **Barrel Roll (Dodge)**| `R` | Double Tap / Swipe |
| **Pause Game** | `P` | Pause Icon (`⏸`) |
| **Switch Weapons** | `1` - `4` or Mouse Wheel | Weapon Slots |

---

## 📂 Project Structure

```text
AIR-COMBAT-2.0/
├── index.html        # Main game engine, UI layouts, canvas renderer & logic
├── sound.js          # Procedural Web Audio API sound generator
├── manifest.json     # PWA Progressive Web App manifest
└── sw.js             # Service Worker for offline caching
```

---

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/majorbdal-ai/AIR-COMBAT-2.0.git
   ```
2. Open `index.html` in any modern web browser or serve via a local static server (e.g., `npx serve` or Python `http.server`).
