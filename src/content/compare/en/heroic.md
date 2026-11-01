---
title: "Heronite vs Heroic Games Launcher: Which One to Use?"
description: "Heronite and Heroic share legendary, gogdl and nile for Epic, GOG and Amazon. See how they differ on Steam, emulators and memory use, and how to import Heroic."
eyebrow: Compare
headline: "Heronite vs Heroic Games Launcher: *same tools*, different launcher"
lead: "Heroic is the open source launcher many Linux players use for Epic, GOG and Amazon. Heronite uses the same store tools, adds Steam and emulators in one library, and can import your Heroic games."
navLabel: Heronite vs Heroic
summary: "Heronite and Heroic share legendary, gogdl and nile for Epic, GOG and Amazon. See where they differ and how to switch."
order: 2
hero: ../../../assets/screenshots/console-home.webp
heroAlt: "Heronite's console home: SP Football Life 2026 large over its art, with a Continue playing shelf of covers and controller button hints along the bottom."
og: /og/heroic.jpg
updated: 2026-11-01
highlights:
  - title: Same store tools
    text: Heronite uses legendary, gogdl and nile for Epic, GOG and Amazon, the same open source tools as Heroic.
  - title: Steam and emulators too
    text: Steam, store clients on Linux, emulated games and your own games share one Collection.
  - title: Imports your Heroic setup
    text: Heronite copies Heroic's data once and only reads it, so Heroic keeps working as before.
  - title: No bundled browser
    text: A native Rust app with about 190 MB of memory when idle, instead of an Electron app.
faq:
  - q: Can Heronite import my Heroic library?
    a: Yes, on Linux. On the first start, if Heroic's folder exists, Heronite copies its data once, so your logins, added games and settings carry over. It also adds Heroic's installed Epic, GOG and Amazon games. It only reads Heroic's files and never writes to them.
  - q: What is the difference between Heronite and Heroic?
    a: Both use legendary, gogdl and nile for Epic, GOG and Amazon. Heronite is a native Rust app that also reads your Steam libraries, runs emulators and keeps a detailed play history. Heroic is an Electron app that also runs on macOS and has been around longer.
  - q: Is Heronite a Heroic alternative?
    a: Yes, if you want Steam, Epic, GOG, Amazon and emulated games in one library on Linux or Windows. If you use macOS, or you only need Heroic's store features, Heroic is still a good choice.
  - q: Will I lose my Heroic setup if I try Heronite?
    a: No. Heronite copies Heroic's data once and only reads it. Heroic keeps working as before, so you can use both while you decide.
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

Heroic and Heronite are close relatives. Both are free, open source (GPL-3.0) and built around the same three store tools: legendary for Epic Games, gogdl for GOG and nile for Amazon Games. If you like how Heroic installs games, the store side of Heronite will feel familiar.

**In short:** pick Heroic if you use macOS, or want what it adds on top of the stores. Pick Heronite if you want Steam, emulators and your own games in the same library, a lighter app, or the same launcher on Linux and Windows. This page is current as of November 2026.

## At a glance

| | Heronite | Heroic |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux, Windows 10/11 and macOS 14 or newer |
| License | GPL-3.0 | GPL-3.0 |
| Built with | Rust, GPU-rendered, no bundled browser | Electron, TypeScript and React |
| Epic, GOG, Amazon | Yes | Yes |
| Store tools | legendary, gogdl, nile | legendary, gogdl, nile |
| Steam library | Yes, no login needed | Not among the stores its README lists |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Linux only, each store's own app runs in a Wine prefix | Not among the stores its README lists |
| Emulation | Yes, emulators detected and ROM folders scanned | Not listed in its README |
| Wine and Proton | Yes, with a Wine Manager | Yes, with a Wine Manager |
| Play time | Yes, with statistics, a journal and a year in review | Time played on each game page |
| Controller / couch mode | Yes, console mode with themes | Yes, a fullscreen console-like mode since April 2026 |
| Save backups | Ludusavi backups after each session | Cloud save sync |
| Import from the other launcher | Yes, on Linux | Not applicable |

