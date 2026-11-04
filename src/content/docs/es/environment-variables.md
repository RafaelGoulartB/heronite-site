---
title: "Variables de entorno de Heronite (HERONITE_*)"
navLabel: "Variables de entorno"
description: "Las variables de entorno HERONITE_*: usa otra carpeta de datos, indica dónde está Steam y desactiva actualizaciones, bandeja, mando o animaciones."
section: Reference
order: 4
updated: 2026-11-04
---

Define estas variables de entorno antes de iniciar Heronite. Un interruptor `HERONITE_*` está activado cuando tiene cualquier valor salvo vacío o `0`.

## Cambia las carpetas y el detalle del log

| Variable | Qué hace |
|---|---|
| `HERONITE_DATA_DIR=<carpeta>` | Usa otra carpeta de datos, para una segunda Colección independiente. La configuración y la caché pasan a estar junto a ella, en `<carpeta>.heronite/`. |
| `HERONITE_LOG_DIR=<carpeta>` | Escribe los logs en otra carpeta |
| `HERONITE_STEAM_DIR=<carpeta>` | Dónde está Steam, cuando Heronite no lo encuentra |
| `RUST_LOG=debug` | Más detalle en el log (`trace` para verlo todo) |

## Desactiva funciones

| Variable | Qué hace |
|---|---|
| `HERONITE_NO_UPDATE_CHECK` | Sin búsqueda automática de actualizaciones |
| `HERONITE_NO_TRAY` | Sin icono en la bandeja |
| `HERONITE_NO_GAMEPAD` | Sin entrada de mando en el modo consola |
| `HERONITE_NO_ANIMATIONS` | Sin animaciones |
| `HERONITE_NO_SINGLE_INSTANCE` | Permite más de un Heronite a la vez |
| `HERONITE_NO_ONBOARDING` | Omite la configuración del primer inicio |
| `HERONITE_DISABLE_IDLE_JOBS` | Sin trabajo en segundo plano cuando está inactivo |
| `HERONITE_DISABLE_TOOLS_UPDATE` | No actualiza DXVK, Winetricks ni umu en segundo plano |
| `HERONITE_WINE_OFFLINE` | Sin red para el Gestor de Wine (Linux) |

## Usa tu propio legendary, gogdl o nile

Heronite descarga estas herramientas de las tiendas. Para usar tu propia copia, define:

| Variable | Qué hace |
|---|---|
| `HERONITE_LEGENDARY_BIN=<ruta>` | Usa este legendary (la herramienta de Epic) |
| `HERONITE_GOGDL_BIN=<ruta>` | Usa este gogdl (la herramienta de GOG) |
| `HERONITE_NILE_BIN=<ruta>` | Usa este nile (la herramienta de Amazon Games) |

## Variables que Heronite define para los scripts de un juego

Los scripts que se ejecutan antes o después de un juego, y los programas que se ejecutan junto a él, reciben estas:

| Variable | Valor |
|---|---|
| `HERONITE_GAME_TITLE` | El nombre del juego |
| `HERONITE_GAME_APP_NAME` | Su id |
| `HERONITE_GAME_RUNNER` | Su tienda (`legendary`, `gog`, `nile`, `sideload`, …) |
| `HERONITE_GAME_PLATFORM` | Su plataforma |
| `HERONITE_GAME_EXEC` | El programa que se ejecuta |
| `HERONITE_GAME_PREFIX` | Su prefijo de Wine (Linux) |
| `HERONITE_GAME_SCRIPT_TYPE` | Qué script es (antes o después) |

Heronite define los mismos valores como `HEROIC_GAME_*`, así que los scripts escritos para Heroic siguen funcionando. Dentro del [sandbox](/es/docs/wine-and-proton/#sandbox), también define `HERONITE_SANDBOX`.
