---
title: "Variáveis de ambiente HERONITE_* do Heronite"
navLabel: "Variáveis de ambiente"
description: "As variáveis de ambiente HERONITE_*: use outra pasta de dados, indique onde está a Steam e desligue atualizações, bandeja, controle ou animações."
section: Reference
order: 4
updated: 2026-11-04
---

Defina estas variáveis de ambiente antes de abrir o Heronite. Uma opção `HERONITE_*` fica ligada quando tem qualquer valor, menos vazio ou `0`.

## Mudar pastas e detalhes do log

| Variável | O que faz |
|---|---|
| `HERONITE_DATA_DIR=<pasta>` | Usa outra pasta de dados, para uma segunda Coleção, separada. A configuração e o cache ficam ao lado dela, em `<pasta>.heronite/`. |
| `HERONITE_LOG_DIR=<pasta>` | Grava os logs em outra pasta |
| `HERONITE_STEAM_DIR=<pasta>` | Onde a Steam está, quando o Heronite não encontra |
| `RUST_LOG=debug` | Mais detalhes no log (`trace` para tudo) |

## Desligar recursos

| Variável | O que faz |
|---|---|
| `HERONITE_NO_UPDATE_CHECK` | Sem verificação automática de atualizações |
| `HERONITE_NO_TRAY` | Sem ícone na bandeja |
| `HERONITE_NO_GAMEPAD` | Sem entrada de controle no modo console |
| `HERONITE_NO_ANIMATIONS` | Sem animações |
| `HERONITE_NO_SINGLE_INSTANCE` | Permite mais de um Heronite ao mesmo tempo |
| `HERONITE_NO_ONBOARDING` | Pula a configuração da primeira abertura |
| `HERONITE_DISABLE_IDLE_JOBS` | Sem trabalho em segundo plano quando o PC está parado |
| `HERONITE_DISABLE_TOOLS_UPDATE` | Não atualiza DXVK, Winetricks e umu em segundo plano |
| `HERONITE_WINE_OFFLINE` | Sem rede para o Gerenciador do Wine (Linux) |

## Usar seu próprio legendary, gogdl ou nile

O Heronite baixa essas ferramentas das lojas. Para usar a sua cópia, defina:

| Variável | O que faz |
|---|---|
| `HERONITE_LEGENDARY_BIN=<caminho>` | Usa este legendary (a ferramenta da Epic) |
| `HERONITE_GOGDL_BIN=<caminho>` | Usa este gogdl (a ferramenta da GOG) |
| `HERONITE_NILE_BIN=<caminho>` | Usa este nile (a ferramenta da Amazon Games) |

## Variáveis que o Heronite define para scripts de jogo

Scripts que rodam antes ou depois de um jogo, e programas que rodam junto com ele, recebem estas:

| Variável | Valor |
|---|---|
| `HERONITE_GAME_TITLE` | O nome do jogo |
| `HERONITE_GAME_APP_NAME` | O id dele |
| `HERONITE_GAME_RUNNER` | A loja dele (`legendary`, `gog`, `nile`, `sideload`, …) |
| `HERONITE_GAME_PLATFORM` | A plataforma dele |
| `HERONITE_GAME_EXEC` | O programa que roda |
| `HERONITE_GAME_PREFIX` | O prefixo Wine dele (Linux) |
| `HERONITE_GAME_SCRIPT_TYPE` | Qual é este script (antes ou depois) |

O Heronite define os mesmos valores como `HEROIC_GAME_*`, então scripts feitos para o Heroic continuam funcionando. Dentro do [sandbox](/pt-br/docs/wine-and-proton/#sandbox), ele também define `HERONITE_SANDBOX`.
