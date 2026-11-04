---
title: "Alternativa a Heroic: Heronite vs Heroic Games Launcher"
description: "Una alternativa a Heroic para Linux y Windows: compara Steam, emuladores y uso de memoria, mira cuándo gana Heroic e importa tus juegos de Heroic."
eyebrow: Comparativa
headline: "Heronite vs Heroic: una alternativa a Heroic con Steam y emuladores"
lead: "Heronite cubre Epic, GOG y Amazon como Heroic, y añade Steam, emuladores y tus propios juegos."
navLabel: Heronite vs Heroic
summary: "Heronite vs Heroic: en qué se diferencian, cuándo es mejor Heroic y cómo importar tus juegos de Heroic en Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "La paleta Ctrl+K de Heronite buscando “contr”: Control de Epic y CONTROL Ultimate Edition de Steam en la misma lista, con el tiempo de juego y acciones para jugar, abrir los ajustes o la carpeta del juego."
og: /og/heroic.jpg
updated: 2026-11-04
highlights:
  - title: "Las mismas herramientas"
    text: "Ambos usan legendary, gogdl y nile."
  - title: "También Steam y emuladores"
    text: "Steam, juegos emulados y tus propios juegos comparten una biblioteca."
  - title: "Importa tu configuración de Heroic"
    text: "En Linux pasan tus inicios de sesión y tus juegos añadidos."
  - title: "Sin navegador incluido"
    text: "Una app nativa en Rust, con unos 190 MB de memoria en reposo."
faq:
  - q: "¿Puede Heronite importar mi biblioteca de Heroic?"
    a: "Sí, en Linux: pasan tus inicios de sesión, tus juegos añadidos y tus ajustes. [Mira los pasos](#cómo-cambio-de-heroic-a-heronite)."
  - q: "¿Cuál es la diferencia entre Heronite y Heroic?"
    a: "Heronite es una app nativa en Rust con Steam, emuladores y un historial de juego detallado. Heroic es una app Electron que funciona en macOS y lleva más tiempo en el mercado."
  - q: "¿Debo usar Heronite o Heroic en Linux?"
    a: "Usa Heroic si quieres guardados en la nube o solo juegas Epic, GOG y Amazon. Usa Heronite para Steam, emuladores y un solo launcher en Linux y Windows."
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

**En resumen:** elige Heroic si usas macOS, o si quieres guardados en la nube y un launcher centrado en Epic, GOG y Amazon. Elige Heronite si quieres Steam, emuladores y tus propios juegos en una biblioteca, una app más ligera, o el mismo launcher en Linux y Windows.

## Comparación rápida

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux, Windows 10/11, macOS 14 o posterior |
| Hecho con | Rust, dibujado en la GPU, sin navegador incluido | Electron, TypeScript y React |
| Epic, GOG, Amazon | Sí | Sí |
| Biblioteca de Steam | Sí, sin iniciar sesión | No aparece |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Solo en Linux, en un prefijo de Wine | No aparece |
| Emulación | Sí | No aparece |
| Tiempo de juego | Estadísticas, diario, resumen del año | Tiempo jugado en la página de cada juego |
| Modo consola | Sí, con temas | Sí, desde la versión 2.21 (abril de 2026) |
| Copias de partidas guardadas | Ludusavi, después de cada sesión | Sincronización de guardados en la nube |
| Importar desde el otro launcher | Sí, en Linux | No aplica |

