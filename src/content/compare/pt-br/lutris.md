---
title: "Alternativa ao Lutris para Linux: Heronite vs Lutris"
description: "Alternativa ao Lutris para Linux e Windows. Compare scripts de instalação, lojas, emuladores e histórico de jogo e importe seus jogos do Lutris."
eyebrow: Comparação
headline: "Heronite vs Lutris: uma alternativa ao Lutris que também roda no Windows"
lead: "O Heronite instala jogos das lojas e roda também no Windows; o Lutris é melhor para scripts de instalação e runners."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: scripts de instalação, runners, lojas, emulação e histórico de jogo, e como importar seus jogos do Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite listando Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek, com uma tabela de versões do Proton-CachyOS, datas de lançamento, tamanhos e botões Instalar."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Lojas, não scripts
    text: Instale pela Epic, GOG e Amazon; a Steam não pede login.
  - title: Importa seus jogos do Lutris
    text: No Linux, os jogos da biblioteca do Lutris passam para o Heronite.
  - title: Linux e Windows
    text: Um launcher nativo nos dois. O Lutris roda só no Linux.
  - title: Seu histórico de jogo
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
faq:
  - q: O Heronite importa meus jogos do Lutris?
    a: "Sim, no Linux: o Heronite lê os jogos da biblioteca do Lutris e os mantém sincronizados. [Veja os passos](#como-migrar-do-lutris-para-o-heronite)."
  - q: O Heronite tem scripts de instalação como o Lutris?
    a: Não. O Heronite instala pelas lojas em que você entra; para outros jogos, você adiciona o programa ou a pasta.
  - q: "Heroic vs Lutris: qual devo usar?"
    a: O Heroic é focado em Epic, GOG e Amazon. O Lutris cobre mais sistemas, runners e scripts de instalação. O Heronite reúne Steam, essas três lojas e emuladores numa biblioteca só.
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**Resumindo:** escolha o Lutris se você quer scripts de instalação, ou um runner para um sistema antigo ou uma engine. Escolha o Heronite se você joga principalmente por lojas, quer Steam, Epic, GOG e Amazon numa biblioteca só, ou quer o mesmo launcher no Windows.

## Comparação rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Python |
| Como os jogos são configurados | Pela loja, ou adicionados à mão | Scripts de instalação, ou configuração manual |
| Biblioteca da Steam | Sim, sem login | Sim |
| Epic, GOG, Amazon | Sim, com legendary, gogdl e nile | Sim |
| Battle.net, EA app | Só no Linux, num prefixo Wine | Sim |
| Emulação | Emuladores detectados, ROMs escaneadas, save states | Runners para muitos emuladores e engines |
| Wine e Proton | Sim, com um Gerenciador do Wine | Sim, GE-Proton pelo umu por padrão |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Sim, com um editor de tempo de jogo |
| Conta online | Não precisa | Conta opcional no lutris.net |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Lutris vem do [lutris.net](https://lutris.net), do [repositório do Lutris](https://github.com/lutris/lutris) e das [notas de versão](https://github.com/lutris/lutris/releases) dele. O Lutris lista Epic e GOG no site, e a Amazon nas notas de versão. Atualizado até novembro de 2026.

## O que o Heronite e o Lutris têm em comum?

Os dois são launchers gratuitos e de código aberto (GPL-3.0). Os dois rodam jogos do Windows pelo Wine ou pelo Proton, conectam a várias lojas, registram o tempo de jogo e rodam emuladores.

## Qual escolher?

### Escolha o Lutris se…

- **Você depende de scripts de instalação da comunidade.** Os instaladores do Lutris são scripts YAML no lutris.net, e um link `lutris:` roda um pela linha de comando. O Heronite não tem nenhum.
- **Você quer um runner para um sistema antigo ou uma engine.** O site do Lutris cita Wine, MAME, Dolphin, RetroArch e ScummVM, "e muito mais", e as versões recentes acrescentaram DuckStation, Vita3K e Azahar. O Heronite aceita uma lista fixa de [emuladores](/pt-br/features/emulation/), além de uma opção personalizada para qualquer outro.
- **Você gosta de uma interface só para muitos runners,** cada um com suas próprias configurações.
- **Você quer uma conta opcional no lutris.net** para sincronizar sua biblioteca.
- **O Lutris já atende você.** Sua configuração atual funciona bem.

### Escolha o Heronite se…

- **Você joga principalmente por lojas.** Entre na Epic Games, GOG e Amazon Games na página **Lojas** e as bibliotecas inteiras vão para a Coleção, instaladas ou não, com uma fila de downloads. A Steam não pede login, e no Linux os clientes da Battle.net, EA app, Ubisoft Connect e Rockstar Games ganham cada um o seu prefixo Wine ([lojas](/pt-br/features/stores/)).
- **Você quer uma biblioteca só, organizada do seu jeito.** Agrupe jogos de todas as fontes por status, loja, gênero, série ou ano e salve visões como Jogando agora ou Pendentes. <kbd>Ctrl</kbd> <kbd>K</kbd> abre uma paleta de comandos.
- **Você quer Wine ou Proton definido por jogo.** Escolha uma versão e um prefixo, com opções como DXVK, gamescope, limite de FPS e Winetricks. O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) baixa Proton-CachyOS, GE-Proton e outras versões, e acha os runners do Wine que o Lutris já instalou.
- **Você quer um app leve com histórico de jogo.** O Heronite é um processo em Rust sem navegador dentro, que usa cerca de 190 MB de memória em repouso ([desempenho](/pt-br/features/performance/)). Cada sessão é registrada, com [estatísticas](/pt-br/features/play-time-tracking/), diário, meta de backlog e retrospectiva do ano.
- **Você joga na TV ou com controle.** O [modo console](/pt-br/features/console-mode/) é feito para controles e TVs.
- **Você quer o mesmo launcher no Windows.** Ele cuida de Steam, Epic, GOG e Amazon por lá, então quem faz dual boot usa um launcher só nos dois.
- **Você quer backup de saves.** Com a ferramenta opcional Ludusavi, o Heronite faz backup dos saves de um jogo depois de cada sessão. Ele também pode fazer backup da sua biblioteca inteira em horários programados ([saves e backups](/pt-br/features/saves-and-backups/)).

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e um jogo aberto com os detalhes e a linha do tempo de jogo.](../../../assets/screenshots/collection.webp)

*A Coleção: jogos agrupados com o tempo de jogo, e uma linha do tempo de cada sessão.*

## Como migrar do Lutris para o Heronite?

No Linux, o Heronite lê os jogos da biblioteca do Lutris e nunca grava nos arquivos dele, então o Lutris continua funcionando como antes.

1. **Instale o Heronite no Linux.** Os jogos da biblioteca do Lutris entram na Coleção e ficam sincronizados, com a instalação normal do Lutris ou com o Flatpak dele.
2. **Entre na página Lojas.** Isso traz suas bibliotecas da Epic, GOG e Amazon.

Bom saber:

- O Heronite ignora os jogos da Steam que o Lutris lista e usa a própria importação da Steam, então nada aparece duas vezes.
- O Heronite usa os metadados do Lutris para capas e detalhes.
- O Heronite importa os jogos da biblioteca do Lutris, não os scripts de instalação que os configuraram.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Primeiros passos](/pt-br/docs/getting-started/), ou compare [Heronite vs Heroic](/pt-br/compare/heroic/).
