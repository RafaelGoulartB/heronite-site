---
title: "Amazon Games and Prime Gaming on Linux"
description: "Play Amazon Games and Prime Gaming on Linux: log in, claim your free games on Amazon, then install and run them with Proton. Step by step."
eyebrow: Linux guide
headline: "How to play Amazon Games on Linux"
lead: "Amazon's app does not run on Linux. Heronite logs in with nile and runs your Amazon Games and claimed Prime Gaming titles through Proton."
navLabel: Amazon Games on Linux
summary: "Log in to Amazon in Heronite and your Prime Gaming and Amazon games join the Collection, ready to install through Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in with Amazon"
    text: "Your Amazon library and claimed Prime Gaming games come in."
  - title: "Installs with nile"
    text: "Heronite downloads and verifies games with the open source nile."
  - title: "Claim on Amazon's site"
    text: "Refresh the library after you claim a game on Amazon."
  - title: "Runs through Proton"
    text: "Pick a different Proton version for each game."
faq:
  - q: "Is there an Amazon Games app for Linux?"
    a: "No, Amazon makes no Linux app. Heronite uses the open source tool [nile](https://github.com/imLinguin/nile) to log in, download and update your games."
  - q: "Do Prime Gaming games work on Linux?"
    a: "Yes, once you claim them on Amazon's site. See [Claim your Prime Gaming games](#claim-your-prime-gaming-games)."
  - q: "Do I need Wine installed first?"
    a: "No. Heronite downloads a Proton version when it needs one. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/)."
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

Your Amazon library now shows in the Collection, claimed Prime Gaming games included.

If the window does not open, choose **Open in browser** on the same page. Log in, then paste the address of the amazon.com page you land on. See [Store logins](/docs/troubleshooting/#a-store-login-or-download-fails).

## Claim your Prime Gaming games

Heronite does not claim games, so claim them on Amazon's side:

1. Open Amazon's Prime Gaming page in your browser and log in.
2. Claim the games you want.
3. In Heronite, choose **Stores → Amazon Games → Refresh library**.

The new games appear in the Collection. Amazon rotates its offers, so claim a game while it is available. If a claimed game is missing, check that you used the same Amazon account, then refresh again.

## Install and play an Amazon game

Check the **On Linux** box in the game's details first. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status. Gold or Platinum usually runs with no changes.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Amazon Games**.
2. Check the **Install folder** and the **Wine version**. The default is fine to start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Press <kbd>Enter</kbd> on the installed game to play it.

## Change the Proton version

If a game does not start, open **Game settings → Compatibility** and pick another Proton version in **Version**. GE-Proton and Proton-CachyOS often have fixes first, and the [GE-Proton guide](/guides/install-ge-proton/) shows how to install them. The game's page on [ProtonDB](https://www.protondb.com) often has the fix too.

## Update, repair or move an Amazon game

One queue handles updates, repairs, moves and uninstalls, and pauses when you are offline. Heronite checks for game updates every 3 hours. **Update all** on the Amazon Games page installs them in one go.

Installed games stay on disk if you log out of Amazon. Heronite keeps your login in its data folder, so keep that folder private. See [Files and folders](/docs/files-and-folders/).

## Which Amazon games can't run on Linux?

- Games with anti-cheat that blocks Linux will not run. The status in the details comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Heronite shows only what your Amazon account owns. What Prime Gaming offers is up to Amazon.

## A game won't start

Read its launch log in **Settings → Logs**. The [troubleshooting page](/docs/troubleshooting/#a-game-wont-start-linux) lists the common Wine fixes.
