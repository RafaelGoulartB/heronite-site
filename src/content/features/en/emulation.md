---
title: "Emulator Frontend and ROM Launcher for Linux | Heronite"
description: "Emulator frontend and ROM launcher for Linux and Windows: finds RetroArch, Dolphin and PCSX2, scans ROM folders and adds art to every game."
eyebrow: Emulation
headline: "Emulator frontend and ROM launcher for Linux"
lead: "Heronite is an emulator frontend for Linux and Windows. It detects your emulators and scans your ROM folders for retro and console games."
navLabel: Emulation
summary: "Detects 22 emulators and RetroArch cores, scans ROM folders, merges multi-disc games and shows RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "Heronite's Emulators page with cards for PCSX2 and RPCS3, each marked Native and Ready, listing its ROM folder with Scan now and Review buttons, and buttons to detect emulators, scan a folder and add a ROM folder."
og: /og/emulation.jpg
updated: 2026-11-13
highlights:
  - title: 22 emulators detected
    text: RetroArch, Dolphin, PCSX2, Ryujinx and more, found on PATH or as Flatpaks.
  - title: Scans for ROMs
    text: Point it at your ROM folders and every game gets art.
  - title: Multi-disc, merged
    text: Multi-disc games show up once, not once per disc.
  - title: Achievements
    text: Connect a RetroAchievements account to see your progress for emulated games.
faq:
  - q: What is the best ROM launcher for Linux?
    a: It depends on your needs. Heronite fits if you want emulated games next to your Steam, Epic and GOG games. It is free and open source.
  - q: Is there a RetroArch frontend for Linux and Windows?
    a: Yes. Heronite finds RetroArch and its cores, and picks a default core for each system.
  - q: Does Heronite include emulators or ROMs?
    a: No. You install the emulators and bring your ROMs.
  - q: Can I use an emulator that is not on the list?
    a: Yes. Add a custom emulator by giving Heronite the program and its arguments.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Emulated games join the same library as your PC games, with play time and a timeline of sessions.

## How do I set up emulation in Heronite?

1. [Download Heronite](/download/) for Linux or Windows.
2. Install the emulators you want.
3. Put your ROMs in one subfolder per system.
4. Open the **Emulators** page (<kbd>Ctrl</kbd> <kbd>5</kbd>).
5. Choose **Detect emulators…** to find the ones installed on your PC.
6. Press **Add ROM folder**, then choose the emulator and the folder with its ROMs.

Heronite scans the folder and adds its games. **Scan all folders now** picks up games you add later.

## Which emulators does Heronite support?

Heronite supports the 22 emulators below and any custom one. Install them from your distribution, Flathub or their websites. Heronite finds them on `PATH`, as Flatpaks and as RetroArch cores.

| Emulator | Systems |
|---|---|
| RetroArch | Many, through cores |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| ePSXe | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Mupen64Plus | Nintendo 64 |
| M64Py | Nintendo 64 |
| gopher64 | Nintendo 64 |
| Azahar (or Citra) | 3DS |
| melonDS | Nintendo DS |
| DeSmuME | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Adventure games |
| Custom | Any other emulator: give the program and its arguments |

If a game will not start, see [Troubleshooting](/docs/troubleshooting/).

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

Install cores from RetroArch's **Online Updater**. Heronite looks in RetroArch's cores folder (`~/.config/retroarch/cores` on Linux, `%APPDATA%\RetroArch\cores` on Windows), the Flatpak and the system libretro folders. See [RetroArch cores](/docs/emulation/#retroarch-cores).

## Where do I put my ROMs?

Keep one subfolder per system:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

On the first start, Heronite scans common ROM folders if they exist. On Linux these include `ROMs`, `Emulation/roms` and `Games/ROMs` in your home folder, plus `retrodeck/roms` for RetroDECK. On Windows they include `ROMs`, `Emulation\roms` and `Games\ROMs` in your user folder and at the top of each drive.

[ROM folders](/docs/emulation/#rom-folders) has the full list. Scans skip folders named `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` and `manuals`.

## How are multi-disc games and save states handled?

Games read from `.m3u`, `.cue` and `.gdi` files show up once in your library instead of once per disc. A game's page lets you continue from a **save state**, so you pick up where you left off.

## Do emulated games get covers and achievements?

Yes. Every game added from a ROM folder gets art like any other game. [SteamGridDB](https://www.steamgriddb.com) covers suit emulated games well. Add its optional free key in **Settings → Metadata**, as [Metadata and art](/docs/metadata-and-art/) describes.

For achievements, connect a [RetroAchievements](https://retroachievements.org) account in Settings.

![Heronite's Collection with games grouped into Playing and On Going, and ELDEN RING open with its cover, a Play button, screenshots, details and a timeline of play sessions.](../../../assets/screenshots/collection.webp)

*A game page with art, a Play button, details and a timeline of sessions.*

## Can I play emulated games with a controller?

Yes. [Console mode](/features/console-mode/) shows your whole library, emulated games included, on a controller-first layout for the couch or a TV. Heronite records their [play time](/features/play-time-tracking/) too. On a Steam Deck, see the [Steam Deck guide](/guides/steam-deck/).

Next: add your PC games on the [Stores and launchers](/features/stores/) page.
