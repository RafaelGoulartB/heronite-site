---
title: "Lanzador de juegos para todas las tiendas | Heronite"
description: "Un lanzador de juegos para todas las tiendas en Linux y Windows: Steam sin iniciar sesión, Epic, GOG y Amazon en una biblioteca, e importa Heroic y Lutris."
eyebrow: Tiendas y launchers
headline: "Un lanzador de juegos para todas las tiendas"
lead: "Juegos de Steam, Epic, GOG, Amazon, Battle.net, EA, Ubisoft y Rockstar en una sola biblioteca, en Linux y Windows. En Windows, también los de Microsoft Store y PC Game Pass."
navLabel: Tiendas y launchers
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect y Rockstar en una biblioteca, los juegos de la app de Xbox en Windows e importación de otros lanzadores."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "La Biblioteca del modo consola de Heronite: una cuadrícula de carátulas, desde A Plague Tale, Alan Wake y Baldur's Gate 3 hasta Black Myth: Wukong, con los filtros Mostrar, Ordenar y Estado arriba y 207 juegos en la lista."
og: /og/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam sin iniciar sesión
    text: Heronite lee la instalación normal de Steam, el Flatpak o el Snap, y Steam sigue iniciando sus juegos.
  - title: Tus inicios de sesión se quedan en tu PC
    text: Tus datos de acceso a las tiendas solo van a las tiendas.
  - title: Apps de tienda con Wine en Linux
    text: Cada app de tienda tiene su propio prefijo de Wine; en Windows funciona sin Wine.
  - title: Importa otros lanzadores
    text: Los juegos de Heroic, Lutris, Bottles, Faugus y Playnite se mantienen sincronizados.
faq:
  - q: ¿Puedo usar Epic Games y GOG en un solo lanzador?
    a: Sí. Inicia sesión en cada tienda en la página **Tiendas** y una sola cola de descargas se encarga de ambas. Mira [Epic en Linux](/guides/epic-games-on-linux/) y [GOG en Linux](/guides/gog-on-linux/).
  - q: ¿Heronite funciona en la Steam Deck?
    a: Sí. Funciona como AppImage en el modo escritorio de SteamOS, y en el Modo Juego como juego que no es de Steam. Mira la [guía de la Steam Deck](/guides/steam-deck/).
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
| Steam | Sí | Sí | Sin iniciar sesión; Heronite trae tus bibliotecas |
| Epic Games | Sí | Sí | Inicias sesión; Heronite instala los juegos |
| GOG | Sí | Sí | Inicias sesión; Heronite instala los juegos |
| Amazon Games | Sí | Sí | Inicias sesión; Heronite instala los juegos |
| Battle.net | Sí | Sí | Inicias sesión; la app de la tienda instala los juegos |
| EA app | Sí | Sí | Inicias sesión; la app de la tienda instala los juegos |
| Ubisoft Connect | Sí | Sí | Inicias sesión; la app de la tienda instala los juegos |
| Rockstar Games | Sí | Sí | Inicias sesión; la app de la tienda instala los juegos |
| Microsoft Store y PC Game Pass | No | Sí | Sin iniciar sesión; Heronite trae los juegos de la app de Xbox |

