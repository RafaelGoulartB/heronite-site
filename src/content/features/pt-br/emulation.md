---
title: "Frontend de emuladores para Linux e Windows | Heronite"
description: "O Heronite é um frontend de emuladores grátis para Linux e Windows. Acha RetroArch, Dolphin, PCSX2, RPCS3 e mais, escaneia suas ROMs e põe capa em cada jogo."
eyebrow: Emulação
headline: "Um frontend de emuladores *que acha os seus jogos*"
lead: "O Heronite detecta seus emuladores, escaneia suas pastas de ROMs e põe todos os jogos retrô e de console na mesma Coleção dos seus jogos de PC, com capa, tempo de jogo e conquistas."
navLabel: Emulação
summary: "Detecta 17 emuladores e cores do RetroArch, escaneia pastas de ROMs, une jogos de vários discos e mostra o RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "A página Emuladores do Heronite com cartões do PCSX2 e do RPCS3, cada um marcado como Nativo e Pronto, mostrando a pasta de ROMs com os botões Escanear agora e Revisar, e botões para detectar emuladores, escanear uma pasta e adicionar uma pasta de ROMs."
og: /og/emulation.jpg
updated: 2026-11-01
highlights:
  - title: Detecta os seus emuladores
    text: Acha no PATH, em Flatpak e como cores do RetroArch. Adicione qualquer outro emulador à mão.
  - title: Escaneia pastas de ROMs
    text: As pastas de ROMs mais comuns são escaneadas na primeira execução, e você pode adicionar mais. Cada jogo ganha a sua capa.
  - title: Vários discos, um jogo só
    text: Jogos lidos de arquivos .m3u, .cue e .gdi aparecem uma vez, e não uma por disco.
  - title: Conquistas
    text: Conecte uma conta do RetroAchievements para ver o seu progresso nos jogos de emulador.
faq:
  - q: Qual é o melhor frontend de emuladores para Linux?
    a: Depende do que você precisa. O Heronite é uma boa escolha se você quer os jogos de emulador ao lado dos seus jogos da Steam, Epic e GOG em uma biblioteca só, com capa, tempo de jogo e um [modo console](/features/console-mode/) pensado para controle. É grátis e de código aberto.
  - q: Existe um frontend de RetroArch para Linux e Windows?
    a: Existe. O Heronite roda cores do RetroArch para vários sistemas e escolhe um core padrão para cada um, como `snes9x` para o SNES e `mgba` para o Game Boy Advance. Instale os cores pelo Online Updater do próprio RetroArch e o Heronite os encontra.
  - q: O Heronite inclui emuladores ou ROMs?
    a: Não. Você instala os emuladores por conta própria, pela sua distribuição, pelo Flathub ou pelos sites deles, e traz os seus próprios jogos. O Heronite encontra os emuladores e escaneia as suas pastas de ROMs.
  - q: Como adiciono uma pasta de ROMs?
    a: Abra a página **Emuladores** com `Ctrl+5` e adicione a pasta. Mantenha uma subpasta por sistema, como `snes`, `psx` e `gba`. Pastas comuns como `~/ROMs` são escaneadas na primeira execução.
  - q: Posso usar um emulador que não está na lista?
    a: Pode. Adicione um emulador personalizado informando ao Heronite o programa e os argumentos dele.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Emulação costuma significar um monte de programas separados, uma árvore de pastas de ROMs e nenhuma capa. O Heronite funciona como um frontend de emuladores: ele detecta os emuladores que você instalou, escaneia suas pastas de ROMs e adiciona cada jogo à Coleção com a arte dele. Os jogos de emulador ficam na mesma estante do resto da sua [biblioteca de jogos](/pt-br/features/game-library/), com tempo de jogo e linha do tempo próprios.

## Quais emuladores o Heronite suporta?

Instale os emuladores por conta própria, pela sua distribuição, pelo Flathub ou pelos sites deles. O Heronite os encontra no `PATH`, em Flatpak e como cores do RetroArch.

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

## Como usar o RetroArch com o Heronite?

O RetroArch roda vários sistemas por meio de **cores**. Quando o RetroArch roda um sistema, o Heronite usa um core padrão para ele:

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

