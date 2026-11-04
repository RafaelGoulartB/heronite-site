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

Sí. Heronite funciona como AppImage en el modo escritorio de SteamOS. Para el Modo juego, añade el AppImage a Steam como juego que no es de Steam, con la opción `--console`. El [modo consola](/es/docs/console-mode/) está pensado para mandos; consulta la [guía de la Steam Deck](/es/guides/steam-deck/).

## ¿En qué se diferencia de Heroic, Lutris o Playnite?

- **Todo en un solo sitio:** Steam, Epic, GOG, Amazon, las apps de las tiendas, emuladores y tus propios juegos.
- **Ligero:** una app nativa en Rust renderizada en la GPU, sin motor de navegador incluido. Usa unos 190 MB de memoria en reposo y muestra la biblioteca en unos 215 ms.
- **Tu historial de juego:** cada sesión, estadísticas, un diario, una meta de backlog y un resumen del año.
- **Modo consola** con temas que puedes cambiar y compartir.

Puede importar tus juegos de Heroic, Lutris, Bottles y Faugus en Linux, y de Playnite en Windows. Consulta [Heronite vs Heroic](/es/compare/heroic/), [vs Lutris](/es/compare/lutris/) y [vs Playnite](/es/compare/playnite/).

## ¿Puedo usar la misma biblioteca en dos PC?

Sí. **Ajustes → Nube** mantiene iguales en cada PC tus estados, favoritos, notas, tiempo de juego y sesiones, por ejemplo entre Linux y Windows en un arranque dual. Sincroniza con una carpeta compartida o una cuenta en la nube; consulta [Copias de seguridad](/es/docs/backups-and-saves/).

## ¿Perderé mi configuración de Heroic?

No. Heronite nunca cambia los archivos de Heroic. En el primer inicio copia una sola vez los inicios de sesión, los ajustes y los juegos añadidos a mano de Heroic, y Heroic sigue funcionando.

## ¿Funcionan los juegos con anticheat?

En Windows, sí, como con cualquier launcher. En Linux depende del juego. Heronite muestra en los detalles de cada juego su estado en [Are We Anti-Cheat Yet?](https://areweanticheatyet.com); consulta [Anticheat](/es/docs/wine-and-proton/#anticheat).

## ¿Es seguro iniciar sesión en mis tiendas?

Sí. Heronite usa las mismas herramientas de código abierto que Heroic: legendary para Epic, gogdl para GOG y nile para Amazon. Tus inicios de sesión se quedan en tu PC y solo van a las tiendas, y escribes tu contraseña en la propia página de inicio de sesión de la tienda.

## ¿Por qué Windows muestra un aviso de SmartScreen?

Los archivos de Windows aún no tienen firma de código. Elige **Más información** y luego **Ejecutar de todas formas**. Cada versión sigue firmada con minisign, y Heronite comprueba esa firma antes de instalar una actualización.

## ¿Puedo llevarlo todo en una memoria USB?

Sí, con la copia portable de Windows. Consulta [Archivos y carpetas](/es/docs/files-and-folders/#la-copia-portable-windows).

## ¿En qué idiomas está Heronite?

Inglés, portugués (Brasil), español y alemán. Para ayudar a traducir, consulta [Traducir Heronite](/es/docs/translating/).

## ¿Dónde pido ayuda o sugiero una función?

- Preguntas e ideas: [Discusiones](https://github.com/RafaelGoulartB/Heronite/discussions)
- Errores y peticiones de funciones: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de seguridad: en privado, desde la [pestaña Security](https://github.com/RafaelGoulartB/Heronite/security)
