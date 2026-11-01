---
title: "Heronite vs Heroic Games Launcher: qual usar no Linux?"
description: "Heronite e Heroic usam legendary, gogdl e nile para Epic, GOG e Amazon. Veja as diferenças em Steam, emuladores e uso de memória, e como importar o Heroic."
eyebrow: Comparação
headline: "Heronite vs Heroic Games Launcher: *as mesmas ferramentas*, outro launcher"
lead: "O Heroic é o launcher de código aberto que muita gente no Linux usa para Epic, GOG e Amazon. O Heronite usa as mesmas ferramentas de loja, soma Steam e emuladores numa biblioteca só e pode importar os seus jogos do Heroic."
navLabel: Heronite vs Heroic
summary: "Heronite e Heroic usam legendary, gogdl e nile para Epic, GOG e Amazon. Veja onde eles diferem e como trocar."
order: 2
hero: ../../../assets/screenshots/console-home.webp
heroAlt: "O início do modo console do Heronite: SP Football Life 2026 grande sobre a arte do jogo, uma prateleira Continuar jogando com capas e dicas dos botões do controle na parte de baixo."
og: /og/heroic.jpg
updated: 2026-11-01
highlights:
  - title: As mesmas ferramentas de loja
    text: O Heronite usa legendary, gogdl e nile para Epic, GOG e Amazon, as mesmas ferramentas de código aberto do Heroic.
  - title: Steam e emuladores também
    text: Steam, clientes de loja no Linux, jogos emulados e seus próprios jogos dividem uma só Coleção.
  - title: Importa a sua configuração do Heroic
    text: O Heronite copia os dados do Heroic uma vez e só lê, então o Heroic continua funcionando como antes.
  - title: Sem navegador embutido
    text: Um app nativo em Rust com cerca de 190 MB de memória em repouso, em vez de um app Electron.
faq:
  - q: O Heronite importa a minha biblioteca do Heroic?
    a: Sim, no Linux. Na primeira vez que abre, se a pasta do Heroic existir, o Heronite copia os dados dela uma vez, e seus logins, jogos adicionados e configurações passam para ele. Ele também adiciona os jogos da Epic, GOG e Amazon que o Heroic instalou. Ele só lê os arquivos do Heroic e nunca grava neles.
  - q: Qual a diferença entre o Heronite e o Heroic?
    a: Os dois usam legendary, gogdl e nile para Epic, GOG e Amazon. O Heronite é um app nativo em Rust que também lê suas bibliotecas da Steam, roda emuladores e mantém um histórico de jogo detalhado. O Heroic é um app Electron que também roda no macOS e existe há mais tempo.
  - q: O Heronite é uma alternativa ao Heroic?
    a: É, se você quer Steam, Epic, GOG, Amazon e jogos emulados numa biblioteca só, no Linux ou no Windows. Se você usa macOS, ou só precisa dos recursos de loja do Heroic, o Heroic continua sendo uma boa escolha.
  - q: Vou perder a minha configuração do Heroic se eu testar o Heronite?
    a: Não. O Heronite copia os dados do Heroic uma vez e só lê. O Heroic continua funcionando como antes, então você pode usar os dois enquanto decide.
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

Heroic e Heronite são parentes próximos. Os dois são gratuitos, de código aberto (GPL-3.0) e construídos em torno das mesmas três ferramentas de loja: legendary para a Epic Games, gogdl para a GOG e nile para a Amazon Games. Se você gosta de como o Heroic instala jogos, a parte de lojas do Heronite vai parecer familiar.

**Resumindo:** escolha o Heroic se você usa macOS, ou quer o que ele acrescenta além das lojas. Escolha o Heronite se você quer Steam, emuladores e seus próprios jogos na mesma biblioteca, um app mais leve, ou o mesmo launcher no Linux e no Windows. Esta página está atualizada até novembro de 2026.

