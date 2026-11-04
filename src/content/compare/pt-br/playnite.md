---
title: "Alternativa ao Playnite para Linux: Heronite vs Playnite"
description: "Alternativa ao Playnite para Linux: o Heronite é um launcher grátis e de código aberto para Linux e Windows. Compare e veja quando o Playnite é melhor."
eyebrow: Comparação
headline: "Heronite vs Playnite: uma alternativa ao Playnite para Linux"
lead: "O Playnite ainda não tem versão para Linux; o Heronite é um launcher parecido que já roda no Linux e no Windows."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: qual serve para quem joga no Linux, para quem joga no Windows e para quem quer uma alternativa ao Playnite."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite: capas de jogos agrupadas em Jogando e Em andamento, com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, botão Jogar, detalhes e uma linha do tempo das sessões de jogo."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: Roda no Linux
    text: Nativo no Linux e no Windows. O Playnite roda só no Windows.
  - title: Wine e Proton embutidos
    text: No Linux, escolha uma versão do Wine ou do Proton para cada jogo.
  - title: Leve e nativo
    text: Escrito em Rust, com cerca de 190 MB de memória em repouso.
  - title: Histórico de jogo embutido
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
faq:
  - q: Qual launcher posso usar no lugar do Playnite no Linux?
    a: O Heronite reúne Steam, Epic, GOG, Amazon, emuladores e seus próprios jogos numa biblioteca só. Heroic e Lutris são outras boas opções.
  - q: O Heronite importa a minha biblioteca do Playnite?
    a: "Não, não há importador do Playnite. O Heronite lê a Steam e, depois que você entra, a Epic, GOG e Amazon, então a maior parte da biblioteca volta. [Veja os passos](#como-migrar-do-playnite-para-o-heronite)."
  - q: O Heronite tem extensões e temas como o Playnite?
    a: Não tem sistema de extensões, mas os temas do modo console podem ser mudados e compartilhados como arquivos. O Playnite tem plugins, scripts em PowerShell e temas, uma força de verdade se você quer estender o launcher.
related:
  - /features/stores/
  - /features/emulation/
  - /compare/heroic/
---

**Resumindo:** escolha o Playnite se você joga no Windows e quer a biblioteca madura e o ecossistema de extensões dele. Escolha o Heronite se você joga no Linux, ou no Linux e no Windows e quer o mesmo launcher em cada um.

## Comparação rápida

| | Heronite | Playnite |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Windows 10/11 |
| Licença | GPL-3.0 | MIT |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | C# e WPF |
| Biblioteca da Steam | Sim, sem login | Sim |
| Epic e GOG | Sim | Sim |
| Battle.net, EA app, Ubisoft Connect | Só no Linux, num prefixo Wine | Sim |
| Emulação | Sim | Sim |
| Controle do tempo de jogo | Estatísticas e um diário | Sim |
| Modo console | Sim, com temas | Sim, modo tela cheia |
| Plugins e scripts | Não | Sim |
| Temas | Temas do modo console | Sim |
| Roda jogos do Windows no Linux | Sim, pelo Wine ou pelo Proton | Não se aplica |

