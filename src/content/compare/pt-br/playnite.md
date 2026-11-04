---
title: "Alternativa ao Playnite para Linux: Heronite vs Playnite"
description: "Alternativa ao Playnite para Linux: o Heronite é um launcher grátis e de código aberto para Linux e Windows. Compare e veja quando o Playnite é melhor."
eyebrow: Comparação
headline: "Heronite vs Playnite"
lead: "O Heronite é uma alternativa ao Playnite que roda no Linux e no Windows."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: qual serve para quem joga no Linux, para quem joga no Windows e para quem quer uma alternativa ao Playnite."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite: capas de jogos agrupadas em Jogando e Em andamento, com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, botão Jogar, detalhes e uma linha do tempo das sessões de jogo."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: Importa do Playnite
    text: No Windows, seus jogos instalados do Playnite entram com o tempo de jogo.
  - title: Wine e Proton embutidos
    text: No Linux, escolha uma versão do Wine ou do Proton para cada jogo.
  - title: Leve e nativo
    text: Escrito em Rust, sem motor de navegador dentro.
  - title: Histórico de jogo embutido
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
faq:
  - q: Qual launcher posso usar no lugar do Playnite no Linux?
    a: O Heronite, que reúne suas lojas, emuladores e seus próprios jogos numa biblioteca só. O Heroic e o Lutris também rodam no Linux.
  - q: O Heronite tem extensões e temas como o Playnite?
    a: Não tem sistema de extensões. Você pode editar os temas do modo console e compartilhar como arquivos.
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
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
| Battle.net, EA app, Ubisoft Connect | Sim, num prefixo Wine no Linux | Sim |
| Emulação | Sim | Sim |
| Controle do tempo de jogo | Estatísticas e um diário | Sim |
| Modo console | Sim, com temas | Sim, modo tela cheia |
| Plugins e scripts | Não | Sim |
| Temas | Temas do modo console | Sim |
| Roda jogos do Windows no Linux | Sim, pelo Wine ou pelo Proton | Não se aplica |
| Importar do outro launcher | Sim, no Windows | Não se aplica |

A coluna do Playnite vem do [playnite.link](https://playnite.link) e do [repositório do Playnite](https://github.com/JosefNemec/Playnite). Atualizado até novembro de 2026.

## O Playnite vai ter versão para Linux?

Ainda não. O README do Playnite lista o Windows 10 ou 11 como requisito, e ele é feito em WPF, um framework do Windows. O README também diz que o Playnite está sendo reescrito do zero para a versão 11.

O desenvolvedor do Playnite já discutia o Linux em 2017. Em [uma discussão no GitHub](https://github.com/JosefNemec/Playnite/issues/59), em novembro de 2025, ele escreveu que planejava migrar para o Linux em 2026, depois que o Playnite 11 ficasse pronto. Ele tentaria fazer uma versão para Linux, menos completa que a de Windows, mas usável no dia a dia com Wine e Proton. Não encontramos nenhuma versão para Linux lançada até novembro de 2026.

## O que o Heronite e o Playnite têm em comum?

Os dois são gratuitos e de código aberto. Os dois reúnem jogos de várias lojas numa biblioteca só, registram o tempo de jogo, aceitam emuladores e têm um modo de tela cheia pensado para controle.

## Qual escolher?

### Escolha o Playnite se…

- **Você depende de plugins, scripts ou de um tema da comunidade.** O Playnite aceita plugins, scripts em PowerShell e temas.
- **Você tem uma configuração de emuladores já ajustada.** O site do Playnite descreve uma variedade de emuladores de console, então compare antes de migrar a sua.
- **Você quer um projeto com longo histórico.** O Playnite é o projeto mais antigo.

### Escolha o Heronite se…

- **Você usa Linux, ou faz dual boot.** O Heronite é um app nativo para os dois sistemas, e **Configurações → Nuvem** mantém a mesma biblioteca em cada um.
- **Você quer que jogos do Windows rodem pelo Wine ou pelo Proton no app que os lista.** Defina uma versão e um prefixo Wine (uma pasta separada do Windows) por jogo. O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) baixa versões como Proton-CachyOS e GE-Proton.
- **Você quer um app leve.** O Heronite usa cerca de 190 MB de RAM parado ([desempenho](/pt-br/features/performance/)).
- **Você quer um histórico de jogo.** O Heronite registra cada sessão: [estatísticas](/pt-br/features/play-time-tracking/) por semana, mês e ano, uma meta anual de backlog, um diário ao lado das capturas de tela e uma retrospectiva do ano.
- **Você quer um modo console com temas.** O [modo console](/pt-br/features/console-mode/) é um layout para controle, para o sofá ou a TV, com oito layouts e sete temas. Exporte um tema como arquivo para compartilhar.
- **Você joga jogos de emulador.** O Heronite [detecta os emuladores](/pt-br/features/emulation/) que você instalou, incluindo o RetroArch com seus cores, Dolphin, PCSX2 e DuckStation, e escaneia suas pastas de ROMs. Cada ROM vira um jogo com capa e tempo de jogo próprios, e você pode continuar de um save state.
- **Você quer mais lojas no Linux.** O Heronite instala os apps das lojas Battle.net, EA app, Ubisoft Connect e Rockstar Games em prefixos Wine próprios, e os jogos deles entram na mesma biblioteca.
- **Você usa Heroic, Lutris, Bottles ou Faugus no Linux.** O Heronite importa os jogos deles e os mantém sincronizados.

![A tela inicial do modo console do Heronite, com um jogo em destaque grande e uma prateleira Continuar jogando com capas.](../../../assets/screenshots/console-home.webp)

*Início do modo console: um jogo em destaque e uma prateleira para continuar jogando.*

## Como migrar do Playnite para o Heronite?

No Windows, o Heronite importa os jogos que o Playnite instalou. Ele só lê os arquivos do Playnite, então o Playnite continua funcionando.

1. **Faça login nas suas lojas.** Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e faça login na Epic Games, GOG e Amazon Games. As bibliotecas inteiras entram na sua biblioteca. A Steam não pede login.
2. **Traga os jogos do Playnite (Windows).** Feche o Playnite e, em **Configurações → Outros launchers**, ligue **Trazer os jogos dele** embaixo do Playnite. Os jogos instalados dele entram com capas e tempo de jogo, e o Playnite continua abrindo esses jogos.
3. **Adicione os outros jogos.** Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa, ou aponte uma pasta para adicionar todos os jogos encontrados nela.
4. **Detecte seus emuladores e escaneie suas pastas de ROMs.** Na página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>), aperte **Detectar emuladores** e depois **Escanear agora**.

O Heronite deixa de fora os jogos da Steam, Epic, GOG e Amazon do Playnite, porque ele mesmo traz esses jogos. Tags, status de conclusão e anotações ficam no Playnite.

No Windows, o Heronite pega os jogos instalados pelo Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games sem baixar de novo. Para jogos da Epic que você nunca jogou no Heronite, ele pode trazer o tempo de jogo que a Epic registrou.

**Próximo:** [baixe o Heronite](/pt-br/download/) para Linux ou Windows e leia [Primeiros passos](/pt-br/docs/getting-started/).
