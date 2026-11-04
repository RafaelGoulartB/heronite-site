---
title: "Alternativa a Heroic: Heronite vs Heroic Games Launcher"
description: "Una alternativa a Heroic para Linux y Windows: compara Steam, emuladores y uso de memoria, mira cuándo gana Heroic e importa tus juegos de Heroic."
eyebrow: Comparativa
headline: "Heronite vs Heroic Games Launcher"
lead: "Heronite es una alternativa a Heroic: los dos instalan juegos de Epic, GOG y Amazon en Linux y Windows."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: en qué se diferencian, cuándo es mejor Heroic y cómo importar tus juegos de Heroic en Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "La paleta Ctrl+K de Heronite buscando “contr”: Control de Epic y CONTROL Ultimate Edition de Steam en la misma lista, con el tiempo de juego y acciones para jugar, abrir los ajustes o la carpeta del juego."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: "Las mismas herramientas"
    text: "Los dos inician sesión y descargan con las mismas herramientas de código abierto."
  - title: "También Steam y emuladores"
    text: "Steam, los juegos emulados y tus propios juegos comparten una biblioteca."
  - title: "Importa tu Heroic"
    text: "En Linux pasan tus inicios de sesión y los juegos que añadiste a mano."
  - title: "Sin navegador incluido"
    text: "Una app nativa en Rust; Heroic está hecho con Electron."
faq:
  - q: "¿Cuál es la diferencia entre Heronite y Heroic?"
    a: "Heronite es una app nativa en Rust con Steam y emuladores en su biblioteca. Heroic es una app Electron que también funciona en macOS."
  - q: "¿Es seguro iniciar sesión en las tiendas con Heronite?"
    a: "Sí. Tus inicios de sesión se quedan en tu PC y solo van a las tiendas. Escribes tu contraseña en la página de inicio de sesión de la propia tienda."
  - q: "¿Heronite funciona en la Steam Deck?"
    a: "Sí. Funciona como AppImage en el modo escritorio de SteamOS, y en el Modo Juego como juego que no es de Steam. Mira la [guía de la Steam Deck](/guides/steam-deck/)."
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**En resumen:** elige Heroic si usas macOS, o si quieres un lanzador centrado en Epic, GOG y Amazon. Elige Heronite si quieres Steam, emuladores y tus propios juegos en una biblioteca, o una app más ligera.

## Comparación rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux, Windows 10/11, macOS 14 o posterior |
| Hecho con | Rust, renderizado en la GPU, sin navegador incluido | Electron, TypeScript y React |
| Epic, GOG, Amazon | Sí | Sí |
| Biblioteca de Steam | Sí, sin iniciar sesión | No aparece |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Sí, en un prefijo de Wine en Linux | No aparece |
| Microsoft Store y PC Game Pass | Sí, en Windows | No aparece |
| Emulación | Sí | No aparece |
| Tiempo de juego | Estadísticas, diario, resumen del año | Tiempo jugado en la página de cada juego |
| Modo consola | Sí, con temas | Sí |
| Guardados en la nube | Epic y GOG, en beta | Sí |
| Copias de partidas guardadas | Ludusavi, después de cada sesión | No aparece |
| La misma biblioteca en varios PC | Sí, con una carpeta o una cuenta en la nube | No aparece |
| Importar desde el otro lanzador | Sí, en Linux | No aplica |

