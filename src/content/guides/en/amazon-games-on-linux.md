---
title: "How to Play Amazon Games and Prime Gaming on Linux"
description: "Play your Amazon Games and Prime Gaming library on Linux: log in with Heronite, claim your free games, and install them with nile and Proton. Step by step."
eyebrow: Linux guide
headline: "How to play *Amazon Games* on Linux"
lead: "Amazon's game app has no Linux version. Heronite logs in to your Amazon account with nile, so the Prime Gaming games you claimed install and run on Linux."
navLabel: Amazon Games on Linux
summary: "Log in to Amazon in Heronite, and your Prime Gaming and Amazon games join the Collection, ready to install through Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Heronite's Game settings on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Log in with Amazon"
    text: "Press Ctrl+4, choose Amazon Games and sign in. Your library comes in, claimed Prime Gaming games included."
  - title: "Installs with nile"
    text: "Heronite downloads and verifies games with nile, an open source Amazon Games client."
  - title: "Claim on Amazon's site"
    text: "Free Prime Gaming games are claimed on Amazon's page, then refreshed into Heronite."
  - title: "Runs through Proton"
    text: "Windows games use Wine or Proton, with a build you can change for each game."
faq:
  - q: "Is there an Amazon Games app for Linux?"
    a: "No, Amazon does not make one. Heronite uses the open source tool [nile](https://github.com/imLinguin/nile) to sign in, download and update your games, and runs the Windows ones through Wine or Proton."
  - q: "Do Prime Gaming games work on Linux?"
    a: "Yes, once you claim them on your Amazon account. After you log in, your whole Amazon Games library, including the Prime Gaming games you claimed, shows in your Collection. They install and run like any other game."
  - q: "How do I claim Prime Gaming games without the Amazon app?"
    a: "Claim them on Amazon's Prime Gaming page in your browser, with the same account you use in Heronite. Then refresh the library in Heronite and the new games appear."
  - q: "Do I need Wine installed first?"
    a: "No. Heronite picks a Proton build and downloads it for you. You only need a working Vulkan driver. See [Wine and Proton](/docs/wine-and-proton/) for the options."
  - q: "Can I use Amazon Games on Windows with Heronite?"
    a: "Yes. On Windows, Heronite can show the games the Amazon Games app installed, without downloading them again. Logging in and installing work the same way."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

Amazon gives games away with Prime, and its own app only runs on Windows. Heronite lets you play them on Linux. You log in with your Amazon account, your library appears in the Collection, and games install through the same download queue as your Epic and GOG games.

This guide takes you from a fresh install to a claimed Prime Gaming game running on Linux.

## What you need

- A 64-bit Linux PC with a working Vulkan driver.
- An Amazon account. For free games, a Prime membership that includes Prime Gaming.
- Free disk space. Heronite installs games to `~/Games/Heronite` by default.

## Step 1: Install Heronite

Download the AppImage from the [download page](/download/). It works on any distribution:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Packages for Debian, Ubuntu, Fedora and Arch are listed in the [installation guide](/docs/installation/). Run `vulkaninfo --summary` to check that Vulkan lists your GPU.

## Step 2: Log in to Amazon Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Amazon Games** and use **Log in with Amazon Games**.
3. Sign in on Amazon's page in the small window that opens.

If the window does not open, use the **browser method**. On the same page, choose **Open in browser**, sign in to Amazon, then copy the address of the amazon.com page you land on and paste it into Heronite. On Linux the login window needs WebKitGTK 4.1, which is the common reason for this.

After you log in, your whole Amazon Games library shows in the Collection. That includes the Prime Gaming games you have already claimed. Heronite reads it with [nile](https://github.com/imLinguin/nile). See [Stores and launchers](/docs/stores-and-launchers/) for more.

## Step 3: Claim your Prime Gaming games

Heronite does not claim games for you, so do this on Amazon's side:

1. Open Amazon's Prime Gaming page in your browser and sign in.
2. Claim the games you want, so they join your account.
3. Back in Heronite, open **Stores**, **Amazon Games** and choose **Refresh library** ("Look for new games and updates").

The new games appear in the Collection. Amazon rotates its offers, so claim a game while it is available.

## Step 4: Install a game

Before you install, look at the **On Linux** box in the game's details. It shows its [ProtonDB](https://www.protondb.com) rating and its anti-cheat status. A game rated Gold or Platinum usually runs with no changes.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Amazon Games**.
2. Check the **Install folder** and the **Wine version**. The default is fine to start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Heronite downloads and verifies games with [nile](https://github.com/imLinguin/nile). One queue installs, updates, repairs, moves and uninstalls games, and it pauses when you are offline.

## Step 5: Play and tune

Press <kbd>Enter</kbd> to play. If the game does not start, open **Game settings** and go to **Compatibility**. Try another Proton build there. GE-Proton and Proton-CachyOS often have fixes first, and the [GE-Proton guide](/guides/install-ge-proton/) shows how to install them. If a game keeps failing, its page on [ProtonDB](https://www.protondb.com) often has the fix.

## Keep your games up to date and tidy

Heronite checks for game updates every 3 hours. When a game has one, **Update all** on the Amazon Games page installs them all in one go. You can also repair a game, move it to another drive or uninstall it from the same queue, which is handy when a game folder grows too big for your main disk.

Your installed games stay on disk if you log out of Amazon in Heronite. That means you can switch accounts, or log out on a shared PC, without deleting the games. Your Amazon login is kept in Heronite's data folder, so keep that folder private. See [Files and folders](/docs/files-and-folders/) for where it is.

Once the games are in the Collection, you can group, filter and rate them like any other, next to your Steam, Epic and GOG games. A saved view such as *Backlog* then covers every store at once.

## A note on Windows

On Windows, Heronite works with Amazon in the same way, and it can add the games the Amazon Games app installed without downloading them again. The Wine and Proton steps in this guide only apply to Linux.

## Limits to know

- Games with anti-cheat that blocks Linux will not run. Check the status in the details, which comes from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Prime Gaming offers change often. What you can claim is up to Amazon, not Heronite.
- Heronite shows what your Amazon account owns. A game that is not in your account does not appear.

## Troubleshooting

- **The login window does not open.** Use the browser method, or install WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`).
- **A claimed game is missing.** Check that you used the same Amazon account, then refresh the library.
- **A DLL or .NET is missing.** Install it with Winetricks. Heronite suggests which one.
- **A DirectX 12 game fails.** Turn on VKD3D-Proton in the game's settings. For a Direct3D error, turn on DXVK.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing. Install it for your GPU.
- **Another `wineserver` is running.** Close the other game or run `wineserver -k` in that prefix.

Logs are in **Settings → Logs**. More fixes are in [Troubleshooting](/docs/troubleshooting/).

## What to read next

- [Epic Games on Linux](/guides/epic-games-on-linux/) for the free weekly games.
- [GOG on Linux](/guides/gog-on-linux/) for DRM-free games.
- [How stores work in Heronite](/features/stores/).
- [Getting started](/docs/getting-started/).
