---
title: "Back up your Collection and game saves (Ludusavi)"
navLabel: "Backups and saves"
description: "Back up your Heronite Collection on a schedule and your game saves after every session with Ludusavi, and restore them when you need to."
section: Guides
order: 6
updated: 2026-11-04
---

## Back up the Collection

In **Settings → Backups**, choose a folder and a schedule (daily, weekly, monthly, or only when you ask). Heronite keeps the newest 10 backups by default.

A backup can hold:

| Part | What is in it |
|---|---|
| Collection (always) | Your games, sessions, statuses, journal, and per-game settings |
| Settings | Appearance, console mode themes, and the other settings |
| Art | Covers and art you chose |
| Logins | Your store logins |

Wine and Proton builds, caches, and logs are left out; they can be downloaded again.

The backup folder must be outside Heronite's data folder; another disk or a synced folder is best. Restoring a backup is applied the next time Heronite starts.

## Back up game saves with Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) knows where thousands of games keep their saves. When it is installed, Heronite backs up a game's saves after each session, and you can restore them from the game's page (also in console mode).

Install Ludusavi from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget, or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin`, and `~/.local/bin`; the Flatpak is not found yet.

## Continue emulated games from save states

Emulated games can continue from their save states; see [Emulation](/docs/emulation/).
