---
title: "Heronite on Steam Deck: Epic, GOG and Amazon Games"
description: "Set up Heronite on the Steam Deck: install the AppImage in Desktop Mode, add it to Steam with --console and play Epic, GOG and Amazon games from Gaming Mode."
eyebrow: Steam Deck guide
headline: "Heronite on *Steam Deck*"
lead: "Install Heronite in Desktop Mode, add it to Steam as a non-Steam game, and open a controller-first library of your Epic, GOG and Amazon games from Gaming Mode."
navLabel: Steam Deck
summary: "Install the AppImage in Desktop Mode, add it to Steam with the --console option, then play your other stores from Gaming Mode."
order: 2
hero: ../../assets/screenshots/console-home.webp
heroAlt: "Heronite's console mode home screen: a large title over its artwork, a Continue playing shelf of game covers, and controller hints for Details, Play, Search and Menu along the bottom."
og: /og/steam-deck.jpg
updated: 2026-11-01
highlights:
  - title: "Install in Desktop Mode"
    text: "Download the AppImage, make it executable and log in to your stores once with a keyboard."
  - title: "Add it to Steam"
    text: "Add the AppImage as a non-Steam game and set the launch option to --console."
  - title: "Play from Gaming Mode"
    text: "Open Heronite from your Steam library and use the Deck's buttons to browse, install and play."
  - title: "Epic, GOG and Amazon"
    text: "Your other libraries sit next to your Steam games in one controller-friendly Collection."
faq:
  - q: "Does Heronite work on the Steam Deck?"
    a: "Heronite runs on Linux as an AppImage, which is how apps are usually installed in SteamOS Desktop Mode, and its console mode is built for controllers. It is not a Steam Deck Verified app, so expect to set it up yourself using this guide."
  - q: "What launch option do I use on the Steam Deck?"
    a: "Use `--console`. It makes Heronite open in console mode, the layout for controllers and TVs. Add `--fullscreen` as well if you want it fullscreen when it starts."
  - q: "Can I play Epic Games, GOG and Amazon games on the Deck?"
    a: "Yes. Log in on the **Stores** page and the games join your Collection. Windows games run through Proton, like they do on any Linux PC. See the guides for [Epic](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon Games](/guides/amazon-games-on-linux/)."
  - q: "Do I have to use Desktop Mode every time?"
    a: "No. You need Desktop Mode to install Heronite, add it to Steam and log in to your stores. After that you can stay in Gaming Mode, and go back to Desktop Mode only to change settings that are easier with a keyboard and mouse."
  - q: "Can I add one game to Steam instead of the whole launcher?"
    a: "Yes. For an installed game, choose **Add to Steam** in its actions. Heronite adds a non-Steam shortcut that starts that game directly, without showing Heronite's window."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

The Steam Deck runs Linux, so Heronite runs on it. You can install it in Desktop Mode, add it to Steam, and then open it from Gaming Mode with a layout made for the Deck's controls. That gives you your Epic, GOG and Amazon games next to your Steam library.

This guide shows the steps. Heronite is not a Steam Deck Verified app, so you set it up by hand, but there is not much to do.

## What you need

- A Steam Deck with its default SteamOS.
- An internet connection.
- A keyboard and mouse for the setup, or the Deck's touch screen and its on-screen keyboard (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Accounts for the stores you want to use.

## Step 1: Switch to Desktop Mode

Press the <kbd>Steam</kbd> button, open **Power**, and choose **Switch to Desktop**. The Deck restarts into a normal Linux desktop.

## Step 2: Download the AppImage

In the desktop's browser, open the [download page](/download/) and get `Heronite-x86_64.AppImage`. An AppImage is one file that runs on any Linux distribution, so you do not need to install packages on SteamOS.

Move it to a folder you can write to, such as `~/Applications`. Heronite updates the AppImage by replacing it, so the folder must be writable.

## Step 3: Make it executable and start it

In the file manager, right-click the file, choose **Properties**, open **Permissions** and tick **Is executable**. Or use a terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

