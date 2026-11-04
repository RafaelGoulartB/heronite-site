---
title: "Command line options and heronite:// links"
navLabel: "Command line and links"
description: "Start Heronite from scripts: command line options like --launch, --console and --no-gui, game ids for each store, and heronite:// links."
section: Reference
order: 2
updated: 2026-11-04
---

Start Heronite from scripts with options such as `--launch`. The program is `heronite-rs` on Linux and with the Windows installer (`heronite-rs.exe`), and `heronite.exe` in the Windows portable copy.

## Command line options

| Option | What it does |
|---|---|
| `--launch <game>` | Starts a game (see below) |
| `--no-gui` | With `--launch`: no window; Heronite quits when the game ends |
| `--console` | Opens in [Console Mode](/docs/console-mode/) |
| `--fullscreen` | Opens fullscreen (<kbd>F11</kbd> switches back) |
| `--autostart` | Used by "Start with the system"; only then does "Start minimized" apply |
| `-h`, `--help` | Shows the options |

Only one Heronite runs at a time: starting it again hands the request (like `--launch`) to the one already running.

## Launch a game from the command line

`--launch` takes the game's store id, not its name, optionally with the store tool in front:

```bash
heronite-rs --launch gog_1207658930      # GOG game 1207658930
heronite-rs --launch gog 1207658930      # the same
heronite-rs --launch 1207658930          # searches every store
heronite-rs --launch legendary_Fortnite --no-gui
```

| Prefix | Store |
|---|---|
| `legendary` | Epic Games |
| `gog` | GOG |
| `nile` | Amazon Games |
| `sideload` | Games you added yourself |

Shortcuts Heronite creates (desktop, Start menu, Steam) already contain the right command, so this is mostly for scripts.

## Launch a game with a `heronite://` link

```
heronite://launch/<game>
heronite://launch/<store>/<game>
heronite://launch?appName=<game>&runner=<store>
```

The query form also takes:

- `arg=<value>`: an argument for the game (repeat it for more),
- `gui=false`: start without showing Heronite's window.

Names with spaces are written with `%20` (`My%20Game`). The setting "Hide the window for heronite:// launches" hides the window for every link.

**Where links work:**

- **Windows installer:** registered for your user at every start.
- **Windows portable:** not registered, so the copy leaves no trace on the PC.
- **Linux:** registered by `scripts/install.sh` when built from source.

The old `heronite-rs://` scheme still works.
