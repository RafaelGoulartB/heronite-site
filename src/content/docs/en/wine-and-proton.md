---
title: "Wine and Proton on Linux: run Windows games"
navLabel: "Wine and Proton"
description: "Run Windows games on Linux with Heronite: Wine Manager, Proton builds, prefixes, per-game options like DXVK and gamescope, sandbox and anti-cheat."
section: Guides
order: 3
updated: 2026-11-04
---

Heronite runs Windows games on Linux through Wine or Proton. Change any option below per game in **Game settings → Compatibility**, or for all games in Settings. When a game won't start, Heronite suggests a fix: see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).

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

A Wine prefix is a separate Windows folder for a game, with its settings, saves and what Winetricks installs. By default:

- Games install to `~/Games/Heronite`
- Each game gets its own prefix in `~/Games/Heronite/Prefixes`
- Several games can share `~/Games/Heronite/Prefixes/shared` instead, but then they can break each other's dependencies

The Wine Manager lists your prefixes. In **Game settings → Compatibility**, the **Prefix** menu picks the game's prefix or makes a **New prefix for this game**. The **Winecfg** and **Winetricks** buttons there work on that prefix.

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

To run a game you do not trust, turn on **Run in a sandbox** in **Game settings → Sandbox**. The game then runs through [bubblewrap](https://github.com/containers/bubblewrap) (`bwrap`, from the `bubblewrap` package), with no network and no access to your home folder. Allow the network or a folder under **Exceptions** when the game needs it.

## Anti-cheat

Heronite shows each game's anti-cheat status in its details, from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). If the game works on Linux, turn on **BattlEye** or **Easy Anti-Cheat** under **Anti-cheat runtimes** in **Game settings → Compatibility**; Heronite downloads it before the next launch. A game whose developer does not allow Linux will not run, whatever the settings.
