---
title: "EA app, Ubisoft Connect and Rockstar on Linux"
description: "Install the EA app, Ubisoft Connect and Rockstar Games Launcher on Linux with Wine and Proton, and see which games anti-cheat blocks."
eyebrow: Linux guide
headline: "EA app, Ubisoft Connect and Rockstar on Linux"
lead: "The EA app, Ubisoft Connect and Rockstar have no Linux version, but all run under Wine. Heronite sets up each from its Stores page, in its own Wine prefix."
navLabel: EA, Ubisoft and Rockstar on Linux
summary: "Set up each launcher from the Stores page, sign in inside it, install games there and play them from the Collection."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version, its ProtonDB rating, the Wine prefix folder and the Winecfg and Winetricks buttons."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "One button each"
    text: "Choose a launcher on the Stores page and Heronite installs it with Wine and your default Proton."
  - title: "A prefix for each"
    text: "Each launcher gets its own folder under ~/Games/Heronite/Prefixes."
  - title: "Log in inside the app"
    text: "Heronite never sees your password."
  - title: "Know the anti-cheat limits"
    text: "Apex Legends, Rainbow Six Siege and GTA Online are blocked on Linux."
faq:
  - q: "Can I run the EA app on Linux?"
    a: "Yes, through Wine or Proton, but anti-cheat blocks several EA games. See [Which games does anti-cheat block?](#which-games-does-anti-cheat-block)"
  - q: "Does Ubisoft Connect work on Linux?"
    a: "Yes, as a Windows app under Wine. Check each game on [ProtonDB](https://www.protondb.com). Rainbow Six Siege blocks Linux."
  - q: "Can I play GTA V or Red Dead Redemption 2 on Linux?"
    a: "The story modes work through the Rockstar Games Launcher. BattlEye blocks GTA Online and Red Dead Online on Linux."
  - q: "Does this work on Windows?"
    a: "No. These pages are Linux-only in Heronite. On Windows, use the stores' own apps."
  - q: "Can I use a launcher I already set up in Wine?"
    a: "Yes. Choose **Use an existing install** on the launcher's page and point Heronite at your Wine prefix."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## What you need

- A 64-bit Linux PC with a working Vulkan driver, plus the 32-bit Vulkan driver for older games.
- An account for each launcher you want to use.
- An internet connection. Heronite downloads a Proton if you have none, then the launcher's installer.
- Free disk space for each launcher and its games.

## Install Heronite

Download the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). On Steam Deck, follow the [Steam Deck guide](/guides/steam-deck/).

## Set up the launcher

The steps are the same for all three.

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. In the list on the left, under **Store apps**, choose **EA app**, **Ubisoft Connect** or **Rockstar Games Launcher**.
3. Choose **Set up** followed by its name, such as **Set up EA app**.

Heronite finds or downloads a Proton, downloads the official installer, creates the Wine prefix and installs the launcher. When it is done, the page says **Ready**.

| Launcher | Prefix |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Note.** If you already run one of these launchers in a Wine prefix, choose **Use an existing install** instead and point Heronite at that prefix.

## Log in and install games

1. Choose **Open** followed by its name, such as **Open Ubisoft Connect**.
2. Log in in the launcher's window. Heronite never sees your password.
3. Install a game in the launcher, as you would on Windows.

Heronite shows **Signed in** on its page once you are in. A game you have not installed shows **Install with the EA app**, **Install with Ubisoft Connect** or **Install with the Rockstar Games Launcher** in the Collection. It opens the launcher.

## Play from the Collection

Installed games come into the Collection. If one is missing, use the refresh button on the launcher's page. Press <kbd>Enter</kbd> on a game to start it.

Before you install a big game, check the **On Linux** box in its details for the [ProtonDB](https://www.protondb.com) rating and anti-cheat status. Gold and Platinum are the safest. If unsure, install a small game first to test your setup.

## Which games does anti-cheat block?

Single-player games and older multiplayer games without kernel anti-cheat are the most likely to run. Anti-cheat is the real limit for the rest. The best-known cases:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends and EA SPORTS FC use anti-cheats that block Linux.
- **Ubisoft Connect.** Rainbow Six Siege blocks Linux. Some other games need a different Proton version.
- **Rockstar Games Launcher.** BattlEye blocks GTA Online and Red Dead Online on Linux. The story modes work.

A game its developer does not allow on Linux will not run. Statuses change, so check [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). More in [Anti-cheat](/docs/wine-and-proton/#anti-cheat).

## Change the Proton version for a launcher

Heronite uses your default Proton. If a launcher or a game misbehaves, open **Wine settings** on the launcher's page and choose another Proton version. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try. **Wine prefix folder** on the same page opens the prefix.

To stop a launcher and everything in its prefix, close any running game, then choose **Close** followed by the launcher's name.

## Remove a launcher

Choose **Remove from Heronite** on its page. The Wine prefix and its games stay on disk, so you can add it back later with **Use an existing install**. Delete the prefix folder to free the space.

## A launcher won't log in or a game closes on start

- **Set up fails.** Check your connection and try again. Logs are in **Settings → Logs**.
- **The launcher will not log in, or crashes.** Try another Proton version in **Wine settings**, or a fresh prefix.
- **A game closes on start.** Read its launch log in **Settings → Logs**, and check ProtonDB.

For missing DLLs, Vulkan errors and other common fixes, see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).
