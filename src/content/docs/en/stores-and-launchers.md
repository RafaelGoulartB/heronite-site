---
title: "Stores and launchers"
description: "How Heronite works with Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar Games, Heroic, Lutris, Bottles and Faugus."
section: Guides
order: 1
updated: 2026-11-01
---

## Steam

No login needed. Heronite reads your Steam libraries and keeps them in sync.

- **Linux:** it finds Steam in `~/.steam/steam`, `~/.local/share/Steam`, the Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`), and the Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** it finds Steam from the registry, or in `C:\Program Files (x86)\Steam`.

Steam still starts its own games. On Windows, Heronite can run your scripts and programs (like trainers) around a Steam game too.

## Epic Games, GOG, and Amazon Games

Log in from the **Stores** page. Heronite then handles the whole library: one download queue installs, updates, repairs, moves, imports, and uninstalls games. Downloads pause when you are offline and failed ones are retried.

Under the hood Heronite uses the same open source tools as Heroic, and downloads them by itself:

| Store | Tool |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Login window.** Logging in opens a small window with the store's own page (WebKitGTK on Linux, WebView2 on Windows). If it does not open, the login page has a **browser method**: log in in your normal browser and paste the address or code shown at the end.

**Games you already installed (Windows).** Games installed by the Epic Games Launcher, GOG Galaxy, or the Amazon Games app come into Heronite without downloading them again.

Game updates are checked every 3 hours.

## Battle.net, EA app, Ubisoft Connect, Rockstar Games (Linux)

Heronite installs each store's own app in a Wine prefix of its own (in `~/Games/Heronite/Prefixes/<store>`). Log in and install games in that app as usual; they show up in your Collection and start from it.

On Windows, use the stores' own apps for now.

## Other launchers (Linux)

Heronite can bring in the games of other launchers and keep them in sync. Each source can be the normal install or the Flatpak:

| Launcher | What comes in |
|---|---|
| Heroic | Games you added by hand, and your installed Epic, GOG, and Amazon games |
| Lutris | Games from its library (`pga.db`) |
| Bottles | Programs of each bottle |
| Faugus | Games from its list |

Steam games those launchers list are left to the Steam import, so nothing shows up twice. Heronite only reads the other launchers' files.

## Games you already have

Add a program by hand (<kbd>Ctrl</kbd> <kbd>N</kbd>), or point at a folder and add every game found in it at once: Windows programs, and on Linux also AppImages, start scripts, and Linux programs.
