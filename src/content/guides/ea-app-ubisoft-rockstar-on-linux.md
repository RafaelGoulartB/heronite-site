---
title: "EA app, Ubisoft Connect and Rockstar on Linux"
description: "Install the EA app, Ubisoft Connect and Rockstar Games Launcher on Linux with Heronite. Each runs in its own Wine prefix, and its games join your Collection."
eyebrow: Linux guide
headline: "*EA app*, *Ubisoft Connect* and *Rockstar* on Linux"
lead: "Heronite installs each of these launchers in a Wine prefix of its own and shows the games you install in your Collection. Here is how to set them up and what anti-cheat blocks."
navLabel: EA, Ubisoft and Rockstar on Linux
summary: "Set up each launcher from the Stores page, sign in inside it, install games there and play them from the Collection."
order: 6
hero: ../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version, its ProtonDB rating, the Wine prefix folder and the Winecfg and Winetricks buttons."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "One button each"
    text: "On the Stores page, choose the launcher and Set up. Heronite installs it with Wine and your default Proton."
  - title: "A prefix for each"
    text: "Each launcher gets its own folder under ~/Games/Heronite/Prefixes, so they cannot break each other."
  - title: "Sign in inside the app"
    text: "You sign in in the launcher itself. Heronite never sees your password."
  - title: "Know the anti-cheat limits"
    text: "Some games, like Apex Legends, Rainbow Six Siege and GTA Online, are blocked on Linux."
faq:
  - q: "Can I run the EA app on Linux?"
    a: "Yes, through Wine or Proton. Heronite downloads the official installer and installs the EA app in a Wine prefix of its own. Many EA games run, but Battlefield 6, Battlefield 2042, Apex Legends and EA SPORTS FC use anti-cheats that block Linux."
  - q: "Does Ubisoft Connect work on Linux?"
    a: "Yes, as a Windows app under Wine. Ubisoft games vary a lot, so check each one on [ProtonDB](https://www.protondb.com). Rainbow Six Siege blocks Linux, and some games need another Proton build, which you change in the game's Wine settings."
  - q: "Can I play GTA V or Red Dead Redemption 2 on Linux?"
    a: "GTA Online and Red Dead Online are blocked by BattlEye on Linux. The story modes work through the Rockstar Games Launcher. Check the game's ProtonDB page for how well each one runs."
  - q: "Does this work on Windows?"
    a: "No. The EA app, Ubisoft Connect and Rockstar pages are Linux-only in Heronite. On Windows, use the stores' own apps."
  - q: "Can I use a launcher I already set up in Wine?"
    a: "Yes. Choose **Use an existing install** on the launcher's page and point Heronite at the Wine prefix you already have."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

The EA app, Ubisoft Connect and the Rockstar Games Launcher are Windows programs, and none of them has a Linux version. They do run under Wine, and Heronite takes care of the setup. Each one gets its own Wine prefix, and the games you install in it appear in your Collection next to everything else.

This guide covers all three, because the steps are the same. It also lists what anti-cheat blocks, so you do not install a game that cannot run.

## What you need

- A 64-bit Linux PC with a working Vulkan driver, plus the 32-bit Vulkan driver for older games.
- An account for each launcher you want to use.
- An internet connection. Heronite downloads a Proton if you have none, and then the launcher's installer.
- Free disk space. Each launcher and its games take real room.

## Step 1: Install Heronite

Download the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). Check that `vulkaninfo --summary` lists your GPU. If it does not, install your distribution's Vulkan driver first.

## Step 2: Set up the launcher

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. In the list on the left, under **Store apps**, choose **EA app**, **Ubisoft Connect** or **Rockstar Games Launcher**.
3. Choose **Set up** followed by its name, such as **Set up EA app** ("Download its installer and install it with Wine").

Heronite finds or downloads a Proton, downloads the official installer, creates the Wine prefix and installs the launcher. The page shows the progress. It can take a few minutes. When it is done, the page says **Ready**.

Each launcher lives in its own prefix:

| Launcher | Prefix |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Note.** If you already run one of these launchers in a Wine prefix, choose **Use an existing install** instead and point Heronite at that prefix.

## Step 3: Sign in and install games

1. Choose **Open** followed by its name, such as **Open Ubisoft Connect** ("Sign in and install games").
2. Sign in in the launcher's own window. Heronite never sees your password.
3. Install a game in the launcher, as you would on Windows.

Heronite shows **Signed in** on its page once you are in. Games you own but have not installed show in the Collection with an install button that opens the launcher, such as **Install with the EA app**, **Install with Ubisoft Connect** or **Install with the Rockstar Games Launcher**.

## Step 4: Play from the Collection

Installed games come into the Collection by themselves. If one is missing, use the refresh button on the launcher's page to bring its installed games in. Press <kbd>Enter</kbd> on a game to start it. Heronite records the play time like it does for any game.

Before you install a big game, check the **On Linux** box in its details. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## What anti-cheat blocks

This is the real limit with these launchers. Heronite's own pages for them warn about the best-known cases:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends and EA SPORTS FC use anti-cheats that block Linux.
- **Ubisoft Connect.** Rainbow Six Siege blocks Linux. Some other games need a different Proton build.
- **Rockstar Games Launcher.** GTA Online and Red Dead Online are blocked by BattlEye on Linux. The story modes work.

A game that a developer does not allow on Linux will not run, whatever Proton you try. Single-player games are the safe bet. Anti-cheat status can change, so check the live status on [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Change Wine or Proton for a launcher

Heronite uses your default Proton. If a launcher or a game misbehaves, open **Wine settings** on the launcher's page and choose another build. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try. You can open the **Wine prefix folder** from the same page.

Choose **Close** followed by the launcher's name to stop it and what runs in its prefix. If a game is running, close it first.

## Which games to try first

Start with single-player games and older multiplayer games without a kernel anti-cheat. Those are the most likely to run well. Look at three things before you install:

1. The ProtonDB rating in the details. Gold and Platinum are the safest.
2. The anti-cheat status. A game that a developer does not allow on Linux is not worth the download.
3. The disk space. These games are often large, and Wine needs room on top of it.

If you are unsure, install a small game first. It checks that the launcher, the Wine prefix and your drivers all work, before you commit to a 100 GB download.

## Remove a launcher

If you stop using one, choose **Remove from Heronite** on its page. Its Wine prefix and the games installed in it stay on disk, so you can add it back later with **Use an existing install**. Delete the prefix folder yourself to free the space.

## Troubleshooting

- **Set up fails.** Check your connection and try again. The logs are in **Settings → Logs**.
- **The launcher opens but will not sign in or crashes.** Try another Proton build in **Wine settings**, or a fresh prefix.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing. Install it for your GPU, for example `lib32-vulkan-radeon` or `mesa-vulkan-drivers:i386`.
- **Another `wineserver` is running.** Close the other game or run `wineserver -k` in that prefix.
- **A DLL or .NET is missing.** Install it with Winetricks. Heronite suggests which one.
- **A game does not appear.** Use the refresh button on the launcher's page.
- **A game closes on start.** Read its launch log in **Settings → Logs**, and check ProtonDB.

More help is in [Troubleshooting](/docs/troubleshooting/).

## What to read next

- [Battle.net on Linux](/guides/battle-net-on-linux/), which works the same way.
- [How to install GE-Proton](/guides/install-ge-proton/) for the builds that fix the most games.
- [How stores work in Heronite](/features/stores/).
- [Stores and launchers](/docs/stores-and-launchers/) in the docs.
