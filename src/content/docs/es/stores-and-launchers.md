---
title: "Tiendas y launchers: Steam, Epic, GOG y más"
navLabel: "Tiendas y launchers"
description: "Cómo funciona Heronite con Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft Connect, Rockstar, Heroic, Lutris, Bottles y Faugus."
section: Guides
order: 1
updated: 2026-11-04
---

Heronite reúne en una sola biblioteca los juegos de Steam, Epic Games, GOG, Amazon Games y otros launchers.

## Añade tus juegos de Steam

No hace falta iniciar sesión. Heronite lee tus bibliotecas de Steam y las mantiene sincronizadas.

- **Linux:** encuentra Steam en `~/.steam/steam`, `~/.local/share/Steam`, el Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) y el Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** encuentra Steam en el registro, o en `C:\Program Files (x86)\Steam`.

Steam inicia sus juegos. En Windows, Heronite puede ejecutar scripts y programas, como trainers, alrededor de un juego de Steam.

## Inicia sesión en Epic Games, GOG y Amazon Games

Inicia sesión desde la página **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>). Una cola de descargas instala, actualiza y repara juegos, y también los mueve, importa o desinstala. Las descargas se pausan cuando no tienes conexión y Heronite reintenta las que fallan.

Heronite descarga las mismas herramientas de código abierto que Heroic:

| Tienda | Herramienta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Ventana de inicio de sesión.** Al iniciar sesión se abre una pequeña ventana con la página de la propia tienda (WebKitGTK en Linux, WebView2 en Windows). Si no se abre, usa el **método del navegador** de la página de inicio de sesión: inicia sesión en tu navegador y pega la dirección o el código que aparece al final.

**Juegos que ya tenías instalados (Windows).** Heronite importa los juegos instalados por el Epic Games Launcher, GOG Galaxy o la app de Amazon Games, sin volver a descargarlos.

Heronite busca actualizaciones de los juegos cada 3 horas.

## Usa Battle.net, EA app, Ubisoft Connect y Rockstar Games (Linux)

Heronite instala la app de cada tienda en su propio prefijo de Wine, `~/Games/Heronite/Prefixes/<store>`. Inicia sesión e instala juegos en esa app. Aparecen en tu biblioteca y se inician desde ella.

En Windows, de momento usa las apps propias de las tiendas.

## Importa juegos de Heroic, Lutris, Bottles y Faugus (Linux)

Heronite importa los juegos de estos launchers y los mantiene sincronizados. Cada uno puede ser una instalación normal o un Flatpak:

| Launcher | Qué entra |
|---|---|
| Heroic | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris | Juegos de su biblioteca (`pga.db`) |
| Bottles | Los programas de cada bottle |
| Faugus | Juegos de su lista |

Heronite omite sus juegos de Steam, que entran con la importación de Steam, así que nada aparece dos veces. Solo lee los archivos de los otros launchers.

## Añade los juegos que ya tienes

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa, o indica una carpeta para añadir todos los juegos que contenga: programas de Windows y, en Linux, AppImages, scripts de inicio y programas de Linux.
