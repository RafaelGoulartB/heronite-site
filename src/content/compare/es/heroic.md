---
title: "Heronite vs Heroic Games Launcher: ¿cuál usar?"
description: "Heronite y Heroic comparten legendary, gogdl y nile para Epic, GOG y Amazon. Mira en qué se diferencian en Steam, emuladores y memoria, y cómo importar Heroic."
eyebrow: Comparativa
headline: "Heronite vs Heroic Games Launcher: *las mismas herramientas*, otro launcher"
lead: "Heroic es el launcher de código abierto que muchos jugadores de Linux usan para Epic, GOG y Amazon. Heronite usa las mismas herramientas de tiendas, añade Steam y emuladores en una sola biblioteca y puede importar tus juegos de Heroic."
navLabel: Heronite vs Heroic
summary: "Heronite y Heroic comparten legendary, gogdl y nile para Epic, GOG y Amazon. Mira en qué se diferencian y cómo cambiar de uno a otro."
order: 2
hero: ../../../assets/screenshots/console-home.webp
heroAlt: "El inicio del Modo consola de Heronite: SP Football Life 2026 en grande sobre su ilustración, con un estante Seguir jugando de portadas y las indicaciones de los botones del mando abajo."
og: /og/heroic.jpg
updated: 2026-11-01
highlights:
  - title: "Las mismas herramientas de tiendas"
    text: "Heronite usa legendary, gogdl y nile para Epic, GOG y Amazon, las mismas herramientas de código abierto que Heroic."
  - title: "También Steam y emuladores"
    text: "Steam, los clientes de tiendas en Linux, los juegos emulados y tus propios juegos comparten una Colección."
  - title: "Importa tu configuración de Heroic"
    text: "Heronite copia los datos de Heroic una sola vez y solo los lee, así Heroic sigue funcionando como antes."
  - title: "Sin navegador incluido"
    text: "Una app nativa en Rust con unos 190 MB de memoria en reposo, en lugar de una app Electron."
faq:
  - q: "¿Puede Heronite importar mi biblioteca de Heroic?"
    a: "Sí, en Linux. En el primer arranque, si existe la carpeta de Heroic, Heronite copia sus datos una vez, así que tus inicios de sesión, tus juegos añadidos y tus ajustes pasan a Heronite. También añade los juegos de Epic, GOG y Amazon que Heroic tenga instalados. Solo lee los archivos de Heroic y nunca escribe en ellos."
  - q: "¿Cuál es la diferencia entre Heronite y Heroic?"
    a: "Los dos usan legendary, gogdl y nile para Epic, GOG y Amazon. Heronite es una app nativa en Rust que además lee tus bibliotecas de Steam, ejecuta emuladores y guarda un historial de juego detallado. Heroic es una app Electron que también funciona en macOS y lleva más tiempo en el mercado."
  - q: "¿Es Heronite una alternativa a Heroic?"
    a: "Sí, si quieres Steam, Epic, GOG, Amazon y juegos emulados en una sola biblioteca en Linux o Windows. Si usas macOS, o solo necesitas las funciones de tiendas de Heroic, Heroic sigue siendo una buena opción."
  - q: "¿Perderé mi configuración de Heroic si pruebo Heronite?"
    a: "No. Heronite copia los datos de Heroic una sola vez y solo los lee. Heroic sigue funcionando como antes, así que puedes usar los dos mientras decides."
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

Heroic y Heronite son parientes cercanos. Los dos son gratuitos, de código abierto (GPL-3.0) y están construidos en torno a las mismas tres herramientas de tiendas: legendary para Epic Games, gogdl para GOG y nile para Amazon Games. Si te gusta cómo Heroic instala juegos, la parte de tiendas de Heronite te resultará familiar.

**En resumen:** elige Heroic si usas macOS, o quieres lo que añade sobre las tiendas. Elige Heronite si quieres Steam, emuladores y tus propios juegos en la misma biblioteca, una app más ligera, o el mismo launcher en Linux y Windows. Esta página está actualizada a noviembre de 2026.

