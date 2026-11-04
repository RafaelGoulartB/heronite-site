---
title: "Launcher de jogos: Steam, Epic, GOG e mais | Heronite"
description: "Launcher de jogos para todas as lojas no Linux e no Windows: Steam sem login, Epic, GOG e Amazon numa biblioteca, e importação do Heroic e do Lutris."
eyebrow: Lojas e launchers
headline: "Um launcher de jogos para todas as lojas"
lead: "Steam, Epic, GOG, Amazon, Battle.net, EA, Ubisoft e Rockstar numa biblioteca só, no Linux e no Windows. No Windows, os jogos da Microsoft Store e do PC Game Pass também."
navLabel: Lojas e launchers
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect e Rockstar numa biblioteca, jogos do app Xbox no Windows e importação de outros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "A Biblioteca do modo console do Heronite: uma grade de capas de jogos, de A Plague Tale, Alan Wake e Baldur's Gate 3 até Black Myth: Wukong, com os filtros Mostrar, Ordenar e Status acima e 207 jogos na lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam sem login
    text: O Heronite acha a versão nativa da Steam (pacote da distro), o Flatpak ou o Snap, e a Steam continua abrindo os jogos.
  - title: Logins ficam no seu PC
    text: Seus logins das lojas vão só para as lojas.
  - title: Apps das lojas no Wine no Linux
    text: Cada app de loja ganha o seu próprio prefixo Wine; no Windows, ele roda direto, sem Wine.
  - title: Importe outros launchers
    text: Heroic, Lutris, Bottles e Faugus no Linux, e Playnite no Windows, ficam sincronizados.
faq:
  - q: Posso usar a Epic Games e a GOG no mesmo launcher?
    a: Sim. Faça login em cada loja na página **Lojas**, e uma fila de downloads cuida das duas. Veja [Epic no Linux](/guides/epic-games-on-linux/) e [GOG no Linux](/guides/gog-on-linux/).
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
  - q: O Heronite é grátis?
    a: Sim. O Heronite é grátis e de código aberto, sob a licença GPL-3.0, sem contas, anúncios nem telemetria.
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## Quais lojas o Heronite suporta?

| Loja ou launcher | Linux | Windows | Como funciona |
|---|---|---|---|
| Steam | Sim | Sim | Sem login; o Heronite traz suas bibliotecas |
| Epic Games | Sim | Sim | Faça login; o Heronite instala os jogos |
| GOG | Sim | Sim | Faça login; o Heronite instala os jogos |
| Amazon Games | Sim | Sim | Faça login; o Heronite instala os jogos |
| Battle.net | Sim | Sim | Faça login; o app da loja instala os jogos |
| EA app | Sim | Sim | Faça login; o app da loja instala os jogos |
| Ubisoft Connect | Sim | Sim | Faça login; o app da loja instala os jogos |
| Rockstar Games | Sim | Sim | Faça login; o app da loja instala os jogos |
| Microsoft Store e PC Game Pass | Não | Sim | Sem login; o Heronite traz os jogos do app Xbox |

Seus [jogos de emulador](/pt-br/features/emulation/) ficam na mesma [biblioteca](/pt-br/features/game-library/).

## Como faço login na Epic, GOG e Amazon?

1. Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Escolha **Epic Games**, **GOG** ou **Amazon Games**.
3. Clique em **Entrar**.
4. Faça login na página da loja, na janela que abrir.

Se a janela não abrir, use **Ou entre pelo navegador** na mesma página ([Lojas e launchers](/pt-br/docs/stores-and-launchers/)). Passo a passo: [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/).

No Windows, o Heronite adiciona os jogos que o Epic Games Launcher, o GOG Galaxy ou o app da Amazon Games instalaram, sem baixar de novo.

