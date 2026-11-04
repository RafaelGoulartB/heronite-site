---
title: "Traducir Heronite: corrige o añade un idioma"
navLabel: "Traducir"
description: "Traduce Heronite: cómo funcionan los archivos de idioma JSON, cómo corregir una traducción, comprobar tu trabajo y añadir un idioma con un pull request."
section: Contribute
order: 1
updated: 2026-11-04
---

Heronite está disponible en inglés, portugués (Brasil), español y alemán. Se agradecen las correcciones y los idiomas nuevos: solo editas archivos JSON.

## ¿Cómo funcionan los archivos de idioma?

El texto en inglés del código es la clave. Cada idioma tiene una carpeta con archivos JSON, uno por cada parte de la app:

```
crates/i18n/locales/
├── pt-BR/
│   ├── common.json
│   ├── settings_panel.json
│   └── …
├── es/
└── de/
```

Cada archivo es un objeto plano que va del texto en inglés a la traducción:

```json
{
  "Add a game": "Adicionar um jogo",
  "verb|Play": "Jogar",
  "{n} games": "{n} jogos"
}
```

- Un `context|` delante de una clave distingue la misma palabra en inglés usada de formas distintas (como "Play" el verbo). Traduce solo la parte posterior a `|`.
- Los marcadores como `{n}` deben quedarse igual en la traducción.
- Los plurales tienen una clave distinta para el singular y para el plural.

## Corrige una traducción

Edita el archivo JSON y abre un pull request. No hace falta saber programar.

## Comprueba tu traducción

```bash
HERONITE_I18N_MISSING=1 cargo test -p heronite-i18n --test coverage -- --nocapture
```

Esto muestra las claves que faltan o sobran y los marcadores que no coinciden.

Para ver tu idioma en la app, elígelo en **Ajustes → General → Idioma**.

## Añade un idioma nuevo

Copia una de las carpetas a una nueva con el código del idioma (como `fr` o `it`) y traduce sus archivos. Un idioma nuevo también necesita unas pocas líneas de código en `crates/i18n/src/lib.rs` (su nombre y su código). Si no te sientes cómodo con Rust, abre el pull request con la traducción y pide ayuda ahí.

Consulta [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md) para compilar Heronite.
