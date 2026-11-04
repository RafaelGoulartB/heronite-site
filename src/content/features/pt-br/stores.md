---
title: "Launcher de jogos para todas as lojas no Linux | Heronite"
description: "Launcher de jogos para todas as lojas no Linux e no Windows: Steam sem login, Epic, GOG e Amazon numa biblioteca, e importação do Heroic e do Lutris."
eyebrow: Lojas e launchers
headline: "Um launcher de jogos para todas as lojas"
lead: "O Heronite roda Steam, Epic Games, GOG e Amazon Games, e os apps das lojas Battle.net, EA app, Ubisoft Connect e Rockstar Games, no Linux e no Windows. No Windows ele também traz os jogos da Microsoft Store e do PC Game Pass."
navLabel: Lojas e launchers
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect e Rockstar numa biblioteca, jogos do app Xbox no Windows e importação de outros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "A Biblioteca do modo console do Heronite: uma grade de capas de jogos, de A Plague Tale, Alan Wake e Baldur's Gate 3 até Black Myth: Wukong, com os filtros Mostrar, Ordenar e Status acima e 207 jogos na lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Atualizações a cada 3 horas
    text: O Heronite procura atualizações de jogos e tenta de novo os downloads que falham.
  - title: Apps das lojas nos dois sistemas
    text: No Linux cada app de loja roda no seu próprio prefixo Wine; no Windows, como é.
  - title: Trainers com jogos da Steam
    text: No Windows, o Heronite abre um trainer com um jogo da Steam e fecha depois.
  - title: Importe outros launchers
    text: Heroic, Lutris, Bottles e Faugus no Linux, e Playnite no Windows, ficam sincronizados.
faq:
  - q: Posso usar a Epic Games e a GOG no mesmo launcher?
    a: Sim. Faça login em cada loja na página **Lojas**, e uma fila de downloads cuida das duas. Veja [Epic no Linux](/guides/epic-games-on-linux/) e [GOG no Linux](/guides/gog-on-linux/).
  - q: O Heronite funciona com a Steam instalada como Flatpak ou Snap?
    a: Sim. No Linux, o Heronite acha a instalação normal da Steam, o Flatpak e o Snap.
  - q: A Battle.net, o EA app, o Ubisoft Connect e a Rockstar funcionam no Windows?
    a: Sim. No Windows, o Heronite roda esses apps das lojas sem Wine. Você faz login e instala os jogos em cada app, e o Heronite abre os jogos e conta o tempo de jogo.
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
| Steam | Sim | Sim | O Heronite traz suas bibliotecas |
| Epic Games | Sim | Sim | Faça login e instale pelo Heronite |
| GOG | Sim | Sim | Faça login e instale pelo Heronite |
| Amazon Games | Sim | Sim | Faça login e instale pelo Heronite |
| Battle.net | Sim | Sim | App da loja, pelo Wine no Linux |
| EA app | Sim | Sim | App da loja, pelo Wine no Linux |
| Ubisoft Connect | Sim | Sim | App da loja, pelo Wine no Linux |
| Rockstar Games | Sim | Sim | App da loja, pelo Wine no Linux |
| Microsoft Store e PC Game Pass | Não | Sim | O Heronite traz os jogos do app Xbox |

Jogos de emulador e programas que você adiciona à mão entram na mesma biblioteca. Veja a [biblioteca de jogos](/pt-br/features/game-library/) e a [emulação](/pt-br/features/emulation/).

## Como faço login na Epic, GOG e Amazon?

1. Abra a página **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Faça login em cada loja na janelinha de login.
3. Aperte **Instalar** ou **Importar** em um jogo.

Se a janela de login não abrir, use o **login pelo navegador** na página **Lojas**. Seus logins ficam no seu PC e vão só para as lojas. Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/).

No Windows, os jogos já instalados pelo Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games entram sem baixar de novo. Os passos de cada loja estão nos guias de [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/).

