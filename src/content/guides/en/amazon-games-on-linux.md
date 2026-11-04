---
title: "Amazon Games and Prime Gaming on Linux"
description: "Play Amazon Games and Prime Gaming on Linux: log in, claim your free games on Amazon, then install and run them through Proton. Step by step."
eyebrow: Linux guide
headline: "How to play Amazon Games on Linux"
lead: "Play Amazon Games and your claimed Prime Gaming titles on Linux. Log in with Heronite, then install through Proton."
navLabel: Amazon Games on Linux
summary: "Log in to Amazon in Heronite, and your Prime Gaming and Amazon games join the Collection, ready to install through Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in with Amazon"
    text: "Press Ctrl+4, choose Amazon Games and sign in. Claimed Prime Gaming games come in too."
  - title: "Installs with nile"
    text: "Heronite downloads and verifies games with nile, an open source Amazon Games client."
  - title: "Claim on Amazon's site"
    text: "Claim Prime Gaming games on Amazon's page, then refresh the library in Heronite."
  - title: "Runs through Proton"
    text: "Windows games use Wine or Proton, with a build you can change per game."
faq:
  - q: "Is there an Amazon Games app for Linux?"
    a: "No, Amazon makes no Linux version. Heronite uses the open source tool [nile](https://github.com/imLinguin/nile) to sign in, download and update your games, and runs them through Wine or Proton."
  - q: "Do Prime Gaming games work on Linux?"
    a: "Yes, once you claim them on your Amazon account. After you log in, they show in your Collection and install like any other game."
  - q: "How do I claim Prime Gaming games without the Amazon app?"
    a: "Claim them on Amazon's Prime Gaming page in your browser, with the account you use in Heronite. Then refresh the library in Heronite."
  - q: "Do I need Wine installed first?"
    a: "No. Heronite downloads a Proton build when it needs one. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/)."
  - q: "Can I use Amazon Games on Windows with Heronite?"
    a: "Yes. On Windows, Heronite shows the games the Amazon Games app installed, without downloading them again. Logging in and installing work the same way."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

Heronite lets you play Amazon Games on Linux, where Amazon's own app does not run. Log in with your Amazon account and your library appears in the Collection.

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

Other formats are in the [installation guide](/docs/installation/).

## Log in to Amazon Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Amazon Games** and use **Log in with Amazon Games**.
3. Sign in on Amazon's page in the small window that opens.

Your Amazon Games library now shows in the Collection, claimed Prime Gaming games included. Heronite reads it with [nile](https://github.com/imLinguin/nile).

If the window does not open, choose **Open in browser** on the same page. Sign in, then paste the address of the amazon.com page you land on. See [Store logins](/docs/troubleshooting/#a-store-login-or-download-fails).

## Claim your Prime Gaming games

Heronite does not claim games for you, so claim them on Amazon's side:

1. Open Amazon's Prime Gaming page in your browser and sign in.
2. Claim the games you want.
3. In Heronite, open **Stores**, **Amazon Games** and choose **Refresh library**.

The new games appear in the Collection. Amazon rotates its offers, so claim a game while it is available.

## Install and play an Amazon game

Check the **On Linux** box in the game's details first. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status. Gold or Platinum usually runs with no changes.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Amazon Games**.
2. Check the **Install folder** and the **Wine version**. The default is fine to start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Press <kbd>Enter</kbd> on the installed game to play.

## Change the Proton version

If a game does not start, open **Game settings → Compatibility** and try another Proton build. GE-Proton and Proton-CachyOS often have fixes first, and the [GE-Proton guide](/guides/install-ge-proton/) shows how to install them. The game's page on [ProtonDB](https://www.protondb.com) often has the fix too.

## Update and move Amazon games

One queue handles updates, repairs, moves and uninstalls, and pauses when you are offline. Heronite checks for game updates every 3 hours. **Update all** on the Amazon Games page installs them in one go.

Installed games stay on disk if you log out of Amazon. Your login is kept in Heronite's data folder, so keep that folder private. See [Files and folders](/docs/files-and-folders/).

## What Amazon Games on Linux can't do

- Games with anti-cheat that blocks Linux will not run. The status in the details comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Heronite shows only what your Amazon account owns. What Prime Gaming offers is up to Amazon.
- A claimed game that is missing: check that you used the same Amazon account, then refresh the library.

For a game that won't start, the [troubleshooting page](/docs/troubleshooting/#a-game-wont-start-linux) lists the common Wine fixes. Logs are in **Settings → Logs**.
