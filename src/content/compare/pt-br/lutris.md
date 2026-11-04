---
title: "Alternativa ao Lutris para Linux: Heronite vs Lutris"
description: "Alternativa ao Lutris para Linux e Windows. Compare scripts de instalação, lojas, emuladores e histórico de jogo, e veja como trazer seus jogos do Lutris."
eyebrow: Comparação
headline: "Heronite vs Lutris"
lead: "O Heronite é uma alternativa ao Lutris para Linux e Windows que instala jogos das lojas em que você faz login."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: scripts de instalação, runners, lojas, emulação e histórico de jogo, e como importar seus jogos do Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite listando Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek, com uma tabela de versões do Proton-CachyOS, datas de lançamento, tamanhos e botões Instalar."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Importa seus jogos do Lutris
    text: No Linux, os jogos da biblioteca do Lutris passam para o Heronite e ficam sincronizados.
  - title: Sem cadastro
    text: O Heronite funciona sem nenhuma conta própria.
  - title: Seu histórico de jogo
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
  - title: Backup de saves
    text: O Ludusavi faz backup dos saves de um jogo depois de cada sessão.
faq:
  - q: O Heronite tem scripts de instalação como o Lutris?
    a: Sim. O Heronite instala um jogo a partir de um arquivo de script de instalação YAML que você escolhe e depois o adiciona à sua biblioteca. O Lutris tem a biblioteca de scripts da comunidade no lutris.net.
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
  - q: "Heroic vs Lutris: qual devo usar?"
    a: O Heroic é focado em Epic, GOG e Amazon. O Lutris cobre mais sistemas, runners e scripts de instalação. Veja [Heronite vs Heroic](/compare/heroic/).
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**Resumindo:** escolha o Lutris se você quer os scripts de instalação da comunidade no lutris.net, ou um runner para um sistema antigo ou uma engine. Escolha o Heronite se você joga principalmente por lojas, quer Steam, Epic, GOG e Amazon numa biblioteca só, ou quer o mesmo launcher no Windows.

## Comparação rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Python |
| Como os jogos são configurados | Pela loja, à mão ou por um script de instalação YAML | Scripts de instalação, ou configuração manual |
| Biblioteca da Steam | Sim, sem login | Sim |
| Epic, GOG, Amazon | Sim, com legendary, gogdl e nile | Sim |
| Battle.net, EA app | Sim, num prefixo Wine no Linux | Sim |
| Emulação | Emuladores detectados, ROMs escaneadas, save states | Runners para muitos emuladores e engines |
| Wine e Proton | Sim, com um Gerenciador do Wine | Sim, GE-Proton pelo umu por padrão |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Sim, com um editor de tempo de jogo |
| Saves na nuvem | Epic e GOG, em beta | Não consta |
| Conta online | Não precisa | Conta opcional no lutris.net |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Lutris vem do [lutris.net](https://lutris.net), do [repositório do Lutris](https://github.com/lutris/lutris) e das [notas de versão](https://github.com/lutris/lutris/releases) dele. O Lutris lista Epic e GOG no site, e a Amazon nas notas de versão. "Não consta" quer dizer que o README do Lutris não lista o recurso. Atualizado até novembro de 2026.

## O que o Heronite e o Lutris têm em comum?

Os dois são launchers gratuitos e de código aberto (GPL-3.0). Os dois rodam jogos do Windows pelo Wine ou pelo Proton, conectam a várias lojas, registram o tempo de jogo e rodam emuladores.

## Qual escolher?

### Escolha o Lutris se…

- **Você depende de scripts de instalação da comunidade.** Os instaladores do Lutris são scripts YAML no lutris.net, e um link `lutris:` roda um pela linha de comando.
- **Você quer um runner para um sistema antigo ou uma engine.** O site do Lutris cita Wine, MAME, Dolphin, RetroArch e ScummVM, "e muito mais". As versões recentes acrescentaram DuckStation, Vita3K e Azahar.
- **Você gosta de uma interface só para muitos runners,** cada um com suas próprias configurações.
- **Você quer uma conta opcional no lutris.net** para sincronizar sua biblioteca.

### Escolha o Heronite se…

- **Você joga principalmente por lojas.** Faça login na Epic Games, GOG e Amazon Games na página **Lojas**, e todos os jogos que você tem lá entram na sua biblioteca, instalados ou não. Uma fila de downloads instala tudo ([lojas](/pt-br/features/stores/)).
- **Você quer uma biblioteca só, organizada do seu jeito.** Agrupe jogos de todas as fontes por status, loja, gênero, série ou ano, e salve presets como Jogando agora ou Pendentes.
- **Você quer Wine ou Proton definido por jogo.** Escolha uma versão e um prefixo Wine (uma pasta separada do Windows), com opções como DXVK, gamescope, limite de FPS e Winetricks. O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) baixa Proton-CachyOS e GE-Proton, e acha os runners do Wine que o Lutris já instalou.
- **Você quer um app leve com histórico de jogo.** O Heronite usa cerca de 190 MB de RAM parado ([desempenho](/pt-br/features/performance/)) e registra cada sessão para as [estatísticas](/pt-br/features/play-time-tracking/) e a retrospectiva do ano.
- **Você joga na TV ou com controle.** O [modo console](/pt-br/features/console-mode/) tem oito layouts e sete temas que você pode editar e compartilhar.
- **Você quer o mesmo launcher no Windows.** O Heronite cuida de Steam, Epic, GOG, Amazon e Microsoft Store por lá, e **Configurações → Nuvem** mantém uma biblioteca só nos dois sistemas de um dual boot.
- **Você quer seus saves protegidos.** O Heronite sincroniza os saves na nuvem da Epic e da GOG, e faz backup dos saves de qualquer jogo depois de cada sessão com a ferramenta opcional Ludusavi ([saves e backups](/pt-br/features/saves-and-backups/)).

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e um jogo aberto com os detalhes e a linha do tempo de jogo.](../../../assets/screenshots/collection.webp)

*A Coleção: jogos agrupados, tempo de jogo e uma linha do tempo das sessões.*

## Como migrar do Lutris para o Heronite?

No Linux, o Heronite importa os jogos da biblioteca do Lutris. Ele só lê os arquivos do Lutris, então o Lutris continua funcionando como antes.

1. **[Instale o Heronite](/pt-br/docs/installation/) e abra.**
2. **Ligue a importação do Lutris.** Em **Configurações → Outros launchers**, ligue **Trazer os jogos dele** embaixo do Lutris. Os jogos instalados dele entram na sua biblioteca com capas e tempo de jogo, e ficam sincronizados. Funciona com a instalação normal do Lutris ou com o Flatpak dele.
3. **Faça login nas suas lojas.** Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e faça login na Epic Games, GOG e Amazon Games para trazer essas bibliotecas.

Bom saber:

- O Lutris continua abrindo os jogos que ele trouxe, com as configurações que você deu a eles lá.
- O Heronite ignora os jogos da Steam que o Lutris lista e usa a própria importação da Steam, então nada aparece duas vezes.
- O Heronite usa os metadados do Lutris para capas e detalhes.
- O Heronite importa os jogos da biblioteca do Lutris, não os scripts de instalação que os configuraram.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Primeiros passos](/pt-br/docs/getting-started/).
