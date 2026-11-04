---
title: "Emuladores y ROMs: sistemas compatibles y carpetas"
navLabel: "Emulación"
description: "Emuladores y ROMs en Heronite: emuladores compatibles, núcleos de RetroArch por defecto, carpetas de ROMs, juegos de varios discos y RetroAchievements."
section: Guides
order: 2
updated: 2026-11-04
---

Heronite añade tus ROMs a la biblioteca con su arte: detecta los emuladores instalados y escanea tus carpetas de ROMs. Instala antes los emuladores, desde tu distribución, Flathub o sus webs. Heronite los encuentra en `PATH`, como Flatpaks y como núcleos de RetroArch.

## Emuladores compatibles

| Emulador | Sistemas |
|---|---|
| RetroArch | Muchos, mediante núcleos (ver más abajo) |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Azahar (o Citra) | 3DS |
| melonDS | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Aventuras gráficas |
| Personalizado | Cualquier otro emulador: indica el programa y sus argumentos |

## Núcleos de RetroArch

Heronite usa estos núcleos por defecto cuando RetroArch ejecuta un sistema.

| Sistema | Núcleo |
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

Instala los núcleos desde el Online Updater de RetroArch. Heronite los busca en la carpeta de núcleos de RetroArch (`~/.config/retroarch/cores` o `%APPDATA%\RetroArch\cores`), en el Flatpak y en las carpetas libretro del sistema.

## Carpetas de ROMs

Usa una subcarpeta por sistema, por ejemplo:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

En el primer inicio, Heronite escanea estas carpetas si existen:

- **Linux** (en tu carpeta personal): `ROMs`, `Roms`, `roms`, `Emulation/roms`, `Games/ROMs`, `Games/Emulation/roms`, `retrodeck/roms`, `RetroDECK/roms`; y `Emulation/roms`, `roms`, `retrodeck/roms` en otros discos.
- **Windows:** `ROMs`, `Emulation\roms`, `Games\ROMs`, `Documents\ROMs` en tu carpeta de usuario; y `Emulation\roms`, `ROMs`, `Games\ROMs`, `RetroArch-Win64\roms` en la raíz de cada unidad.

Añade más carpetas en la página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>). Los escaneos omiten las carpetas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` y `manuals`. Heronite lee los juegos de varios discos a partir de archivos `.m3u`, `.cue` y `.gdi`, así que cada uno aparece una sola vez.

## Continúa desde un estado guardado

Abre la página del juego para continuar desde un estado guardado.

## Muestra los logros de RetroAchievements en juegos emulados

Conecta una cuenta de [RetroAchievements](https://retroachievements.org) en Ajustes para ver tus logros de los juegos emulados. Consulta [Metadatos y arte](/es/docs/metadata-and-art/).