## Comparación rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux, Windows 10/11 y macOS 14 o posterior |
| Licencia | GPL-3.0 | GPL-3.0 |
| Hecho con | Rust, dibujado en la GPU, sin navegador incluido | Electron, TypeScript y React |
| Epic, GOG, Amazon | Sí | Sí |
| Herramientas de tiendas | legendary, gogdl, nile | legendary, gogdl, nile |
| Biblioteca de Steam | Sí, sin iniciar sesión | No está entre las tiendas que lista su README |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Solo en Linux, la app de cada tienda se ejecuta en un prefijo de Wine | No están entre las tiendas que lista su README |
| Emulación | Sí, emuladores detectados y carpetas de ROMs escaneadas | No aparece en su README |
| Wine y Proton | Sí, con un Gestor de Wine | Sí, con un Gestor de Wine |
| Tiempo de juego | Sí, con estadísticas, un diario y un resumen del año | Tiempo jugado en la página de cada juego |
| Mando / modo salón | Sí, Modo consola con temas | Sí, un modo de pantalla completa parecido a una consola desde abril de 2026 |
| Copias de partidas guardadas | Copias con Ludusavi después de cada sesión | Sincronización de partidas guardadas en la nube |
| Importar desde el otro launcher | Sí, en Linux | No aplica |

