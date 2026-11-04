---
title: "Stores and launchers: Steam, Epic, GOG and more"
description: "How Heronite handles Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar, Heroic, Lutris, Bottles and Faugus."
section: Guides
order: 1
updated: 2026-11-04
---

Heronite puts your Steam, Epic Games, GOG, Amazon Games and other launcher games into one library.

## Add your Steam games

No login needed. Heronite reads your Steam libraries and keeps them in sync.

- **Linux:** it finds Steam in `~/.steam/steam`, `~/.local/share/Steam`, the Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`), and the Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** it finds Steam from the registry, or in `C:\Program Files (x86)\Steam`.

Steam starts its games. On Windows, Heronite can run scripts and programs, like trainers, around a Steam game.

## Log in to Epic Games, GOG, and Amazon Games

Log in from the **Stores** page (<kbd>Ctrl</kbd> <kbd>4</kbd>). One download queue installs, updates, and repairs games, and moves, imports, or uninstalls them. Downloads pause when you are offline, and Heronite retries failed ones.

Heronite downloads the same open source tools as Heroic:

| Store | Tool |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Login window.** Logging in opens a small window with the store's own page (WebKitGTK on Linux, WebView2 on Windows). If it does not open, use the **browser method** on the login page: log in in your browser and paste the address or code shown at the end.

**Games you already installed (Windows).** Heronite imports games installed by the Epic Games Launcher, GOG Galaxy, or the Amazon Games app, without downloading them again.

Heronite checks for game updates every 3 hours.

## Use Battle.net, EA app, Ubisoft Connect, and Rockstar Games (Linux)

Heronite installs each store app in its own Wine prefix, `~/Games/Heronite/Prefixes/<store>`. Log in and install games in that app. They appear in your library and start from there.

On Windows, use each store's app for now.

## Import games from Heroic, Lutris, Bottles, and Faugus (Linux)

Heronite imports games from these launchers and keeps them in sync. Each can be a normal install or a Flatpak:

| Launcher | What comes in |
|---|---|
| Heroic | Games you added by hand, and your installed Epic, GOG, and Amazon games |
| Lutris | Games from its library (`pga.db`) |
| Bottles | Programs of each bottle |
| Faugus | Games from its list |

Heronite skips their Steam games, which come in through the Steam import, so nothing shows up twice. It only reads the other launchers' files.

## Add games you already have

Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program, or point at a folder to add every game in it: Windows programs and, on Linux, AppImages, start scripts, and Linux programs.
