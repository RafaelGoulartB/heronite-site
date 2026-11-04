---
title: "Linux Game Launcher and Library Manager | Heronite"
description: "Manage every PC game in one library on Linux and Windows. Group, filter, search and bulk edit Steam, Epic, GOG, Amazon and emulated games together."
eyebrow: Game library
headline: "One game library manager for Linux and Windows"
lead: "Heronite is a Linux and Windows game launcher and library manager. Its Collection holds every store, emulator and loose game in one place."
navLabel: Game library
summary: "One Collection for every store, emulator and loose game, with views, groups, bulk edits and a command palette."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, Play button, details and a timeline of play sessions."
og: /og/game-library.jpg
updated: 2026-11-04
highlights:
  - title: One list, every source
    text: Stores, emulators and loose games sit side by side.
  - title: Grouped your way
    text: Group by status, store, genre or series, as a list or a grid.
  - title: Saved views
    text: Keep filters and sorting as presets like Playing now, Backlog or Finished.
  - title: Find anything fast
    text: Search forgives typos, and Ctrl+K opens any game, page or action.
faq:
  - q: Is there a Linux library manager for Steam, Epic and GOG together?
    a: Yes. Steam needs no login. Log in to Epic Games, GOG or Amazon Games on the **Stores** page and their libraries join the Collection. See [the list](#how-do-i-get-all-my-games-into-one-collection).
  - q: Does importing from Heroic or Lutris change their files?
    a: No. Heronite imports and syncs games from Heroic, Lutris, Bottles and Faugus, and never writes to their files.
  - q: Does Heronite find cover art for emulated games?
    a: Yes. Every game added from a ROM folder gets art. See [where covers come from](#where-do-covers-and-game-details-come-from).
  - q: Can I undo a bulk edit?
    a: Yes. Press `Ctrl+Z` to undo the last change.
related:
  - /features/stores/
  - /features/play-time-tracking/
  - /docs/getting-started/
---

## How do I get all my games into one Collection?

- **Steam:** Heronite reads your [Steam](/features/stores/) libraries with no login.
- **Epic Games, GOG and Amazon Games:** log in on the **Stores** page and the whole library comes in, installed or not.
- **Battle.net, EA app, Ubisoft Connect and Rockstar Games (Linux):** each store app runs in its own Wine prefix, and the games you install show up.
- **Emulators:** Heronite [detects them](/features/emulation/) and scans your ROM folders.
- **Other launchers (Linux):** Heroic, Lutris, Bottles and Faugus games come in and stay in sync.

## How do I add a game that is not from a store?

Press <kbd>Ctrl</kbd> <kbd>N</kbd> (or **Add a game**) to add:

- a Windows program (`.exe`), which on Linux runs through [Wine or Proton](/features/wine-and-proton/),
- a native Linux program, an AppImage or a start script,
- a browser game, by its web address,
- a ROM, or a whole ROM folder.

To add many games at once, point Heronite at a folder.

![The Add game dialog with fields for the title, square art and background, the platform, the Wine prefix and Proton version, and the program to run.](../../../assets/screenshots/add-game.webp)

*Adding a Windows game on Linux.*

## How do I group, filter and sort my games?

**Focus** is a list with a details panel: cover, screenshots, description and a timeline of play sessions. The **grid** shows covers only.

On either layout, group games by:

- status (Playing, On going, Plan to play, Finished and more),
- store,
- genre,
- series,
- release year, and other fields.

Save filters and sorting as **views**, such as *Playing now*, *Backlog*, *Finished* or *Favourites*.

## How do I search the Collection?

Start typing anywhere in the Collection. Search forgives small typos, and <kbd>Enter</kbd> plays or installs the first result.

The **command palette** (<kbd>Ctrl</kbd> <kbd>K</kbd>) opens any page, runs any action and plays any game by part of its name. Press <kbd>→</kbd> on a game for its actions, like opening its settings or install folder.

![The command palette searching for "contr", listing Control and other matching games, with actions to play Control, open its settings or its folder.](../../../assets/screenshots/command-palette.webp)

*Searching "contr" in the command palette.*

## How do I edit many games at once?

1. Select games with <kbd>Space</kbd>, <kbd>Shift</kbd> + arrows or <kbd>Ctrl</kbd> <kbd>A</kbd>.
2. Press <kbd>F3</kbd>.
3. Change their status, genres, series, companies and more.

<kbd>Ctrl</kbd> <kbd>Z</kbd> undoes the change. You can rename and merge genres, companies and series, so *RPG* and *Role-playing (RPG)* become one.

## Where do covers and game details come from?

Covers, backgrounds and logos come from the stores and from Steam and Lutris metadata. So do descriptions and release dates. Two optional free keys add more:

- [SteamGridDB](https://www.steamgriddb.com) for community covers, good for emulated and DRM-free games,
- [IGDB](https://www.igdb.com) for descriptions, genres and series.

Each game shows **How Long To Beat** times, **ProtonDB** ratings on Linux, **anti-cheat status** from Are We Anti-Cheat Yet? and **achievements** from Steam and RetroAchievements. Set up the keys in [Metadata and art](/docs/metadata-and-art/).

## Can I keep notes on a game?

Yes. Every game has a **journal** for notes, such as where you left off or what you thought of an ending. It shares a timeline with your [play sessions](/features/play-time-tracking/) and the screenshots you took.
