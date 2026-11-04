---
title: "Game Save Backup on PC with Ludusavi | Heronite"
description: "Back up game saves automatically after every session with Ludusavi and restore them from the game page. Plus scheduled Collection backups and a disk map."
eyebrow: Saves and backups
headline: "Game save backup with Ludusavi, after every session"
lead: "Heronite is a Ludusavi frontend for Linux and Windows. It also backs up your whole Collection on a schedule."
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
    text: Put a save back from the game's page, also in console mode.
  - title: Scheduled backups
    text: Back up your Collection, play history and settings daily, weekly or monthly. The newest 10 are kept.
  - title: See where the space went
    text: A Storage page shows disk usage, a treemap of your games and leftovers you can clean.
faq:
  - q: Is Heronite a Ludusavi frontend?
    a: Yes. Heronite runs Ludusavi for you, backs up after each session and restores from the game's page. Ludusavi is a separate free program that you install once.
  - q: Can I restore a save made on Windows on Linux?
    a: Yes. On Linux, a save goes back into the game's Wine prefix as it is now, even if the backup was made on Windows or in another Steam library.
  - q: Does a Heronite backup include my installed games?
    a: No. Installed games, Wine and Proton builds, caches and logs are left out because they can be downloaded again. A backup holds your Collection, and optionally your settings, art and store logins.
  - q: Where should I keep my backups?
    a: Outside Heronite's data folder. Another disk or a synced folder is best.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

Heronite backs up game saves with [Ludusavi](https://github.com/mtkennerly/ludusavi), a free program that knows where thousands of games keep their saves. They can sit in a Windows folder, a Steam folder or a Wine prefix. Install Ludusavi once, and Heronite backs up a game's saves after each session, with no commands to type.

## How do I install Ludusavi for Heronite?

Get Ludusavi from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin` and `~/.local/bin`.

Save settings are in **Settings → Saves**: where backups go and how many full backups are kept for each game. Ludusavi updates its list of games once a day. More in [Backups and saves](/docs/backups-and-saves/).

## How do I restore a game save?

1. Close the game.
2. Open the game's page and its **Saves** tab, which lists the backups of that game.
3. Pick a backup, choose the files to put back and restore.

In **console mode** this is one row on the game's page, **Back up saves (Ludusavi)**.

- A copy of what the restore replaced is kept, and **Undo** puts it back.
- You can name a backup, such as "Before the last boss", and **lock** it so it is never removed.

Emulated games can also continue from [save states](/features/emulation/).

## How do I schedule backups of my whole Collection?

Open **Settings → Backups** to protect your statuses, ratings, journal and [play history](/features/play-time-tracking/). Choose a folder and a schedule: **daily**, **weekly**, **monthly** or only when you press **Back up now**. Heronite keeps the newest 10 backups by default.

Each backup is a dated folder you can browse. Unchanged files are shared with the previous backup, so a new one only takes the space of what changed. Scheduled backups run while Heronite is open and never during a game.

### What goes inside a backup?

| Part | What is in it |
|---|---|
| Collection (always) | Your games, sessions, statuses, journal and per-game settings |
| Settings | Appearance, console mode themes and the other settings |
| Art | Covers and art you chose |
| Logins | Your store logins |

Wine and Proton builds, caches and logs are left out, because they can be downloaded again.

### How do I restore a Collection backup?

Pick a backup to see what it holds, then put all or part of it back. Heronite backs up what you have now first, so you can go back. The restore is applied when Heronite restarts. See [Files and folders](/docs/files-and-folders/).

## Where did my disk space go?

The **Storage** page in Settings shows what your games take on each disk, with bars for games, Wine prefixes, Proton and runtimes, and caches. A **treemap** draws every installed game as a block sized by its disk space. Sort it by size or by when you last played.

![Heronite's Storage settings with disk usage bars for two drives, a Free up space card with caches selected, and a treemap of installed games sized by disk space.](../../../assets/screenshots/storage.webp)

*Storage: disk usage, a Free up space card and a treemap of every installed game.*

**Free up space** lists what can go, such as caches and compiled shaders. On Linux it also finds unused Wine prefixes and Proton builds, and Steam leftovers for games no longer installed. Prefixes and leftover folders go to the trash, and Heronite refuses to remove folders that another game still uses.

## How do I manage screenshots and the space they take?

Screenshots live in a folder you choose in **Settings → Screenshots**, which also shows the space they use. A switch compresses PNG captures to lossless WebP, which keeps every pixel and takes about half the space. It pauses while a game is running.

![Heronite's Screenshots settings with the capture folder and space used, lossless compression, the in-game capture shortcut and capture with the controller.](../../../assets/screenshots/screenshots.webp)

*Screenshots settings: the folder, lossless compression, the capture shortcut and controller capture.*

Press <kbd>F10</kbd> while you play to capture a screenshot, and change the key in the same settings. With a controller, the [in-game overlay](/features/console-mode/) takes one with Guide + RB. Captures are matched to the game, so they also appear in your [statistics](/features/play-time-tracking/) and journal.

Next: [download Heronite](/download/).
