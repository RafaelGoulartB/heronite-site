---
title: "Format des thèmes console (.heronite-theme.json)"
navLabel: "Format des thèmes console"
description: "Le format .heronite-theme.json des thèmes du mode console : règles, exemple complet et tous les champs modifiables à la main dans le fichier."
section: Reference
order: 5
updated: 2026-11-04
---

Un thème console tient dans un fichier JSON `<id>.heronite-theme.json`. Créez-le dans **Settings → Console mode**, puis **Export…**. Publiez-le dans les [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions) pour que d’autres l’importent.

## Règles du fichier

- Les clés sont en camelCase.
- **Tous les champs sont facultatifs.** Un champ absent prend la valeur du thème Classic.
- Une valeur inconnue revient à la valeur par défaut ; les clés inconnues sont conservées pour ouvrir les thèmes créés avec une version plus récente.
- `format` est la version du format, actuellement `1`. Une valeur supérieure est refusée à l’import.
- L’arrière-plan est intégré (PNG, JPEG ou WebP, 16 Mio maximum) : un seul fichier à partager.

## Exemple de fichier de thème

```json
{
  "format": 1,
  "id": "mon-canape",
  "name": "Mon canapé",
  "author": "vous",
  "description": "Tuiles larges, sélection verte",
  "version": "1.0",
  "tabs": [
    { "name": "Accueil", "layout": "xbox", "source": "all" },
    { "name": "Installés", "layout": "grid", "source": "installed" },
    { "name": "Rétro", "layout": "wheel", "source": "emulated" }
  ],
  "tiles": { "shape": "landscape", "size": "l", "corners": "soft", "badges": "all" },
  "background": { "source": "art", "dim": 40, "blur": 10 },
  "interface": { "accent": "green", "font": "system", "scale": 110, "clock": "24h" },
  "controls": { "glyphs": "auto", "swapAb": false },
  "gamePage": "hero",
  "menu": { "style": "sidebar", "side": "left" }
}
```

## Champs modifiables

### Informations sur le thème

| Champ | Valeur |
|---|---|
| `format` | `1` |
| `id` | Lettres minuscules, chiffres et `-` |
| `name`, `author`, `description`, `version` | Texte |

### `tabs`

Jusqu’à quatre onglets, changés avec LB / RB. Chacun contient `{ "name", "layout", "source" }`.

- **`layout` :** `shelves`, `spotlight`, `cinema`, `dashboard`, `grid`, `wheel`, `carousel` ou `xbox` (disposition Series X).
- **`source`** (jeux affichés) :
  - `all`, `installed`, `not-installed`, `favourites`, `pc`, `emulated`
  - `status:<id>`, `category:<name>`, `store:<name>`, `platform:<name>`

### `shelves`

Les rangées de la disposition Shelves. Chacune contient `{ "kind", "on", "title" }`.

- **`kind` :**
  - `recent`, `favourites`, `installed`, `added`, `backlog-short`, `random`, `forgotten`, `statuses`
  - Groupe : `status:<id>`, `store:<name>`, `platform:<name>`, `genre:<name>`, `category:<name>`
- **`on` :** `true` ou `false`

`shelfLimit` fixe le nombre de jeux par rangée.

### `nav`

| Champ | Valeurs |
|---|---|
| `startOn` | `first`, `last` |
| `aButton` | `details` (ouvrir la page du jeu), `play` |
| `wrap` | `true`, `false` |

### `hero` (le grand jeu en haut)

| Champ | Valeurs |
|---|---|
| `title` | `text`, `logo` |
| `size` | `small`, `medium`, `large` |
| `factStyle` | `line`, `chips` |
| `align` | `left`, `center` |
| `facts`, `overview`, `stats` | Éléments à afficher |

### `tiles`

| Champ | Valeurs |
|---|---|
| `shape` | `portrait`, `landscape`, `square` |
| `size` | `s`, `m`, `l`, `xl` |
| `titles` | `never`, `focused`, `always`, `bar` |
| `badges` | `off`, `running`, `all` |
| `corners` | `square`, `soft`, `round` |
| `focus` | `ring`, `glow`, `lift`, `underline` |
| `greyUninstalled`, `header` | `true`, `false` |

### `background`

| Champ | Valeurs |
|---|---|
| `source` | `art`, `cover` (floutée), `screenshots`, `game-colour`, `solid`, `image` |
| `dim` | `0` à `90` |
| `blur` | `0` à `40` |
| `motion` | `still`, `drift` |
| `image` | Image en URL `data:` (écrite par Export) |

### `interface`

| Champ | Valeurs |
|---|---|
| `accent` | `white`, `game` (couleur de la jaquette), `ice`, `green`, `amber`, `pink`, `violet` ou `#rrggbb` |
| `font` | `heronite`, `cabin`, `rubik`, `system`, `mono` |
| `scale` | `80` à `140` (pourcentage) |
| `clock` | `24h`, `12h`, `off` |
| `motion` | `full`, `reduced`, `off` |
| `headings` | `normal`, `spaced` |
| `tabBar` | `top`, `bottom`, `title`, `names` |
| `date`, `label`, `statusIcons` | Éléments à afficher |

### `colors`

`background`, `panel`, `text`, `muted`, `focusText` et `on`, au format `#rrggbb`.

### `controls`

| Champ | Valeurs |
|---|---|
| `glyphs` | `auto`, `xbox`, `playstation`, `nintendo`, `deck`, `keyboard` |
| `hints` | `always`, `auto`, `off` |
| `swapAb` | `true` pour inverser A et B |
| `sounds` | Sons de l’interface |

### `gamePage`

`classic`, `hero`, `tabs` ou `sheet`.

### `menu`

| Champ | Valeurs |
|---|---|
| `style` | `sidebar`, `grid`, `dock`, `rail` |
| `side` | `left`, `right` |
| `items` | Liste de `{ "item", "on" }` : entrées du menu, dans l’ordre |

### `layouts`

Options propres aux dispositions :

- `gridPanel` : `title` ou `right`
- `wheelItems` : `name` ou `logo`
- `spotlightActions` : `full` ou `play`
- `jumpLetters`, `spotlightCards`, `carouselReflect`, `xboxGroups`
- `dashboard` : `week`, `downloads`, `random`, `journal`, `shortcuts`

## Ce qu’un thème n’inclut pas

Le fichier n’inclut pas le comportement à la connexion d’une manette, au démarrage d’Heronite ou au repos. Ce sont des réglages du PC, pas du thème.