A coluna do Playnite vem do [playnite.link](https://playnite.link) e do [repositório do Playnite](https://github.com/JosefNemec/Playnite). Atualizado até novembro de 2026.

## O Playnite vai ter versão para Linux?

Ainda não. O README do Playnite lista o Windows 10 ou 11 como requisito, e ele é feito em WPF, um framework do Windows. O README também diz que o Playnite está sendo reescrito do zero para a versão 11.

Em [uma discussão no GitHub](https://github.com/JosefNemec/Playnite/issues/59), em novembro de 2025, o desenvolvedor escreveu que planejava migrar para o Linux em 2026, depois que o Playnite 11 ficasse pronto. Ele tentaria fazer uma versão para Linux, menos completa que a de Windows, mas usável no dia a dia, com integração ao Wine e ao Proton. Não encontramos nenhuma versão para Linux lançada até novembro de 2026.

## O que o Heronite e o Playnite têm em comum?

Os dois são gratuitos e de código aberto. Os dois reúnem jogos de várias lojas numa biblioteca só, registram o tempo de jogo, aceitam emuladores e têm um modo de tela cheia pensado para controle.

## Qual escolher?

### Escolha o Playnite se…

- **Você joga só no Windows e está satisfeito.** Nada no Heronite é motivo para abrir mão de uma configuração de que você gosta.
- **Você depende de plugins, scripts ou de um tema da comunidade.** O Playnite é extensível por plugins, scripts e temas, com bem mais espaço que o Heronite.
- **Você quer jogos da Battle.net, Ubisoft Connect ou EA app importados direto no Windows.** O site do Playnite lista Battle.net e Ubisoft Connect entre as bibliotecas dele, e o repositório menciona a EA app. No Windows, o Heronite cuida de Steam, Epic, GOG e Amazon.
- **Você tem uma biblioteca ou uma configuração de emuladores já ajustada.** O site do Playnite descreve uma variedade de emuladores de console, então compare antes de migrar a sua.
- **Você quer um longo histórico.** O desenvolvedor do Playnite já discutia o Linux em 2017. O Heronite é mais novo.

### Escolha o Heronite se…

- **Você usa Linux, ou faz dual boot.** O Heronite é um app nativo para os dois sistemas, com a mesma biblioteca e as mesmas visões em cada um. No Windows ele roda os jogos direto.
- **Você quer que jogos do Windows rodem pelo Wine ou pelo Proton no app que os lista.** Defina versão e prefixo por jogo. O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) baixa versões como Proton-CachyOS e GE-Proton.
- **Você quer um app leve.** O Heronite é um processo em Rust sem motor de navegador dentro, que usa cerca de 190 MB de memória em repouso. Veja [desempenho](/pt-br/features/performance/).
- **Você quer um histórico de jogo.** O Heronite registra cada sessão: [estatísticas](/pt-br/features/play-time-tracking/) por semana, mês e ano, uma meta anual de backlog, um diário ao lado das capturas de tela e uma retrospectiva do ano.
- **Você quer um modo console com temas.** O [modo console](/pt-br/features/console-mode/) é um layout para controle, para o sofá ou a TV, com oito layouts e sete temas. Exporte um tema como arquivo para compartilhar.
- **Você joga jogos emulados.** O Heronite [detecta os emuladores](/pt-br/features/emulation/) que você instalou, incluindo o RetroArch com seus cores, Dolphin, PCSX2 e DuckStation, e escaneia suas pastas de ROMs no Linux e no Windows. Cada ROM vira um jogo com capa e tempo de jogo próprios, e você pode continuar de um save state ou conectar uma conta do RetroAchievements.
- **Você quer mais lojas no Linux.** O Heronite instala os clientes da Battle.net, EA app, Ubisoft Connect e Rockstar Games em prefixos Wine próprios, e os jogos aparecem na mesma Coleção.
- **Você quer importar jogos do Heroic, Lutris, Bottles ou Faugus** no Linux.

![A tela inicial do modo console do Heronite, com um jogo em destaque grande e uma prateleira Continuar jogando com capas.](../../../assets/screenshots/console-home.webp)

*Início do modo console: um jogo em destaque e uma prateleira para continuar jogando.*

## Como migrar do Playnite para o Heronite?

O Heronite não tem importador do Playnite, então não há migração com um clique. Refaça sua biblioteca em três passos:

1. **Entre na Epic Games, GOG e Amazon Games** na página **Lojas**. As bibliotecas inteiras vão para a Coleção. A Steam não pede login.
2. **Adicione de novo os jogos que você havia adicionado à mão.** Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa, ou aponte uma pasta para adicionar de uma vez todos os jogos que o Heronite achar nela.
3. **Detecte seus emuladores e escaneie suas pastas de ROMs.** Na página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>), aperte detectar e depois escanear, e seus [jogos emulados](/pt-br/features/emulation/) voltam.

No Windows, o Heronite pega os jogos instalados pela Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games sem baixar de novo. Para jogos da Epic que você nunca jogou no Heronite, ele pode trazer o tempo de jogo que a Epic registrou.

Tags, status de conclusão, anotações e o tempo de jogo do Playnite ficam no Playnite, que continua funcionando como antes. O Heronite nunca mexe nos arquivos dele.

> **Nota.** Você pode usar os dois lado a lado no Windows enquanto decide.

**Próximo:** [baixe o Heronite](/pt-br/download/) para Linux ou Windows e leia [Primeiros passos](/pt-br/docs/getting-started/).