Instale os cores pelo Online Updater do próprio RetroArch. O Heronite os procura na pasta de cores do RetroArch (`~/.config/retroarch/cores` no Linux ou `%APPDATA%\RetroArch\cores` no Windows), no Flatpak e nas pastas do libretro do sistema. A documentação traz a mesma tabela em [cores do RetroArch](/pt-br/docs/emulation/).

## Como funciona o escaneamento de ROMs?

Mantenha uma subpasta por sistema:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

Na primeira execução, o Heronite escaneia os lugares de costume, se existirem. No Linux isso inclui `ROMs`, `Emulation/roms` e `Games/ROMs` na sua pasta pessoal, além de `retrodeck/roms`. No Windows ele confere pastas como `ROMs`, `Emulation\roms` e `Games\ROMs` na sua pasta de usuário e na raiz de cada unidade. A lista completa está em [pastas de ROMs](/pt-br/docs/emulation/).

Para adicionar mais, abra a página **Emuladores** com <kbd>Ctrl</kbd> <kbd>5</kbd>. O escaneamento ignora pastas chamadas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` e `manuals`, para que seus arquivos de apoio não virem jogos.

> **Dica.** Já usa o RetroDECK? A pasta `retrodeck/roms` dele é um dos lugares que o Heronite confere sozinho.

## E jogos de vários discos e save states?

Jogos de vários discos são lidos de arquivos `.m3u`, `.cue` e `.gdi`, então cada jogo aparece uma vez na sua Coleção, e não uma vez por disco. Isso mantém organizada uma biblioteca longa de PlayStation.

A página do jogo também deixa você continuar de um **save state**, para retomar exatamente de onde parou, em vez de voltar ao último save do próprio jogo.

## Os jogos de emulador ganham capa e conquistas?

Ganham. Todo jogo adicionado de uma pasta de ROMs recebe arte como qualquer outro. O [SteamGridDB](https://www.steamgriddb.com) é especialmente útil aqui, porque as capas da comunidade combinam bem com jogos de emulador. Adicione a chave gratuita e opcional dele em Configurações, como descrito em [Metadados e imagens](/pt-br/docs/metadata-and-art/).

Para as conquistas, conecte uma conta do [RetroAchievements](https://retroachievements.org) em Configurações. Assim você vê as suas conquistas nos jogos de emulador.

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e ELDEN RING aberto com capa, um botão Jogar, capturas de tela, detalhes e uma linha do tempo das sessões de jogo.](../../../assets/screenshots/collection.webp)

*Todo jogo da Coleção ganha uma página assim, com arte, um botão Jogar, detalhes e uma linha do tempo das sessões.*

## Dá para jogar emuladores com controle?

Dá. O [modo console](/pt-br/features/console-mode/) é um layout pensado para controle, para o sofá ou a TV, e mostra a sua Coleção inteira, então os jogos de emulador estão lá com o resto. O seu [tempo de jogo](/pt-br/features/play-time-tracking/) também é registrado para cada um deles.

Se você também joga títulos de PC das lojas, a [página de lojas](/pt-br/features/stores/) mostra como Steam, Epic, GOG e Amazon entram na mesma biblioteca. E se você quer jogos do Windows no Linux, veja [Wine e Proton](/pt-br/features/wine-and-proton/).

## Quais sistemas dá para jogar?

Somando os emuladores dedicados e os cores do RetroArch, as listas acima cobrem a Nintendo do NES ao Switch, o PlayStation do primeiro console ao PS4 e ao Vita, a Sega do Master System ao Dreamcast, Xbox, Atari, máquinas de arcade e jogos de aventura pelo ScummVM. O que faltar pode ser adicionado como emulador **personalizado**.

## Configure em poucos minutos

1. [Baixe o Heronite](/pt-br/download/) para Linux ou Windows.
2. Instale os emuladores que quiser.
3. Coloque suas ROMs em uma subpasta por sistema.
4. Abra a página **Emuladores**, aperte detectar e depois escaneie suas pastas de ROMs.

A página de documentação [Emuladores e ROMs](/pt-br/docs/emulation/) tem as listas completas de pastas, cores e regras. Para ajuda com um jogo que não inicia, veja [Solução de problemas](/pt-br/docs/troubleshooting/).
