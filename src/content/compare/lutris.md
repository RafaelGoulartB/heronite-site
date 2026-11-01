---
title: "Heronite vs Lutris: A Lutris Alternative for Linux"
description: "Heronite and Lutris both bring many games into one Linux library. Compare install scripts, stores and emulators, and see how to import your Lutris games."
eyebrow: Compare
headline: "Heronite vs Lutris: a Lutris alternative *that also runs on Windows*"
lead: "Lutris is the long-standing open source game manager for Linux, with install scripts and a long list of runners. Heronite is a newer, lighter launcher for Linux and Windows. Here is how they differ."
navLabel: Heronite vs Lutris
summary: "How Heronite and Lutris compare on install scripts, runners, stores, emulation and play history, and how to import your Lutris games."
order: 3
hero: ../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager listing Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek, with a table of Proton-CachyOS versions, release dates, sizes and Install buttons."
og: /og/lutris.jpg
updated: 2026-11-01
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
    a: Yes, on Linux. Heronite reads the games from Lutris's library and keeps them in sync. It works with Lutris's normal install and its Flatpak, and it never writes to Lutris's files. Lutris keeps working as before.
  - q: What is a good Lutris alternative?
    a: Heronite is one if you mostly play games from stores, emulators and your own folders. Lutris is still the better choice if you rely on its community install scripts. Heroic is another option, and we compare it on its own page.
  - q: Does Heronite have install scripts like Lutris?
    a: No. Lutris has installers, written as scripts, that fetch and set up a game for you. Heronite installs games from the stores you log in to, and for other games you add the program or folder yourself.
  - q: "Heroic vs Lutris: which should I use?"
    a: Heroic focuses on Epic, GOG and Amazon, and Lutris covers more systems, runners and install scripts. Heronite sits between them with Steam, the three Heroic stores and emulators in one library. See the Heroic comparison for more.
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

Lutris is one of the oldest and most capable game managers on Linux. Heronite does some of the same work in a different way. Lutris leans on community install scripts and many runners. Heronite leans on stores, one Collection and a lighter app.

**In short:** pick Lutris if you want install scripts or a runner for an older system or an engine. Pick Heronite if you mostly play from stores, want Steam, Epic, GOG and Amazon in one library, or want the same launcher on Windows too. This page is current as of November 2026.

## At a glance

| | Heronite | Lutris |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Linux |
| License | GPL-3.0 | GPL-3.0 |
| Built with | Rust, GPU-rendered, no bundled browser | Python |
| How games are set up | Installed from the store, or added by hand | Community install scripts, plus manual setup |
| Steam library | Yes, no login needed | Yes |
| Epic, GOG, Amazon | Yes, with legendary, gogdl and nile | Epic and GOG are listed on its site, and Amazon in its release notes |
| Battle.net, EA app | Yes, each store's own app runs in a Wine prefix | Yes |
| Emulation | Emulators detected, ROM folders scanned, save states | Runners for many emulators and engines |
| Wine and Proton | Yes, with a Wine Manager | Yes, Proton-GE through umu is the default |
| Play time | Yes, with statistics, a journal and a year in review | Yes, with a play time editor |
| Online account | Not needed | Optional lutris.net account |
| Import from the other launcher | Yes | Not applicable |

