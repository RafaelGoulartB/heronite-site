---
title: "Translate Heronite: fix or add a language"
navLabel: "Translating"
description: "Translate Heronite: how the JSON language files work, how to fix a translation, check your work, and add a new language by pull request."
section: Contribute
order: 1
updated: 2026-11-04
---

Heronite speaks English, Portuguese (Brazil), Spanish, and German. Fixes and new languages are welcome: you only edit JSON files.

## How do the language files work?

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

## Fix a translation

1. Find the English text in your language's JSON files and edit the translation.
2. Run the check. It lists missing and extra keys, and placeholders that do not match:

   ```bash
   HERONITE_I18N_MISSING=1 cargo test -p heronite-i18n --test coverage -- --nocapture
   ```

3. To see it in the app, [build Heronite](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md) and choose your language in **Settings → General → Language**.
4. Open a pull request.

## Add a new language

Copy one of the folders to a new one named after the language code (like `fr` or `it`) and translate its files. A new language also needs a few lines of code in `crates/i18n/src/lib.rs` (its name and code). If you are not comfortable with Rust, open the pull request with the translation and ask for help there.
