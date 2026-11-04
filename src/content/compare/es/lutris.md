---
title: "Alternativa a Lutris para Linux: Heronite vs Lutris"
description: "Una alternativa a Lutris para Linux y Windows. Compara scripts de instalación, tiendas, emuladores e historial de juego, e importa tus juegos de Lutris."
eyebrow: Comparativa
headline: "Heronite vs Lutris: una alternativa a Lutris que también funciona en Windows"
lead: "Heronite instala juegos desde las tiendas y también funciona en Windows; Lutris es mejor para scripts de instalación y runners."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: scripts de instalación, runners, tiendas, emulación e historial de juego, y cómo importar tus juegos de Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "El Gestor de Wine de Heronite con Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek, y una tabla de versiones de Proton-CachyOS con fechas de publicación, tamaños y botones Instalar."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: "Tiendas, no scripts"
    text: "Instala desde Epic, GOG y Amazon; Steam no necesita inicio de sesión."
  - title: "Importa tus juegos de Lutris"
    text: "En Linux, pasan los juegos de la biblioteca de Lutris."
  - title: "Linux y Windows"
    text: "Un launcher nativo en ambos. Lutris solo funciona en Linux."
  - title: "Tu historial de juego"
    text: "Cada sesión alimenta estadísticas, un diario y un resumen del año."
faq:
  - q: "¿Puede Heronite importar mis juegos de Lutris?"
    a: "Sí, en Linux: Heronite lee los juegos de la biblioteca de Lutris y los mantiene sincronizados. [Mira los pasos](#cómo-cambio-de-lutris-a-heronite)."
  - q: "¿Tiene Heronite scripts de instalación como Lutris?"
    a: "No. Heronite instala desde las tiendas en las que inicias sesión; para los demás juegos añades el programa o la carpeta."
  - q: "Heroic vs Lutris: ¿cuál debería usar?"
    a: "Heroic se centra en Epic, GOG y Amazon. Lutris cubre más sistemas, runners y scripts de instalación. Heronite reúne Steam, esas tres tiendas y emuladores en una biblioteca."
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**En resumen:** elige Lutris si quieres scripts de instalación o un runner para un sistema antiguo o un motor. Elige Heronite si juegas sobre todo desde tiendas, quieres Steam, Epic, GOG y Amazon en una biblioteca, o quieres el mismo launcher en Windows.

## Comparación rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux |
| Hecho con | Rust, dibujado en la GPU, sin navegador incluido | Python |
| Cómo se configuran los juegos | Desde la tienda, o añadidos a mano | Scripts de instalación, o configuración manual |
| Biblioteca de Steam | Sí, sin iniciar sesión | Sí |
| Epic, GOG, Amazon | Sí, con legendary, gogdl y nile | Sí |
| Battle.net, EA app | Solo en Linux, en un prefijo de Wine | Sí |
| Emulación | Emuladores detectados, escaneo de ROMs, estados guardados | Runners para muchos emuladores y motores |
| Wine y Proton | Sí, con un Gestor de Wine | Sí, GE-Proton con umu por defecto |
| Tiempo de juego | Estadísticas, diario, resumen del año | Sí, con un editor de tiempo de juego |
| Cuenta en línea | No hace falta | Cuenta opcional de lutris.net |
| Importar desde el otro launcher | Sí, en Linux | No aplica |

