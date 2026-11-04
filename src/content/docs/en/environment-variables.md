---
title: "Heronite environment variables (HERONITE_*)"
navLabel: "Environment variables"
description: "The HERONITE_* environment variables: use another data folder, point at Steam, and turn off update checks, the tray, controller input or animations."
section: Reference
order: 4
updated: 2026-11-04
---

Set these environment variables before you start Heronite. A `HERONITE_*` switch is on when set to anything except empty or `0`.

## Change folders and log detail

| Variable | What it does |
|---|---|
| `HERONITE_DATA_DIR=<folder>` | Use another data folder, for a second, separate Collection. Config and cache then go next to it, in `<folder>.heronite/`. |
| `HERONITE_LOG_DIR=<folder>` | Write logs to another folder |
| `HERONITE_STEAM_DIR=<folder>` | Where Steam is, when Heronite does not find it |
| `RUST_LOG=debug` | More detail in the log (`trace` for everything) |

## Turn features off

| Variable | What it does |
|---|---|
| `HERONITE_NO_UPDATE_CHECK` | No automatic update checks |
| `HERONITE_NO_TRAY` | No tray icon |
| `HERONITE_NO_GAMEPAD` | No controller input in console mode |
| `HERONITE_NO_ANIMATIONS` | No animations |
| `HERONITE_NO_SINGLE_INSTANCE` | Allow more than one Heronite at a time |
| `HERONITE_NO_ONBOARDING` | Skip the first-start setup |
| `HERONITE_DISABLE_IDLE_JOBS` | No background work while idle |
| `HERONITE_DISABLE_TOOLS_UPDATE` | Do not refresh DXVK, Winetricks, and umu in the background |
| `HERONITE_WINE_OFFLINE` | No network for the Wine Manager (Linux) |

## Use your own legendary, gogdl or nile

Heronite downloads these store tools. To use your own copy, set:

| Variable | What it does |
|---|---|
| `HERONITE_LEGENDARY_BIN=<path>` | Use this legendary (the Epic tool) |
| `HERONITE_GOGDL_BIN=<path>` | Use this gogdl (the GOG tool) |
| `HERONITE_NILE_BIN=<path>` | Use this nile (the Amazon Games tool) |

## Variables Heronite sets for game scripts

Scripts that run before or after a game, and programs that run alongside it, get these:

| Variable | Value |
|---|---|
| `HERONITE_GAME_TITLE` | The game's name |
| `HERONITE_GAME_APP_NAME` | Its id |
| `HERONITE_GAME_RUNNER` | Its store (`legendary`, `gog`, `nile`, `sideload`, …) |
| `HERONITE_GAME_PLATFORM` | Its platform |
| `HERONITE_GAME_EXEC` | The program that runs |
| `HERONITE_GAME_PREFIX` | Its Wine prefix (Linux) |
| `HERONITE_GAME_SCRIPT_TYPE` | Which script this is (before or after) |

Heronite sets the same values as `HEROIC_GAME_*`, so scripts written for Heroic keep working. Inside the [sandbox](/docs/wine-and-proton/#sandbox), it also sets `HERONITE_SANDBOX`.