O Heronite baixa as ferramentas de código aberto que o Heroic usa para essas lojas: [legendary](https://github.com/derrod/legendary) para a Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para a GOG e [nile](https://github.com/imLinguin/nile) para a Amazon.

## Como o Heronite baixa e atualiza os jogos?

Uma fila de downloads instala, atualiza, repara e desinstala seus jogos da Epic, GOG e Amazon. A mesma fila move e importa jogos. O Heronite pausa os downloads offline, tenta de novo os que falham e procura atualizações a cada 3 horas.

## Preciso fazer login na Steam?

Não. O Heronite traz suas bibliotecas da Steam sem login e as mantém sincronizadas, e quem abre os jogos continua sendo a Steam.

No Linux, o Heronite confere a instalação normal da Steam, o Flatpak e o Snap. No Windows, ele acha a Steam pelo registro.

![A página de um jogo na Coleção do Heronite mostrando uma linha Biblioteca com Steam, o status Jogando e um botão Jogar ao lado da capa.](../../../assets/screenshots/collection.webp)

*A página de um jogo da Steam, ao lado de jogos de outras lojas.*

## Como rodar um trainer com um jogo da Steam no Windows?

1. Abra as **Configurações do jogo**. Um jogo da Steam abre na aba **Inicialização**.
2. Em **Programas junto do jogo**, aperte **Adicionar programa** e escolha o trainer.
3. Jogue pelo Heronite.

O Heronite abre o trainer com o jogo e fecha quando o jogo termina. A mesma aba tem **Scripts** para rodar antes de o jogo abrir e depois que ele fecha. Um jogo aberto pela própria Steam não ganha nada disso.

## Dá para jogar Battle.net, EA, Ubisoft e Rockstar?

Sim, no Linux e no Windows. Faça login e instale os jogos no app da loja. Os jogos aparecem na sua biblioteca, abrem pelo app da loja e contam o tempo de jogo.

No Linux, o Heronite instala cada app de loja no seu próprio prefixo Wine (uma pasta separada do Windows), em `~/Games/Heronite/Prefixes/<loja>`, e roda o app com [Wine e Proton](/pt-br/features/wine-and-proton/). Passo a passo no Linux: [Battle.net](/pt-br/guides/battle-net-on-linux/) e [EA app, Ubisoft Connect e Rockstar](/pt-br/guides/ea-app-ubisoft-rockstar-on-linux/).

No Windows, o Heronite roda o app da loja como ele é, sem Wine. O botão de instalar do app, como **Instalar o Battle.net**, baixa o instalador oficial e o executa.

## Como adiciono jogos da Microsoft Store e do PC Game Pass?

No Windows, o Heronite adiciona esses jogos sozinho: os que o app Xbox ou a Microsoft Store instalou, comprados ou do PC Game Pass. Não tem login. O app Xbox continua instalando e atualizando os jogos, e o Heronite abre os jogos e conta o tempo de jogo.

A página **Xbox** em **Lojas** mostra se o app Xbox está instalado e lista os jogos encontrados. Aperte **Ler jogos agora** depois de instalar um. Desinstale esses jogos pelo app Xbox.

## Posso importar jogos do Heroic, Lutris, Bottles, Faugus ou Playnite?

Sim: Heroic, Lutris, Bottles e Faugus no Linux, e Playnite no Windows. Ligue um deles em **Configurações → Outros launchers**. O Heronite só lê os arquivos deles, então os dados deles ficam intactos, e na primeira abertura ele copia os dados do Heroic uma vez.

| Launcher | O que entra |
|---|---|
| Heroic (Linux) | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris (Linux) | Jogos da biblioteca dele |
| Bottles (Linux) | Programas de cada bottle |
| Faugus (Linux) | Jogos da lista dele |
| Playnite (Windows) | Jogos instalados que não estão ocultos, com capas e tempo de jogo |

Cada launcher do Linux pode ser a instalação normal ou o Flatpak. O Playnite continua abrindo os jogos dele.

O Heronite ignora os jogos da Steam deles, porque a importação da Steam já os tem. Veja a comparação em [Heronite vs Heroic](/pt-br/compare/heroic/), [vs Lutris](/pt-br/compare/lutris/) e [vs Playnite](/pt-br/compare/playnite/).

## Como adiciono um jogo que não é de uma loja?

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa à mão, ou aponte o Heronite para uma pasta para adicionar todos os jogos que ele achar nela. Isso vale para programas do Windows e, no Linux, para AppImages, scripts de início e programas nativos. Jogos da Epic, GOG e Amazon entram por **Instalar** ou **Importar** na página **Lojas**.

![A janela de adicionar jogo com campos para o título, a capa e o fundo, a plataforma definida como Windows, o prefixo Wine e a versão do Proton, e o executável a rodar.](../../../assets/screenshots/add-game.webp)

*A janela de adicionar jogo para um programa do Windows.*

Próximo: [baixe o Heronite](/pt-br/download/) e adicione a sua primeira loja.
