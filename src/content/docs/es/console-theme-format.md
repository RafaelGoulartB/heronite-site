---
title: "Formato de temas del modo consola (.heronite-theme.json)"
navLabel: "Formato de temas"
description: "El formato del archivo .heronite-theme.json para temas del modo consola: las reglas, un ejemplo completo y todos los campos que puedes editar a mano."
section: Reference
order: 5
updated: 2026-11-04
---

Un tema del modo consola es un único archivo JSON, `<id>.heronite-theme.json`. La forma más fácil de crear uno es hacerlo en Heronite (**Ajustes → Modo consola**) y luego usar **Exportar**. Esta página es para leer o editar el archivo a mano.

## Reglas del archivo

- Las claves van en camelCase.
- **Todos los campos son opcionales.** Un campo que falta toma el valor del tema Clásico.
- Un valor desconocido vuelve al valor por defecto de ese campo, y las claves desconocidas se conservan, así que un tema creado con un Heronite más nuevo se abre igualmente.
- `format` es la versión del formato del archivo, actualmente `1`. Heronite rechaza al importar un tema con un `format` mayor.
- La imagen de fondo va incrustada en el archivo (PNG, JPEG o WebP, de hasta 16 MiB), así que basta con un solo archivo para compartirlo.

## Ejemplo de archivo de tema

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

## Campos que puedes definir

### Sobre el tema

| Campo | Valor |
|---|---|
| `format` | `1` |
| `id` | Letras minúsculas, dígitos y `-` |
| `name`, `author`, `description`, `version` | Texto |

### `tabs`

Hasta cuatro pestañas, que se cambian con LB / RB. Cada una es `{ "name", "layout", "source" }`.

- **`layout`:** `shelves`, `spotlight`, `cinema`, `dashboard`, `grid`, `wheel`, `carousel` o `xbox` (el diseño Series X).
- **`source`** (qué juegos muestra la pestaña):
  - `all`, `installed`, `not-installed`, `favourites`, `pc`, `emulated`,
  - `status:<id>`, `category:<name>`, `store:<name>`, `platform:<name>`.

### `shelves`

Las filas del diseño Estanterías. Cada una es `{ "kind", "on", "title" }`.

- **`kind`:**
  - `recent`, `favourites`, `installed`, `added`, `backlog-short`, `random`, `forgotten`, `statuses`,
  - o un grupo: `status:<id>`, `store:<name>`, `platform:<name>`, `genre:<name>`, `category:<name>`.
- **`on`:** `true` o `false`.

`shelfLimit` define cuántos juegos muestra cada estante.

### `nav`

| Campo | Valores |
|---|---|
| `startOn` | `first`, `last` |
| `aButton` | `details` (abre la página del juego), `play` |
| `wrap` | `true`, `false` |

### `hero` (el juego grande de la parte superior)

| Campo | Valores |
|---|---|
| `title` | `text`, `logo` |
| `size` | `small`, `medium`, `large` |
| `factStyle` | `line`, `chips` |
| `align` | `left`, `center` |
| `facts`, `overview`, `stats` | Qué mostrar |

### `tiles`

| Campo | Valores |
|---|---|
| `shape` | `portrait`, `landscape`, `square` |
| `size` | `s`, `m`, `l`, `xl` |
| `titles` | `never`, `focused`, `always`, `bar` |
| `badges` | `off`, `running`, `all` |
| `corners` | `square`, `soft`, `round` |
| `focus` | `ring`, `glow`, `lift`, `underline` |
| `greyUninstalled`, `header` | `true`, `false` |

### `background`

| Campo | Valores |
|---|---|
| `source` | `art`, `cover` (desenfocada), `screenshots`, `game-colour`, `solid`, `image` |
| `dim` | `0` a `90` |
| `blur` | `0` a `40` |
| `motion` | `still`, `drift` |
| `image` | La imagen, como URL `data:` (la escribe Exportar) |

### `interface`

| Campo | Valores |
|---|---|
| `accent` | `white`, `game` (el color de la portada), `ice`, `green`, `amber`, `pink`, `violet` o `#rrggbb` |
| `font` | `heronite`, `cabin`, `rubik`, `system`, `mono` |
| `scale` | `80` a `140` (porcentaje) |
| `clock` | `24h`, `12h`, `off` |
| `motion` | `full`, `reduced`, `off` |
| `headings` | `normal`, `spaced` |
| `tabBar` | `top`, `bottom`, `title`, `names` |
| `date`, `label`, `statusIcons` | Qué mostrar |

### `colors`

`background`, `panel`, `text`, `muted`, `focusText` y `on`, como `#rrggbb`.

### `controls`

| Campo | Valores |
|---|---|
| `glyphs` | `auto`, `xbox`, `playstation`, `nintendo`, `deck`, `keyboard` |
| `hints` | `always`, `auto`, `off` |
| `swapAb` | `true` para intercambiar A y B |
| `sounds` | Sonidos de la interfaz |

### `gamePage`

`classic`, `hero`, `tabs` o `sheet`.

### `menu`

| Campo | Valores |
|---|---|
| `style` | `sidebar`, `grid`, `dock`, `rail` |
| `side` | `left`, `right` |
| `items` | Una lista de `{ "item", "on" }`: qué entradas tiene el menú, en orden |

### `layouts`

Opciones de cada diseño:

- `gridPanel`: `title` o `right`,
- `wheelItems`: `name` o `logo`,
- `spotlightActions`: `full` o `play`,
- también `jumpLetters`, `spotlightCards`, `carouselReflect`, `xboxGroups` y `dashboard` (`week`, `downloads`, `random`, `journal`, `shortcuts`).

## Lo que un tema no incluye

Lo que ocurre cuando se conecta un mando, cómo se abre Heronite y qué hace cuando está inactivo son ajustes de tu PC, no del tema, así que no están en el archivo.

## Comparte tu tema

Publica tu tema en [Discusiones](https://github.com/RafaelGoulartB/Heronite/discussions) para que otros puedan importarlo.
