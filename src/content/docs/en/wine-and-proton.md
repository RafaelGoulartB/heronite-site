---
title: "Wine and Proton on Linux"
navLabel: "Wine and Proton"
description: "Run Windows games on Linux with Heronite: the Wine Manager, Proton builds, prefixes, per-game options like DXVK and gamescope, the sandbox and anti-cheat."
section: Guides
order: 3
updated: 2026-11-01
---

On Linux, Windows games run through Wine or Proton. Heronite picks sensible defaults; every option below can be changed per game in **Game settings → Compatibility**, or for all games in Settings.

## Wine Manager

The Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) downloads and updates these builds:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Builds go to Heronite's data folder (`~/.local/share/heronite/tools/proton` and `tools/wine`), or to Steam's `compatibilitytools.d` if you turn that on, so Steam can use them too. Heronite also finds the Proton builds already in your Steam libraries and the Wine runners of Lutris.

## Prefixes

A prefix is the fake Windows folder a game runs in. By default:

- games install to `~/Games/Heronite`,
- each game gets its own prefix in `~/Games/Heronite/Prefixes`,
- or several games can share `~/Games/Heronite/Prefixes/shared`.

The Wine Manager lists your prefixes, and a game's settings have buttons for Winecfg and Winetricks in its prefix.

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

Run a game you do not trust through [bubblewrap](https://github.com/containers/bubblewrap): no network and no access to your home folder. Let one thing through (like a folder or the network) when the game needs it. Needs `bwrap` installed.

## When a game does not start

Heronite reads the launch log and suggests a fix when it recognises the problem: a missing DLL or .NET, a DirectX 12 game without VKD3D-Proton, a missing 32-bit Vulkan driver, a low `vm.max_map_count`, another `wineserver` still running, or anti-cheat that is not supported. See [Troubleshooting](/docs/troubleshooting/).

## Anti-cheat

The anti-cheat status of a game comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) and is shown in its details. Heronite can provide the EAC and BattlEye runtimes, but a game whose developer does not allow Linux will not run.
