---
title: "Traduire Heronite : corriger ou ajouter une langue"
navLabel: "Traduction"
description: "Traduisez Heronite : fichiers JSON de langue, correction d’une traduction, vérification du travail et ajout d’une langue avec une pull request."
section: Contribute
order: 1
updated: 2026-11-04
---

L’application Heronite est disponible en anglais, portugais (Brésil), espagnol et allemand. Corrections et nouvelles langues sont bienvenues : vous modifiez des fichiers JSON. La version française de ce site ne traduit pas l’application elle-même.

## Comment fonctionnent les fichiers de langue ?

Le texte anglais du code sert de clé. Chaque langue a son dossier de fichiers JSON, un par partie de l’application :

```
crates/i18n/locales/
├── pt-BR/
│   ├── common.json
│   ├── settings_panel.json
│   └── …
├── es/
└── de/
```

Chaque fichier est un objet plat associant texte anglais et traduction :

```json
{
  "Add a game": "Adicionar um jogo",
  "verb|Play": "Jogar",
  "{n} games": "{n} jogos"
}
```

- Un préfixe `context|` distingue différents usages du même mot anglais, comme le verbe « Play ». Ne traduisez que la partie après `|`.
- Les paramètres comme `{n}` doivent rester identiques.
- Le singulier et le pluriel ont chacun leur clé.

## Corriger une traduction

1. Retrouvez le texte anglais dans les JSON de votre langue et modifiez sa traduction.
2. Lancez la vérification des clés manquantes, supplémentaires et des paramètres différents :

   ```bash
   HERONITE_I18N_MISSING=1 cargo test -p heronite-i18n --test coverage -- --nocapture
   ```

3. Pour tester dans l’application, [compilez Heronite](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md) et choisissez la langue dans **Settings → General → Language**.
4. Ouvrez une pull request.

## Ajouter une langue

Copiez un dossier vers un nouveau dossier nommé d’après le code de langue, comme `fr` ou `it`, et traduisez ses fichiers. Quelques lignes sont aussi nécessaires dans `crates/i18n/src/lib.rs` pour son nom et son code. Si vous ne maîtrisez pas Rust, ouvrez la pull request avec la traduction et demandez de l’aide.
