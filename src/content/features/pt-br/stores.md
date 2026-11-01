---
title: "Launcher de jogos para todas as lojas: Steam, Epic, GOG"
description: "Um launcher grátis para Steam, Epic, GOG e Amazon, e também Battle.net, EA, Ubisoft e Rockstar no Linux. Importe do Heroic, Lutris e Bottles. Linux e Windows."
eyebrow: Lojas e launchers
headline: "Todas as lojas em *um só launcher*"
lead: "Steam, Epic Games, GOG e Amazon Games em um lugar só, com Battle.net, EA app, Ubisoft Connect e Rockstar Games no Linux. Traga também os jogos do Heroic, Lutris, Bottles e Faugus."
navLabel: Lojas e launchers
summary: "Entre na Epic, GOG e Amazon, leia a Steam sem login, rode a Battle.net e outras no Linux e importe jogos de outros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "A Biblioteca do modo console do Heronite: uma grade de capas de jogos, de A Plague Tale, Alan Wake e Baldur's Gate 3 até Black Myth: Wukong, com os filtros Mostrar, Ordenar e Status acima e 207 jogos na lista."
og: /og/stores.jpg
updated: 2026-11-01
highlights:
  - title: Steam sem login
    text: O Heronite lê as suas bibliotecas da Steam sozinho e mantém tudo sincronizado.
  - title: Epic, GOG e Amazon
    text: Entre uma vez e depois instale, atualize, repare, mova e desinstale tudo em uma única fila de downloads.
  - title: Mais lojas no Linux
    text: Battle.net, EA app, Ubisoft Connect e Rockstar Games rodam cada uma no seu próprio prefixo do Wine.
  - title: Importe de outros launchers
    text: Os jogos do Heroic, Lutris, Bottles e Faugus entram e ficam sincronizados. O Heronite nunca escreve nos arquivos deles.
