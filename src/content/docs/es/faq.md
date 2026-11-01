---
title: "Preguntas frecuentes sobre Heronite"
navLabel: "FAQ"
description: "Respuestas sobre Heronite: precio, Steam Deck, anticheat, en qué se diferencia de Heroic, Lutris y Playnite, seguridad de tus inicios de sesión y uso portable."
section: Start
order: 3
updated: 2026-11-01
---

## ¿Heronite es gratis?

Sí. Es gratis y de código abierto bajo la [licencia GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE). No hay cuentas, anuncios ni telemetría.

## ¿En qué sistemas funciona?

En Linux (cualquier distribución, x86_64) y en Windows 10 y 11 (x86_64). Consulta [Instalación](/es/docs/installation/).

## ¿Funciona en la Steam Deck?

Heronite funciona en Linux como AppImage, que es la forma habitual de instalar aplicaciones en el modo escritorio de SteamOS, y el [Modo consola](/es/docs/console-mode/) está pensado para mandos. Para usarlo desde el Modo juego, añade el AppImage a Steam como juego que no es de Steam, con la opción `--console`.

## ¿En qué se diferencia de Heroic, Lutris o Playnite?

- **Todo en un solo sitio:** Steam, Epic, GOG, Amazon, los clientes de las tiendas, emuladores y tus propios juegos, en Linux y Windows.
- **Ligero:** una aplicación nativa en Rust dibujada en la GPU, sin motor de navegador incluido. Unos 190 MB de memoria en reposo y la biblioteca en pantalla en unos 0,2 s.
- **Tu historial de juego:** cada sesión registrada, estadísticas, un diario, una meta de backlog y un resumen del año.
- **Modo consola** con temas que puedes cambiar y compartir.

En Linux puede importar tus juegos de Heroic, Lutris, Bottles y Faugus, así que puedes probarlo sin perder nada.

## ¿Perderé mi configuración de Heroic?

No. En el primer inicio, Heronite copia una sola vez los datos de Heroic y solo los lee. Heroic sigue funcionando como siempre.

## ¿Funcionan los juegos con anticheat?

En Windows, sí, como con cualquier launcher. En Linux depende del juego: el estado del anticheat de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) aparece en los detalles del juego.

## ¿Es seguro iniciar sesión en mis tiendas?

Heronite usa las mismas herramientas de código abierto que Heroic (legendary, gogdl, nile). Tus inicios de sesión se quedan en tu PC y solo se envían a las tiendas. Escribes tu contraseña en la propia página de inicio de sesión de la tienda.

## ¿Por qué Windows muestra un aviso de SmartScreen?

Los archivos de Windows todavía no están firmados con un certificado de código. Aun así, cada versión está firmada con minisign, y Heronite comprueba esa firma antes de instalar una actualización.

## ¿Puedo llevarlo todo en una unidad USB?

Sí, con la copia portable de Windows. Consulta [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿En qué idiomas está?

Inglés, portugués (Brasil), español y alemán. Ayuda a traducirlo: consulta [Traducir Heronite](/es/docs/translating/).

## ¿Dónde pido ayuda o sugiero una función?

- Preguntas e ideas: [Discusiones](https://github.com/RafaelGoulartB/Heronite/discussions)
- Errores y peticiones de funciones: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de seguridad: en privado, desde la [pestaña Security](https://github.com/RafaelGoulartB/Heronite/security)
