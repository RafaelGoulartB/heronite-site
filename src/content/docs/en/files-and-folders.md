---
title: "Heronite data folder and file locations"
navLabel: "Files and folders"
description: "Where Heronite keeps its data, settings, cache, screenshots and logs on Linux and Windows, what is inside, and how the portable copy works."
section: Reference
order: 3
updated: 2026-11-04
---

Heronite stores everything as plain JSON files, not in a database.

## Where is the data folder?

| | Linux | Windows | Windows portable |
|---|---|---|---|
| Data (Collection, settings, logins, tools, logs) | `~/.local/share/heronite` | `%APPDATA%\heronite\data` | `<folder>\data` |
| Interface settings | `~/.config/heronite` | `%APPDATA%\heronite\config` | `<folder>\config` |
| Cache (can be deleted) | `~/.cache/heronite` | `%LOCALAPPDATA%\heronite\cache` | `<folder>\cache` |
| Screenshots | `~/Pictures/Heronite` | `Pictures\Heronite` | `<folder>\Screenshots` |

The screenshots folder can be changed in **Settings → Screenshots**. To use another data folder, set `HERONITE_DATA_DIR` (see [Environment Variables](/docs/environment-variables/)).

## What is inside the data folder?

| Path | What it holds |
|---|---|
| `config.json` | Global settings |
| `local_library/` | The Collection: `library.json`, `sessions.json`, `statuses.json`, `metadata.json`, `journal.json`, emulators and ROM folders |
| `local_library/art/` | Art you chose |
| `GamesConfig/<game>.json` | Each game's settings |
| `logs/` | Logs (see [Troubleshooting](/docs/troubleshooting/)) |
| `tools/bin/` | legendary, gogdl, and nile |
| `tools/wine/`, `tools/proton/` | Wine and Proton builds from the Wine Manager (Linux) |
| `tools/runtimes/` | umu and the anti-cheat runtimes (Linux) |
| `legendaryConfig/`, `gog_store/`, `nile_config/` | Epic, GOG, and Amazon logins |

These folders hold your store logins. Keep that in mind when you copy or share the data folder.

## Where are games and Wine prefixes stored? (Linux)

| Path | What it holds |
|---|---|
| `~/Games/Heronite` | Games installed by Heronite (the default; each store can use another folder) |
| `~/Games/Heronite/Prefixes/<game>` | Each game's Wine prefix |
| `~/Games/Heronite/Prefixes/shared` | The shared prefix |
| `~/Games/Heronite/Prefixes/Battle.net` (and `EA app`, `Ubisoft Connect`, `Rockstar Games Launcher`) | The store clients' prefixes |

## The portable copy (Windows)

A copy with a `portable.txt` file next to `heronite.exe` keeps everything in its own folder:

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

Delete `portable.txt` to make the copy use the normal user folders instead. A portable copy does not write to the registry and does not register `heronite://` links.

## Move from Heroic to Heronite (Linux)

On the first start, if `~/.config/heroic` exists, its data is copied into Heronite's data folder once, so your logins, games, and settings carry over. Heroic's files are only read.
