---
title: "Lanzador de juegos y biblioteca para Linux | Heronite"
description: "Gestiona todos tus juegos de PC en una biblioteca en Linux y Windows. Agrupa, filtra, busca y edita en lote juegos de Steam, Epic, GOG, Amazon y emulados."
eyebrow: Biblioteca de juegos
headline: "Un gestor de biblioteca de juegos para Linux y Windows"
lead: "Heronite es un lanzador de juegos y gestor de biblioteca para Linux y Windows. Su Colección reúne todas las tiendas, emuladores y juegos sueltos en un solo lugar."
navLabel: Biblioteca de juegos
summary: "Una Colección para todas las tiendas, emuladores y juegos sueltos, con vistas, grupos, edición en lote y paleta de comandos."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite: carátulas de juegos agrupadas en Jugando y En curso con el tiempo de juego bajo cada una, y ELDEN RING abierto con su carátula, el botón Jugar, los detalles y una línea de tiempo de sesiones de juego."
og: /og/game-library.jpg
updated: 2026-11-04
highlights:
  - title: Agrupada a tu manera
    text: Agrupa por estado, tienda, género o serie, en lista o en cuadrícula.
  - title: Vistas guardadas
    text: Guarda filtros y orden como presets, por ejemplo Jugando ahora, Backlog o Finalizado.
  - title: Encuentra todo al instante
    text: La búsqueda perdona errores, y Ctrl+K abre cualquier juego, página o acción.
  - title: Un diario para cada juego
    text: Escribe notas en la misma línea de tiempo que tus sesiones de juego.
faq:
  - q: ¿Puedo usar Heronite en la Steam Deck?
    a: Sí. Heronite funciona en SteamOS como AppImage. La [guía de la Steam Deck](/guides/steam-deck/) explica cómo configurarlo.
  - q: ¿Importar desde Heroic o Lutris cambia sus archivos?
    a: No. Heronite solo lee sus archivos y nunca escribe en ellos.
  - q: ¿Heronite encuentra carátulas para los juegos emulados?
    a: Sí. Cada juego añadido desde una carpeta de ROMs recibe arte. Una clave gratuita de SteamGridDB añade carátulas de la comunidad.
  - q: ¿Puedo deshacer una edición en lote?
    a: Sí. Pulsa `Ctrl+Z` para deshacer el último cambio.
related:
  - /features/stores/
  - /features/play-time-tracking/
  - /docs/getting-started/
---

## ¿Cómo reúno todos mis juegos en una sola Colección?

- **Steam:** Heronite trae tus bibliotecas de [Steam](/es/features/stores/) sin iniciar sesión.
- **Epic Games, GOG y Amazon Games:** inicia sesión en la página **Tiendas** y entra toda la biblioteca, instalada o no.
- **Battle.net, EA app, Ubisoft Connect y Rockstar Games:** aparecen los juegos que instalas en cada app de la tienda. En Linux, la app de la tienda se ejecuta en su propio prefijo de Wine (una carpeta de Windows aparte).
- **Microsoft Store y PC Game Pass (Windows):** los juegos que instaló la app de Xbox entran sin iniciar sesión.
- **Emuladores:** Heronite [los detecta](/es/features/emulation/) y escanea tus carpetas de ROMs.
- **Otros launchers:** los juegos de Heroic, Lutris, Bottles y Faugus en Linux, y los de Playnite en Windows, entran y se mantienen sincronizados.

## ¿Cómo añado un juego que no es de una tienda?

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> (o **Añadir un juego**) para añadir:

- Un programa de Windows (`.exe`), que en Linux se ejecuta con [Wine o Proton](/es/features/wine-and-proton/)
- Un programa nativo de Linux, un AppImage o un script de inicio
- Un juego de navegador, por su dirección web
- Una ROM, o una carpeta entera de ROMs

Para añadir muchos juegos a la vez, indica a Heronite una carpeta.

![El diálogo para añadir un juego con campos para el título, el arte cuadrado y el fondo, la plataforma, el prefijo de Wine y la versión de Proton, y el programa que se ejecuta.](../../../assets/screenshots/add-game.webp)

*Añadir un juego de Windows en Linux.*

## ¿Cómo agrupo, filtro y ordeno mis juegos?

**Foco** es una lista con un panel de detalles: carátula, capturas, descripción y una línea de tiempo de sesiones de juego. La **cuadrícula** muestra solo carátulas.

En los dos diseños, agrupa los juegos por:

- Estado, como Jugando, En curso, Pendiente o Finalizado
- Tienda
- Género
- Serie
- Año de lanzamiento u otro campo

Guarda filtros y orden como **vistas**, por ejemplo *Jugando ahora*, *Backlog*, *Finalizado* o *Favoritos*.

## ¿Cómo busco en la Colección?

Empieza a escribir en cualquier parte de la Colección. La búsqueda perdona pequeños errores, y <kbd>Enter</kbd> juega o instala el primer resultado.

La **paleta de comandos** (<kbd>Ctrl</kbd> <kbd>K</kbd>) abre cualquier página, ejecuta cualquier acción y lanza cualquier juego con parte de su nombre. Pulsa <kbd>→</kbd> sobre un juego para ver sus acciones, como abrir sus ajustes o su carpeta de instalación.

![La paleta de comandos buscando "contr", con Control y otros juegos que coinciden, y acciones para jugar Control, abrir sus ajustes o su carpeta.](../../../assets/screenshots/command-palette.webp)

*Buscar "contr" en la paleta de comandos.*

## ¿Cómo edito muchos juegos a la vez?

1. Selecciona juegos con <kbd>Espacio</kbd>, <kbd>Shift</kbd> + flechas o <kbd>Ctrl</kbd> <kbd>A</kbd>.
2. Pulsa <kbd>F3</kbd>.
3. Cambia su estado, géneros, series, compañías y más.

<kbd>Ctrl</kbd> <kbd>Z</kbd> deshace el cambio. Puedes renombrar y fusionar géneros, compañías y series, así *RPG* y *Role-playing (RPG)* pasan a ser uno solo.

## ¿De dónde salen las carátulas y los detalles de los juegos?

Las carátulas, los fondos y los logos vienen de las tiendas y de los metadatos de Steam y Lutris. Las descripciones y las fechas de lanzamiento, también. Dos claves gratuitas y opcionales añaden más:

- [SteamGridDB](https://www.steamgriddb.com) para carátulas de la comunidad, buenas para juegos emulados y sin DRM
- [IGDB](https://www.igdb.com) para descripciones, géneros y series

Cada juego muestra los tiempos de **How Long To Beat**, las valoraciones de **ProtonDB** en Linux, el **estado del anti-cheat** según Are We Anti-Cheat Yet? y los **logros** de Steam y RetroAchievements. Añade las claves en **Ajustes → Metadatos**; [Metadatos y arte](/es/docs/metadata-and-art/) tiene los pasos.

## ¿Puedo guardar notas sobre un juego?

Sí. Cada juego tiene un **diario** para notas, como dónde lo dejaste o qué te pareció un final. Comparte la línea de tiempo con tus [sesiones de juego](/es/features/play-time-tracking/) y las capturas que hiciste.
