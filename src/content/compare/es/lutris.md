---
title: "Alternativa a Lutris para Linux: Heronite vs Lutris"
description: "Una alternativa a Lutris para Linux y Windows. Compara scripts de instalación, tiendas, emuladores e historial de juego, e importa tus juegos de Lutris."
eyebrow: Comparativa
headline: "Heronite vs Lutris"
lead: "Heronite es una alternativa a Lutris para Linux y Windows que instala juegos desde las tiendas en las que inicias sesión."
navLabel: Heronite vs Lutris
summary: "Heronite vs Lutris: scripts de instalación, runners, tiendas, emulación e historial de juego, y cómo importar tus juegos de Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "El Gestor de Wine de Heronite con Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek, y una tabla de versiones de Proton-CachyOS con fechas de publicación, tamaños y botones Instalar."
og: /og/lutris.jpg
updated: 2026-11-04
highlights:
  - title: "Importa tus juegos de Lutris"
    text: "En Linux, los juegos de la biblioteca de Lutris pasan y se mantienen sincronizados."
  - title: "Sin registro"
    text: "Heronite funciona sin una cuenta propia."
  - title: "Tu historial de juego"
    text: "Cada sesión alimenta estadísticas, un diario y un resumen del año."
  - title: "Copias de partidas"
    text: "Ludusavi hace una copia de las partidas guardadas después de cada sesión."
faq:
  - q: "¿Heronite tiene scripts de instalación como Lutris?"
    a: "Sí. Heronite instala un juego desde un script de instalación YAML que tú eliges y luego lo añade a tu biblioteca. Lutris tiene la biblioteca de scripts de la comunidad en lutris.net."
  - q: "¿Heronite funciona en la Steam Deck?"
    a: "Sí. Funciona como AppImage en el modo escritorio de SteamOS, y en el Modo Juego como juego que no es de Steam. Mira la [guía de la Steam Deck](/guides/steam-deck/)."
  - q: "Heroic vs Lutris: ¿cuál debería usar?"
    a: "Heroic se centra en Epic, GOG y Amazon. Lutris cubre más sistemas, runners y scripts de instalación. Mira [Heronite vs Heroic](/compare/heroic/)."
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

**En resumen:** elige Lutris si quieres los scripts de instalación de la comunidad en lutris.net, o un runner para un sistema antiguo o un motor. Elige Heronite si juegas sobre todo desde tiendas, quieres Steam, Epic, GOG y Amazon en una biblioteca, o quieres el mismo lanzador en Windows.

## Comparación rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux |
| Hecho con | Rust, renderizado en la GPU, sin navegador incluido | Python |
| Cómo se configuran los juegos | Desde la tienda, a mano o con un script de instalación YAML | Scripts de instalación, o configuración manual |
| Biblioteca de Steam | Sí, sin iniciar sesión | Sí |
| Epic, GOG, Amazon | Sí, con legendary, gogdl y nile | Sí |
| Battle.net, EA app | Sí, en un prefijo de Wine en Linux | Sí |
| Emulación | Emuladores detectados, escaneo de ROMs, estados guardados | Runners para muchos emuladores y motores |
| Wine y Proton | Sí, con un gestor de Wine | Sí, GE-Proton con umu por defecto |
| Tiempo de juego | Estadísticas, diario, resumen del año | Sí, con un editor de tiempo de juego |
| Guardados en la nube | Epic y GOG, en beta | No aparece |
| Cuenta en línea | No hace falta | Cuenta opcional de lutris.net |
| Importar desde el otro lanzador | Sí, en Linux | No aplica |