The Lutris column comes from [lutris.net](https://lutris.net), the [Lutris repository](https://github.com/lutris/lutris) and its [release notes](https://github.com/lutris/lutris/releases).

## What they share

Both are free and open source under the GPL-3.0. Both run Windows games through Wine or Proton. Both talk to several stores, track play time and run emulators, so a Linux player can use either as a front door to the whole library.

## Install scripts and runners: Lutris's big strength

This is where Lutris is hard to beat. A Lutris installer is a script, written in YAML, that fetches a game's files, sets the game up and saves a base configuration. Scripts are published on lutris.net, and you can run one from the command line with a `lutris:` link. For an older game or one from outside the stores, a good script can save you an afternoon.

Lutris also describes itself as a way to combine emulators, engine re-implementations and compatibility layers. Its site names Wine, MAME, Dolphin, RetroArch and ScummVM, "and many more", and recent releases added runners such as DuckStation, Vita3K and Azahar.

Heronite has no install scripts. It supports a fixed list of [emulators](/features/emulation/) (RetroArch with many cores, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3, shadPS4, Cemu, mGBA, MAME, ScummVM and more, plus a custom option for any other), and Windows games run through Wine or Proton. If you want broad coverage of unusual systems and engines, Lutris offers more.

## Where Heronite differs

### Stores first

Heronite starts from the stores. It reads your Steam libraries with no login. Log in to Epic Games, GOG and Amazon Games on the **Stores** page and the whole libraries join the Collection, installed or not, with one download queue for installs, updates and repairs. On Linux, Battle.net, EA app, Ubisoft Connect and Rockstar Games each run in their own Wine prefix, and their games show up in the same list. See [Stores and launchers](/features/stores/).

### One Collection, organized your way

Games from every source sit in one Collection that you group by status, store, genre, series or year, and save as views like Playing now or Backlog. Search forgives typos, and `Ctrl+K` opens a command palette. You can edit many games at once.

![Heronite's Collection with games grouped into Playing and On Going, and one game open with its details and play timeline.](../../assets/screenshots/collection.webp)

*The Collection: grouped games with play time, and a timeline of every session.*

### Wine and Proton, managed per game

Heronite sets Wine or Proton per game, with a version and a prefix you choose. Options include DXVK, gamescope, an FPS limit and Winetricks. The [Wine Manager](/features/wine-and-proton/) downloads Proton-CachyOS, GE-Proton and other builds, and also finds the Wine runners that Lutris has already installed.

### A light native app with a play history

Heronite is a single Rust process with no browser inside. It uses about 190 MB of memory when idle (about 95 MB when closed to the tray), around 0.1% CPU, and shows the library in about 215 ms. Every session is recorded, so you get [statistics](/features/play-time-tracking/), a journal, a backlog goal and a year in review. There is also a [console mode](/features/console-mode/) for controllers and TVs.

### Windows too

Lutris runs on Linux only. Heronite also runs on Windows, with Steam, Epic, GOG and Amazon, so dual-boot players can use one launcher on both.

### Saves and backups

Heronite can back up a game's saves after each session when the optional Ludusavi tool is installed, and you restore them from the game's page. It can also back up your whole Collection on a schedule: your games, sessions, statuses, journal and per-game settings, and optionally your settings, art and store logins. Read more in [Saves and backups](/features/saves-and-backups/).

## Heronite, Heroic and Lutris

People often ask about Heroic vs Lutris. Heroic's README lists Epic, GOG and Amazon as its stores. Lutris covers more, with install scripts and many runners. Heronite uses the same store tools as Heroic and adds Steam and emulators in one library, and it can import games from both. See [Heronite vs Heroic](/compare/heroic/) for that one.

## When to choose Lutris

- You rely on community install scripts to set games up.
- You want a runner for an older system or an engine that Heronite does not support.
- You like a front end for many different runners, each with its own settings.
- You want an optional lutris.net account to sync your library.
- Your Lutris setup already works well for you.

## When to choose Heronite

- You mostly play from Steam, Epic, GOG, Amazon, or other store clients.
- You want games from stores, emulators and your own folders in one Collection.
- You want a light app, with no bundled browser.
- You want play statistics, a journal and a backlog goal.
- You want the same launcher on Linux and Windows.

## Switching from Lutris

You can try Heronite without losing anything. On Linux, Heronite reads the games in Lutris's library and brings them into the Collection. It works with Lutris's normal install and its Flatpak, and keeps them in sync. Heronite only reads Lutris's files. It never writes to them, so Lutris keeps working as before.

A few things to know:

- Steam games that Lutris lists are left to Heronite's own Steam import, so nothing shows up twice.
- Heronite uses Lutris metadata for covers and details, and finds Wine runners that Lutris installed.
- Install scripts do not come across. Heronite imports the games in Lutris's library, not the scripts that installed them. To bring in your Epic, GOG and Amazon libraries, log in on the Stores page.

> **Note.** Heronite's import from Lutris is part of the Linux version only.

## Try it

Heronite is free, with no account, ads or telemetry. [Download it](/download/), then read [Getting started](/docs/getting-started/) and how [Wine and Proton](/docs/wine-and-proton/) work in Heronite.
