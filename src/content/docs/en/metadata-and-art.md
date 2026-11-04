---
title: "Game covers and metadata: SteamGridDB and IGDB keys"
navLabel: "Metadata and art"
description: "Where Heronite gets game covers, art and details, how to add SteamGridDB and IGDB keys, and how to show Steam and RetroAchievements achievements."
section: Guides
order: 5
updated: 2026-11-04
---

Heronite fills in game covers, art and details with no setup. Two optional keys, from SteamGridDB and IGDB, improve the results.

## Which sources need no setup?

- **Steam and the stores:** covers, art, and details for their own games
- **Lutris:** metadata
- **[How Long To Beat](https://howlongtobeat.com):** how long a game takes to finish
- **[ProtonDB](https://www.protondb.com)** (Linux): how well a Windows game runs on Linux, with non-Steam games matched by title
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux): the anti-cheat status
- **Your own screenshots**, the web, or a picture file: art for any game

## Add SteamGridDB and IGDB keys

### Get a SteamGridDB key

[SteamGridDB](https://www.steamgriddb.com) has community covers, heroes, and logos, useful for games outside Steam and for emulated games.

1. Log in to SteamGridDB.
2. Open [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) and generate a key.
3. Paste it in **SteamGridDB API key** in **Settings → Metadata**.

If covers do not load after you imported the key from Heroic, paste it again: Heroic may have encrypted it.

### Get an IGDB key

[IGDB](https://www.igdb.com) gives descriptions, genres, companies, series, and release dates. It needs a Twitch developer account:

1. Open the [Twitch developer console](https://dev.twitch.tv/console) and register an application (any name; OAuth redirect `http://localhost`; category "Application Integration").
2. Copy its **Client ID**, and create a **Client Secret**.
3. In **Settings → Metadata**, paste them in **Twitch / IGDB Client ID** and **Twitch / IGDB Client Secret**.
4. Press **Test IGDB**.

## Show Steam and RetroAchievements achievements

Set both in **Settings → Achievements**:

- **Steam:** games played on this PC need no key. For other games, add a **Steam Web API key (optional)** from [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey); your Steam profile's game details must be public.
- **[RetroAchievements](https://retroachievements.org):** connect your account for emulated games.

Heronite stores these accounts in your [data folder](/docs/files-and-folders/).

## Edit a game's name, art and details

Select a game and press <kbd>F3</kbd> to change its name, art, genres, companies, series, and more. Select several games to change them all at once; <kbd>Ctrl</kbd> <kbd>Z</kbd> undoes it. You can rename and merge genres, companies, and series across the whole library.
