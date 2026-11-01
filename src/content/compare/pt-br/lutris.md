---
title: "Heronite vs Lutris: alternativa ao Lutris para Linux"
description: "Heronite e Lutris reúnem muitos jogos numa biblioteca no Linux. Compare scripts de instalação, lojas e emuladores, e veja como importar seus jogos do Lutris."
eyebrow: Comparação
headline: "Heronite vs Lutris: uma alternativa ao Lutris *que também roda no Windows*"
lead: "O Lutris é o gerenciador de jogos de código aberto de longa data para Linux, com scripts de instalação e uma longa lista de runners. O Heronite é um launcher mais novo e mais leve para Linux e Windows. Veja como eles diferem."
navLabel: Heronite vs Lutris
summary: "Como Heronite e Lutris se comparam em scripts de instalação, runners, lojas, emulação e histórico de jogo, e como importar seus jogos do Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite listando Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek, com uma tabela de versões do Proton-CachyOS, datas de lançamento, tamanhos e botões Instalar."
og: /og/lutris.jpg
updated: 2026-11-01
highlights:
  - title: Lojas, não scripts
    text: Entre na Epic, GOG e Amazon e o Heronite instala pela loja. Ele lê a Steam sem login.
  - title: Importa seus jogos do Lutris
    text: No Linux, o Heronite importa os jogos da biblioteca do Lutris e só lê os arquivos dele.
  - title: Linux e Windows
    text: O mesmo launcher nativo nos dois sistemas. O Lutris roda só no Linux.
  - title: Seu histórico de jogo
    text: Cada sessão é registrada, com estatísticas, diário, meta de backlog e retrospectiva do ano.
faq:
  - q: O Heronite importa meus jogos do Lutris?
    a: Sim, no Linux. O Heronite lê os jogos da biblioteca do Lutris e os mantém sincronizados. Funciona com a instalação normal do Lutris e com o Flatpak dele, e nunca grava nos arquivos do Lutris. O Lutris continua funcionando como antes.
  - q: Qual é uma boa alternativa ao Lutris?
    a: O Heronite é uma, se você joga principalmente jogos de lojas, emuladores e das suas próprias pastas. O Lutris continua sendo a melhor escolha se você depende dos scripts de instalação da comunidade. O Heroic é outra opção, e comparamos ele em uma página própria.
  - q: O Heronite tem scripts de instalação como o Lutris?
    a: Não. O Lutris tem instaladores, escritos como scripts, que buscam e configuram um jogo para você. O Heronite instala jogos das lojas em que você entra, e, para outros jogos, você adiciona o programa ou a pasta por conta própria.
  - q: "Heroic vs Lutris: qual devo usar?"
    a: O Heroic é focado em Epic, GOG e Amazon, e o Lutris cobre mais sistemas, runners e scripts de instalação. O Heronite fica entre os dois, com a Steam, as três lojas do Heroic e emuladores numa biblioteca só. Veja a comparação com o Heroic para saber mais.
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

O Lutris é um dos gerenciadores de jogos mais antigos e mais capazes do Linux. O Heronite faz parte do mesmo trabalho de outro jeito. O Lutris se apoia em scripts de instalação da comunidade e em muitos runners. O Heronite se apoia em lojas, numa só Coleção e num app mais leve.

**Resumindo:** escolha o Lutris se você quer scripts de instalação ou um runner para um sistema antigo ou uma engine. Escolha o Heronite se você joga principalmente por lojas, quer Steam, Epic, GOG e Amazon numa biblioteca só, ou quer o mesmo launcher também no Windows. Esta página está atualizada até novembro de 2026.

