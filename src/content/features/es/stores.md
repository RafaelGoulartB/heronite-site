---
title: "Lanzador de juegos para todas las tiendas | Heronite"
description: "Un lanzador de juegos para todas las tiendas en Linux y Windows: Steam sin iniciar sesión, Epic, GOG y Amazon en una biblioteca, e importa Heroic y Lutris."
eyebrow: Tiendas y launchers
headline: "Un lanzador de juegos para todas las tiendas"
lead: "Heronite ejecuta Steam, Epic Games, GOG y Amazon Games, y las apps de Battle.net, EA app, Ubisoft Connect y Rockstar Games, en Linux y Windows. En Windows también añade los juegos de Microsoft Store y PC Game Pass."
navLabel: Tiendas y launchers
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect y Rockstar en una biblioteca, los juegos de la app de Xbox en Windows e importación de otros lanzadores."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "La Biblioteca del modo consola de Heronite: una cuadrícula de carátulas, desde A Plague Tale, Alan Wake y Baldur's Gate 3 hasta Black Myth: Wukong, con los filtros Mostrar, Ordenar y Estado arriba y 207 juegos en la lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Actualizaciones cada 3 horas
    text: Heronite busca actualizaciones de los juegos y reintenta las descargas fallidas.
  - title: Apps de tienda en ambos sistemas
    text: En Linux, cada app corre en su propio prefijo de Wine; en Windows, tal cual.
  - title: Trainers con juegos de Steam
    text: En Windows, Heronite abre un trainer con un juego de Steam y lo cierra después.
  - title: Importa otros lanzadores
    text: Heroic, Lutris, Bottles y Faugus en Linux y Playnite en Windows se mantienen sincronizados.
faq:
  - q: ¿Puedo usar Epic Games y GOG en un solo lanzador?
    a: Sí. Inicia sesión en cada tienda en la página **Tiendas** y una sola cola de descargas se encarga de ambas. Mira [Epic en Linux](/guides/epic-games-on-linux/) y [GOG en Linux](/guides/gog-on-linux/).
  - q: ¿Heronite funciona con Steam instalado como Flatpak o Snap?
    a: Sí. En Linux, Heronite encuentra la instalación normal de Steam, el Flatpak y el Snap.
  - q: ¿Battle.net, EA app, Ubisoft Connect y Rockstar funcionan en Windows?
    a: Sí. En Windows, Heronite ejecuta esas apps de tienda sin Wine. Inicias sesión e instalas los juegos en cada app, y Heronite inicia los juegos y cuenta su tiempo de juego.
  - q: ¿Heronite es gratis?
    a: Sí. Heronite es gratis y de código abierto bajo la licencia GPL-3.0, sin cuentas, anuncios ni telemetría.
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## ¿Qué tiendas son compatibles con Heronite?

| Tienda o lanzador | Linux | Windows | Cómo funciona |
|---|---|---|---|
| Steam | Sí | Sí | Heronite trae tus bibliotecas |
| Epic Games | Sí | Sí | Inicias sesión e instalas desde Heronite |
| GOG | Sí | Sí | Inicias sesión e instalas desde Heronite |
| Amazon Games | Sí | Sí | Inicias sesión e instalas desde Heronite |
| Battle.net | Sí | Sí | App de la tienda, con Wine en Linux |
| EA app | Sí | Sí | App de la tienda, con Wine en Linux |
| Ubisoft Connect | Sí | Sí | App de la tienda, con Wine en Linux |
| Rockstar Games | Sí | Sí | App de la tienda, con Wine en Linux |
| Microsoft Store y PC Game Pass | No | Sí | Heronite trae los juegos de la app de Xbox |

Los juegos emulados y los programas que añades a mano entran en la misma biblioteca. Mira la [biblioteca de juegos](/es/features/game-library/) y la [emulación](/es/features/emulation/).

## ¿Cómo inicio sesión en Epic, GOG y Amazon?

1. Abre la página **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Inicia sesión en cada tienda en la pequeña ventana de inicio de sesión.
3. Pulsa **Instalar** o **Importar** en un juego.

Si la ventana de inicio de sesión no se abre, usa el **método del navegador** en la página **Tiendas**. Tus inicios de sesión se quedan en tu PC y solo van a las tiendas. Mira [Tiendas y launchers](/es/docs/stores-and-launchers/).

En Windows, los juegos que ya instalaron el Epic Games Launcher, GOG Galaxy o la app de Amazon Games entran sin volver a descargarse. Los pasos de cada tienda están en las guías de [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/).

