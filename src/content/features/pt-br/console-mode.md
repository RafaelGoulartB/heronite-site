---
title: "Launcher de jogos para sofá, TV e Steam Deck | Heronite"
description: "Jogue sua biblioteca do sofá, só com controle. O modo console tem oito layouts, sete temas e teclado na tela. Grátis no Linux e no Windows."
eyebrow: Modo console
headline: "Um launcher de jogos para o sofá, a TV e o Steam Deck"
lead: "O modo console roda toda a sua biblioteca com um controle, sem mouse, no Linux e no Windows. Ele tem teclado na tela e, no Linux, um overlay dentro do jogo."
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
  - q: O modo console funciona com controles de PlayStation e Nintendo?
    a: Sim. As dicas dos botões mostram imagens de Xbox, PlayStation, Nintendo ou Steam Deck, conforme o seu controle.
  - q: O modo console funciona com teclado?
    a: Sim. As setas movem, `Enter` confirma e `Esc` volta. Veja [Modo console](/docs/console-mode/#teclado).
  - q: O modo console deixa o Heronite mais pesado?
    a: Não. Ele faz parte do mesmo app nativo em Rust e só é carregado quando você o liga.
related:
  - /guides/steam-deck/
  - /features/game-library/
  - /features/play-time-tracking/
---

## Como ligar o modo console?

- Abra pela paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) ou pelo menu ☰.
- Abra o Heronite com a opção `--console`, por exemplo em um atalho da Steam ou em uma sessão de jogo.
- Em **Configurações → Modo console**, escolha desligado, perguntar ou ligado para abrir na inicialização ou quando um controle for conectado.

## O que fazem os botões do controle?

As dicas na parte de baixo de cada página seguem o seu controle, com imagens de botões de Xbox, PlayStation, Nintendo ou Steam Deck. Para o layout da Nintendo, troque A e B nos controles do tema.

| Controle | Ação |
|---|---|
| A (sul) | Confirmar |
| B (leste) | Voltar |
| X, Y | Ações mostradas na tela |
| LB / RB | Trocar de aba |
| Direcional, analógico esquerdo | Mover |
| Analógico direito | Rolar |
| Start ou Guide | Menu |

Sem gamepad, o teclado faz o papel dele:

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

*A página de ELDEN RING no modo console.*

## Quais layouts e abas o modo console tem?

O modo console tem até **quatro abas**, cada uma com o seu layout e os seus jogos. Os layouts são:

- Prateleiras
- Vitrine
- Cinema
- Painel
- Grade
- Lista
- Carrossel
- Series X

Uma aba mostra todos os jogos, só os instalados ou só os favoritos, ou filtra por um status, uma loja ou uma plataforma.

## Como mudar a aparência do modo console?

Escolha um de sete temas (**Minimal**, **Clássico**, **Cinema**, **Pulse**, **Fliperama**, **Central**, **Sala de estar**). Depois mude o que quiser destes itens, ao vivo ou em **Configurações → Modo console**:

- Capas, formato e tamanho dos blocos
- Fundo: a arte do jogo, uma capa desfocada, capturas de tela ou uma imagem sua
- Cor de destaque, fontes, tamanho da interface e o relógio
- Imagens dos botões
- O menu (barra lateral, grade, dock ou trilho) e as páginas dos jogos

### Como compartilhar um tema?

Exporte o seu tema para um arquivo `.heronite-theme.json` e importe em qualquer PC. A imagem de fundo vai dentro do arquivo. Poste o seu nas [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions). O [formato de tema](/pt-br/docs/console-theme-format/) lista todos os campos, e todos são opcionais.

## Dá para digitar sem teclado?

Sim. O modo console tem um **teclado na tela** e um **menu de energia**. O botão Menu abre o menu principal em qualquer página.

## Como abrir o modo console no Modo Jogo do Steam Deck?

1. No Modo Desktop, baixe o `Heronite-x86_64.AppImage` e torne-o executável.
2. Na Steam, escolha **Add a Game**, depois **Add a Non-Steam Game**, e selecione o AppImage.
3. Nas **Properties** do Heronite, digite `--console` em **Launch Options**.
4. Volte ao Modo Jogo e abra o Heronite pela sua biblioteca.

O [guia do Steam Deck](/pt-br/guides/steam-deck/) mostra cada passo em detalhe.

## Como usar o overlay dentro do jogo e o Replay (beta, Linux)?

Ligue o overlay em **Configurações → Overlay**. Aí o botão Guide abre um painel sobre o jogo. Ele ajusta volume, microfone e limite de FPS, e faz capturas de tela e anotações do diário.

| Botões | Ação |
|---|---|
| Guide | Abrir ou fechar o painel (<kbd>Super</kbd> <kbd>G</kbd> no teclado) |
| Guide + RB | Captura de tela |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Marcar um momento |
| Guide + X | Salvar o replay |

O **Replay** vem desligado; ligue em **Configurações → Replay**. Ele guarda os últimos segundos de jogo, gravados na GPU pelo [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).

O overlay precisa de uma sessão Wayland cujo compositor suporte layer-shell, como KDE Plasma, Hyprland ou Sway. Ele não funciona no GNOME nem no X11.

Próximo: [documentação do Modo console](/pt-br/docs/console-mode/).
