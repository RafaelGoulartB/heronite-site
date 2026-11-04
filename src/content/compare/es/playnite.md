---
title: "Alternativa a Playnite para Linux: Heronite vs Playnite"
description: "Alternativa a Playnite para Linux: Heronite es un lanzador gratuito y de código abierto para Linux y Windows. Compáralos y mira cuándo gana Playnite."
eyebrow: Comparativa
headline: "Heronite vs Playnite"
lead: "Heronite es una alternativa a Playnite que funciona en Linux además de en Windows, y ejecuta juegos de Windows en Linux con Wine o Proton. Playnite es solo para Windows, con complementos y temas."
navLabel: Heronite vs Playnite
summary: "Heronite vs Playnite: cuál conviene a quien juega en Linux, a quien juega en Windows y a quien busca una alternativa a Playnite."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite: portadas de juegos agrupadas en Jugando y En curso con el tiempo de juego debajo, y ELDEN RING abierto con su portada, el botón Jugar, los detalles y una línea de tiempo de sesiones de juego."
og: /og/playnite.jpg
updated: 2026-11-04
highlights:
  - title: "Importa desde Playnite"
    text: "En Windows, Heronite importa tus juegos instalados de Playnite con su tiempo de juego."
  - title: "Wine y Proton integrados"
    text: "En Linux, elige una versión de Wine o Proton para cada juego."
  - title: "Ligero y nativo"
    text: "Escrito en Rust, sin un motor de navegador dentro."
  - title: "Historial de juego integrado"
    text: "Cada sesión alimenta estadísticas, un diario y un resumen del año."
faq:
  - q: "¿Qué lanzador puedo usar en lugar de Playnite en Linux?"
    a: "Heronite, que reúne tus tiendas, emuladores y tus propios juegos en una biblioteca. Heroic y Lutris también funcionan en Linux."
  - q: "¿Heronite tiene complementos y temas como Playnite?"
    a: "No tiene un sistema de complementos. Puedes editar los temas del modo consola y compartirlos como archivos."
  - q: "¿Heronite funciona en la Steam Deck?"
    a: "Sí. Funciona como AppImage en el modo escritorio de SteamOS, y en el Modo Juego como juego que no es de Steam. Mira la [guía de la Steam Deck](/guides/steam-deck/)."
related:
  - /features/stores/
  - /features/emulation/
  - /compare/heroic/
---

## Heronite vs Playnite: comparativa de funciones

| | Heronite | Playnite |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Windows 10/11 |
| Licencia | GPL-3.0 | MIT |
| Hecho con | Rust, renderizado en la GPU, sin navegador incluido | C# y WPF |
| Biblioteca de Steam | Sí, sin iniciar sesión | Sí |
| Epic y GOG | Sí | Sí |
| Battle.net, EA app, Ubisoft Connect | Sí, con Wine en Linux | Sí |
| Emulación | Sí | Sí |
| Registro del tiempo de juego | Estadísticas y un diario | Sí |
| Modo consola | Sí, con temas | Sí, modo pantalla completa |
| Complementos y scripts | No | Sí |
| Temas | Temas del modo consola | Sí |
| Ejecuta juegos de Windows en Linux | Sí, con Wine o Proton | No aplica |
| Importar desde el otro lanzador | Sí, en Windows | No aplica |

La columna de Playnite sale de [playnite.link](https://playnite.link) y del [repositorio de Playnite](https://github.com/JosefNemec/Playnite), actualizados a noviembre de 2026.

## ¿Playnite va a llegar a Linux?

Todavía no. El README de Playnite pide Windows 10 u 11, y Playnite está hecho con WPF, un framework de Windows. Su desarrollador lo está reescribiendo desde cero para la versión 11.

En [una discusión de GitHub](https://github.com/JosefNemec/Playnite/issues/59) de noviembre de 2025, escribió que pensaba pasarse a Linux en 2026, después de Playnite 11, e intentar hacer una versión para Linux. No encontramos ninguna versión para Linux publicada a noviembre de 2026.

## ¿Qué tienen en común Heronite y Playnite?

Los dos son gratuitos y de código abierto. Los dos reúnen juegos de varias tiendas en una biblioteca, registran el tiempo de juego, admiten emuladores y tienen un modo de pantalla completa pensado para mandos.

## ¿Cuál deberías elegir?

### Elige Playnite si…

- **Dependes de complementos, scripts o un tema de la comunidad.** Playnite admite complementos, scripts de PowerShell y temas.
- **Tienes una configuración de emuladores que ya ajustaste.** El sitio de Playnite describe una variedad de emuladores de consolas, así que compara antes de mover la tuya.
- **Quieres una larga trayectoria.** Playnite es el proyecto más antiguo.

### Elige Heronite si…

- **Usas Linux, o tienes arranque dual.** Una sola app nativa funciona en los dos sistemas, y **Ajustes → Nube** mantiene la misma biblioteca en cada uno.
- **Quieres ejecutar juegos de Windows con Wine o Proton.** Elige una versión y un prefijo de Wine (una carpeta que funciona como un Windows solo para ese juego) para cada juego, con versiones del [gestor de Wine](/es/features/wine-and-proton/).
- **Quieres una app nativa en Rust.** Sin navegador incluido, y con unos 190 MB de memoria en reposo ([rendimiento](/es/features/performance/)).
- **Quieres un historial de juego.** Heronite registra cada sesión para las [estadísticas](/es/features/play-time-tracking/), una meta anual de backlog, un diario y un resumen del año.
- **Juegas a juegos emulados.** Heronite [detecta tus emuladores](/es/features/emulation/), como RetroArch, Dolphin, PCSX2 y DuckStation, y escanea tus carpetas de ROMs.
- **Quieres más fuentes en Linux.** Heronite ejecuta las apps de Battle.net, EA, Ubisoft y Rockstar, e importa juegos de Heroic, Lutris, Bottles y Faugus.

![La pantalla de inicio del modo consola de Heronite con un juego destacado grande y un estante Seguir jugando con portadas.](../../../assets/screenshots/console-home.webp)

*Inicio del modo consola: un juego destacado y un estante para seguir jugando.*

## ¿Cómo cambio de Playnite a Heronite?

En Windows, Heronite importa los juegos que Playnite tiene instalados. Solo lee los archivos de Playnite, así que Playnite sigue funcionando.

1. **Inicia sesión en tus tiendas.** Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e inicia sesión en Epic Games, GOG y Amazon Games. Steam no necesita iniciar sesión.
2. **Importa los juegos de Playnite.** Cierra Playnite y, en **Ajustes → Otros launchers**, activa **Importar sus juegos** en Playnite. Sus juegos instalados aparecen con sus carátulas y su tiempo de juego, y se siguen iniciando con Playnite.
3. **Añade el resto de tus juegos.** Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa, o elige **Añadir desde una carpeta** en el menú ☰ para añadir todos los juegos de una carpeta.
4. **Detecta tus emuladores y escanea tus carpetas de ROMs.** En la página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>), haz clic en **Detectar emuladores** y luego en **Escanear ahora**.

Heronite deja fuera los juegos de Steam, Epic, GOG y Amazon de Playnite, porque los importa directamente de las tiendas. Las etiquetas, el estado de completado y las notas se quedan en Playnite.

En Windows, Heronite añade los juegos que instalaron el Epic Games Launcher, GOG Galaxy o la app de Amazon Games, sin descargarlos otra vez. Para los juegos de Epic que nunca jugaste en Heronite, puede traer el tiempo de juego que Epic registró.

**Siguiente:** [descarga Heronite](/es/download/) para Linux o Windows y lee [Primeros pasos](/es/docs/getting-started/).
