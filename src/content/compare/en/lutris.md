---
title: "Lutris Alternative for Linux: Heronite vs Lutris"
description: "A Lutris alternative for Linux and Windows. Compare install scripts, stores, emulators and play history, and see how to import your Lutris games."
eyebrow: Compare
headline: "Heronite vs Lutris"
lead: "Heronite is a Lutris alternative for Linux and Windows that installs games from the stores you log in to."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: install scripts, runners, stores, emulation and play history, and how to import your Lutris games."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager listing Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek, with a table of Proton-CachyOS versions, release dates, sizes and Install buttons."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Imports your Lutris games
    text: On Linux, the games in Lutris's library carry over and stay in sync.
  - title: No sign-up
    text: Heronite works without an account of its own.
  - title: Your play history
    text: Every session feeds statistics, a journal and a year in review.
  - title: Save backups
    text: Ludusavi backs up a game's saves after each session.
faq:
  - q: Does Heronite have install scripts like Lutris?
    a: Yes. Heronite installs a game from a YAML install script file you choose, then adds it to your library. Lutris has the community script library on lutris.net.
  - q: Does Heronite work on the Steam Deck?
    a: Yes. It runs as an AppImage in SteamOS desktop mode, and in Gaming Mode as a non-Steam game. See the [Steam Deck guide](/guides/steam-deck/).
  - q: "Heroic vs Lutris: which should I use?"
    a: Heroic focuses on Epic, GOG and Amazon. Lutris covers more systems, runners and install scripts. See [Heronite vs Heroic](/compare/heroic/).
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**In short:** pick Lutris if you want the community install scripts on lutris.net, or a runner for an older system or an engine. Pick Heronite if you mostly play from stores, want Steam, Epic, GOG and Amazon in one library, or want the same launcher on Windows.

## At a glance

| | Heronite | Lutris |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux |
| Built with | Rust, GPU-rendered, no bundled browser | Python |
| How games are set up | From the store, by hand, or a YAML install script | Install scripts, or manual setup |
| Steam library | Yes, no login needed | Yes |
| Epic, GOG, Amazon | Yes, with legendary, gogdl and nile | Yes |
| Battle.net, EA app | Yes, in a Wine prefix on Linux | Yes |
| Emulation | Detected emulators, ROM scan, save states | Runners for many emulators and engines |
| Wine and Proton | Yes, with a Wine Manager | Yes, GE-Proton through umu by default |
| Play time | Statistics, journal, year in review | Yes, with a play time editor |
| Cloud saves | Epic and GOG, in beta | Not listed |
| Online account | Not needed | Optional lutris.net account |
| Import from the other launcher | Yes, on Linux | Not applicable |

The Lutris column comes from [lutris.net](https://lutris.net), the [Lutris repository](https://github.com/lutris/lutris) and its [release notes](https://github.com/lutris/lutris/releases). Lutris lists Epic and GOG on its site, and Amazon in its release notes. "Not listed" means the Lutris README does not list it. Current as of November 2026.

## What do Heronite and Lutris share?

Both are free, open source (GPL-3.0) launchers. Both run Windows games through Wine or Proton, connect to several stores, track play time and run emulators.

## Which one should you choose?

### Choose Lutris if…

- **You rely on community install scripts.** Lutris installers are YAML scripts on lutris.net, and a `lutris:` link runs one from the command line.
- **You want a runner for an older system or an engine.** Lutris's site names Wine, MAME, Dolphin, RetroArch and ScummVM, "and many more". Recent releases added DuckStation, Vita3K and Azahar.
- **You like one front end for many runners,** each with its own settings.
- **You want an optional lutris.net account** to sync your library.

### Choose Heronite if…

- **You mostly play from stores.** Log in to Epic Games, GOG and Amazon Games on the **Stores** page, and every game you own there joins your library, installed or not. One download queue installs them ([stores](/features/stores/)).
- **You want one library, organized your way.** Group games from every source by status, store, genre, series or year, and save views like Playing now or Backlog.
- **You want Wine or Proton set per game.** Choose a version and a Wine prefix (a separate Windows folder), with options such as DXVK, gamescope, an FPS limit and Winetricks. The [Wine Manager](/features/wine-and-proton/) downloads Proton-CachyOS and GE-Proton, and finds the Wine runners Lutris already installed.
- **You want a light app with a play history.** Heronite uses about 190 MB of memory when idle ([performance](/features/performance/)) and records every session for [statistics](/features/play-time-tracking/) and a year in review.
- **You play on a TV or with a controller.** [Console mode](/features/console-mode/) has eight layouts and seven themes you can edit and share.
- **You want the same launcher on Windows.** Heronite handles Steam, Epic, GOG, Amazon and the Microsoft Store there, and **Settings → Cloud** keeps one library on both systems of a dual boot.
- **You want your saves kept safe.** Heronite syncs Epic and GOG cloud saves, and backs up any game's saves after each session with the optional Ludusavi tool ([saves and backups](/features/saves-and-backups/)).

![Heronite's Collection with games grouped into Playing and On Going, and one game open with its details and play timeline.](../../../assets/screenshots/collection.webp)

*The Collection: grouped games, play time and a session timeline.*

## How do I switch from Lutris to Heronite?

On Linux, Heronite imports the games in Lutris's library. It only reads Lutris's files, so Lutris keeps working as before.

1. **[Install Heronite](/docs/installation/) and start it.**
2. **Turn on the Lutris import.** In **Settings → Other launchers**, turn on **Bring its games in** under Lutris. Its installed games join your library with their covers and play time, and stay in sync. This works with Lutris's normal install or its Flatpak.
3. **Log in to your stores.** Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) and log in to Epic Games, GOG and Amazon Games to bring in those libraries.

Good to know:

- Lutris keeps starting the games it brought in, with the settings you gave them there.
- Heronite skips the Steam games Lutris lists and uses its own Steam import, so nothing shows up twice.
- Heronite uses Lutris metadata for covers and details.
- Heronite imports the games in Lutris's library, not the install scripts that set them up.

**Next:** [Download Heronite](/download/), then read [Getting started](/docs/getting-started/).
