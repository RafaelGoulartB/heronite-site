---
title: "Wine and Proton on Linux: run Windows games"
navLabel: "Wine and Proton"
description: "Run Windows games on Linux with Heronite: Wine Manager, Proton builds, prefixes, per-game options like DXVK and gamescope, sandbox and anti-cheat."
section: Guides
order: 3
updated: 2026-11-04
---

Heronite runs Windows games on Linux through Wine or Proton. Change any option below per game in **Game settings → Compatibility**, or for all games in Settings.

## Download Proton builds in the Wine Manager

The Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) downloads and updates these builds:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Builds go to Heronite's data folder (`~/.local/share/heronite/tools/proton` and `tools/wine`), or to Steam's `compatibilitytools.d` if you turn that on, so Steam can use them too. Heronite finds Proton builds already in your Steam libraries and the Wine runners of Lutris.

## Where games and Wine prefixes are stored

A prefix is the fake Windows folder a game runs in. By default:

- games install to `~/Games/Heronite`,
- each game gets its own prefix in `~/Games/Heronite/Prefixes`,
- or several games can share `~/Games/Heronite/Prefixes/shared`.

The Wine Manager lists your prefixes. **Game settings → Compatibility** has Winecfg and Winetricks buttons for the game's prefix.

## Per-game options

- Wine or Proton version and prefix
- DXVK, VKD3D-Proton, and DXVK-NVAPI
- Esync and Fsync
- gamescope (needs `gamescope` installed)
- FPS limit
- GPU choice on PCs with more than one
- DLSS, FSR, and XeSS upgrades
- Winetricks
- umu and its protonfixes (game fixes from the umu database)
- Lossless Scaling frame generation through [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) (needs Lossless Scaling from Steam; works with Vulkan, DXVK, and VKD3D games, not OpenGL)
- Wayland instead of X11 (needs a Wine build with Wayland support)
- Scripts to run before and after the game, and programs to run alongside it (like trainers)
- Launch presets to reuse in other games

## Sandbox

Run a game you do not trust through [bubblewrap](https://github.com/containers/bubblewrap), with no network and no access to your home folder. Allow a folder or the network when the game needs it. Needs `bwrap` installed.

## A Windows game won't start

Heronite reads the launch log and suggests a fix when it recognises the problem. See the [causes and fixes in Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).

## Anti-cheat

Heronite shows each game's anti-cheat status, from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), in its details. Heronite can provide the EAC and BattlEye runtimes, but a game whose developer does not allow Linux will not run.
