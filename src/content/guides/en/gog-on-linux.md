---
title: "GOG Games on Linux Without GOG Galaxy"
description: "Install GOG games on Linux without GOG Galaxy: log in to get your whole library, or add DRM-free offline installers with no account."
eyebrow: Linux guide
headline: "How to play GOG games on Linux"
lead: "Play GOG games on Linux without GOG Galaxy. Log in and Heronite installs them with gogdl, or add DRM-free installers by hand."
navLabel: GOG on Linux
summary: "Log in to GOG in Heronite, install games with gogdl, or add DRM-free offline installers and game folders by hand."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game selected: its cover, a Play button, details and an On Linux box with the ProtonDB rating and anti-cheat status."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Log in on the Stores page"
    text: "Your whole GOG library joins the Collection after you log in."
  - title: "Installs with gogdl"
    text: "gogdl is the open source tool Heroic uses too."
  - title: "DRM-free, your way"
    text: "Add offline installers or game folders with no login."
  - title: "Needs python3"
    text: "gogdl runs on Python, so install python3 first."
faq:
  - q: "Is there a GOG Galaxy for Linux?"
    a: "No, GOG makes no Linux version of Galaxy. Heronite uses the open source tool [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) to log in, download, verify and update your games."
  - q: "Do GOG games run on Linux?"
    a: "Many do. Most are Windows games that run through Wine or Proton, and some have a native Linux version. Check the game's [ProtonDB](https://www.protondb.com) rating before you install."
  - q: "Why do my GOG downloads fail on Linux?"
    a: "gogdl needs `python3`. Install it with your package manager and try again. Other causes are on the [troubleshooting page](/docs/troubleshooting/)."
  - q: "Can I play GOG games without logging in?"
    a: "Yes. GOG games are DRM-free, so an offline installer works without any launcher. See [Add DRM-free GOG games by hand](#add-drm-free-gog-games-by-hand)."
  - q: "Can I use my games from GOG Galaxy on Windows?"
    a: "Yes, on Windows. Heronite shows the games GOG Galaxy installed as installed, without downloading them again. On Linux there is no Galaxy to import from."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## What you need

- A 64-bit Linux PC with a working Vulkan driver.
- `python3`, which the gogdl tool runs on. Check with `python3 --version`, and install it with your package manager if the command is missing.
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

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **GOG**, then **Log in with GOG**.
3. Log in on GOG's page in the window that opens.

Your whole GOG library now shows in the Collection.

If the window does not open, use the **browser method** on the same page. Copy the address you land on, which contains `code=`, and paste it into Heronite. See [Store logins](/docs/troubleshooting/#a-store-login-or-download-fails).

## Install a GOG game

Check the **On Linux** box in the game's details first for the [ProtonDB](https://www.protondb.com) rating.

1. Find the game in the Collection and press <kbd>Enter</kbd>, or choose **Install with GOG**.
2. Pick the **Install folder** and, for a Windows game, the **Wine version**. The default is a good start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Some GOG games have a native Linux version. When GOG lists one, Heronite can offer it in place of the Windows build, with no Wine.

## Play the game

Select the installed game and press <kbd>Enter</kbd>.

## Change the Proton version

Windows games run through Wine or Proton, each with its own prefix in `~/Games/Heronite/Prefixes`. If a game misbehaves, try another Proton version in **Game settings → Compatibility**. The [GE-Proton guide](/guides/install-ge-proton/) shows how to get more.

![Heronite's Game settings for Control on the Compatibility tab, with the Proton version, its ProtonDB rating and the Wine prefix.](../../../assets/screenshots/game-settings.webp)

## Add DRM-free GOG games by hand

1. Download the offline installer from your GOG account on the website.
2. Run a Windows installer through Wine, yourself or with the **Run .exe in prefix** button in **Game settings → Compatibility**. Run a Linux installer as usual.
3. Press <kbd>Ctrl</kbd> <kbd>N</kbd> and add the installed game. Choose a Windows program (`.exe`), a native Linux program or a start script.
4. Or point Heronite at the folder that holds your games. It adds every game it finds at once.

Heronite fetches art and details for them, but they are not tied to your GOG account, so they do not update. If a GOG game is already on this PC, use **Import an installed game** on the GOG page instead of downloading it again.

## Update, repair or move a GOG game

One download queue handles updates, repairs, moves and uninstalls. Heronite checks for updates every 3 hours, and **Update all** on the GOG page installs several at once. The queue pauses when you are offline and retries failed downloads.

Installed games stay on disk if you log out of GOG. Heronite keeps your login in its data folder, so keep that folder private. See [Files and folders](/docs/files-and-folders/).

## A GOG game won't start on Linux

Open **Settings → Logs** and read the game's launch log. Heronite shows a fix when it knows one. The common Wine fixes are in [Troubleshooting](/docs/troubleshooting/#a-game-wont-start-linux), and the per-game options in [Wine and Proton](/docs/wine-and-proton/#per-game-options).
