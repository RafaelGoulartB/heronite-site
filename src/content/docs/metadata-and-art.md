---
title: "Metadata and art"
description: "Where Heronite gets covers and game details, and how to add SteamGridDB and IGDB keys, Steam achievements and RetroAchievements."
section: Guides
order: 5
updated: 2026-11-01
---

Heronite fills in covers, art, descriptions, and details by itself. Most sources need nothing from you; two optional keys give better results.

## Sources that need no setup

- **Steam and the stores:** covers, art, and details for their own games.
- **Lutris and Playnite** metadata.
- **[How Long To Beat](https://howlongtobeat.com):** how long a game takes to finish.
- **[ProtonDB](https://www.protondb.com)** (Linux): how well a Windows game runs on Linux. Non-Steam games are matched by title.
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux): the anti-cheat status.
- **Your own screenshots**, the web, or a picture file for any game.

## Optional keys

Add these in **Settings → Metadata**.

### SteamGridDB

[SteamGridDB](https://www.steamgriddb.com) has community covers, heroes, and logos, very useful for games outside Steam and for emulated games.

1. Log in to SteamGridDB.
2. Open [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) and generate a key.
3. Paste it in "SteamGridDB API key".

A key imported from Heroic may have been encrypted by Heroic; if covers do not load, paste the key again.

### IGDB

[IGDB](https://www.igdb.com) gives descriptions, genres, companies, series, and release dates. It uses a Twitch developer account:

1. Open the [Twitch developer console](https://dev.twitch.tv/console) and register an application (any name; OAuth redirect `http://localhost`; category "Application Integration").
2. Copy its **Client ID**, and create a **Client Secret**.
3. Paste both in "Twitch / IGDB Client ID" and "Secret", then press **Test IGDB**.

## Achievements

- **Steam:** add your Steam Web API key to see achievements and progress.
- **[RetroAchievements](https://retroachievements.org):** connect your account for emulated games.

Accounts are stored in your data folder (see [Files and Folders](/docs/files-and-folders/)).

## Editing a game

Select a game and press <kbd>F3</kbd> to change its name, art, genres, companies, series, and more. Select several games to change them all at once; <kbd>Ctrl</kbd> <kbd>Z</kbd> undoes it. Genres, companies, and series can also be renamed and merged across the whole Collection.
