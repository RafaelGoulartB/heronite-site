---
title: "Capas e metadados de jogos: chaves SteamGridDB e IGDB"
navLabel: "Metadados e arte"
description: "De onde o Heronite tira capas, arte e detalhes dos jogos, como adicionar chaves do SteamGridDB e do IGDB e ver conquistas da Steam e RetroAchievements."
section: Guides
order: 5
updated: 2026-11-04
---

O Heronite preenche capas, arte, descrições e detalhes com dados de várias fontes. A maioria não precisa de configuração; duas chaves opcionais melhoram os resultados.

## Quais fontes não precisam de configuração?

- **Steam e as lojas:** capas, arte e detalhes dos próprios jogos.
- Metadados do **Lutris**.
- **[How Long To Beat](https://howlongtobeat.com):** quanto tempo um jogo leva para ser zerado.
- **[ProtonDB](https://www.protondb.com)** (Linux): quão bem um jogo do Windows roda no Linux. Jogos que não são da Steam são associados pelo título.
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux): o status do anticheat.
- **Suas próprias capturas de tela**, a web ou um arquivo de imagem para qualquer jogo.

## Adicione chaves do SteamGridDB e do IGDB

Adicione as duas chaves em **Configurações → Metadados**.

### Gere uma chave do SteamGridDB

O [SteamGridDB](https://www.steamgriddb.com) tem capas, heroes e logos feitos pela comunidade, úteis para jogos de fora da Steam e para jogos emulados.

1. Entre no SteamGridDB.
2. Abra [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) e gere uma chave.
3. Cole-a em "Chave de API do SteamGridDB".

Uma chave importada do Heroic pode ter sido criptografada pelo Heroic. Se as capas não carregarem, cole a chave de novo.

### Gere uma chave do IGDB

O [IGDB](https://www.igdb.com) fornece descrições, gêneros, empresas, séries e datas de lançamento. Ele exige uma conta de desenvolvedor da Twitch:

1. Abra o [console de desenvolvedor da Twitch](https://dev.twitch.tv/console) e registre um aplicativo (qualquer nome; OAuth redirect `http://localhost`; categoria "Application Integration").
2. Copie o **Client ID** dele e crie um **Client Secret**.
3. Cole os dois em "Client ID Twitch / IGDB" e "Client Secret Twitch / IGDB" e depois pressione **Testar IGDB**.

## Veja conquistas da Steam e do RetroAchievements

- **Steam:** adicione sua chave da Steam Web API para ver conquistas e progresso.
- **[RetroAchievements](https://retroachievements.org):** conecte sua conta para os jogos emulados.

As contas ficam guardadas na sua pasta de dados (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Edite o nome, a arte e os detalhes de um jogo

Selecione um jogo e pressione <kbd>F3</kbd> para mudar o nome, a arte, os gêneros, as empresas, a série e mais. Selecione vários jogos para alterar todos de uma vez; <kbd>Ctrl</kbd> <kbd>Z</kbd> desfaz. Gêneros, empresas e séries também podem ser renomeados e mesclados em toda a Coleção.
