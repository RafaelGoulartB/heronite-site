---
title: "Lutris Alternative for Linux: Heronite vs Lutris"
description: "A Lutris alternative for Linux and Windows. Compare install scripts, stores, emulators and play history, and see how to import your Lutris games."
eyebrow: Compare
headline: "Heronite vs Lutris: a Lutris alternative that also runs on Windows"
lead: "Heronite is a Lutris alternative that installs games from stores and also runs on Windows. Lutris is better for install scripts and runners."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: install scripts, runners, stores, emulation and play history, and how to import your Lutris games."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager listing Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek, with a table of Proton-CachyOS versions, release dates, sizes and Install buttons."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Stores, not scripts
    text: Log in to Epic, GOG and Amazon and Heronite installs from the store. It reads Steam with no login.
  - title: Imports your Lutris games
    text: On Linux, Heronite imports the games from Lutris's library and only reads its files.
  - title: Linux and Windows
    text: The same native launcher on both systems. Lutris runs on Linux only.
  - title: Your play history
    text: Every session is recorded, with statistics, a journal, a backlog goal and a year in review.
faq:
  - q: Can Heronite import my Lutris games?
    a: Yes, on Linux. Heronite reads the games from Lutris's library and keeps them in sync, with Lutris's normal install or its Flatpak. It never writes to Lutris's files, so Lutris keeps working.
  - q: What is a good Lutris alternative?
    a: Heronite, if you mostly play games from stores, emulators and your own folders. Lutris is still better if you rely on its community install scripts. Heroic is another option.
  - q: Does Heronite have install scripts like Lutris?
    a: No. Heronite installs games from the stores you log in to, and for other games you add the program or folder yourself.
  - q: "Heroic vs Lutris: which should I use?"
    a: Heroic focuses on Epic, GOG and Amazon. Lutris covers more systems, runners and install scripts. Heronite sits between them, with Steam, those three stores and emulators in one library.
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**In short:** pick Lutris if you want install scripts, or a runner for an older system or an engine. Pick Heronite if you mostly play from stores, want Steam, Epic, GOG and Amazon in one library, or want the same launcher on Windows.

## At a glance

| | Heronite | Lutris |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux |
| Built with | Rust, GPU-rendered, no bundled browser | Python |
| How games are set up | From the store, or added by hand | Install scripts, or manual setup |
| Steam library | Yes, no login needed | Yes |
| Epic, GOG, Amazon | Yes, with legendary, gogdl and nile | Yes |
| Battle.net, EA app | Linux only, in a Wine prefix | Yes |
| Emulation | Detected emulators, ROM scan, save states | Runners for many emulators and engines |
| Wine and Proton | Yes, with a Wine Manager | Yes, GE-Proton through umu by default |
| Play time | Statistics, journal, year in review | Yes, with a play time editor |
| Online account | Not needed | Optional lutris.net account |
| Import from the other launcher | Yes, on Linux | Not applicable |

The Lutris column comes from [lutris.net](https://lutris.net), the [Lutris repository](https://github.com/lutris/lutris) and its [release notes](https://github.com/lutris/lutris/releases). Lutris lists Epic and GOG on its site, and Amazon in its release notes. Current as of November 2026.

## What do Heronite and Lutris share?

Both are free, open source (GPL-3.0) launchers. Both run Windows games through Wine or Proton, connect to several stores, track play time and run emulators.

## Which one should you choose?

### Choose Lutris if…

- **You rely on community install scripts.** A Lutris installer is a YAML script that fetches a game's files, sets the game up and saves a base configuration. Scripts are published on lutris.net, and a `lutris:` link runs one from the command line. Heronite has no install scripts.
- **You want a runner for an older system or an engine.** Lutris's site names Wine, MAME, Dolphin, RetroArch and ScummVM, "and many more", and recent releases added DuckStation, Vita3K and Azahar. Heronite supports a fixed list of [emulators](/features/emulation/) (RetroArch with many cores, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3, shadPS4, Cemu, mGBA, MAME, ScummVM and more), plus a custom option for any other.
- **You like one front end for many runners,** each with its own settings.
- **You want an optional lutris.net account** to sync your library.
- **Your Lutris setup already works well.**

### Choose Heronite if…

- **You mostly play from stores.** Heronite reads Steam with no login. Log in to Epic Games, GOG and Amazon Games on the **Stores** page and the whole libraries join the Collection, installed or not, with one download queue. On Linux, Battle.net, EA app, Ubisoft Connect and Rockstar Games each run in their own Wine prefix. See [Stores and launchers](/features/stores/).
- **You want one Collection, organized your way.** Group games from every source by status, store, genre, series or year, and save views like Playing now or Backlog. <kbd>Ctrl</kbd> <kbd>K</kbd> opens a command palette.
- **You want Wine or Proton set per game.** Choose a version and a prefix, with options such as DXVK, gamescope, an FPS limit and Winetricks. The [Wine Manager](/features/wine-and-proton/) downloads Proton-CachyOS, GE-Proton and other builds, and finds the Wine runners Lutris already installed.
- **You want a light app with a play history.** Heronite is one Rust process with no browser inside, using about 190 MB of memory when idle ([performance](/features/performance/)). Every session is recorded, with [statistics](/features/play-time-tracking/), a journal, a backlog goal and a year in review. [Console mode](/features/console-mode/) is for controllers and TVs.
- **You want the same launcher on Windows.** Heronite runs on Windows with Steam, Epic, GOG and Amazon, so dual-boot players can use one launcher on both.
- **You want save backups.** With the optional Ludusavi tool, Heronite backs up a game's saves after each session. It can also back up your whole Collection on a schedule: games, sessions, statuses, journal and per-game settings, and optionally settings, art and store logins. See [Saves and backups](/features/saves-and-backups/).

![Heronite's Collection with games grouped into Playing and On Going, and one game open with its details and play timeline.](../../../assets/screenshots/collection.webp)

*The Collection: grouped games with play time, and a timeline of every session.*

## How do I switch from Lutris to Heronite?

On Linux, Heronite reads the games in Lutris's library. It only reads Lutris's files and never writes to them, so Lutris keeps working as before.

1. **Install Heronite on Linux.** The games in Lutris's library join the Collection and stay in sync. This works with Lutris's normal install and its Flatpak.
2. **Log in on the Stores page.** This brings in your Epic, GOG and Amazon libraries.

Good to know:

- Steam games that Lutris lists are left to Heronite's own Steam import, so nothing shows up twice.
- Heronite uses Lutris metadata for covers and details.
- Install scripts do not come across. Heronite imports the games in Lutris's library, not the scripts that installed them.

> **Note.** Heronite's import from Lutris is part of the Linux version only.

**Next:** Heronite is free, with no account, ads or telemetry. [Download it](/download/), then read [Getting started](/docs/getting-started/). Also see [Heronite vs Heroic](/compare/heroic/).
