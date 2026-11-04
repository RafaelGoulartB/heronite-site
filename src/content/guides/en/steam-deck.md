---
title: "Epic, GOG and Amazon Games on Steam Deck"
description: "Play Epic, GOG and Amazon games on Steam Deck: install the Heronite AppImage in Desktop Mode, add it to Steam with --console and launch from Gaming Mode."
eyebrow: Steam Deck guide
headline: "How to play Epic, GOG and Amazon games on Steam Deck"
lead: "Run Heronite on Steam Deck to play your Epic, GOG and Amazon games from Gaming Mode, in a controller-first library."
navLabel: Steam Deck
summary: "Install the AppImage in Desktop Mode, add it to Steam with the --console option, then play your other stores from Gaming Mode."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "Heronite's console mode with ELDEN RING open: Play, Status, Favourite, Game settings and Full page in a list for the controller, over the carousel of covers."
og: /og/steam-deck.jpg
updated: 2026-11-04
highlights:
  - title: "Install in Desktop Mode"
    text: "Download the AppImage, make it executable and log in to your stores once with a keyboard."
  - title: "Add it to Steam"
    text: "Add the AppImage as a non-Steam game and set the launch option to --console."
  - title: "Play from Gaming Mode"
    text: "Open Heronite from your Steam library and use the Deck's buttons to install and play."
  - title: "Epic, GOG and Amazon"
    text: "Your other libraries sit next to your Steam games in one controller-friendly Collection."
faq:
  - q: "Does Heronite work on the Steam Deck?"
    a: "Yes. Heronite runs on SteamOS as an AppImage, and its console mode is built for controllers. It is not Steam Deck Verified, so you set it up yourself."
  - q: "What launch option do I use on the Steam Deck?"
    a: "Use `--console`. It opens Heronite in console mode, the layout for controllers and TVs. Add `--fullscreen` to start fullscreen."
  - q: "Can I play Epic Games, GOG and Amazon games on the Deck?"
    a: "Yes. Log in on the **Stores** page and the games join your Collection. Windows games run through Proton, as on any Linux PC."
  - q: "Do I have to use Desktop Mode every time?"
    a: "No. You need it to install Heronite, add it to Steam and log in to your stores. After that, stay in Gaming Mode and go back only for settings that are easier with a keyboard and mouse."
  - q: "Can I add one game to Steam instead of the whole launcher?"
    a: "Yes. For an installed game, choose **Add to Steam** in its actions. Steam gets a non-Steam shortcut that starts that game directly, without showing Heronite's window."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

Heronite runs on Steam Deck because SteamOS is Linux. It is not a Steam Deck Verified app, so you set it up by hand.

## What you need

- A Steam Deck with its default SteamOS.
- A keyboard and mouse for the setup, or the Deck's touch screen and its on-screen keyboard (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Accounts for the stores you want to use.

## Switch to Desktop Mode

Press the <kbd>Steam</kbd> button, open **Power**, and choose **Switch to Desktop**.

## Download and start the AppImage

In the desktop's browser, open the [download page](/download/) and get `Heronite-x86_64.AppImage`. It runs on SteamOS with no packages to install.

Move it to a folder you can write to, such as `~/Applications`, and make it executable. In the file manager, right-click the file, choose **Properties**, open **Permissions** and tick **Is executable**. Or use a terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

On the first start Heronite adds the Steam games it finds, with no login. It also looks for emulators and ROM folders.

## Log in to Epic, GOG and Amazon Games

Press <kbd>Ctrl</kbd> <kbd>4</kbd> to open **Stores** and log in to Epic Games, GOG or Amazon Games. A small login window opens with the store's own page. Use a keyboard to type your password. Your whole library then appears in the Collection.

Each store has its own guide: [Epic Games](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) and [Amazon Games](/guides/amazon-games-on-linux/). Install a game or two now, while you have the desktop. You can pick the install folder, so the SD card works too.

## Add Heronite to Steam

1. Open Steam in Desktop Mode.
2. Choose **Add a Game** at the bottom left of the library, then **Add a Non-Steam Game**.
3. Click **Browse**, set the file filter to all files, and select `Heronite-x86_64.AppImage`.
4. Add it, then find **Heronite** in your library, right-click it and open **Properties**.
5. In **Launch Options**, type:

```
--console
```

`--console` opens Heronite in console mode, the controller-first layout. Add `--fullscreen` too for a fullscreen window. Steam's menu names can change between updates, but the idea stays the same. See [Command line and links](/docs/command-line-and-links/) for all the options.

## Use console mode from Gaming Mode

Double-click the **Return to Gaming Mode** icon on the desktop. Heronite is in your library under non-Steam games. Start it to land on the console home screen, with a **Continue playing** shelf of your recent games. The **Library** tab holds every game.

![Heronite console mode library: a grid of game covers with Show, Sort, Status and Search filters on top and Details, Install and Search hints along the bottom.](../../../assets/screenshots/console-library.webp)

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

Button pictures follow the controller, and Heronite knows the Steam Deck's. If the buttons do not react, check the controller layout Steam uses for the Heronite entry. The full list is in [Console mode](/docs/console-mode/).

## Install and play a game

1. Open the **Library** tab with R1.
2. Choose a game and press X to install it.
3. Press A on an installed game to open its page, then choose **Play**.

To keep one game as its own entry in Steam, use **Add to Steam** in the game's actions. To open console mode without the launch option, turn on the startup or controller options in **Settings → Console mode**.

## Limits on Steam Deck

- Not every Windows game runs well through Proton. The game's details show its ProtonDB rating and anti-cheat status.
- Some games need a lower FPS limit for the Deck's battery and screen. Set it per game in **Game settings**.
- The in-game overlay (beta) needs a Wayland session with layer-shell support. Read [Console mode](/docs/console-mode/) before you rely on it.

## Heronite won't start or update on Steam Deck

- **Heronite does not start.** Make sure the file is executable. Run it from a terminal to see any message.
- **The AppImage does not update.** It replaces itself, so its folder must be writable. Move it to `~/Applications` or another folder in your home.

For login and game problems, see [Troubleshooting](/docs/troubleshooting/). A game may need another Proton build: see the [GE-Proton guide](/guides/install-ge-proton/).
