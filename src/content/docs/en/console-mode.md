---
title: "Console mode: use Heronite with a controller on a TV"
description: "Heronite console mode: turn it on, controller and keyboard buttons, layouts and themes, sharing themes and the in-game overlay on Linux."
section: Guides
order: 4
updated: 2026-11-04
---

Console mode is a controller-first layout for the couch or a TV, with an on-screen keyboard and a Power menu.

## Turn on console mode

- Use the command palette (<kbd>Ctrl</kbd> <kbd>K</kbd>) or the ☰ menu.
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

- up to four tabs, each with its own layout (Shelves, Spotlight, Cinema, Dashboard, Grid, Wheel, Carousel, Series X) and its own games (all, installed, favourites, a status, a store, a platform, …),
- covers, background, colours, fonts, and button glyphs,
- the menu and the game pages.

Seven themes come built in: Minimal, Classic, Cinema, Pulse, Arcade, Hub, and Living room.

### Share a theme

Export a theme to a `.heronite-theme.json` file and import it on any PC. The background picture goes inside the file. Share yours in [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions).

To edit the file by hand, see [Console theme format](/docs/console-theme-format/).

## Open the in-game overlay (beta, Linux)

With the overlay turned on, the controller's Guide button opens a panel over the game with volume, microphone, FPS limit, screenshots, and journal notes.

| Buttons | Action |
|---|---|
| Guide | Open or close the panel (<kbd>Super</kbd> <kbd>G</kbd> on the keyboard) |
| Guide + RB | Screenshot (the button can be changed) |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Mark a moment |
| Guide + X | Save the replay |

If the overlay does not work or Steam takes the Guide button, see [Troubleshooting](/docs/troubleshooting/#the-in-game-overlay-does-not-work-linux). It needs a Wayland session whose compositor supports layer-shell, so it does not work on GNOME or X11.

**Replay** (off by default) keeps the last seconds of play, recorded on the GPU by [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).
