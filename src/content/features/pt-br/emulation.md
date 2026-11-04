---
title: "Frontend de emuladores e launcher de ROMs | Heronite"
description: "Frontend de emuladores e launcher de ROMs para Linux e Windows: acha RetroArch, Dolphin e PCSX2, escaneia pastas de ROMs e põe capa em cada jogo."
eyebrow: Emulação
headline: "Frontend de emuladores e launcher de ROMs para Linux"
lead: "O Heronite é um frontend de emuladores para Linux e Windows. Ele detecta seus emuladores e escaneia suas pastas de ROMs com jogos retrô e de console."
navLabel: Emulação
summary: "Detecta 17 emuladores e cores do RetroArch, escaneia pastas de ROMs, une jogos de vários discos e mostra o RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "A página Emuladores do Heronite com cartões do PCSX2 e do RPCS3, cada um marcado como Nativo e Pronto, mostrando a pasta de ROMs com os botões Escanear agora e Revisar, e botões para detectar emuladores, escanear uma pasta e adicionar uma pasta de ROMs."
og: /og/emulation.jpg
updated: 2026-11-04
highlights:
  - title: 17 emuladores detectados
    text: RetroArch, Dolphin, PCSX2, Ryujinx e outros, achados no PATH ou como Flatpak.
  - title: Escaneia as ROMs
    text: Aponte as pastas de ROMs e cada jogo ganha capa.
  - title: Vários discos, um jogo só
    text: Jogos de vários discos aparecem uma vez, e não uma por disco.
  - title: Conquistas
    text: Conecte uma conta do RetroAchievements para ver seu progresso nos jogos de emulador.
faq:
  - q: Qual é o melhor launcher de ROMs para Linux?
    a: Depende do que você precisa. O Heronite serve se você quer os jogos de emulador ao lado dos da Steam, Epic e GOG. É grátis e de código aberto.
  - q: Existe um frontend de RetroArch para Linux e Windows?
    a: Sim. O Heronite acha o RetroArch e os cores dele, e escolhe um core padrão para cada sistema.
  - q: O Heronite inclui emuladores ou ROMs?
    a: Não. Você instala os emuladores e traz as suas ROMs.
  - q: Posso usar um emulador que não está na lista?
    a: Sim. Adicione um emulador personalizado informando ao Heronite o programa e os argumentos dele.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Os jogos de emulador entram na mesma biblioteca dos seus jogos de PC, com tempo de jogo e linha do tempo das sessões.

## Como configurar a emulação no Heronite?

1. [Baixe o Heronite](/pt-br/download/) para Linux ou Windows.
2. Instale os emuladores que quiser.
3. Coloque suas ROMs em uma subpasta por sistema.
4. Abra a página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>).
5. Escolha **Detectar emuladores…** para achar os que estão instalados no seu PC.
6. Aperte **Adicionar pasta de ROMs** e escolha o emulador e a pasta com as ROMs dele.

O Heronite escaneia a pasta e adiciona os jogos dela. **Escanear todas as pastas agora** pega os jogos que você adicionar depois.

## Quais emuladores o Heronite suporta?

O Heronite suporta os 17 emuladores abaixo e qualquer um personalizado. Instale-os pela sua distribuição, pelo Flathub ou pelos sites deles. O Heronite os encontra no `PATH`, em Flatpak e como cores do RetroArch.

| Emulador | Sistemas |
|---|---|
| RetroArch | Vários, por meio de cores |
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

Se um jogo não abrir, veja [Solução de problemas](/pt-br/docs/troubleshooting/).

## Qual core do RetroArch o Heronite usa para cada sistema?

O RetroArch roda os sistemas por meio de **cores**. O Heronite usa este core padrão para cada um:

| Sistema | Core padrão |
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

Instale os cores pelo **Online Updater** do RetroArch. O Heronite procura na pasta de cores do RetroArch (`~/.config/retroarch/cores` no Linux, `%APPDATA%\RetroArch\cores` no Windows), no Flatpak e nas pastas do libretro do sistema. Veja [cores do RetroArch](/pt-br/docs/emulation/#cores-do-retroarch).

## Onde coloco minhas ROMs?

Mantenha uma subpasta por sistema:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

Na primeira abertura, o Heronite escaneia as pastas de ROMs mais comuns, se existirem. No Linux elas incluem `ROMs`, `Emulation/roms` e `Games/ROMs` na sua pasta pessoal, além de `retrodeck/roms` para o RetroDECK. No Windows elas incluem `ROMs`, `Emulation\roms` e `Games\ROMs` na sua pasta de usuário e na raiz de cada unidade.

[Pastas de ROMs](/pt-br/docs/emulation/#pastas-de-roms) tem a lista completa. O escaneamento ignora pastas chamadas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` e `manuals`.

## Como ficam os jogos de vários discos e os save states?

Jogos lidos de arquivos `.m3u`, `.cue` e `.gdi` aparecem uma vez na sua biblioteca, e não uma vez por disco. A página do jogo deixa você continuar de um **save state**, para retomar de onde parou.

## Os jogos de emulador ganham capa e conquistas?

Sim. Todo jogo adicionado de uma pasta de ROMs recebe arte como qualquer outro. As capas do [SteamGridDB](https://www.steamgriddb.com) combinam bem com jogos de emulador. Adicione a chave gratuita e opcional dele em **Configurações → Metadados**, como explica [Metadados e imagens](/pt-br/docs/metadata-and-art/).

Para as conquistas, conecte uma conta do [RetroAchievements](https://retroachievements.org) em Configurações.

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e ELDEN RING aberto com capa, um botão Jogar, capturas de tela, detalhes e uma linha do tempo das sessões de jogo.](../../../assets/screenshots/collection.webp)

*A página de um jogo com arte, um botão Jogar, detalhes e uma linha do tempo das sessões.*

## Dá para jogar emuladores com controle?

Sim. O [modo console](/pt-br/features/console-mode/) mostra toda a sua biblioteca, jogos de emulador incluídos, em um layout para controle, para o sofá ou a TV. O Heronite também registra o [tempo de jogo](/pt-br/features/play-time-tracking/) deles. No Steam Deck, veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).

Próximo: adicione seus jogos de PC na página [Lojas e launchers](/pt-br/features/stores/).
