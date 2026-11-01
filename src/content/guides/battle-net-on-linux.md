---
title: "How to Install Battle.net on Linux (Wine and Proton)"
description: "Install the Battle.net app on Linux with Heronite: it sets up Wine for you, you sign in and install Blizzard games, and they show up in your Collection."
eyebrow: Linux guide
headline: "How to install *Battle.net* on Linux"
lead: "Heronite downloads the Battle.net installer, sets up a Wine prefix for it and brings the games you install into your Collection, with no Wine setup by hand."
navLabel: Battle.net on Linux
summary: "Set up Battle.net from the Stores page, sign in, install your games in it and play them from the Collection."
order: 4
hero: ../../assets/screenshots/collection.webp
heroAlt: "Heronite's Collection with a game open: its cover, Play button and an On Linux box showing the ProtonDB rating and anti-cheat status. Games installed in Battle.net appear here too."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "One button to set up"
    text: "Choose Battle.net on the Stores page and Heronite installs it with Wine, using your default Proton."
  - title: "Its own Wine prefix"
    text: "The app lives in ~/Games/Heronite/Prefixes/Battle.net, apart from your other games."
  - title: "Sign in on Blizzard's page"
    text: "You sign in inside Battle.net itself. Heronite never sees your password."
  - title: "Games join the Collection"
    text: "What you install in Battle.net shows up next to your other games and starts from there."
faq:
  - q: "Is there an official Battle.net for Linux?"
    a: "No. Blizzard does not make a Linux version, so the Windows app runs through Wine or Proton. Heronite automates that: it downloads the official installer and installs it in a Wine prefix of its own with your default Proton."
  - q: "Which Blizzard games work on Linux?"
    a: "Many of them run well, but it depends on the game. Check its ProtonDB rating before you install. Call of Duty is the clear exception, because its Ricochet anti-cheat does not run on Linux."
  - q: "Does this work on Windows?"
    a: "No. The Battle.net, EA app, Ubisoft Connect and Rockstar pages are Linux-only in Heronite. On Windows, use the stores' own apps."
  - q: "Where does Heronite put Battle.net?"
    a: "In a Wine prefix at `~/Games/Heronite/Prefixes/Battle.net`. Removing Battle.net from Heronite leaves that folder and its games on disk. See [Files and folders](/docs/files-and-folders/)."
  - q: "I already run Battle.net in Wine or Lutris. Can I keep it?"
    a: "Yes. Choose **Use an existing install** on the Battle.net page and point Heronite at the Wine prefix you already have."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

Blizzard has no Linux version of Battle.net, but the Windows app runs under Wine, and so do many of its games. Heronite does the setup for you. It installs the app in its own Wine prefix, lets you sign in and install games as usual, and then shows those games in your Collection.

By the end of this guide you will have Battle.net running on Linux and your Blizzard games in the same list as the rest of your library.

## What you need

- A 64-bit Linux PC with a working Vulkan driver, and the 32-bit Vulkan driver for older games.
- A Battle.net account.
- An internet connection. Heronite downloads a Proton build if you have none, then the Battle.net installer.
- Free disk space for Wine and your games.

Heronite is the only thing you install by hand. Wine and Proton come with it.

## Step 1: Install Heronite

Get the AppImage from the [download page](/download/). It runs on any distribution:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Other formats are in the [installation guide](/docs/installation/). Check that Vulkan works with `vulkaninfo --summary`. If it does not list your GPU, install your distribution's Vulkan driver first.

## Step 2: Set up Battle.net

1. Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores**.
2. In the list on the left, under **Store apps**, choose **Battle.net**.
3. Choose **Set up Battle.net** ("Download its installer and install it with Wine").

Heronite then looks for a Proton, downloads one if it needs to, downloads the official installer, creates the Wine prefix and installs Battle.net. The page shows the progress. This can take a few minutes.

The prefix is `~/Games/Heronite/Prefixes/Battle.net`. Each of these store apps gets a prefix of its own, so one cannot break another. When it is done, the page says **Ready**.

> **Note.** If you already have Battle.net in a Wine prefix, choose **Use an existing install** instead and select that prefix.

## Step 3: Sign in and install games

1. Choose **Open Battle.net** ("Sign in and install games").
2. Sign in in the Battle.net window. You type your password there, and Heronite never sees it.
3. Install a game as you would on Windows.

Heronite shows **Signed in** on its page once you are in.

## Step 4: Find your games in the Collection

Installed Battle.net games come into the Collection by themselves. If one does not show up, choose **Refresh Battle.net games** ("Bring its installed games into the Collection") on the page. You can press <kbd>Enter</kbd> on a game to start it, and Heronite records the play time like it does for any other game.

For a game you own but have not installed, the Collection offers **Install with Battle.net**, which opens the app.

Before you install a big game, look at its **On Linux** box in the details. It shows the [ProtonDB](https://www.protondb.com) rating and the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Step 5: Change Wine or Proton if something breaks

Heronite uses your default Proton for Battle.net. To change it, open **Wine settings** on the Battle.net page and pick another build. [GE-Proton and Proton-CachyOS](/guides/install-ge-proton/) are the usual ones to try. You can also open the **Wine prefix folder** from the same page.

If a game is running, close it first. Choose **Close Battle.net** to stop the app and what runs in its prefix.

## Where everything is stored

Knowing the folders helps when you want to back things up or free some space:

- The Battle.net app and the games you install in it live in its Wine prefix, `~/Games/Heronite/Prefixes/Battle.net`.
- Heronite's own data, with your Collection and settings, is in `~/.local/share/heronite`.
- The page has an **Open folder** button for the prefix, so you do not have to type the path.

If you no longer want Battle.net in Heronite, choose **Remove from Heronite**. Its Wine prefix and the games installed in it stay on disk, so nothing is deleted by accident. Delete the folder yourself if you want the space back.

Games from Battle.net behave like all the others in the Collection. You can set their status, group them by store, and see them in your statistics. Read [Files and folders](/docs/files-and-folders/) for the full list of paths.

## What will not work

Anti-cheat is the limit. Heronite's own Battle.net page warns that Call of Duty uses the Ricochet anti-cheat, which does not run on Linux. Other Blizzard games can behave differently from one patch to the next, so check ProtonDB before you install.

On Windows there is no Battle.net page in Heronite. Use Blizzard's own app there. See [Stores and launchers](/docs/stores-and-launchers/).

## Troubleshooting

- **Set up stops or fails.** Check your internet connection and try again. Read the logs in **Settings → Logs**.
- **"Vulkan could not start."** The 32-bit Vulkan driver is often missing. Install it for your GPU, for example `lib32-vulkan-radeon` or `mesa-vulkan-drivers:i386`.
- **Another `wineserver` is running.** Close the other game, or run `wineserver -k` in that prefix.
- **A game does not appear.** Use **Refresh Battle.net games**.
- **Battle.net or a game crashes.** Try another Proton build in **Wine settings**, or a fresh prefix.
- **A DLL or .NET is missing.** Install it with Winetricks. Heronite suggests which.

See [Troubleshooting](/docs/troubleshooting/) for more.

## What to read next

- [EA app, Ubisoft Connect and Rockstar on Linux](/guides/ea-app-ubisoft-rockstar-on-linux/), which work the same way.
- [How to install GE-Proton](/guides/install-ge-proton/).
- [How stores work in Heronite](/features/stores/).
- [Wine and Proton](/docs/wine-and-proton/) for every per-game option.