## Comparação rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux |
| Licença | GPL-3.0 | GPL-3.0 |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Python |
| Como os jogos são configurados | Instalados pela loja, ou adicionados à mão | Scripts de instalação da comunidade, além de configuração manual |
| Biblioteca da Steam | Sim, sem login | Sim |
| Epic, GOG, Amazon | Sim, com legendary, gogdl e nile | Epic e GOG constam no site dele, e a Amazon nas notas de versão |
| Battle.net, EA app | Sim, o app de cada loja roda num prefixo Wine | Sim |
| Emulação | Emuladores detectados, pastas de ROMs escaneadas, save states | Runners para muitos emuladores e engines |
| Wine e Proton | Sim, com um Gerenciador do Wine | Sim, o Proton-GE pelo umu é o padrão |
| Tempo de jogo | Sim, com estatísticas, diário e retrospectiva do ano | Sim, com um editor de tempo de jogo |
| Conta online | Não precisa | Conta opcional no lutris.net |
| Importar do outro launcher | Sim | Não se aplica |

A coluna do Lutris vem do [lutris.net](https://lutris.net), do [repositório do Lutris](https://github.com/lutris/lutris) e das [notas de versão](https://github.com/lutris/lutris/releases) dele.

## O que eles têm em comum

Os dois são gratuitos e de código aberto sob a GPL-3.0. Os dois rodam jogos de Windows pelo Wine ou pelo Proton. Os dois conversam com várias lojas, registram o tempo de jogo e rodam emuladores, então quem joga no Linux pode usar qualquer um como porta de entrada para a biblioteca inteira.

## Scripts de instalação e runners: a grande força do Lutris

É aqui que o Lutris é difícil de superar. Um instalador do Lutris é um script, escrito em YAML, que busca os arquivos de um jogo, configura o jogo e salva uma configuração base. Os scripts são publicados no lutris.net, e você pode rodar um pela linha de comando com um link `lutris:`. Para um jogo antigo ou de fora das lojas, um bom script pode poupar uma tarde inteira.

O Lutris também se descreve como um jeito de combinar emuladores, reimplementações de engines e camadas de compatibilidade. O site dele cita Wine, MAME, Dolphin, RetroArch e ScummVM, "e muito mais", e as versões recentes acrescentaram runners como DuckStation, Vita3K e Azahar.

O Heronite não tem scripts de instalação. Ele aceita uma lista fixa de [emuladores](/pt-br/features/emulation/) (RetroArch com vários cores, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3, shadPS4, Cemu, mGBA, MAME, ScummVM e mais, além de uma opção personalizada para qualquer outro), e os jogos de Windows rodam pelo Wine ou pelo Proton. Se você quer ampla cobertura de sistemas e engines incomuns, o Lutris oferece mais.

## Onde o Heronite é diferente

### As lojas primeiro

O Heronite parte das lojas. Ele lê suas bibliotecas da Steam sem login. Entre na Epic Games, GOG e Amazon Games na página **Lojas** e as bibliotecas inteiras vão para a Coleção, instaladas ou não, com uma fila de downloads só para instalações, atualizações e reparos. No Linux, Battle.net, EA app, Ubisoft Connect e Rockstar Games rodam cada uma no seu próprio prefixo Wine, e os jogos delas aparecem na mesma lista. Veja [Lojas e launchers](/pt-br/features/stores/).

### Uma Coleção, organizada do seu jeito

Os jogos de todas as fontes ficam numa só Coleção que você agrupa por status, loja, gênero, série ou ano e salva como visões, como Jogando agora ou Pendentes. A busca perdoa erros de digitação, e `Ctrl+K` abre uma paleta de comandos. Você pode editar muitos jogos de uma vez.

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e um jogo aberto com os detalhes e a linha do tempo de jogo.](../../../assets/screenshots/collection.webp)

*A Coleção: jogos agrupados com o tempo de jogo, e uma linha do tempo de cada sessão.*

### Wine e Proton, gerenciados por jogo

O Heronite define o Wine ou o Proton em cada jogo, com a versão e o prefixo que você escolhe. As opções incluem DXVK, gamescope, limite de FPS e Winetricks. O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) baixa Proton-CachyOS, GE-Proton e outras versões, e também encontra os runners do Wine que o Lutris já instalou.

