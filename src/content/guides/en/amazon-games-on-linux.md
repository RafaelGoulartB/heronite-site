---
title: "Amazon Games and Prime Gaming on Linux"
description: "Play Amazon Games and Prime Gaming on Linux: log in, claim your free games on Amazon, then install and run them with Proton. Step by step."
eyebrow: Linux guide
headline: "How to play Amazon Games on Linux"
lead: "Amazon's app does not run on Linux. Heronite logs in to Amazon and runs your Amazon Games and claimed Prime Gaming titles through Proton."
navLabel: Amazon Games on Linux
summary: "Log in to Amazon in Heronite and your Prime Gaming and Amazon games join your library, ready to install through Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Check before you install"
    text: "Each game shows its ProtonDB rating and anti-cheat status."
  - title: "A Proton per game"
    text: "Pick a different Proton version for each game."
  - title: "Automatic update checks"
    text: "Heronite checks your Amazon games for updates every 3 hours."
  - title: "Games stay if you log out"
    text: "Installed games stay on disk after you log out of Amazon."
faq:
  - q: "Is there an Amazon Games app for Linux?"
    a: "No, Amazon makes no Linux app. Heronite uses [nile](https://github.com/imLinguin/nile), an open source Amazon Games tool, to log in, download and update your games."
  - q: "Do Prime Gaming games work on Linux?"
    a: "Yes, once you claim them on Amazon's site. Refresh your library in Heronite and they install like any other game."
  - q: "Do I need Wine installed first?"
    a: "No. Heronite downloads a Proton version when it needs one. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/)."
  - q: "Can I play Amazon games on Steam Deck?"
    a: "Yes. Log in to Amazon Games in Desktop Mode, then play from Gaming Mode. The [Steam Deck guide](/guides/steam-deck/) has the steps."
  - q: "Can I use Amazon Games on Windows with Heronite?"
    a: "Yes. On Windows, Heronite shows the games the Amazon Games app installed, without downloading them again. Logging in and installing work the same way."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

## What you need

- A 64-bit Linux PC with a working Vulkan driver.
- An Amazon account. For free games, a Prime membership that includes Prime Gaming.
- Free disk space. Games install to `~/Games/Heronite` by default.

## Install Heronite

Download the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). On Steam Deck, follow the [Steam Deck guide](/guides/steam-deck/).

## Log in to Amazon Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Amazon Games**, then **Log in with Amazon Games**.
3. Log in on Amazon's page in the window that opens.

Your Amazon games then appear in your library, claimed Prime Gaming games included. If the login window does not open, choose **Open in browser** on the same page. Log in, then paste the address of the amazon.com page you land on ([store logins](/docs/troubleshooting/#a-store-login-or-download-fails)).

## Claim your Prime Gaming games

Heronite does not claim games, so claim them on Amazon's site:

1. Open Amazon's Prime Gaming page in your browser and log in.
2. Claim the games you want.
3. In Heronite, choose **Stores → Amazon Games → Refresh library**.

The new games then appear in your library. Amazon decides what Prime Gaming offers and rotates it, so claim a game while it is available. If a claimed game is missing, check that you used the same Amazon account, then refresh again.

## Install and play an Amazon game

Check the **On Linux** box in the game's details first. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status. Gold or Platinum usually runs with no changes.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Amazon Games**.
2. Check the **Install folder**. The **Wine version** is under **Show Wine settings**; the default is fine to start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. When it finishes, select the game and press <kbd>Enter</kbd> to play.

## Change the Proton version

If a game does not start, open **Game settings → Compatibility** and pick another build in **Version**. GE-Proton and Proton-CachyOS often have fixes first, and the [GE-Proton guide](/guides/install-ge-proton/) shows how to install them. The game's page on [ProtonDB](https://www.protondb.com) often has the fix too.

## Update, repair or move an Amazon game

- **Update:** Heronite checks for game updates every 3 hours. **Update all** on the Amazon Games page installs them in one go.
- **Repair or move:** choose **Verify and repair** or **Move install** in the game's actions.

One download queue runs these jobs and uninstalls, and pauses when you are offline. Installed games stay on disk if you log out of Amazon. Heronite keeps your login in its data folder, so keep that folder private ([Files and folders](/docs/files-and-folders/)).

## Which Amazon games can't run on Linux?

Single-player games rarely have anti-cheat problems. Games whose anti-cheat blocks Linux will not run. The anti-cheat status in the **On Linux** box comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), and the docs explain [anti-cheat](/docs/wine-and-proton/#anti-cheat) in more detail.

## An Amazon game won't start on Linux

Read its launch log in **Settings → Logs**. The [troubleshooting page](/docs/troubleshooting/#a-game-wont-start-linux) lists the common Wine fixes.
