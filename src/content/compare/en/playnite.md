---
title: "Playnite Alternative for Linux: Heronite vs Playnite"
description: "Looking for Playnite on Linux? Heronite is a free, open source launcher for Linux and Windows. See how they compare, and when Playnite is the better pick."
eyebrow: Compare
headline: "Heronite vs Playnite: a Playnite alternative for Linux"
lead: "There is no Playnite for Linux yet. Heronite is a similar launcher that already runs on Linux and Windows."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: which fits Linux players, Windows players and anyone who wants a Playnite alternative."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, Play button, details and a timeline of play sessions."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: Runs on Linux
    text: Heronite is a native app on Linux and Windows. Playnite runs on Windows only today.
  - title: Windows games through Wine and Proton
    text: On Linux, Heronite runs Windows games with a Wine or Proton build you pick per game.
  - title: Light and native
    text: Written in Rust and drawn on the GPU, with about 190 MB of memory when idle and no bundled browser.
  - title: Play history built in
    text: Every session is recorded, with statistics, a journal, a backlog goal and a year in review.
faq:
  - q: Is there a Playnite for Linux?
    a: Not yet. As of November 2026, Playnite needs Windows 10 or 11, and we found no released Linux version. Heronite already runs on Linux and Windows.
  - q: What is the best Playnite alternative for Linux?
    a: It depends on what you need. Heronite brings Steam, Epic, GOG, Amazon, emulators and your own games into one Collection. Heroic and Lutris are other good options.
  - q: Can Heronite import my Playnite library?
    a: No, Heronite has no Playnite importer. It reads Steam and, once you log in, brings in your Epic, GOG and Amazon libraries, so most of the library comes back.
  - q: Does Heronite have add-ons and themes like Playnite?
    a: Heronite has no add-on system. Its console mode has themes you can change and share as files. Playnite has plugins, PowerShell scripts and themes, a real strength if you want to extend your launcher.
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
| Battle.net, EA app, Ubisoft Connect | Linux only, in a Wine prefix | Yes |
| Emulation | Yes | Yes |
| Play time tracking | Statistics and a journal | Yes |
| Console mode | Yes, with themes | Yes, fullscreen mode |
| Plugins and scripts | No | Yes |
| Themes | Console mode themes | Yes |
| Runs Windows games on Linux | Yes, through Wine or Proton | Not applicable |

The Playnite column comes from [playnite.link](https://playnite.link) and the [Playnite repository](https://github.com/JosefNemec/Playnite). Current as of November 2026.

## Is Playnite coming to Linux?

Not yet. Playnite's README lists Windows 10 or 11 as its requirement, and it is built on WPF, a Windows framework. The README also says Playnite is being rewritten from scratch for version 11.

In [a GitHub discussion](https://github.com/JosefNemec/Playnite/issues/59) in November 2025, the developer wrote that he planned to move to Linux in 2026, after Playnite 11 is done, and try to build a Linux version. He expects it to be less complete than the Windows one, but usable every day with Wine and Proton integration. We found no released Linux version as of November 2026.

## What do Heronite and Playnite share?

Both are free and open source. Both pull your games from several stores into one library, record play time, support emulators and have a controller-friendly full-screen mode.

## Which one should you choose?

### Choose Playnite if…

- **You play on Windows only and are happy with it.** Nothing in Heronite is a reason to give up a setup you like.
- **You rely on plugins, scripts or a community theme.** Playnite is extensible through plugins, scripts and themes, with far more room than Heronite.
- **You want Battle.net, Ubisoft Connect or EA app games imported straight in on Windows.** Playnite's site lists Steam, Epic, GOG, Battle.net, Ubisoft Connect and others as libraries it connects, and its repository also mentions the EA app. On Windows, Heronite handles Steam, Epic, GOG and Amazon.
- **You have a library or emulator setup you have already tuned.** Playnite's site describes a range of console emulators, so compare before you move yours.
- **You want a long track record.** Playnite's developer was already discussing Linux in 2017. Heronite is younger.

### Choose Heronite if…

- **You use Linux, or dual boot.** Heronite is one native app for both systems, and your Collection and views look the same on each. On Windows it runs games directly.
- **You want Windows games to run through Wine or Proton from the app that lists them.** Set a version and prefix per game. The [Wine Manager](/features/wine-and-proton/) downloads builds such as Proton-CachyOS and GE-Proton.
- **You want a light app.** Heronite is one Rust process with no browser engine inside, using about 190 MB of memory when idle. See [performance](/features/performance/).
- **You want a play history.** Heronite records every session: [statistics](/features/play-time-tracking/) by week, month and year, a yearly backlog goal, a journal next to your screenshots, and a year in review.
- **You want console mode with themes.** [Console mode](/features/console-mode/) is a controller-first layout for the couch or a TV, with eight layouts and seven themes. Export a theme as a file to share.
- **You play emulated games.** Heronite [detects the emulators](/features/emulation/) you have installed, including RetroArch with its cores, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3, Cemu and mGBA, and scans your ROM folders on Linux and Windows. Each ROM becomes a game with its own cover and play time, and you can continue from a save state. You can also connect a RetroAchievements account.
- **You want more stores on Linux.** Heronite installs the Battle.net, EA app, Ubisoft Connect and Rockstar Games clients in their own Wine prefixes, and their games show up in the same Collection.
- **You want to import games from Heroic, Lutris, Bottles or Faugus** on Linux.

![Heronite's console mode home screen with a large featured game and a Continue playing shelf of covers.](../../../assets/screenshots/console-home.webp)

*Console mode home: a featured game and a shelf to continue playing.*

## How do I switch from Playnite to Heronite?

Heronite has no Playnite importer, so there is no one-click move. Here is what to do:

1. **Log in to Epic Games, GOG and Amazon Games** on the **Stores** page. Those whole libraries join the Collection. Steam needs no login.
2. **Add the games you added by hand again.** Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program, or point at a folder and add every game found in it at once.
3. **Let Heronite [detect your emulators](/features/emulation/) and scan your ROM folders.** Your emulated games return.

On Windows, games already installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app come in without downloading again. For Epic games you never played in Heronite, it can also take in the play time Epic recorded.

Playnite's own data does not move over. Tags, completion status, notes and Playnite's play time stay in Playnite, which keeps working as before. Heronite does not touch its files.

> **Note.** You can run both side by side on Windows while you decide. Neither one changes the other's data.

**Next:** Heronite is free, with no account, ads or telemetry. [Download it](/download/) for Linux or Windows, then read [Getting started](/docs/getting-started/).