## Comparação rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux, Windows 10/11 e macOS 14 ou mais novo |
| Licença | GPL-3.0 | GPL-3.0 |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Electron, TypeScript e React |
| Epic, GOG, Amazon | Sim | Sim |
| Ferramentas de loja | legendary, gogdl, nile | legendary, gogdl, nile |
| Biblioteca da Steam | Sim, sem login | Não está entre as lojas que o README lista |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Só no Linux, o app de cada loja roda num prefixo Wine | Não estão entre as lojas que o README lista |
| Emulação | Sim, emuladores detectados e pastas de ROMs escaneadas | Não consta no README |
| Wine e Proton | Sim, com um Gerenciador do Wine | Sim, com um Gerenciador do Wine |
| Tempo de jogo | Sim, com estatísticas, diário e retrospectiva do ano | Tempo jogado na página de cada jogo |
| Modo controle / sofá | Sim, modo console com temas | Sim, um modo em tela cheia parecido com console desde abril de 2026 |
| Backups de saves | Backups com o Ludusavi depois de cada sessão | Sincronização de saves na nuvem |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Heroic vem do [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), do [site](https://heroicgameslauncher.com) e das [notas de versão](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases) dele.

## O que eles têm em comum

As ferramentas de loja são o coração dos dois. Como o Heronite usa os mesmos legendary, gogdl e nile, instalar, atualizar e reparar jogos da Epic, GOG e Amazon funciona de forma parecida, e seu login vai só para as lojas. Os dois também rodam jogos de Windows no Linux pelo Wine ou pelo Proton, com versões que você baixa e gerencia no app.

Os dois têm fila de downloads, arte de capa do SteamGridDB e um lugar para adicionar jogos que não vêm de uma loja.

## Onde o Heronite é diferente

### Uma biblioteca para todas as fontes

O README do Heroic lista Epic, GOG e Amazon Games como lojas dele. O Heronite começa por aí e vai além. Ele lê suas bibliotecas da Steam sem login e as mantém sincronizadas. Ele detecta emuladores e escaneia suas pastas de ROMs. No Linux, ele também roda os clientes da Battle.net, EA app, Ubisoft Connect e Rockstar Games em prefixos Wine próprios, e esses jogos entram na mesma [Coleção](/pt-br/features/game-library/).

### Um app nativo, não um navegador

O Heroic é feito em Electron, que embute um navegador Chromium no app. O Heronite é um processo nativo único em Rust, desenhado pela GPU. Ele usa cerca de 190 MB de memória em repouso (cerca de 95 MB quando fechado na bandeja), em torno de 0,1% de CPU, e mostra a biblioteca em cerca de 215 ms. A instalação tem 64 MB. Leia mais na página de [desempenho](/pt-br/features/performance/).

### Um histórico de jogo mais profundo

O Heronite registra cada sessão e transforma tudo em [estatísticas](/pt-br/features/play-time-tracking/): tempo por semana, mês e ano, uma meta anual de backlog, um diário para anotações ao lado das suas capturas de tela e uma retrospectiva do ano. O Heroic mostra o tempo jogado na página de cada jogo.

### Modo console que você pode redesenhar

Os dois launchers têm um modo de tela cheia pensado para controle. O do Heroic chegou na versão 2.21, em abril de 2026, e vem crescendo desde então. O [modo console](/pt-br/features/console-mode/) do Heronite tem oito layouts e sete temas embutidos, e você pode mudar cores, fontes, menus e páginas de jogo e depois compartilhar um tema como arquivo.

### Como organizar uma biblioteca grande

O Heroic deixa você adicionar apps que não são de lojas e separar jogos em categorias personalizadas. O Heronite dá mais peso à Coleção em si. Você pode agrupar por status, loja, gênero, série ou ano, salvar filtros como visões, como Jogando agora ou Pendentes, e editar muitos jogos de uma vez, com desfazer. Gêneros, empresas e séries podem ser renomeados e unificados na biblioteca inteira. A busca perdoa erros de digitação, e `Ctrl+K` abre uma paleta de comandos para qualquer jogo, página ou ação. Se você tem centenas de jogos, essas ferramentas poupam tempo.

### O mesmo launcher no Windows

O Heronite roda no Windows com Steam, Epic, GOG e Amazon, e traz os jogos já instalados pela Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games. O Heroic também roda no Windows.

## Onde o Heroic é mais forte

- **macOS.** O Heroic roda no macOS 14 ou mais novo, e roda jogos de Windows por lá com o Crossover. O Heronite não tem versão para macOS.
- **Wine, Proton e Steam Deck.** O site do Heroic destaca configurações automáticas do Wine e suporte ao Steam Deck, e ele tem um longo histórico de correções para rodar jogos da Epic e da GOG no Linux. O Heronite é o projeto mais novo.
- **Traduções.** O README do Heroic diz que ele está traduzido em quase 40 idiomas. O Heronite fala inglês, português (Brasil), espanhol e alemão.
- **Saves na nuvem.** O Heroic lista a sincronização de saves na nuvem como recurso. O Heronite faz backup dos saves localmente com o Ludusavi, uma ferramenta opcional.
- **Extras de loja.** As versões recentes do Heroic acrescentaram telas de ofertas e as conquistas da GOG na página do jogo. Ele também tem uma integração experimental com a ZOOM Platform, só para Linux quando foi adicionada, em janeiro de 2026.
- **Lançamentos regulares.** O Heroic lançou uma versão quase todo mês em 2026, o que ajuda quando uma loja muda alguma coisa.

## Quando escolher o Heroic

- Você usa macOS.
- Você quer principalmente Epic, GOG e Amazon, e um launcher focado nelas.
- Você quer sincronização de saves na nuvem ou a integração com a ZOOM Platform.
- Você precisa de um idioma que o Heronite ainda não tem.
- Sua configuração já funciona e você não precisa de Steam nem de emuladores no mesmo app.

## Quando escolher o Heronite

- Você quer Steam, Epic, GOG, Amazon, emuladores e seus próprios jogos numa biblioteca só.
- Você quer jogos da Battle.net, EA app, Ubisoft Connect e Rockstar na mesma lista, no Linux.
- Você prefere um app nativo, sem navegador embutido.
- Você gosta de estatísticas de jogo, diário e meta de backlog.
- Você quer o mesmo launcher no Linux e no Windows.

## Como migrar do Heroic

Você não precisa escolher antes de testar. No Linux, o Heronite leva a sua configuração do Heroic junto:

1. **Primeira vez que abre.** Se a pasta de dados do Heroic existir, o Heronite a copia uma vez. Seus logins das lojas, os jogos que você adicionou à mão com as configurações deles e as suas configurações passam para o Heronite.
2. **Jogos de loja instalados.** Os registros do Heroic dos jogos da Epic, GOG e Amazon que ele instalou são somados aos do Heronite, então esses jogos aparecem como instalados, nas mesmas pastas, assim que você entra na loja.
3. **Mantendo em dia.** O Heronite mantém a importação sincronizada e pega os jogos que você adicionar depois no Heroic. Funciona com a instalação normal do Heroic e com o Flatpak dele.
4. **Jogos da Steam.** Se o Heroic lista um jogo da Steam, o Heronite deixa a cargo da própria importação da Steam, então nada aparece duas vezes.

O Heronite só lê os arquivos do Heroic. Ele nunca grava neles, então o Heroic continua funcionando como antes e você pode voltar quando quiser. A importação existe só na versão para Linux.

> **Nota.** Uma chave do SteamGridDB importada do Heroic pode ter sido criptografada por ele. Se as capas não carregarem, cole a chave de novo em Configurações.

## Experimente

O Heronite é gratuito, sem conta, sem anúncios e sem telemetria. [Baixe](/pt-br/download/) e leia como funcionam [lojas e launchers](/pt-br/docs/stores-and-launchers/), ou siga os guias da [Epic](/pt-br/guides/epic-games-on-linux/), da [GOG](/pt-br/guides/gog-on-linux/) e da [Amazon](/pt-br/guides/amazon-games-on-linux/) no Linux.
