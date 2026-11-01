---
title: "Emulator Frontend for Linux and Windows | Heronite"
description: "Heronite is a free emulator frontend for Linux and Windows. It finds RetroArch, Dolphin, PCSX2, RPCS3 and more, scans your ROM folders and adds art to every game."
eyebrow: Emulation
headline: "An emulator frontend *that finds your games*"
lead: "Heronite detects your emulators, scans your ROM folders and puts every retro and console game in the same Collection as your PC games, with art, play time and achievements."
navLabel: Emulation
summary: "Detects 17 emulators and RetroArch cores, scans ROM folders, merges multi-disc games and shows RetroAchievements."
order: 3
hero: ../../assets/screenshots/emulators.webp
heroAlt: "Heronite's Emulators page with cards for PCSX2 and RPCS3, each marked Native and Ready, listing its ROM folder with Scan now and Review buttons, and buttons to detect emulators, scan a folder and add a ROM folder."
og: /og/emulation.jpg
updated: 2026-11-01
highlights:
  - title: Detects your emulators
    text: Finds them on PATH, as Flatpaks and as RetroArch cores. Add any other emulator by hand.
  - title: Scans ROM folders
    text: Common ROM folders are scanned on the first run, and you can add more. Each game gets its art.
  - title: Multi-disc, merged
    text: Games read from .m3u, .cue and .gdi files show up once, not once per disc.
  - title: Achievements
    text: Connect a RetroAchievements account to see your progress for emulated games.
faq:
  - q: What is the best emulator frontend for Linux?
    a: It depends on what you need. Heronite is a good fit if you want emulated games next to your Steam, Epic and GOG games in one library, with art, play time and a controller-friendly [console mode](/features/console-mode/). It is free and open source.
  - q: Is there a RetroArch frontend for Linux and Windows?
    a: Yes. Heronite runs RetroArch cores for many systems, picking a default core for each one, such as `snes9x` for SNES and `mgba` for Game Boy Advance. Install the cores from RetroArch's own Online Updater and Heronite finds them.
  - q: Does Heronite include emulators or ROMs?
    a: No. You install the emulators yourself, from your distribution, Flathub or their websites, and you bring your own games. Heronite finds the emulators and scans your ROM folders.
  - q: How do I add a ROM folder?
    a: Open the **Emulators** page with `Ctrl+5` and add the folder. Keep one subfolder per system, like `snes`, `psx` and `gba`. Common folders such as `~/ROMs` are scanned on the first run.
  - q: Can I use an emulator that is not on the list?
    a: Yes. Add a custom emulator by giving Heronite the program and its arguments.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Emulation usually means a pile of separate programs, a folder tree of ROMs and no covers. Heronite works as an emulator frontend: it detects the emulators you have installed, scans your ROM folders and adds each game to the Collection with its art. Emulated games sit on the same shelf as the rest of your [game library](/features/game-library/), with their own play time and timeline.

## Which emulators does Heronite support?

Install the emulators yourself, from your distribution, Flathub or their websites. Heronite finds them on `PATH`, as Flatpaks and as RetroArch cores.

| Emulator | Systems |
|---|---|
| RetroArch | Many, through cores |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Azahar (or Citra) | 3DS |
| melonDS | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Adventure games |
| Custom | Any other emulator: give the program and its arguments |

## How do I use RetroArch with Heronite?

RetroArch plays many systems through **cores**. When RetroArch runs a system, Heronite uses a default core for it:

| System | Default core |
|---|---|
| NES | `nestopia` |
| SNES | `snes9x` |
| Game Boy | `gambatte` |
| Game Boy Advance | `mgba` |
| Nintendo 64 | `mupen64plus_next` |
| Nintendo DS | `melonds` |
| Mega Drive, Master System, Game Gear | `genesis_plus_gx` |
| Saturn | `mednafen_saturn` |
| Dreamcast | `flycast` |
| PlayStation | `pcsx_rearmed` |
| PSP | `ppsspp` |
| PC Engine | `mednafen_pce_fast` |
| Neo Geo Pocket | `mednafen_ngp` |
| WonderSwan | `mednafen_wswan` |
| Lynx | `mednafen_lynx` |
| Atari 2600 | `stella` |
| Arcade | `fbneo` |
| MAME | `mame` |

Install cores from RetroArch's own Online Updater. Heronite looks for them in RetroArch's cores folder (`~/.config/retroarch/cores` on Linux or `%APPDATA%\RetroArch\cores` on Windows), in the Flatpak and in the system libretro folders. The docs list the same table under [RetroArch cores](/docs/emulation/#retroarch-cores).

## How does ROM scanning work?

Keep one subfolder per system:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

On the first run, Heronite scans the usual places if they exist. On Linux that includes `ROMs`, `Emulation/roms` and `Games/ROMs` in your home folder, plus `retrodeck/roms`. On Windows it checks folders like `ROMs`, `Emulation\roms` and `Games\ROMs` in your user folder and at the top of each drive. The full list is in [ROM folders](/docs/emulation/#rom-folders).

To add more, open the **Emulators** page with <kbd>Ctrl</kbd> <kbd>5</kbd>. Scans skip folders named `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` and `manuals`, so your support files do not turn into games.

> **Tip.** Already use RetroDECK? Its `retrodeck/roms` folder is one of the places Heronite checks by itself.

## What about multi-disc games and save states?

Multi-disc games are read from `.m3u`, `.cue` and `.gdi` files, so each game shows up once in your Collection instead of once per disc. That keeps a long PlayStation library tidy.

A game's page also lets you continue from a **save state**, so you can pick up where you left off instead of starting from the last in-game save.

## Do emulated games get covers and achievements?

Yes. Every game added from a ROM folder gets art like any other game. [SteamGridDB](https://www.steamgriddb.com) is especially useful here, because its community covers fit emulated games well. Add its optional free key in Settings, as described in [Metadata and art](/docs/metadata-and-art/).

For achievements, connect a [RetroAchievements](https://retroachievements.org) account in Settings. You can then see your achievements for emulated games.

![Heronite's Collection with games grouped into Playing and On Going, and ELDEN RING open with its cover, a Play button, screenshots, details and a timeline of play sessions.](../../assets/screenshots/collection.webp)

*Every game in the Collection gets a page like this one, with art, a Play button, details and a timeline of sessions.*

## Can I play emulated games with a controller?

Yes. [Console mode](/features/console-mode/) is a controller-first layout for the couch or a TV, and it shows your whole Collection, so emulated games are there with the rest. Your [play time](/features/play-time-tracking/) is recorded for each of them too.

If you also play PC games from stores, the [stores page](/features/stores/) shows how Steam, Epic, GOG and Amazon join the same library. And if you want Windows games on Linux, see [Wine and Proton](/features/wine-and-proton/).

## Which systems can I play?

Between the dedicated emulators and the RetroArch cores, the lists above cover Nintendo from NES to Switch, PlayStation from the first console to the PS4 and Vita, Sega from Master System to Dreamcast, Xbox, Atari, arcade machines and adventure games through ScummVM. Anything missing can be added as a **custom** emulator.

## Set it up in a few minutes

1. [Download Heronite](/download/) for Linux or Windows.
2. Install the emulators you want.
3. Put your ROMs in one subfolder per system.
4. Open the **Emulators** page and press detect, then scan your ROM folders.

The docs page [Emulators and ROMs](/docs/emulation/) has the full lists of folders, cores and rules. For help with a game that will not start, see [Troubleshooting](/docs/troubleshooting/).
