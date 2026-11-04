---
title: "Battle.net on Linux: Install It with Wine and Proton"
description: "Install Battle.net on Linux with one button: Heronite sets up Wine, you log in, and the Blizzard games you install join your Collection."
eyebrow: Linux guide
headline: "How to install Battle.net on Linux"
lead: "Blizzard makes no Linux version, so Heronite installs the Windows Battle.net with Wine from its Stores page, with no setup by hand."
navLabel: Battle.net on Linux
summary: "Set up Battle.net from the Stores page, sign in, install your games in it and play them from the Collection."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game open: its cover, Play button and an On Linux box showing the ProtonDB rating and anti-cheat status. Games installed in Battle.net appear here too."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "One button to set up"
    text: "Heronite installs Battle.net with Wine and your default Proton."
  - title: "Its own Wine prefix"
    text: "Battle.net stays apart from your other games."
  - title: "Log in inside Battle.net"
    text: "Heronite never sees your password."
  - title: "Games join the Collection"
    text: "Installed Blizzard games start from there, next to your others."
faq:
  - q: "Is there an official Battle.net for Linux?"
    a: "No, Blizzard makes no Linux version. Heronite runs the Windows app through Wine or Proton, using the official installer."
  - q: "Which Blizzard games work on Linux?"
    a: "Many do, depending on the game. Check its ProtonDB rating first. Call of Duty does not: see [Does anti-cheat block any Blizzard games?](#does-anti-cheat-block-any-blizzard-games)"
  - q: "Does this work on Windows?"
    a: "No. Heronite's Battle.net page is Linux-only. On Windows, use Blizzard's own app."
  - q: "Where does Heronite put Battle.net?"
    a: "In a Wine prefix at `~/Games/Heronite/Prefixes/Battle.net`. Removing Battle.net from Heronite leaves that folder and its games on disk."
  - q: "I already run Battle.net in Wine or Lutris. Can I keep it?"
    a: "Yes. Choose **Use an existing install** on the Battle.net page and point Heronite at your Wine prefix."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## What you need

- A 64-bit Linux PC with a working Vulkan driver, and the 32-bit Vulkan driver for older games.
- A Battle.net account.
- An internet connection. Heronite downloads a Proton build if you have none, then the Battle.net installer.
- Free disk space for Wine and your games.

## Install Heronite

Get the AppImage from the [download page](/download/). It runs on any distribution:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). On Steam Deck, follow the [Steam Deck guide](/guides/steam-deck/).

## Set up Battle.net

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. In the list on the left, under **Store apps**, choose **Battle.net**.
3. Choose **Set up Battle.net**.

Heronite finds or downloads a Proton, downloads the official installer, creates the prefix `~/Games/Heronite/Prefixes/Battle.net` and installs Battle.net. This can take a few minutes. When it is done, the page says **Ready**.

> **Note.** If you already have Battle.net in a Wine prefix, choose **Use an existing install** instead and select that prefix.

## Log in and install Blizzard games

1. Choose **Open Battle.net**.
2. Log in in the Battle.net window. You type your password there, and Heronite never sees it.
3. Install a game as you would on Windows.

Heronite shows **Signed in** on its page once you are in.

## Play your Battle.net games

Installed games come into the Collection. If one is missing, choose **Refresh Battle.net games** on the Battle.net page. Press <kbd>Enter</kbd> on a game to start it. Heronite records the play time.

A game you have not installed shows **Install with Battle.net** in the Collection, which opens the app.

Before you install a big game, check its **On Linux** box. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Change the Proton version for Battle.net

Heronite uses your default Proton. To change it, open **Wine settings** on the Battle.net page and pick another Proton version. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try. **Wine prefix folder** on the same page opens the prefix.

To stop the app and everything in its prefix, close any running game first, then choose **Close Battle.net**.

## Remove Battle.net from Heronite

Choose **Remove from Heronite**. The Wine prefix and the games installed in it stay on disk. Delete the prefix folder yourself to get the space back. Heronite's data, with your Collection and settings, is in `~/.local/share/heronite`. See [Files and folders](/docs/files-and-folders/).

## Does anti-cheat block any Blizzard games?

Blizzard games can change from one patch to the next, so check ProtonDB before you install. Call of Duty is blocked: the Battle.net page warns that its Ricochet anti-cheat does not run on Linux. See [Stores and launchers](/docs/stores-and-launchers/) for how Heronite handles these store apps.

## Battle.net won't set up or crashes

- **Set up stops or fails.** Check your internet connection and try again. Logs are in **Settings → Logs**.
- **Battle.net or a game crashes.** Try another Proton version in **Wine settings**, or a fresh prefix.

For missing DLLs, Vulkan errors and the other common Wine fixes, see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).
