---
title: "Launcher de jogos leve, sem Electron | Heronite"
description: "Um launcher de jogos rápido e leve para Linux e Windows. Rust nativo, GPU, sem navegador embutido. Biblioteca em cerca de 215 ms e 190 MB de memória em repouso."
eyebrow: Desempenho
headline: "Um launcher que *não atrapalha*"
lead: "O Heronite é um app nativo em Rust desenhado na GPU, em um único processo e sem navegador embutido. Ele abre em cerca de um quinto de segundo e fica quieto enquanto você joga."
navLabel: Desempenho
summary: "Rust nativo, renderizado na GPU e sem Electron: cerca de 215 ms até a biblioteca, 190 MB em repouso e 64 MB de instalação."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "A paleta de comandos do Heronite aberta sobre a Coleção, buscando \"contr\" e listando Control e outros jogos parecidos, com ações para jogar Control, abrir as configurações ou a pasta dele."
og: /og/performance.jpg
updated: 2026-11-01
highlights:
  - title: Cerca de 215 ms
    text: Tempo mediano da abertura até a sua biblioteca aparecer na tela.
  - title: Cerca de 190 MB em repouso
    text: Em um único processo, e cerca de 95 MB quando fechado na bandeja.
  - title: Cerca de 0,1% de CPU
    text: Em repouso, medido como 0,05 s de tempo de CPU em 60 s.
  - title: 64 MB de instalação
    text: O app e o auxiliar de login das lojas, sem motor de navegador embutido.
faq:
  - q: Qual é o launcher de jogos mais leve para Linux e Windows?
    a: O Heronite foi feito para ser leve. É um único processo nativo que usa cerca de 190 MB de memória em repouso, cerca de 95 MB quando fechado na bandeja e cerca de 0,1% da CPU. A instalação tem 64 MB.
  - q: O Heronite usa Electron?
    a: Não. O Heronite é escrito em Rust e desenhado na GPU com o GPUI. Não há motor de navegador embutido nem página web por trás da interface.
  - q: Qual é a velocidade de abertura do Heronite?
    a: O tempo mediano da abertura até a biblioteca aparecer na tela é de cerca de 215 ms.
  - q: Quanta memória o Heronite usa?
    a: Cerca de 190 MB em repouso, em um único processo. Quando você fecha a janela para a bandeja, cai para cerca de 95 MB. O modo console não carrega nada até você ligá-lo.
  - q: O que preciso para rodar?
    a: Linux (qualquer distribuição, x86_64) ou Windows 10 e 11 (x86_64). No Linux, o Heronite desenha com Vulkan, então você precisa de um driver Vulkan funcionando. Veja [instalação](/docs/installation/).
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

Um launcher de jogos deveria ser a coisa mais leve que você roda, porque ele fica aberto ao lado do jogo. Muitos launchers são páginas web dentro de um navegador embutido, e pagam por isso em memória e tempo de abertura. O Heronite segue o outro caminho. É um app nativo em Rust, desenhado direto na GPU, sem navegador dentro.

## Quão rápido e leve é o Heronite?

Estes são os números que medimos e publicamos, sem nada para comparar além do próprio Heronite:

| Medida | Heronite |
|---|---|
| Da abertura até a biblioteca na tela | cerca de 215 ms (mediana) |
| Memória em repouso | cerca de 190 MB em um único processo |
| Memória fechado na bandeja | cerca de 95 MB |
| CPU em repouso | cerca de 0,1% (0,05 s de tempo de CPU em 60 s) |
| Tamanho da instalação | 64 MB (app e auxiliar de login das lojas) |

Os números em repouso são os que mais importam. Um launcher passa a maior parte da vida aberto sem fazer nada, e o Heronite quase não faz nada nesse tempo.

## Por que ele abre tão rápido?

O Heronite não carrega um motor web nem roda uma página web antes de mostrar alguma coisa. É um programa nativo só, que lê a sua Coleção e a desenha. A sua biblioteca aparece na tela em cerca de 215 ms, e no uso do dia a dia parece que o app já estava aberto.

## O que "sem Electron" significa para mim?

Apps em Electron trazem um motor de navegador completo junto com cada app. O Heronite não. Ele é escrito em Rust e a interface é desenhada na GPU com o GPUI, um framework de interface para Rust. Isso tem três efeitos que você sente:

- **Menos memória.** Um processo, cerca de 190 MB em repouso e cerca de 95 MB quando fechado na bandeja.
- **Menos CPU.** Cerca de 0,1% em repouso, o que dá 0,05 s de tempo de CPU em 60 s.
- **Uma instalação pequena.** 64 MB para o app e o auxiliar que mostra a página de login das lojas.

