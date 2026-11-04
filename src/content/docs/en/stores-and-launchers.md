---
title: "Stores and launchers: Steam, Epic, GOG and more"
navLabel: "Stores and launchers"
description: "How Heronite handles Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft, Rockstar, the Microsoft Store, Heroic, Lutris and Playnite."
section: Guides
order: 1
updated: 2026-11-04
---

Heronite puts your games from Steam, Epic Games, GOG, Amazon Games, store apps and other launchers into one library.

## Add your Steam games

No login needed. Heronite reads your Steam libraries and keeps them in sync, and Steam starts its games.

- **Linux:** it finds Steam in `~/.steam/steam`, `~/.local/share/Steam`, the Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`), and the Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** it finds Steam from the registry, or in `C:\Program Files (x86)\Steam`.

### Run a trainer with a Steam game (Windows)

1. Open the game's **Game settings → Launch**.
2. Under **Programs alongside the game**, press **Add program** and choose the trainer.
3. Play the game from Heronite.

Heronite closes the trainer when the game ends. **Scripts** on the same tab run before the game starts and after it exits. A game started from Steam itself gets neither.

## Log in to Epic Games, GOG, and Amazon Games

1. Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choose **Epic Games**, **GOG** or **Amazon Games**.
3. Press **Log in**. A small window opens with the store's own page (WebKitGTK on Linux, WebView2 on Windows).
4. Log in there.

If the login window does not open, use **Or log in with your browser** on the same page and paste the code it gives you.

1. Press **Open in browser** and log in.
2. Copy the address or code shown at the end.
3. Paste it under **2. Paste the code** and press **Log in**.

**Downloads.** One download queue installs, updates and repairs games. It can also move, import or uninstall them. Downloads pause when you are offline, Heronite retries failed ones, and it checks for game updates every 3 hours.

**Store tools.** Heronite downloads the same open source tools as Heroic:

| Store | Tool |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Games you already installed (Windows).** Heronite imports games installed by the Epic Games Launcher, GOG Galaxy, or the Amazon Games app, without downloading them again.

## Use Battle.net, EA app, Ubisoft Connect, and Rockstar Games

On Linux, Heronite installs each store app in its own Wine prefix (a separate Windows folder for that app), `~/Games/Heronite/Prefixes/<store>`. On Windows, the store app runs directly, without Wine.

1. Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) and choose the store app.
2. Press **Set up** with the app's name, like **Set up Battle.net**. Heronite downloads the official installer and runs it. On Linux it installs the app with your default Proton, which takes about 5 minutes. On Windows, Windows may ask you to allow it.
3. Press **Open** with the app's name, and log in there.
4. Install games in the store app. They appear in your library and start from there.

On Windows, Heronite uses a store app that is already installed.

## Add Microsoft Store and PC Game Pass games (Windows)

Heronite finds games installed by the Xbox app or Microsoft Store, bought or from PC Game Pass. Heronite adds them to your library. There is no login: install and update them in the Xbox app, and Heronite starts them and counts their play time.

Heronite reads them a few seconds after it starts and every ten minutes. To read them now, press **Read games now** on **Stores → Xbox**, or the Collection's refresh button. Uninstall these games in the Xbox app.

## Import games from Heroic, Lutris, Bottles, Faugus, and Playnite

Turn on a launcher in **Settings → Other launchers** with **Bring its games in**. Heronite then keeps its games in sync. On Linux, each launcher can be a normal install or a Flatpak:

| Launcher | What Heronite imports |
|---|---|
| Heroic (Linux) | Games you added by hand, and your installed Epic, GOG, and Amazon games |
| Lutris (Linux) | Games from its library (`pga.db`) |
| Bottles (Linux) | Programs of each bottle |
| Faugus (Linux) | Games from its list |
| Playnite (Windows) | Installed games that are not hidden, with covers and play time |

Close Playnite before you turn its import on: while it runs, it holds its library open and Heronite reads nothing. Playnite games still launch through Playnite.

Heronite skips their Steam games, since the Steam import already adds them, so nothing shows up twice. It only reads the other launchers' files, so they keep working.

## Add games you already have

Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program, or choose **Add from folder** in the ☰ menu to add every game in a folder: Windows programs and, on Linux, AppImages, start scripts, and Linux programs.
