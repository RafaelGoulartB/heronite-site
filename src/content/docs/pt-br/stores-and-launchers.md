---
title: "Steam, Epic, GOG e Amazon: lojas e launchers"
navLabel: "Lojas e launchers"
description: "Como o Heronite lida com Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar, Heroic, Lutris, Bottles e Faugus."
section: Guides
order: 1
updated: 2026-11-04
---

O Heronite reúne seus jogos da Steam, Epic Games, GOG, Amazon Games e de outros launchers em uma só biblioteca.

## Adicione seus jogos da Steam

Não precisa de login. O Heronite lê suas bibliotecas da Steam e as mantém sincronizadas.

- **Linux:** ele encontra a Steam em `~/.steam/steam`, `~/.local/share/Steam`, no Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) e no Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** ele encontra a Steam pelo registro, ou em `C:\Program Files (x86)\Steam`.

A Steam inicia os próprios jogos. No Windows, o Heronite pode rodar scripts e programas, como trainers, em volta de um jogo da Steam.

## Entre na Epic Games, GOG e Amazon Games

Entre pela página **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>). Uma única fila de downloads instala, atualiza e repara jogos, e também os move, importa ou desinstala. Os downloads pausam quando você está offline, e o Heronite tenta de novo os que falham.

O Heronite baixa as mesmas ferramentas de código aberto do Heroic:

| Loja | Ferramenta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Janela de login.** Entrar abre uma pequena janela com a página da própria loja (WebKitGTK no Linux, WebView2 no Windows). Se ela não abrir, use o **login pelo navegador** na página de login: entre no seu navegador e cole o endereço ou o código mostrado no final.

**Jogos que você já instalou (Windows).** O Heronite importa os jogos instalados pelo Epic Games Launcher, pela GOG Galaxy ou pelo app da Amazon Games, sem baixá-los de novo.

O Heronite verifica atualizações dos jogos a cada 3 horas.

## Use Battle.net, EA app, Ubisoft Connect e Rockstar Games (Linux)

O Heronite instala o app de cada loja em um prefixo Wine próprio, `~/Games/Heronite/Prefixes/<store>`. Entre e instale jogos nesse app. Eles aparecem na sua biblioteca e iniciam por ela.

No Windows, use por enquanto os apps das próprias lojas.

## Importe jogos do Heroic, Lutris, Bottles e Faugus (Linux)

O Heronite importa os jogos desses launchers e os mantém sincronizados. Cada um pode ser a instalação normal ou o Flatpak:

| Launcher | O que entra |
|---|---|
| Heroic | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris | Jogos da biblioteca dele (`pga.db`) |
| Bottles | Programas de cada bottle |
| Faugus | Jogos da lista dele |

O Heronite ignora os jogos da Steam desses launchers, que entram pela importação da Steam, então nada aparece duas vezes. Ele só lê os arquivos dos outros launchers.

## Adicione jogos que você já tem

Pressione <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa, ou aponte para uma pasta e adicione todos os jogos dela: programas do Windows e, no Linux, AppImages, scripts de inicialização e programas do Linux.
