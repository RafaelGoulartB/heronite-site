---
title: "Carpeta de datos y archivos de Heronite"
navLabel: "Archivos y carpetas"
description: "Dónde guarda Heronite sus datos, ajustes, caché, capturas y logs en Linux y Windows, qué hay dentro de cada carpeta y cómo funciona la copia portable."
section: Reference
order: 3
updated: 2026-11-04
---

Heronite guarda todo como archivos JSON sencillos, no en una base de datos.

## ¿Dónde está la carpeta de datos?

| | Linux | Windows | Windows portable |
|---|---|---|---|
| Datos (Colección, ajustes, inicios de sesión, herramientas, logs) | `~/.local/share/heronite` | `%APPDATA%\heronite\data` | `<folder>\data` |
| Ajustes de la interfaz | `~/.config/heronite` | `%APPDATA%\heronite\config` | `<folder>\config` |
| Caché (se puede borrar) | `~/.cache/heronite` | `%LOCALAPPDATA%\heronite\cache` | `<folder>\cache` |
| Capturas | `~/Pictures/Heronite` | `Pictures\Heronite` | `<folder>\Screenshots` |

La carpeta de capturas se puede cambiar en **Ajustes → Capturas**. Para usar otra carpeta de datos, define `HERONITE_DATA_DIR` (consulta [Variables de entorno](/es/docs/environment-variables/)).

## ¿Qué hay dentro de la carpeta de datos?

| Ruta | Qué contiene |
|---|---|
| `config.json` | Ajustes globales |
| `local_library/` | La Colección: `library.json`, `sessions.json`, `statuses.json`, `metadata.json`, `journal.json`, emuladores y carpetas de ROMs |
| `local_library/art/` | El arte que elegiste |
| `GamesConfig/<game>.json` | Los ajustes de cada juego |
| `logs/` | Logs (consulta [Solución de problemas](/es/docs/troubleshooting/)) |
| `tools/bin/` | legendary, gogdl y nile |
| `tools/wine/`, `tools/proton/` | Versiones de Wine y Proton del Gestor de Wine (Linux) |
| `tools/runtimes/` | umu y los runtimes de anticheat (Linux) |
| `legendaryConfig/`, `gog_store/`, `nile_config/` | Inicios de sesión de Epic, GOG y Amazon |

Estas carpetas contienen tus inicios de sesión en las tiendas. Tenlo en cuenta cuando copies o compartas la carpeta de datos.

## ¿Dónde se guardan los juegos y los prefijos de Wine? (Linux)

| Ruta | Qué contiene |
|---|---|
| `~/Games/Heronite` | Los juegos instalados por Heronite (la ubicación por defecto; cada tienda puede usar otra carpeta) |
| `~/Games/Heronite/Prefixes/<game>` | El prefijo de Wine de cada juego |
| `~/Games/Heronite/Prefixes/shared` | El prefijo compartido |
| `~/Games/Heronite/Prefixes/Battle.net` (y `EA app`, `Ubisoft Connect`, `Rockstar Games Launcher`) | Los prefijos de los clientes de las tiendas |

## La copia portable (Windows)

Una copia con un archivo `portable.txt` junto a `heronite.exe` guarda todo en su propia carpeta:

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

Borra `portable.txt` para que la copia use las carpetas de usuario normales. Una copia portable no escribe en el registro ni registra los enlaces `heronite://`.

## Pasa de Heroic a Heronite (Linux)

En el primer inicio, si existe `~/.config/heroic`, Heronite copia sus datos una sola vez a su carpeta de datos, así que tus inicios de sesión, juegos y ajustes se mantienen. Heronite solo lee los archivos de Heroic.
