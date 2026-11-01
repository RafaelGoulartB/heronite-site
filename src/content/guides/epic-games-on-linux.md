---
title: "How to Play Epic Games on Linux (Free Games Too)"
description: "Play your Epic Games Store library on Linux with Heronite: log in, claim the free weekly games, install through Proton and see which games anti-cheat blocks."
eyebrow: Linux guide
headline: "How to play *Epic Games* on Linux"
lead: "Epic has no Linux app, but your whole library still runs on Linux. This guide shows how to log in, claim the free weekly games, install them and pick the right Proton version."
navLabel: Epic Games on Linux
summary: "Log in to Epic in Heronite, install your games through Proton and check anti-cheat support before you download."
order: 1
hero: ../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with ELDEN RING open: its Play button and, under it, an On Linux box with the ProtonDB rating Gold and the anti-cheat status EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Log in once"
    text: "Press Ctrl+4, choose Epic Games and log in. Your whole library joins the Collection, installed or not."
  - title: "Free games included"
    text: "Claim the weekly free game on Epic's site, refresh the library and it shows up ready to install."
  - title: "Proton by default"
    text: "Windows games run through Proton. Heronite picks a build for you and you can change it per game."
  - title: "Check before you install"
    text: "Each game shows its ProtonDB rating and anti-cheat status, so you know if it will run."
faq:
  - q: "Is there an Epic Games Launcher for Linux?"
    a: "No. Epic does not make a Linux version of its launcher. Heronite uses the open source tool [legendary](https://github.com/derrod/legendary), which talks to Epic's servers the same way, so you can log in, install, update and play your games without the official app."
  - q: "Can I play Fortnite on Linux?"
    a: "Not right now. Fortnite's developer has not turned on Linux support in its anti-cheat, and [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lists it as not working. Heronite shows this status in the game's details, so check there before you spend time on a download."
  - q: "Do the free weekly Epic games work on Linux?"
    a: "Yes, once you claim them. Claim the game on Epic's website while logged in to the same account, then refresh your library in Heronite. Free games are normal library games, so they install and run like any other."
  - q: "Do I need Wine or Proton installed first?"
    a: "No. Heronite downloads a Proton build for you when it needs one. You only need a working Vulkan driver. Read [Wine and Proton](/docs/wine-and-proton/) to learn what you can change."
  - q: "Is it safe to log in to Epic through Heronite?"
    a: "Your password goes only to Epic's own login page, which opens in a small window. Heronite keeps the login on your PC. See the [FAQ](/docs/faq/) for more."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

You can play your Epic Games Store library on Linux without the official launcher, and without setting up Wine by hand. Heronite logs in to your Epic account, shows every game you own in one place and runs the Windows ones through Proton.

By the end of this guide you will have your Epic library on your Linux PC, the free game of the week claimed and installed, and a way to tell which games will not run.

## What you need

- A 64-bit Linux PC with a working Vulkan driver (Mesa for AMD and Intel, the proprietary driver for NVIDIA).
- An Epic Games account.
- Free disk space for the games. Heronite installs them to `~/Games/Heronite` by default.
- About ten minutes.

## Step 1: Install Heronite

Open the [download page](/download/) and get the AppImage, which works on any distribution. Make it executable and start it:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

There are also `.deb`, `.rpm` and Arch packages. The [installation guide](/docs/installation/) lists them all. If you prefer the AppImage, keep it in a folder you can write to, like `~/Applications`, so it can update itself.

## Step 2: Check your Vulkan driver

Heronite and most Windows games on Linux need Vulkan. Check that it works:

```bash
vulkaninfo --summary
```

If it lists your GPU, you are set. If not, install your distribution's Vulkan driver (for example `vulkan-radeon` or `vulkan-intel` on Arch, or `mesa-vulkan-drivers` on Ubuntu, or NVIDIA's driver). Older 32-bit games also need the 32-bit Vulkan driver, such as `lib32-vulkan-radeon` or `mesa-vulkan-drivers:i386`.

