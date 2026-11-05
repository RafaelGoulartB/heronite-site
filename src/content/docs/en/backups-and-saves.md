---
title: "Back up your Collection and game saves (Ludusavi)"
navLabel: "Backups and saves"
description: "Back up your Heronite Collection on a schedule and game saves with Ludusavi, sync Epic and GOG cloud saves, and keep one library on several PCs."
section: Guides
order: 6
updated: 2026-11-04
---

## Back up the Collection

1. Open **Settings → Backups**.
2. Choose a backup folder outside Heronite's data folder. Another disk or a synced folder is best.
3. Choose a schedule: **Once a day**, **Once a week**, **Once a month**, or **Only when I click Back up now**.

Heronite keeps the newest 10 backups by default. A backup can hold:

| Part | What is in it |
|---|---|
| Collection (always) | Your games, sessions, statuses, journal, and per-game settings |
| Settings | Appearance, console mode themes, and the other settings |
| Art | Covers and art you chose |
| Logins | Your store logins |

Heronite leaves out Wine and Proton builds, caches, and logs, since they can be downloaded again.

## Restore a backup

1. In **Settings → Backups**, choose a backup to see what it holds.
2. Choose all of it or only some parts.
3. Choose **Restore and restart**.

Heronite first backs up what you have now, then restarts with the backup in place.

## Back up game saves with Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) knows where thousands of games keep their saves. When it is installed, Heronite backs up a game's saves after each session, and you can restore them from the game's page (also in console mode). Save states of emulated games are separate: see [Emulation](/docs/emulation/#continue-a-game-from-a-save-state).

Install Ludusavi from [its releases](https://github.com/mtkennerly/ludusavi/releases/latest), your distribution, winget, or Scoop. On Linux, Heronite looks for it on `PATH`, `/usr/bin`, `/usr/local/bin`, and `~/.local/bin`; the Flatpak is not found yet. Choose where save backups go in **Settings → Saves**.

## Sync Epic and GOG cloud saves

1. Open the game's **Game settings**, then the **Cloud saves** tab.
2. Check the folder under **Location**. Heronite finds it in most games.
3. Under **Sync now**, choose **Sync (download and upload)**, **Force Download** or **Force Upload**, then press **Sync**.
4. Turn on **Sync automatically** to sync when the game starts and after it exits.

Cloud saves are in beta: back up your saves before syncing. They work on Linux and Windows.

## Send backups to the cloud

**Settings → Cloud** can send **Heronite backups**, **Game saves (Ludusavi)** and **Screenshots** to a cloud account, a server or a shared folder, each **Automatic**, **Manual** or **Off**. Automatic never sends during a game.

The same place keeps your library the same on every PC: see [Sync between PCs](/docs/sync-between-pcs/).

## Set up a new PC from the cloud

1. In **Settings → Cloud**, connect to the same account or folder.
2. In **Settings → Backups**, choose a backup folder. For game saves, install Ludusavi too.
3. Under **Restore from the cloud**, press **See what is in the cloud**, then **Restore everything**.
4. Confirm the restore. Heronite restarts with your library, then [Sync between PCs](/docs/sync-between-pcs/) keeps it up to date.