A janela de login das lojas é o único lugar que mostra uma página web. É uma janelinha separada que usa o web view que já existe no seu sistema (WebKitGTK no Linux, WebView2 no Windows), e só abre quando você entra na Epic Games, na GOG ou na Amazon.

![A Coleção do Heronite no modo Foco: capas de jogos agrupadas em Jogando e Em andamento com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, detalhes e uma linha do tempo das sessões de jogo.](../../../assets/screenshots/collection.webp)

*Uma Coleção cheia, com capturas de tela, detalhes e uma linha do tempo de jogo, desenhada na GPU.*

## O que cabe em 64 MB?

Mais do que um launcher costuma oferecer. A mesma instalação traz:

- uma [Coleção](/pt-br/features/game-library/) com visões, grupos, edição em lote e uma paleta de comandos,
- [lojas](/pt-br/features/stores/): Steam, Epic, GOG e Amazon, com os clientes da Battle.net, EA app, Ubisoft Connect e Rockstar no Linux,
- [emulação](/pt-br/features/emulation/) com escaneamento de ROMs,
- um Gerenciador do Wine e opções de [Wine e Proton](/pt-br/features/wine-and-proton/) por jogo no Linux,
- [rastreamento de tempo de jogo](/pt-br/features/play-time-tracking/) com estatísticas e uma retrospectiva do ano,
- [saves e backups](/pt-br/features/saves-and-backups/),
- [modo console](/pt-br/features/console-mode/) com temas.

## Como o trabalho se divide entre o Heronite e o auxiliar?

A instalação de 64 MB tem duas partes: o app e o auxiliar de login das lojas. O auxiliar é um programinha à parte. Ele só roda para a janela de login, então o app principal continua sendo um processo só. Ferramentas das lojas como legendary, gogdl e nile só rodam quando são necessárias, por exemplo enquanto um jogo é instalado ou atualizado.

## Dá para levar em um pendrive?

No Windows, dá. A cópia portátil é uma pasta que guarda tudo: o programa, a sua Coleção, configurações, caches e capturas de tela. Extraia onde quiser, ou mova para um pendrive, e ela continua funcionando. Ela não escreve no registro. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Dá para desligar o trabalho em segundo plano?

Dá. Algumas chaves nas [variáveis de ambiente](/pt-br/docs/environment-variables/) cortam os extras quando você quer um launcher ainda mais quieto:

| Variável | O que faz |
|---|---|
| `HERONITE_NO_TRAY` | Sem ícone na bandeja |
| `HERONITE_NO_ANIMATIONS` | Sem animações |
| `HERONITE_DISABLE_IDLE_JOBS` | Sem trabalho em segundo plano em repouso |
| `HERONITE_NO_UPDATE_CHECK` | Sem verificação automática de atualizações |

Você nunca precisa de nenhuma delas. Elas existem para quem gosta de enxugar.

## O modo console também é leve?

É. O modo console, o layout feito para controle e para TV, não carrega nada até você ligá-lo. Ele pode abrir na inicialização ou quando um controle for conectado, então você só paga por ele quando o usa. Veja [modo console](/pt-br/features/console-mode/).

## O que preciso para rodar?

O Heronite roda em Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). No Linux ele desenha com Vulkan, então você precisa de um driver Vulkan funcionando: Mesa para AMD e Intel, ou o driver proprietário para NVIDIA. Se a janela não abrir ou ficar preta, confira se o `vulkaninfo` lista a sua GPU. Mais em [Solução de problemas](/pt-br/docs/troubleshooting/).

> **Nota.** O Heronite não assume o trabalho dos seus jogos. A Steam continua iniciando os jogos dela, os emuladores rodam nos próprios programas e os jogos do Windows rodam com [Wine ou Proton](/pt-br/features/wine-and-proton/). O Heronite é a parte que fica pequena.

## Por que um launcher leve importa?

Você abre um launcher muitas vezes por semana, e muitas vezes logo antes de um jogo que precisa de cada pedacinho do seu PC. Um launcher que abre na hora e fica com quase zero de CPU em repouso é um que você deixa de notar. Esse é o objetivo: você escolhe um jogo, aperta jogar, e o launcher sai da frente.

## Grátis, de código aberto e pronto para testar

O Heronite é grátis, sem contas, anúncios ou telemetria, e de código aberto sob a licença GPL-3.0. Se você usa outro launcher hoje, [Heronite vs Playnite](/pt-br/compare/playnite/), [vs Heroic](/pt-br/compare/heroic/) e [vs Lutris](/pt-br/compare/lutris/) explicam as diferenças.

[Baixe o Heronite](/pt-br/download/) e veja como é. A página de documentação [Instalação](/pt-br/docs/installation/) cobre todos os pacotes, e [Primeiros passos](/pt-br/docs/getting-started/) leva você pela primeira execução.
