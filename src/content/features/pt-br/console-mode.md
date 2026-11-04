---
title: "Launcher de jogos para sofá, TV e Steam Deck | Heronite"
description: "Jogue sua biblioteca do sofá, só com controle. O modo console tem oito layouts, sete temas e teclado na tela. Grátis no Linux e no Windows."
eyebrow: Modo console
headline: "Um launcher de jogos para o sofá, a TV e o Steam Deck"
lead: "O modo console transforma o Heronite em um launcher de jogos para o sofá, a TV ou o Steam Deck. Jogue toda a sua biblioteca com um controle, sem mouse."
navLabel: Modo console
summary: "Um modo feito para controle, para o sofá ou a TV, com oito layouts, sete temas que você pode mudar e compartilhar, e um overlay dentro do jogo."
order: 5
hero: ../../../assets/screenshots/console-carousel.webp
heroAlt: "O modo console do Heronite: um carrossel dos jogos em andamento com Control em foco entre Brotato e Crash Team Racing, a loja, o tempo de jogo e o status embaixo, e abas Todos, Instalados, Favoritos e Jogando."
og: /og/console-mode.jpg
updated: 2026-11-04
highlights:
  - title: Feito para controle
    text: O direcional move, A confirma, B volta e LB e RB trocam de aba.
  - title: Oito layouts, sete temas
    text: Dê a cada uma das até quatro abas o seu layout.
  - title: Compartilhe o seu tema
    text: Envie um tema em um único arquivo que importa em qualquer PC.
  - title: Leve quando está desligado
    text: Nada é carregado até você ligar.
faq:
  - q: O Heronite é uma alternativa ao modo Big Picture da Steam?
    a: Sim. Ele reúne jogos de todas as lojas, emuladores e seus programas em uma interface para controle, no Linux e no Windows.
  - q: Posso usar o Heronite no Steam Deck?
    a: Sim. Adicione o AppImage à Steam como jogo que não é da Steam, com a opção `--console`. O [guia do Steam Deck](/guides/steam-deck/) mostra como.
  - q: O modo console funciona com teclado?
    a: Sim. As setas movem, `Enter` confirma e `Esc` volta. Veja [a tabela de teclas](#o-que-fazem-os-botões-do-controle) ou [Modo console](/docs/console-mode/#teclado).
  - q: O modo console deixa o Heronite mais pesado?
    a: Não. Ele faz parte do mesmo app nativo em Rust e só é carregado quando você o liga.
related:
  - /guides/steam-deck/
  - /features/game-library/
  - /features/play-time-tracking/
---

## Como ligar o modo console?

Há três jeitos:

- Pela paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) ou pelo menu ☰.
- Com a opção `--console`, por exemplo em um atalho da Steam ou em uma sessão de jogo.
- Em **Configurações → Modo console**, onde você escolhe desligado, perguntar ou ligado para abrir na inicialização ou quando um controle for conectado.

## O que fazem os botões do controle?

As dicas na parte de baixo de cada página seguem o seu controle, com imagens de botões de Xbox, PlayStation, Nintendo ou Steam Deck.

| Controle | Ação |
|---|---|
| A (sul) | Confirmar |
| B (leste) | Voltar |
| X, Y | Ações mostradas na tela |
| LB / RB | Trocar de aba |
| Direcional, analógico esquerdo | Mover |
| Analógico direito | Rolar |
| Start ou Guide | Menu |

Para o layout da Nintendo, troque A e B nos controles do tema. Sem gamepad, o teclado faz o papel dele:

| Tecla | Funciona como |
|---|---|
| Setas | Mover |
| <kbd>Enter</kbd> ou <kbd>Espaço</kbd> | A |
| <kbd>Esc</kbd> ou <kbd>Backspace</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>PgUp</kbd> / <kbd>PgDn</kbd> | Rolar |
| <kbd>M</kbd> ou <kbd>F1</kbd> | Start (menu) |
| <kbd>Tab</kbd> | Select |

## Como navegar e jogar do sofá?

