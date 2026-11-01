---
title: "Lanzador de juegos ligero, sin Electron | Heronite"
description: "Un lanzador de juegos rápido y ligero para Linux y Windows. Rust nativo, dibujado en la GPU, sin navegador. Biblioteca en unos 215 ms y unos 190 MB en reposo."
eyebrow: Rendimiento
headline: "Un lanzador que *no se interpone en tu camino*"
lead: "Heronite es una app nativa en Rust dibujada en la GPU, en un solo proceso y sin navegador integrado. Se abre en una quinta parte de segundo y se queda tranquilo mientras juegas."
navLabel: Rendimiento
summary: "Rust nativo, dibujado en la GPU y sin Electron: unos 215 ms hasta la biblioteca, 190 MB en reposo y 64 MB de instalación."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "La paleta de comandos de Heronite abierta sobre la Colección, buscando \"contr\" y mostrando Control y otros juegos que coinciden, con acciones para jugar Control, abrir sus ajustes o su carpeta."
og: /og/performance.jpg
updated: 2026-11-01
highlights:
  - title: Unos 215 ms
    text: Tiempo mediano desde el inicio hasta ver tu biblioteca en pantalla.
  - title: Unos 190 MB en reposo
    text: En un solo proceso, y unos 95 MB cuando se cierra a la bandeja.
  - title: Alrededor del 0,1 % de CPU
    text: En reposo, medido como 0,05 s de tiempo de CPU en 60 s.
  - title: 64 MB de instalación
    text: La app y el asistente de inicio de sesión de las tiendas, sin motor de navegador integrado.
faq:
  - q: ¿Cuál es el lanzador de juegos más ligero para Linux y Windows?
    a: Heronite está hecho para ser ligero. Es un único proceso nativo que usa unos 190 MB de memoria en reposo, unos 95 MB cuando se cierra a la bandeja y alrededor del 0,1 % de la CPU. La instalación ocupa 64 MB.
  - q: ¿Heronite usa Electron?
    a: No. Heronite está escrito en Rust y dibujado en la GPU con GPUI. No hay un motor de navegador integrado ni una página web detrás de la interfaz.
  - q: ¿Qué tan rápido arranca Heronite?
    a: El tiempo mediano desde el inicio hasta ver la biblioteca en pantalla es de unos 215 ms.
  - q: ¿Cuánta memoria usa Heronite?
    a: Unos 190 MB en reposo, en un solo proceso. Cuando cierras la ventana a la bandeja, baja a unos 95 MB. El modo consola no carga nada hasta que lo activas.
  - q: ¿Qué necesito para ejecutarlo?
    a: Linux (cualquier distribución, x86_64) o Windows 10 y 11 (x86_64). En Linux, Heronite dibuja con Vulkan, así que necesitas un driver de Vulkan que funcione. Consulta la [instalación](/docs/installation/).
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

Un lanzador de juegos debería ser lo más ligero que ejecutas, porque está abierto junto al juego. Muchos launchers son páginas web dentro de un navegador integrado, y lo pagan en memoria y tiempo de arranque. Heronite toma el otro camino. Es una app nativa en Rust, dibujada directamente en la GPU, sin navegador dentro.

## ¿Qué tan rápido y ligero es Heronite?

Estas son las cifras que medimos y publicamos, sin nada con lo que compararlas salvo el propio Heronite:

| Medida | Heronite |
|---|---|
| Del inicio a la biblioteca en pantalla | unos 215 ms (mediana) |
| Memoria en reposo | unos 190 MB en un solo proceso |
| Memoria cerrado a la bandeja | unos 95 MB |
| CPU en reposo | alrededor del 0,1 % (0,05 s de tiempo de CPU en 60 s) |
| Tamaño de la instalación | 64 MB (app y asistente de inicio de sesión de las tiendas) |

Las cifras en reposo son las que más importan. Un launcher pasa la mayor parte de su vida abierto sin hacer nada, y Heronite casi no hace nada en ese tiempo.

## ¿Por qué arranca tan rápido?

Heronite no carga un motor web ni ejecuta una página web antes de mostrarte algo. Es un único programa nativo que lee tu Colección y la dibuja. Tu biblioteca está en pantalla en unos 215 ms, y en el uso diario eso se siente como si la app ya estuviera abierta.

## ¿Qué significa "sin Electron" para mí?

Las apps de Electron incluyen un motor de navegador completo con cada app. Heronite no. Está escrito en Rust y su interfaz se dibuja en la GPU con GPUI, un framework de interfaces para Rust. Eso tiene tres efectos que se notan:

- **Menos memoria.** Un solo proceso, unos 190 MB en reposo y unos 95 MB cuando se cierra a la bandeja.
- **Menos CPU.** Alrededor del 0,1 % en reposo, es decir, 0,05 s de tiempo de CPU en 60 s.
- **Una instalación pequeña.** 64 MB para la app y el asistente que muestra la página de inicio de sesión de las tiendas.

