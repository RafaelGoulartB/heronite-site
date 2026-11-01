---
title: "Translate Heronite"
navLabel: "Translating"
description: "Help translate Heronite: how the language files work, how to fix a translation, and how to add a new language."
section: Contribute
order: 1
updated: 2026-11-01
---

Heronite speaks English, Portuguese (Brazil), Spanish, and German. Fixes to these and new languages are welcome.

## How translations work

The English text in the code is the key. Each language has a folder with JSON files, one per part of the app:

```
crates/i18n/locales/
├── pt-BR/
│   ├── common.json
│   ├── settings_panel.json
│   └── …
├── es/
└── de/
```

Each file is a flat object from the English text to the translation:

```json
{
  "Add a game": "Adicionar um jogo",
  "verb|Play": "Jogar",
  "{n} games": "{n} jogos"
}
```

- A `context|` in front of a key tells apart the same English word used in different ways (like "Play" the verb). Only translate the part after `|`.
- Placeholders like `{n}` must stay the same in the translation.
- Plurals have a separate key for the singular and the plural.

## Fixing a translation

Edit the JSON file and open a pull request. No code is needed.

## Checking your work

```bash
HERONITE_I18N_MISSING=1 cargo test -p heronite-i18n --test coverage -- --nocapture
```

This lists missing and extra keys, and placeholders that do not match.

To see your language in the app, choose it in **Settings → General → Language**.

## Adding a new language

Copy one of the folders to a new one named after the language code (like `fr` or `it`) and translate its files. A new language also needs a few lines of code in `crates/i18n/src/lib.rs` (its name and code). If you are not comfortable with Rust, open the pull request with the translation and ask for help there.

See [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md) for building Heronite.
