---
title: "Epic Games on Linux: Play Your Library and Free Games"
description: "Play Epic Games on Linux without the official launcher: log in, claim the free weekly games, install with Proton and check anti-cheat first."
eyebrow: Linux guide
headline: "How to play Epic Games on Linux"
lead: "Epic makes no Linux launcher. Heronite logs in with legendary and runs your Epic Games through Proton, with no Wine setup."
navLabel: Epic Games on Linux
summary: "Log in to Epic in Heronite, install your games through Proton and check anti-cheat support before you download."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with ELDEN RING open: its Play button and, under it, an On Linux box with the ProtonDB rating Gold and the anti-cheat status EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in once"
    text: "Your whole Epic library shows up after one login."
  - title: "Free games included"
    text: "Claimed free games install like any other game."
  - title: "Proton by default"
    text: "Heronite picks a Proton version, and you can change it per game."
  - title: "Check before you install"
    text: "Each game shows its ProtonDB rating and anti-cheat status."
faq:
  - q: "Is there an Epic Games Launcher for Linux?"
    a: "No, Epic makes no Linux launcher. Heronite uses the open source tool [legendary](https://github.com/derrod/legendary) to log in, install, update and play your games."
  - q: "Can I play Fortnite on Linux?"
    a: "No. Its developer has not turned on Linux support in its anti-cheat. See [which Epic games anti-cheat blocks](#which-epic-games-does-anti-cheat-block)."
  - q: "Do the free weekly Epic games work on Linux?"
    a: "Yes, once you claim them on Epic's site. See [Claim the free weekly games](#claim-the-free-weekly-games)."
  - q: "Do I need Wine or Proton installed first?"
    a: "No. Heronite downloads a Proton version when it needs one. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/)."
  - q: "Is it safe to log in to Epic through Heronite?"
    a: "Yes. Your password goes only to Epic's own login page. Heronite keeps the login on your PC. See the [FAQ](/docs/faq/)."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

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

Packages for other distributions are in the [installation guide](/docs/installation/). On Steam Deck, follow the [Steam Deck guide](/guides/steam-deck/).

## Log in to Epic Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Epic Games**, then **Log in with Epic Games**.
3. Log in on Epic's page in the window that opens.

You type your password on Epic's own page. Your whole Epic library now appears in the Collection, installed or not.

If the window does not open, use the **browser method** on the same page. The [troubleshooting page](/docs/troubleshooting/#a-store-login-or-download-fails) has the details.

## Claim the free weekly games

Heronite does not claim Epic's free games, so claim them on Epic's side:

1. Open Epic's store page in your browser and log in with the same account.
2. Claim the free game.
3. In Heronite, choose **Stores → Epic Games → Refresh library**.

The game shows up in the Collection like any other, and so do games from past weeks. If one is missing, check that you used the same Epic account, then refresh again.

## Install an Epic game

Check the **On Linux** box in the game's details first. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status. Gold or Platinum usually runs with no work.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Epic Games**.
2. Check the **Install folder** and the **Wine version**. Leave the version on the default if you are not sure.
3. Confirm. The download appears on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Each game gets its own Wine prefix, a private fake Windows folder. Leave **Use the shared Wine prefix** off unless you know why you want it. If the game's files are already on disk, choose **Import an existing install instead** and point Heronite at the folder.

## Play the game

Select the installed game and press <kbd>Enter</kbd>.

## Change the Proton version

If the game does not start or runs badly, open **Game settings → Compatibility** and pick another Proton version in **Version**. The ProtonDB line there often names the best one.

![Heronite's Game settings for Control, an Epic game, on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons.](../../../assets/screenshots/game-settings.webp)

GE-Proton and Proton-CachyOS often have fixes before other versions. The [GE-Proton guide](/guides/install-ge-proton/) shows how to install them.

## Which Epic games does anti-cheat block?

Single-player games rarely have this problem. For other games, anti-cheat is the main reason an Epic game will not run on Linux.

- Some games use Easy Anti-Cheat or BattlEye and work. Heronite can provide the runtimes.
- Some developers do not allow Linux, so the game will not run, whatever you try.
- Fortnite is one of them. Epic's Easy Anti-Cheat can support Linux, but the developer has to switch it on, and Fortnite does not.

[Are We Anti-Cheat Yet?](https://areweanticheatyet.com) tracks the status of every game. See [Anti-cheat](/docs/wine-and-proton/#anti-cheat) for more.

## A game won't start

Read its launch log in **Settings → Logs**. [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux) covers missing DLLs, DirectX 12, Vulkan errors and other common fixes.
