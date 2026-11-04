---
title: "Alternativa a Heroic: Heronite vs Heroic Games Launcher"
description: "Una alternativa a Heroic para Linux y Windows: compara Steam, emuladores y uso de memoria, mira cuándo gana Heroic e importa tus juegos de Heroic."
eyebrow: Comparativa
headline: "Heronite vs Heroic Games Launcher"
lead: "Heronite es una alternativa a Heroic que suma Steam, emuladores y las apps de Battle.net, EA, Ubisoft y Rockstar a tu biblioteca de Epic, GOG y Amazon. Heroic también funciona en macOS."
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
  - title: "Encuentra todo rápido"
    text: "Ctrl+K abre cualquier juego, página o acción."
  - title: "Importa tu Heroic"
    text: "En Linux pasan tus inicios de sesión y los juegos que añadiste a mano."
  - title: "Arranca en unos 215 ms"
    text: "Tiempo mediano desde que lo abres hasta ver tu biblioteca en pantalla."
faq:
  - q: "¿Puedo usar Heronite y Heroic a la vez?"
    a: "Sí. Heronite solo lee los archivos de Heroic."
  - q: "¿Es seguro iniciar sesión en las tiendas con Heronite?"
    a: "Sí. Tus inicios de sesión se quedan en tu PC y solo van a las tiendas. Escribes tu contraseña en la página de inicio de sesión de la propia tienda."
  - q: "¿Heronite funciona en la Steam Deck?"
    a: "Sí. Funciona como AppImage en el modo escritorio de SteamOS, y en el Modo Juego como juego que no es de Steam. Mira la [guía de la Steam Deck](/guides/steam-deck/)."
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

## Heronite vs Heroic: comparativa de funciones

| | Heronite | Heroic |
|---|---|---|
| Plataformas | Linux y Windows 10/11 | Linux, Windows 10/11, macOS 14 o posterior |
| Hecho con | Rust, renderizado en la GPU, sin navegador incluido | Electron, TypeScript y React |
| Memoria en reposo | Unos 190 MB | — |
| Epic, GOG, Amazon | Sí | Sí |
| Biblioteca de Steam | Sí, sin iniciar sesión | — |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Sí, con Wine en Linux | — |
| Microsoft Store y PC Game Pass | Sí, en Windows | — |
| Emulación | Sí | — |
| Tiempo de juego | Estadísticas, diario, resumen del año | Tiempo jugado en la página de cada juego |
| Modo consola | Sí, con temas | Sí |
| Guardados en la nube | Epic y GOG, en beta | Sí |
| Copias de partidas guardadas | Ludusavi, después de cada sesión | — |
| La misma biblioteca en varios PC | Sí, con una carpeta o una cuenta en la nube | — |
| Importar desde el otro lanzador | Sí, en Linux | No aplica |

La columna de Heroic sale de su [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), su [sitio web](https://heroicgameslauncher.com) y sus [notas de versión](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), actualizadas a noviembre de 2026. — = no aparece en el README, el sitio web ni las notas de versión de Heroic.

## ¿Qué tienen en común Heronite y Heroic?

Los dos son GPL-3.0 y usan las mismas herramientas de código abierto no oficiales para las tiendas: legendary para Epic Games, gogdl para GOG y nile para Amazon Games. Los dos ejecutan juegos de Windows en Linux con Wine o Proton, con un gestor de Wine. Los dos tienen una cola de descargas, carátulas de SteamGridDB y un sitio para juegos que no son de tiendas.

## ¿Cuál deberías elegir?

### Elige Heroic si…

- **Usas macOS.** Heroic funciona en macOS 14 o posterior, con los juegos de Windows a través de CrossOver.
- **Quieres extras de las tiendas.** Heroic tiene pantallas de ofertas, logros de GOG en la página del juego y soporte experimental de ZOOM Platform en Linux.
- **Quieres una configuración de Wine y Steam Deck probada.** El sitio de Heroic destaca los ajustes automáticos de Wine y el soporte de Steam Deck.
- **Necesitas otro idioma.** Heroic está traducido a casi 40 idiomas; Heronite, a inglés, portugués (Brasil), español y alemán.
- **Quieres versiones frecuentes.** Heroic publica versiones a menudo, lo que ayuda cuando una tienda cambia algo.

### Elige Heronite si…

- **Quieres todas las fuentes en una biblioteca.** Steam sin iniciar sesión, emuladores, apps de tienda y, en Windows, juegos de Microsoft Store, agrupados por estado, tienda o género ([tiendas](/es/features/stores/)).
- **Quieres una app nativa en Rust.** Sin navegador incluido, y con unos 190 MB de memoria en reposo ([rendimiento](/es/features/performance/)).
- **Quieres un historial de juego más completo.** Heronite registra cada sesión para las [estadísticas](/es/features/play-time-tracking/), una meta anual de backlog, un diario y un resumen del año.
- **Quieres un modo consola que puedas personalizar.** El [modo consola](/es/features/console-mode/) tiene ocho diseños y siete temas que puedes editar y compartir como archivo.
- **Juegas en varios PC.** **Ajustes → Nube** mantiene una sola biblioteca en cada uno, por ejemplo en los dos sistemas de un arranque dual ([partidas guardadas y copias](/es/features/saves-and-backups/)).

## ¿Cómo cambio de Heroic a Heronite?

En Linux, Heronite importa tu configuración de Heroic. Solo lee los archivos de Heroic, así que Heroic sigue funcionando y puedes usar los dos.

1. **Inicia Heronite.** Si existe `~/.config/heroic`, Heronite copia sus datos una vez: tus inicios de sesión en las tiendas, tus ajustes y los juegos que añadiste a mano con sus ajustes.
2. **Activa la importación de Heroic.** En **Ajustes → Otros launchers**, activa **Importar sus juegos** en Heroic. Heronite mantiene tus juegos añadidos e instalados sincronizados con la instalación normal de Heroic o con su Flatpak.
3. **Encuentra tus juegos de tiendas instalados.** La importación también añade los registros de Heroic de los juegos de Epic, GOG y Amazon que Heroic instaló. Aparecen como instalados, en las mismas carpetas.

Heronite se salta los juegos de Steam que lista Heroic y los trae con su importación de Steam, así que nada aparece dos veces.

Si las carátulas no cargan, pega otra vez la clave de SteamGridDB en **Ajustes → Metadatos → Clave de API de SteamGridDB**. Puede que Heroic haya cifrado la clave que importó Heronite.

**Siguiente:** [descarga Heronite](/es/download/) y lee [Tiendas y launchers](/es/docs/stores-and-launchers/).
