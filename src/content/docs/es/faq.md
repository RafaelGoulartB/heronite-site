---
title: "FAQ de Heronite: precio, Steam Deck, anticheat, seguridad"
navLabel: "FAQ"
description: "¿Heronite es gratis? Respuestas breves sobre Steam Deck, anticheat, diferencias con Heroic, Lutris y Playnite, seguridad de tus cuentas y uso portable."
section: Start
order: 3
updated: 2026-11-04
---

Respuestas breves sobre Heronite, un launcher de juegos para Linux y Windows.

## ¿Heronite es gratis?

Sí. Es de código abierto bajo la [licencia GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE), sin cuentas, anuncios ni telemetría.

## ¿En qué sistemas funciona?

En Linux (cualquier distribución, x86_64) y en Windows 10 y 11 (x86_64). Consulta [Instalación](/es/docs/installation/).

## ¿Funciona en la Steam Deck?

Sí. Heronite funciona como AppImage en el modo escritorio de SteamOS. Para el Modo juego, añade el AppImage a Steam como juego que no es de Steam, con la opción `--console`. El [modo consola](/es/docs/console-mode/) está pensado para mandos; consulta la [guía de Steam Deck](/es/guides/steam-deck/).

## ¿En qué se diferencia de Heroic, Lutris o Playnite?

- **Todo en un solo sitio:** Steam, Epic, GOG, Amazon, las apps de las tiendas, emuladores y tus propios juegos.
- **Ligero:** una app nativa en Rust dibujada en la GPU, sin motor de navegador incluido. Usa unos 190 MB de memoria en reposo y muestra la biblioteca en unos 0,2 s.
- **Tu historial de juego:** cada sesión, estadísticas, un diario, una meta de backlog y un resumen del año.
- **Modo consola** con temas que puedes cambiar y compartir.

En Linux puede importar tus juegos de Heroic, Lutris, Bottles y Faugus.

## ¿Perderé mi configuración de Heroic?

No. En el primer inicio, Heronite copia una sola vez los datos de Heroic y solo los lee, así que Heroic sigue funcionando.

## ¿Funcionan los juegos con anticheat?

En Windows, sí, como con cualquier launcher. En Linux depende del juego. Heronite muestra en los detalles de cada juego su estado de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com); consulta [Anticheat](/es/docs/wine-and-proton/#anticheat).

## ¿Es seguro iniciar sesión en mis tiendas?

Sí. Heronite usa las mismas herramientas de código abierto que Heroic (legendary, gogdl, nile). Tus inicios de sesión se quedan en tu PC y solo se envían a las tiendas, y escribes tu contraseña en la propia página de inicio de sesión de la tienda.

## ¿Por qué Windows muestra un aviso de SmartScreen?

Los archivos de Windows todavía no están firmados con un certificado de código. Elige **Más información** y luego **Ejecutar de todas formas**. Cada versión sigue firmada con minisign, y Heronite comprueba esa firma antes de instalar una actualización.

## ¿Puedo llevarlo todo en una unidad USB?

Sí, con la copia portable de Windows. Consulta [Archivos y carpetas](/es/docs/files-and-folders/#la-copia-portable-windows).

## ¿En qué idiomas está Heronite?

Inglés, portugués (Brasil), español y alemán. Para ayudar a traducir, consulta [Traducir Heronite](/es/docs/translating/).

## ¿Dónde pido ayuda o sugiero una función?

- Preguntas e ideas: [Discusiones](https://github.com/RafaelGoulartB/Heronite/discussions)
- Errores y peticiones de funciones: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de seguridad: en privado, desde la [pestaña Security](https://github.com/RafaelGoulartB/Heronite/security)
