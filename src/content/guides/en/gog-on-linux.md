---
title: "GOG Games on Linux Without GOG Galaxy"
description: "Install GOG games on Linux without GOG Galaxy: log in to get your whole library, or add DRM-free offline installers with no account."
eyebrow: Linux guide
headline: "How to play GOG games on Linux"
lead: "Play GOG games on Linux without GOG Galaxy. Log in to install your library through Heronite, or add DRM-free installers by hand."
navLabel: GOG on Linux
summary: "Log in to GOG in Heronite to install your library, or add DRM-free offline installers and game folders by hand."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game selected: its cover, a Play button, details and an On Linux box with the ProtonDB rating and anti-cheat status."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in once"
    text: "Your whole GOG library shows up after one login."
  - title: "Native Linux builds"
    text: "When GOG lists a Linux version, Heronite can install it with no Wine."
  - title: "Automatic update checks"
    text: "Heronite checks your GOG games for updates every 3 hours."
  - title: "A prefix per game"
    text: "Each Windows game runs in its own folder, apart from the others."
faq:
  - q: "Is there a GOG Galaxy for Linux?"
    a: "No, GOG makes no Linux version of Galaxy. Heronite uses [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl), an open source GOG tool, to log in, download, verify and update your games."
  - q: "Do GOG games run on Linux?"
    a: "Many do. Most are Windows games that run through Wine or Proton. Check the game's [ProtonDB](https://www.protondb.com) rating before you install."
  - q: "Why do my GOG downloads fail on Linux?"
    a: "Check that `python3` is installed, because gogdl needs it. Install it with your package manager and try again. Other causes are on the [troubleshooting page](/docs/troubleshooting/)."
  - q: "Can I play GOG games on Steam Deck?"
    a: "Yes. Log in to GOG in Desktop Mode, then play from Gaming Mode. The [Steam Deck guide](/guides/steam-deck/) has the steps."
  - q: "Can I use my games from GOG Galaxy on Windows?"
    a: "Yes, on Windows. Heronite shows games installed by GOG Galaxy as installed, without downloading them again. On Linux there is no Galaxy to import from."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## What you need

- A 64-bit Linux PC with a working Vulkan driver.
- `python3`, which gogdl (the GOG download tool) runs on. Check with `python3 --version`, and install it with your package manager if the command is missing.
- A GOG account, to log in. Adding games by hand needs none.
- Free disk space. Games install to `~/Games/Heronite`.

## Install Heronite

Get the AppImage from the [download page](/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). On Steam Deck, follow the [Steam Deck guide](/guides/steam-deck/).

## Log in to GOG

1. Open **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choose **GOG**.
3. Press **Log in**.
4. Log in on GOG's page in the window that opens.

All your GOG games then appear in your library. If the login window does not open, use **Or log in with your browser** on the same page and paste the code it gives you. For GOG, the code is the address you land on, which contains `code=` ([store logins](/docs/troubleshooting/#a-store-login-or-download-fails)).

## Install and play a GOG game

Look at the **On Linux** row in the game's details first for the [ProtonDB](https://www.protondb.com) rating.

1. Find the game in your library and press <kbd>Enter</kbd>, or choose **Install with GOG**.
2. Check the folder under **Select install path**. For a Windows game, the **Wine version** is under **Show Wine settings**; the default is a good start.
3. Press **Install**. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. When it finishes, select the game and press <kbd>Enter</kbd> to play.

When GOG lists a native Linux version, Heronite can offer it in place of the Windows build, with no Wine.

## Change the Proton version

If a Windows game misbehaves, open **Game settings → Compatibility** and choose another build in **Version**. The [GE-Proton guide](/guides/install-ge-proton/) shows how to get more builds.

![Heronite's Game settings for Control on the Compatibility tab, with the Proton version, its ProtonDB rating and the Wine prefix.](../../../assets/screenshots/game-settings.webp)

Each Windows game has its own Wine prefix (a separate Windows folder for that game) in `~/Games/Heronite/Prefixes`.

## Add DRM-free GOG games by hand

1. Download the offline installer from your GOG account on the website.
2. Run the installer. For a Windows installer, press **Run .exe in prefix** in **Game settings → Compatibility**, or run it through Wine yourself.
3. Press <kbd>Ctrl</kbd> <kbd>N</kbd> and add the installed game: a Windows program (`.exe`), a native Linux program or a start script.

To add many games at once, choose **Add from folder** in the ☰ menu. Heronite fetches art and details for these games, but they are not tied to your GOG account, so they do not update.

If a GOG game is already on this PC, press **Import game** under **Import an installed game** on the GOG page instead of downloading it again.

## Update, repair or move a GOG game

- **Update:** Heronite checks for updates every 3 hours. **Update all** on the GOG page installs several at once.
- **Repair or move:** choose **Verify and repair** or **Move install** in the game's actions.

One download queue runs these jobs and uninstalls. It pauses when you are offline and retries failed downloads.

Installed games stay on disk if you log out of GOG. Heronite keeps your login in its data folder, so keep that folder private ([Files and folders](/docs/files-and-folders/)).

## A GOG game won't start on Linux

Open **Settings → Logs** and read the game's launch log. Heronite shows a fix when it knows one. The common Wine fixes are in [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux), and the per-game options in [Wine and Proton](/docs/wine-and-proton/#per-game-options).
