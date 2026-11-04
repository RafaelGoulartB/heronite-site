---
title: "Battle.net on Linux: Install It with Wine and Proton"
description: "Install Battle.net on Linux with one button: Heronite sets up Wine, you log in, and the Blizzard games you install join your library."
eyebrow: Linux guide
headline: "How to install Battle.net on Linux"
lead: "Blizzard makes no Linux version, so Heronite installs the Windows Battle.net with Wine from its Stores page, with no setup by hand."
navLabel: Battle.net on Linux
summary: "Set up Battle.net from the Stores page, log in, install your games in it and play them from your Heronite library."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game open: its cover, Play button and an On Linux box showing the ProtonDB rating and anti-cheat status. Games installed in Battle.net appear here too."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "One button to set up"
    text: "Heronite downloads Proton if needed, then the official installer."
  - title: "Its own Wine prefix"
    text: "Battle.net stays apart from your other games."
  - title: "Log in inside Battle.net"
    text: "Heronite never sees your password."
  - title: "Play from Heronite"
    text: "Installed Blizzard games start from your Heronite library and count play time."
faq:
  - q: "Is there an official Battle.net for Linux?"
    a: "No, Blizzard makes no Linux version. Heronite runs the Windows store app through Wine or Proton, using the official installer."
  - q: "Which Blizzard games work on Linux?"
    a: "Many do, depending on the game. Check its ProtonDB rating first. Call of Duty does not, because its Ricochet anti-cheat does not run on Linux."
  - q: "Does this work on Windows?"
    a: "Yes. On Windows, Heronite runs Battle.net without Wine and uses it as it is if already installed. Its games join your library and start through it."
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
4. Wait until the page says **Ready**. This can take a few minutes.

Heronite finds or downloads a Proton, then the official installer. It creates the Wine prefix (a separate Windows folder) `~/Games/Heronite/Prefixes/Battle.net` and installs Battle.net there. If you already have Battle.net in a Wine prefix, choose **Use an existing install** instead of step 3 and select that prefix.

## Log in, install and play Blizzard games

1. Choose **Open Battle.net**.
2. Log in in the Battle.net window. Heronite never sees your password, and its page then shows **Signed in**.
3. Install a game in Battle.net, as you would on Windows.
4. Press <kbd>Enter</kbd> on the game in your Heronite library to start it. Heronite records the play time.

Before you install a big game, check its **On Linux** box in Heronite. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

If an installed game is missing from your library, choose **Refresh** under **Installed games** on the Battle.net page. A game you have not installed shows **Install with Battle.net**, which opens the store app.

## Change the Proton version for Battle.net

Open **Wine settings** on the Battle.net page and pick another build in **Version** on the **Compatibility** tab. Until you change it, Heronite uses your default Proton. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try.

To open the prefix, choose **Open folder** next to **Wine prefix** on the same page. To stop the store app and everything in its prefix, close any running game first, then choose **Close Battle.net**.

## Remove Battle.net from Heronite

Choose **Remove from Heronite** on the Battle.net page. The Wine prefix and the games installed in it stay on disk. Delete the prefix folder yourself to get the space back ([Files and folders](/docs/files-and-folders/)).

## Does anti-cheat block any Blizzard games?

Yes, Call of Duty. The Battle.net page warns that its Ricochet anti-cheat does not run on Linux. Other Blizzard games can change from one patch to the next, so check ProtonDB before you install.

## Battle.net won't set up or crashes

- **Set up stops or fails.** Check your internet connection and try again. Logs are in **Settings → Logs**.
- **Battle.net or a game crashes.** Try another build in **Wine settings**, or a fresh prefix.

For missing DLLs, Vulkan errors and other Wine fixes, see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).
