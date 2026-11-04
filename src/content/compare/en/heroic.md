---
title: "Heroic Alternative: Heronite vs Heroic Games Launcher"
description: "A Heroic alternative for Linux and Windows: compare Steam, emulators and memory use, see when Heroic wins, and import your Heroic games."
eyebrow: Compare
headline: "Heronite vs Heroic Games Launcher"
lead: "Heronite is a Heroic alternative: both install Epic, GOG and Amazon games on Linux and Windows."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: where they differ, when Heroic is better, and how to import your Heroic games on Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "Heronite's Ctrl+K palette searching “contr”: Control from Epic and CONTROL Ultimate Edition from Steam in the same list, with play time and actions to play, open settings or the game's folder."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: Same store tools
    text: Both log in and download through the same open source tools.
  - title: Steam and emulators too
    text: Steam, emulated games and your own games share one library.
  - title: Imports your Heroic setup
    text: On Linux, your store logins and hand-added games carry over.
  - title: No bundled browser
    text: A native Rust app; Heroic is built on Electron.
faq:
  - q: What is the difference between Heronite and Heroic?
    a: Heronite is a native Rust app with Steam and emulators in its library. Heroic is an Electron app that also runs on macOS.
  - q: Is my store login safe in Heronite?
    a: Yes. Your logins stay on your PC and go only to the stores. You type your password on the store's own login page.
  - q: Does Heronite work on the Steam Deck?
    a: Yes. It runs as an AppImage in SteamOS desktop mode, and in Gaming Mode as a non-Steam game. See the [Steam Deck guide](/guides/steam-deck/).
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**In short:** pick Heroic if you use macOS, or want a launcher focused on Epic, GOG and Amazon. Pick Heronite if you want Steam, emulators and your own games in one library, or a lighter app.

## At a glance

| | Heronite | Heroic |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux, Windows 10/11, macOS 14 or newer |
| Built with | Rust, GPU-rendered, no bundled browser | Electron, TypeScript and React |
| Epic, GOG, Amazon | Yes | Yes |
| Steam library | Yes, no login needed | Not listed |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Yes, in a Wine prefix on Linux | Not listed |
| Microsoft Store and PC Game Pass | Yes, on Windows | Not listed |
| Emulation | Yes | Not listed |
| Play time | Statistics, journal, year in review | Time played on each game page |
| Console mode | Yes, with themes | Yes |
| Cloud saves | Epic and GOG, in beta | Yes |
| Save backups | Ludusavi, after each session | Not listed |
| Same library on several PCs | Yes, through a folder or cloud account | Not listed |
| Import from the other launcher | Yes, on Linux | Not applicable |

The Heroic column comes from its [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), its [website](https://heroicgameslauncher.com) and its [release notes](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), current as of November 2026. "Not listed" means the README does not list it. Heroic added console mode in version 2.21 (April 2026) and ZOOM Platform support in January 2026, and shipped almost every month in 2026.

## What do Heronite and Heroic share?

Both use the same open source store tools: legendary for Epic Games, gogdl for GOG and nile for Amazon Games.

Both are GPL-3.0 and run Windows games on Linux through Wine or Proton, with a Wine Manager. Both have a download queue, SteamGridDB cover art and a place for non-store games.

## Which one should you choose?

### Choose Heroic if…

- **You use macOS.** Heroic runs on macOS 14 or newer, and runs Windows games there through Crossover. Heronite has no macOS version.
- **You want store extras.** Recent Heroic releases added deals screens, GOG achievements on the game page and experimental ZOOM Platform support on Linux.
- **You want a proven Wine and Steam Deck setup.** Heroic's site highlights automatic Wine settings and Steam Deck support. Heronite is the younger project.
- **You need another language.** Heroic's README says it is translated into almost 40 languages. Heronite speaks English, Portuguese (Brazil), Spanish and German.
- **You want frequent releases.** Heroic releases often, which helps when a store changes something.

### Choose Heronite if…

- **You want every source in one library.** Heronite reads Steam with no login, detects emulators and scans your ROM folders.
- **You play Battle.net, EA app, Ubisoft Connect or Rockstar games.** Their games join the same list on Linux and Windows. On Linux, each store app runs in its own Wine prefix (a separate Windows folder).
- **You want a lighter app.** Heronite uses about 190 MB of memory when idle and shows the library in about 215 ms ([performance](/features/performance/)).
- **You want a deeper play history.** Heronite records every session: [statistics](/features/play-time-tracking/) by week, month and year, a yearly backlog goal, a journal next to your screenshots, and a year in review.
- **You want console mode you can restyle.** Heronite's [console mode](/features/console-mode/) has eight layouts and seven themes you can edit and share as a file.
- **You have a large library.** Group by status, store, genre, series or year, and save filters as views like Playing now or Backlog. See the [game library](/features/game-library/).
- **You want Steam in the same launcher on Windows.** On Windows, Heronite handles Steam and Microsoft Store games next to Epic, GOG and Amazon. It picks up games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app.
- **You play on several PCs.** **Settings → Cloud** keeps one library on each, such as a dual boot's Linux and Windows ([saves and backups](/features/saves-and-backups/)).

## How do I switch from Heroic to Heronite?

On Linux, Heronite imports your Heroic setup. It only reads Heroic's files, so Heroic keeps working and you can use both.

1. **Start Heronite.** If `~/.config/heroic` exists, Heronite copies its data once. Your store logins, the games you added by hand with their settings, and your settings carry over.
2. **Turn on the Heroic import.** In **Settings → Other launchers**, turn on **Bring its games in** under Heroic. Heronite then keeps your added and installed games in sync with Heroic's normal install or its Flatpak.
3. **Check your installed store games.** Heronite reads Heroic's records of the Epic, GOG and Amazon games it installed. They show as installed, in the same folders, once the store is logged in.

Heronite skips the Steam games Heroic lists and brings them in through its Steam import, so nothing shows twice.

> **Note.** Heroic may have encrypted the SteamGridDB key that Heronite imported. If covers do not load, paste the key again in **Settings → Metadata → SteamGridDB API key**.

**Next:** [Download Heronite](/download/), then read [Stores and launchers](/docs/stores-and-launchers/).