La columna de Heroic sale de su [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), su [sitio web](https://heroicgameslauncher.com) y sus [notas de versión](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), actualizadas a noviembre de 2026. "No aparece" significa que el README no lo menciona. Heroic añadió el modo consola en la versión 2.21 (abril de 2026) y ZOOM Platform en enero de 2026, y publicó una versión casi cada mes en 2026.

## ¿Qué tienen en común Heronite y Heroic?

Los dos usan las mismas herramientas de código abierto para las tiendas: legendary para Epic Games, gogdl para GOG y nile para Amazon Games.

Los dos son GPL-3.0 y ejecutan juegos de Windows en Linux con Wine o Proton, con un gestor de Wine. Los dos tienen una cola de descargas, carátulas de SteamGridDB y un sitio para juegos que no son de tiendas.

## ¿Cuál deberías elegir?

### Elige Heroic si…

- **Usas macOS.** Heroic funciona en macOS 14 o posterior, y allí ejecuta juegos de Windows con Crossover. Heronite no tiene versión para macOS.
- **Quieres extras de las tiendas.** Las versiones recientes de Heroic añadieron pantallas de ofertas, logros de GOG en la página del juego y soporte experimental de ZOOM Platform en Linux.
- **Quieres una configuración de Wine y Steam Deck probada.** El sitio de Heroic destaca los ajustes automáticos de Wine y el soporte de Steam Deck. Heronite es el proyecto más joven.
- **Necesitas otro idioma.** El README de Heroic dice que está traducido a casi 40 idiomas. Heronite está en inglés, portugués (Brasil), español y alemán.
- **Quieres versiones frecuentes.** Heroic publica versiones a menudo, lo que ayuda cuando una tienda cambia algo.

### Elige Heronite si…

- **Quieres todas las fuentes en una biblioteca.** Heronite trae tu biblioteca de Steam sin iniciar sesión, detecta emuladores y escanea tus carpetas de ROMs.
- **Juegas a Battle.net, EA app, Ubisoft Connect o Rockstar.** Sus juegos se unen a la misma lista en Linux y Windows. En Linux, cada app de tienda se ejecuta en su propio prefijo de Wine (una carpeta de Windows aparte).
- **Quieres una app más ligera.** Heronite usa unos 190 MB de memoria en reposo y muestra la biblioteca en unos 215 ms ([rendimiento](/es/features/performance/)).
- **Quieres un historial de juego más completo.** Heronite registra cada sesión: [estadísticas](/es/features/play-time-tracking/) por semana, mes y año, una meta anual de backlog, un diario junto a tus capturas y un resumen del año.
- **Quieres un modo consola que puedas personalizar.** El [modo consola](/es/features/console-mode/) de Heronite tiene ocho diseños y siete temas que puedes editar y compartir como archivo.
- **Tienes una biblioteca grande.** Agrupa por estado, tienda, género, serie o año, y guarda filtros como vistas, por ejemplo Jugando ahora o Backlog. Mira la [biblioteca de juegos](/es/features/game-library/).
- **Quieres Steam en el mismo lanzador en Windows.** En Windows, Heronite maneja los juegos de Steam y de Microsoft Store junto a Epic, GOG y Amazon. Recoge los juegos ya instalados por el Epic Games Launcher, GOG Galaxy o la app de Amazon Games.
- **Juegas en varios PC.** **Ajustes → Nube** mantiene una sola biblioteca en cada uno, por ejemplo en el Linux y el Windows de un arranque dual ([partidas guardadas y copias](/es/features/saves-and-backups/)).

## ¿Cómo cambio de Heroic a Heronite?

En Linux, Heronite importa tu configuración de Heroic. Solo lee los archivos de Heroic, así que Heroic sigue funcionando y puedes usar los dos.

1. **Inicia Heronite.** Si existe `~/.config/heroic`, Heronite copia sus datos una vez. Pasan tus inicios de sesión en las tiendas, los juegos que añadiste a mano con sus ajustes, y tus ajustes.
2. **Activa la importación de Heroic.** En **Ajustes → Otros launchers**, activa **Importar sus juegos** en Heroic. Heronite mantiene tus juegos añadidos e instalados sincronizados con la instalación normal de Heroic o con su Flatpak.
3. **Revisa tus juegos de tiendas instalados.** Heronite lee los registros de Heroic de los juegos de Epic, GOG y Amazon que instaló. Aparecen como instalados, en las mismas carpetas, cuando inicias sesión en la tienda.

Heronite se salta los juegos de Steam que lista Heroic y los trae con su importación de Steam, así que nada aparece dos veces.

> **Nota.** Puede que Heroic haya cifrado la clave de SteamGridDB que importó Heronite. Si las carátulas no cargan, pega la clave otra vez en **Ajustes → Metadatos → Clave de API de SteamGridDB**.

**Siguiente:** [descarga Heronite](/es/download/) y lee [Tiendas y launchers](/es/docs/stores-and-launchers/).
