---
title: "How to Install GE-Proton and Proton-CachyOS on Linux"
description: "Install GE-Proton, Proton-CachyOS and other Proton builds with Heronite's Wine Manager. Pick one per game, or share them with Steam. No terminal needed."
eyebrow: Linux guide
headline: "How to install *GE-Proton* and Proton-CachyOS"
lead: "Heronite's Wine Manager downloads and updates the Proton builds your games run on. Install one with a click, then pick it per game or share it with Steam."
navLabel: Install GE-Proton
summary: "Open the Wine Manager, install GE-Proton or Proton-CachyOS, and choose the build for each game in Game settings."
order: 7
hero: ../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager: a list of sources on the left (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek), a list of builds with Install buttons on the right, and the Install Proton into Steam switch at the bottom left."
og: /og/install-ge-proton.jpg
updated: 2026-11-01
highlights:
  - title: "Open the Wine Manager"
    text: "Press Ctrl+3, choose a source such as GE-Proton, and click Install on a build."
  - title: "Six sources"
    text: "Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek, all in one list."
  - title: "Share with Steam"
    text: "Turn on Install Proton into Steam and new builds go to compatibilitytools.d, where Steam can pick them too."
  - title: "Choose it per game"
    text: "In Game settings, Compatibility, pick the version for each game."
faq:
  - q: "How do I install GE-Proton on Linux?"
    a: "In Heronite, press `Ctrl+3` to open the Wine Manager, choose **GE-Proton** in the list on the left, and click **Install** on the build you want. Heronite downloads and unpacks it for you. There is no need to copy files by hand."
  - q: "What is the difference between GE-Proton and Proton-CachyOS?"
    a: "GE-Proton is a Proton variant made by Glorious Eggroll. Proton-CachyOS is maintained by the CachyOS team and includes extra tools like DXVK-Sarek and D7VK. Both often get game fixes before Valve's Proton, and you can install both and switch per game."
  - q: "Can Steam use the builds I install in Heronite?"
    a: "Yes. Turn on **Install Proton into Steam** in the Wine Manager. New builds then download into Steam's `compatibilitytools.d` folder, and the ones already installed are registered there. Steam sees them after it restarts."
  - q: "How do I choose which Proton a game uses?"
    a: "Open the game's **Game settings**, go to **Compatibility** and pick a build in the **Version** menu. You can also set a default for all games in Settings. Read [Wine and Proton](/docs/wine-and-proton/) for the other options."
  - q: "Does the Wine Manager work on Windows?"
    a: "No. Wine and Proton are for Linux, so the Wine Manager is Linux only. On Windows, games run natively."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

Many Windows games on Linux run best on a Proton build other than the default. GE-Proton and Proton-CachyOS often carry fixes for new releases first, and they are the first things to try when a game crashes or looks wrong. Heronite's Wine Manager installs them for you.

By the end of this guide you will have GE-Proton and Proton-CachyOS installed, know what the other builds are for, and be able to pick one for each game, or share them with Steam.

## What you need

- Heronite on Linux. The Wine Manager is not on Windows.
- An internet connection, because builds are downloaded from GitHub.
- A GPU with a working Vulkan driver.
- Some disk space. A Proton build takes from a few hundred megabytes to over a gigabyte.

## Step 1: Install Heronite

Get the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Packages are listed in the [installation guide](/docs/installation/).

## Step 2: Open the Wine Manager

Press <kbd>Ctrl</kbd> <kbd>3</kbd>, or open it from the command palette (<kbd>Ctrl</kbd> <kbd>K</kbd>). The page lists six sources on the left. Pick one and the builds it offers appear on the right, newest first, with their release date and size.

