---
title: "Alternativa ao Heroic: Heronite vs Heroic Games Launcher"
description: "Alternativa ao Heroic para Linux e Windows: compare Steam, emuladores e uso de memória, veja quando o Heroic vence e importe seus jogos do Heroic."
eyebrow: Comparação
headline: "Heronite vs Heroic Games Launcher"
lead: "O Heronite é uma alternativa ao Heroic que junta a Steam, emuladores e os apps das lojas Battle.net, EA, Ubisoft e Rockstar à sua biblioteca da Epic, GOG e Amazon. O Heroic também roda no macOS."
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
  - title: Seu histórico de jogo
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
  - title: Importa a sua configuração do Heroic
    text: No Linux, seus logins das lojas e jogos adicionados à mão passam para o Heronite.
  - title: Sem navegador embutido
    text: Um app nativo em Rust; o Heroic é feito em Electron.
faq:
  - q: Posso usar o Heronite e o Heroic ao mesmo tempo?
    a: Sim. O Heronite só lê os arquivos do Heroic, então o Heroic continua funcionando.
  - q: O meu login das lojas fica seguro no Heronite?
    a: Sim. Seus logins ficam no seu PC e vão só para as lojas. Você digita a senha na página de login da própria loja.
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

## Heronite vs Heroic: comparação de recursos

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux, Windows 10/11, macOS 14 ou mais novo |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Electron, TypeScript e React |
| Epic, GOG, Amazon | Sim | Sim |
| Biblioteca da Steam | Sim, sem login | Não consta |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Sim, pelo Wine no Linux | Não consta |
| Microsoft Store e PC Game Pass | Sim, no Windows | Não consta |
| Emulação | Sim | Não consta |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Tempo jogado na página de cada jogo |
| Modo console | Sim, com temas | Sim |
| Saves na nuvem | Epic e GOG, em beta | Sim |
| Backups de saves | Ludusavi, depois de cada sessão | Não consta |
| Mesma biblioteca em vários PCs | Sim, por uma pasta ou conta na nuvem | Não consta |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Heroic vem do [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), do [site](https://heroicgameslauncher.com) e das [notas de versão](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), atualizados até novembro de 2026. "Não consta" quer dizer que o README não lista o recurso.

## O que o Heronite e o Heroic têm em comum?

Os dois são GPL-3.0 e usam as mesmas ferramentas de código aberto, não oficiais, para as lojas: legendary para a Epic Games, gogdl para a GOG e nile para a Amazon Games. Os dois rodam jogos do Windows no Linux pelo Wine ou pelo Proton, com um Gerenciador do Wine. Os dois têm fila de downloads, arte de capa do SteamGridDB e um lugar para jogos que não são de lojas.

## Qual escolher?

### Escolha o Heroic se…

- **Você usa macOS.** O Heroic roda no macOS 14 ou mais novo, com jogos do Windows pelo Crossover.
- **Você quer extras de loja.** O Heroic tem telas de ofertas, as conquistas da GOG na página do jogo e suporte experimental à ZOOM Platform no Linux.
- **Você quer uma configuração de Wine e Steam Deck já testada.** O site do Heroic destaca configurações automáticas do Wine e suporte ao Steam Deck.
- **Você precisa de outro idioma.** O Heroic está traduzido em quase 40 idiomas; o Heronite, em inglês, português (Brasil), espanhol e alemão.
- **Você quer lançamentos frequentes.** O Heroic lança versões com frequência, o que ajuda quando uma loja muda alguma coisa.

### Escolha o Heronite se…

- **Você quer todas as fontes numa biblioteca só.** Steam sem login, emuladores, apps das lojas e, no Windows, jogos da Microsoft Store, agrupados por status, loja ou gênero ([lojas](/pt-br/features/stores/)).
- **Você quer um app nativo em Rust.** Sem navegador embutido, e cerca de 190 MB de RAM parado ([desempenho](/pt-br/features/performance/)).
- **Você quer um histórico de jogo mais completo.** O Heronite registra cada sessão e mostra [estatísticas](/pt-br/features/play-time-tracking/), uma meta anual de backlog, um diário e uma retrospectiva do ano.
- **Você quer um modo console que dá para personalizar.** O [modo console](/pt-br/features/console-mode/) tem oito layouts e sete temas que você pode editar e compartilhar como arquivo.
- **Você joga em vários PCs.** **Configurações → Nuvem** mantém uma biblioteca em cada um, como os dois sistemas de um dual boot ([saves e backups](/pt-br/features/saves-and-backups/)).

## Como migrar do Heroic para o Heronite?

No Linux, o Heronite importa a sua configuração do Heroic. Ele só lê os arquivos do Heroic, então o Heroic continua funcionando e você pode usar os dois.

1. **Abra o Heronite.** Se `~/.config/heroic` existir, o Heronite copia os dados dele uma vez: seus logins das lojas, as suas configurações e os jogos que você adicionou à mão, com as configurações deles.
2. **Ligue a importação do Heroic.** Em **Configurações → Outros launchers**, ligue **Trazer os jogos dele** embaixo do Heroic. Aí o Heronite mantém seus jogos adicionados e instalados sincronizados com a instalação normal do Heroic ou com o Flatpak dele.
3. **Confira seus jogos de loja instalados.** O Heronite lê os registros do Heroic dos jogos da Epic, GOG e Amazon que ele instalou. Eles aparecem como instalados, nas mesmas pastas, assim que você faz login na loja.

O Heronite ignora os jogos da Steam que o Heroic lista e os traz pela importação da Steam, então nada aparece duas vezes.

Se as capas não carregarem, cole a chave do SteamGridDB de novo em **Configurações → Metadados → Chave de API do SteamGridDB**. O Heroic pode ter criptografado a chave que o Heronite importou.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Lojas e launchers](/pt-br/docs/stores-and-launchers/).