La columna de Heroic proviene de su [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), su [sitio web](https://heroicgameslauncher.com) y sus [notas de versión](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases).

## Qué tienen en común

Las herramientas de tiendas son el corazón de ambos. Como Heronite usa los mismos legendary, gogdl y nile, instalar, actualizar y reparar juegos de Epic, GOG y Amazon funciona de forma parecida, y tu inicio de sesión va solo a las tiendas. Ambos también ejecutan juegos de Windows en Linux con Wine o Proton, con versiones que descargas y gestionas en la app.

Ambos tienen una cola de descargas, portadas de SteamGridDB y un lugar para añadir juegos que no vienen de una tienda.

## En qué se diferencia Heronite

### Una biblioteca para todas las fuentes

El README de Heroic lista Epic, GOG y Amazon Games como sus tiendas. Heronite empieza ahí y va más allá. Lee tus bibliotecas de Steam sin iniciar sesión y las mantiene sincronizadas. Detecta emuladores y escanea tus carpetas de ROMs. En Linux también ejecuta los clientes de Battle.net, EA app, Ubisoft Connect y Rockstar Games en sus propios prefijos de Wine, así que esos juegos se unen a la misma [Colección](/es/features/game-library/).

### Una app nativa, no un navegador

Heroic está construido sobre Electron, que incluye un navegador Chromium con la app. Heronite es un único proceso nativo de Rust dibujado en la GPU. Usa unos 190 MB de memoria en reposo (unos 95 MB cuando está cerrado en la bandeja), alrededor de un 0,1 % de CPU, y muestra la biblioteca en unos 215 ms. La instalación pesa 64 MB. Lee más en la página de [rendimiento](/es/features/performance/).

### Un historial de juego más profundo

Heronite registra cada sesión y la convierte en [estadísticas](/es/features/play-time-tracking/): tiempo por semana, mes y año, una meta anual de backlog, un diario para notas junto a tus capturas de pantalla y un resumen del año. Heroic muestra el tiempo jugado en la página de cada juego.

### Un Modo consola que puedes rediseñar

Los dos launchers tienen un modo de pantalla completa pensado para mandos. El de Heroic llegó en la versión 2.21 en abril de 2026, y ha crecido desde entonces. El [Modo consola](/es/features/console-mode/) de Heronite tiene ocho diseños y siete temas integrados, y puedes cambiar colores, fuentes, menús y páginas de juegos, y luego compartir un tema como archivo.

### Organizar una biblioteca grande

Heroic te permite añadir apps que no son de tiendas y ordenar los juegos en categorías personalizadas. Heronite da más peso a la Colección en sí. Puedes agrupar por estado, tienda, género, serie o año, guardar filtros como vistas, por ejemplo Jugando ahora o Backlog, y editar muchos juegos a la vez con la opción de deshacer. Los géneros, las empresas y las series se pueden renombrar y fusionar en toda la biblioteca. La búsqueda perdona los errores de escritura, y `Ctrl+K` abre una paleta de comandos para cualquier juego, página o acción. Si tienes cientos de juegos, estas herramientas ahorran tiempo.

### El mismo launcher en Windows

Heronite funciona en Windows con Steam, Epic, GOG y Amazon, y trae los juegos ya instalados por el Epic Games Launcher, GOG Galaxy o la app de Amazon Games. Heroic también funciona en Windows.

## En qué es más fuerte Heroic

- **macOS.** Heroic funciona en macOS 14 o posterior, y allí ejecuta juegos de Windows con Crossover. Heronite no tiene versión para macOS.
- **Wine, Proton y la Steam Deck.** El sitio de Heroic destaca los ajustes automáticos de Wine y el soporte de Steam Deck, y tiene un largo historial de correcciones para ejecutar juegos de Epic y GOG en Linux. Heronite es el proyecto más joven.
- **Traducciones.** El README de Heroic dice que está traducido a casi 40 idiomas. Heronite habla inglés, portugués (Brasil), español y alemán.
- **Guardados en la nube.** Heroic lista la sincronización de partidas guardadas en la nube como función. Heronite hace copias de las partidas guardadas en local con Ludusavi, una herramienta opcional.
- **Extras de tiendas.** Las versiones recientes de Heroic añadieron pantallas de ofertas y logros de GOG en la página del juego. También tiene una integración experimental con ZOOM Platform, solo para Linux cuando se añadió en enero de 2026.
- **Versiones regulares.** Heroic publicó una versión casi cada mes en 2026, lo cual ayuda cuando una tienda cambia algo.

## Cuándo elegir Heroic

- Usas macOS.
- Quieres sobre todo Epic, GOG y Amazon, y un launcher centrado en ellos.
- Quieres sincronización de partidas guardadas en la nube o la integración con ZOOM Platform.
- Necesitas un idioma que Heronite todavía no tiene.
- Tu configuración ya funciona y no necesitas Steam ni emuladores en la misma app.

## Cuándo elegir Heronite

- Quieres Steam, Epic, GOG, Amazon, emuladores y tus propios juegos en una biblioteca.
- Quieres los juegos de Battle.net, EA app, Ubisoft Connect y Rockstar en la misma lista en Linux.
- Prefieres una app nativa sin navegador incluido.
- Te gustan las estadísticas de juego, un diario y una meta de backlog.
- Quieres el mismo launcher en Linux y Windows.

## Cambiar de Heroic a Heronite

No tienes que elegir antes de probar. En Linux, Heronite se lleva tu configuración de Heroic:

1. **Primer arranque.** Si existe la carpeta de datos de Heroic, Heronite la copia una vez. Tus inicios de sesión en las tiendas, los juegos que añadiste a mano con sus ajustes, y tus ajustes pasan a Heronite.
2. **Juegos de tiendas instalados.** Los registros de Heroic de los juegos de Epic, GOG y Amazon que instaló se añaden a los de Heronite, así que esos juegos aparecen como instalados, en las mismas carpetas, una vez que inicias sesión en la tienda.
3. **Mantenerse al día.** Heronite mantiene la importación sincronizada y recoge los juegos que añadas después en Heroic. Funciona con la instalación normal de Heroic y con su Flatpak.
4. **Juegos de Steam.** Si Heroic lista un juego de Steam, Heronite lo deja a su propia importación de Steam, así que nada aparece dos veces.

Heronite solo lee los archivos de Heroic. Nunca escribe en ellos, así que Heroic sigue funcionando como antes y puedes volver cuando quieras. La importación es solo de la versión para Linux.

> **Nota.** Una clave de SteamGridDB importada de Heroic puede haber sido cifrada por Heroic. Si las portadas no cargan, pega la clave otra vez en Ajustes.

## Pruébalo

Heronite es gratuito, sin cuenta, anuncios ni telemetría. [Descárgalo](/es/download/), luego lee cómo funcionan las [tiendas y launchers](/es/docs/stores-and-launchers/), o sigue las guías de [Epic](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon](/es/guides/amazon-games-on-linux/) en Linux.