faq:
  - q: Existe um launcher de jogos para todas as lojas?
    a: O Heronite é um deles. Ele reúne Steam, Epic Games, GOG e Amazon Games em uma única Coleção, no Linux e no Windows. No Linux ele também roda os clientes da Battle.net, EA app, Ubisoft Connect e Rockstar Games. É grátis e de código aberto.
  - q: Posso usar a Epic Games e a GOG no mesmo launcher?
    a: Pode. Abra a página **Lojas**, entre em cada loja e todos os jogos que você tem aparecem, instalados ou não. Uma única fila de downloads cuida das instalações e atualizações das duas. Veja os guias de [Epic no Linux](/guides/epic-games-on-linux/) e de [GOG no Linux](/guides/gog-on-linux/).
  - q: Preciso fazer login na Steam?
    a: Não. O Heronite encontra as suas bibliotecas da Steam sozinho e as mantém sincronizadas. Quem inicia os jogos continua sendo a própria Steam.
  - q: Importar do Heroic ou do Lutris muda os dados deles?
    a: Não. O Heronite só lê os arquivos deles. Na primeira abertura ele copia os dados do Heroic uma vez, e o Heroic continua funcionando como antes. Os jogos da Steam listados por eles ficam por conta da importação da Steam, então nada aparece duas vezes.
  - q: A Battle.net, EA app, Ubisoft Connect e Rockstar funcionam no Windows?
    a: No Windows, por enquanto use os apps das próprias lojas. No Linux o Heronite roda esses clientes para você. Veja [Battle.net no Linux](/guides/battle-net-on-linux/) e [EA app, Ubisoft e Rockstar no Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

Os jogos que você tem estão espalhados por apps demais. A Steam guarda a maioria, a Epic dá um jogo grátis toda semana, a GOG vende clássicos sem DRM e a Amazon distribui títulos do Prime Gaming. O Heronite junta tudo em um launcher para Linux e Windows: você abre um app, escolhe o jogo e aperta jogar.

## Quais lojas o Heronite suporta?

| Loja ou launcher | Linux | Windows | Como funciona |
|---|---|---|---|
| Steam | Sim | Sim | As bibliotecas são lidas para você, sem login |
| Epic Games | Sim | Sim | Entre e depois instale pelo Heronite |
| GOG | Sim | Sim | Entre e depois instale pelo Heronite |
| Amazon Games | Sim | Sim | Entre e depois instale pelo Heronite |
| Battle.net | Sim | Use o app da loja | Roda em um prefixo Wine próprio |
| EA app | Sim | Use o app da loja | Roda em um prefixo Wine próprio |
| Ubisoft Connect | Sim | Use o app da loja | Roda em um prefixo Wine próprio |
| Rockstar Games | Sim | Use o app da loja | Roda em um prefixo Wine próprio |

Jogos de emulador, programas nativos do Linux e programas do Windows que você adiciona à mão entram na mesma lista. Veja a [biblioteca de jogos](/pt-br/features/game-library/) para saber como organizá-la, ou a página de [emulação](/pt-br/features/emulation/) para trazer suas ROMs.

Com tudo dentro, você pesquisa tudo de uma vez. Aperte <kbd>Ctrl</kbd> <kbd>K</kbd> para abrir a paleta de comandos e jogar qualquer jogo digitando parte do nome, não importa de qual loja ele veio.

## Como usar Epic, GOG e Amazon em um launcher só?

Abra a página **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e entre em cada loja. O Heronite passa a cuidar da biblioteca inteira. Uma única fila de downloads instala, atualiza, repara, move, importa e desinstala jogos. Os downloads pausam quando você fica offline, os que falham são tentados de novo e as atualizações são verificadas a cada 3 horas.

Por baixo dos panos o Heronite usa as mesmas ferramentas de código aberto do Heroic e baixa tudo sozinho:

- [legendary](https://github.com/derrod/legendary) para a Epic Games,
- [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para a GOG,
- [nile](https://github.com/imLinguin/nile) para a Amazon Games.

Seus logins ficam no seu PC e vão só para as lojas. Você digita a senha na página de login da própria loja, mostrada em uma janela pequena. Se essa janela não abrir, use o **login pelo navegador** na mesma página: entre no seu navegador normal e cole o endereço ou o código que ele mostrar no final.

> **Dica.** No Windows, os jogos já instalados pela Epic Games Launcher, GOG Galaxy ou pelo app da Amazon Games entram no Heronite sem precisar baixar de novo.

Os guias passo a passo cobrem cada loja: [Epic Games no Linux](/pt-br/guides/epic-games-on-linux/), [GOG no Linux](/pt-br/guides/gog-on-linux/) e [Amazon Games no Linux](/pt-br/guides/amazon-games-on-linux/).

## E a Steam?

A Steam não precisa de login. O Heronite procura por ela nos lugares de costume e mantém as suas bibliotecas sincronizadas. No Linux ele confere a instalação normal e também as versões em Flatpak e Snap. No Windows ele encontra a Steam pelo registro.

Quem inicia os jogos continua sendo a própria Steam. No Windows, o Heronite também pode rodar seus scripts e programas, como trainers, junto com um jogo da Steam.

![A página de um jogo na Coleção do Heronite mostrando uma linha Biblioteca com Steam, o status Jogando e um botão Jogar ao lado da capa.](../../../assets/screenshots/collection.webp)

*A página de cada jogo diz de onde ele veio. Este é um jogo da Steam, ao lado de jogos de outras lojas.*

## Dá para rodar Battle.net, EA, Ubisoft e Rockstar no Linux?

Dá. O Heronite instala o app de cada loja em um prefixo Wine próprio, em `~/Games/Heronite/Prefixes/<loja>`. Entre e instale os jogos nesse app como de costume. Eles aparecem na sua Coleção e iniciam por ela, e o Heronite cuida da parte de [Wine e Proton](/pt-br/features/wine-and-proton/).

Estes guias mostram cada uma: [Battle.net no Linux](/pt-br/guides/battle-net-on-linux/) e [EA app, Ubisoft Connect e Rockstar no Linux](/pt-br/guides/ea-app-ubisoft-rockstar-on-linux/).

## Posso importar jogos do Heroic, Lutris, Bottles ou Faugus?

No Linux, pode. O Heronite traz os jogos de outros launchers e os mantém sincronizados. Cada origem pode ser a instalação normal ou o Flatpak.

| Launcher | O que entra |
|---|---|
| Heroic | Jogos que você adicionou à mão e seus jogos instalados da Epic, GOG e Amazon |
| Lutris | Jogos da biblioteca dele |
| Bottles | Programas de cada garrafa (bottle) |
| Faugus | Jogos da lista dele |

O Heronite só lê os arquivos dos outros launchers, então você pode testar sem perder nada. Veja a comparação em [Heronite vs Heroic](/pt-br/compare/heroic/) e [Heronite vs Lutris](/pt-br/compare/lutris/). Se você vem do Windows, também há [Heronite vs Playnite](/pt-br/compare/playnite/).

## E os jogos que não vêm de nenhuma loja?

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> para adicionar um programa à mão, ou aponte o Heronite para uma pasta e adicione de uma vez todos os jogos que ela tiver. Isso vale para programas do Windows e, no Linux, também para AppImages, scripts de início e programas nativos. É útil para um HD cheio de instalações sem DRM.

![A janela de adicionar jogo com campos para o título, a capa e o fundo, a plataforma definida como Windows, o prefixo Wine e a versão do Proton, e o executável a rodar.](../../../assets/screenshots/add-game.webp)

*Adicionando um jogo à mão. Para jogos da Epic, GOG e Amazon, entre na página Lojas e use Instalar ou Importar.*

## Por que usar um launcher só para todas as lojas?

- **Um lugar só para procurar.** Você para de perguntar qual app tem aquele jogo.
- **Um histórico de jogo só.** Cada sessão é registrada do mesmo jeito, seja qual for a loja. Veja [rastreamento de tempo de jogo](/pt-br/features/play-time-tracking/).
- **Um conjunto de backups.** Seus saves ficam em um lugar só. Veja [saves e backups](/pt-br/features/saves-and-backups/).
- **Um app leve.** É um programa nativo em Rust, e não um navegador numa caixa. Veja [desempenho](/pt-br/features/performance/).

## Leia a referência completa

Cada passo de login, ferramenta e pasta está na página de documentação [Lojas e launchers](/pt-br/docs/stores-and-launchers/). Se uma janela de login não abrir, veja [Solução de problemas](/pt-br/docs/troubleshooting/). Quando estiver pronto, [baixe o Heronite](/pt-br/download/) e adicione a sua primeira loja em um minuto.
