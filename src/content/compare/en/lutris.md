---
title: "Lutris Alternative for Linux: Heronite vs Lutris"
description: "A Lutris alternative for Linux and Windows. Compare install scripts, stores, emulators and play history, and see how to import your Lutris games."
eyebrow: Compare
headline: "Heronite vs Lutris: a Lutris alternative that also runs on Windows"
lead: "Heronite installs games from stores and runs on Windows too; Lutris is better for install scripts and runners."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: install scripts, runners, stores, emulation and play history, and how to import your Lutris games."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager listing Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek, with a table of Proton-CachyOS versions, release dates, sizes and Install buttons."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Stores, not scripts
    text: Install from Epic, GOG and Amazon; Steam needs no login.
  - title: Imports your Lutris games
    text: On Linux, the games in Lutris's library carry over.
  - title: Linux and Windows
    text: One native launcher on both. Lutris runs on Linux only.
  - title: Your play history
    text: Every session feeds statistics, a journal and a year in review.
faq:
  - q: Can Heronite import my Lutris games?
    a: "Yes, on Linux: Heronite reads the games in Lutris's library and keeps them in sync. [See the steps](#how-do-i-switch-from-lutris-to-heronite)."
  - q: Does Heronite have install scripts like Lutris?
    a: No. Heronite installs from the stores you log in to; for other games you add the program or folder.
  - q: "Heroic vs Lutris: which should I use?"
    a: Heroic focuses on Epic, GOG and Amazon. Lutris covers more systems, runners and install scripts. Heronite combines Steam, those three stores and emulators in one library.
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

- **You rely on community install scripts.** Lutris installers are YAML scripts on lutris.net, and a `lutris:` link runs one from the command line. Heronite has none.
- **You want a runner for an older system or an engine.** Lutris's site names Wine, MAME, Dolphin, RetroArch and ScummVM, "and many more", and recent releases added DuckStation, Vita3K and Azahar. Heronite supports a fixed list of [emulators](/features/emulation/), plus a custom option for any other.
- **You like one front end for many runners,** each with its own settings.
- **You want an optional lutris.net account** to sync your library.
- **Lutris already covers you.** Your current setup works well.

### Choose Heronite if…

- **You mostly play from stores.** Log in to Epic Games, GOG and Amazon Games on the **Stores** page and your whole libraries join the Collection, installed or not, with one download queue. Steam needs no login, and on Linux the Battle.net, EA app, Ubisoft Connect and Rockstar Games clients each get their own Wine prefix ([stores](/features/stores/)).
- **You want one library, organized your way.** Group games from every source by status, store, genre, series or year, and save views like Playing now or Backlog. <kbd>Ctrl</kbd> <kbd>K</kbd> opens a command palette.
- **You want Wine or Proton set per game.** Choose a version and a prefix, with options such as DXVK, gamescope, an FPS limit and Winetricks. The [Wine Manager](/features/wine-and-proton/) downloads Proton-CachyOS, GE-Proton and other builds, and finds the Wine runners Lutris already installed.
- **You want a light app with a play history.** Heronite is one Rust process with no browser inside, using about 190 MB of memory when idle ([performance](/features/performance/)). Every session is recorded, with [statistics](/features/play-time-tracking/), a journal, a backlog goal and a year in review.
- **You play on a TV or with a controller.** [Console mode](/features/console-mode/) is built for controllers and TVs.
- **You want the same launcher on Windows.** It handles Steam, Epic, GOG and Amazon there, so dual-boot players use one launcher on both.
- **You want save backups.** With the optional Ludusavi tool, Heronite backs up a game's saves after each session. It can back up your whole library on a schedule too ([saves and backups](/features/saves-and-backups/)).

![Heronite's Collection with games grouped into Playing and On Going, and one game open with its details and play timeline.](../../../assets/screenshots/collection.webp)

*The Collection: grouped games with play time, and a timeline of every session.*

## How do I switch from Lutris to Heronite?

On Linux, Heronite reads the games in Lutris's library and never writes to Lutris's files, so Lutris keeps working as before.

1. **Install Heronite on Linux.** The games in Lutris's library join the Collection and stay in sync, with Lutris's normal install or its Flatpak.
2. **Log in on the Stores page.** This brings in your Epic, GOG and Amazon libraries.

Good to know:

- Heronite skips the Steam games Lutris lists and uses its own Steam import, so nothing shows up twice.
- Heronite uses Lutris metadata for covers and details.
- Heronite imports the games in Lutris's library, not the install scripts that set them up.

**Next:** [Download Heronite](/download/), then read [Getting started](/docs/getting-started/) or compare [Heronite vs Heroic](/compare/heroic/).
