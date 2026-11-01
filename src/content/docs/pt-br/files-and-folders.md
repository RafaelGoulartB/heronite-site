---
title: "Onde o Heronite guarda dados, configurações e logs"
navLabel: "Arquivos e pastas"
description: "Onde o Heronite guarda dados, configurações, cache, capturas de tela e logs no Linux e no Windows, o que há dentro e como funciona a cópia portátil."
section: Reference
order: 3
updated: 2026-11-01
---

## Onde o Heronite guarda seus dados

| | Linux | Windows | Windows portátil |
|---|---|---|---|
| Dados (Coleção, configurações, logins, ferramentas, logs) | `~/.local/share/heronite` | `%APPDATA%\heronite\data` | `<folder>\data` |
| Configurações da interface | `~/.config/heronite` | `%APPDATA%\heronite\config` | `<folder>\config` |
| Cache (pode ser apagado) | `~/.cache/heronite` | `%LOCALAPPDATA%\heronite\cache` | `<folder>\cache` |
| Capturas de tela | `~/Pictures/Heronite` | `Pictures\Heronite` | `<folder>\Screenshots` |

A pasta de capturas de tela pode ser mudada em **Configurações → Capturas de tela**. Para usar outra pasta de dados, defina `HERONITE_DATA_DIR` (veja [Variáveis de ambiente](/pt-br/docs/environment-variables/)).

Tudo é guardado como arquivos JSON simples, não em um banco de dados.

## Dentro da pasta de dados

| Caminho | O que guarda |
|---|---|
| `config.json` | Configurações globais |
| `local_library/` | A Coleção: `library.json`, `sessions.json`, `statuses.json`, `metadata.json`, `journal.json`, emuladores e pastas de ROMs |
| `local_library/art/` | A arte que você escolheu |
| `GamesConfig/<game>.json` | As configurações de cada jogo |
| `logs/` | Logs (veja [Solução de problemas](/pt-br/docs/troubleshooting/)) |
| `tools/bin/` | legendary, gogdl e nile |
| `tools/wine/`, `tools/proton/` | Versões do Wine e do Proton do Gerenciador do Wine (Linux) |
| `tools/runtimes/` | umu e os runtimes de anticheat (Linux) |
| `legendaryConfig/`, `gog_store/`, `nile_config/` | Logins da Epic, GOG e Amazon |

Estas pastas guardam seus logins das lojas. Lembre-se disso ao copiar ou compartilhar a pasta de dados.

## Jogos e prefixos do Wine (Linux)

| Caminho | O que guarda |
|---|---|
| `~/Games/Heronite` | Jogos instalados pelo Heronite (o padrão; cada loja pode usar outra pasta) |
| `~/Games/Heronite/Prefixes/<game>` | O prefixo Wine de cada jogo |
| `~/Games/Heronite/Prefixes/shared` | O prefixo compartilhado |
| `~/Games/Heronite/Prefixes/Battle.net` (e `EA app`, `Ubisoft Connect`, `Rockstar Games Launcher`) | Os prefixos dos clientes das lojas |

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

Apague o `portable.txt` para que a cópia passe a usar as pastas normais do usuário. Uma cópia portátil não grava no registro e não registra links `heronite://`.

## Vindo do Heroic (Linux)

Na primeira inicialização, se `~/.config/heroic` existir, os dados dele são copiados uma única vez para a pasta de dados do Heronite, e seus logins, jogos e configurações são aproveitados. Os arquivos do Heroic são apenas lidos.
