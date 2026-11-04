---
title: "Console mode: use Heronite with a controller on a TV"
navLabel: "Console mode"
description: "Heronite console mode: turn it on, controller and keyboard buttons, layouts and themes, sharing themes and the in-game overlay on Linux."
section: Guides
order: 4
updated: 2026-11-04
---

Console mode is a controller-first layout for the couch or a TV, with an on-screen keyboard and a Power menu.

## Turn on console mode

Open it in any of these ways:

- Choose **Console mode** in the command palette (<kbd>Ctrl</kbd> <kbd>K</kbd>) or the ☰ menu.
- Start Heronite with `--console` (for example in a Steam shortcut or a gaming session).
- In **Settings → Console mode**, make it open at startup or when a controller connects (off, ask, or on).

Console mode loads nothing while it is off. On the Steam Deck, see the [Steam Deck guide](/guides/steam-deck/).

## Controller buttons

| Button | Action |
|---|---|
| A (south) | Confirm |
| B (east) | Back |
| X, Y | Actions shown on screen |
| LB / RB | Switch tabs |
| D-pad, left stick | Move |
| Right stick | Scroll |
| Start or Guide | Menu |

Swap A and B in the theme's controls if you prefer the Nintendo layout. Button pictures follow the controller (Xbox, PlayStation, Nintendo, Steam Deck) or can be set by hand.

## Keyboard

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

## Change layouts and themes

Change every part of console mode, live from the couch or in **Settings → Console mode**:

- Up to four tabs, each with its own layout (Shelves, Spotlight, Cinema, Dashboard, Grid, Wheel, Carousel, Series X) and its own games (all, installed, not installed, favourites, PC, emulated, or one status, category, store or platform)
- Covers, background, colours, fonts, and button glyphs
- The menu and the game pages

Seven themes come built in: Minimal, Classic, Cinema, Pulse, Arcade, Hub, and Living room.

### Share a theme

In **Settings → Console mode**, choose **Export…** to save a theme as a `.heronite-theme.json` file, with its background picture inside. On another PC, choose **Import…**. Share yours in [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions), or edit the file by hand with the [console theme format](/docs/console-theme-format/).

## Open the in-game overlay (beta, Linux)

1. In **Settings → Overlay**, turn on **Turn on the overlay**. It is off by default.
2. During a game opened by Heronite, press the controller's Guide button.

The panel over the game has volume, microphone, FPS limit, screenshots, and journal notes.

| Buttons | Action |
|---|---|
| Guide | Open or close the panel (<kbd>Super</kbd> <kbd>G</kbd> on the keyboard) |
| Guide + RB | Screenshot (the button can be changed) |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Mark a moment |
| Guide + X | Save the replay |

The overlay needs a Wayland session whose compositor supports layer-shell, so it does not work on GNOME or X11. If Steam takes the Guide button, see [Troubleshooting](/docs/troubleshooting/#the-in-game-overlay-does-not-work-linux).

**Replay** keeps the last seconds of play, recorded on the GPU by [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/). It is off by default: turn it on in **Settings → Replay**.
