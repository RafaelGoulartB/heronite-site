---
title: "Alternativa ao Heroic: Heronite vs Heroic Games Launcher"
description: "Alternativa ao Heroic para Linux e Windows: compare Steam, emuladores e uso de memória, veja quando o Heroic vence e importe seus jogos do Heroic."
eyebrow: Comparação
headline: "Heronite vs Heroic: uma alternativa ao Heroic com Steam e emuladores"
lead: "O Heronite cobre Epic, GOG e Amazon como o Heroic e soma Steam, emuladores e os seus próprios jogos."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: onde eles diferem, quando o Heroic é melhor e como importar seus jogos do Heroic no Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "A paleta Ctrl+K do Heronite buscando “contr”: Control da Epic e CONTROL Ultimate Edition da Steam na mesma lista, com o tempo de jogo e ações para jogar, abrir as configurações ou a pasta do jogo."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: As mesmas ferramentas de loja
    text: Os dois usam legendary, gogdl e nile.
  - title: Steam e emuladores também
    text: Steam, jogos emulados e seus próprios jogos dividem uma biblioteca.
  - title: Importa a sua configuração do Heroic
    text: No Linux, seus logins das lojas e jogos adicionados passam para o Heronite.
  - title: Sem navegador embutido
    text: Um app nativo em Rust, com cerca de 190 MB de memória em repouso.
faq:
  - q: O Heronite importa a minha biblioteca do Heroic?
    a: "Sim, no Linux: seus logins, jogos adicionados e configurações passam para ele. [Veja os passos](#como-migrar-do-heroic-para-o-heronite)."
  - q: Qual a diferença entre o Heronite e o Heroic?
    a: O Heronite é um app nativo em Rust com Steam, emuladores e um histórico de jogo detalhado. O Heroic é um app Electron que roda no macOS e existe há mais tempo.
  - q: Devo usar o Heronite ou o Heroic no Linux?
    a: Use o Heroic se quer saves na nuvem ou joga só Epic, GOG e Amazon. Use o Heronite para Steam, emuladores e um launcher só no Linux e no Windows.
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**Resumindo:** escolha o Heroic se você usa macOS, ou quer saves na nuvem e um launcher focado em Epic, GOG e Amazon. Escolha o Heronite se você quer Steam, emuladores e seus próprios jogos numa biblioteca só, um app mais leve, ou o mesmo launcher no Linux e no Windows.

## Comparação rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux, Windows 10/11, macOS 14 ou mais novo |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Electron, TypeScript e React |
| Epic, GOG, Amazon | Sim | Sim |
| Biblioteca da Steam | Sim, sem login | Não consta |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Só no Linux, num prefixo Wine | Não consta |
| Emulação | Sim | Não consta |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Tempo jogado na página de cada jogo |
| Modo console | Sim, com temas | Sim, desde a versão 2.21 (abril de 2026) |
| Backups de saves | Ludusavi, depois de cada sessão | Sincronização de saves na nuvem |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Heroic vem do [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), do [site](https://heroicgameslauncher.com) e das [notas de versão](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases) dele, atualizados até novembro de 2026. "Não consta" quer dizer que o README não lista o recurso.

## O que o Heronite e o Heroic têm em comum?

Os dois usam as mesmas ferramentas de código aberto das lojas: legendary para a Epic Games, gogdl para a GOG e nile para a Amazon Games. Seu login vai só para as lojas.

Os dois são GPL-3.0 e rodam jogos do Windows no Linux pelo Wine ou pelo Proton, com um Gerenciador do Wine. Os dois têm fila de downloads, arte de capa do SteamGridDB e um lugar para jogos que não são de lojas.

## Qual escolher?

### Escolha o Heroic se…

- **Você usa macOS.** O Heroic roda no macOS 14 ou mais novo, e roda jogos do Windows por lá com o Crossover. O Heronite não tem versão para macOS.
- **Você quer saves na nuvem.** O Heroic lista a sincronização de saves na nuvem. O Heronite faz backup dos saves localmente com o Ludusavi, uma ferramenta opcional.
- **Você quer extras de loja.** As versões recentes do Heroic acrescentaram telas de ofertas e as conquistas da GOG na página do jogo, além de uma integração experimental com a ZOOM Platform (Linux, desde janeiro de 2026).
- **Você quer uma configuração de Wine e Steam Deck já testada.** O site do Heroic destaca configurações automáticas do Wine e suporte ao Steam Deck. O Heronite é o projeto mais novo; veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).
- **Você precisa de outro idioma.** O README do Heroic diz que ele está traduzido em quase 40 idiomas. O Heronite fala inglês, português (Brasil), espanhol e alemão.
- **Você quer lançamentos frequentes.** O Heroic lançou uma versão quase todo mês em 2026, o que ajuda quando uma loja muda alguma coisa.
- **O Heroic já atende você.** Você joga só Epic, GOG e Amazon e tudo funciona.

