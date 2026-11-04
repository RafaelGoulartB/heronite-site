---
title: "Lojas e launchers: Steam, Epic, GOG e mais"
navLabel: "Lojas e launchers"
description: "Como o Heronite lida com Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft, Rockstar, Microsoft Store, Heroic, Lutris e Playnite."
section: Guides
order: 1
updated: 2026-11-04
---

O Heronite junta seus jogos da Steam, Epic Games, GOG, Amazon Games, apps de loja e outros launchers em uma biblioteca só.

## Adicionar seus jogos da Steam

Não precisa de login. O Heronite traz suas bibliotecas da Steam e mantém tudo sincronizado. Quem abre os jogos é a Steam.

- **Linux:** ele encontra a Steam em `~/.steam/steam`, `~/.local/share/Steam`, no Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) e no Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** ele encontra a Steam pelo registro ou em `C:\Program Files (x86)\Steam`.

### Rodar um trainer com um jogo da Steam (Windows)

1. Abra **Configurações do jogo → Inicialização** do jogo.
2. Em **Programas junto do jogo**, clique em **Adicionar programa** e escolha o trainer.
3. Jogue pelo Heronite.

O Heronite fecha o trainer quando o jogo termina. Os **Scripts** da mesma aba rodam antes de o jogo abrir e depois que ele fecha. Um jogo aberto pela própria Steam não ganha nenhum dos dois.

## Fazer login na Epic Games, GOG e Amazon Games

1. Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Escolha **Epic Games**, **GOG** ou **Amazon Games**.
3. Clique em **Entrar**. Uma janela pequena abre com a página da própria loja (WebKitGTK no Linux, WebView2 no Windows).
4. Faça login nela.

Se a janela de login não abrir, use **Ou entre pelo navegador** na mesma página e cole o código que o navegador mostrar.

1. Clique em **Abrir no navegador** e faça login.
2. Copie o endereço ou o código mostrado no final.
3. Cole em **2. Cole o código** e clique em **Entrar**.

**Downloads.** Uma fila de downloads instala, atualiza e repara jogos. Ela também move, importa ou desinstala. Os downloads pausam quando a internet cai, o Heronite tenta de novo os que falham e procura atualizações dos jogos a cada 3 horas.

**Ferramentas das lojas.** O Heronite baixa as mesmas ferramentas open source do Heroic:

| Loja | Ferramenta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Jogos que você já instalou (Windows).** O Heronite importa os jogos instalados pelo Epic Games Launcher, pelo GOG Galaxy ou pelo app Amazon Games, sem baixar de novo.

## Usar Battle.net, EA app, Ubisoft Connect e Rockstar Games

No Linux, o Heronite instala cada app de loja em um prefixo Wine próprio (uma pasta que funciona como um Windows só daquele app), `~/Games/Heronite/Prefixes/<loja>`. No Windows, o app de loja abre direto, sem Wine.

1. Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e escolha o app de loja.
2. Clique no botão de instalar com o nome do app, como **Instalar o Battle.net**. O Heronite baixa o instalador oficial e abre. No Linux, ele instala o app com seu Proton padrão, o que leva uns 5 minutos. No Windows, o sistema pode pedir sua permissão.
3. Clique no botão de abrir com o nome do app, como **Abrir o Battle.net**, e faça login nele.
4. Instale os jogos no app de loja. Eles aparecem na sua biblioteca e abrem por ela.

No Windows, se o app de loja já estiver instalado, o Heronite usa esse app.

## Adicionar jogos da Microsoft Store e do PC Game Pass (Windows)

O Heronite encontra os jogos instalados pelo app Xbox ou pela Microsoft Store, comprados ou do PC Game Pass. O Heronite adiciona esses jogos à sua biblioteca. Não tem login: instale e atualize os jogos no app Xbox, e o Heronite abre eles e conta o tempo de jogo.

O Heronite busca esses jogos alguns segundos depois de abrir e a cada dez minutos. Para buscar na hora, clique em **Ler jogos agora** em **Lojas → Xbox** ou no botão de atualizar da Coleção. Desinstale esses jogos pelo app Xbox.

## Importar jogos do Heroic, Lutris, Bottles, Faugus e Playnite

Ligue um launcher em **Configurações → Outros launchers** com **Trazer os jogos dele**. Depois, o Heronite mantém os jogos desse launcher sincronizados. No Linux, cada launcher pode ser a instalação normal ou o Flatpak:

| Launcher | O que o Heronite importa |
|---|---|
| Heroic (Linux) | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris (Linux) | Jogos da biblioteca dele (`pga.db`) |
| Bottles (Linux) | Programas de cada bottle |
| Faugus (Linux) | Jogos da lista dele |
| Playnite (Windows) | Jogos instalados que não estão ocultos, com capas e tempo de jogo |

Feche o Playnite antes de ligar a importação dele: enquanto roda, ele deixa a biblioteca aberta e o Heronite não consegue ler nada. Os jogos do Playnite continuam abrindo pelo Playnite.

O Heronite pula os jogos da Steam desses launchers, porque a importação da Steam já adiciona eles, então nada aparece duas vezes. O Heronite só lê os arquivos dos outros launchers e não altera nada.

## Adicionar jogos que você já tem

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa, ou escolha uma pasta para adicionar todos os jogos dela: programas do Windows e, no Linux, AppImages, scripts de inicialização e programas do Linux.
