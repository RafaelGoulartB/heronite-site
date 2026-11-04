---
title: "Heroic Alternative: Heronite vs Heroic Games Launcher"
description: "A Heroic alternative for Linux and Windows: compare Steam, emulators and memory use, see when Heroic wins, and import your Heroic games."
eyebrow: Compare
headline: "Heronite vs Heroic: a Heroic alternative with Steam and emulators"
lead: "Heronite covers Epic, GOG and Amazon like Heroic does, and adds Steam, emulators and your own games."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: where they differ, when Heroic is better, and how to import your Heroic games on Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "Heronite's Ctrl+K palette searching “contr”: Control from Epic and CONTROL Ultimate Edition from Steam in the same list, with play time and actions to play, open settings or the game's folder."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: Same store tools
    text: Both use legendary, gogdl and nile.
  - title: Steam and emulators too
    text: Steam, emulated games and your own games share one library.
  - title: Imports your Heroic setup
    text: On Linux, your store logins and added games carry over.
  - title: No bundled browser
    text: A native Rust app, about 190 MB of memory when idle.
faq:
  - q: Can Heronite import my Heroic library?
    a: "Yes, on Linux: your logins, added games and settings carry over. [See the steps](#how-do-i-switch-from-heroic-to-heronite)."
  - q: What is the difference between Heronite and Heroic?
    a: Heronite is a native Rust app with Steam, emulators and a detailed play history. Heroic is an Electron app that runs on macOS and has been around longer.
  - q: Should I use Heronite or Heroic on Linux?
    a: Use Heroic if you want cloud saves or only play Epic, GOG and Amazon. Use Heronite for Steam, emulators and one launcher on Linux and Windows.
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**In short:** pick Heroic if you use macOS, or want cloud saves and a launcher focused on Epic, GOG and Amazon. Pick Heronite if you want Steam, emulators and your own games in one library, a lighter app, or the same launcher on Linux and Windows.

## At a glance

| | Heronite | Heroic |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux, Windows 10/11, macOS 14 or newer |
| Built with | Rust, GPU-rendered, no bundled browser | Electron, TypeScript and React |
| Epic, GOG, Amazon | Yes | Yes |
| Steam library | Yes, no login needed | Not listed |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Linux only, in a Wine prefix | Not listed |
| Emulation | Yes | Not listed |
| Play time | Statistics, journal, year in review | Time played on each game page |
| Console mode | Yes, with themes | Yes, since version 2.21 (April 2026) |
| Save backups | Ludusavi, after each session | Cloud save sync |
| Import from the other launcher | Yes, on Linux | Not applicable |

The Heroic column comes from its [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), its [website](https://heroicgameslauncher.com) and its [release notes](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), current as of November 2026. "Not listed" means the README does not list it.

## What do Heronite and Heroic share?

Both use the same open source store tools: legendary for Epic Games, gogdl for GOG and nile for Amazon Games. Your login goes only to the stores.

Both are GPL-3.0 and run Windows games on Linux through Wine or Proton, with a Wine Manager. Both have a download queue, SteamGridDB cover art and a place for non-store games.

## Which one should you choose?

### Choose Heroic if…

- **You use macOS.** Heroic runs on macOS 14 or newer, and runs Windows games there through Crossover. Heronite has no macOS version.
- **You want cloud saves.** Heroic lists cloud save sync. Heronite backs up saves locally with Ludusavi, an optional tool.
- **You want store extras.** Recent Heroic releases added deals screens and GOG achievements on the game page, plus experimental ZOOM Platform support (Linux, since January 2026).
- **You want a proven Wine and Steam Deck setup.** Heroic's site highlights automatic Wine settings and Steam Deck support. Heronite is the younger project; see its [Steam Deck guide](/guides/steam-deck/).
- **You need another language.** Heroic's README says it is translated into almost 40 languages. Heronite speaks English, Portuguese (Brazil), Spanish and German.
- **You want frequent releases.** Heroic shipped almost every month in 2026, which helps when a store changes something.
- **Heroic already covers you.** You only play Epic, GOG and Amazon and it works.

### Choose Heronite if…

- **You want every source in one library.** Heronite reads Steam with no login, detects emulators and scans your ROM folders.
- **You play Battle.net, EA app, Ubisoft Connect or Rockstar games on Linux.** Each client runs in its own Wine prefix, and its games join the same list.
- **You want a lighter app.** Heroic bundles a Chromium browser. Heronite is one native Rust process, using about 190 MB of memory when idle and showing the library in about 215 ms ([performance](/features/performance/)).
- **You want a deeper play history.** Heronite records every session: [statistics](/features/play-time-tracking/) by week, month and year, a yearly backlog goal, a journal next to your screenshots, and a year in review.
- **You want console mode you can restyle.** Heronite's [console mode](/features/console-mode/) has eight layouts and seven themes you can edit and share as a file.
- **You have a large library.** Group by status, store, genre, series or year and save filters as views like Playing now or Backlog; Heroic offers custom categories. See the [game library](/features/game-library/).
- **You want one launcher on Linux and Windows.** On Windows it handles Steam, Epic, GOG and Amazon, and picks up games installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app. Heroic runs on Windows too.

## How do I switch from Heroic to Heronite?

On Linux, Heronite imports your Heroic setup. It only reads Heroic's files and never writes to them, so Heroic keeps working and you can use both.

1. **Start Heronite.** If `~/.config/heroic` exists, Heronite copies its data once. Your store logins, the games you added by hand with their settings, and your settings carry over.
2. **Check your installed store games.** Heronite reads Heroic's records of the Epic, GOG and Amazon games it installed. They show as installed, in the same folders, once the store is logged in.

After the first start, Heronite keeps the list of added and installed games in sync with Heroic. This works with Heroic's normal install and its Flatpak.

If Heroic lists a Steam game, Heronite leaves it to its own Steam import, so nothing shows twice.

> **Note.** You can keep adding games in Heroic. Heronite picks them up.

> **Note.** A SteamGridDB key imported from Heroic may have been encrypted by Heroic. If covers do not load, paste the key again in Settings.

**Next:** [Download Heronite](/download/), then read [Stores and launchers](/docs/stores-and-launchers/).
