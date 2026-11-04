---
title: "Launcher e biblioteca de jogos para Linux | Heronite"
description: "Gerencie todos os jogos de PC numa biblioteca no Linux e no Windows. Agrupe, filtre e edite em lote jogos da Steam, Epic, GOG, Amazon e emuladores."
eyebrow: Biblioteca de jogos
headline: "Um gerenciador de biblioteca de jogos para Linux e Windows"
lead: "O Heronite é um launcher de jogos e gerenciador de biblioteca para Linux e Windows. A Coleção reúne todas as lojas, emuladores e jogos avulsos em um só lugar."
navLabel: Biblioteca de jogos
summary: "Uma Coleção para todas as lojas, emuladores e jogos avulsos, com presets, grupos, edição em lote e paleta de comandos."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite: capas de jogos agrupadas em Jogando e Em andamento com o tempo de jogo embaixo de cada uma, e ELDEN RING aberto com capa, botão Jogar, detalhes e uma linha do tempo das sessões de jogo."
og: /og/game-library.jpg
updated: 2026-11-04
highlights:
  - title: Agrupe do seu jeito
    text: Por status, loja, gênero ou série, em lista ou em grade.
  - title: Presets salvos
    text: Guarde filtros e ordenações como Jogando agora, Pendentes ou Finalizados.
  - title: Ache tudo rápido
    text: A busca perdoa erros de digitação, e Ctrl+K abre qualquer jogo, página ou ação.
  - title: Um diário para cada jogo
    text: Escreva anotações na mesma linha do tempo das suas sessões de jogo.
faq:
  - q: Posso usar o Heronite no Steam Deck?
    a: Sim. O Heronite roda no SteamOS como AppImage. O [guia do Steam Deck](/guides/steam-deck/) mostra a configuração.
  - q: Importar do Heroic ou do Lutris altera os arquivos deles?
    a: Não. O Heronite só lê os arquivos deles e nunca escreve neles.
  - q: O Heronite acha capas para jogos de emulador?
    a: Sim. Todo jogo adicionado de uma pasta de ROMs recebe arte. Uma chave gratuita do SteamGridDB acrescenta capas da comunidade.
  - q: Dá para desfazer uma edição em lote?
    a: Sim. Aperte `Ctrl+Z` para desfazer a última mudança.
related:
  - /features/stores/
  - /features/play-time-tracking/
  - /docs/getting-started/
---

## Como reunir todos os meus jogos em uma Coleção?

- **Steam:** o Heronite traz suas bibliotecas da [Steam](/pt-br/features/stores/) sem login.
- **Epic Games, GOG e Amazon Games:** faça login na página **Lojas** e a biblioteca inteira entra, instalada ou não.
- **Battle.net, EA app, Ubisoft Connect e Rockstar Games:** os jogos que você instala em cada app da loja aparecem. No Linux, o app da loja roda no seu próprio prefixo Wine (uma pasta separada do Windows).
- **Microsoft Store e PC Game Pass (Windows):** os jogos que o app Xbox instalou entram sem login.
- **Emuladores:** o Heronite [detecta](/pt-br/features/emulation/) os emuladores e escaneia suas pastas de ROMs.
- **Outros launchers:** os jogos do Heroic, Lutris, Bottles e Faugus no Linux, e os do Playnite no Windows, entram e ficam sincronizados.

## Como adicionar um jogo que não é de uma loja?

Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> (ou **Adicionar um jogo**) para adicionar:

- Um programa do Windows (`.exe`), que no Linux roda com [Wine ou Proton](/pt-br/features/wine-and-proton/)
- Um programa nativo do Linux, um AppImage ou um script de início
- Um jogo de navegador, pelo endereço dele
- Uma ROM, ou uma pasta inteira de ROMs

Para adicionar vários jogos de uma vez, aponte o Heronite para uma pasta.

![A janela de adicionar jogo com campos para o título, a arte quadrada e o fundo, a plataforma, o prefixo Wine e a versão do Proton, e o programa a executar.](../../../assets/screenshots/add-game.webp)

*Adicionando um jogo do Windows no Linux.*

## Como agrupar, filtrar e ordenar meus jogos?

O **Foco** é uma lista com um painel de detalhes: capa, capturas de tela, descrição e uma linha do tempo das sessões de jogo. A **grade** mostra só as capas.

Nos dois modos, agrupe os jogos por:

- Status, como Jogando, Em andamento, Planejo jogar ou Finalizado
- Loja
- Gênero
- Série
- Ano de lançamento ou outro campo

Salve filtros e ordenações como **presets**, como *Jogando agora*, *Pendentes*, *Finalizados* ou *Favoritos*.

## Como pesquisar na Coleção?

Comece a digitar em qualquer lugar da Coleção. A busca perdoa pequenos erros de digitação, e <kbd>Enter</kbd> joga ou instala o primeiro resultado.

A **paleta de comandos** (<kbd>Ctrl</kbd> <kbd>K</kbd>) abre qualquer página, executa qualquer ação e inicia qualquer jogo por parte do nome. Aperte <kbd>→</kbd> sobre um jogo para ver as ações dele, como abrir as configurações ou a pasta de instalação.

![A paleta de comandos buscando "contr", listando Control e outros jogos parecidos, com ações para jogar Control, abrir as configurações ou a pasta dele.](../../../assets/screenshots/command-palette.webp)

*Buscando "contr" na paleta de comandos.*

## Como editar vários jogos de uma vez?

1. Selecione os jogos com <kbd>Espaço</kbd>, <kbd>Shift</kbd> + setas ou <kbd>Ctrl</kbd> <kbd>A</kbd>.
2. Aperte <kbd>F3</kbd>.
3. Mude o status, os gêneros, as séries, as empresas e mais.

<kbd>Ctrl</kbd> <kbd>Z</kbd> desfaz a mudança. Você pode renomear e unir gêneros, empresas e séries, e assim *RPG* e *Role-playing (RPG)* viram um só.

## De onde vêm as capas e os detalhes dos jogos?

Capas, fundos e logos vêm das lojas e dos metadados da Steam e do Lutris. As descrições e as datas de lançamento também. Duas chaves gratuitas e opcionais acrescentam mais:

- [SteamGridDB](https://www.steamgriddb.com) para capas da comunidade, boas para jogos de emulador e sem DRM
- [IGDB](https://www.igdb.com) para descrições, gêneros e séries

Cada jogo mostra tempos do **How Long To Beat**, notas do **ProtonDB** no Linux, **status do anti-cheat** do Are We Anti-Cheat Yet? e **conquistas** da Steam e do RetroAchievements. Adicione as chaves em **Configurações → Metadados**; [Metadados e imagens](/pt-br/docs/metadata-and-art/) mostra o passo a passo.

## Posso fazer anotações sobre um jogo?

Sim. Cada jogo tem um **diário** para anotações, como onde você parou ou o que achou de um final. Ele fica na mesma linha do tempo das suas [sessões de jogo](/pt-br/features/play-time-tracking/) e das capturas de tela que você fez.
