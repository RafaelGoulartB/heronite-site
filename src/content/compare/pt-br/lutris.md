---
title: "Alternativa ao Lutris para Linux: Heronite vs Lutris"
description: "Alternativa ao Lutris para Linux e Windows. Compare scripts de instalação, lojas, emuladores e histórico de jogo, e veja como trazer seus jogos do Lutris."
eyebrow: Comparação
headline: "Heronite vs Lutris"
lead: "O Heronite é uma alternativa ao Lutris pensada para lojas: ele instala seus jogos da Epic, GOG e Amazon e também roda no Windows. O Lutris se apoia em scripts de instalação da comunidade e em runners para muitos sistemas."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: scripts de instalação, runners, lojas, emulação e histórico de jogo, e como importar seus jogos do Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite listando Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek, com uma tabela de versões do Proton-CachyOS, datas de lançamento, tamanhos e botões Instalar."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Importa seus jogos do Lutris
    text: No Linux, os jogos da biblioteca do Lutris passam para o Heronite e ficam sincronizados.
  - title: Sem cadastro
    text: O Heronite funciona sem nenhuma conta própria.
  - title: Seu histórico de jogo
    text: Cada sessão alimenta estatísticas, diário e retrospectiva do ano.
  - title: Backup de saves
    text: O Ludusavi faz backup dos saves de um jogo depois de cada sessão.
faq:
  - q: O Heronite tem scripts de instalação como o Lutris?
    a: Sim. O Heronite instala um jogo a partir de um arquivo de script de instalação YAML que você escolhe e depois o adiciona à sua biblioteca. O Lutris tem a biblioteca de scripts da comunidade no lutris.net.
  - q: O Heronite funciona no Steam Deck?
    a: Sim. Ele roda como AppImage no Modo Desktop do SteamOS, e no Modo Jogo como jogo não Steam. Veja o [guia do Steam Deck](/guides/steam-deck/).
  - q: "Heroic vs Lutris: qual devo usar?"
    a: O Heroic é focado em Epic, GOG e Amazon. O Lutris cobre mais sistemas, runners e scripts de instalação. Veja [Heronite vs Heroic](/compare/heroic/).
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

## Heronite vs Lutris: comparação de recursos

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux e Windows 10/11 | Linux |
| Feito com | Rust, renderizado pela GPU, sem navegador embutido | Python |
| Como os jogos são configurados | Pela loja, à mão ou por um script de instalação YAML | Scripts de instalação, ou configuração manual |
| Biblioteca da Steam | Sim, sem login | Sim |
| Epic, GOG, Amazon | Sim, com legendary, gogdl e nile | Sim |
| Battle.net, EA app | Sim, pelo Wine no Linux | Sim |
| Emulação | Emuladores detectados, ROMs escaneadas, save states | Runners para muitos emuladores e engines |
| Wine e Proton | Sim, com um Gerenciador do Wine | Sim, GE-Proton pelo umu por padrão |
| Tempo de jogo | Estatísticas, diário, retrospectiva do ano | Sim, com um editor de tempo de jogo |
| Saves na nuvem | Epic e GOG, em beta | Não consta |
| Conta online | Não precisa | Conta opcional no lutris.net |
| Importar do outro launcher | Sim, no Linux | Não se aplica |

A coluna do Lutris vem do [lutris.net](https://lutris.net), do [repositório do Lutris](https://github.com/lutris/lutris) e das [notas de versão](https://github.com/lutris/lutris/releases) dele, atualizados até novembro de 2026. "Não consta" quer dizer que o README do Lutris não lista o recurso.

## O que o Heronite e o Lutris têm em comum?

Os dois são launchers gratuitos e de código aberto (GPL-3.0). Os dois rodam jogos do Windows pelo Wine ou pelo Proton, conectam a várias lojas, registram o tempo de jogo e rodam emuladores.

## Qual escolher?

### Escolha o Lutris se…

- **Você depende de scripts de instalação da comunidade.** Os instaladores do Lutris são scripts YAML no lutris.net, e um link `lutris:` roda um pela linha de comando.
- **Você quer um runner para um sistema antigo ou uma engine.** O site do Lutris cita Wine, MAME, Dolphin, RetroArch e ScummVM, "e muito mais".
- **Você gosta de uma interface só para muitos runners.** Cada runner tem suas próprias configurações.
- **Você quer sincronizar sua biblioteca com uma conta.** O Lutris oferece uma conta opcional no lutris.net.

### Escolha o Heronite se…

- **Você joga principalmente por lojas.** Faça login na Epic Games, GOG e Amazon Games uma vez, e todos os jogos que você tem lá aparecem, instalados ou não ([lojas](/pt-br/features/stores/)).
- **Você quer Wine ou Proton definido por jogo.** Escolha uma versão, um prefixo Wine (uma pasta que funciona como um Windows só daquele jogo) e opções como DXVK ou gamescope ([Wine e Proton](/pt-br/features/wine-and-proton/)).
- **Você quer um app nativo em Rust.** Sem navegador embutido, e cerca de 190 MB de RAM parado ([desempenho](/pt-br/features/performance/)).
- **Você quer um histórico de jogo.** O Heronite registra cada sessão e mostra [estatísticas](/pt-br/features/play-time-tracking/), um diário e uma retrospectiva do ano.
- **Você joga na TV ou com controle.** O [modo console](/pt-br/features/console-mode/) tem oito layouts e sete temas que você pode editar e compartilhar.
- **Você quer o mesmo launcher no Windows.** **Configurações → Nuvem** mantém uma biblioteca só nos dois sistemas de um dual boot ([saves e backups](/pt-br/features/saves-and-backups/)).

![A Coleção do Heronite com jogos agrupados em Jogando e Em andamento, e um jogo aberto com os detalhes e a linha do tempo de jogo.](../../../assets/screenshots/collection.webp)

*A Coleção: jogos agrupados, tempo de jogo e uma linha do tempo das sessões.*

## Como migrar do Lutris para o Heronite?

No Linux, o Heronite importa os jogos da biblioteca do Lutris. Ele só lê os arquivos do Lutris, então o Lutris continua funcionando como antes.

1. **[Instale o Heronite](/pt-br/docs/installation/) e abra.**
2. **Ligue a importação do Lutris.** Em **Configurações → Outros launchers**, ligue **Trazer os jogos dele** embaixo do Lutris. Os jogos instalados dele aparecem com capas e tempo de jogo, e ficam sincronizados com a instalação normal do Lutris ou com o Flatpak dele.
3. **Faça login nas suas lojas.** Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e faça login na Epic Games, GOG e Amazon Games.

Bom saber:

- O Lutris continua abrindo os jogos que o Heronite importou, com as configurações que você deu a eles lá.
- O Heronite ignora os jogos da Steam que o Lutris lista e usa a própria importação da Steam, então nada aparece duas vezes.
- O Heronite importa os jogos, não os scripts de instalação que os configuraram.
- O [Gerenciador do Wine](/pt-br/features/wine-and-proton/) acha os runners do Wine que o Lutris já instalou.

**Próximo:** [baixe o Heronite](/pt-br/download/) e leia [Primeiros passos](/pt-br/docs/getting-started/).