La columna de Lutris sale de [lutris.net](https://lutris.net), el [repositorio de Lutris](https://github.com/lutris/lutris) y sus [notas de versión](https://github.com/lutris/lutris/releases). Lutris menciona Epic y GOG en su sitio, y Amazon en sus notas de versión. "No aparece" significa que el README de Lutris no lo menciona. Actualizado a noviembre de 2026.

## ¿Qué tienen en común Heronite y Lutris?

Los dos son lanzadores gratuitos y de código abierto (GPL-3.0). Los dos ejecutan juegos de Windows con Wine o Proton, se conectan a varias tiendas, registran el tiempo de juego y ejecutan emuladores.

## ¿Cuál deberías elegir?

### Elige Lutris si…

- **Dependes de los scripts de instalación de la comunidad.** Los instaladores de Lutris son scripts YAML en lutris.net, y un enlace `lutris:` ejecuta uno desde la línea de comandos.
- **Quieres un runner para un sistema antiguo o un motor.** El sitio de Lutris nombra Wine, MAME, Dolphin, RetroArch y ScummVM, «y muchos más». Las versiones recientes añadieron DuckStation, Vita3K y Azahar.
- **Te gusta tener un solo front end para muchos runners,** cada uno con sus propios ajustes.
- **Quieres una cuenta opcional de lutris.net** para sincronizar tu biblioteca.

### Elige Heronite si…

- **Juegas sobre todo desde tiendas.** Inicia sesión en Epic Games, GOG y Amazon Games en la página **Tiendas**, y todos tus juegos de esas tiendas se unen a tu biblioteca, instalados o no. Una sola cola de descargas los instala ([tiendas](/es/features/stores/)).
- **Quieres una biblioteca organizada a tu manera.** Agrupa los juegos de todas las fuentes por estado, tienda, género, serie o año, y guarda vistas como Jugando ahora o Backlog.
- **Quieres Wine o Proton configurado por juego.** Elige una versión y un prefijo de Wine (una carpeta de Windows aparte), con opciones como DXVK, gamescope, un límite de FPS y Winetricks. El [gestor de Wine](/es/features/wine-and-proton/) descarga Proton-CachyOS y GE-Proton, y encuentra los runners de Wine que Lutris ya instaló.
- **Quieres una app ligera con historial de juego.** Heronite usa unos 190 MB de memoria en reposo ([rendimiento](/es/features/performance/)) y registra cada sesión para las [estadísticas](/es/features/play-time-tracking/) y el resumen del año.
- **Juegas en una TV o con un mando.** El [modo consola](/es/features/console-mode/) tiene ocho diseños y siete temas que puedes editar y compartir.
- **Quieres el mismo lanzador en Windows.** Allí Heronite maneja Steam, Epic, GOG, Amazon y Microsoft Store, y **Ajustes → Nube** mantiene una sola biblioteca en los dos sistemas de un arranque dual.
- **Quieres tus partidas guardadas a salvo.** Heronite sincroniza los guardados en la nube de Epic y GOG, y hace una copia de las partidas de cualquier juego después de cada sesión con la herramienta opcional Ludusavi ([partidas guardadas y copias](/es/features/saves-and-backups/)).

![La Colección de Heronite con juegos agrupados en Jugando y En curso, y un juego abierto con sus detalles y la línea de tiempo de juego.](../../../assets/screenshots/collection.webp)

*La Colección: juegos agrupados, tiempo de juego y una línea de tiempo de sesiones.*

## ¿Cómo cambio de Lutris a Heronite?

En Linux, Heronite importa los juegos de la biblioteca de Lutris. Solo lee los archivos de Lutris, así que Lutris sigue funcionando como antes.

1. **[Instala Heronite](/es/docs/installation/) e inícialo.**
2. **Activa la importación de Lutris.** En **Ajustes → Otros launchers**, activa **Importar sus juegos** en Lutris. Sus juegos instalados se unen a tu biblioteca con sus carátulas y su tiempo de juego, y se mantienen sincronizados. Funciona con la instalación normal de Lutris o con su Flatpak.
3. **Inicia sesión en tus tiendas.** Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e inicia sesión en Epic Games, GOG y Amazon Games para traer esas bibliotecas.

Conviene saber:

- Lutris sigue iniciando los juegos importados, con los ajustes que les diste allí.
- Heronite se salta los juegos de Steam que lista Lutris y usa su propia importación de Steam, así que nada aparece dos veces.
- Heronite usa los metadatos de Lutris para las carátulas y los detalles.
- Heronite importa los juegos de la biblioteca de Lutris, no los scripts de instalación que los configuraron.

**Siguiente:** [descarga Heronite](/es/download/) y lee [Primeros pasos](/es/docs/getting-started/).
