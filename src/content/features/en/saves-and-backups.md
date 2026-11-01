---
title: "Back Up Game Saves Automatically on PC | Heronite"
description: "Heronite backs up game saves with Ludusavi after every session and restores them in a click. Plus scheduled Collection backups and a disk usage map. Free."
eyebrow: Saves and backups
headline: "Back up your *game saves* automatically"
lead: "Heronite is a Ludusavi frontend that saves your progress after each session and puts it back from the game page. It also backs up your whole Collection."
navLabel: Saves and backups
summary: "Automatic save backups with Ludusavi, scheduled Collection backups, a disk usage map and screenshot settings."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "Heronite's Backups settings: the backup folder, how often (once a week), how many backups are kept, a Back up now button, toggles for what goes in a backup and a list of earlier backups to restore."
og: /og/saves-and-backups.jpg
updated: 2026-11-01
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
  - q: How do I back up game saves automatically on PC?
    a: Install [Ludusavi](https://github.com/mtkennerly/ludusavi). Heronite then backs up a game's saves after each session. You do not need to find the save folders, because Ludusavi knows where thousands of games keep them.
  - q: Is Heronite a Ludusavi frontend?
    a: Yes. Heronite runs Ludusavi for you, backs up after each session and lets you restore a backup from the game's page, also in console mode. Ludusavi itself is a separate free program that you install once.
  - q: How do I install Ludusavi for Heronite?
    a: Get it from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin` and `~/.local/bin`. See [Backups and saves](/docs/backups-and-saves/).
  - q: Does a Heronite backup include my installed games?
    a: No. Installed games are not backed up, and neither are Wine and Proton builds, caches or logs, because they can be downloaded again. A backup holds your Collection, and optionally your settings, art and store logins.
  - q: Where should I keep my backups?
    a: Outside Heronite's data folder. Another disk or a synced folder is best. Restoring a backup is applied the next time Heronite starts.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

Losing a save hurts. A reinstall, a bad update or a failed disk can take 80 hours of progress with it. Heronite protects you in two ways: it backs up **game saves** after each session, and it backs up your whole **Collection** on a schedule. Both run quietly, and both restore in a few clicks.

## How do I back up game saves automatically?

Heronite uses [Ludusavi](https://github.com/mtkennerly/ludusavi), a free program that knows where thousands of games keep their saves, whether they sit in a Windows folder, a Steam folder or a Wine prefix. Install it once, and Heronite backs up a game's saves after each session. That makes Heronite a **Ludusavi frontend** with no commands to type.

Install Ludusavi from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin` and `~/.local/bin`.

> **Tip.** The save settings are in **Settings → Saves**. There you choose where backups go and how many full backups are kept for each game. Ludusavi updates its list of games by itself once a day.

## How do I restore a game save?

Open the game's page. Its **Saves** tab lists the backups of that game. Pick one, choose the files to put back and restore. In **console mode** the same thing is one row on the game's page, **Back up saves (Ludusavi)**, so you can do it from the couch with a controller.

A few details make it safer:

- Close the game before you restore a save.
- A copy of what the restore replaced is kept, and **Undo** puts it back.
- You can name a backup, such as "Before the last boss", and **lock** it so it is never removed.
- On Linux, a save goes back into the game's Wine prefix as it is now, even if the backup was made on Windows or in another Steam library.

Emulated games can also continue from their save states. See [Emulation](/features/emulation/).

## Scheduled backups of your Collection

Saves are only part of what you would hate to lose. Your Collection also holds your statuses, ratings, journal and [play history](/features/play-time-tracking/). Open **Settings → Backups** to protect it.

Choose a folder and a schedule: **daily**, **weekly**, **monthly** or only when you press **Back up now**. Heronite keeps the newest 10 backups by default and removes the oldest.

Each backup is a dated folder that you can open and browse. Files that did not change are shared with the previous backup, so a new one only takes the space of what changed. Scheduled backups run while Heronite is open and never during a game.

### What goes inside a backup

| Part | What is in it |
|---|---|
| Collection (always) | Your games, sessions, statuses, journal and per-game settings |
| Settings | Appearance, console mode themes and the other settings |
| Art | Covers and art you chose |
| Logins | Your store logins |

Wine and Proton builds, caches and logs are left out, because they can be downloaded again.

### Restore a backup

Pick a backup to see what it holds, then put all or part of it back. Heronite backs up what you have now first, so you can go back. It is applied when Heronite restarts. The folder must be outside Heronite's data folder, and another disk or a synced folder is best. Where everything lives is in [Files and folders](/docs/files-and-folders/).

## Where did my disk space go?

Games are big, and Wine prefixes and caches add up. The **Storage** page in Settings shows what your games take on each disk, with bars for the games, Wine prefixes, Proton and runtimes, and caches. Below that, a **treemap** draws every installed game as a block sized by how much space it uses, so the biggest ones stand out. Sort it by size or by when you last played.

![Heronite's Storage settings with disk usage bars for two drives, a Free up space card with caches selected, and a treemap of installed games sized by disk space.](../../../assets/screenshots/storage.webp)

*Storage: disk usage, a Free up space card and a treemap of every installed game.*

**Free up space** lists what can go, such as caches and compiled shaders. On Linux it can also find unused Wine prefixes and Proton builds, and Steam leftovers for games that are no longer installed. Prefixes and leftover folders go to the trash, where you can restore them, and Heronite refuses to remove folders that another game still uses.

## Screenshots: where they go and how much space they take

Screenshots live in a folder you choose in **Settings → Screenshots**. The page shows the space they use, and a switch can compress PNG captures to lossless WebP, which keeps every pixel and takes about half the space. It runs in the background and pauses while a game is running.

![Heronite's Screenshots settings with the capture folder and space used, lossless compression, the in-game capture shortcut and capture with the controller.](../../../assets/screenshots/screenshots.webp)

*Screenshots settings: the folder, lossless compression, the capture shortcut and controller capture.*

Heronite captures a screenshot with <kbd>F10</kbd> while you play, and you can change the key here. With the controller, the [in-game overlay](/features/console-mode/) takes one with Guide + RB. Captures are matched to the game, so they also appear in your [statistics](/features/play-time-tracking/) and journal.

## More in the docs

[Backups and saves](/docs/backups-and-saves/) has the full list of options. If something does not back up as expected, see [Troubleshooting](/docs/troubleshooting/). [Download Heronite](/download/) for Linux or Windows. It is free and open source.
