---
title: "Epic Games on Linux: Play Your Library and Free Games"
description: "Play Epic Games on Linux without the official launcher: log in, claim the free weekly games, install through Proton and check anti-cheat support first."
eyebrow: Linux guide
headline: "How to play Epic Games on Linux"
lead: "Play your Epic Games library on Linux: log in, claim the free weekly games, and install through Proton."
navLabel: Epic Games on Linux
summary: "Log in to Epic in Heronite, install your games through Proton and check anti-cheat support before you download."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with ELDEN RING open: its Play button and, under it, an On Linux box with the ProtonDB rating Gold and the anti-cheat status EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in once"
    text: "Press Ctrl+4, choose Epic Games and log in. Your whole library joins the Collection."
  - title: "Free games included"
    text: "Claim the weekly free game on Epic's site, refresh the library and it shows up ready to install."
  - title: "Proton by default"
    text: "Windows games run through Proton. Heronite picks a build, and you can change it per game."
  - title: "Check before you install"
    text: "Each game shows its ProtonDB rating and anti-cheat status, so you know if it will run."
faq:
  - q: "Is there an Epic Games Launcher for Linux?"
    a: "No, Epic makes no Linux launcher. Heronite uses the open source tool [legendary](https://github.com/derrod/legendary) to log in, install, update and play your games instead."
  - q: "Can I play Fortnite on Linux?"
    a: "No. Fortnite's developer has not turned on Linux support in its anti-cheat, and [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lists it as not working."
  - q: "Do the free weekly Epic games work on Linux?"
    a: "Yes, once you claim them on Epic's website with the same account and refresh your library in Heronite. They then install and run like any other game."
  - q: "Do I need Wine or Proton installed first?"
    a: "No. Heronite downloads a Proton build when it needs one. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/) for the options."
  - q: "Is it safe to log in to Epic through Heronite?"
    a: "Yes. Your password goes only to Epic's own login page, which opens in a small window. Heronite keeps the login on your PC. See the [FAQ](/docs/faq/)."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

Heronite replaces the missing Epic Games Launcher for Linux. It logs in with [legendary](https://github.com/derrod/legendary) and runs your Windows games through Proton, with no Wine setup by hand.

## What you need

- A 64-bit Linux PC with a working Vulkan driver. Run `vulkaninfo --summary` to check that it lists your GPU. Older 32-bit games also need the 32-bit Vulkan driver.
- An Epic Games account.
- Free disk space. Games install to `~/Games/Heronite` by default.

## Install Heronite

Get the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Packages for other distributions are in the [installation guide](/docs/installation/).

## Log in to Epic Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Epic Games**, then **Log in with Epic Games**.
3. Sign in in the small window that opens. You type your password on Epic's own page.

Your whole Epic library now appears in the Collection, installed or not. If the window does not open, use the **browser method** on the same page. The [troubleshooting page](/docs/troubleshooting/#a-store-login-or-download-fails) has the details.

## Claim the free weekly games

Heronite does not claim Epic's free games, so claim them on Epic's side:

1. Open Epic's store page in your browser and sign in with the same account.
2. Claim the free game.
3. In Heronite, open **Stores**, **Epic Games**, and choose **Refresh library**.

The game shows up in the Collection like any other. Games you claimed in past weeks are there too.

## Install an Epic game

Check the **On Linux** box in the game's details first. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status. Gold or Platinum usually runs with no work.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Epic Games**.
2. Check the **Install folder** and the **Wine version**. Leave the version on the default if you are not sure.
3. Confirm. The download appears on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Each game gets its own Wine prefix, a private fake Windows folder. Leave **Use the shared Wine prefix** off unless you know why you want it. If the game's files are already on disk, choose **Import an existing install instead** and point Heronite at the folder.

## Change the Proton version

Press <kbd>Enter</kbd> on the game to play it. If it does not start or runs badly, open **Game settings → Compatibility** and pick another build in **Version**. The ProtonDB line there often names the best one.

![Heronite's Game settings for Control, an Epic game, on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons.](../../../assets/screenshots/game-settings.webp)

*The Compatibility tab: choose the Proton version per game.*

GE-Proton and Proton-CachyOS often have fixes before other builds. The [GE-Proton guide](/guides/install-ge-proton/) shows how to install them.

## Which Epic games does anti-cheat block?

Anti-cheat is the main reason an Epic game will not run on Linux.

- Some games use Easy Anti-Cheat or BattlEye and work. Heronite can provide the runtimes.
- Some developers do not allow Linux, so the game will not run, whatever you try.
- Fortnite is one of them. Epic's Easy Anti-Cheat can support Linux, but the developer has to switch it on, and Fortnite does not.

[Are We Anti-Cheat Yet?](https://areweanticheatyet.com) tracks the status of every game. See [Anti-cheat](/docs/wine-and-proton/#anti-cheat) for more. Single-player games rarely have this problem.

## A free game is missing or a game won't start

- **A free game is missing.** Check that you claimed it on the same Epic account, then refresh the library.
- **A game won't start.** Read its launch log in **Settings → Logs**. [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux) covers missing DLLs, DirectX 12, Vulkan errors and other common fixes.
