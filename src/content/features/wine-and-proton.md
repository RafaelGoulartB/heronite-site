---
title: "Run Windows Games on Linux with Wine and Proton | Heronite"
description: "Run Windows games on Linux from one launcher. Heronite manages Proton-CachyOS and GE-Proton, prefixes, DXVK, gamescope, FPS limits, DLSS and FSR per game."
eyebrow: Wine and Proton
headline: "Windows games on Linux, *without the setup pain*"
lead: "A Wine and Proton manager and a game launcher in one app. Pick a build, give each game its own prefix, and tune DXVK, gamescope, FPS limits and upscaling per game."
navLabel: Wine and Proton
summary: "A built-in Wine Manager, per-game prefixes and options, a sandbox and launch error hints for Windows games on Linux."
order: 4
hero: ../../assets/screenshots/game-settings.webp
heroAlt: "Game settings for Control on the Compatibility tab: the Proton version set to GE-Proton-latest with a ProtonDB Platinum rating, the Wine prefix and its folder, Winecfg and Winetricks buttons, and the umu ID field."
og: /og/wine-and-proton.jpg
updated: 2026-11-01
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
    a: Install Heronite, add the game or log in to its store, and press Play. Heronite runs it through Wine or Proton with sensible defaults. If a game needs different settings, change them in **Game settings**, on the **Compatibility** tab.
  - q: What is the best Proton version for my game?
    a: There is no single best one. **Proton-CachyOS** and **GE-Proton** often get fixes first, so they are a good start. A game's page shows its [ProtonDB](https://www.protondb.com) rating, and you can switch to another build in one click. See [how to install GE-Proton](/guides/install-ge-proton/).
  - q: Is there a Proton manager for non-Steam games?
    a: Yes. The **Wine Manager** (`Ctrl+3`) downloads and updates Proton builds for any game in your Collection. Turn on the Steam option and the same builds also show up in Steam's `compatibilitytools.d` folder.
  - q: Do games with anti-cheat work on Linux?
    a: It depends on the game. The status comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) and shows in the game's details. Heronite can provide the EAC and BattlEye runtimes, but a game whose developer does not allow Linux will not run. See [anti-cheat](/docs/wine-and-proton/#anti-cheat).
  - q: Can I use Lossless Scaling frame generation on Linux?
    a: Yes, through [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). You need Lossless Scaling from Steam, and it works with Vulkan, DXVK and VKD3D games, not OpenGL.
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Windows games on Linux run through Wine or Proton. Both work well today, but setting them up one game at a time is slow: which build, which prefix, which environment variables. Heronite does that work for you. It picks sensible defaults, and every option can be changed per game in **Game settings**, on the **Compatibility** tab, or for all games in Settings.

## How does Heronite run Windows games on Linux?

When you press Play on a Windows game, Heronite starts it with Wine or Proton, in a prefix of its own. That works for games from [Epic, GOG, Amazon and the other stores](/features/stores/) as well as Windows programs you add by hand. The game page shows its ProtonDB rating, so you know how well it should run before you install it.

Your game library does not change. Windows games sit next to native Linux games and [emulated ones](/features/emulation/) in the same Collection, with the same play time tracking.

## What is the Wine Manager?

The Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) downloads and updates these builds:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Builds go to Heronite's data folder, or to Steam's `compatibilitytools.d` if you turn that on, so Steam can use them too. Heronite also finds the Proton builds already in your Steam libraries and the Wine runners of Lutris, so you do not download them twice.

![The Wine Manager with a list of Proton builds on the left, Proton-CachyOS selected, and its versions on the right with release dates, sizes and Install buttons.](../../assets/screenshots/wine-manager.webp)

*The Wine Manager: pick a build family, then install or remove any version.*

New to this? The guide [install GE-Proton](/guides/install-ge-proton/) shows the steps.

## Do I need to know Wine to use it?

No. Heronite picks a Wine or Proton build and a prefix for you, so most games start with one click. Open **Game settings** only when a game needs something special, like a different Proton build, DXVK or an FPS limit. A **Reset this tab** button puts a tab back to its defaults.

## How do prefixes work?

A prefix is the fake Windows folder a game runs in. By default games install to `~/Games/Heronite`, and each game gets its own prefix in `~/Games/Heronite/Prefixes`. Several games can also share one prefix. The Wine Manager lists your prefixes, and a game's settings have buttons for **Winecfg** and **Winetricks** in its prefix.

## Which options can I set per game?

Everything below can be set for one game. Heronite also has launch presets, so you can reuse a setup in other games.

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

### Frame generation with Lossless Scaling

Heronite can turn on Lossless Scaling frame generation through [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). It needs Lossless Scaling from Steam, and it works with Vulkan, DXVK and VKD3D games, not OpenGL.

> **Note.** Some options need extra tools. gamescope needs `gamescope`, and the sandbox needs `bubblewrap`. Heronite works without them and each one only turns on its feature. The list is in [Installation](/docs/installation/).

## Can I sandbox a Windows game?

Yes. If you do not trust a game, run it through [bubblewrap](https://github.com/containers/bubblewrap). The game gets no network and no access to your home folder. When it needs one thing, like a folder or the network, you can let just that through. It needs `bwrap` installed. More in the [sandbox docs](/docs/wine-and-proton/#sandbox).

## What happens when a game does not start?

Heronite reads the launch log and suggests a fix when it recognises the problem. It looks for:

- a missing DLL or .NET,
- a DirectX 12 game without VKD3D-Proton,
- a missing 32-bit Vulkan driver,
- a low `vm.max_map_count`,
- another `wineserver` still running,
- anti-cheat that is not supported.

Beyond that, the usual advice holds: try another Proton build, such as Proton-GE or Proton-CachyOS, try a fresh prefix, and check the game's page on [ProtonDB](https://www.protondb.com). Logs are in **Settings → Logs**. The [troubleshooting page](/docs/troubleshooting/) has the full table.

## What can I do with scripts and trainers?

Each game can run scripts before and after it starts, and programs alongside it, like trainers. Save that setup as a **launch preset** and reuse it in other games. See the [docs](/docs/wine-and-proton/#per-game-options) for the full list.

## What about anti-cheat?

Anti-cheat is the main thing that decides whether an online game runs on Linux. Heronite shows each game's status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) in its details, so you can check before you buy or install. It can provide the EAC and BattlEye runtimes. A game whose developer does not allow Linux will not run, whatever the launcher.

## Is Heronite a good Wine launcher for the Steam Deck?

Heronite runs on SteamOS desktop mode as an AppImage, and its console mode is built for controllers. See the [Steam Deck guide](/guides/steam-deck/). If you use Lutris or Heroic today, [Heronite vs Lutris](/compare/lutris/) and [Heronite vs Heroic](/compare/heroic/) explain what changes, and Heronite can import their games.

## Read the full reference

Every option is listed in the docs page [Wine and Proton](/docs/wine-and-proton/). Ready to try it? [Download Heronite](/download/) for Linux.
