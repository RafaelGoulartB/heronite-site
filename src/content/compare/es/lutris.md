---
title: "Alternativa a Lutris para Linux: Heronite vs Lutris"
description: "Heronite y Lutris reúnen muchos juegos en una biblioteca de Linux. Compara scripts de instalación, tiendas y emuladores, y cómo importar tus juegos de Lutris."
eyebrow: Comparativa
headline: "Heronite vs Lutris: una alternativa a Lutris *que también funciona en Windows*"
lead: "Lutris es el veterano gestor de juegos de código abierto para Linux, con scripts de instalación y una larga lista de runners. Heronite es un launcher más nuevo y ligero para Linux y Windows. Así se diferencian."
navLabel: Heronite vs Lutris
summary: "Cómo se comparan Heronite y Lutris en scripts de instalación, runners, tiendas, emulación e historial de juego, y cómo importar tus juegos de Lutris."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "El Gestor de Wine de Heronite con Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek, y una tabla de versiones de Proton-CachyOS con fechas de publicación, tamaños y botones Instalar."
og: /og/lutris.jpg
updated: 2026-11-01
highlights:
  - title: "Tiendas, no scripts"
    text: "Inicia sesión en Epic, GOG y Amazon y Heronite instala desde la tienda. Lee Steam sin iniciar sesión."
  - title: "Importa tus juegos de Lutris"
    text: "En Linux, Heronite importa los juegos de la biblioteca de Lutris y solo lee sus archivos."
  - title: "Linux y Windows"
    text: "El mismo launcher nativo en ambos sistemas. Lutris solo funciona en Linux."
  - title: "Tu historial de juego"
    text: "Cada sesión queda registrada, con estadísticas, un diario, una meta de backlog y un resumen del año."
faq:
  - q: "¿Puede Heronite importar mis juegos de Lutris?"
    a: "Sí, en Linux. Heronite lee los juegos de la biblioteca de Lutris y los mantiene sincronizados. Funciona con la instalación normal de Lutris y con su Flatpak, y nunca escribe en los archivos de Lutris. Lutris sigue funcionando como antes."
  - q: "¿Cuál es una buena alternativa a Lutris?"
    a: "Heronite lo es si juegas sobre todo a juegos de tiendas, emuladores y tus propias carpetas. Lutris sigue siendo la mejor opción si dependes de sus scripts de instalación de la comunidad. Heroic es otra opción, y la comparamos en su propia página."
  - q: "¿Tiene Heronite scripts de instalación como Lutris?"
    a: "No. Lutris tiene instaladores, escritos como scripts, que descargan y configuran un juego por ti. Heronite instala los juegos de las tiendas en las que inicias sesión, y para los demás juegos añades tú el programa o la carpeta."
  - q: "Heroic vs Lutris: ¿cuál debería usar?"
    a: "Heroic se centra en Epic, GOG y Amazon, y Lutris cubre más sistemas, runners y scripts de instalación. Heronite está entre los dos, con Steam, las tres tiendas de Heroic y emuladores en una sola biblioteca. Mira la comparativa con Heroic para saber más."
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

Lutris es uno de los gestores de juegos más veteranos y capaces de Linux. Heronite hace parte del mismo trabajo de otra manera. Lutris se apoya en scripts de instalación de la comunidad y en muchos runners. Heronite se apoya en las tiendas, una sola Colección y una app más ligera.

**En resumen:** elige Lutris si quieres scripts de instalación o un runner para un sistema antiguo o un motor. Elige Heronite si juegas sobre todo desde tiendas, quieres Steam, Epic, GOG y Amazon en una biblioteca, o quieres el mismo launcher también en Windows. Esta página está actualizada a noviembre de 2026.

## Comparación rápida

