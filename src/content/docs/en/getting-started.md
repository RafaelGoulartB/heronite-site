---
title: "Getting started: set up your game library in Heronite"
navLabel: "Getting started"
description: "Set up your game library on Linux or Windows: log in to Epic, GOG and Amazon, add other games, learn the shortcuts, organize and play."
section: Start
order: 2
updated: 2026-11-04
---

Heronite builds your game library from Steam, your emulators, and the stores you log in to. [Install Heronite](/docs/installation/) first, on Linux or Windows.

## What Heronite finds on first start

If your library is empty, Heronite adds:

- **Steam:** your installed Steam games, no login needed.
- **Emulators and ROMs:** the emulators it detects, and the ROMs in common folders like `~/ROMs` or `~/Emulation/roms`. See [Emulation](/docs/emulation/).

On Linux, the empty library also shows **Bring in from another launcher** when it finds games in Heroic, Lutris, Bottles or Faugus. Choose a launcher there to import its games and keep them in sync.

On Windows, Heronite finds Microsoft Store and PC Game Pass games installed by the Xbox app, with no login.

## Log in to Epic Games, GOG, or Amazon Games

1. Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choose **Epic Games**, **GOG** or **Amazon Games**.
3. Press **Log in**.
4. Log in on the store's page in the window that opens.

If the login window does not open, use **Or log in with your browser** on the same page and paste the code it gives you. See [Stores and launchers](/docs/stores-and-launchers/).

On Windows, Heronite also picks up games installed by the Epic Games Launcher, GOG Galaxy or the Amazon Games app, without downloading them again.

## Add other games to your library

Press <kbd>Ctrl</kbd> <kbd>N</kbd> (or **Add a game**) to add:

- A Windows program (`.exe`), which runs through Wine or Proton on Linux
- A native Linux program, AppImage or start script
- A browser game (a web address)
- A ROM, or a whole ROM folder

To add every game in a folder at once, choose **Add from folder** in the ☰ menu.

## Open any page with a shortcut

| Page | Shortcut |
|---|---|
| Collection | <kbd>Ctrl</kbd> <kbd>1</kbd> |
| Downloads | <kbd>Ctrl</kbd> <kbd>2</kbd> |
| Wine Manager (Linux) | <kbd>Ctrl</kbd> <kbd>3</kbd> |
| Stores | <kbd>Ctrl</kbd> <kbd>4</kbd> |
| Emulators | <kbd>Ctrl</kbd> <kbd>5</kbd> |
| Statistics | <kbd>Ctrl</kbd> <kbd>6</kbd> |
| Settings | <kbd>Ctrl</kbd> <kbd>,</kbd> |

The **command palette** (<kbd>Ctrl</kbd> <kbd>K</kbd>) opens any page, runs any action, or plays a game by typing part of its name. Press <kbd>?</kbd> to see every shortcut, or read [Keyboard shortcuts](/docs/keyboard-shortcuts/).

## Organize your game library

- Switch between **Focus** (a list with a details panel) and a **grid** of covers.
- **Group** by status, store, genre, series, year and more.
- Save **views** with your filters and sorting (Playing now, Backlog, Finished, Favourites).
- Select several games (<kbd>Space</kbd>, <kbd>Shift</kbd> with the arrow keys, <kbd>Ctrl</kbd> <kbd>A</kbd>) and press <kbd>F3</kbd> to edit their series and tags at once. <kbd>Ctrl</kbd> <kbd>Z</kbd> undoes it.

## Play a game and take screenshots

1. Select a game and press <kbd>Enter</kbd>. If it isn't installed, Heronite installs it first.
2. Press <kbd>F10</kbd> while playing to take a screenshot.
3. Open **Statistics** (<kbd>Ctrl</kbd> <kbd>6</kbd>) to see your sessions. Heronite records each one and matches your screenshots to the game.

## Use a controller (console mode)

Turn on [console mode](/docs/console-mode/) from the command palette or the ☰ menu, or start Heronite with `--console`. To open it at startup or when a controller connects, use **Settings → Console mode**.
