---
title: "Launcher de jogos leve, sem Electron | Heronite"
description: "Launcher de jogos leve para Linux e Windows. Abre a biblioteca em cerca de 215 ms, usa cerca de 190 MB em repouso e ocupa 64 MB, sem Electron."
eyebrow: Desempenho
headline: "Um launcher de jogos leve, sem Electron"
lead: "O Heronite é um launcher de jogos leve: um único processo nativo em Rust, desenhado na GPU e sem navegador embutido."
navLabel: Desempenho
summary: "Rust nativo, renderizado na GPU e sem Electron: cerca de 215 ms até a biblioteca, 190 MB em repouso e 64 MB de instalação."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "A paleta de comandos do Heronite aberta sobre a Coleção, buscando \"contr\" e listando Control e outros jogos parecidos, com ações para jogar Control, abrir as configurações ou a pasta dele."
og: /og/performance.jpg
updated: 2026-11-04
highlights:
  - title: Cerca de 215 ms
    text: Tempo mediano da abertura até a biblioteca na tela.
  - title: Cerca de 190 MB em repouso
    text: Um processo, e cerca de 95 MB quando fechado na bandeja.
  - title: Cerca de 0,1% de CPU
    text: Em repouso, medido como 0,05 s de CPU em 60 s.
  - title: 64 MB de instalação
    text: O app e o auxiliar de login das lojas, sem motor de navegador.
faq:
  - q: Qual é o launcher de jogos mais leve para Linux e Windows?
    a: O Heronite foi feito para ser leve. É um único processo nativo, sem navegador embutido, e a instalação tem 64 MB.
  - q: O Heronite usa Electron?
    a: Não. O Heronite é escrito em Rust e desenhado na GPU com o GPUI, sem motor de navegador embutido. Veja [o que "sem Electron" significa](#o-que-sem-electron-significa-para-mim).
  - q: Qual é a velocidade de abertura do Heronite?
    a: Cerca de 215 ms da abertura até a biblioteca na tela (mediana).
  - q: Quanta memória o Heronite usa?
    a: Cerca de 190 MB em repouso, em um único processo, e cerca de 95 MB quando fechado na bandeja. O uso de CPU em repouso é de cerca de 0,1%.
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

## Quão rápido e leve é o Heronite?

| Medida | Heronite |
|---|---|
| Da abertura até a biblioteca na tela | cerca de 215 ms (mediana) |
| Memória em repouso | cerca de 190 MB em um único processo |
| Memória fechado na bandeja | cerca de 95 MB |
| CPU em repouso | cerca de 0,1% (0,05 s de tempo de CPU em 60 s) |
| Tamanho da instalação | 64 MB (app e auxiliar de login das lojas) |

## O que "sem Electron" significa para mim?

Apps em Electron trazem um motor de navegador completo. O Heronite não. Um programa nativo lê a sua biblioteca e a desenha na GPU com o GPUI, um framework de interface para Rust.

A janela de login das lojas é o único lugar que mostra uma página web. É uma janelinha separada que usa o web view que já existe no seu sistema (WebKitGTK no Linux, WebView2 no Windows). Ela só abre quando você entra na Epic Games, na GOG ou na Amazon.

![A Coleção do Heronite no modo Foco: capas de jogos agrupadas em Jogando e Em andamento com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, detalhes e uma linha do tempo das sessões de jogo.](../../../assets/screenshots/collection.webp)

*Uma Coleção cheia, com capturas de tela, detalhes e uma linha do tempo de jogo, desenhada na GPU.*

## O que cabe em 64 MB de instalação?

Duas partes: o app e o auxiliar de login das lojas. O auxiliar é um programinha à parte que roda só para a janela de login, então o app principal continua sendo um processo só. Ferramentas das lojas como legendary, gogdl e nile só rodam quando são necessárias, por exemplo enquanto um jogo é instalado ou atualizado.

## O modo console também é leve?

Sim. O modo console não carrega nada até você ligá-lo. Você pode configurá-lo para abrir na inicialização ou quando um controle for conectado. Veja [modo console](/pt-br/features/console-mode/).

## Dá para levar o Heronite em um pendrive?

No Windows, dá. A cópia portátil é uma pasta com o programa, a sua Coleção, configurações, caches e capturas de tela. Extraia onde quiser ou mova para um pendrive. Ela não escreve no registro. Veja [a cópia portátil](/pt-br/docs/files-and-folders/#a-cópia-portátil-windows).

## Dá para desligar o trabalho em segundo plano?

Sim. Defina estas [variáveis de ambiente](/pt-br/docs/environment-variables/):

| Variável | O que faz |
|---|---|
| `HERONITE_NO_TRAY` | Sem ícone na bandeja |
| `HERONITE_NO_ANIMATIONS` | Sem animações |
| `HERONITE_DISABLE_IDLE_JOBS` | Sem trabalho em segundo plano em repouso |
| `HERONITE_NO_UPDATE_CHECK` | Sem verificação automática de atualizações |

## O que o Heronite precisa para rodar?

O Heronite roda em Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). No Linux ele desenha com Vulkan, então você precisa de um driver Vulkan funcionando: Mesa para AMD e Intel, ou o driver proprietário para NVIDIA.

Se a janela não abrir ou ficar preta, rode `vulkaninfo` e confira se ele lista a sua GPU. Veja [Solução de problemas](/pt-br/docs/troubleshooting/) e [Instalação](/pt-br/docs/installation/).

O Heronite é grátis e de código aberto sob a licença GPL-3.0, sem contas, anúncios ou telemetria. [Baixe o Heronite](/pt-br/download/) para testar.
