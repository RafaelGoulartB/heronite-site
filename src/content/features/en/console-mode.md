---
title: "Couch, TV and Steam Deck Game Launcher | Heronite"
description: "A controller-first game launcher for your couch, TV or Steam Deck, with eight layouts, seven themes and an on-screen keyboard. Free on Linux and Windows."
eyebrow: Console mode
headline: "A game launcher for the couch, TV and Steam Deck"
lead: "Play your whole library from the couch, a TV or a Steam Deck with a controller and no mouse."
navLabel: Console mode
summary: "A controller-first mode for the couch or a TV, with eight layouts, seven themes you can change and share, and an in-game overlay."
order: 5
hero: ../../../assets/screenshots/console-carousel.webp
heroAlt: "Heronite's console mode: a carousel of the games in progress with Control in focus between Brotato and Crash Team Racing, its store, play time and status underneath, and tabs for All, Installed, Favourites and Playing."
og: /og/console-mode.jpg
updated: 2026-11-04
highlights:
  - title: Built for a controller
    text: Move with the D-pad or stick, confirm with A, go back with B and switch tabs with LB and RB. No mouse needed.
  - title: Eight layouts, seven themes
    text: Shelves, Spotlight, Cinema, Dashboard, Grid, Wheel, Carousel and Series X, with up to four tabs.
  - title: Share your theme
    text: Export a theme to one `.heronite-theme.json` file and import it on any PC.
  - title: Light when it is off
    text: Nothing of console mode loads until you turn it on.
faq:
  - q: Is Heronite a Steam Big Picture mode alternative?
    a: It does the same job for all your stores. Steam, Epic, GOG, Amazon, emulators and your own games sit in one controller-friendly interface, on Linux and Windows.
  - q: Can I use Heronite on the Steam Deck?
    a: Yes. Install the AppImage in desktop mode, then add it to Steam as a non-Steam game with the `--console` option. The [Steam Deck guide](/guides/steam-deck/) has the steps.
  - q: Does console mode work with a keyboard?
    a: Yes. Arrow keys move, `Enter` confirms, `Esc` goes back and `M` or `F1` opens the menu. See [Console mode](/docs/console-mode/#keyboard).
  - q: Does console mode make Heronite heavier?
    a: No. It is part of the same native Rust app, and nothing of console mode loads while it is off.
related:
  - /guides/steam-deck/
  - /features/game-library/
  - /features/play-time-tracking/
---

Console mode turns Heronite into a couch game launcher with big covers and every action on a controller button. Your whole [Collection](/features/game-library/) is there.

## How do I turn on console mode?

Use any of these:

- The command palette (<kbd>Ctrl</kbd> <kbd>K</kbd>) or the ☰ menu.
- The `--console` option, for example in a Steam shortcut or a gaming session.
- **Settings → Console mode**, to open it at startup or when a controller connects. For each you can choose off, ask or on.

## What do the controller buttons do?

Hints at the bottom of each page follow your controller, with Xbox, PlayStation, Nintendo or Steam Deck button pictures.

| Controller | Action |
|---|---|
| A (south) | Confirm |
| B (east) | Back |
| X, Y | Actions shown on screen |
| LB / RB | Switch tabs |
| D-pad, left stick | Move |
| Right stick | Scroll |
| Start or Guide | Menu |

For the Nintendo layout, swap A and B in the theme's controls. With no gamepad, the keyboard acts as one:

| Key | Acts as |
|---|---|
| Arrows | Move |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | A |
| <kbd>Esc</kbd> or <kbd>Backspace</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>PgUp</kbd> / <kbd>PgDn</kbd> | Scroll |
| <kbd>M</kbd> or <kbd>F1</kbd> | Start (menu) |
| <kbd>Tab</kbd> | Select |

## How do I browse and play from the sofa?

The first tab is usually **Home**: the game you will continue, large over its art, with shelves such as *Continue playing* and *Favourites*. Press A for its page, X to play and Y to search.

![Heronite console mode Library tab showing a grid of game covers with Show, Sort, Status and Search filters at the top and button hints for Details, Install, Search, Home and Menu at the bottom.](../../../assets/screenshots/console-library.webp)

*The Library tab lists the whole Collection as covers, with filters for what to show, how to sort and which status.*

A game's page lists **Play**, **Status**, **Favourite**, **Game settings**, **Playtime** and, with [Ludusavi](/features/saves-and-backups/) installed, **Back up saves**. Details such as score, developer and last played sit to the right.

![Heronite console game page for ELDEN RING with a list of Play, Status, Favourite, Game settings, Playtime and Back up saves (Ludusavi), and a details panel with score, developer, last played and features.](../../../assets/screenshots/console-game.webp)

*A game page in console mode: play, change its status, open its settings or back up its saves, all with the controller.*

## Which layouts and tabs does console mode have?

Console mode has up to **four tabs**, and each tab has its own layout and its own games. The layouts are:

- Shelves
- Spotlight
- Cinema
- Dashboard
- Grid
- Wheel
- Carousel
- Series X

A tab can show all games, installed ones, favourites, one status, one store, one platform and more. Switch tabs with LB and RB.

## How do I change the look of console mode?

Pick one of seven themes (**Minimal**, **Classic**, **Cinema**, **Pulse**, **Arcade**, **Hub**, **Living room**), then change it live or in **Settings → Console mode**:

- covers, tile shape and size,
- background, with the game's art, a blurred cover, screenshots or a picture of your own,
- accent colour, fonts, size of the interface and the clock,
- button pictures,
- the menu (sidebar, grid, dock or rail) and the game pages.

### How do I share a theme?

Export your theme to a `.heronite-theme.json` file and import it on any PC. A background picture goes inside the file. Post yours in [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions). The [theme format](/docs/console-theme-format/) lists every field, and all are optional.

## Can I type without a keyboard?

Yes. Console mode has its own **on-screen keyboard** and a **Power menu**. The Menu button opens the main menu from any page.

## How do I start console mode from Steam Deck Gaming Mode?

Install the AppImage in SteamOS desktop mode, then add it to Steam as a non-Steam game with the `--console` option. The [Steam Deck guide](/guides/steam-deck/) has the steps.

## How do I use the in-game overlay and Replay (beta, Linux)?

With the overlay on, the Guide button opens a panel over the game with volume, microphone, FPS limit, screenshots and journal notes.

| Buttons | Action |
|---|---|
| Guide | Open or close the panel (<kbd>Super</kbd> <kbd>G</kbd> on the keyboard) |
| Guide + RB | Screenshot |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Mark a moment |
| Guide + X | Save the replay |

**Replay** is off by default. When on, it keeps the last seconds of play, recorded on the GPU by [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).

> **Note.** The overlay needs a Wayland session whose compositor supports layer-shell, such as KDE Plasma, Hyprland or Sway. It does not work on GNOME or X11.

Next: every button and setting is in the [Console mode docs](/docs/console-mode/).
