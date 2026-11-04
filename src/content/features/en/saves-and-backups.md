---
title: "Game Save Backup on PC with Ludusavi | Heronite"
description: "Back up game saves automatically after every session with Ludusavi and restore them from the game page. Plus scheduled Collection backups and a disk map."
eyebrow: Saves and backups
headline: "Game save backup with Ludusavi, after every session"
lead: "Heronite backs up your game saves after every session. It is a Ludusavi frontend for Linux and Windows, and it backs up your whole Collection on a schedule."
navLabel: Saves and backups
summary: "Automatic save backups with Ludusavi, scheduled Collection backups, a disk usage map and screenshot settings."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "Heronite's Backups settings: the backup folder, how often (once a week), how many backups are kept, a Back up now button, toggles for what goes in a backup and a list of earlier backups to restore."
og: /og/saves-and-backups.jpg
updated: 2026-11-04
highlights:
  - title: Saves after every session
    text: With Ludusavi installed, Heronite backs up a game's saves each time you stop playing.
  - title: Restore from the game page
    text: Restore a save from the game's page, in console mode too.
  - title: Scheduled backups
    text: Back up your Collection daily, weekly or monthly; Heronite keeps the newest 10.
  - title: See where the space went
    text: Storage shows disk usage, a game treemap and what you can clean.
faq:
  - q: Is Heronite a Ludusavi frontend?
    a: Yes. Heronite runs Ludusavi, a separate free program that you install once. See [how to install it](#how-do-i-install-ludusavi-for-heronite).
  - q: Can I restore a save made on Windows on Linux?
    a: Yes. Heronite restores it into the game's current Wine prefix, even if the backup came from Windows or another Steam library.
  - q: Does a Heronite backup include my installed games?
    a: No. A backup holds your Collection and, optionally, your settings, art and store logins. See [what goes inside a backup](#what-goes-inside-a-backup).
  - q: Where should I keep my backups?
    a: Outside Heronite's data folder. Another disk or a synced folder is best.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

[Ludusavi](https://github.com/mtkennerly/ludusavi) is a free program that knows where thousands of games keep their saves, in a Windows folder, a Steam folder or a Wine prefix. Install it once, and Heronite backs up a game's saves after each session.

## How do I install Ludusavi for Heronite?

Get Ludusavi from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin` and `~/.local/bin`.

**Settings → Saves** sets where backups go and how many full backups Heronite keeps for each game. Ludusavi updates its list of games once a day. More in [Backups and saves](/docs/backups-and-saves/).

## How do I restore a game save?

1. Close the game.
2. Open the game's page and its **Saves** tab, which lists the backups of that game.
3. Pick a backup, choose the files to put back and restore.

In **console mode** this is one row on the game's page, **Back up saves (Ludusavi)**.

- Heronite keeps a copy of what the restore replaced, and **Undo** puts it back.
- Name a backup, such as "Before the last boss", and **lock** it so Heronite never removes it.

Emulated games can continue from [save states](/features/emulation/).

## How do I schedule backups of my whole Collection?

Open **Settings → Backups** to protect your statuses, ratings, journal and [play history](/features/play-time-tracking/). Choose a folder and a schedule: **daily**, **weekly**, **monthly** or only when you press **Back up now**. Heronite keeps the newest 10 backups by default.

Each backup is a dated folder you can browse. Heronite shares unchanged files with the previous backup, so a new one takes only the space of what changed. Scheduled backups run while Heronite is open and never during a game.

### What goes inside a backup?

| Part | What is in it |
|---|---|
| Collection (always) | Your games, sessions, statuses, journal and per-game settings |
| Settings | Appearance, console mode themes and the other settings |
| Art | Covers and art you chose |
| Logins | Your store logins |

Installed games, Wine and Proton builds, caches and logs stay out, because you can download them again.

### How do I restore a Collection backup?

In **Settings → Backups**, pick a backup to see what it holds, then put all or part of it back. Heronite backs up what you have now first, so you can go back. Heronite applies the restore when it restarts. See [Files and folders](/docs/files-and-folders/).

## Where did my disk space go?

The **Storage** page in Settings shows what your games take on each disk, with bars for games, Wine prefixes, Proton and runtimes, and caches. A **treemap** draws every installed game as a block sized by its disk space. Sort it by size or by when you last played.

![Heronite's Storage settings with disk usage bars for two drives, a Free up space card with caches selected, and a treemap of installed games sized by disk space.](../../../assets/screenshots/storage.webp)

*Storage settings, with a Free up space card.*

**Free up space** lists what can go, such as caches and compiled shaders. On Linux it finds unused Wine prefixes, unused Proton builds and Steam leftovers for games no longer installed. Heronite moves prefixes and leftover folders to the trash and refuses to remove folders that another game still uses.

## How do I manage screenshots and the space they take?

Screenshots live in a folder you choose in **Settings → Screenshots**, which shows the space they use. A switch compresses PNG captures to lossless WebP, which keeps every pixel and takes about half the space. Compression pauses while a game runs.

![Heronite's Screenshots settings with the capture folder and space used, lossless compression, the in-game capture shortcut and capture with the controller.](../../../assets/screenshots/screenshots.webp)

*Screenshots settings.*

Press <kbd>F10</kbd> while you play to capture a screenshot, and change the key in the same settings. With a controller, the [in-game overlay](/features/console-mode/) takes one with Guide + RB. Heronite matches captures to the game, so they appear in your [statistics](/features/play-time-tracking/) and journal.

Next: [download Heronite](/download/).
