---
title: "Game Launcher for All Stores: Epic, GOG, Steam | Heronite"
description: "One free launcher for Steam, Epic, GOG and Amazon, plus Battle.net, EA, Ubisoft and Rockstar on Linux. Import Heroic, Lutris and Bottles. Linux and Windows."
eyebrow: Stores and launchers
headline: "Every store, *one launcher*"
lead: "Steam, Epic Games, GOG and Amazon Games in one place, with Battle.net, EA app, Ubisoft Connect and Rockstar Games on Linux. Bring in your Heroic, Lutris, Bottles and Faugus games too."
navLabel: Stores and launchers
summary: "Log in to Epic, GOG and Amazon, read Steam with no login, run Battle.net and more on Linux, and import other launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "Heronite's console mode Library: a grid of game covers from A Plague Tale, Alan Wake and Baldur's Gate 3 to Black Myth: Wukong, with Show, Sort and Status filters above and 207 games in the list."
og: /og/stores.jpg
updated: 2026-11-01
highlights:
  - title: Steam without a login
    text: Heronite reads your Steam libraries by itself and keeps them in sync.
  - title: Epic, GOG and Amazon
    text: Log in once, then install, update, repair, move and uninstall from one download queue.
  - title: More stores on Linux
    text: Battle.net, EA app, Ubisoft Connect and Rockstar Games each run in their own Wine prefix.
  - title: Import other launchers
    text: Heroic, Lutris, Bottles and Faugus games come in and stay in sync. Heronite never writes to their files.
faq:
  - q: Is there a game launcher for all stores?
    a: Heronite is one. It puts Steam, Epic Games, GOG and Amazon Games in a single Collection on Linux and Windows. On Linux it also runs the Battle.net, EA app, Ubisoft Connect and Rockstar Games clients. It is free and open source.
  - q: Can I use Epic Games and GOG in one launcher?
    a: Yes. Open the **Stores** page, log in to each store, and every game you own shows up, installed or not. One download queue handles installs and updates for both. See the guides for [Epic on Linux](/guides/epic-games-on-linux/) and [GOG on Linux](/guides/gog-on-linux/).
  - q: Do I need to log in to Steam?
    a: No. Heronite finds your Steam libraries on its own and keeps them in sync. Steam itself still starts its games.
  - q: Will importing from Heroic or Lutris change their data?
    a: No. Heronite only reads their files. On the first start it copies Heroic's data once, and Heroic keeps working as before. Games they list from Steam are left to the Steam import, so nothing appears twice.
  - q: Do Battle.net, EA app, Ubisoft Connect and Rockstar work on Windows?
    a: On Windows, use those stores' own apps for now. Heronite runs them for you on Linux. See [Battle.net on Linux](/guides/battle-net-on-linux/) and [EA app, Ubisoft and Rockstar on Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

The games you own are spread over too many apps. Steam holds most of them, Epic gives away a free game every week, GOG sells DRM-free classics, and Amazon hands out Prime Gaming titles. Heronite brings all of them into one launcher for Linux and Windows, so you open one app, pick a game and press play.

## Which stores does Heronite support?

| Store or launcher | Linux | Windows | How it works |
|---|---|---|---|
| Steam | Yes | Yes | Libraries are read for you, no login |
| Epic Games | Yes | Yes | Log in, then install from Heronite |
| GOG | Yes | Yes | Log in, then install from Heronite |
| Amazon Games | Yes | Yes | Log in, then install from Heronite |
| Battle.net | Yes | Use the store's app | Runs in its own Wine prefix |
| EA app | Yes | Use the store's app | Runs in its own Wine prefix |
| Ubisoft Connect | Yes | Use the store's app | Runs in its own Wine prefix |
| Rockstar Games | Yes | Use the store's app | Runs in its own Wine prefix |

Emulated games, native Linux programs and Windows programs you add by hand join the same list. See the [game library](/features/game-library/) for how to sort it, or the [emulation](/features/emulation/) page to bring in your ROMs.

Once everything is in, you can search it all at once. Press <kbd>Ctrl</kbd> <kbd>K</kbd> to open the command palette and play any game by typing part of its name, whichever store it came from.

