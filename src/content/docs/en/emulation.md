---
title: "Emulators and ROMs: supported systems, folders"
navLabel: "Emulation"
description: "Emulators and ROMs in Heronite: supported emulators, default RetroArch cores, ROM folder layout, multi-disc games and RetroAchievements."
section: Guides
order: 2
updated: 2026-11-04
---

Heronite detects the emulators you have installed, scans your ROM folders, and adds each game to the Collection with its art. Install the emulators yourself (from your distribution, Flathub, or their websites); Heronite finds them on `PATH`, as Flatpaks, and as RetroArch cores.

## Supported emulators

| Emulator | Systems |
|---|---|
| RetroArch | Many, through cores (see below) |
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

## RetroArch cores

Heronite uses these cores by default when RetroArch runs a system.

| System | Core |
|---|---|
| NES | nestopia |
| SNES | snes9x |
| Game Boy | gambatte |
| Game Boy Advance | mgba |
| Nintendo 64 | mupen64plus_next |
| Nintendo DS | melonds |
| Mega Drive, Master System, Game Gear | genesis_plus_gx |
| Saturn | mednafen_saturn |
| Dreamcast | flycast |
| PlayStation | pcsx_rearmed |
| PSP | ppsspp |
| PC Engine | mednafen_pce_fast |
| Neo Geo Pocket | mednafen_ngp |
| WonderSwan | mednafen_wswan |
| Lynx | mednafen_lynx |
| Atari 2600 | stella |
| Arcade | fbneo |
| MAME | mame |

Install cores from RetroArch's own Online Updater. Heronite looks for them in RetroArch's cores folder (`~/.config/retroarch/cores` or `%APPDATA%\RetroArch\cores`), the Flatpak, and the system libretro folders.

## ROM folders

Keep one subfolder per system, for example:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

On the first run, Heronite scans these folders if they exist:

- **Linux** (in your home folder): `ROMs`, `Roms`, `roms`, `Emulation/roms`, `Games/ROMs`, `Games/Emulation/roms`, `retrodeck/roms`, `RetroDECK/roms`; and `Emulation/roms`, `roms`, `retrodeck/roms` on other disks.
- **Windows:** `ROMs`, `Emulation\roms`, `Games\ROMs`, `Documents\ROMs` in your user folder; and `Emulation\roms`, `ROMs`, `Games\ROMs`, `RetroArch-Win64\roms` at the top of each drive.

Add more folders on the **Emulators** page (<kbd>Ctrl</kbd> <kbd>5</kbd>). Scans skip `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media`, and `manuals` folders. Multi-disc games are read from `.m3u`, `.cue`, and `.gdi` files, so each one shows up once.

## Continue from a save state

A game's page lets you continue from a save state.

## Show RetroAchievements for emulated games

Connect a [RetroAchievements](https://retroachievements.org) account in Settings to see your achievements for emulated games. See [Metadata and art](/docs/metadata-and-art/).
