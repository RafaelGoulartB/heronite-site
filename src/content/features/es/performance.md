---
title: "Lanzador de juegos ligero, sin Electron | Heronite"
description: "Lanzador de juegos ligero para Linux y Windows. Abre tu biblioteca en unos 215 ms, usa unos 190 MB en reposo y se instala en 64 MB, sin Electron."
eyebrow: Rendimiento
headline: "Un lanzador de juegos ligero, sin Electron"
lead: "Heronite es un lanzador de juegos ligero: un solo proceso nativo en Rust dibujado en la GPU, sin navegador integrado."
navLabel: Rendimiento
summary: "Rust nativo, dibujado en la GPU y sin Electron: unos 215 ms hasta la biblioteca, 190 MB en reposo y 64 MB de instalación."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "La paleta de comandos de Heronite abierta sobre la Colección, buscando \"contr\" y mostrando Control y otros juegos que coinciden, con acciones para jugar Control, abrir sus ajustes o su carpeta."
og: /og/performance.jpg
updated: 2026-11-04
highlights:
  - title: Unos 215 ms
    text: Tiempo mediano desde el inicio hasta ver tu biblioteca en pantalla.
  - title: Unos 190 MB en reposo
    text: Un solo proceso, y unos 95 MB cuando se cierra a la bandeja.
  - title: Alrededor del 0,1 % de CPU
    text: Medido en reposo como 0,05 s de tiempo de CPU en 60 s.
  - title: 64 MB de instalación
    text: La app y el asistente de inicio de sesión de las tiendas, sin motor de navegador.
faq:
  - q: ¿Cuál es el lanzador de juegos más ligero para Linux y Windows?
    a: Heronite está hecho para ser ligero. Es un único proceso nativo sin navegador integrado, y la instalación ocupa 64 MB.
  - q: ¿Heronite usa Electron?
    a: No. Heronite está escrito en Rust y dibujado en la GPU con GPUI, sin motor de navegador integrado. Mira [qué significa "sin Electron"](#qué-significa-sin-electron-para-mí).
  - q: ¿Qué tan rápido arranca Heronite?
    a: Unos 215 ms desde el inicio hasta ver tu biblioteca en pantalla (mediana).
  - q: ¿Cuánta memoria usa Heronite?
    a: Unos 190 MB en reposo, en un solo proceso, y unos 95 MB cuando se cierra a la bandeja. El uso de CPU en reposo es de alrededor del 0,1 %.
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

## ¿Qué tan rápido y ligero es Heronite?

| Medida | Heronite |
|---|---|
| Del inicio a la biblioteca en pantalla | unos 215 ms (mediana) |
| Memoria en reposo | unos 190 MB en un solo proceso |
| Memoria cerrado a la bandeja | unos 95 MB |
| CPU en reposo | alrededor del 0,1 % (0,05 s de tiempo de CPU en 60 s) |
| Tamaño de la instalación | 64 MB (app y asistente de inicio de sesión de las tiendas) |

## ¿Qué significa "sin Electron" para mí?

Las apps de Electron incluyen un motor de navegador completo. Heronite no. Un programa nativo lee tu biblioteca y la dibuja en la GPU con GPUI, un framework de interfaces para Rust.

La ventana de inicio de sesión de las tiendas es el único lugar donde se muestra una página web. Es una ventana pequeña y separada que usa el web view que ya tiene tu sistema (WebKitGTK en Linux, WebView2 en Windows). Solo se abre cuando inicias sesión en Epic Games, GOG o Amazon.

![La Colección de Heronite en la vista Foco: carátulas de juegos agrupadas en Jugando y En curso con el tiempo de juego bajo cada una, y ELDEN RING abierto con su carátula, detalles y una línea de tiempo de sesiones de juego.](../../../assets/screenshots/collection.webp)

*Una Colección completa con capturas, detalles y una línea de tiempo de juego, dibujada en la GPU.*

## ¿Qué hay en la instalación de 64 MB?

Dos partes: la app y el asistente de inicio de sesión de las tiendas. El asistente es un programa pequeño aparte que solo se ejecuta para la ventana de inicio de sesión, así que la app principal sigue siendo un único proceso. Las herramientas de las tiendas, como legendary, gogdl y nile, solo se ejecutan cuando hacen falta, por ejemplo mientras se instala o actualiza un juego.

## ¿El modo consola también es ligero?

Sí. El modo consola no carga nada hasta que lo activas. Puedes hacer que se abra al arrancar o al conectar un mando. Mira el [modo consola](/es/features/console-mode/).

## ¿Puedo llevar Heronite en una memoria USB?

En Windows, sí. La copia portable es una carpeta con el programa, tu Colección, los ajustes, las cachés y las capturas. Extráela donde quieras o muévela a una memoria USB. No escribe en el registro. Mira [la copia portable](/es/docs/files-and-folders/#la-copia-portable-windows).

## ¿Puedo desactivar el trabajo en segundo plano?

Sí. Usa estas [variables de entorno](/es/docs/environment-variables/):

| Variable | Qué hace |
|---|---|
| `HERONITE_NO_TRAY` | Sin icono en la bandeja |
| `HERONITE_NO_ANIMATIONS` | Sin animaciones |
| `HERONITE_DISABLE_IDLE_JOBS` | Sin trabajo en segundo plano en reposo |
| `HERONITE_NO_UPDATE_CHECK` | Sin búsqueda automática de actualizaciones |

## ¿Qué necesito para ejecutar Heronite?

Heronite funciona en Linux (cualquier distribución, x86_64) y en Windows 10 y 11 (x86_64). En Linux dibuja con Vulkan, así que necesitas un driver de Vulkan que funcione: Mesa para AMD e Intel, o el driver propietario para NVIDIA.

Si la ventana no se abre o se ve negra, ejecuta `vulkaninfo` y comprueba que lista tu GPU. Consulta la [solución de problemas](/es/docs/troubleshooting/) y la [instalación](/es/docs/installation/).

Heronite es gratuito y de código abierto bajo la licencia GPL-3.0, sin cuentas, anuncios ni telemetría. [Descarga Heronite](/es/download/) para probarlo.
