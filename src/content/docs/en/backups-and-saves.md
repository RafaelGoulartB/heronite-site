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

## Sync your library between PCs

**Settings → Cloud** keeps statuses, favourites, notes, play time and sessions the same on every PC, such as a dual boot's Linux and Windows. Each PC writes only its own files, so nothing is overwritten.

1. Open **Settings → Cloud**.
2. Under **Service**, choose a cloud account (Google Drive, Dropbox, OneDrive or Box), a server (FTP, SMB or WebDAV) or **A shared folder**.
3. For an account or a server, press **Connect**. Heronite downloads rclone first if it is not installed, and your browser opens to sign in to an account.
4. For a shared folder, choose the **Sync folder**. On a dual boot, use an NTFS or exFAT drive and turn off Fast Startup in Windows.
5. Under **Choose what goes, and when**, set **Library between PCs** to **Automatic** or **Manual**.
6. Set up Heronite on your other PCs with the same account or folder.

The same section can send **Heronite backups**, **Game saves (Ludusavi)** and **Screenshots**, each **Automatic**, **Manual** or **Off**. Automatic never sends during a game. Installed games, Wine prefixes, game settings and store sign-ins always stay on each PC.

On a new PC, connect to the same account, then press **Restore everything** under **Restore from the cloud**.
