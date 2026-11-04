---
title: "How to Install GE-Proton and Proton-CachyOS on Linux"
description: "Install GE-Proton, Proton-CachyOS and other Proton builds on Linux with Heronite's Wine Manager. Pick one per game or share them with Steam."
eyebrow: Linux guide
headline: "How to install GE-Proton and Proton-CachyOS"
lead: "Install GE-Proton on Linux from the Wine Manager in one click, then pick it per game or share it with Steam."
navLabel: Install GE-Proton
summary: "Open the Wine Manager, install GE-Proton or Proton-CachyOS, and choose the build for each game in Game settings."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Heronite's Wine Manager: a list of sources on the left (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM and Proton-Sarek), a list of builds with Install buttons on the right, and the Install Proton into Steam switch at the bottom left."
og: /og/install-ge-proton.jpg
updated: 2026-11-04
highlights:
  - title: "Open the Wine Manager"
    text: "Press Ctrl+3, choose a source such as GE-Proton, and click Install on a build."
  - title: "Six sources"
    text: "Pick from six Proton sources in one list."
  - title: "Share with Steam"
    text: "Turn on Install Proton into Steam and Steam can use new builds too."
  - title: "Choose it per game"
    text: "Pick the version for each game in Game settings → Compatibility."
faq:
  - q: "What is the difference between GE-Proton and Proton-CachyOS?"
    a: "They come from different teams: Glorious Eggroll makes GE-Proton, the CachyOS team makes Proton-CachyOS. Both often get fixes before Valve's Proton. See [the sources table](#what-are-the-other-proton-builds-for)."
  - q: "Can Steam use the builds I install in Heronite?"
    a: "Yes. Turn on **Install Proton into Steam** in the Wine Manager and restart Steam. See [Share the builds with Steam](#share-the-builds-with-steam-optional)."
  - q: "Where does Heronite install Proton builds?"
    a: "In `~/.local/share/heronite/tools/proton`. With **Install Proton into Steam** on, new builds go to Steam's `compatibilitytools.d` folder."
  - q: "Does the Wine Manager work on Windows?"
    a: "No. The Wine Manager is Linux only. On Windows, games run natively."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

GE-Proton and Proton-CachyOS often get fixes for new releases first, so try them when a game crashes.

## What you need

- Heronite on Linux ([installation guide](/docs/installation/)). The Wine Manager is not on Windows. On Steam Deck, set Heronite up with the [Steam Deck guide](/guides/steam-deck/) first.
- An internet connection. Builds download from GitHub.
- Disk space. A Proton build takes from a few hundred megabytes to over a gigabyte.

## Open the Wine Manager

Press <kbd>Ctrl</kbd> <kbd>3</kbd>, or open it from the command palette (<kbd>Ctrl</kbd> <kbd>K</kbd>). Pick one of the six sources on the left and its builds appear on the right, newest first, with release date and size.

![Heronite's Wine Manager with Proton-CachyOS selected: a list of builds with release dates, sizes and Install buttons.](../../../assets/screenshots/wine-manager.webp)

## Install GE-Proton in the Wine Manager

1. Choose **GE-Proton** in the list on the left.
2. Find the build you want. **GE-Proton-latest** follows the newest release. A numbered build stays fixed, which helps when a game works on one release only.
3. Click **Install**.

The row changes to **Installed**. Builds go to `~/.local/share/heronite/tools/proton`. Use the search box to find a version quickly.

> **Tip.** Turn on **Keep the -latest builds up to date**. Heronite then updates the **-latest** entries in the background, never while a game runs.

## Install Proton-CachyOS

Choose **Proton-CachyOS** in the list and click **Install** on a build. Builds install side by side, so you can keep both and switch per game.

## What are the other Proton builds for?

| Source | What it is |
|---|---|
| Proton-CachyOS | A Proton variant by the CachyOS team, with extra tools like DXVK-Sarek and D7VK |
| GE-Proton | A Proton variant by Glorious Eggroll, meant to be used with the umu launcher |
| DW-Proton | Dawn Winery's Proton: Proton Experimental with extra game fixes |
| UMU-Proton | Valve's Proton, packaged by the umu project to run games outside Steam |
| Proton-EM | Proton with patches that are still being tested, such as FSR 4 and HDR. Some releases are pre-releases |
| Proton-Sarek | Proton with DXVK-Sarek, for older graphics cards without Vulkan 1.3 support |

[ProtonDB](https://www.protondb.com) often names the build that works for a game.

## Pick a build in Game settings

1. Select the game in your Collection and open its **Game settings**.
2. Go to the **Compatibility** tab.
3. In **Version**, choose the build you installed.

![Heronite's Game settings on the Compatibility tab: the Version menu set to GE-Proton-latest, with its ProtonDB rating and the Wine prefix below.](../../../assets/screenshots/game-settings.webp)

The same tab shows the game's ProtonDB rating and a **Recommended** build. Your choice applies to that game only. Set a default for new games in Settings. See [Wine and Proton](/docs/wine-and-proton/).

## Share the builds with Steam (optional)

Heronite can put builds in Steam's `compatibilitytools.d` folder, where Steam can use them:

1. In the Wine Manager, turn on **Install Proton into Steam**.
2. Install builds as above. New ones download into `compatibilitytools.d`, and the ones you already have are registered there.
3. Restart Steam so it sees them.
4. In Steam, right-click a game and choose **Properties**, then **Compatibility**. Turn on the option to force a compatibility tool and pick your build.

Heronite also finds Proton builds already in your Steam libraries and Lutris's Wine runners, so you do not download them twice.

## Update and remove builds

Next to an installed build, **Update** appears when a new release exists, and **Remove** deletes it. Games set to a removed build fall back to the default.

## A build won't install, show up or fix the game

- **The list is empty.** Click the refresh icon. If it says GitHub's limit was reached, try again after the time it shows.
- **A download fails.** Check your connection and click **Install** again.
- **Steam does not show the build.** Make sure **Install Proton into Steam** was on when you installed it, then restart Steam.
- **A game still crashes.** Try another source, such as Proton-CachyOS or DW-Proton, or a fresh prefix.

For Vulkan errors and other common fixes, see [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux). If a game has anti-cheat that blocks Linux, no Proton build can help: see [Anti-cheat](/docs/wine-and-proton/#anti-cheat).