O Heronite baixa as ferramentas de código aberto, não oficiais, que o Heroic usa: [legendary](https://github.com/derrod/legendary) para a Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para a GOG e [nile](https://github.com/imLinguin/nile) para a Amazon.

## Como o Heronite baixa e atualiza os jogos?

Clique em **Instalar** num jogo. Uma fila de downloads instala, atualiza, repara e desinstala seus jogos da Epic, GOG e Amazon. A mesma fila move e importa jogos. O Heronite pausa os downloads offline, tenta de novo os que falham e procura atualizações a cada 3 horas.

## Preciso fazer login na Steam?

Não. O Heronite traz suas bibliotecas da Steam sem login e as mantém sincronizadas. No Linux, ele acha a versão nativa da Steam (pacote da distro), o Flatpak e o Snap. No Windows, ele acha a Steam pelo registro.

![A página de um jogo na Coleção do Heronite mostrando uma linha Biblioteca com Steam, o status Jogando e um botão Jogar ao lado da capa.](../../../assets/screenshots/collection.webp)

*A página de um jogo da Steam, ao lado de jogos de outras lojas.*

## Dá para jogar Battle.net, EA, Ubisoft e Rockstar?

Sim, no Linux e no Windows. Você faz login e instala os jogos no app da loja. O Heronite lista esses jogos, abre os jogos pelo app da loja e conta o tempo de jogo.

No Linux, o Heronite instala cada app de loja no seu próprio prefixo Wine (uma pasta que funciona como um Windows só daquele app), em `~/Games/Heronite/Prefixes/<loja>`. Ele roda o app com [Wine e Proton](/pt-br/features/wine-and-proton/). Passo a passo: [Battle.net](/pt-br/guides/battle-net-on-linux/) e [EA app, Ubisoft Connect e Rockstar](/pt-br/guides/ea-app-ubisoft-rockstar-on-linux/).

No Windows, o app da loja roda direto, sem Wine. Clique no botão de instalação do app, como **Instalar o Battle.net**, para baixar e abrir o instalador oficial.

## Como adiciono jogos da Microsoft Store e do PC Game Pass?

No Windows, o Heronite acha os jogos que o app Xbox ou a Microsoft Store instalou, incluindo os do PC Game Pass (o Xbox Game Pass para PC). Não precisa de login. O app Xbox continua instalando, atualizando e desinstalando esses jogos.

**Lojas → Xbox** mostra se o Heronite achou o app Xbox e lista os jogos dele. Depois de instalar um jogo, clique em **Ler jogos agora**.

## Posso importar jogos do Heroic, Lutris, Bottles, Faugus ou Playnite?

Sim. Ligue um launcher em **Configurações → Outros launchers**. O Heronite só lê os arquivos dele e não mexe nos dados dele. Na primeira vez que você abre o Heronite, ele copia os dados do Heroic uma vez.

| Launcher | O que o Heronite importa |
|---|---|
| Heroic (Linux) | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris (Linux) | Jogos da biblioteca dele |
| Bottles (Linux) | Os programas de cada bottle |
| Faugus (Linux) | Jogos da lista dele |
| Playnite (Windows) | Jogos instalados que não estão ocultos, com capas e tempo de jogo |

Cada launcher do Linux pode ser a instalação normal ou o Flatpak. Os jogos do Playnite continuam abrindo pelo Playnite. O Heronite ignora os jogos da Steam desses launchers, porque eles já vêm pela Steam. Para migrar, veja as comparações com o [Heroic](/pt-br/compare/heroic/), o [Lutris](/pt-br/compare/lutris/) e o [Playnite](/pt-br/compare/playnite/).

## Como adiciono um jogo que não é de uma loja?

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa à mão. Para adicionar todos os jogos de uma pasta, escolha **Adicionar de uma pasta** no menu ☰. Os dois servem para programas do Windows e, no Linux, para AppImages, scripts de início e programas nativos.

![A janela de adicionar jogo com campos para o título, a capa e o fundo, a plataforma definida como Windows, o prefixo Wine e a versão do Proton, e o executável a rodar.](../../../assets/screenshots/add-game.webp)

*A janela de adicionar jogo para um programa do Windows.*

## Como rodar um trainer com um jogo da Steam no Windows?

1. Abra **Configurações do jogo → Inicialização**.
2. Em **Programas junto do jogo**, clique em **Adicionar programa** e escolha o trainer.
3. Jogue pelo Heronite.

O Heronite fecha o trainer quando o jogo termina. Os **Scripts** da mesma aba rodam antes de o jogo abrir e depois que ele fecha. Isso só funciona quando você abre o jogo pelo Heronite.

Próximo: [baixe o Heronite](/pt-br/download/) e adicione a sua primeira loja.
