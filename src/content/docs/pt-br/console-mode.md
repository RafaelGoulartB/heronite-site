---
title: "Modo console do Heronite: controle, temas e overlay"
navLabel: "Modo console"
description: "Modo console do Heronite: como ligar, botões do controle e do teclado, layouts e temas, como compartilhar temas e o overlay dentro do jogo no Linux."
section: Guides
order: 4
updated: 2026-11-01
---

Um layout pensado para controle, para o sofá ou a TV, com teclado na tela e um menu de Energia.

## Como ativar

- Pela paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) ou pelo menu ☰.
- Abra o Heronite com `--console` (por exemplo, em um atalho da Steam ou em uma sessão de jogos).
- Em **Configurações → Modo console**, faça-o abrir na inicialização ou quando um controle for conectado (desligado, perguntar ou ligado).

Nada do modo console é carregado enquanto ele está desligado.

## Controle

| Botão | Ação |
|---|---|
| A (sul) | Confirmar |
| B (leste) | Voltar |
| X, Y | Ações mostradas na tela |
| LB / RB | Trocar de aba |
| D-pad, analógico esquerdo | Mover |
| Analógico direito | Rolar |
| Start ou Guide | Menu |

Troque A e B nos controles do tema se preferir o layout do Nintendo. As imagens dos botões seguem o controle (Xbox, PlayStation, Nintendo, Steam Deck) ou podem ser definidas à mão.

## Teclado

| Tecla | Funciona como |
|---|---|
| Setas | Mover |
| <kbd>Enter</kbd> ou <kbd>Space</kbd> | A |
| <kbd>Esc</kbd> ou <kbd>Backspace</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>PgUp</kbd> / <kbd>PgDn</kbd> | Rolar |
| <kbd>M</kbd> ou <kbd>F1</kbd> | Start (menu) |
| <kbd>Tab</kbd> | Select |

## Temas

Mude cada parte do modo console, ao vivo do sofá ou em **Configurações → Modo console**:

- até quatro abas, cada uma com seu próprio layout (Prateleiras, Vitrine, Cinema, Painel, Grade, Lista, Carrossel, Series X) e seus próprios jogos (todos, instalados, favoritos, um status, uma loja, uma plataforma, …),
- capas, plano de fundo, cores, fontes e ícones dos botões,
- o menu e as páginas dos jogos.

Sete temas já vêm prontos: Minimal, Clássico, Cinema, Pulse, Fliperama, Central e Sala de estar.

### Como compartilhar temas

Exporte um tema para um arquivo `.heronite-theme.json` e importe-o em qualquer PC. A imagem de fundo vai dentro do arquivo. Compartilhe o seu nas [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions).

O formato do arquivo está descrito em [Formato de tema do modo console](/pt-br/docs/console-theme-format/).

## Overlay dentro do jogo (beta, Linux)

Com o overlay ligado, o botão Guide do controle abre um painel sobre o jogo com volume, microfone, limite de FPS, capturas de tela e notas do diário.

| Botões | Ação |
|---|---|
| Guide | Abrir ou fechar o painel (<kbd>Super</kbd> <kbd>G</kbd> no teclado) |
| Guide + RB | Captura de tela (o botão pode ser mudado) |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Marcar momento |
| Guide + X | Salvar o replay |

O overlay precisa de uma sessão Wayland cujo compositor tenha suporte a layer-shell (KDE Plasma, Hyprland, Sway e outros). Ele não funciona no GNOME nem no X11. Se a Steam ficar com o botão Guide, desligue "Guide Button Focuses Steam" nas configurações de controle da Steam.

O **Replay** (desligado por padrão) guarda os últimos segundos de jogo, gravados na GPU pelo [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).
