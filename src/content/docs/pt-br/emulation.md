---
title: "Emuladores e ROMs: sistemas compatíveis e pastas"
navLabel: "Emulação"
description: "Emuladores e ROMs no Heronite: emuladores compatíveis, cores padrão do RetroArch, pastas de ROMs, jogos de vários discos e RetroAchievements."
section: Guides
order: 2
updated: 2026-11-04
---

O Heronite adiciona suas ROMs à biblioteca com a arte de cada jogo: ele detecta os emuladores instalados e varre suas pastas de ROMs. Instale os emuladores antes, pela sua distribuição, pelo Flathub ou pelos sites deles. O Heronite os encontra no `PATH`, como Flatpaks e como cores do RetroArch.

## Emuladores compatíveis

| Emulador | Sistemas |
|---|---|
| RetroArch | Vários, por meio de cores (veja abaixo) |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Azahar (ou Citra) | 3DS |
| melonDS | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Jogos de aventura |
| Personalizado | Qualquer outro emulador: informe o programa e os argumentos dele |

## Cores do RetroArch

O Heronite usa estes cores por padrão quando o RetroArch roda um sistema.

| Sistema | Core |
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

Instale os cores pelo Online Updater do RetroArch. O Heronite os procura na pasta de cores do RetroArch (`~/.config/retroarch/cores` ou `%APPDATA%\RetroArch\cores`), no Flatpak e nas pastas libretro do sistema.

## Pastas de ROMs

Mantenha uma subpasta por sistema, por exemplo:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

Na primeira execução, o Heronite varre estas pastas, se existirem:

- **Linux** (na sua pasta pessoal): `ROMs`, `Roms`, `roms`, `Emulation/roms`, `Games/ROMs`, `Games/Emulation/roms`, `retrodeck/roms`, `RetroDECK/roms`; e `Emulation/roms`, `roms`, `retrodeck/roms` em outros discos.
- **Windows:** `ROMs`, `Emulation\roms`, `Games\ROMs`, `Documents\ROMs` na pasta do seu usuário; e `Emulation\roms`, `ROMs`, `Games\ROMs`, `RetroArch-Win64\roms` na raiz de cada unidade.

Adicione mais pastas na página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>). As varreduras ignoram as pastas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` e `manuals`. O Heronite lê jogos de vários discos a partir de arquivos `.m3u`, `.cue` e `.gdi`, então cada um aparece uma única vez.

## Continue de um estado salvo

Abra a página do jogo para continuar a partir de um estado salvo.

## Veja conquistas do RetroAchievements em jogos emulados

Conecte uma conta do [RetroAchievements](https://retroachievements.org) em Configurações para ver as conquistas dos jogos emulados. Veja [Metadados e arte](/pt-br/docs/metadata-and-art/).