| | Heronite | Lutris |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux |
| Licencia | GPL-3.0 | GPL-3.0 |
| Hecho con | Rust, dibujado en la GPU, sin navegador incluido | Python |
| Cómo se configuran los juegos | Instalados desde la tienda, o añadidos a mano | Scripts de instalación de la comunidad, más configuración manual |
| Biblioteca de Steam | Sí, sin iniciar sesión | Sí |
| Epic, GOG, Amazon | Sí, con legendary, gogdl y nile | Epic y GOG aparecen en su sitio, y Amazon en sus notas de versión |
| Battle.net, EA app | Sí, la app de cada tienda se ejecuta en un prefijo de Wine | Sí |
| Emulación | Emuladores detectados, carpetas de ROMs escaneadas, estados guardados | Runners para muchos emuladores y motores |
| Wine y Proton | Sí, con un Gestor de Wine | Sí, Proton-GE con umu es el predeterminado |
| Tiempo de juego | Sí, con estadísticas, un diario y un resumen del año | Sí, con un editor de tiempo de juego |
| Cuenta en línea | No hace falta | Cuenta opcional de lutris.net |
| Importar desde el otro launcher | Sí | No aplica |

La columna de Lutris proviene de [lutris.net](https://lutris.net), el [repositorio de Lutris](https://github.com/lutris/lutris) y sus [notas de versión](https://github.com/lutris/lutris/releases).

## Qué tienen en común

Los dos son gratuitos y de código abierto bajo la GPL-3.0. Los dos ejecutan juegos de Windows con Wine o Proton. Los dos se conectan a varias tiendas, registran el tiempo de juego y ejecutan emuladores, así que un jugador de Linux puede usar cualquiera de los dos como puerta de entrada a toda su biblioteca.

## Scripts de instalación y runners: el gran punto fuerte de Lutris

Aquí Lutris es difícil de superar. Un instalador de Lutris es un script, escrito en YAML, que descarga los archivos de un juego, lo configura y guarda una configuración base. Los scripts se publican en lutris.net, y puedes ejecutar uno desde la línea de comandos con un enlace `lutris:`. Para un juego antiguo o uno que no viene de las tiendas, un buen script puede ahorrarte una tarde.

Lutris también se describe como una forma de combinar emuladores, reimplementaciones de motores y capas de compatibilidad. Su sitio nombra Wine, MAME, Dolphin, RetroArch y ScummVM, «y muchos más», y las versiones recientes añadieron runners como DuckStation, Vita3K y Azahar.

Heronite no tiene scripts de instalación. Admite una lista fija de [emuladores](/es/features/emulation/) (RetroArch con muchos cores, Dolphin, PCSX2, DuckStation, PPSSPP, RPCS3, shadPS4, Cemu, mGBA, MAME, ScummVM y más, además de una opción personalizada para cualquier otro), y los juegos de Windows se ejecutan con Wine o Proton. Si quieres una cobertura amplia de sistemas y motores poco comunes, Lutris ofrece más.

## En qué se diferencia Heronite

### Primero las tiendas

Heronite parte de las tiendas. Lee tus bibliotecas de Steam sin iniciar sesión. Inicia sesión en Epic Games, GOG y Amazon Games en la página **Tiendas** y las bibliotecas completas se unen a la Colección, estén instaladas o no, con una sola cola de descargas para instalaciones, actualizaciones y reparaciones. En Linux, Battle.net, EA app, Ubisoft Connect y Rockstar Games se ejecutan cada uno en su propio prefijo de Wine, y sus juegos aparecen en la misma lista. Mira [Tiendas y launchers](/es/features/stores/).

### Una Colección, organizada a tu manera

Los juegos de todas las fuentes están en una sola Colección que agrupas por estado, tienda, género, serie o año, y guardas como vistas, por ejemplo Jugando ahora o Backlog. La búsqueda perdona los errores de escritura, y `Ctrl+K` abre una paleta de comandos. Puedes editar muchos juegos a la vez.

![La Colección de Heronite con juegos agrupados en Jugando y En curso, y un juego abierto con sus detalles y la línea de tiempo de juego.](../../../assets/screenshots/collection.webp)

*La Colección: juegos agrupados con su tiempo de juego, y una línea de tiempo de cada sesión.*

### Wine y Proton, gestionados por juego

Heronite define Wine o Proton para cada juego, con una versión y un prefijo que eliges. Las opciones incluyen DXVK, gamescope, un límite de FPS y Winetricks. El [Gestor de Wine](/es/features/wine-and-proton/) descarga Proton-CachyOS, GE-Proton y otras versiones, y también encuentra los runners de Wine que Lutris ya instaló.

### Una app nativa y ligera con historial de juego

Heronite es un único proceso de Rust sin navegador dentro. Usa unos 190 MB de memoria en reposo (unos 95 MB cuando está cerrado en la bandeja), alrededor de un 0,1 % de CPU, y muestra la biblioteca en unos 215 ms. Cada sesión queda registrada, así que obtienes [estadísticas](/es/features/play-time-tracking/), un diario, una meta de backlog y un resumen del año. También hay un [Modo consola](/es/features/console-mode/) para mandos y televisores.

### También en Windows

Lutris solo funciona en Linux. Heronite también funciona en Windows, con Steam, Epic, GOG y Amazon, así que los jugadores con arranque dual pueden usar un solo launcher en ambos.

### Partidas guardadas y copias de seguridad

Heronite puede hacer una copia de las partidas guardadas de un juego después de cada sesión cuando la herramienta opcional Ludusavi está instalada, y las restauras desde la página del juego. También puede hacer una copia de toda tu Colección de forma programada: tus juegos, sesiones, estados, diario y ajustes de cada juego, y opcionalmente tus ajustes, imágenes e inicios de sesión de tiendas. Lee más en [Partidas guardadas y copias de seguridad](/es/features/saves-and-backups/).

## Heronite, Heroic y Lutris

La gente suele preguntar por Heroic vs Lutris. El README de Heroic lista Epic, GOG y Amazon como sus tiendas. Lutris cubre más, con scripts de instalación y muchos runners. Heronite usa las mismas herramientas de tiendas que Heroic y añade Steam y emuladores en una sola biblioteca, y puede importar juegos de ambos. Mira [Heronite vs Heroic](/es/compare/heroic/) para esa comparación.

## Cuándo elegir Lutris

- Dependes de los scripts de instalación de la comunidad para configurar los juegos.
- Quieres un runner para un sistema antiguo o un motor que Heronite no admite.
- Te gusta un front end para muchos runners distintos, cada uno con sus propios ajustes.
- Quieres una cuenta opcional de lutris.net para sincronizar tu biblioteca.
- Tu configuración de Lutris ya te funciona bien.

## Cuándo elegir Heronite

- Juegas sobre todo desde Steam, Epic, GOG, Amazon u otros clientes de tiendas.
- Quieres juegos de tiendas, emuladores y tus propias carpetas en una sola Colección.
- Quieres una app ligera, sin navegador incluido.
- Quieres estadísticas de juego, un diario y una meta de backlog.
- Quieres el mismo launcher en Linux y Windows.

## Cambiar de Lutris a Heronite

Puedes probar Heronite sin perder nada. En Linux, Heronite lee los juegos de la biblioteca de Lutris y los trae a la Colección. Funciona con la instalación normal de Lutris y con su Flatpak, y los mantiene sincronizados. Heronite solo lee los archivos de Lutris. Nunca escribe en ellos, así que Lutris sigue funcionando como antes.

Algunas cosas que conviene saber:

- Los juegos de Steam que lista Lutris se dejan a la importación de Steam de Heronite, así que nada aparece dos veces.
- Heronite usa los metadatos de Lutris para las portadas y los detalles, y encuentra los runners de Wine que instaló Lutris.
- Los scripts de instalación no pasan. Heronite importa los juegos de la biblioteca de Lutris, no los scripts que los instalaron. Para traer tus bibliotecas de Epic, GOG y Amazon, inicia sesión en la página Tiendas.

> **Nota.** La importación de Lutris de Heronite es solo de la versión para Linux.

## Pruébalo

Heronite es gratuito, sin cuenta, anuncios ni telemetría. [Descárgalo](/es/download/), luego lee [Primeros pasos](/es/docs/getting-started/) y cómo funcionan [Wine y Proton](/es/docs/wine-and-proton/) en Heronite.
