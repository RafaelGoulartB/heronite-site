---
title: "Console mode theme file format (.heronite-theme.json)"
navLabel: "Console theme format"
description: "The .heronite-theme.json file format for console mode themes: the rules, a full example, and every field you can set by hand in the file."
section: Reference
order: 5
updated: 2026-11-04
---

A console mode theme is one JSON file, `<id>.heronite-theme.json`. The easiest way to make one is in **Settings → Console mode**, then **Export…**. Post yours in [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions) so others can import it.

## File rules

- Keys are camelCase.
- **Every field is optional.** A missing field takes the value of the Classic theme.
- An unknown value falls back to that field's default, and unknown keys are kept, so a theme made by a newer Heronite still opens.
- `format` is the version of the file format, currently `1`. A theme with a higher `format` is refused on import.
- The background picture is embedded in the file (PNG, JPEG, or WebP, at most 16 MiB), so one file is all you share.

## Example theme file

```json
{
  "format": 1,
  "id": "my-couch",
  "name": "My couch",
  "author": "you",
  "description": "Wide tiles, green focus",
  "version": "1.0",
  "tabs": [
    { "name": "Home", "layout": "xbox", "source": "all" },
    { "name": "Installed", "layout": "grid", "source": "installed" },
    { "name": "Retro", "layout": "wheel", "source": "emulated" }
  ],
  "tiles": { "shape": "landscape", "size": "l", "corners": "soft", "badges": "all" },
  "background": { "source": "art", "dim": 40, "blur": 10 },
  "interface": { "accent": "green", "font": "system", "scale": 110, "clock": "24h" },
  "controls": { "glyphs": "auto", "swapAb": false },
  "gamePage": "hero",
  "menu": { "style": "sidebar", "side": "left" }
}
```

## Fields you can set

### About the theme

| Field | Value |
|---|---|
| `format` | `1` |
| `id` | Lowercase letters, digits, and `-` |
| `name`, `author`, `description`, `version` | Text |

### `tabs`

Up to four tabs, switched with LB / RB. Each one is `{ "name", "layout", "source" }`.

- **`layout`:** `shelves`, `spotlight`, `cinema`, `dashboard`, `grid`, `wheel`, `carousel`, or `xbox` (the Series X layout).
- **`source`** (which games the tab shows):
  - `all`, `installed`, `not-installed`, `favourites`, `pc`, `emulated`
  - `status:<id>`, `category:<name>`, `store:<name>`, `platform:<name>`

### `shelves`

The rows of the Shelves layout. Each one is `{ "kind", "on", "title" }`.

- **`kind`:**
  - `recent`, `favourites`, `installed`, `added`, `backlog-short`, `random`, `forgotten`, `statuses`
  - A group: `status:<id>`, `store:<name>`, `platform:<name>`, `genre:<name>`, `category:<name>`
- **`on`:** `true` or `false`

`shelfLimit` sets how many games a shelf shows.

### `nav`

| Field | Values |
|---|---|
| `startOn` | `first`, `last` |
| `aButton` | `details` (open the game page), `play` |
| `wrap` | `true`, `false` |

### `hero` (the big game at the top)

| Field | Values |
|---|---|
| `title` | `text`, `logo` |
| `size` | `small`, `medium`, `large` |
| `factStyle` | `line`, `chips` |
| `align` | `left`, `center` |
| `facts`, `overview`, `stats` | What to show |

### `tiles`

| Field | Values |
|---|---|
| `shape` | `portrait`, `landscape`, `square` |
| `size` | `s`, `m`, `l`, `xl` |
| `titles` | `never`, `focused`, `always`, `bar` |
| `badges` | `off`, `running`, `all` |
| `corners` | `square`, `soft`, `round` |
| `focus` | `ring`, `glow`, `lift`, `underline` |
| `greyUninstalled`, `header` | `true`, `false` |

### `background`

| Field | Values |
|---|---|
| `source` | `art`, `cover` (blurred), `screenshots`, `game-colour`, `solid`, `image` |
| `dim` | `0` to `90` |
| `blur` | `0` to `40` |
| `motion` | `still`, `drift` |
| `image` | The picture, as a `data:` URL (written by Export) |

### `interface`

| Field | Values |
|---|---|
| `accent` | `white`, `game` (the cover's colour), `ice`, `green`, `amber`, `pink`, `violet`, or `#rrggbb` |
| `font` | `heronite`, `cabin`, `rubik`, `system`, `mono` |
| `scale` | `80` to `140` (percent) |
| `clock` | `24h`, `12h`, `off` |
| `motion` | `full`, `reduced`, `off` |
| `headings` | `normal`, `spaced` |
| `tabBar` | `top`, `bottom`, `title`, `names` |
| `date`, `label`, `statusIcons` | What to show |

### `colors`

`background`, `panel`, `text`, `muted`, `focusText`, and `on`, as `#rrggbb`.

### `controls`

| Field | Values |
|---|---|
| `glyphs` | `auto`, `xbox`, `playstation`, `nintendo`, `deck`, `keyboard` |
| `hints` | `always`, `auto`, `off` |
| `swapAb` | `true` to swap A and B |
| `sounds` | Interface sounds |

### `gamePage`

`classic`, `hero`, `tabs`, or `sheet`.

### `menu`

| Field | Values |
|---|---|
| `style` | `sidebar`, `grid`, `dock`, `rail` |
| `side` | `left`, `right` |
| `items` | A list of `{ "item", "on" }`: which entries the menu has, in order |

### `layouts`

Options of single layouts:

- `gridPanel`: `title` or `right`
- `wheelItems`: `name` or `logo`
- `spotlightActions`: `full` or `play`
- `jumpLetters`, `spotlightCards`, `carouselReflect`, `xboxGroups`
- `dashboard`: `week`, `downloads`, `random`, `journal`, `shortcuts`

## What a theme does not include

The file leaves out what happens when a controller connects, how Heronite opens, and what it does when idle. These are settings of your PC, not of the theme.
