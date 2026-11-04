---
title: "Como usar o Heronite: primeiros passos e biblioteca"
navLabel: "Primeiros passos"
description: "Monte sua biblioteca de jogos no Linux ou no Windows: faça login na Epic, GOG e Amazon, adicione outros jogos, aprenda os atalhos, organize e jogue."
section: Start
order: 2
updated: 2026-11-04
---

O Heronite monta sua biblioteca de jogos com a Steam, seus emuladores e as lojas em que você faz login. Antes, [instale o Heronite](/pt-br/docs/installation/) no Linux ou no Windows.

## O que o Heronite encontra na primeira vez que você o abre

Se sua biblioteca estiver vazia, o Heronite adiciona:

- **Steam:** seus jogos da Steam instalados, sem precisar de login.
- **Emuladores e ROMs:** os emuladores que ele detecta e as ROMs em pastas comuns, como `~/ROMs` ou `~/Emulation/roms`. Veja [Emulação](/pt-br/docs/emulation/).

No Linux, a biblioteca vazia também mostra **Trazer de outro launcher** quando o Heronite encontra jogos no Heroic, Lutris, Bottles ou Faugus. Escolha um launcher ali para importar os jogos dele e manter tudo sincronizado.

No Windows, o Heronite encontra os jogos da Microsoft Store e do PC Game Pass instalados pelo app Xbox, sem login.

## Fazer login na Epic Games, GOG ou Amazon Games

1. Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Escolha **Epic Games**, **GOG** ou **Amazon Games**.
3. Clique em **Entrar**.
4. Faça login na página da loja, na janela que abrir.

Se a janela de login não abrir, use **Ou entre pelo navegador** na mesma página e cole o código que o navegador mostrar. Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/).

No Windows, o Heronite também encontra os jogos instalados pelo Epic Games Launcher, pelo GOG Galaxy ou pelo app Amazon Games, sem baixar tudo de novo.

## Adicionar outros jogos à biblioteca

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> (ou **Adicionar um jogo**) para adicionar:

- Um programa do Windows (`.exe`), que no Linux roda pelo Wine ou Proton
- Um programa nativo do Linux, AppImage ou script de inicialização
- Um jogo de navegador (um endereço web)
- Uma ROM ou uma pasta inteira de ROMs

Para adicionar de uma vez todos os jogos de uma pasta, escolha **Adicionar de uma pasta** no menu ☰.

## Abrir qualquer página com um atalho

| Página | Atalho |
|---|---|
| Coleção | <kbd>Ctrl</kbd> <kbd>1</kbd> |
| Downloads | <kbd>Ctrl</kbd> <kbd>2</kbd> |
| Gerenciador do Wine (Linux) | <kbd>Ctrl</kbd> <kbd>3</kbd> |
| Lojas | <kbd>Ctrl</kbd> <kbd>4</kbd> |
| Emuladores | <kbd>Ctrl</kbd> <kbd>5</kbd> |
| Estatísticas | <kbd>Ctrl</kbd> <kbd>6</kbd> |
| Configurações | <kbd>Ctrl</kbd> <kbd>,</kbd> |

A **paleta de comandos** (<kbd>Ctrl</kbd> <kbd>K</kbd>) abre qualquer página, executa qualquer ação ou abre um jogo quando você digita parte do nome. Aperte <kbd>?</kbd> para ver todos os atalhos ou leia [Atalhos de teclado](/pt-br/docs/keyboard-shortcuts/).

## Organizar sua biblioteca de jogos

- Alterne entre **Foco** (uma lista com painel de detalhes) e uma **grade** de capas.
- **Agrupe** por status, loja, gênero, série, ano e mais.
- Salve **presets** com seus filtros e ordenação (Jogando agora, Pendentes, Finalizado, Favoritos).
- Selecione vários jogos (<kbd>Espaço</kbd>, <kbd>Shift</kbd> com as setas, <kbd>Ctrl</kbd> <kbd>A</kbd>) e aperte <kbd>F3</kbd> para editar a série e as tags de todos de uma vez. <kbd>Ctrl</kbd> <kbd>Z</kbd> desfaz.

## Jogar e tirar capturas de tela

1. Selecione um jogo e aperte <kbd>Enter</kbd>. Se ele não estiver instalado, o Heronite instala antes.
2. Aperte <kbd>F10</kbd> durante o jogo para tirar uma captura de tela.
3. Abra **Estatísticas** (<kbd>Ctrl</kbd> <kbd>6</kbd>) para ver suas sessões. O Heronite registra cada uma e associa as capturas de tela ao jogo.

## Usar um controle (modo console)

Ligue o [modo console](/pt-br/docs/console-mode/) pela paleta de comandos ou pelo menu ☰, ou abra o Heronite com `--console`. Para ele abrir na inicialização ou quando um controle conectar, use **Configurações → Modo console**.
