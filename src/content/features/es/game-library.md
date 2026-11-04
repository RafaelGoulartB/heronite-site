---
title: "Lanzador de juegos y biblioteca para Linux | Heronite"
description: "Gestiona todos tus juegos de PC en una biblioteca en Linux y Windows. Agrupa, filtra, busca y edita juegos de Steam, Epic, GOG, Amazon y emulados."
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
  - title: Una lista, todas las fuentes
    text: Tiendas, emuladores y juegos sueltos, lado a lado.
  - title: Agrupada a tu manera
    text: Agrupa por estado, tienda, género o serie, en lista o en cuadrícula.
  - title: Vistas guardadas
    text: Guarda filtros y orden como Jugando ahora, Backlog o Terminados.
  - title: Encuentra todo al instante
    text: La búsqueda perdona los errores y Ctrl+K abre cualquier juego, página o acción.
faq:
  - q: ¿Hay un gestor de biblioteca para Linux que junte Steam, Epic y GOG?
    a: Sí. Steam no necesita inicio de sesión. Inicia sesión en Epic Games, GOG o Amazon Games en la página de **Tiendas** y sus bibliotecas se unen a la Colección. Mira [la lista](#cómo-reúno-todos-mis-juegos-en-una-sola-colección).
  - q: ¿Importar desde Heroic o Lutris cambia sus archivos?
    a: No. Heronite importa y sincroniza juegos de Heroic, Lutris, Bottles y Faugus, y nunca escribe en sus archivos.
  - q: ¿Heronite encuentra carátulas para los juegos emulados?
    a: Sí. Todo juego añadido desde una carpeta de ROMs recibe arte. Mira [de dónde salen las carátulas](#de-dónde-salen-las-carátulas-y-los-detalles-de-los-juegos).
  - q: ¿Puedo deshacer una edición en lote?
    a: Sí. Pulsa `Ctrl+Z` para deshacer el último cambio.
related:
  - /features/stores/
  - /features/play-time-tracking/
  - /docs/getting-started/
---

## ¿Cómo reúno todos mis juegos en una sola Colección?

- **Steam:** Heronite lee tus bibliotecas de [Steam](/es/features/stores/) sin iniciar sesión.
- **Epic Games, GOG y Amazon Games:** inicia sesión en la página de **Tiendas** y entra toda la biblioteca, esté instalada o no.
- **Battle.net, EA app, Ubisoft Connect y Rockstar Games (Linux):** cada app de tienda se ejecuta en su propio prefijo de Wine y aparecen los juegos que instalas.
- **Emuladores:** Heronite [los detecta](/es/features/emulation/) y escanea tus carpetas de ROMs.
- **Otros lanzadores (Linux):** los juegos de Heroic, Lutris, Bottles y Faugus entran y se mantienen sincronizados.

## ¿Cómo añado un juego que no es de una tienda?

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> (o **Añadir un juego**) para añadir:

- un programa de Windows (`.exe`), que en Linux se ejecuta con [Wine o Proton](/es/features/wine-and-proton/),
- un programa nativo de Linux, un AppImage o un script de inicio,
- un juego de navegador, a partir de su dirección web,
- una ROM, o una carpeta entera de ROMs.

Para añadir muchos juegos a la vez, indica a Heronite una carpeta.

![El diálogo para añadir un juego con campos para el título, el arte cuadrado y el fondo, la plataforma, el prefijo de Wine y la versión de Proton, y el programa que se ejecuta.](../../../assets/screenshots/add-game.webp)

*Añadir un juego de Windows en Linux.*

## ¿Cómo agrupo, filtro y ordeno mis juegos?

**Foco** es una lista con un panel de detalles: carátula, capturas, descripción y una línea de tiempo de sesiones de juego. La **cuadrícula** muestra solo carátulas.

En cualquiera de los dos diseños puedes agrupar los juegos por:

- estado (Jugando, En curso, Pendiente, Finalizado y más),
- tienda,
- género,
- serie,
- año de lanzamiento y otros campos.

Guarda filtros y orden como **vistas**, por ejemplo *Jugando ahora*, *Backlog*, *Terminados* o *Favoritos*.

## ¿Cómo busco en la Colección?

Empieza a escribir en cualquier punto de la Colección. La búsqueda perdona pequeños errores y <kbd>Enter</kbd> juega o instala el primer resultado.

La **paleta de comandos** (<kbd>Ctrl</kbd> <kbd>K</kbd>) abre cualquier página, ejecuta cualquier acción y lanza cualquier juego con parte de su nombre. Pulsa <kbd>→</kbd> sobre un juego para ver sus acciones, como abrir sus ajustes o su carpeta de instalación.

![La paleta de comandos buscando "contr", con Control y otros juegos que coinciden, y acciones para jugar Control, abrir sus ajustes o su carpeta.](../../../assets/screenshots/command-palette.webp)

*Buscar "contr" en la paleta de comandos.*

## ¿Cómo edito muchos juegos a la vez?

1. Selecciona juegos con <kbd>Espacio</kbd>, <kbd>Shift</kbd> + flechas o <kbd>Ctrl</kbd> <kbd>A</kbd>.
2. Pulsa <kbd>F3</kbd>.
3. Cambia su estado, géneros, series, compañías y más.

<kbd>Ctrl</kbd> <kbd>Z</kbd> deshace el cambio. Puedes renombrar y fusionar géneros, compañías y series, de modo que *RPG* y *Role-playing (RPG)* pasen a ser uno solo.

## ¿De dónde salen las carátulas y los detalles de los juegos?

Las carátulas, fondos y logos vienen de las tiendas y de los metadatos de Steam y Lutris. También las descripciones y las fechas de lanzamiento. Dos claves gratuitas y opcionales añaden más:

- [SteamGridDB](https://www.steamgriddb.com) para carátulas de la comunidad, buenas para juegos emulados y sin DRM,
- [IGDB](https://www.igdb.com) para descripciones, géneros y series.

Cada juego muestra los tiempos de **How Long To Beat**, las valoraciones de **ProtonDB** en Linux, el **estado del anti-cheat** según Are We Anti-Cheat Yet? y los **logros** de Steam y RetroAchievements. Configura las claves en [Metadatos y arte](/es/docs/metadata-and-art/).

## ¿Puedo guardar notas sobre un juego?

Sí. Cada juego tiene un **diario** para notas, como dónde lo dejaste o qué te pareció un final. Comparte línea de tiempo con tus [sesiones de juego](/es/features/play-time-tracking/) y las capturas que hiciste.
