---
title: "Game Launcher for All Stores on Linux | Heronite"
description: "A game launcher for all stores on Linux and Windows: Steam with no login, Epic, GOG and Amazon in one library, plus Heroic and Lutris imports."
eyebrow: Stores and launchers
headline: "A game launcher for all stores"
lead: "Heronite runs Steam, Epic Games, GOG and Amazon Games, plus the Battle.net, EA app, Ubisoft Connect and Rockstar Games store apps, on Linux and Windows. On Windows it also adds Microsoft Store and PC Game Pass games."
navLabel: Stores and launchers
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect and Rockstar in one library, Xbox app games on Windows, and imports from other launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "Heronite's console mode Library: a grid of game covers from A Plague Tale, Alan Wake and Baldur's Gate 3 to Black Myth: Wukong, with Show, Sort and Status filters above and 207 games in the list."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Updates every 3 hours
    text: Heronite checks for game updates and retries failed downloads.
  - title: Store apps on both systems
    text: On Linux each store app runs in its own Wine prefix; on Windows, as it is.
  - title: Trainers with Steam games
    text: On Windows, Heronite starts a trainer with a Steam game and closes it after.
  - title: Import other launchers
    text: Heroic, Lutris, Bottles and Faugus on Linux, Playnite on Windows, stay in sync.
faq:
  - q: Can I use Epic Games and GOG in one launcher?
    a: Yes. Log in to each store on the **Stores** page, and one download queue handles both. See [Epic on Linux](/guides/epic-games-on-linux/) and [GOG on Linux](/guides/gog-on-linux/).
  - q: Does Heronite work with Steam installed as a Flatpak or Snap?
    a: Yes. On Linux, Heronite finds the regular Steam install, the Flatpak and the Snap.
  - q: Do Battle.net, EA app, Ubisoft Connect and Rockstar work on Windows?
    a: Yes. On Windows, Heronite runs those store apps without Wine. You log in and install games in each app, and Heronite starts the games and counts their play time.
  - q: Is Heronite free?
    a: Yes. Heronite is free and open source under the GPL-3.0 license, with no accounts, ads or telemetry.
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## Which stores does Heronite support?

| Store or launcher | Linux | Windows | How it works |
|---|---|---|---|
| Steam | Yes | Yes | Heronite reads your libraries |
| Epic Games | Yes | Yes | Log in, then install from Heronite |
| GOG | Yes | Yes | Log in, then install from Heronite |
| Amazon Games | Yes | Yes | Log in, then install from Heronite |
| Battle.net | Yes | Yes | Store app, through Wine on Linux |
| EA app | Yes | Yes | Store app, through Wine on Linux |
| Ubisoft Connect | Yes | Yes | Store app, through Wine on Linux |
| Rockstar Games | Yes | Yes | Store app, through Wine on Linux |
| Microsoft Store and PC Game Pass | No | Yes | Heronite reads the Xbox app's games |

Emulated games and programs you add by hand join the same library. See the [game library](/features/game-library/) and [emulation](/features/emulation/).

## How do I log in to Epic, GOG and Amazon?

1. Open the **Stores** page (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Log in to each store in the small login window.
3. Press **Install** or **Import** on a game.

If the login window does not open, use the **browser method** on the **Stores** page. Your logins stay on your PC and go only to the stores. See [Stores and launchers](/docs/stores-and-launchers/).

On Windows, games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app come in without a new download. Store-specific steps are in the [Epic Games](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon Games](/guides/amazon-games-on-linux/) guides.

Heronite downloads the open source tools Heroic uses for these stores: [legendary](https://github.com/derrod/legendary) for Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) for GOG and [nile](https://github.com/imLinguin/nile) for Amazon.

## How does Heronite download and update games?

One download queue installs, updates, repairs and uninstalls your Epic, GOG and Amazon games. The same queue moves and imports games. Heronite pauses downloads offline, retries failed ones and checks for updates every 3 hours.

## Do I need to log in to Steam?

No. Heronite reads your Steam libraries and keeps them in sync, and Steam still starts its games.

On Linux, Heronite checks the regular Steam install, the Flatpak and the Snap. On Windows, it reads Steam's location from the registry.

![A game page in Heronite's Collection showing a Library row that says Steam, a Playing status and a Play button next to the cover.](../../../assets/screenshots/collection.webp)

*A Steam game's page, next to games from other stores.*

## How do I run a trainer with a Steam game on Windows?

1. Open the game's **Game settings**. A Steam game opens on the **Launch** tab.
2. Under **Programs alongside the game**, press **Add program** and choose the trainer.
3. Play the game from Heronite.

Heronite starts the trainer with the game and closes it when the game ends. The same tab has **Scripts** to run before the game starts and after it exits. A game started from Steam itself gets none of them.

## Can I run Battle.net, EA, Ubisoft and Rockstar games?

Yes, on Linux and Windows. Log in and install games in the store app. The games show up in your library, start through the store app and count their play time.

On Linux, Heronite installs each store app in its own Wine prefix (a separate Windows folder), under `~/Games/Heronite/Prefixes/<store>`, and runs it through [Wine and Proton](/features/wine-and-proton/). Step by step: [Battle.net](/guides/battle-net-on-linux/) and [EA app, Ubisoft Connect and Rockstar](/guides/ea-app-ubisoft-rockstar-on-linux/) on Linux.

On Windows, Heronite runs the store app as it is, with no Wine. **Set up** with the app's name downloads the official installer and runs it.

## How do I add Microsoft Store and PC Game Pass games?

On Windows, Heronite adds them by itself: the games the Xbox app or the Microsoft Store installed, bought or from PC Game Pass. There is no login. The Xbox app keeps installing and updating them, and Heronite starts them and counts their play time.

The **Xbox** page under **Stores** shows whether the Xbox app is there and lists the games found. Press **Read games now** after you install one. Uninstall these games in the Xbox app.

## Can I import games from Heroic, Lutris, Bottles, Faugus or Playnite?

Yes: Heroic, Lutris, Bottles and Faugus on Linux, and Playnite on Windows. Turn one on in **Settings → Other launchers**. Heronite only reads their files, so their data stays untouched, and on the first start it copies Heroic's data once.

| Launcher | What comes in |
|---|---|
| Heroic (Linux) | Games you added by hand, and your installed Epic, GOG and Amazon games |
| Lutris (Linux) | Games from its library |
| Bottles (Linux) | Programs of each bottle |
| Faugus (Linux) | Games from its list |
| Playnite (Windows) | Installed games that are not hidden, with covers and play time |

Each Linux launcher can be the normal install or the Flatpak. Playnite keeps starting its games.

Heronite skips their Steam games, because the Steam import already has them. See how it compares in [Heronite vs Heroic](/compare/heroic/), [vs Lutris](/compare/lutris/) and [vs Playnite](/compare/playnite/).

## How do I add a game that is not from a store?

Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program by hand, or point Heronite at a folder to add every game found in it. That covers Windows programs and, on Linux, AppImages, start scripts and native programs. Epic, GOG and Amazon games come in through **Install** or **Import** on the **Stores** page instead.

![The Add game dialog with fields for the title, cover and background art, the platform set to Windows, the Wine prefix and Proton version, and the executable to run.](../../../assets/screenshots/add-game.webp)

*The Add game dialog for a Windows program.*

Next: [download Heronite](/download/) and add your first store.