La columna de Heroic proviene de su [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), su [sitio web](https://heroicgameslauncher.com) y sus [notas de versión](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), actualizadas a noviembre de 2026. "No aparece" significa que el README no lo lista.

## ¿Qué tienen en común Heronite y Heroic?

Ambos usan las mismas herramientas de tiendas de código abierto: legendary para Epic Games, gogdl para GOG y nile para Amazon Games. Tu inicio de sesión va solo a las tiendas.

Ambos son GPL-3.0 y ejecutan juegos de Windows en Linux con Wine o Proton, con un Gestor de Wine. Ambos tienen una cola de descargas, portadas de SteamGridDB y un lugar para juegos que no son de tiendas.

## ¿Cuál debes elegir?

### Elige Heroic si…

- **Usas macOS.** Heroic funciona en macOS 14 o posterior, y allí ejecuta juegos de Windows con Crossover. Heronite no tiene versión para macOS.
- **Quieres guardados en la nube.** Heroic lista la sincronización de guardados en la nube. Heronite hace copias locales con Ludusavi, una herramienta opcional.
- **Quieres extras de tiendas.** Las versiones recientes de Heroic añadieron pantallas de ofertas y logros de GOG en la página del juego, y soporte experimental de ZOOM Platform (Linux, desde enero de 2026).
- **Quieres una configuración de Wine y Steam Deck probada.** El sitio de Heroic destaca los ajustes automáticos de Wine y el soporte de Steam Deck. Heronite es el proyecto más joven; mira su [guía de la Steam Deck](/es/guides/steam-deck/).
- **Necesitas otro idioma.** El README de Heroic dice que está traducido a casi 40 idiomas. Heronite habla inglés, portugués (Brasil), español y alemán.
- **Quieres versiones frecuentes.** Heroic publicó una versión casi cada mes en 2026, lo cual ayuda cuando una tienda cambia algo.
- **Heroic ya te cubre.** Solo juegas Epic, GOG y Amazon y funciona.

### Elige Heronite si…

- **Quieres todas las fuentes en una biblioteca.** Heronite lee Steam sin iniciar sesión, detecta emuladores y escanea tus carpetas de ROMs.
- **Juegas Battle.net, EA app, Ubisoft Connect o Rockstar en Linux.** Cada cliente se ejecuta en su propio prefijo de Wine y sus juegos se unen a la misma lista.
- **Quieres una app más ligera.** Heroic incluye un navegador Chromium. Heronite es un único proceso nativo en Rust que usa unos 190 MB de memoria en reposo y muestra la biblioteca en unos 215 ms ([rendimiento](/es/features/performance/)).
- **Quieres un historial de juego más profundo.** Heronite registra cada sesión: [estadísticas](/es/features/play-time-tracking/) por semana, mes y año, una meta anual de backlog, un diario junto a tus capturas y un resumen del año.
- **Quieres un modo consola que puedas rediseñar.** El [modo consola](/es/features/console-mode/) de Heronite tiene ocho diseños y siete temas que puedes editar y compartir como archivo.
- **Tienes una biblioteca grande.** Agrupa por estado, tienda, género, serie o año y guarda filtros como vistas, por ejemplo Jugando ahora o Backlog; Heroic ofrece categorías personalizadas. Mira la [biblioteca de juegos](/es/features/game-library/).
- **Quieres un solo launcher en Linux y Windows.** En Windows maneja Steam, Epic, GOG y Amazon, y recoge los juegos instalados por Epic Games Launcher, GOG Galaxy o la app de Amazon Games. Heroic también funciona en Windows.

## ¿Cómo cambio de Heroic a Heronite?

En Linux, Heronite importa tu configuración de Heroic. Solo lee los archivos de Heroic y nunca escribe en ellos, así que Heroic sigue funcionando y puedes usar los dos.

1. **Inicia Heronite.** Si existe `~/.config/heroic`, Heronite copia sus datos una vez. Pasan tus inicios de sesión en las tiendas, los juegos que añadiste a mano con sus ajustes, y tus ajustes.
2. **Revisa tus juegos de tiendas instalados.** Heronite lee los registros de Heroic de los juegos de Epic, GOG y Amazon que instaló. Aparecen como instalados, en las mismas carpetas, una vez que inicias sesión en la tienda.

Tras el primer inicio, Heronite mantiene sincronizada con Heroic la lista de juegos añadidos e instalados. Funciona con la instalación normal de Heroic y con su Flatpak.

Si Heroic lista un juego de Steam, Heronite lo deja a su propia importación de Steam, así que nada aparece dos veces.

> **Nota.** Puedes seguir añadiendo juegos en Heroic. Heronite los recoge.

> **Nota.** Una clave de SteamGridDB importada de Heroic puede haber sido cifrada por Heroic. Si las portadas no cargan, pega la clave otra vez en Ajustes.

**Siguiente:** [descarga Heronite](/es/download/) y lee [Tiendas y launchers](/es/docs/stores-and-launchers/).
