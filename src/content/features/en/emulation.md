---
title: "Emulator Frontend and ROM Launcher for Linux | Heronite"
description: "An emulator frontend and ROM launcher for Linux and Windows. It finds RetroArch, Dolphin and PCSX2, scans your ROM folders and adds art to every game."
eyebrow: Emulation
headline: "Emulator frontend and ROM launcher for Linux"
lead: "Heronite is an emulator frontend for Linux and Windows. It detects your emulators and scans your ROM folders for retro and console games."
navLabel: Emulation
summary: "Detects 17 emulators and RetroArch cores, scans ROM folders, merges multi-disc games and shows RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "Heronite's Emulators page with cards for PCSX2 and RPCS3, each marked Native and Ready, listing its ROM folder with Scan now and Review buttons, and buttons to detect emulators, scan a folder and add a ROM folder."
og: /og/emulation.jpg
updated: 2026-11-04
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
    a: It depends on what you need. Heronite fits if you want emulated games next to your Steam, Epic and GOG games. It is free and open source.
  - q: Is there a RetroArch frontend for Linux and Windows?
    a: Yes. Heronite runs RetroArch cores for many systems and picks a default core for each. Install cores from RetroArch's Online Updater.
  - q: Does Heronite include emulators or ROMs?
    a: No. You install the emulators and bring your own games.
  - q: Can I use an emulator that is not on the list?
    a: Yes. Add a custom emulator by giving Heronite the program and its arguments.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Emulated games join the same Collection as your PC games, with art, play time, a timeline and achievements.

## How do I set up emulation in Heronite?

1. [Download Heronite](/download/) for Linux or Windows.
2. Install the emulators you want.
3. Put your ROMs in one subfolder per system.
4. Open the **Emulators** page (<kbd>Ctrl</kbd> <kbd>5</kbd>), press detect, then scan your ROM folders.

## Which emulators does Heronite support?

Install them from your distribution, Flathub or their websites. Heronite finds them on `PATH`, as Flatpaks and as RetroArch cores. If a game will not start, see [Troubleshooting](/docs/troubleshooting/).

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

## Which RetroArch core does Heronite use for each system?

RetroArch plays systems through **cores**. Heronite uses this default core for each:

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

Install cores from RetroArch's Online Updater. Heronite looks in RetroArch's cores folder (`~/.config/retroarch/cores` on Linux, `%APPDATA%\RetroArch\cores` on Windows), the Flatpak and the system libretro folders. See [RetroArch cores](/docs/emulation/#retroarch-cores).

## Where do I put my ROMs?

Keep one subfolder per system:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

On the first run, Heronite scans the usual places if they exist. On Linux that includes `ROMs`, `Emulation/roms` and `Games/ROMs` in your home folder, plus `retrodeck/roms` for RetroDECK. On Windows it checks folders like `ROMs`, `Emulation\roms` and `Games\ROMs` in your user folder and at the top of each drive. See [ROM folders](/docs/emulation/#rom-folders).

To add more, open the **Emulators** page with <kbd>Ctrl</kbd> <kbd>5</kbd>. Scans skip folders named `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` and `manuals`.

## How are multi-disc games and save states handled?

Games read from `.m3u`, `.cue` and `.gdi` files show up once in your Collection instead of once per disc. A game's page also lets you continue from a **save state**, so you pick up where you left off.

## Do emulated games get covers and achievements?

Yes. Every game added from a ROM folder gets art like any other game. [SteamGridDB](https://www.steamgriddb.com) covers suit emulated games well. Add its optional free key in Settings, as described in [Metadata and art](/docs/metadata-and-art/).

For achievements, connect a [RetroAchievements](https://retroachievements.org) account in Settings.

![Heronite's Collection with games grouped into Playing and On Going, and ELDEN RING open with its cover, a Play button, screenshots, details and a timeline of play sessions.](../../../assets/screenshots/collection.webp)

*Every game in the Collection gets a page like this one, with art, a Play button, details and a timeline of sessions.*

## Can I play emulated games with a controller?

Yes. [Console mode](/features/console-mode/) is a controller-first layout for the couch or a TV, and it shows your whole Collection, emulated games included. Their [play time](/features/play-time-tracking/) is recorded too.

Next: add your PC games on the [stores page](/features/stores/).
