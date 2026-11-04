---
title: "Capas e metadados de jogos: chaves SteamGridDB e IGDB"
navLabel: "Metadados e arte"
description: "De onde o Heronite tira capas, arte e detalhes dos jogos, como adicionar chaves do SteamGridDB e do IGDB e ver conquistas da Steam e do RetroAchievements."
section: Guides
order: 5
updated: 2026-11-04
---

O Heronite preenche capas, arte e detalhes dos jogos sem nenhuma configuração. Duas chaves opcionais, do SteamGridDB e do IGDB, melhoram os resultados.

## Quais fontes não precisam de configuração?

- **Steam e as lojas:** capas, arte e detalhes dos próprios jogos
- **Lutris:** metadados
- **[How Long To Beat](https://howlongtobeat.com):** quanto tempo leva para zerar um jogo
- **[ProtonDB](https://www.protondb.com)** (Linux): quão bem um jogo do Windows roda no Linux, com jogos de fora da Steam associados pelo título
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux): o status do anti-cheat
- **Suas capturas de tela**, a web ou um arquivo de imagem: arte para qualquer jogo

## Adicionar chaves do SteamGridDB e do IGDB

### Gerar uma chave do SteamGridDB

O [SteamGridDB](https://www.steamgriddb.com) tem capas, heroes e logos feitos pela comunidade, úteis para jogos de fora da Steam e jogos emulados.

1. Faça login no SteamGridDB.
2. Abra [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) e gere uma chave.
3. Cole a chave em **Chave de API do SteamGridDB**, em **Configurações → Metadados**.

Se as capas não carregarem depois de importar a chave do Heroic, cole de novo: o Heroic pode ter criptografado a chave.

### Gerar uma chave do IGDB

O [IGDB](https://www.igdb.com) traz descrições, gêneros, empresas, séries e datas de lançamento. Ele precisa de uma conta de desenvolvedor da Twitch:

1. Abra o [console de desenvolvedor da Twitch](https://dev.twitch.tv/console) e registre um aplicativo (qualquer nome; OAuth redirect `http://localhost`; categoria "Application Integration").
2. Copie o **Client ID** dele e crie um **Client Secret**.
3. Em **Configurações → Metadados**, cole os dois em **Client ID Twitch / IGDB** e **Client Secret Twitch / IGDB**.
4. Aperte **Testar IGDB**.

## Ver conquistas da Steam e do RetroAchievements

Configure as duas em **Configurações → Conquistas**:

- **Steam:** jogos jogados neste PC não precisam de chave. Para os outros, adicione uma **Chave da Steam Web API (opcional)** de [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey); os detalhes de jogos do seu perfil da Steam precisam ser públicos.
- **[RetroAchievements](https://retroachievements.org):** conecte sua conta para os jogos emulados.

O Heronite guarda essas contas na sua [pasta de dados](/pt-br/docs/files-and-folders/).

## Editar o nome, a arte e os detalhes de um jogo

Selecione um jogo e aperte <kbd>F3</kbd> para mudar o nome, a arte, os gêneros, as empresas, a série e mais. Selecione vários jogos para mudar todos de uma vez; <kbd>Ctrl</kbd> <kbd>Z</kbd> desfaz. Dá para renomear e juntar gêneros, empresas e séries na biblioteca inteira.