![Heronite's Wine Manager with Proton-CachyOS selected: a list of builds with release dates, sizes and Install buttons.](../../assets/screenshots/wine-manager.webp)

*The Wine Manager: choose a source on the left, install a build on the right.*

## Step 3: Install GE-Proton

1. Choose **GE-Proton** in the list on the left.
2. Find the build you want. **GE-Proton-latest** follows the newest release. A numbered build, such as one with a version in its name, stays fixed, which is useful when a game works on one release only.
3. Click **Install**.

Heronite downloads and unpacks it, and the row changes to **Installed**. Builds go to `~/.local/share/heronite/tools/proton`. You can also use the search box to find a version quickly. If the list is empty, click the refresh icon.

> **Tip.** The **-latest** entries update themselves if you turn on **Keep the -latest builds up to date**. Heronite then downloads the new release in the background, and never while a game runs.

## Step 4: Install Proton-CachyOS

Do the same with **Proton-CachyOS**: choose it in the list and click **Install** on a build. Proton-CachyOS includes extra tools like DXVK-Sarek and D7VK,. You can install several builds side by side, so keep both and switch per game.

## What the other builds are for

| Source | What it is |
|---|---|
| Proton-CachyOS | A Proton variant by the CachyOS team, with extra tools like DXVK-Sarek and D7VK |
| GE-Proton | A Proton variant by Glorious Eggroll, meant to be used with the umu launcher |
| DW-Proton | Dawn Winery's Proton: Proton Experimental with extra game fixes |
| UMU-Proton | Valve's Proton, packaged by the umu project to run games outside Steam |
| Proton-EM | Proton with patches that are still being tested, such as FSR 4 and HDR. Some releases are pre-releases |
| Proton-Sarek | Proton with DXVK-Sarek, for older graphics cards without Vulkan 1.3 support |

If a game fails on one build, try another before you give up. The page for the game on [ProtonDB](https://www.protondb.com) often names the build that works.

## Step 5: Choose the build for a game

1. Select the game in your Collection and open its **Game settings**.
2. Go to the **Compatibility** tab.
3. In **Version**, choose the build you installed.

![Heronite's Game settings on the Compatibility tab: the Version menu set to GE-Proton-latest, with its ProtonDB rating and the Wine prefix below.](../../assets/screenshots/game-settings.webp)

*Game settings → Compatibility: the Version menu picks the build for this game.*

The same tab shows the game's ProtonDB rating and the build it recommends, with a line such as **Recommended** and the name. Your choice applies to that game only. You can also set a default for new games in Settings. If you remove a build later, games set to use it fall back to the default.

## Step 6: Let Steam use the builds too (optional)

Steam can use any Proton build placed in its `compatibilitytools.d` folder. Heronite can put them there:

1. In the Wine Manager, turn on **Install Proton into Steam**.
2. Install builds as in the steps above. New ones download into Steam's `compatibilitytools.d` folder, and the ones you already have are registered there.
3. Restart Steam so it sees them.
4. In Steam, right-click a game, choose **Properties**, then **Compatibility**, turn on the option to force a compatibility tool, and pick your build.

Heronite also finds the Proton builds already in your Steam libraries and the Wine runners of Lutris, so you do not have to download them twice.

## Update and remove builds

Next to an installed build you can **Update** it when a new release exists, or **Remove** it. A confirmation reminds you that games set to use it fall back to the default. Removing a build you do not use frees up the disk space.

## Troubleshooting

- **The list is empty.** Click the refresh icon. If it says GitHub's limit was reached, try again after the time it shows.
- **A download fails.** Check your connection and click **Install** again.
- **Steam does not show the build.** Make sure **Install Proton into Steam** was on when you installed it, then restart Steam.
- **A game still crashes.** Try another source, such as Proton-CachyOS or DW-Proton, or a fresh prefix. Heronite also suggests fixes from the launch log, like turning on VKD3D-Proton for DirectX 12 games.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing. Install it for your GPU, such as `lib32-vulkan-radeon` or `mesa-vulkan-drivers:i386`.
- **A game with anti-cheat does not run.** No Proton build can change that if the developer does not allow Linux. See [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

More fixes are in [Troubleshooting](/docs/troubleshooting/).

## What to read next

- [Wine and Proton in Heronite](/features/wine-and-proton/) for every per-game option.
- [Epic Games on Linux](/guides/epic-games-on-linux/) and [Heronite on Steam Deck](/guides/steam-deck/).
- [Wine and Proton](/docs/wine-and-proton/) in the docs, with prefixes and the sandbox.
- [Environment variables](/docs/environment-variables/) for advanced settings.