The Heroic column comes from its [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), its [website](https://heroicgameslauncher.com) and its [release notes](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases).

## What they share

The store tools are the heart of both. Because Heronite uses the same legendary, gogdl and nile, installing, updating and repairing Epic, GOG and Amazon games works in a similar way, and your login goes only to the stores. Both also run Windows games on Linux through Wine or Proton, with builds you download and manage in the app.

Both have a download queue, cover art from SteamGridDB, and a place to add games that do not come from a store.

## Where Heronite differs

### One library for every source

Heroic's README lists Epic, GOG and Amazon Games as its stores. Heronite starts there and goes further. It reads your Steam libraries with no login, and keeps them in sync. It detects emulators and scans your ROM folders. On Linux it also runs the Battle.net, EA app, Ubisoft Connect and Rockstar Games clients in their own Wine prefixes, so those games join the same [Collection](/features/game-library/).

### A native app, not a browser

Heroic is built on Electron, which bundles a Chromium browser with the app. Heronite is a single native Rust process drawn on the GPU. It uses about 190 MB of memory when idle (about 95 MB when closed to the tray), around 0.1% CPU, and shows the library in about 215 ms. The install is 64 MB. Read more on the [performance](/features/performance/) page.

### A deeper play history

Heronite records every session and turns it into [statistics](/features/play-time-tracking/): time by week, month and year, a yearly backlog goal, a journal for notes next to your screenshots, and a year in review. Heroic shows time played on each game page.

### Console mode you can restyle

Both launchers have a controller-friendly full-screen mode. Heroic's arrived in version 2.21 in April 2026, and it has grown since. Heronite's [console mode](/features/console-mode/) has eight layouts and seven built-in themes, and you can change colours, fonts, menus and game pages, then share a theme as a file.

### Organizing a large library

Heroic lets you add non-store apps and sort games into custom categories. Heronite puts more weight on the Collection itself. You can group by status, store, genre, series or year, save filters as views such as Playing now or Backlog, and edit many games at once with an undo. Genres, companies and series can be renamed and merged across the whole library. Search forgives typos, and `Ctrl+K` opens a command palette for any game, page or action. If you have hundreds of games, these tools save time.

### The same launcher on Windows

Heronite runs on Windows with Steam, Epic, GOG and Amazon, and brings in games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app. Heroic also runs on Windows.

## Where Heroic is stronger

- **macOS.** Heroic runs on macOS 14 or newer, and runs Windows games there through Crossover. Heronite has no macOS version.
- **Wine, Proton and the Steam Deck.** Heroic's site highlights automatic Wine settings and Steam Deck support, and it has a long record of fixes for running Epic and GOG games on Linux. Heronite is the younger project.
- **Translations.** Heroic's README says it is translated into almost 40 languages. Heronite speaks English, Portuguese (Brazil), Spanish and German.
- **Cloud saves.** Heroic lists cloud save sync as a feature. Heronite backs up saves locally with Ludusavi, an optional tool.
- **Store extras.** Heroic's recent releases added deals screens and GOG achievements on the game page. It also has an experimental integration with the ZOOM Platform, Linux only when it was added in January 2026.
- **Regular releases.** Heroic shipped a release almost every month in 2026, which helps when a store changes something.

## When to choose Heroic

- You use macOS.
- You mainly want Epic, GOG and Amazon, and a launcher focused on them.
- You want cloud save sync or the ZOOM Platform integration.
- You need a language Heronite does not have yet.
- Your setup already works and you do not need Steam or emulators in the same app.

## When to choose Heronite

- You want Steam, Epic, GOG, Amazon, emulators and your own games in one library.
- You want Battle.net, EA app, Ubisoft Connect and Rockstar games in the same list on Linux.
- You prefer a native app with no bundled browser.
- You like play statistics, a journal and a backlog goal.
- You want the same launcher on Linux and Windows.

## Switching from Heroic

You do not have to choose before you try. On Linux, Heronite takes your Heroic setup with you:

1. **First start.** If Heroic's data folder exists, Heronite copies it once. Your store logins, the games you added by hand with their settings, and your settings carry over.
2. **Installed store games.** Heroic's records of the Epic, GOG and Amazon games it installed are added to Heronite's, so those games show as installed, in the same folders, once the store is logged in.
3. **Catching up.** Heronite keeps the import in sync and picks up games you add in Heroic later. It works with Heroic's normal install and with its Flatpak.
4. **Steam games.** If Heroic lists a Steam game, Heronite leaves it to its own Steam import, so nothing shows twice.

Heronite only reads Heroic's files. It never writes to them, so Heroic keeps working as before and you can go back at any time. The import is part of the Linux version only.

> **Note.** A SteamGridDB key imported from Heroic may have been encrypted by Heroic. If covers do not load, paste the key again in Settings.

## Try it

Heronite is free, with no account, ads or telemetry. [Download it](/download/), then read how [stores and launchers](/docs/stores-and-launchers/) work, or follow the guides for [Epic](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon](/guides/amazon-games-on-linux/) on Linux.