A primeira aba costuma ser o **Início**. Ele mostra o jogo que você vai continuar sobre a arte dele, com prateleiras como *Continuar jogando* e *Favoritos*. Aperte A para abrir a página dele, X para jogar e Y para pesquisar.

![A aba Biblioteca do modo console do Heronite mostrando uma grade de capas de jogos com os filtros Mostrar, Ordenar, Status e Pesquisar no topo e dicas dos botões Detalhes, Instalar, Pesquisar, Início e Menu na parte de baixo.](../../../assets/screenshots/console-library.webp)

*A aba Biblioteca lista toda a sua [Coleção](/pt-br/features/game-library/) em capas.*

A página de um jogo tem estas linhas:

- **Jogar**, **Status**, **Favorito**, **Configurações do jogo** e **Tempo de jogo**
- **Fazer backup dos saves**, com o [Ludusavi](/pt-br/features/saves-and-backups/) instalado

Detalhes como nota, desenvolvedora e último jogo ficam à direita.

![A página do jogo ELDEN RING no modo console do Heronite com uma lista de Jogar, Status, Favorito, Configurações do jogo, Tempo de jogo e Fazer backup dos saves (Ludusavi), e um painel de detalhes com nota, desenvolvedora, último jogo e recursos.](../../../assets/screenshots/console-game.webp)

*A página de um jogo no modo console, com um painel de detalhes à direita.*

## Quais layouts e abas o modo console tem?

O modo console tem até **quatro abas**, e cada aba tem o seu próprio layout e os seus próprios jogos. Os layouts são:

- Prateleiras
- Vitrine
- Cinema
- Painel
- Grade
- Lista
- Carrossel
- Series X

Uma aba pode mostrar todos os jogos, só os instalados ou só os favoritos. Ela também pode filtrar por um status, uma loja ou uma plataforma.

## Como mudar a aparência do modo console?

Escolha um de sete temas (**Minimal**, **Clássico**, **Cinema**, **Pulse**, **Fliperama**, **Central**, **Sala de estar**) e mude o que quiser, ao vivo ou em **Configurações → Modo console**:

- capas, formato e tamanho dos blocos,
- fundo, com a arte do jogo, uma capa desfocada, capturas de tela ou uma imagem sua,
- cor de destaque, fontes, tamanho da interface e do relógio,
- imagens dos botões,
- o menu (barra lateral, grade, dock ou trilho) e as páginas dos jogos.

### Como compartilhar um tema?

Exporte o seu tema para um arquivo `.heronite-theme.json` e importe em qualquer PC. A imagem de fundo vai dentro do arquivo. Poste o seu nas [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions). O [formato de tema](/pt-br/docs/console-theme-format/) lista todos os campos, e todos são opcionais.

## Dá para digitar sem teclado?

Sim. O modo console tem um **teclado na tela** e um **menu de energia**. O botão Menu abre o menu principal em qualquer página.

## Como iniciar o modo console no Modo Gaming do Steam Deck?

Instale o AppImage no modo desktop do SteamOS e adicione-o à Steam como jogo que não é da Steam, com a opção `--console`. O [guia do Steam Deck](/pt-br/guides/steam-deck/) mostra o passo a passo.

## Como usar o overlay dentro do jogo e o Replay (beta, Linux)?

Com o overlay ligado, o botão Guide abre um painel sobre o jogo. Ele ajusta volume, microfone e limite de FPS, e faz capturas de tela e anotações do diário.

| Botões | Ação |
|---|---|
| Guide | Abrir ou fechar o painel (<kbd>Super</kbd> <kbd>G</kbd> no teclado) |
| Guide + RB | Captura de tela |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Marcar um momento |
| Guide + X | Salvar o replay |

O **Replay** vem desligado por padrão. Quando ligado, ele guarda os últimos segundos de jogo, gravados na GPU pelo [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).

> **Nota.** O overlay precisa de uma sessão Wayland cujo compositor suporte layer-shell, como KDE Plasma, Hyprland ou Sway. Ele não funciona no GNOME nem no X11.

Próximo: [documentação do Modo console](/pt-br/docs/console-mode/).
