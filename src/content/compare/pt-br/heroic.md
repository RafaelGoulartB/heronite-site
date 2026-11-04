---
title: "Alternativa ao Heroic: Heronite vs Heroic Games Launcher"
description: "Alternativa ao Heroic para Linux e Windows: compare Steam, emuladores e uso de memória, veja quando o Heroic vence e importe seus jogos do Heroic."
eyebrow: Comparação
headline: "Heronite vs Heroic Games Launcher"
lead: "O Heronite é uma alternativa ao Heroic: os dois instalam jogos da Epic, GOG e Amazon no Linux e no Windows."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: onde eles diferem, quando o Heroic é melhor e como importar seus jogos do Heroic no Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "A paleta Ctrl+K do Heronite buscando “contr”: Control da Epic e CONTROL Ultimate Edition da Steam na mesma lista, com o tempo de jogo e ações para jogar, abrir as configurações ou a pasta do jogo."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: As mesmas ferramentas de loja
    text: Os dois fazem login e baixam pelas mesmas ferramentas de código aberto.
  - title: Steam e emuladores também
    text: Steam, jogos de emulador e seus próprios jogos dividem uma biblioteca.
  - title: Importa a sua configuração do Heroic
    text: No Linux, seus logins das lojas e jogos adicionados à mão passam para o Heronite.
  - title: Sem navegador embutido
    text: Um app nativo em Rust; o Heroic é feito em Electron.
faq:
  - q: Qual a diferença entre o Heronite e o Heroic?
    a: O Heronite é um app nativo em Rust com Steam e emuladores na biblioteca. O Heroic é um app Electron que também roda no macOS.
  - q: O meu login das lojas fica seguro no Heronite?
    a: Sim. Seus logins ficam no seu PC e vão só para as lojas. Você digita a senha na página de login da própria loja.
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**Resumindo:** escolha o Heroic se você usa macOS ou quer um launcher focado em Epic, GOG e Amazon. Escolha o Heronite se você quer Steam, emuladores e seus próprios jogos numa biblioteca só, ou um app mais leve.

