---
title: "Launcher de jogos leve, sem Electron | Heronite"
description: "Launcher de jogos leve para Linux e Windows. Abre a biblioteca em cerca de 215 ms, usa cerca de 190 MB de RAM parado e ocupa 64 MB, sem Electron."
eyebrow: Desempenho
headline: "Um launcher de jogos leve, sem Electron"
lead: "O Heronite é um launcher de jogos leve: um único processo nativo em Rust, desenhado na GPU e sem navegador embutido."
navLabel: Desempenho
summary: "Rust nativo, renderizado na GPU e sem Electron: cerca de 215 ms até a biblioteca, 190 MB de RAM parado e 64 MB de instalação."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "A paleta de comandos do Heronite aberta sobre a Coleção, buscando \"contr\" e listando Control e outros jogos parecidos, com ações para jogar Control, abrir as configurações ou a pasta dele."
og: /og/performance.jpg
updated: 2026-11-04
highlights:
  - title: Cerca de 215 ms
    text: Tempo mediano da abertura até a biblioteca na tela.
  - title: Cerca de 0,1% de CPU
    text: Parado, medido como 0,05 s de CPU em 60 s.
  - title: Portátil no Windows
    text: Uma pasta que cabe num pendrive, sem escrever no registro.
  - title: Sem trabalho em segundo plano
    text: Variáveis de ambiente desligam a bandeja, as animações e a busca por atualizações.
faq:
  - q: Qual é o launcher de jogos mais leve para Linux e Windows?
    a: O Heronite foi feito para ser leve. Parado, ele usa cerca de 190 MB de RAM em um processo, e a instalação tem 64 MB.
  - q: O Heronite roda no Steam Deck?
    a: Sim. O Heronite roda no SteamOS como AppImage. O [guia do Steam Deck](/guides/steam-deck/) mostra a configuração.
  - q: O Heronite coleta telemetria?
    a: Não. O Heronite não tem contas, anúncios nem telemetria. Ele é grátis e de código aberto, sob a licença GPL-3.0.
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

## Quão rápido e leve é o Heronite?

| Medida | Heronite |
|---|---|
| Da abertura até a biblioteca na tela | cerca de 215 ms (mediana) |
| RAM parado | cerca de 190 MB em um único processo |
| RAM fechado na bandeja | cerca de 95 MB |
| CPU parado | cerca de 0,1% (0,05 s de tempo de CPU em 60 s) |
| Tamanho da instalação | 64 MB |

## O que "sem Electron" significa para mim?

Apps em Electron trazem um motor de navegador completo. O Heronite não. Um programa nativo lê a sua biblioteca e a desenha na GPU com o GPUI, um framework de interface para Rust.

A janela de login das lojas é o único lugar que mostra uma página web. É uma janela separada que usa o web view que já existe no seu sistema (WebKitGTK no Linux, WebView2 no Windows). Ela só abre quando você faz login na Epic Games, na GOG ou na Amazon.

![A Coleção do Heronite no modo Foco: capas de jogos agrupadas em Jogando e Em andamento com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, detalhes e uma linha do tempo das sessões de jogo.](../../../assets/screenshots/collection.webp)

*Uma Coleção cheia, com capturas de tela, detalhes e uma linha do tempo de jogo, desenhada na GPU.*

## O que cabe em 64 MB de instalação?

Duas partes: o app e o auxiliar de login das lojas. O auxiliar é um programinha à parte que roda só para a janela de login, então o app principal continua sendo um processo só. Ferramentas das lojas como legendary, gogdl e nile só rodam quando precisam, por exemplo enquanto um jogo é instalado ou atualizado.

## O modo console também é leve?

Sim. O modo console não carrega nada até você ligá-lo. Em **Configurações → Modo console**, você pode fazer ele abrir na inicialização ou quando um controle for conectado. Veja [modo console](/pt-br/features/console-mode/).

## Dá para levar o Heronite em um pendrive?

No Windows, dá. A cópia portátil é uma pasta com o programa, a sua Coleção, configurações, caches e capturas de tela. Extraia onde quiser ou mova para um pendrive. Ela não escreve no registro. Veja [a cópia portátil](/pt-br/docs/files-and-folders/#a-cópia-portátil-windows).

## Dá para desligar o trabalho em segundo plano?

Sim. Defina estas [variáveis de ambiente](/pt-br/docs/environment-variables/):

| Variável | O que faz |
|---|---|
| `HERONITE_NO_TRAY` | Sem ícone na bandeja |
| `HERONITE_NO_ANIMATIONS` | Sem animações |
| `HERONITE_DISABLE_IDLE_JOBS` | Sem trabalho em segundo plano quando parado |
| `HERONITE_NO_UPDATE_CHECK` | Sem verificação automática de atualizações |

## O que o Heronite precisa para rodar?

O Heronite roda em Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). No Linux ele usa Vulkan para mostrar a tela, então você precisa de um driver Vulkan funcionando: Mesa para AMD e Intel, ou o driver proprietário para NVIDIA.

Se a janela não abrir ou ficar preta, rode `vulkaninfo` e confira se ele lista a sua GPU. Veja [Solução de problemas](/pt-br/docs/troubleshooting/) e [Instalação](/pt-br/docs/installation/).

Próximo: [baixe o Heronite](/pt-br/download/).