Tus [juegos emulados](/es/features/emulation/) están en la misma [biblioteca](/es/features/game-library/). Para añadir un juego que no es de una tienda, mira [Añade otros juegos a tu biblioteca](/es/docs/getting-started/#añade-otros-juegos-a-tu-biblioteca).

## ¿Cómo inicio sesión en Epic, GOG y Amazon?

1. Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Elige **Epic Games**, **GOG** o **Amazon Games**.
3. Haz clic en **Iniciar sesión**.
4. Inicia sesión en la página de la tienda, en la ventana que se abre.

Si la ventana de inicio de sesión no se abre, usa **O inicia sesión con tu navegador** en esa misma página y pega el código que te dé. Paso a paso: [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/).

En Windows, Heronite también añade los juegos ya instalados con el Epic Games Launcher, GOG Galaxy o la app de Amazon Games. No se vuelve a descargar nada.

Heronite descarga las herramientas de código abierto no oficiales que usa Heroic: [legendary](https://github.com/derrod/legendary) para Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para GOG y [nile](https://github.com/imLinguin/nile) para Amazon.

## ¿Cómo descarga y actualiza juegos Heronite?

Haz clic en **Instalar** en un juego. Una sola cola de descargas instala, actualiza, repara y desinstala tus juegos de Epic, GOG y Amazon. La misma cola mueve e importa juegos. Heronite pausa las descargas sin conexión, reintenta las que fallan y busca actualizaciones cada 3 horas.

## ¿Necesito iniciar sesión en Steam?

No. Heronite trae tus bibliotecas de Steam y las mantiene sincronizadas. En Linux, encuentra la instalación normal de Steam, el Flatpak y el Snap. En Windows, lee en el registro dónde está instalado Steam, y puedes [ejecutar un trainer con un juego de Steam](/es/docs/stores-and-launchers/#ejecuta-un-trainer-con-un-juego-de-steam-windows).

![La página de un juego en la Colección de Heronite, con una fila Biblioteca que dice Steam, el estado Jugando y un botón Jugar junto a la carátula.](../../../assets/screenshots/collection.webp)

*La página de un juego de Steam, junto a juegos de otras tiendas.*

## ¿Puedo jugar a juegos de Battle.net, EA, Ubisoft y Rockstar?

Sí, en Linux y Windows. Inicias sesión e instalas los juegos en la app de la tienda. Heronite muestra esos juegos, los inicia a través de la app de la tienda y cuenta su tiempo de juego.

En Linux, Heronite instala cada app de tienda en su propio prefijo de Wine (una carpeta que funciona como un Windows solo para esa app), en `~/Games/Heronite/Prefixes/<tienda>`. Ejecuta la app con [Wine y Proton](/es/features/wine-and-proton/). Paso a paso: [Battle.net](/es/guides/battle-net-on-linux/) y [EA app, Ubisoft Connect y Rockstar](/es/guides/ea-app-ubisoft-rockstar-on-linux/).

En Windows, la app de la tienda funciona directamente, sin Wine. Haz clic en el botón de instalación de la app, como **Instalar Battle.net**, para descargar y ejecutar el instalador oficial.

## ¿Cómo añado juegos de Microsoft Store y PC Game Pass?

En Windows, Heronite encuentra los juegos instalados con la app de Xbox o Microsoft Store, también los de PC Game Pass (el Xbox Game Pass para PC). No hace falta iniciar sesión. La app de Xbox sigue instalándolos, actualizándolos y desinstalándolos.

**Tiendas → Xbox** muestra si Heronite encontró la app de Xbox y lista sus juegos. Después de instalar un juego, haz clic en **Leer juegos ahora**.

## ¿Puedo importar juegos de Heroic, Lutris, Bottles, Faugus o Playnite?

Sí. Activa un lanzador en **Ajustes → Otros launchers**. Heronite nunca cambia los archivos de otro lanzador. En el primer inicio copia una sola vez los inicios de sesión, los ajustes y los juegos añadidos a mano de Heroic.

| Lanzador | Qué importa Heronite |
|---|---|
| Heroic (Linux) | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris (Linux) | Los juegos de su biblioteca |
| Bottles (Linux) | Los programas de cada botella |
| Faugus (Linux) | Los juegos de su lista |
| Playnite (Windows) | Los juegos instalados que no están ocultos, con carátulas y tiempo de juego |

Cada lanzador de Linux puede ser la instalación normal o el Flatpak. Los juegos de Playnite se siguen iniciando con Playnite. Heronite se salta los juegos de Steam de esos lanzadores, porque la importación de Steam ya los tiene. Si quieres cambiarte, mira las comparativas con [Heroic](/es/compare/heroic/), [Lutris](/es/compare/lutris/) y [Playnite](/es/compare/playnite/).

Siguiente: [descarga Heronite](/es/download/) y añade tu primera tienda.