On the first start Heronite adds the Steam games it finds, with no login. It also looks for emulators and ROM folders.

## Step 4: Log in to your stores

Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores** and log in to Epic Games, GOG or Amazon Games. A small login window opens with the store's own page. Use a keyboard here, because you have to type a password. Your whole library then appears in the Collection.

Each store has its own guide with the details: [Epic Games](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon Games](/guides/amazon-games-on-linux/). Install a game or two now, while you have the desktop. You can choose the install folder, so the SD card works too.

## Step 5: Add Heronite to Steam

1. Open Steam in Desktop Mode.
2. Choose **Add a Game** at the bottom left of the library, then **Add a Non-Steam Game**.
3. Click **Browse**, set the file filter to all files, and select `Heronite-x86_64.AppImage`.
4. Add it, then find **Heronite** in your library, right-click it and open **Properties**.
5. In **Launch Options**, type:

```
--console
```

`--console` opens Heronite in console mode, the controller-first layout. Add `--fullscreen` too if you want the window fullscreen. Steam's menu names can change between updates, but the idea is the same: add the file as a non-Steam game, then set its launch options. See [Command line and links](/docs/command-line-and-links/) for all the options.

## Step 6: Use console mode from Gaming Mode

Double-click the **Return to Gaming Mode** icon on the desktop. Heronite is in your library under non-Steam games. Start it and you land on the console home screen, with a **Continue playing** shelf of your recent games. The **Library** tab holds every game.

![Heronite console mode library: a grid of game covers with Show, Sort, Status and Search filters on top and Details, Install and Search hints along the bottom.](../../assets/screenshots/console-library.webp)

*The console library: one grid for every store, with controller hints along the bottom.*

The controls are the Deck's own buttons:

| Button | Action |
|---|---|
| A | Confirm |
| B | Back |
| X, Y | The actions shown on screen |
| L1 / R1 | Switch tabs |
| D-pad, left stick | Move |
| Menu button | Open the menu |

Button pictures follow the controller, and Heronite knows the Steam Deck's. If the buttons do not react as you expect, check the controller layout Steam uses for the Heronite entry. Find the full list of controls in [Console mode](/docs/console-mode/).

## Step 7: Install and play

Open the **Library** tab with R1, choose a game and press X to install it. Press A on an installed game to open its page, and **Play** to start it. Heronite records the session like it does on a PC.

To keep one game as its own entry in Steam, use **Add to Steam** in the game's actions. Steam then shows a shortcut that starts that game directly.

You can also make Heronite open in console mode by itself. In **Settings → Console mode**, turn on the options for startup or for when a controller connects.

## Honest limits

- Windows games run through Proton, and not all of them run well. Check the game's ProtonDB rating in its details first.
- Games with anti-cheat may not run on Linux. The details show the status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- The Deck's battery and screen mean some games need a lower FPS limit. Set it per game in **Game settings**.
- The in-game overlay (beta) needs a Wayland session with layer-shell support. Read [Console mode](/docs/console-mode/) before you rely on it.

## Troubleshooting

- **Heronite does not start.** Make sure the file is executable. Run it from a terminal to see any message.
- **The AppImage does not update.** Move it to `~/Applications` or another folder in your home.
- **The login window does not open.** Use the **browser method** on the same page: log in in a browser and paste the address or code.
- **GOG downloads fail.** The gogdl tool needs `python3`. Check that it is installed.
- **A game closes at once.** Open its launch log in **Settings → Logs**. Heronite suggests a fix for the common causes. A game may need another Proton build, as the [GE-Proton guide](/guides/install-ge-proton/) explains.

More help is in [Troubleshooting](/docs/troubleshooting/).

## What to read next

- [Console mode](/features/console-mode/) for themes and layouts you can change.
- [How to install GE-Proton](/guides/install-ge-proton/) for more Proton builds.
- [Epic Games on Linux](/guides/epic-games-on-linux/).
- [Getting started](/docs/getting-started/).