## Step 3: Log in to Epic Games

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **Epic Games**, then **Log in with Epic Games**.
3. Sign in in the small window that opens. You type your password on Epic's own page.

If the window does not open, use the **browser method** on the same page: open the login page in your normal browser, sign in, then copy the address or code you land on and paste it into Heronite. The window needs WebKitGTK 4.1 on Linux, so that is the usual cause.

When you are logged in, your whole Epic library appears in the Collection, installed or not. Heronite reads it with [legendary](https://github.com/derrod/legendary). Read more in [Stores and launchers](/docs/stores-and-launchers/).

## Step 4: Claim the free weekly games

Epic gives away free games every week. Heronite does not claim them for you, so do this part on Epic's side:

1. Open Epic's store page in your browser and sign in with the same account.
2. Claim the free game, so it is added to your library.
3. Go back to Heronite, open **Stores**, **Epic Games**, and choose **Refresh library** ("Look for new games and updates").

The new game now shows up in the Collection like any other. Free games you claimed in past weeks are there too.

## Step 5: Install a game

Before you install, look at the game's details in the Collection. The **On Linux** box shows its [ProtonDB](https://www.protondb.com) rating and its anti-cheat status. A game rated Gold or Platinum usually runs with no work.

1. Select the game and press <kbd>Enter</kbd>, or choose **Install with Epic Games**.
2. Check the **Install folder**, and the **Wine version**. Leave the version on the default if you are not sure.
3. Confirm. The download appears on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Each game gets its own Wine prefix, a private fake Windows folder. Leave **Use the shared Wine prefix** off unless you know why you want it. Already have a game's files on disk? Use **Import an existing install instead** and point Heronite at the folder.

## Step 6: Play, and change Proton if needed

Press <kbd>Enter</kbd> on the game to play it. If it does not start or runs badly, open **Game settings** and go to **Compatibility**. The **Version** menu lets you pick another Proton build, and the ProtonDB line often tells you which one works best.

![Heronite's Game settings for Control, an Epic game, on the Compatibility tab: the Proton version GE-Proton-latest, its ProtonDB rating of Platinum, the Wine prefix and the Winecfg and Winetricks buttons.](../../assets/screenshots/game-settings.webp)

*The Compatibility tab: choose the Proton version per game.*

Builds like GE-Proton and Proton-CachyOS often have fixes before others do. The [GE-Proton guide](/guides/install-ge-proton/) shows how to install them.

## Fortnite and other anti-cheat games

Anti-cheat is the main reason an Epic game will not run on Linux.

- Some games use Easy Anti-Cheat or BattlEye and work. Heronite can provide the runtimes.
- Some developers do not allow Linux, so the game will not run, whatever you try.
- Fortnite is one of them. Epic's Easy Anti-Cheat can support Linux, but the game's developer has to switch it on, and Fortnite does not. [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) tracks the current status for every game.

Heronite shows that status in the game's details, so check it before you install a big multiplayer game. Single-player games rarely have this problem.

## Troubleshooting

- **The login window does not open.** Use the browser method on the same page, or install WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`).
- **A free game is missing.** Make sure you claimed it on the same Epic account, then refresh the library.
- **A DLL or .NET is missing.** Install it with Winetricks. Heronite suggests which one in the launch log.
- **A DirectX 12 game fails.** Turn on VKD3D-Proton in the game's settings. For a Direct3D error, turn on DXVK.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing. Install it for your GPU.
- **Another `wineserver` is running.** Close the other game, or run `wineserver -k` in that prefix.
- **Crash on start in a newer game.** Raise `vm.max_map_count`. Many distributions already do.

For more fixes, see [Troubleshooting](/docs/troubleshooting/). Logs are in **Settings → Logs**.

## What to read next

- [How to install GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) for the builds that fix the most games.
- [GOG on Linux](/guides/gog-on-linux/) and [Amazon Games on Linux](/guides/amazon-games-on-linux/) to bring your other stores into the same Collection.
- [How stores work in Heronite](/features/stores/).
- [Getting started](/docs/getting-started/) for the rest of the app.
