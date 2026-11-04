---
title: "Playnite Alternative for Linux: Heronite vs Playnite"
description: "Playnite alternative for Linux: Heronite is a free, open source launcher for Linux and Windows. See how they compare and when Playnite is better."
eyebrow: Compare
headline: "Heronite vs Playnite"
lead: "Heronite is a Playnite alternative that runs on both Linux and Windows."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: which fits Linux players, Windows players and anyone who wants a Playnite alternative."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, Play button, details and a timeline of play sessions."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: Imports from Playnite
    text: On Windows, your installed Playnite games come in with their play time.
  - title: Wine and Proton built in
    text: On Linux, pick a Wine or Proton build per game.
  - title: Light and native
    text: Written in Rust, with no browser engine inside.
  - title: Play history built in
    text: Every session feeds statistics, a journal and a year in review.
faq:
  - q: Which launcher can I use instead of Playnite on Linux?
    a: Heronite, which brings your stores, emulators and own games into one library. Heroic and Lutris also run on Linux.
  - q: Does Heronite have add-ons and themes like Playnite?
    a: No add-on system. You can edit console mode themes and share them as files.
  - q: Does Heronite work on the Steam Deck?
    a: Yes. It runs as an AppImage in SteamOS desktop mode, and in Gaming Mode as a non-Steam game. See the [Steam Deck guide](/guides/steam-deck/).
related:
  - /features/stores/
  - /features/emulation/
  - /compare/heroic/
---

**In short:** pick Playnite if you play on Windows and want its mature library and add-on ecosystem. Pick Heronite if you play on Linux, or on both Linux and Windows and want the same launcher on each.

## At a glance

| | Heronite | Playnite |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Windows 10/11 |
| License | GPL-3.0 | MIT |
| Built with | Rust, GPU-rendered, no bundled browser | C# and WPF |
| Steam library | Yes, no login needed | Yes |
| Epic and GOG | Yes | Yes |
| Battle.net, EA app, Ubisoft Connect | Yes, in a Wine prefix on Linux | Yes |
| Emulation | Yes | Yes |
| Play time tracking | Statistics and a journal | Yes |
| Console mode | Yes, with themes | Yes, fullscreen mode |
| Plugins and scripts | No | Yes |
| Themes | Console mode themes | Yes |
| Runs Windows games on Linux | Yes, through Wine or Proton | Not applicable |
| Import from the other launcher | Yes, on Windows | Not applicable |

The Playnite column comes from [playnite.link](https://playnite.link) and the [Playnite repository](https://github.com/JosefNemec/Playnite). Current as of November 2026.

## Is Playnite coming to Linux?

Not yet. Playnite's README lists Windows 10 or 11 as its requirement, and it is built on WPF, a Windows framework. The README also says Playnite is being rewritten from scratch for version 11.

Playnite's developer was already discussing Linux in 2017. In [a GitHub discussion](https://github.com/JosefNemec/Playnite/issues/59) in November 2025, he wrote that he planned to move to Linux in 2026, after Playnite 11 is done. He would try to build a Linux version, less complete than the Windows one but usable every day with Wine and Proton. We found no released Linux version as of November 2026.

## What do Heronite and Playnite share?

Both are free and open source. Both pull games from several stores into one library, record play time, support emulators and have a controller-friendly full-screen mode.

## Which one should you choose?

### Choose Playnite if…

- **You rely on plugins, scripts or a community theme.** Playnite supports plugins, PowerShell scripts and themes.
- **You have an emulator setup you already tuned.** Playnite's site describes a range of console emulators, so compare before you move yours.
- **You want a long track record.** Playnite is the older project.

### Choose Heronite if…

- **You use Linux, or dual boot.** Heronite is one native app for both systems, and **Settings → Cloud** keeps the same library on each.
- **You want Windows games to run through Wine or Proton from the app that lists them.** Set a version and a Wine prefix (a separate Windows folder) per game. The [Wine Manager](/features/wine-and-proton/) downloads builds such as Proton-CachyOS and GE-Proton.
- **You want a light app.** Heronite uses about 190 MB of memory when idle ([performance](/features/performance/)).
- **You want a play history.** Heronite records every session: [statistics](/features/play-time-tracking/) by week, month and year, a yearly backlog goal, a journal next to your screenshots, and a year in review.
- **You want console mode with themes.** [Console mode](/features/console-mode/) is a controller-first layout for the couch or a TV, with eight layouts and seven themes. Export a theme as a file to share.
- **You play emulated games.** Heronite [detects the emulators](/features/emulation/) you have installed, including RetroArch with its cores, Dolphin, PCSX2 and DuckStation, and scans your ROM folders. Each ROM becomes a game with its own cover and play time, and you can continue from a save state.
- **You want more stores on Linux.** Heronite installs the Battle.net, EA app, Ubisoft Connect and Rockstar Games store apps in their own Wine prefixes, and their games join the same library.
- **You use Heroic, Lutris, Bottles or Faugus on Linux.** Heronite imports their games and keeps them in sync.

![Heronite's console mode home screen with a large featured game and a Continue playing shelf of covers.](../../../assets/screenshots/console-home.webp)

*Console mode home: a featured game and a shelf to continue playing.*

## How do I switch from Playnite to Heronite?

On Windows, Heronite imports the games Playnite has installed. It only reads Playnite's files, so Playnite keeps working.

1. **Log in to your stores.** Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) and log in to Epic Games, GOG and Amazon Games. Your whole libraries join your library. Steam needs no login.
2. **Bring in Playnite's games (Windows).** Close Playnite, then in **Settings → Other launchers** turn on **Bring its games in** under Playnite. Its installed games come in with their covers and play time, and Playnite keeps starting them.
3. **Add any other games.** Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program, or point at a folder to add every game found in it.
4. **Detect your emulators and scan your ROM folders.** On the **Emulators** page (<kbd>Ctrl</kbd> <kbd>5</kbd>), press **Detect emulators**, then **Scan now**.

Heronite leaves out Playnite's Steam, Epic, GOG and Amazon games, because it brings those in itself. Tags, completion status and notes stay in Playnite.

On Windows, Heronite picks up games installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app without downloading them again. For Epic games you never played in Heronite, it can take in the play time Epic recorded.

**Next:** [Download Heronite](/download/) for Linux or Windows, then read [Getting started](/docs/getting-started/).
