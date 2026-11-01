---
title: "How to Play GOG Games on Linux Without Galaxy"
description: "Play your GOG library on Linux without GOG Galaxy: log in with Heronite, install through gogdl, or add DRM-free offline installers by hand. Steps and fixes."
eyebrow: Linux guide
headline: "How to play *GOG* games on Linux"
lead: "GOG has no Linux app, but you do not need one. Log in with Heronite to install your library, or add the DRM-free installers you already downloaded."
navLabel: GOG on Linux
summary: "Log in to GOG in Heronite, install games with gogdl, or add DRM-free offline installers and game folders by hand."
order: 3
hero: ../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game selected: its cover, a Play button, details and an On Linux box with the ProtonDB rating and anti-cheat status."
og: /og/gog-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Log in on the Stores page"
    text: "Press Ctrl+4, choose GOG and sign in. Your whole library joins the Collection."
  - title: "Installs with gogdl"
    text: "Heronite downloads and verifies games with gogdl, the same open source tool Heroic uses."
  - title: "DRM-free, your way"
    text: "Add the offline installers or folders you already own, with no login."
  - title: "Needs python3"
    text: "gogdl runs on Python, so install python3 if GOG downloads fail."
faq:
  - q: "Is there a GOG Galaxy for Linux?"
    a: "No, GOG does not make an official Linux version of Galaxy. Heronite uses the open source tool [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) to log in, download, verify and update your games instead."
  - q: "Do GOG games run on Linux?"
    a: "Many do. Most GOG games are Windows games and run through Wine or Proton. Some also have a native Linux version, and Heronite can offer it when GOG lists one. Check the game's [ProtonDB](https://www.protondb.com) rating in its details before you install."
  - q: "Why do my GOG downloads fail on Linux?"
    a: "gogdl needs `python3`. Install it with your package manager and try the download again. See the [troubleshooting page](/docs/troubleshooting/) for other causes."
  - q: "Can I play GOG games without logging in?"
    a: "Yes. GOG games are DRM-free, so an offline installer you downloaded from GOG's site works without any launcher. Add the installed game to Heronite by hand and it plays like any other."
  - q: "Can I use my games from GOG Galaxy on Windows?"
    a: "Yes, on Windows. Heronite can show the games GOG Galaxy installed as installed, without downloading them again, and GOG Galaxy keeps updating them. On Linux there is no Galaxy to import from."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

Your GOG library can live on Linux without GOG Galaxy. Heronite logs in to your account, lists every game you own and installs them with one queue. GOG games have no DRM, so you can also skip the login and add your own installers.

This guide shows both ways: the login way, and the by-hand way for offline installers and folders you already have.

## What you need

- A 64-bit Linux PC with a working Vulkan driver.
- `python3` installed. The gogdl tool runs on it.
- A GOG account, for the login way. The by-hand way needs no account.
- Disk space. Heronite installs games to `~/Games/Heronite` by default.

## Step 1: Install Heronite

Get the AppImage from the [download page](/download/). It works on any distribution:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Packages for Debian, Ubuntu, Fedora and Arch are in the [installation guide](/docs/installation/).

## Step 2: Check that python3 is installed

```bash
python3 --version
```

If it prints a version, you are fine. If the command is missing, install `python3` with your package manager. Without it, GOG downloads fail.

## Step 3: Log in to GOG

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. Choose **GOG** and use **Log in with GOG**.
3. Sign in in the small window with GOG's own page.

If the window does not open, use the **browser method** on the same page. Open the login page in your browser and sign in. Then copy the address of the page you land on. It contains `code=`. Paste it into Heronite. On Linux the login window needs WebKitGTK 4.1, which is the usual reason it does not open.

After you log in, your whole GOG library shows in the Collection, installed or not. Read [Stores and launchers](/docs/stores-and-launchers/) for how Heronite handles each store.

## Step 4: Install a game

1. Find the game in the Collection and press <kbd>Enter</kbd>, or choose **Install with GOG**.
2. Pick the **Install folder** and, for a Windows game, the **Wine version**. The default is a good start.
3. Confirm. Follow the download on the Downloads page (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Heronite downloads and verifies the game with [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl). One download queue handles installs, updates, repairs and moves, pauses when you are offline and retries failed downloads. Heronite checks for game updates every 3 hours.

Before a big download, look at the **On Linux** box in the game's details. It shows its [ProtonDB](https://www.protondb.com) rating, so you know if it runs well.

![Heronite's Game settings for Control on the Compatibility tab, with the Proton version, its ProtonDB rating and the Wine prefix.](../../assets/screenshots/game-settings.webp)

*Pick another Proton version per game in Game settings → Compatibility.*

## Step 5: Play

Press <kbd>Enter</kbd> on the game to start it. Windows games run through Wine or Proton, with their own prefix in `~/Games/Heronite/Prefixes`. If a game misbehaves, open **Game settings** and go to **Compatibility** to try another build. The [GE-Proton guide](/guides/install-ge-proton/) shows how to get more.

## Adding DRM-free games by hand

GOG games have no DRM, so you do not need a login to play them. This is useful when you keep installers on a drive, or when you do not want a launcher to touch your account.

1. Download the offline installer from your GOG account on the website.
2. For a Windows installer, run it through Wine, either yourself or with the **Run .exe in prefix** button in a game's **Game settings → Compatibility**. For a Linux installer, run it as usual.
3. Press <kbd>Ctrl</kbd> <kbd>N</kbd> and add the installed game. Choose a Windows program (`.exe`), a native Linux program or a start script.
4. Or point Heronite at the folder that holds your games. It adds every game it finds at once.

Heronite will fetch art and details for them, but they are not tied to your GOG account, so they do not update by themselves. If a GOG game's files are already on this PC, use **Import an installed game** on the GOG page instead of downloading it again.

## Updates, repairs and native Linux builds

GOG games installed by Heronite can be updated, repaired, moved to another drive or uninstalled from the same download queue. Heronite checks for updates every 3 hours, and the GOG page has an **Update all** button when several are waiting.

Some GOG games also have a native Linux version. When GOG lists one, Heronite can offer it in place of the Windows build. A native build does not need Wine. If it misbehaves, you can still install the Windows version and run that through Proton.

Your installed games stay on disk if you log out of GOG in Heronite. Your GOG login is kept in Heronite's data folder, so keep that folder private when you share or copy it.

## Troubleshooting

- **GOG downloads fail.** Install `python3`. gogdl needs it.
- **The login window does not open.** Use the browser method, or install WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`).
- **A DLL or .NET is missing.** Install it with Winetricks. Heronite suggests which one.
- **A DirectX 12 game fails.** Turn on VKD3D-Proton in the game's settings.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing, such as `lib32-vulkan-radeon` or `mesa-vulkan-drivers:i386`.
- **A game does not start at all.** Open **Settings → Logs** and read its launch log. Heronite shows a fix when it knows one.

More fixes are in [Troubleshooting](/docs/troubleshooting/).

## What to read next

- [Epic Games on Linux](/guides/epic-games-on-linux/) and [Amazon Games on Linux](/guides/amazon-games-on-linux/) for your other libraries.
- [How stores work in Heronite](/features/stores/).
- [Wine and Proton](/docs/wine-and-proton/) for the per-game options.
- [Files and folders](/docs/files-and-folders/) to see where your games and logins live.
