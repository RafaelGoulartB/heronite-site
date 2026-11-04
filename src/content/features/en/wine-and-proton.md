---
title: "Wine and Proton Manager for Linux, GE-Proton | Heronite"
description: "A Wine and Proton manager and game launcher for Linux. Download GE-Proton and Proton-CachyOS, then set prefix, DXVK, gamescope and FPS limit per game."
eyebrow: Wine and Proton
headline: "Wine and Proton manager for Windows games on Linux"
lead: "Heronite is a Wine and Proton manager and game launcher in one app. It downloads GE-Proton and Proton-CachyOS and gives each game its own prefix."
navLabel: Wine and Proton
summary: "A built-in Wine Manager, per-game prefixes and options, a sandbox and launch error hints for Windows games on Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Game settings for Control on the Compatibility tab: the Proton version set to GE-Proton-latest with a ProtonDB Platinum rating, the Wine prefix and its folder, Winecfg and Winetricks buttons, and the umu ID field."
og: /og/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Wine Manager
    text: Download and update Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek.
  - title: Per-game settings
    text: Version, prefix, DXVK, VKD3D-Proton, gamescope, FPS limit, GPU choice and DLSS, FSR or XeSS upgrades.
  - title: Sandbox
    text: Run a game you do not trust with no network and no access to your home folder.
  - title: Fixes when it fails
    text: Heronite reads the launch log and suggests a fix when it recognises the problem.
faq:
  - q: How do I run Windows games on Linux?
    a: Add the game or log in to its store, and press Play. Change settings in **Game settings**, on the **Compatibility** tab.
  - q: What is the best Proton version for my game?
    a: There is no single best one. **Proton-CachyOS** and **GE-Proton** often get fixes first, so start there. A game's page shows its [ProtonDB](https://www.protondb.com) rating.
  - q: Is there a Proton manager for non-Steam games?
    a: Yes. The **Wine Manager** (`Ctrl+3`) downloads and updates Proton builds for any game in your Collection.
  - q: Do games with anti-cheat work on Linux?
    a: It depends on the game. A game whose developer does not allow Linux will not run. See [anti-cheat](/docs/wine-and-proton/#anti-cheat).
  - q: Can I use Lossless Scaling frame generation on Linux?
    a: Yes, through [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk), if you own Lossless Scaling on Steam.
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Heronite runs Windows games on Linux through Wine or Proton, with sensible defaults, so most games start with one click. That works for games from [Epic, GOG, Amazon and the other stores](/features/stores/) and for programs you add by hand.

Change any option per game in **Game settings**, on the **Compatibility** tab, or for all games in Settings. **Reset this tab** restores a tab's defaults.

## Which Proton and Wine builds can Heronite download?

The Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) downloads and updates these builds:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Builds go to Heronite's data folder, or to Steam's `compatibilitytools.d` if you turn that on, so Steam can use them too. Heronite also finds Proton builds in your Steam libraries and Lutris's Wine runners, so you do not download them twice.

![The Wine Manager with a list of Proton builds on the left, Proton-CachyOS selected, and its versions on the right with release dates, sizes and Install buttons.](../../../assets/screenshots/wine-manager.webp)

*The Wine Manager: pick a build family, then install or remove any version.*

Steps: [install GE-Proton](/guides/install-ge-proton/).

## What is a Wine prefix?

A prefix is the fake Windows folder a game runs in. Games install to `~/Games/Heronite` by default, and each game gets its own prefix in `~/Games/Heronite/Prefixes`. Several games can share one. The Wine Manager lists your prefixes, and a game's settings have **Winecfg** and **Winetricks** buttons.

## Which options can I set per game?

Everything below can be set for one game, and saved as a **launch preset** to reuse in others. The game page also shows its ProtonDB rating. The full list is in the [docs](/docs/wine-and-proton/#per-game-options).

- Wine or Proton version and prefix
- DXVK, VKD3D-Proton and DXVK-NVAPI
- Esync and Fsync
- gamescope (needs `gamescope` installed)
- FPS limit
- GPU choice on PCs with more than one
- DLSS, FSR and XeSS upgrades
- Winetricks
- umu and its protonfixes, which are game fixes from the umu database
- Wayland instead of X11 (needs a Wine build with Wayland support)
- Scripts to run before and after the game, and programs to run alongside it, like trainers

### How do I turn on Lossless Scaling frame generation?

Heronite uses [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). It needs Lossless Scaling from Steam, and it works with Vulkan, DXVK and VKD3D games, not OpenGL.

> **Note.** `gamescope` and `bubblewrap` (for the sandbox) are optional tools. See [Installation](/docs/installation/).

## Can I sandbox a Windows game?

Yes. Run a game you do not trust through [bubblewrap](https://github.com/containers/bubblewrap). It gets no network and no access to your home folder, and you can let one thing through, like a folder or the network. It needs `bwrap` installed. See the [sandbox docs](/docs/wine-and-proton/#sandbox).

## A Windows game does not start on Linux

Heronite reads the launch log and suggests a fix when it recognises one of these problems:

- a missing DLL or .NET,
- a DirectX 12 game without VKD3D-Proton,
- a missing 32-bit Vulkan driver,
- a low `vm.max_map_count`,
- another `wineserver` still running,
- anti-cheat that is not supported.

Otherwise, try another Proton build, such as GE-Proton or Proton-CachyOS, try a fresh prefix, and check the game's page on [ProtonDB](https://www.protondb.com). Logs are in **Settings → Logs**. The [troubleshooting page](/docs/troubleshooting/) has the full table.

## How do I check a game's anti-cheat status?

Each game's details show its status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), so you can check before you buy or install. Heronite can provide the EAC and BattlEye runtimes. A game whose developer does not allow Linux will not run, whatever the launcher.

## Does it work on the Steam Deck?

Yes. Heronite runs on SteamOS desktop mode as an AppImage, and its console mode is built for controllers. See the [Steam Deck guide](/guides/steam-deck/). Coming from Lutris or Heroic? It can import their games: [Heronite vs Lutris](/compare/lutris/), [vs Heroic](/compare/heroic/).
