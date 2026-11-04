---
title: "Launcher de jogos para todas as lojas no Linux | Heronite"
description: "Todas as lojas em uma biblioteca no Linux e no Windows: entre na Epic, GOG e Amazon, leia a Steam sem login e importe jogos do Heroic ou Lutris."
eyebrow: Lojas e launchers
headline: "Um launcher de jogos para todas as lojas"
lead: "O Heronite é um launcher de jogos grátis para todas as lojas. Ele roda Steam, Epic Games, GOG e Amazon Games no Linux e no Windows, e mais quatro apps de loja no Linux."
navLabel: Lojas e launchers
summary: "Entre na Epic, GOG e Amazon, leia a Steam sem login, rode a Battle.net e outras no Linux e importe jogos de outros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "A Biblioteca do modo console do Heronite: uma grade de capas de jogos, de A Plague Tale, Alan Wake e Baldur's Gate 3 até Black Myth: Wukong, com os filtros Mostrar, Ordenar e Status acima e 207 jogos na lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam sem login
    text: O Heronite acha suas bibliotecas da Steam e as mantém sincronizadas.
  - title: Uma fila de downloads
    text: Entre em cada loja uma vez e gerencie todos os jogos em uma fila.
  - title: Mais quatro lojas no Linux
    text: Cada app de loja roda no seu próprio prefixo do Wine.
  - title: Importe de outros launchers
    text: Os jogos do Heroic, Lutris, Bottles e Faugus entram e ficam sincronizados.
faq:
  - q: Posso usar a Epic Games e a GOG no mesmo launcher?
    a: Sim. Entre em cada loja na página **Lojas**, e uma fila de downloads cuida das duas. Veja [Epic no Linux](/guides/epic-games-on-linux/) e [GOG no Linux](/guides/gog-on-linux/).
  - q: Preciso fazer login na Steam?
    a: Não. O Heronite lê suas bibliotecas da Steam sem login. Veja [como ele as encontra](#como-o-heronite-encontra-minha-biblioteca-da-steam).
  - q: Importar do Heroic ou do Lutris muda os dados deles?
    a: Não. Seus dados do Heroic e do Lutris não são alterados. Veja [a seção de importação](#posso-importar-jogos-do-heroic-lutris-bottles-ou-faugus).
  - q: A Battle.net, EA app, Ubisoft Connect e Rockstar funcionam no Windows?
    a: Não. No Windows, por enquanto use os apps dessas lojas. O Heronite os roda no Linux. Veja [Battle.net no Linux](/guides/battle-net-on-linux/) e [EA app, Ubisoft e Rockstar no Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## Quais lojas o Heronite suporta?

| Loja ou launcher | Linux | Windows | Como funciona |
|---|---|---|---|
| Steam | Sim | Sim | O Heronite lê suas bibliotecas, sem login |
| Epic Games | Sim | Sim | Entre e depois instale pelo Heronite |
| GOG | Sim | Sim | Entre e depois instale pelo Heronite |
| Amazon Games | Sim | Sim | Entre e depois instale pelo Heronite |
| Battle.net | Sim | Não, use o app da loja | Roda em um prefixo Wine próprio |
| EA app | Sim | Não, use o app da loja | Roda em um prefixo Wine próprio |
| Ubisoft Connect | Sim | Não, use o app da loja | Roda em um prefixo Wine próprio |
| Rockstar Games | Sim | Não, use o app da loja | Roda em um prefixo Wine próprio |

Jogos de emulador e programas que você adiciona à mão entram na mesma biblioteca. Veja a [biblioteca de jogos](/pt-br/features/game-library/) e a [emulação](/pt-br/features/emulation/).

## Como entro na Epic, GOG e Amazon?

1. Abra a página **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Entre em cada loja na página de login dela, mostrada em uma janela pequena.
3. Aperte **Instalar** ou **Importar** em um jogo.

Uma fila de downloads cuida de instalações, atualizações, reparos e desinstalações. Ela também move e importa jogos. O Heronite pausa os downloads offline, tenta de novo os que falham e verifica atualizações a cada 3 horas.

Seus logins ficam no seu PC e vão só para as lojas. Se a janela de login não abrir, use o **login pelo navegador** na página **Lojas**. Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/).

O Heronite baixa as ferramentas de código aberto que o Heroic usa: [legendary](https://github.com/derrod/legendary) para a Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para a GOG e [nile](https://github.com/imLinguin/nile) para a Amazon Games. Os passos de cada loja estão nos guias de [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/).

> **Dica.** No Windows, os jogos já instalados pela Epic Games Launcher, GOG Galaxy ou pelo app da Amazon Games entram sem precisar baixar de novo.

## Como o Heronite encontra minha biblioteca da Steam?

O Heronite procura a Steam nos lugares de costume. No Linux ele confere a instalação normal e as versões em Flatpak e Snap. No Windows ele encontra a Steam pelo registro.

Quem inicia os jogos continua sendo a Steam.

![A página de um jogo na Coleção do Heronite mostrando uma linha Biblioteca com Steam, o status Jogando e um botão Jogar ao lado da capa.](../../../assets/screenshots/collection.webp)

*A página de um jogo da Steam, ao lado de jogos de outras lojas.*

## Como rodar um trainer com um jogo da Steam no Windows?

O Heronite pode rodar seus scripts e programas, como trainers, junto com um jogo da Steam.

## Dá para rodar Battle.net, EA, Ubisoft e Rockstar no Linux?

Sim. O Heronite instala o app de cada loja em um prefixo Wine próprio, em `~/Games/Heronite/Prefixes/<loja>`. Entre e instale os jogos nesse app. Os jogos aparecem na sua biblioteca e iniciam pelo Heronite com [Wine e Proton](/pt-br/features/wine-and-proton/).

Passo a passo no Linux: [Battle.net](/pt-br/guides/battle-net-on-linux/) e [EA app, Ubisoft Connect e Rockstar](/pt-br/guides/ea-app-ubisoft-rockstar-on-linux/).

## Posso importar jogos do Heroic, Lutris, Bottles ou Faugus?

No Linux, sim. Cada origem pode ser a instalação normal ou o Flatpak. O Heronite só lê os arquivos deles e, na primeira abertura, copia os dados do Heroic uma vez.

| Launcher | O que entra |
|---|---|
| Heroic | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris | Jogos da biblioteca dele |
| Bottles | Programas de cada garrafa (bottle) |
| Faugus | Jogos da lista dele |

O Heronite ignora os jogos da Steam deles, porque a importação da Steam já os tem. Veja a comparação em [Heronite vs Heroic](/pt-br/compare/heroic/), [vs Lutris](/pt-br/compare/lutris/) e [vs Playnite](/pt-br/compare/playnite/).

## Como adiciono um jogo que não é de uma loja?

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa à mão, ou aponte o Heronite para uma pasta e adicione todos os jogos que ele achar nela. Isso vale para programas do Windows e, no Linux, para AppImages, scripts de início e programas nativos.

![A janela de adicionar jogo com campos para o título, a capa e o fundo, a plataforma definida como Windows, o prefixo Wine e a versão do Proton, e o executável a rodar.](../../../assets/screenshots/add-game.webp)

*Para jogos da Epic, GOG e Amazon, use **Instalar** ou **Importar** na página **Lojas**.*

Próximo: [baixe o Heronite](/pt-br/download/) e adicione a sua primeira loja.
