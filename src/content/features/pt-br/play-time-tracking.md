---
title: "Rastrear tempo de jogo e estatísticas no PC | Heronite"
description: "Rastreie o tempo de jogo no PC com estatísticas por semana, mês e ano, meta anual de backlog e retrospectiva do ano de jogos. Para Linux e Windows."
eyebrow: Rastreamento de tempo de jogo
headline: "Rastreie o tempo de jogo, as estatísticas e a retrospectiva do ano"
lead: "O Heronite é um contador de tempo de jogo para Linux e Windows, com estatísticas por semana, mês e ano, uma meta de backlog e a retrospectiva do ano."
navLabel: Tempo de jogo
summary: "Cada sessão registrada, estatísticas por semana, mês e ano, uma meta anual de backlog e uma retrospectiva do ano para compartilhar."
order: 6
hero: ../../../assets/screenshots/statistics.webp
heroAlt: "A Visão geral das Estatísticas do Heronite em outubro de 2026: 32h 56m de tempo jogado, uma sequência de 16 dias e 61 sessões, cartões de Jornadas, Meta de 2026, Descobertas e Álbum, e um gráfico colorido dia a dia das horas por jogo."
og: /og/play-time-tracking.jpg
updated: 2026-11-04
highlights:
  - title: Cada sessão registrada
    text: Nada para configurar e nenhuma conta para criar.
  - title: Semana, mês, ano
    text: Tempo total, sequências e um gráfico dia a dia de cada período.
  - title: Meta anual de backlog
    text: Defina quantos jogos zerar neste ano e acompanhe seu ritmo.
  - title: A retrospectiva do seu ano
    text: Stories em tela cheia do seu ano, com um cartão para compartilhar.
faq:
  - q: Como rastrear o tempo de jogo dos jogos de PC?
    a: Inicie seus jogos pelo Heronite. As sessões aparecem em **Estatísticas** (`Ctrl+6`) por semana, mês, ano e todo o período, para todas as lojas.
  - q: Dá para ter uma retrospectiva do ano de jogos, tipo o Wrapped?
    a: Sim. Digite "Retrospectiva do ano" na paleta de comandos (`Ctrl+K`). Veja [os stories](#como-abro-a-retrospectiva-do-meu-ano-de-jogos).
  - q: O Heronite serve como organizador de backlog?
    a: Sim. Defina uma meta anual e marque os jogos como Planejo jogar, Jogando, Zerado ou Abandonado. Veja [a aba Pendentes](#como-defino-uma-meta-anual-de-backlog).
  - q: O meu histórico de jogo é enviado para algum lugar?
    a: Não. O Heronite salva as sessões como arquivos JSON simples na pasta de dados, no seu PC. Veja [Arquivos e pastas](/docs/files-and-folders/).
  - q: O Heronite importa capturas de tela de outras ferramentas?
    a: Sim. O Heronite lê uma pasta com uma subpasta por jogo, como as capturas da Xbox Game Bar, e as associa aos jogos pelo nome.
related:
  - /features/game-library/
  - /features/saves-and-backups/
  - /features/console-mode/
---

O Heronite registra uma sessão cada vez que você inicia um jogo por ele. O tempo de jogo aparece embaixo de cada capa, nos detalhes do jogo e na linha do tempo dele, para todos os jogos da sua [biblioteca](/pt-br/features/game-library/).

O Heronite salva tudo no seu PC como arquivos JSON simples, sem telemetria. Para fazer backup, veja [saves e backups](/pt-br/features/saves-and-backups/).

## Onde vejo minhas estatísticas de jogo?

Abra **Estatísticas** com <kbd>Ctrl</kbd> <kbd>6</kbd>. Escolha **Semana**, **Mês**, **Ano** ou **Todo o período** no topo e use as setas para mudar de período. A aba **Visão geral** mostra:

- o tempo total jogado, comparado com o período anterior,
- dias jogados, a sua sequência de jogo e o número de sessões,
- o seu dia mais cheio e seus jogos mais jogados,
- um **gráfico dia a dia** em que cada cor é um jogo diferente.

Mais quatro abas ficam ao lado dela:

- **Jornadas** mostra seus jogos ao longo do tempo e quais você jogou ao mesmo tempo.
- **Pendentes** acompanha a sua meta e os jogos que você zerou.
- **Descobertas** aponta coisas como voltar a um jogo antigo depois de meses longe.
- **Álbum** reúne as capturas de tela que você tirou.

O modo console mostra o tempo de jogo na página de cada jogo. Veja [modo console](/pt-br/features/console-mode/).

## Como defino uma meta anual de backlog?

Abra a aba **Pendentes** e defina uma meta para o ano com os botões de menos e de mais. Um anel de progresso mostra quantos jogos você zerou, se está no caminho e que ritmo precisa ter.

![A aba Pendentes do Heronite em 2026: 9 jogos zerados, um anel mostrando 9 de uma meta de 12, uma linha do tempo de jogos zerados e abandonados ao longo dos meses e uma barra com todos os status da Coleção inteira.](../../../assets/screenshots/stats-backlog.webp)

*A aba Pendentes: um anel da meta, uma linha do tempo dos jogos zerados e uma barra com todos os status.*

Abaixo do anel você encontra:

- uma linha do tempo do ano, com jogos zerados acima da linha e abandonados abaixo,
- as horas que você colocou nos jogos que zerou e nos que abandonou,
- quantos dias você leva da primeira sessão até zerar (a mediana),
- a sua fila de Planejo jogar e quanto tempo ela levaria no seu ritmo habitual.

O Heronite compara as suas horas com o **[How Long To Beat](https://howlongtobeat.com)**.

## Como abro a retrospectiva do meu ano de jogos?

Abra o banner da página **Estatísticas**, ou aperte <kbd>Ctrl</kbd> <kbd>K</kbd> e digite "Retrospectiva do ano". O Heronite mostra o seu ano em **sete stories de tela cheia**, no fim do ano ou a qualquer momento antes.

![O primeiro story da retrospectiva do ano, Seu 2026 em jogos, com o número de dias, jogos e sessões ao lado de um mural de capas de jogos.](../../../assets/screenshots/year-in-review.webp)

*O primeiro story, sobre um mural de capas.*

Os stories mostram o seu mês mais cheio, a maior sequência, a maior pausa e o jogo do ano. Os últimos mostram quando você costuma jogar e depois um encerramento.

![O último story da retrospectiva do ano, Fim de papo, com o número de capturas de tela tiradas, a lista de jogos zerados e um cartão para compartilhar com o total de horas e os três jogos mais jogados.](../../../assets/screenshots/year-in-review-wrap.webp)

*O último story termina com um cartão do seu ano, pronto para compartilhar.*

**Copiar resumo** copia um texto curto do seu ano para postar onde quiser.

## Como adiciono anotações e capturas de tela ao meu histórico de jogo?

Cada jogo tem um **diário** para anotações, como onde você parou. Ele fica na mesma linha do tempo das suas sessões.

Para capturas de tela, aperte <kbd>F10</kbd> durante o jogo. O Heronite associa a captura ao jogo, e você pode mudar a tecla em **Configurações → Capturas de tela**. A aba **Álbum** e a página de cada jogo mostram o que você capturou.

Próximo: [baixe o Heronite](/pt-br/download/).
