---
title: "Tiendas y launchers: Steam, Epic, GOG y más"
navLabel: "Tiendas y launchers"
description: "Cómo funciona Heronite con Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar Games, Heroic, Lutris, Bottles y Faugus."
section: Guides
order: 1
updated: 2026-11-01
---

## Steam

No hace falta iniciar sesión. Heronite lee tus bibliotecas de Steam y las mantiene sincronizadas.

- **Linux:** encuentra Steam en `~/.steam/steam`, `~/.local/share/Steam`, el Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) y el Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** encuentra Steam en el registro, o en `C:\Program Files (x86)\Steam`.

Steam sigue iniciando sus propios juegos. En Windows, Heronite también puede ejecutar tus scripts y programas (como trainers) alrededor de un juego de Steam.

## Epic Games, GOG y Amazon Games

Inicia sesión desde la página **Tiendas**. Después, Heronite se encarga de toda la biblioteca: una cola de descargas instala, actualiza, repara, mueve, importa y desinstala juegos. Las descargas se pausan cuando no tienes conexión y las que fallan se reintentan.

Por debajo, Heronite usa las mismas herramientas de código abierto que Heroic, y las descarga por sí mismo:

| Tienda | Herramienta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Ventana de inicio de sesión.** Al iniciar sesión se abre una pequeña ventana con la página de la propia tienda (WebKitGTK en Linux, WebView2 en Windows). Si no se abre, la página de inicio de sesión tiene un **método del navegador**: inicia sesión en tu navegador de siempre y pega la dirección o el código que aparece al final.

**Juegos que ya tenías instalados (Windows).** Los juegos instalados por el Epic Games Launcher, GOG Galaxy o la app de Amazon Games entran en Heronite sin volver a descargarlos.

Las actualizaciones de los juegos se comprueban cada 3 horas.

## Battle.net, EA app, Ubisoft Connect, Rockstar Games (Linux)

Heronite instala la app de cada tienda en un prefijo de Wine propio (en `~/Games/Heronite/Prefixes/<store>`). Inicia sesión e instala juegos en esa app como de costumbre; aparecen en tu Colección y se inician desde ella.

En Windows, de momento usa las apps propias de las tiendas.

## Otros launchers (Linux)

Heronite puede traer los juegos de otros launchers y mantenerlos sincronizados. Cada fuente puede ser la instalación normal o el Flatpak:

| Launcher | Qué entra |
|---|---|
| Heroic | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris | Juegos de su biblioteca (`pga.db`) |
| Bottles | Los programas de cada bottle |
| Faugus | Juegos de su lista |

Los juegos de Steam que esos launchers muestran se dejan para la importación de Steam, así que nada aparece dos veces. Heronite solo lee los archivos de los otros launchers.

## Juegos que ya tienes

Añade un programa a mano (<kbd>Ctrl</kbd> <kbd>N</kbd>), o indica una carpeta y añade de una vez todos los juegos que contenga: programas de Windows y, en Linux, también AppImages, scripts de inicio y programas de Linux.