## How do I use Epic, GOG and Amazon in one launcher?

Open the **Stores** page (<kbd>Ctrl</kbd> <kbd>4</kbd>) and log in to each store. Heronite then handles the whole library. One download queue installs, updates, repairs, moves, imports and uninstalls games. Downloads pause when you go offline, failed ones are retried, and updates are checked every 3 hours.

Under the hood Heronite uses the same open source tools as Heroic, and downloads them by itself:

- [legendary](https://github.com/derrod/legendary) for Epic Games,
- [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) for GOG,
- [nile](https://github.com/imLinguin/nile) for Amazon Games.

Your logins stay on your PC and go only to the stores. You type your password on the store's own login page, shown in a small window. If that window cannot open, use the **browser method** on the same page: log in in your normal browser and paste the address or code it shows at the end.

> **Tip.** On Windows, games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app come into Heronite without downloading them again.

The step-by-step guides cover each store: [Epic Games on Linux](/guides/epic-games-on-linux/), [GOG on Linux](/guides/gog-on-linux/) and [Amazon Games on Linux](/guides/amazon-games-on-linux/).

## What about Steam?

Steam needs no login. Heronite looks for it in the usual places and keeps your libraries in sync. On Linux it checks the regular install and also the Flatpak and Snap versions. On Windows it finds Steam from the registry.

Steam still starts its own games. On Windows, Heronite can also run your scripts and programs, like trainers, around a Steam game.

![A game page in Heronite's Collection showing a Library row that says Steam, a Playing status and a Play button next to the cover.](../../../assets/screenshots/collection.webp)

*Every game page says where it came from. This one is a Steam game, next to games from other stores.*

## Can I run Battle.net, EA, Ubisoft and Rockstar on Linux?

Yes. Heronite installs each store's own app in a Wine prefix of its own, under `~/Games/Heronite/Prefixes/<store>`. Log in and install games in that app as usual. They show up in your Collection and start from it, and Heronite handles the [Wine and Proton](/features/wine-and-proton/) side.

These guides walk through each one: [Battle.net on Linux](/guides/battle-net-on-linux/) and [EA app, Ubisoft Connect and Rockstar on Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).

## Can I import games from Heroic, Lutris, Bottles or Faugus?

On Linux, yes. Heronite can bring in the games of other launchers and keep them in sync. Each source can be the normal install or the Flatpak.

| Launcher | What comes in |
|---|---|
| Heroic | Games you added by hand, and your installed Epic, GOG and Amazon games |
| Lutris | Games from its library |
| Bottles | Programs of each bottle |
| Faugus | Games from its list |

Heronite only reads the other launchers' files, so you can try it without losing anything. See how it compares in [Heronite vs Heroic](/compare/heroic/) and [Heronite vs Lutris](/compare/lutris/). If you come from Windows, there is also [Heronite vs Playnite](/compare/playnite/).

## What about games that come from no store?

Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program by hand, or point Heronite at a folder and add every game found in it at once. That covers Windows programs, and on Linux also AppImages, start scripts and native programs. It is handy for a drive full of DRM-free installs.

![The Add game dialog with fields for the title, cover and background art, the platform set to Windows, the Wine prefix and Proton version, and the executable to run.](../../../assets/screenshots/add-game.webp)

*Adding a game by hand. For Epic, GOG and Amazon games, log in on the Stores page and use Install or Import instead.*

## Why use one launcher for every store?

- **One place to look.** You stop asking which app has that game.
- **One play history.** Every session is recorded the same way, whatever the store. See [play time tracking](/features/play-time-tracking/).
- **One set of backups.** Your saves are handled in one place. See [saves and backups](/features/saves-and-backups/).
- **A light app.** It is a native Rust program, not a browser in a box. See [performance](/features/performance/).

## Read the full reference

Every login step, tool and folder is in the docs page [Stores and launchers](/docs/stores-and-launchers/). If a login window does not open, check [Troubleshooting](/docs/troubleshooting/). When you are ready, [download Heronite](/download/) and add your first store in a minute.