Heronite descarga las herramientas de código abierto que usa Heroic para estas tiendas: [legendary](https://github.com/derrod/legendary) para Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para GOG y [nile](https://github.com/imLinguin/nile) para Amazon.

## ¿Cómo descarga y actualiza juegos Heronite?

Una sola cola de descargas instala, actualiza, repara y desinstala tus juegos de Epic, GOG y Amazon. La misma cola mueve e importa juegos. Heronite pausa las descargas sin conexión, reintenta las que fallan y busca actualizaciones cada 3 horas.

## ¿Necesito iniciar sesión en Steam?

No. Heronite trae tus bibliotecas de Steam sin iniciar sesión y las mantiene sincronizadas, y Steam sigue iniciando sus juegos.

En Linux, Heronite revisa la instalación normal de Steam, el Flatpak y el Snap. En Windows, encuentra Steam en el registro.

![La página de un juego en la Colección de Heronite, con una fila Biblioteca que dice Steam, el estado Jugando y un botón Jugar junto a la carátula.](../../../assets/screenshots/collection.webp)

*La página de un juego de Steam, junto a juegos de otras tiendas.*

## ¿Cómo ejecuto un trainer con un juego de Steam en Windows?

1. Abre los **Ajustes del juego**. Un juego de Steam se abre en la pestaña **Inicio**.
2. En **Programas junto al juego**, pulsa **Añadir programa** y elige el trainer.
3. Juega desde Heronite.

Heronite abre el trainer con el juego y lo cierra cuando el juego termina. La misma pestaña tiene **Scripts** para ejecutar antes de que empiece el juego y después de que se cierre. Un juego iniciado desde el propio Steam no ejecuta nada de esto.

## ¿Puedo jugar a juegos de Battle.net, EA, Ubisoft y Rockstar?

Sí, en Linux y Windows. Inicia sesión e instala los juegos en la app de la tienda. Los juegos aparecen en tu biblioteca, se inician a través de la app de la tienda y cuentan su tiempo de juego.

En Linux, Heronite instala cada app de tienda en su propio prefijo de Wine (una carpeta de Windows aparte), en `~/Games/Heronite/Prefixes/<tienda>`, y la ejecuta con [Wine y Proton](/es/features/wine-and-proton/). Paso a paso: [Battle.net](/es/guides/battle-net-on-linux/) y [EA app, Ubisoft Connect y Rockstar](/es/guides/ea-app-ubisoft-rockstar-on-linux/) en Linux.

En Windows, Heronite ejecuta la app de la tienda tal cual, sin Wine. **Instalar** con el nombre de la app descarga el instalador oficial y lo ejecuta.

## ¿Cómo añado juegos de Microsoft Store y PC Game Pass?

En Windows, Heronite los añade solo: los juegos que instaló la app de Xbox o Microsoft Store, comprados o de PC Game Pass. No hace falta iniciar sesión. La app de Xbox sigue instalándolos y actualizándolos, y Heronite los inicia y cuenta su tiempo de juego.

La página **Xbox** en **Tiendas** muestra si la app de Xbox está instalada y lista los juegos encontrados. Pulsa **Leer juegos ahora** después de instalar uno. Desinstala estos juegos en la app de Xbox.

## ¿Puedo importar juegos de Heroic, Lutris, Bottles, Faugus o Playnite?

Sí: Heroic, Lutris, Bottles y Faugus en Linux, y Playnite en Windows. Activa cada uno en **Ajustes → Otros launchers**. Heronite solo lee sus archivos, así que sus datos no se tocan, y en el primer inicio copia una vez los datos de Heroic.

| Lanzador | Qué se importa |
|---|---|
| Heroic (Linux) | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris (Linux) | Los juegos de su biblioteca |
| Bottles (Linux) | Los programas de cada botella |
| Faugus (Linux) | Los juegos de su lista |
| Playnite (Windows) | Los juegos instalados que no están ocultos, con carátulas y tiempo de juego |

Cada lanzador de Linux puede ser la instalación normal o el Flatpak. Playnite sigue iniciando sus juegos.

Heronite se salta sus juegos de Steam, porque la importación de Steam ya los tiene. Mira cómo se compara en [Heronite vs Heroic](/es/compare/heroic/), [vs Lutris](/es/compare/lutris/) y [vs Playnite](/es/compare/playnite/).

## ¿Cómo añado un juego que no es de una tienda?

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa a mano, o indica a Heronite una carpeta para añadir todos los juegos que encuentre en ella. Eso cubre los programas de Windows y, en Linux, los AppImage, los scripts de inicio y los programas nativos. Los juegos de Epic, GOG y Amazon entran con **Instalar** o **Importar** en la página **Tiendas**.

![El diálogo para añadir un juego con campos para el título, la carátula y el arte de fondo, la plataforma Windows, el prefijo de Wine y la versión de Proton, y el ejecutable que se lanza.](../../../assets/screenshots/add-game.webp)

*El diálogo Añadir un juego para un programa de Windows.*

Siguiente: [descarga Heronite](/es/download/) y añade tu primera tienda.
