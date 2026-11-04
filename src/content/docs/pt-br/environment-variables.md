---
title: "Variáveis de ambiente HERONITE_* do Heronite"
navLabel: "Variáveis de ambiente"
description: "Variáveis de ambiente HERONITE_*: use outra pasta de dados, indique a Steam e desligue atualizações, bandeja, controle ou animações."
section: Reference
order: 4
updated: 2026-11-04
---

As opções `HERONITE_*` ficam ligadas quando definidas com qualquer valor, exceto vazio ou `0`.

## Mude as pastas de dados, de logs e da Steam

| Variável | O que faz |
|---|---|
| `HERONITE_DATA_DIR=<folder>` | Usa outra pasta de dados. A configuração e o cache ficam ao lado dela, em `<folder>.heronite/`. Útil para uma segunda Coleção, separada. |
| `HERONITE_LOG_DIR=<folder>` | Grava os logs em outra pasta |
| `HERONITE_STEAM_DIR=<folder>` | Onde a Steam está, quando o Heronite não a encontra |

## Desligue recursos

| Variável | O que faz |
|---|---|
| `HERONITE_NO_UPDATE_CHECK` | Sem verificação automática de atualizações |
| `HERONITE_NO_TRAY` | Sem ícone na bandeja |
| `HERONITE_NO_GAMEPAD` | Sem entrada de controle no modo console |
| `HERONITE_NO_ANIMATIONS` | Sem animações |
| `HERONITE_NO_SINGLE_INSTANCE` | Permite mais de um Heronite ao mesmo tempo |
| `HERONITE_NO_ONBOARDING` | Pula a configuração inicial |
| `HERONITE_DISABLE_IDLE_JOBS` | Sem trabalho em segundo plano quando ocioso |
| `HERONITE_DISABLE_TOOLS_UPDATE` | Não atualiza DXVK, Winetricks e umu em segundo plano |
| `HERONITE_WINE_OFFLINE` | Sem rede para o Gerenciador do Wine (Linux) |

## Use seu próprio legendary, gogdl ou nile

| Variável | O que faz |
|---|---|
| `HERONITE_LEGENDARY_BIN=<path>` | Usa este legendary em vez do baixado |
| `HERONITE_GOGDL_BIN=<path>` | Usa este gogdl |
| `HERONITE_NILE_BIN=<path>` | Usa este nile |

## Veja mais detalhes no log

| Variável | O que faz |
|---|---|
| `RUST_LOG=debug` | Mais detalhes no log (`trace` para tudo) |

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

Os mesmos valores também são definidos como `HEROIC_GAME_*`, então scripts escritos para o Heroic continuam funcionando.

Dentro do [sandbox](/pt-br/docs/wine-and-proton/#sandbox), a variável `HERONITE_SANDBOX` é definida.
