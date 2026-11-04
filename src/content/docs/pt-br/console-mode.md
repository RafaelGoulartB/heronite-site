---
title: "Modo console: use o Heronite com controle na TV"
navLabel: "Modo console"
description: "Modo console do Heronite: como ligar, botões do controle e do teclado, layouts e temas, como compartilhar temas e o overlay dentro do jogo no Linux."
section: Guides
order: 4
updated: 2026-11-04
---

O modo console é um layout feito para controle, para jogar no sofá ou na TV, com teclado na tela e um menu de Energia.

## Ligar o modo console

Abra de qualquer um destes jeitos:

- Escolha **Modo console** na paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) ou no menu ☰.
- Abra o Heronite com `--console` (por exemplo, em um atalho da Steam ou em uma sessão de jogos).
- Em **Configurações → Modo console**, faça ele abrir na inicialização ou quando um controle conectar (desligado, perguntar ou ligado).

O modo console não carrega nada enquanto está desligado. No Steam Deck, veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Botões do controle

| Botão | Ação |
|---|---|
| A (sul) | Confirmar |
| B (leste) | Voltar |
| X, Y | Ações mostradas na tela |
| LB / RB | Trocar de aba |
| D-pad, analógico esquerdo | Mover |
| Analógico direito | Rolar |
| Start ou Guide | Menu |

Troque A e B nos controles do tema se preferir o layout da Nintendo. As imagens dos botões seguem o controle (Xbox, PlayStation, Nintendo, Steam Deck) ou podem ser escolhidas à mão.

## Teclado

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

## Mudar layouts e temas

Mude cada parte do modo console, ao vivo do sofá ou em **Configurações → Modo console**:

- Até quatro abas, cada uma com seu layout (Prateleiras, Vitrine, Cinema, Painel, Grade, Lista, Carrossel, Series X) e seus jogos (todos, instalados, não instalados, favoritos, PC, emulados, ou um status, categoria, loja ou plataforma)
- Capas, plano de fundo, cores, fontes e ícones dos botões
- O menu e as páginas dos jogos

Sete temas já vêm prontos: Minimal, Clássico, Cinema, Pulse, Fliperama, Central e Sala de estar.

### Compartilhar um tema

Em **Configurações → Modo console**, escolha **Exportar…** para salvar um tema como arquivo `.heronite-theme.json`, com a imagem de fundo dentro. Em outro PC, escolha **Importar…**. Compartilhe o seu nas [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions) ou edite o arquivo à mão com o [formato de tema do modo console](/pt-br/docs/console-theme-format/).

## Abrir o overlay dentro do jogo (beta, Linux)

1. Em **Configurações → Overlay**, ligue **Ligar o overlay**. Ele vem desligado por padrão.
2. Durante um jogo aberto pelo Heronite, aperte o botão Guide do controle.

O painel sobre o jogo tem volume, microfone, limite de FPS, capturas de tela e notas do diário.

| Botões | Ação |
|---|---|
| Guide | Abrir ou fechar o painel (<kbd>Super</kbd> <kbd>G</kbd> no teclado) |
| Guide + RB | Captura de tela (dá para trocar o botão) |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Marcar um momento |
| Guide + X | Salvar o replay |

O overlay precisa de uma sessão Wayland com um compositor que suporte layer-shell, então não funciona no GNOME nem no X11. Se a Steam pegar o botão Guide, veja [Solução de problemas](/pt-br/docs/troubleshooting/#o-overlay-dentro-do-jogo-não-funciona-linux).

O **Replay** guarda os últimos segundos de jogo, gravados na GPU pelo [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/). Ele vem desligado: ligue em **Configurações → Replay**.
