---
title: "Lanzador de juegos para todas las tiendas | Heronite"
description: "Un lanzador gratuito para Steam, Epic, GOG y Amazon, y Battle.net, EA, Ubisoft y Rockstar en Linux. Importa Heroic, Lutris y Bottles. Para Linux y Windows."
eyebrow: Tiendas y launchers
headline: "Todas las tiendas, *un solo lanzador*"
lead: "Steam, Epic Games, GOG y Amazon Games en un solo lugar, con Battle.net, EA app, Ubisoft Connect y Rockstar Games en Linux. Trae también tus juegos de Heroic, Lutris, Bottles y Faugus."
navLabel: Tiendas y launchers
summary: "Inicia sesión en Epic, GOG y Amazon, lee Steam sin iniciar sesión, ejecuta Battle.net y más en Linux, e importa otros launchers."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "La Biblioteca del modo consola de Heronite: una cuadrícula de carátulas, desde A Plague Tale, Alan Wake y Baldur's Gate 3 hasta Black Myth: Wukong, con los filtros Mostrar, Ordenar y Estado arriba y 207 juegos en la lista."
og: /og/stores.jpg
updated: 2026-11-01
highlights:
  - title: Steam sin iniciar sesión
    text: Heronite lee tus bibliotecas de Steam por sí solo y las mantiene sincronizadas.
  - title: Epic, GOG y Amazon
    text: Inicia sesión una vez y luego instala, actualiza, repara, mueve y desinstala desde una sola cola de descargas.
  - title: Más tiendas en Linux
    text: Battle.net, EA app, Ubisoft Connect y Rockstar Games se ejecutan cada una en su propio prefijo de Wine.
  - title: Importa otros launchers
    text: Los juegos de Heroic, Lutris, Bottles y Faugus entran y se mantienen sincronizados. Heronite nunca escribe en sus archivos.
faq:
  - q: ¿Existe un lanzador de juegos para todas las tiendas?
    a: Heronite lo es. Reúne Steam, Epic Games, GOG y Amazon Games en una sola Colección, en Linux y Windows. En Linux también ejecuta los clientes de Battle.net, EA app, Ubisoft Connect y Rockstar Games. Es gratuito y de código abierto.
  - q: ¿Puedo usar Epic Games y GOG en un solo launcher?
    a: Sí. Abre la página de **Tiendas**, inicia sesión en cada una y aparecerán todos los juegos que tienes, instalados o no. Una sola cola de descargas se encarga de instalar y actualizar los de ambas. Consulta las guías de [Epic en Linux](/guides/epic-games-on-linux/) y [GOG en Linux](/guides/gog-on-linux/).
  - q: ¿Necesito iniciar sesión en Steam?
    a: No. Heronite encuentra tus bibliotecas de Steam por su cuenta y las mantiene sincronizadas. Steam sigue siendo quien inicia sus juegos.
  - q: ¿Importar desde Heroic o Lutris cambiará sus datos?
    a: No. Heronite solo lee sus archivos. En el primer inicio copia una vez los datos de Heroic, y Heroic sigue funcionando como antes. Los juegos de Steam que ellos listan se dejan a la importación de Steam, así que nada aparece dos veces.
  - q: ¿Battle.net, EA app, Ubisoft Connect y Rockstar funcionan en Windows?
    a: En Windows, por ahora usa las apps propias de esas tiendas. En Linux, Heronite las ejecuta por ti. Consulta [Battle.net en Linux](/guides/battle-net-on-linux/) y [EA app, Ubisoft y Rockstar en Linux](/guides/ea-app-ubisoft-rockstar-on-linux/).
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

Los juegos que tienes están repartidos entre demasiadas apps. Steam guarda la mayoría, Epic regala un juego cada semana, GOG vende clásicos sin DRM y Amazon reparte los títulos de Prime Gaming. Heronite los reúne en un solo lanzador de juegos para Linux y Windows: abres una app, eliges un juego y le das a jugar.

## ¿Qué tiendas son compatibles con Heronite?

| Tienda o launcher | Linux | Windows | Cómo funciona |
|---|---|---|---|
| Steam | Sí | Sí | Las bibliotecas se leen solas, sin iniciar sesión |
| Epic Games | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| GOG | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| Amazon Games | Sí | Sí | Inicias sesión y luego instalas desde Heronite |
| Battle.net | Sí | Usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| EA app | Sí | Usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| Ubisoft Connect | Sí | Usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |
| Rockstar Games | Sí | Usa la app de la tienda | Se ejecuta en su propio prefijo de Wine |

Los juegos emulados, los programas nativos de Linux y los programas de Windows que añades a mano se suman a la misma lista. Consulta la [biblioteca de juegos](/es/features/game-library/) para ver cómo ordenarla, o la página de [emulación](/es/features/emulation/) para traer tus ROMs.

Cuando todo está dentro, puedes buscarlo todo a la vez. Pulsa <kbd>Ctrl</kbd> <kbd>K</kbd> para abrir la paleta de comandos y lanzar cualquier juego escribiendo parte de su nombre, sea de la tienda que sea.

## ¿Cómo uso Epic, GOG y Amazon en un solo launcher?

