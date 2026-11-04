---
title: "Lanzador de juegos para todas las tiendas | Heronite"
description: "Reúne todas las tiendas en una biblioteca en Linux y Windows: inicia sesión en Epic, GOG y Amazon, lee Steam sin iniciar sesión e importa Heroic o Lutris."
eyebrow: Tiendas y launchers
headline: "Un lanzador de juegos para todas las tiendas"
lead: "Heronite es un lanzador de juegos gratuito para todas las tiendas. Ejecuta Steam, Epic Games, GOG y Amazon Games en Linux y Windows, y cuatro apps de tienda más en Linux."
navLabel: Tiendas y launchers
summary: "Inicia sesión en Epic, GOG y Amazon, lee Steam sin iniciar sesión, ejecuta Battle.net y más en Linux, e importa otros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "La Biblioteca del modo consola de Heronite: una cuadrícula de carátulas, desde A Plague Tale, Alan Wake y Baldur's Gate 3 hasta Black Myth: Wukong, con los filtros Mostrar, Ordenar y Estado arriba y 207 juegos en la lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam sin iniciar sesión
    text: Heronite encuentra tus bibliotecas de Steam y las mantiene sincronizadas.
  - title: Una sola cola de descargas
    text: Inicia sesión una vez en cada tienda y gestiona todos los juegos desde una cola.
  - title: Cuatro tiendas más en Linux
    text: Cada app de tienda se ejecuta en su propio prefijo de Wine.
  - title: Importa otros launchers
    text: Los juegos de Heroic, Lutris, Bottles y Faugus entran y se mantienen sincronizados.
faq:
  - q: ¿Puedo usar Epic Games y GOG en un solo launcher?
    a: Sí. Inicia sesión en cada tienda en la página de **Tiendas** y una sola cola de descargas se encarga de ambas. Mira [Epic en Linux](/guides/epic-games-on-linux/) y [GOG en Linux](/guides/gog-on-linux/).
  - q: ¿Necesito iniciar sesión en Steam?
    a: No. Heronite lee tus bibliotecas de Steam sin iniciar sesión. Mira [cómo las encuentra](#cómo-encuentra-heronite-mi-biblioteca-de-steam).
  - q: ¿Importar desde Heroic o Lutris cambiará sus datos?
    a: No. Tus datos de Heroic y Lutris no se tocan. Mira [la sección de importación](#puedo-importar-juegos-de-heroic-lutris-bottles-o-faugus).
  - q: ¿Battle.net, EA app, Ubisoft Connect y Rockstar funcionan en Windows?
    a: No. En Windows, por ahora usa las apps de esas tiendas. Heronite las ejecuta en Linux. Mira [Battle.net en Linux](/guides/battle-net-on-linux/) y [EA app, Ubisoft y Rockstar en Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## ¿Qué tiendas son compatibles con Heronite?

| Tienda o launcher | Linux | Windows | Cómo funciona |
|---|---|---|---|
| Steam | Sí | Sí | Heronite lee tus bibliotecas, sin iniciar sesión |
| Epic Games | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| GOG | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| Amazon Games | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| Battle.net | Sí | No, usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| EA app | Sí | No, usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| Ubisoft Connect | Sí | No, usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| Rockstar Games | Sí | No, usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |

Los juegos emulados y los programas que añades a mano se suman a la misma biblioteca. Mira la [biblioteca de juegos](/es/features/game-library/) y la [emulación](/es/features/emulation/).

## ¿Cómo inicio sesión en Epic, GOG y Amazon?

1. Abre la página de **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Inicia sesión en cada tienda en su página de inicio de sesión, que se muestra en una ventana pequeña.
3. Pulsa **Instalar** o **Importar** en un juego.

Una sola cola de descargas se encarga de instalar, actualizar, reparar y desinstalar. También mueve e importa juegos. Heronite pausa las descargas sin conexión, reintenta las que fallan y busca actualizaciones cada 3 horas.

Tus inicios de sesión se quedan en tu PC y solo van a las tiendas. Si la ventana de inicio de sesión no se abre, usa el **método del navegador** en la página de **Tiendas**. Mira [Tiendas y launchers](/es/docs/stores-and-launchers/).

Heronite descarga las herramientas de código abierto que usa Heroic: [legendary](https://github.com/derrod/legendary) para Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para GOG y [nile](https://github.com/imLinguin/nile) para Amazon Games. Los pasos de cada tienda están en las guías de [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/).

> **Consejo.** En Windows, los juegos ya instalados por Epic Games Launcher, GOG Galaxy o la app de Amazon Games entran sin volver a descargarlos.

## ¿Cómo encuentra Heronite mi biblioteca de Steam?

Heronite busca Steam en los lugares habituales. En Linux revisa la instalación normal y las versiones en Flatpak y Snap. En Windows encuentra Steam en el registro.

Steam sigue iniciando sus juegos.

![La página de un juego en la Colección de Heronite, con una fila Biblioteca que dice Steam, el estado Jugando y un botón Jugar junto a la carátula.](../../../assets/screenshots/collection.webp)

*La página de un juego de Steam, junto a juegos de otras tiendas.*

## ¿Cómo ejecuto un trainer con un juego de Steam en Windows?

Heronite puede ejecutar tus scripts y programas, como los trainers, junto a un juego de Steam.

## ¿Puedo ejecutar Battle.net, EA, Ubisoft y Rockstar en Linux?

Sí. Heronite instala la app de cada tienda en su propio prefijo de Wine, en `~/Games/Heronite/Prefixes/<store>`. Inicia sesión e instala juegos en esa app. Los juegos aparecen en tu biblioteca y se inician desde Heronite con [Wine y Proton](/es/features/wine-and-proton/).

Paso a paso: [Battle.net](/es/guides/battle-net-on-linux/) y [EA app, Ubisoft Connect y Rockstar](/es/guides/ea-app-ubisoft-rockstar-on-linux/) en Linux.

## ¿Puedo importar juegos de Heroic, Lutris, Bottles o Faugus?

En Linux, sí. Cada origen puede ser la instalación normal o el Flatpak. Heronite solo lee sus archivos y, en el primer inicio, copia una vez los datos de Heroic.

| Launcher | Qué se importa |
|---|---|
| Heroic | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris | Los juegos de su biblioteca |
| Bottles | Los programas de cada botella |
| Faugus | Los juegos de su lista |

Heronite se salta sus juegos de Steam, porque la importación de Steam ya los tiene. Mira cómo se compara en [Heronite vs Heroic](/es/compare/heroic/), [vs Lutris](/es/compare/lutris/) y [vs Playnite](/es/compare/playnite/).

## ¿Cómo añado un juego que no es de una tienda?

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa a mano, o indica a Heronite una carpeta para añadir todos los juegos que encuentre en ella. Eso cubre los programas de Windows y, en Linux, los AppImage, los scripts de inicio y los programas nativos.

![El diálogo para añadir un juego con campos para el título, la carátula y el arte de fondo, la plataforma Windows, el prefijo de Wine y la versión de Proton, y el ejecutable que se lanza.](../../../assets/screenshots/add-game.webp)

*Para los juegos de Epic, GOG y Amazon, usa **Instalar** o **Importar** en la página de **Tiendas**.*

Siguiente: [descarga Heronite](/es/download/) y añade tu primera tienda.