### Um app nativo e leve, com histórico de jogo

O Heronite é um processo único em Rust, sem navegador dentro. Ele usa cerca de 190 MB de memória em repouso (cerca de 95 MB quando fechado na bandeja), em torno de 0,1% de CPU, e mostra a biblioteca em cerca de 215 ms. Cada sessão é registrada, então você tem [estatísticas](/pt-br/features/play-time-tracking/), diário, meta de backlog e retrospectiva do ano. Há também um [modo console](/pt-br/features/console-mode/) para controles e TVs.

### Windows também

O Lutris roda só no Linux. O Heronite também roda no Windows, com Steam, Epic, GOG e Amazon, então quem faz dual boot pode usar um launcher só nos dois.

### Saves e backups

O Heronite pode fazer backup dos saves de um jogo depois de cada sessão, quando a ferramenta opcional Ludusavi está instalada, e você restaura pela página do jogo. Ele também pode fazer backup da sua Coleção inteira em horários programados: seus jogos, sessões, status, diário e configurações por jogo, e, se quiser, suas configurações, arte e logins das lojas. Leia mais em [Saves e backups](/pt-br/features/saves-and-backups/).

## Heronite, Heroic e Lutris

As pessoas costumam perguntar sobre Heroic vs Lutris. O README do Heroic lista Epic, GOG e Amazon como as lojas dele. O Lutris cobre mais, com scripts de instalação e muitos runners. O Heronite usa as mesmas ferramentas de loja do Heroic e acrescenta Steam e emuladores numa biblioteca só, e pode importar jogos dos dois. Veja [Heronite vs Heroic](/pt-br/compare/heroic/) para essa comparação.

## Quando escolher o Lutris

- Você depende de scripts de instalação da comunidade para configurar jogos.
- Você quer um runner para um sistema antigo ou uma engine que o Heronite não suporta.
- Você gosta de uma interface para muitos runners diferentes, cada um com suas próprias configurações.
- Você quer uma conta opcional no lutris.net para sincronizar sua biblioteca.
- Sua configuração do Lutris já funciona bem para você.

## Quando escolher o Heronite

- Você joga principalmente pela Steam, Epic, GOG, Amazon ou outros clientes de loja.
- Você quer jogos de lojas, emuladores e das suas próprias pastas numa só Coleção.
- Você quer um app leve, sem navegador embutido.
- Você quer estatísticas de jogo, diário e meta de backlog.
- Você quer o mesmo launcher no Linux e no Windows.

## Como migrar do Lutris

Você pode testar o Heronite sem perder nada. No Linux, o Heronite lê os jogos da biblioteca do Lutris e os traz para a Coleção. Funciona com a instalação normal do Lutris e com o Flatpak dele, e os mantém sincronizados. O Heronite só lê os arquivos do Lutris. Ele nunca grava neles, então o Lutris continua funcionando como antes.

Algumas coisas para saber:

- Os jogos da Steam que o Lutris lista ficam a cargo da própria importação da Steam do Heronite, então nada aparece duas vezes.
- O Heronite usa os metadados do Lutris para capas e detalhes, e encontra os runners do Wine que o Lutris instalou.
- Os scripts de instalação não vêm junto. O Heronite importa os jogos da biblioteca do Lutris, não os scripts que os instalaram. Para trazer suas bibliotecas da Epic, GOG e Amazon, entre na conta na página Lojas.

> **Nota.** A importação do Lutris no Heronite existe só na versão para Linux.

## Experimente

O Heronite é gratuito, sem conta, sem anúncios e sem telemetria. [Baixe](/pt-br/download/) e leia [Primeiros passos](/pt-br/docs/getting-started/) e como o [Wine e o Proton](/pt-br/docs/wine-and-proton/) funcionam no Heronite.