Abre la página de **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) e inicia sesión en cada una. Heronite se encarga entonces de toda la biblioteca. Una sola cola de descargas instala, actualiza, repara, mueve, importa y desinstala juegos. Las descargas se pausan cuando te quedas sin conexión, las que fallan se reintentan y las actualizaciones se buscan cada 3 horas.

Por debajo, Heronite usa las mismas herramientas de código abierto que Heroic, y las descarga por sí mismo:

- [legendary](https://github.com/derrod/legendary) para Epic Games,
- [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para GOG,
- [nile](https://github.com/imLinguin/nile) para Amazon Games.

Tus credenciales se quedan en tu PC y solo van a las tiendas. Escribes tu contraseña en la propia página de inicio de sesión de la tienda, que se muestra en una ventana pequeña. Si esa ventana no se puede abrir, usa el **método del navegador** de la misma página: inicia sesión en tu navegador de siempre y pega la dirección o el código que te muestra al final.

> **Consejo.** En Windows, los juegos ya instalados por Epic Games Launcher, GOG Galaxy o la app de Amazon Games entran en Heronite sin volver a descargarlos.

Las guías paso a paso cubren cada tienda: [Epic Games en Linux](/es/guides/epic-games-on-linux/), [GOG en Linux](/es/guides/gog-on-linux/) y [Amazon Games en Linux](/es/guides/amazon-games-on-linux/).

## ¿Y Steam?

Steam no necesita inicio de sesión. Heronite lo busca en los lugares habituales y mantiene tus bibliotecas sincronizadas. En Linux revisa la instalación normal y también las versiones en Flatpak y Snap. En Windows encuentra Steam a través del registro.

Steam sigue iniciando sus propios juegos. En Windows, Heronite además puede ejecutar tus scripts y programas, como los trainers, junto a un juego de Steam.

![La página de un juego en la Colección de Heronite, con una fila Biblioteca que dice Steam, el estado Jugando y un botón Jugar junto a la carátula.](../../../assets/screenshots/collection.webp)

*Cada página de juego indica de dónde viene. Este es un juego de Steam, junto a juegos de otras tiendas.*

## ¿Puedo ejecutar Battle.net, EA, Ubisoft y Rockstar en Linux?

Sí. Heronite instala la app de cada tienda en un prefijo de Wine propio, en `~/Games/Heronite/Prefixes/<store>`. Inicia sesión e instala juegos en esa app como siempre. Aparecen en tu Colección y se inician desde ella, y Heronite se ocupa de la parte de [Wine y Proton](/es/features/wine-and-proton/).

Estas guías explican cada una: [Battle.net en Linux](/es/guides/battle-net-on-linux/) y [EA app, Ubisoft Connect y Rockstar en Linux](/es/guides/ea-app-ubisoft-rockstar-on-linux/).

## ¿Puedo importar juegos de Heroic, Lutris, Bottles o Faugus?

En Linux, sí. Heronite puede traer los juegos de otros launchers y mantenerlos sincronizados. Cada origen puede ser la instalación normal o el Flatpak.

| Launcher | Qué se importa |
|---|---|
| Heroic | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris | Los juegos de su biblioteca |
| Bottles | Los programas de cada botella |
| Faugus | Los juegos de su lista |

Heronite solo lee los archivos de los otros launchers, así que puedes probarlo sin perder nada. Mira cómo se compara en [Heronite vs Heroic](/es/compare/heroic/) y [Heronite vs Lutris](/es/compare/lutris/). Si vienes de Windows, también existe [Heronite vs Playnite](/es/compare/playnite/).

## ¿Y los juegos que no vienen de ninguna tienda?

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa a mano, o indica a Heronite una carpeta y añade de una vez todos los juegos que haya en ella. Eso cubre los programas de Windows y, en Linux, también los AppImage, scripts de inicio y programas nativos. Es muy útil con un disco lleno de instalaciones sin DRM.

![El diálogo para añadir un juego con campos para el título, la carátula y el arte de fondo, la plataforma Windows, el prefijo de Wine y la versión de Proton, y el ejecutable que se lanza.](../../../assets/screenshots/add-game.webp)

*Añadir un juego a mano. Para los juegos de Epic, GOG y Amazon, inicia sesión en la página de Tiendas y usa Instalar o Importar.*

## ¿Por qué usar un solo launcher para todas las tiendas?

- **Un solo lugar donde mirar.** Dejas de preguntarte qué app tiene ese juego.
- **Un solo historial de juego.** Cada sesión se registra igual, sea de la tienda que sea. Consulta el [registro de tiempo de juego](/es/features/play-time-tracking/).
- **Un solo conjunto de copias.** Tus partidas guardadas se gestionan en un único lugar. Consulta [partidas guardadas y copias de seguridad](/es/features/saves-and-backups/).
- **Una app ligera.** Es un programa nativo en Rust, no un navegador metido en una caja. Consulta el [rendimiento](/es/features/performance/).

## Consulta la referencia completa

Cada paso de inicio de sesión, herramienta y carpeta está en la página de documentación [Tiendas y launchers](/es/docs/stores-and-launchers/). Si una ventana de inicio de sesión no se abre, revisa la [solución de problemas](/es/docs/troubleshooting/). Cuando estés listo, [descarga Heronite](/es/download/) y añade tu primera tienda en un minuto.
