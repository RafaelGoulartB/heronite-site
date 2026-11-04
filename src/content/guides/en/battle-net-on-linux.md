---
title: "Battle.net on Linux: Install It with Wine and Proton"
description: "Install Battle.net on Linux with one button: Heronite sets up Wine, you sign in, and the Blizzard games you install appear in your Collection."
eyebrow: Linux guide
headline: "How to install Battle.net on Linux"
lead: "Install Battle.net on Linux from Heronite's Stores page, with no Wine setup by hand."
navLabel: Battle.net on Linux
summary: "Set up Battle.net from the Stores page, sign in, install your games in it and play them from the Collection."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game open: its cover, Play button and an On Linux box showing the ProtonDB rating and anti-cheat status. Games installed in Battle.net appear here too."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "One button to set up"
    text: "Choose Battle.net on the Stores page and Heronite installs it with Wine and your default Proton."
  - title: "Its own Wine prefix"
    text: "The app lives in ~/Games/Heronite/Prefixes/Battle.net, apart from your other games."
  - title: "Sign in on Blizzard's page"
    text: "You sign in inside Battle.net itself. Heronite never sees your password."
  - title: "Games join the Collection"
    text: "Games you install in Battle.net show up next to your other games and start from there."
faq:
  - q: "Is there an official Battle.net for Linux?"
    a: "No, Blizzard makes no Linux version. The Windows app runs through Wine or Proton, and Heronite sets that up with the official installer and your default Proton."
  - q: "Which Blizzard games work on Linux?"
    a: "Many run well, but it depends on the game. Check its ProtonDB rating first. Call of Duty is the clear exception: its Ricochet anti-cheat does not run on Linux."
  - q: "Does this work on Windows?"
    a: "No. Heronite's Battle.net page is Linux-only. On Windows, use Blizzard's own app."
  - q: "Where does Heronite put Battle.net?"
    a: "In a Wine prefix at `~/Games/Heronite/Prefixes/Battle.net`. Removing Battle.net from Heronite leaves that folder and its games on disk."
  - q: "I already run Battle.net in Wine or Lutris. Can I keep it?"
    a: "Yes. Choose **Use an existing install** on the Battle.net page and point Heronite at the Wine prefix you already have."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

Blizzard has no Linux version of Battle.net, so Heronite runs the Windows app under Wine in a Wine prefix of its own. You sign in and install games as usual, and they show up in your Collection.

## What you need

- A 64-bit Linux PC with a working Vulkan driver, and the 32-bit Vulkan driver for older games.
- A Battle.net account.
- An internet connection. Heronite downloads a Proton build if you have none, then the Battle.net installer. Wine and Proton come with Heronite.
- Free disk space for Wine and your games.

## Install Heronite

Get the AppImage from the [download page](/download/). It runs on any distribution:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/).

## Set up Battle.net

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. In the list on the left, under **Store apps**, choose **Battle.net**.
3. Choose **Set up Battle.net**.

Heronite finds or downloads a Proton, downloads the official installer, creates the prefix `~/Games/Heronite/Prefixes/Battle.net` and installs Battle.net. This can take a few minutes. When it is done, the page says **Ready**.

> **Note.** If you already have Battle.net in a Wine prefix, choose **Use an existing install** instead and select that prefix.

## Sign in and install Blizzard games

1. Choose **Open Battle.net**.
2. Sign in in the Battle.net window. You type your password there, and Heronite never sees it.
3. Install a game as you would on Windows.

Heronite shows **Signed in** on its page once you are in.

## Find your Battle.net games in the Collection

Installed games come into the Collection on their own. If one is missing, choose **Refresh Battle.net games** on the Battle.net page. Press <kbd>Enter</kbd> on a game to start it. Heronite records the play time as for any game.

For a game you own but have not installed, the Collection offers **Install with Battle.net**, which opens the app.

Before you install a big game, check its **On Linux** box. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Change Wine or Proton for Battle.net

Heronite uses your default Proton. To change it, open **Wine settings** on the Battle.net page and pick another build. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try. **Wine prefix folder** on the same page opens the prefix.

To stop the app and everything in its prefix, close any running game first, then choose **Close Battle.net**.

## Remove Battle.net from Heronite

Choose **Remove from Heronite**. The Wine prefix and the games installed in it stay on disk, so nothing is deleted by accident. Delete the prefix folder yourself to get the space back. Heronite's own data, with your Collection and settings, is in `~/.local/share/heronite`. See [Files and folders](/docs/files-and-folders/).

## Does anti-cheat block any Blizzard games?

Yes. The Battle.net page warns that Call of Duty uses the Ricochet anti-cheat, which does not run on Linux. Other Blizzard games can change from one patch to the next, so check ProtonDB before you install. See [Stores and launchers](/docs/stores-and-launchers/) for how Heronite handles these store apps.

## Battle.net won't set up or crashes

- **Set up stops or fails.** Check your internet connection and try again. Logs are in **Settings → Logs**.
- **Battle.net or a game crashes.** Try another Proton build in **Wine settings**, or a fresh prefix.

For missing DLLs, Vulkan errors and the other common Wine fixes, see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux).