## Comparação rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux, Windows 10/11, macOS 14 ou mais novo |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Electron, TypeScript e React |
| Epic, GOG, Amazon | Sim | Sim |
| Biblioteca da Steam | Sim, sem login | Não consta |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Sim, num prefixo Wine no Linux | Não consta |
| Microsoft Store e PC Game Pass | Sim, no Windows | Não consta |
| Emulação | Sim | Não consta |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Tempo jogado na página de cada jogo |
| Modo console | Sim, com temas | Sim |
| Saves na nuvem | Epic e GOG, em beta | Sim |
| Backups de saves | Ludusavi, depois de cada sessão | Não consta |
| Mesma biblioteca em vários PCs | Sim, por uma pasta ou conta na nuvem | Não consta |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Heroic vem do [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), do [site](https://heroicgameslauncher.com) e das [notas de versão](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases) dele, atualizados até novembro de 2026. "Não consta" quer dizer que o README não lista o recurso. O Heroic ganhou o modo console na versão 2.21 (abril de 2026) e o suporte à ZOOM Platform em janeiro de 2026, e lançou versão quase todo mês em 2026.

## O que o Heronite e o Heroic têm em comum?

Os dois usam as mesmas ferramentas de código aberto das lojas: legendary para a Epic Games, gogdl para a GOG e nile para a Amazon Games.

Os dois são GPL-3.0 e rodam jogos do Windows no Linux pelo Wine ou pelo Proton, com um Gerenciador do Wine. Os dois têm fila de downloads, arte de capa do SteamGridDB e um lugar para jogos que não são de lojas.

## Qual escolher?

### Escolha o Heroic se…

- **Você usa macOS.** O Heroic roda no macOS 14 ou mais novo, e roda jogos do Windows por lá com o Crossover. O Heronite não tem versão para macOS.
- **Você quer extras de loja.** As versões recentes do Heroic trouxeram telas de ofertas, as conquistas da GOG na página do jogo e suporte experimental à ZOOM Platform no Linux.
- **Você quer uma configuração de Wine e Steam Deck já testada.** O site do Heroic destaca configurações automáticas do Wine e suporte ao Steam Deck. O Heronite é o projeto mais novo.
- **Você precisa de outro idioma.** O README do Heroic diz que ele está traduzido em quase 40 idiomas. O Heronite fala inglês, português (Brasil), espanhol e alemão.
- **Você quer lançamentos frequentes.** O Heroic lança versões com frequência, o que ajuda quando uma loja muda alguma coisa.

### Escolha o Heronite se…

- **Você quer todas as fontes numa biblioteca só.** O Heronite traz a Steam sem login, detecta emuladores e escaneia suas pastas de ROMs.
- **Você joga Battle.net, EA app, Ubisoft Connect ou Rockstar.** Os jogos deles entram na mesma lista, no Linux e no Windows. No Linux, cada app de loja roda no seu próprio prefixo Wine (uma pasta separada do Windows).
- **Você quer um app mais leve.** O Heronite usa cerca de 190 MB de RAM parado e mostra a biblioteca em cerca de 215 ms ([desempenho](/pt-br/features/performance/)).
- **Você quer um histórico de jogo mais completo.** O Heronite registra cada sessão: [estatísticas](/pt-br/features/play-time-tracking/) por semana, mês e ano, uma meta anual de backlog, um diário ao lado das capturas de tela e uma retrospectiva do ano.
- **Você quer um modo console que dá para personalizar.** O [modo console](/pt-br/features/console-mode/) do Heronite tem oito layouts e sete temas que você pode editar e compartilhar como arquivo.
- **Você tem uma biblioteca grande.** Agrupe por status, loja, gênero, série ou ano, e salve filtros como presets, como Jogando agora ou Pendentes. Veja a [biblioteca de jogos](/pt-br/features/game-library/).
- **Você quer a Steam no mesmo launcher no Windows.** No Windows, o Heronite cuida dos jogos da Steam e da Microsoft Store ao lado da Epic, GOG e Amazon. Ele pega os jogos já instalados pelo Epic Games Launcher, pelo GOG Galaxy ou pelo app da Amazon Games.
- **Você joga em vários PCs.** **Configurações → Nuvem** mantém uma biblioteca em cada um, como o Linux e o Windows de um dual boot ([saves e backups](/pt-br/features/saves-and-backups/)).

## Como migrar do Heroic para o Heronite?

No Linux, o Heronite importa a sua configuração do Heroic. Ele só lê os arquivos do Heroic, então o Heroic continua funcionando e você pode usar os dois.

1. **Abra o Heronite.** Se `~/.config/heroic` existir, o Heronite copia os dados dele uma vez. Seus logins das lojas, os jogos que você adicionou à mão com as configurações deles e as suas configurações passam para o Heronite.
2. **Ligue a importação do Heroic.** Em **Configurações → Outros launchers**, ligue **Trazer os jogos dele** embaixo do Heroic. Aí o Heronite mantém seus jogos adicionados e instalados sincronizados com a instalação normal do Heroic ou com o Flatpak dele.
3. **Confira seus jogos de loja instalados.** O Heronite lê os registros do Heroic dos jogos da Epic, GOG e Amazon que ele instalou. Eles aparecem como instalados, nas mesmas pastas, assim que você faz login na loja.

O Heronite ignora os jogos da Steam que o Heroic lista e os traz pela importação da Steam, então nada aparece duas vezes.

> **Nota.** O Heroic pode ter criptografado a chave do SteamGridDB que o Heronite importou. Se as capas não carregarem, cole a chave de novo em **Configurações → Metadados → Chave de API do SteamGridDB**.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Lojas e launchers](/pt-br/docs/stores-and-launchers/).