### Escolha o Heronite se…

- **Você quer todas as fontes numa biblioteca só.** O Heronite lê a Steam sem login, detecta emuladores e escaneia suas pastas de ROMs.
- **Você joga Battle.net, EA app, Ubisoft Connect ou Rockstar no Linux.** Cada cliente roda no seu próprio prefixo Wine, e os jogos entram na mesma lista.
- **Você quer um app mais leve.** O Heroic embute um navegador Chromium. O Heronite é um processo nativo em Rust, que usa cerca de 190 MB de memória em repouso e mostra a biblioteca em cerca de 215 ms ([desempenho](/pt-br/features/performance/)).
- **Você quer um histórico de jogo mais profundo.** O Heronite registra cada sessão: [estatísticas](/pt-br/features/play-time-tracking/) por semana, mês e ano, uma meta anual de backlog, um diário ao lado das capturas de tela e uma retrospectiva do ano.
- **Você quer um modo console que dá para redesenhar.** O [modo console](/pt-br/features/console-mode/) do Heronite tem oito layouts e sete temas que você pode editar e compartilhar como arquivo.
- **Você tem uma biblioteca grande.** Agrupe por status, loja, gênero, série ou ano e salve filtros como visões, como Jogando agora ou Pendentes; o Heroic oferece categorias personalizadas. Veja a [biblioteca de jogos](/pt-br/features/game-library/).
- **Você quer um launcher só no Linux e no Windows.** No Windows ele cuida de Steam, Epic, GOG e Amazon, e traz os jogos instalados pela Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games. O Heroic também roda no Windows.

## Como migrar do Heroic para o Heronite?

No Linux, o Heronite importa a sua configuração do Heroic. Ele só lê os arquivos do Heroic e nunca grava neles, então o Heroic continua funcionando e você pode usar os dois.

1. **Abra o Heronite.** Se `~/.config/heroic` existir, o Heronite copia os dados dele uma vez. Seus logins das lojas, os jogos que você adicionou à mão com as configurações deles e as suas configurações passam para o Heronite.
2. **Confira seus jogos de loja instalados.** O Heronite lê os registros do Heroic dos jogos da Epic, GOG e Amazon que ele instalou. Eles aparecem como instalados, nas mesmas pastas, assim que você entra na loja.

Depois da primeira abertura, o Heronite mantém a lista de jogos adicionados e instalados sincronizada com o Heroic. Funciona com a instalação normal do Heroic e com o Flatpak dele.

Se o Heroic lista um jogo da Steam, o Heronite deixa a cargo da própria importação da Steam, então nada aparece duas vezes.

> **Nota.** Você pode continuar adicionando jogos no Heroic. O Heronite os pega.

> **Nota.** Uma chave do SteamGridDB importada do Heroic pode ter sido criptografada por ele. Se as capas não carregarem, cole a chave de novo em Configurações.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Lojas e launchers](/pt-br/docs/stores-and-launchers/).