La columna de Lutris proviene de [lutris.net](https://lutris.net), el [repositorio de Lutris](https://github.com/lutris/lutris) y sus [notas de versión](https://github.com/lutris/lutris/releases). Lutris lista Epic y GOG en su sitio, y Amazon en sus notas de versión. Actualizado a noviembre de 2026.

## ¿Qué tienen en común Heronite y Lutris?

Los dos son launchers gratuitos y de código abierto (GPL-3.0). Los dos ejecutan juegos de Windows con Wine o Proton, se conectan a varias tiendas, registran el tiempo de juego y ejecutan emuladores.

## ¿Cuál debes elegir?

### Elige Lutris si…

- **Dependes de scripts de instalación de la comunidad.** Los instaladores de Lutris son scripts YAML en lutris.net, y un enlace `lutris:` ejecuta uno desde la línea de comandos. Heronite no tiene ninguno.
- **Quieres un runner para un sistema antiguo o un motor.** El sitio de Lutris nombra Wine, MAME, Dolphin, RetroArch y ScummVM, «y muchos más», y las versiones recientes añadieron DuckStation, Vita3K y Azahar. Heronite admite una lista fija de [emuladores](/es/features/emulation/), además de una opción personalizada para cualquier otro.
- **Te gusta un front end para muchos runners,** cada uno con sus propios ajustes.
- **Quieres una cuenta opcional de lutris.net** para sincronizar tu biblioteca.
- **Lutris ya te cubre.** Tu configuración actual funciona bien.

### Elige Heronite si…

- **Juegas sobre todo desde tiendas.** Inicia sesión en Epic Games, GOG y Amazon Games en la página **Tiendas** y tus bibliotecas completas se unen a la Colección, estén instaladas o no, con una sola cola de descargas. Steam no necesita inicio de sesión, y en Linux los clientes de Battle.net, EA app, Ubisoft Connect y Rockstar Games tienen cada uno su propio prefijo de Wine ([tiendas](/es/features/stores/)).
- **Quieres una biblioteca organizada a tu manera.** Agrupa los juegos de todas las fuentes por estado, tienda, género, serie o año, y guarda vistas como Jugando ahora o Backlog. <kbd>Ctrl</kbd> <kbd>K</kbd> abre una paleta de comandos.
- **Quieres Wine o Proton por juego.** Elige una versión y un prefijo, con opciones como DXVK, gamescope, un límite de FPS y Winetricks. El [Gestor de Wine](/es/features/wine-and-proton/) descarga Proton-CachyOS, GE-Proton y otras versiones, y encuentra los runners de Wine que Lutris ya instaló.
- **Quieres una app ligera con historial de juego.** Heronite es un único proceso de Rust sin navegador dentro, y usa unos 190 MB de memoria en reposo ([rendimiento](/es/features/performance/)). Registra cada sesión, con [estadísticas](/es/features/play-time-tracking/), un diario, una meta de backlog y un resumen del año.
- **Juegas en una TV o con un mando.** El [modo consola](/es/features/console-mode/) está pensado para mandos y televisores.
- **Quieres el mismo launcher en Windows.** Allí maneja Steam, Epic, GOG y Amazon, así que quien tiene arranque dual usa un launcher en ambos.
- **Quieres copias de las partidas guardadas.** Con la herramienta opcional Ludusavi, Heronite hace copia de las partidas de un juego después de cada sesión. También puede hacer copia de toda tu biblioteca de forma programada ([partidas guardadas y copias](/es/features/saves-and-backups/)).

![La Colección de Heronite con juegos agrupados en Jugando y En curso, y un juego abierto con sus detalles y la línea de tiempo de juego.](../../../assets/screenshots/collection.webp)

*La Colección: juegos agrupados con su tiempo de juego, y una línea de tiempo de cada sesión.*

## ¿Cómo cambio de Lutris a Heronite?

En Linux, Heronite lee los juegos de la biblioteca de Lutris y nunca escribe en sus archivos, así que Lutris sigue funcionando como antes.

1. **Instala Heronite en Linux.** Los juegos de la biblioteca de Lutris se unen a la Colección y se mantienen sincronizados, con la instalación normal de Lutris o con su Flatpak.
2. **Inicia sesión en la página Tiendas.** Así entran tus bibliotecas de Epic, GOG y Amazon.

Conviene saber:

- Heronite se salta los juegos de Steam que lista Lutris y usa su propia importación de Steam, así que nada aparece dos veces.
- Heronite usa los metadatos de Lutris para las portadas y los detalles.
- Heronite importa los juegos de la biblioteca de Lutris, no los scripts de instalación que los configuraron.

**Siguiente:** [descarga Heronite](/es/download/), luego lee [Primeros pasos](/es/docs/getting-started/) o compara [Heronite vs Heroic](/es/compare/heroic/).
