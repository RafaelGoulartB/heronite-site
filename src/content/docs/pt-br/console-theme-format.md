---
title: "Formato de tema do modo console (.heronite-theme.json)"
description: "O formato do arquivo .heronite-theme.json dos temas do modo console: regras, um exemplo completo e todos os campos que você pode definir à mão."
section: Reference
order: 5
updated: 2026-11-01
---

Um tema do modo console é um único arquivo JSON, `<id>.heronite-theme.json`. O jeito mais fácil de criar um é no próprio Heronite (**Configurações → Modo console**) e depois **Exportar**; esta página serve para ler ou editar o arquivo à mão.

## Regras

- As chaves usam camelCase.
- **Todos os campos são opcionais.** Um campo ausente assume o valor do tema Clássico.
- Um valor desconhecido volta ao padrão daquele campo, e chaves desconhecidas são mantidas, então um tema criado por um Heronite mais novo ainda abre.
- `format` é a versão do formato do arquivo, atualmente `1`. Um tema com `format` maior é recusado na importação.
- A imagem de fundo vai embutida no arquivo (PNG, JPEG ou WebP, no máximo 16 MiB), então um único arquivo é tudo o que você compartilha.

## Exemplo

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

## Campos

### Sobre o tema

| Campo | Valor |
|---|---|
| `format` | `1` |
| `id` | Letras minúsculas, dígitos e `-` |
| `name`, `author`, `description`, `version` | Texto |

### `tabs`

Até quatro abas, trocadas com LB / RB. Cada uma é `{ "name", "layout", "source" }`.

- **`layout`:** `shelves`, `spotlight`, `cinema`, `dashboard`, `grid`, `wheel`, `carousel` ou `xbox` (o layout Series X).
- **`source`** (quais jogos a aba mostra):
  - `all`, `installed`, `not-installed`, `favourites`, `pc`, `emulated`,
  - `status:<id>`, `category:<name>`, `store:<name>`, `platform:<name>`.

### `shelves`

As linhas do layout Prateleiras. Cada uma é `{ "kind", "on", "title" }`.

- **`kind`:**
  - `recent`, `favourites`, `installed`, `added`, `backlog-short`, `random`, `forgotten`, `statuses`,
  - ou um grupo: `status:<id>`, `store:<name>`, `platform:<name>`, `genre:<name>`, `category:<name>`.
- **`on`:** `true` ou `false`.

`shelfLimit` define quantos jogos uma prateleira mostra.

### `nav`

| Campo | Valores |
|---|---|
| `startOn` | `first`, `last` |
| `aButton` | `details` (abre a página do jogo), `play` |
| `wrap` | `true`, `false` |

### `hero` (o jogo grande no topo)

| Campo | Valores |
|---|---|
| `title` | `text`, `logo` |
| `size` | `small`, `medium`, `large` |
| `factStyle` | `line`, `chips` |
| `align` | `left`, `center` |
| `facts`, `overview`, `stats` | O que mostrar |

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
| `source` | `art`, `cover` (desfocada), `screenshots`, `game-colour`, `solid`, `image` |
| `dim` | `0` a `90` |
| `blur` | `0` a `40` |
| `motion` | `still`, `drift` |
| `image` | A imagem, como uma URL `data:` (escrita pela exportação) |

### `interface`

| Campo | Valores |
|---|---|
| `accent` | `white`, `game` (a cor da capa), `ice`, `green`, `amber`, `pink`, `violet` ou `#rrggbb` |
| `font` | `heronite`, `cabin`, `rubik`, `system`, `mono` |
| `scale` | `80` a `140` (porcentagem) |
| `clock` | `24h`, `12h`, `off` |
| `motion` | `full`, `reduced`, `off` |
| `headings` | `normal`, `spaced` |
| `tabBar` | `top`, `bottom`, `title`, `names` |
| `date`, `label`, `statusIcons` | O que mostrar |

### `colors`

`background`, `panel`, `text`, `muted`, `focusText` e `on`, como `#rrggbb`.

### `controls`

| Campo | Valores |
|---|---|
| `glyphs` | `auto`, `xbox`, `playstation`, `nintendo`, `deck`, `keyboard` |
| `hints` | `always`, `auto`, `off` |
| `swapAb` | `true` para trocar A e B |
| `sounds` | Sons da interface |

### `gamePage`

`classic`, `hero`, `tabs` ou `sheet`.

### `menu`

| Campo | Valores |
|---|---|
| `style` | `sidebar`, `grid`, `dock`, `rail` |
| `side` | `left`, `right` |
| `items` | Uma lista de `{ "item", "on" }`: quais entradas o menu tem, em ordem |

### `layouts`

Opções de cada layout:

- `gridPanel`: `title` ou `right`,
- `wheelItems`: `name` ou `logo`,
- `spotlightActions`: `full` ou `play`,
- e também `jumpLetters`, `spotlightCards`, `carouselReflect`, `xboxGroups` e `dashboard` (`week`, `downloads`, `random`, `journal`, `shortcuts`).

## O que não faz parte de um tema

O que acontece quando um controle é conectado, como o Heronite abre e o que ele faz quando está ocioso são configurações do seu PC, não do tema, por isso não estão no arquivo.

## Compartilhe o seu

Publique seu tema nas [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions) para que outras pessoas possam importá-lo.
