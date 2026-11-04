---
title: "Pasta de dados do Heronite: onde ficam os arquivos"
navLabel: "Arquivos e pastas"
description: "Onde o Heronite guarda dados, configurações, cache, capturas de tela e logs no Linux e no Windows, o que há dentro e como funciona a cópia portátil."
section: Reference
order: 3
updated: 2026-11-04
---

O Heronite guarda tudo como arquivos JSON simples, não em um banco de dados.

## Onde fica a pasta de dados?

| | Linux | Windows | Windows portátil |
|---|---|---|---|
| Dados (Coleção, configurações, logins, ferramentas, logs) | `~/.local/share/heronite` | `%APPDATA%\heronite\data` | `<pasta>\data` |
| Configurações da interface | `~/.config/heronite` | `%APPDATA%\heronite\config` | `<pasta>\config` |
| Cache (pode ser apagado) | `~/.cache/heronite` | `%LOCALAPPDATA%\heronite\cache` | `<pasta>\cache` |
| Capturas de tela | `~/Pictures/Heronite` | `Pictures\Heronite` | `<pasta>\Screenshots` |

Mude a pasta de capturas de tela em **Configurações → Capturas de tela**. Para usar outra pasta de dados, defina `HERONITE_DATA_DIR` (veja [Variáveis de ambiente](/pt-br/docs/environment-variables/)).

## O que há dentro da pasta de dados?

| Caminho | O que guarda |
|---|---|
| `config.json` | Configurações globais |
| `local_library/` | A Coleção: `library.json`, `sessions.json`, `statuses.json`, `metadata.json`, `journal.json`, emuladores e pastas de ROMs |
| `local_library/art/` | A arte que você escolheu |
| `GamesConfig/<jogo>.json` | As configurações de cada jogo |
| `logs/` | Logs (veja [Solução de problemas](/pt-br/docs/troubleshooting/)) |
| `tools/bin/` | legendary, gogdl e nile |
| `tools/wine/`, `tools/proton/` | Versões do Wine e do Proton do Gerenciador do Wine (Linux) |
| `tools/runtimes/` | umu e os runtimes de anti-cheat (Linux) |
| `legendaryConfig/`, `gog_store/`, `nile_config/` | Logins da Epic, GOG e Amazon |

Cuidado ao copiar ou compartilhar a pasta de dados: essas três pastas guardam seus logins das lojas.

## Onde ficam os jogos e os prefixos Wine? (Linux)

Um prefixo Wine é o drive do Windows de cada jogo, com as configurações e os saves dele.

| Caminho | O que guarda |
|---|---|
| `~/Games/Heronite` | Jogos instalados pelo Heronite (o padrão; cada loja pode usar outra pasta) |
| `~/Games/Heronite/Prefixes/<jogo>` | O prefixo Wine de cada jogo |
| `~/Games/Heronite/Prefixes/shared` | O prefixo compartilhado |
| `~/Games/Heronite/Prefixes/Battle.net` (e `EA app`, `Ubisoft Connect`, `Rockstar Games Launcher`) | Os prefixos dos apps das lojas |

## A cópia portátil (Windows)

Uma cópia com um arquivo `portable.txt` ao lado do `heronite.exe` guarda tudo na própria pasta:

```
Heronite\
├── heronite.exe
├── portable.txt
├── helpers\
│   └── heronite-epic-login.exe
├── data\
├── config\
├── cache\
└── Screenshots\
```

Apague o `portable.txt` para a cópia usar as pastas normais do usuário. Uma cópia portátil não grava no registro e não registra links `heronite://`.

## Mudar do Heroic para o Heronite (Linux)

Na primeira abertura, se `~/.config/heroic` existir, o Heronite copia os dados do Heroic uma vez para a pasta de dados dele, então seus logins, jogos e configurações vêm junto. Ele só lê os arquivos do Heroic.
