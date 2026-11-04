---
title: "Playnite Alternative for Linux: Heronite vs Playnite"
description: "Playnite alternative for Linux: Heronite is a free, open source launcher for Linux and Windows. See how they compare and when Playnite is better."
eyebrow: Compare
headline: "Heronite vs Playnite"
lead: "Heronite is a Playnite alternative that runs on Linux as well as Windows, and runs Windows games on Linux through Wine or Proton. Playnite is Windows-only, with plugins and themes."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: which fits Linux players, Windows players and anyone who wants a Playnite alternative."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, Play button, details and a timeline of play sessions."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: Imports from Playnite
    text: On Windows, Heronite imports your installed Playnite games with their play time.
  - title: Wine and Proton built in
    text: On Linux, pick a Wine or Proton build per game.
  - title: Find anything fast
    text: Ctrl+K opens any game, page or action.
  - title: Saved views
    text: Keep filters and sorting as presets like Playing now, Backlog or Finished.
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

## Heronite vs Playnite: feature comparison

| | Heronite | Playnite |
|---|---|---|
| Platforms | Linux and Windows 10/11 | Windows 10/11 |
| License | GPL-3.0 | MIT |
| Built with | Rust, GPU-rendered, no bundled browser | C# and WPF |
| Steam library | Yes, no login needed | Yes |
| Epic and GOG | Yes | Yes |
| Battle.net, EA app, Ubisoft Connect | Yes, through Wine on Linux | Yes |
| Emulation | Yes | Yes |
| Play time tracking | Statistics and a journal | Yes |
| Console mode | Yes, with themes | Yes, fullscreen mode |
| Plugins and scripts | No | Yes |
| Themes | Console mode themes | Yes |
| Runs Windows games on Linux | Yes, through Wine or Proton | Not applicable |
| Import from the other launcher | Yes, on Windows | Not applicable |

The Playnite column comes from [playnite.link](https://playnite.link) and the [Playnite repository](https://github.com/JosefNemec/Playnite), current as of November 2026.

## Is Playnite coming to Linux?

Not yet. Playnite's README lists Windows 10 or 11, and it is built on WPF, a Windows framework. Its developer is rewriting it from scratch for version 11.

In [a GitHub discussion](https://github.com/JosefNemec/Playnite/issues/59) in November 2025, he wrote that he planned to move to Linux in 2026, after Playnite 11, and try to build a Linux version. We found no released Linux version as of November 2026.

## What do Heronite and Playnite share?

Both are free and open source. Both pull games from several stores into one library, record play time, support emulators and have a controller-friendly full-screen mode.

## Which one should you choose?

### Choose Playnite if…

- **You rely on plugins, scripts or a community theme.** Playnite supports plugins, PowerShell scripts and themes.
- **You have an emulator setup you already tuned.** Playnite's site describes a range of console emulators, so compare before you move yours.
- **You want a long track record.** Playnite is the older project.

### Choose Heronite if…

- **You use Linux, or dual boot.** One native app runs on both systems, and **Settings → Cloud** keeps the same library on each.
- **You want Windows games to run through Wine or Proton.** Set a version and a Wine prefix (a separate Windows folder for that game) per game, with builds from the [Wine Manager](/features/wine-and-proton/).
- **You want a native Rust app.** No bundled browser, and about 190 MB of memory when idle ([performance](/features/performance/)).
- **You want a play history.** Heronite records every session for [statistics](/features/play-time-tracking/), a yearly backlog goal, a journal and a year in review.
- **You play emulated games.** Heronite [detects your emulators](/features/emulation/), such as RetroArch, Dolphin, PCSX2 and DuckStation, and scans your ROM folders.
- **You want more sources on Linux.** Heronite runs the Battle.net, EA, Ubisoft and Rockstar store apps, and imports games from Heroic, Lutris, Bottles and Faugus.

![Heronite's console mode home screen with a large featured game and a Continue playing shelf of covers.](../../../assets/screenshots/console-home.webp)

*Console mode home: a featured game and a shelf to continue playing.*

## How do I switch from Playnite to Heronite?

On Windows, Heronite imports the games Playnite has installed. It only reads Playnite's files, so Playnite keeps working.

1. **Log in to your stores.** Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) and log in to Epic Games, GOG and Amazon Games. Steam needs no login.
2. **Import Playnite's games.** Close Playnite, then in **Settings → Other launchers** turn on **Bring its games in** under Playnite. Its installed games appear with their covers and play time, and still launch through Playnite.
3. **Add any other games.** Press <kbd>Ctrl</kbd> <kbd>N</kbd> to add a program, or choose **Add from folder** in the ☰ menu to add every game in a folder.
4. **Detect your emulators and scan your ROM folders.** On the **Emulators** page (<kbd>Ctrl</kbd> <kbd>5</kbd>), press **Detect emulators**, then **Scan now**.

Heronite leaves out Playnite's Steam, Epic, GOG and Amazon games, because it imports those from the stores directly. Tags, completion status and notes stay in Playnite.

On Windows, Heronite adds games installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app, without downloading them again. For Epic games you never played in Heronite, it can take in the play time Epic recorded.

**Next:** [Download Heronite](/download/) for Linux or Windows, then read [Getting started](/docs/getting-started/).
