---
title: "Game Launcher for All Stores: Epic, GOG, Steam | Heronite"
description: "A game launcher for all stores: Steam, Epic, GOG and Amazon on Linux and Windows, plus Battle.net, EA, Ubisoft and Rockstar on Linux. Free."
eyebrow: Stores and launchers
headline: "A game launcher for all stores"
lead: "Heronite is a free game launcher for all stores. It runs Steam, Epic Games, GOG and Amazon Games on Linux and Windows, plus Battle.net, EA app, Ubisoft Connect and Rockstar Games on Linux."
navLabel: Stores and launchers
summary: "Log in to Epic, GOG and Amazon, read Steam with no login, run Battle.net and more on Linux, and import other launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "Heronite's console mode Library: a grid of game covers from A Plague Tale, Alan Wake and Baldur's Gate 3 to Black Myth: Wukong, with Show, Sort and Status filters above and 207 games in the list."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam without a login
    text: Heronite reads your Steam libraries and keeps them in sync.
  - title: Epic, GOG and Amazon
    text: Log in once, then manage every game from one download queue.
  - title: More stores on Linux
    text: Battle.net, EA app, Ubisoft Connect and Rockstar Games each run in their own Wine prefix.
  - title: Import other launchers
    text: Heroic, Lutris, Bottles and Faugus games come in and stay in sync. Heronite never writes to their files.
faq:
  - q: Is there a game launcher for all stores?
    a: Yes. Heronite puts Steam, Epic Games, GOG and Amazon Games in one Collection on Linux and Windows. On Linux it also runs Battle.net, EA app, Ubisoft Connect and Rockstar Games.
  - q: Can I use Epic Games and GOG in one launcher?
    a: Yes. Log in to each store on the **Stores** page, and one download queue handles both. See [Epic on Linux](/guides/epic-games-on-linux/) and [GOG on Linux](/guides/gog-on-linux/).
  - q: Do I need to log in to Steam?
    a: No. Heronite finds your Steam libraries on its own, and Steam still starts its games.
  - q: Will importing from Heroic or Lutris change their data?
    a: No. Heronite only reads their files. On the first start it copies Heroic's data once.
  - q: Do Battle.net, EA app, Ubisoft Connect and Rockstar work on Windows?
    a: On Windows, use those stores' own apps for now. Heronite runs them on Linux. See [Battle.net on Linux](/guides/battle-net-on-linux/) and [EA app, Ubisoft and Rockstar on Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

Every game you own from these stores lands in one Collection, so you open one app, pick a game and press play.

## Which stores does Heronite support?

| Store or launcher | Linux | Windows | How it works |
|---|---|---|---|
| Steam | Yes | Yes | Libraries are read, no login |
| Epic Games | Yes | Yes | Log in, then install from Heronite |
| GOG | Yes | Yes | Log in, then install from Heronite |
| Amazon Games | Yes | Yes | Log in, then install from Heronite |
| Battle.net | Yes | Use the store's app | Runs in its own Wine prefix |
| EA app | Yes | Use the store's app | Runs in its own Wine prefix |
| Ubisoft Connect | Yes | Use the store's app | Runs in its own Wine prefix |
| Rockstar Games | Yes | Use the store's app | Runs in its own Wine prefix |

Emulated games and programs you add by hand join the same list. See the [game library](/features/game-library/) and [emulation](/features/emulation/).

## How do I log in to Epic, GOG and Amazon?

1. Open the **Stores** page (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Log in to each store on its own login page, shown in a small window.
3. Use **Install** or **Import** on a game.

One download queue handles installs, updates, repairs and uninstalls, and also moves and imports games. Downloads pause offline, failed ones are retried, and updates are checked every 3 hours.

Your logins stay on your PC and go only to the stores. If the login window does not open, use the **browser method** on the same page. See [Stores and launchers](/docs/stores-and-launchers/).

Heronite downloads the open source tools Heroic uses: [legendary](https://github.com/derrod/legendary) for Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) for GOG and [nile](https://github.com/imLinguin/nile) for Amazon Games.

> **Tip.** On Windows, games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app come in without a new download.

Guides: [Epic Games](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon Games](/guides/amazon-games-on-linux/) on Linux.

## How does Heronite find my Steam library?

Heronite looks for Steam in the usual places. On Linux it checks the regular install and the Flatpak and Snap versions. On Windows it finds Steam in the registry.

Steam still starts its own games. On Windows, Heronite can also run your scripts and programs, like trainers, around a Steam game.

![A game page in Heronite's Collection showing a Library row that says Steam, a Playing status and a Play button next to the cover.](../../../assets/screenshots/collection.webp)

*Every game page says where it came from. This one is a Steam game, next to games from other stores.*

## Can I run Battle.net, EA, Ubisoft and Rockstar on Linux?

Yes. Heronite installs each store's own app in its own Wine prefix, under `~/Games/Heronite/Prefixes/<store>`. Log in and install games in that app. They show up in your Collection and start from it, using [Wine and Proton](/features/wine-and-proton/).

Guides: [Battle.net](/guides/battle-net-on-linux/) and [EA app, Ubisoft Connect and Rockstar](/guides/ea-app-ubisoft-rockstar-on-linux/) on Linux.

## Can I import games from Heroic, Lutris, Bottles or Faugus?

On Linux, yes. Each source can be the normal install or the Flatpak. Heronite only reads their files, so you lose nothing.

| Launcher | What comes in |
|---|---|
| Heroic | Games you added by hand, and your installed Epic, GOG and Amazon games |
| Lutris | Games from its library |
| Bottles | Programs of each bottle |
| Faugus | Games from its list |

Games they list from Steam are left to the Steam import, so nothing appears twice. Compare: [Heronite vs Heroic](/compare/heroic/), [vs Lutris](/compare/lutris/) and [vs Playnite](/compare/playnite/).

## How do I add a game that is not from a store?

Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program by hand, or point Heronite at a folder to add every game found in it. That covers Windows programs and, on Linux, AppImages, start scripts and native programs.

![The Add game dialog with fields for the title, cover and background art, the platform set to Windows, the Wine prefix and Proton version, and the executable to run.](../../../assets/screenshots/add-game.webp)

*Adding a game by hand. For Epic, GOG and Amazon games, log in on the Stores page and use Install or Import instead.*

Next: [download Heronite](/download/) and add your first store.
