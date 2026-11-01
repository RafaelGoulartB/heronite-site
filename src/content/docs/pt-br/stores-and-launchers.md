---
title: "Steam, Epic, GOG e Amazon no Heronite: lojas e launchers"
navLabel: "Lojas e launchers"
description: "Como o Heronite funciona com Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar Games, Heroic, Lutris, Bottles e Faugus."
section: Guides
order: 1
updated: 2026-11-01
---

## Steam

Não precisa de login. O Heronite lê suas bibliotecas da Steam e as mantém sincronizadas.

- **Linux:** ele encontra a Steam em `~/.steam/steam`, `~/.local/share/Steam`, no Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) e no Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** ele encontra a Steam pelo registro, ou em `C:\Program Files (x86)\Steam`.

A Steam continua iniciando os próprios jogos. No Windows, o Heronite também pode rodar seus scripts e programas (como trainers) em volta de um jogo da Steam.

## Epic Games, GOG e Amazon Games

Entre pela página **Lojas**. O Heronite passa a cuidar de toda a biblioteca: uma única fila de downloads instala, atualiza, repara, move, importa e desinstala jogos. Os downloads pausam quando você está offline e os que falham são tentados de novo.

Por baixo dos panos, o Heronite usa as mesmas ferramentas de código aberto do Heroic e as baixa sozinho:

| Loja | Ferramenta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Janela de login.** Entrar abre uma pequena janela com a página da própria loja (WebKitGTK no Linux, WebView2 no Windows). Se ela não abrir, a página de login tem o **login pelo navegador**: entre no seu navegador normal e cole o endereço ou o código mostrado no final.

**Jogos que você já instalou (Windows).** Os jogos instalados pelo Epic Games Launcher, pela GOG Galaxy ou pelo app da Amazon Games entram no Heronite sem precisar baixá-los de novo.

As atualizações dos jogos são verificadas a cada 3 horas.

## Battle.net, EA app, Ubisoft Connect, Rockstar Games (Linux)

O Heronite instala o app de cada loja em um prefixo Wine próprio (em `~/Games/Heronite/Prefixes/<store>`). Entre e instale jogos nesse app como de costume; eles aparecem na sua Coleção e iniciam por ela.

No Windows, use por enquanto os apps das próprias lojas.

## Outros launchers (Linux)

O Heronite pode trazer os jogos de outros launchers e mantê-los sincronizados. Cada fonte pode ser a instalação normal ou o Flatpak:

| Launcher | O que entra |
|---|---|
| Heroic | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris | Jogos da biblioteca dele (`pga.db`) |
| Bottles | Programas de cada bottle |
| Faugus | Jogos da lista dele |

Os jogos da Steam que esses launchers listam ficam por conta da importação da Steam, então nada aparece duas vezes. O Heronite só lê os arquivos dos outros launchers.

## Jogos que você já tem

Adicione um programa à mão (<kbd>Ctrl</kbd> <kbd>N</kbd>) ou aponte para uma pasta e adicione de uma vez todos os jogos encontrados nela: programas do Windows e, no Linux, também AppImages, scripts de inicialização e programas do Linux.
