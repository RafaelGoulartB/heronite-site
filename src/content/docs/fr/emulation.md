---
title: "Émulateurs et ROM : systèmes et dossiers pris en charge"
navLabel: "Émulation"
description: "Émulateurs et ROM dans Heronite : systèmes pris en charge, cœurs RetroArch par défaut, organisation des dossiers, jeux multidisques et RetroAchievements."
section: Guides
order: 2
updated: 2026-11-13
---

Heronite ajoute vos ROM avec leurs illustrations : il détecte les émulateurs installés et analyse les dossiers. Installez d’abord les émulateurs depuis votre distribution, Flathub ou leurs sites. Heronite les trouve sur `PATH`, en Flatpak et sous forme de cœurs RetroArch.

## Émulateurs pris en charge

| Émulateur | Systèmes |
|---|---|
| RetroArch | Nombreux systèmes via les cœurs (ci-dessous) |
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
| Azahar (ou Citra) | 3DS |
| melonDS | Nintendo DS |
| DeSmuME | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Jeux d’aventure |
| Personnalisé | Tout autre émulateur : programme et arguments |

## Cœurs RetroArch

Heronite utilise par défaut :

| Système | Cœur |
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

Installez les cœurs depuis Online Updater dans RetroArch. Heronite cherche dans le dossier des cœurs (`~/.config/retroarch/cores` ou `%APPDATA%\RetroArch\cores`), le Flatpak et les dossiers libretro du système.

## Dossiers de ROM

Un sous-dossier par système, par exemple :

```
ROMs/
├── snes/
├── psx/
└── gba/
```

Au premier démarrage, Heronite analyse les dossiers existants :

- **Linux** (dossier personnel) : `ROMs`, `Roms`, `roms`, `Emulation/roms`, `Games/ROMs`, `Games/Emulation/roms`, `retrodeck/roms`, `RetroDECK/roms` ; sur les autres disques : `Emulation/roms`, `roms`, `retrodeck/roms`.
- **Windows :** `ROMs`, `Emulation\roms`, `Games\ROMs`, `Documents\ROMs` dans le dossier utilisateur ; `Emulation\roms`, `ROMs`, `Games\ROMs`, `RetroArch-Win64\roms` à la racine des lecteurs.

Ajoutez des dossiers sur **Emulators** (<kbd>Ctrl</kbd> <kbd>5</kbd>). Les analyses ignorent `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` et `manuals`. Les fichiers `.m3u`, `.cue` et `.gdi` regroupent les jeux multidisques en une seule entrée.

## Reprendre un jeu depuis un état de sauvegarde

1. Appuyez sur **Play**.
2. Dans **How do you want to play?**, choisissez un état.
3. Choisissez **Continue**.

Heronite ne demande que si l’émulateur a des états pour ce jeu. **Start from the beginning** démarre normalement ; les sauvegardes internes sur carte mémoire sont conservées.

## Afficher les succès RetroAchievements

Connectez votre compte [RetroAchievements](https://retroachievements.org) dans **Settings → Achievements** pour les jeux émulés.