La ventana de inicio de sesión de las tiendas es el único lugar donde se muestra una página web. Es una ventana pequeña y separada que usa el web view que ya tiene tu sistema (WebKitGTK en Linux, WebView2 en Windows), y solo se abre cuando inicias sesión en Epic Games, GOG o Amazon.

![La Colección de Heronite en la vista Foco: carátulas de juegos agrupadas en Jugando y En curso con el tiempo de juego bajo cada una, y ELDEN RING abierto con su carátula, detalles y una línea de tiempo de sesiones de juego.](../../../assets/screenshots/collection.webp)

*Una Colección completa con capturas, detalles y una línea de tiempo de juego, dibujada en la GPU.*

## ¿Qué cabe en 64 MB?

Más de lo que suele traer un launcher. La misma instalación te da:

- una [Colección](/es/features/game-library/) con vistas, grupos, edición en lote y paleta de comandos,
- [tiendas](/es/features/stores/): Steam, Epic, GOG y Amazon, con los clientes de Battle.net, EA app, Ubisoft Connect y Rockstar en Linux,
- [emulación](/es/features/emulation/) con escaneo de ROMs,
- un Gestor de Wine y opciones de [Wine y Proton](/es/features/wine-and-proton/) por juego en Linux,
- [registro de tiempo de juego](/es/features/play-time-tracking/) con estadísticas y un resumen del año,
- [partidas guardadas y copias de seguridad](/es/features/saves-and-backups/),
- [modo consola](/es/features/console-mode/) con temas.

## ¿Cómo se reparte el trabajo entre Heronite y el asistente?

La instalación de 64 MB contiene dos partes: la app y el asistente de inicio de sesión de las tiendas. El asistente es un programa pequeño aparte. Solo se ejecuta para la ventana de inicio de sesión, así que la app principal sigue siendo un único proceso. Las herramientas de las tiendas, como legendary, gogdl y nile, solo se ejecutan cuando hacen falta, por ejemplo mientras se instala o actualiza un juego.

## ¿Puedo llevarlo en una memoria USB?

En Windows, sí. La copia portable es una carpeta que lo contiene todo: el programa, tu Colección, los ajustes, las cachés y las capturas. Extráela donde quieras, o muévela a una memoria USB, y sigue funcionando. No escribe en el registro. Consulta [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿Puedo desactivar el trabajo en segundo plano?

Sí. Unos pocos interruptores en las [variables de entorno](/es/docs/environment-variables/) recortan los extras cuando quieres un lanzador aún más silencioso:

| Variable | Qué hace |
|---|---|
| `HERONITE_NO_TRAY` | Sin icono en la bandeja |
| `HERONITE_NO_ANIMATIONS` | Sin animaciones |
| `HERONITE_DISABLE_IDLE_JOBS` | Sin trabajo en segundo plano en reposo |
| `HERONITE_NO_UPDATE_CHECK` | Sin búsqueda automática de actualizaciones |

Nunca necesitas ninguna de ellas. Están para quienes les gusta recortar.

## ¿El modo consola también es ligero?

Sí. El modo consola, el diseño pensado para mandos en una TV, no carga nada hasta que lo activas. Puede abrirse al arrancar o al conectar un mando, así que solo lo pagas cuando lo usas. Consulta el [modo consola](/es/features/console-mode/).

## ¿Qué necesito para ejecutarlo?

Heronite funciona en Linux (cualquier distribución, x86_64) y en Windows 10 y 11 (x86_64). En Linux dibuja con Vulkan, así que necesitas un driver de Vulkan que funcione: Mesa para AMD e Intel, o el driver propietario para NVIDIA. Si la ventana no se abre o se ve negra, comprueba que `vulkaninfo` lista tu GPU. Más en la [solución de problemas](/es/docs/troubleshooting/).

> **Nota.** Heronite no se encarga del trabajo de tus juegos. Steam sigue iniciando sus propios juegos, los emuladores se ejecutan en sus propios programas y los juegos de Windows se ejecutan con [Wine o Proton](/es/features/wine-and-proton/). Heronite es la parte que se mantiene pequeña.

## ¿Por qué importa un lanzador ligero?

Abres un launcher muchas veces por semana, y a menudo justo antes de un juego que necesita cada gota de tu PC. Un launcher que arranca al instante y se queda en reposo con casi nada de CPU es uno en el que dejas de pensar. Ese es el objetivo: eliges un juego, pulsas jugar y el launcher se aparta.

## Gratuito, de código abierto y listo para probar

Heronite es gratuito, sin cuentas, anuncios ni telemetría, y de código abierto bajo la licencia GPL-3.0. Si hoy usas otro launcher, [Heronite vs Playnite](/es/compare/playnite/), [vs Heroic](/es/compare/heroic/) y [vs Lutris](/es/compare/lutris/) explican las diferencias.

[Descarga Heronite](/es/download/) y mira qué tal se siente. La página de documentación [Instalación](/es/docs/installation/) cubre cada paquete, y [Primeros pasos](/es/docs/getting-started/) te guía en el primer arranque.
