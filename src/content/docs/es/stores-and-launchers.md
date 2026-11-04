---
title: "Tiendas y launchers: Steam, Epic, GOG y más"
navLabel: "Tiendas y launchers"
description: "Cómo funciona Heronite con Steam, Epic Games, GOG, Amazon Games, Battle.net, EA app, Ubisoft, Rockstar, Microsoft Store, Heroic, Lutris y Playnite."
section: Guides
order: 1
updated: 2026-11-04
---

Heronite reúne en una sola biblioteca tus juegos de Steam, Epic Games, GOG, Amazon Games, las apps de las tiendas y otros launchers.

## Añade tus juegos de Steam

No hace falta iniciar sesión. Heronite lee tus bibliotecas de Steam y las mantiene sincronizadas.

- **Linux:** encuentra Steam en `~/.steam/steam`, `~/.local/share/Steam`, el Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) y el Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows:** encuentra Steam en el registro, o en `C:\Program Files (x86)\Steam`.

Steam inicia sus juegos. En Windows, Heronite puede ejecutar scripts y programas, como trainers, alrededor de un juego de Steam.

## Inicia sesión en Epic Games, GOG y Amazon Games

1. Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Elige **Epic Games**, **GOG** o **Amazon Games**.
3. Pulsa **Iniciar sesión**. Se abre una pequeña ventana con la página de la propia tienda (WebKitGTK en Linux, WebView2 en Windows).
4. Inicia sesión ahí.

Si la ventana no se abre, usa **O inicia sesión con tu navegador** en esa misma página:

1. Pulsa **Abrir en el navegador** e inicia sesión.
2. Copia la dirección o el código que aparece al final.
3. Pégalo en **2. Pega el código** y pulsa **Iniciar sesión**.

**Descargas.** Una cola de descargas instala, actualiza y repara juegos. También puede moverlos, importarlos o desinstalarlos. Las descargas se pausan cuando no tienes conexión, Heronite reintenta las que fallan y busca actualizaciones de los juegos cada 3 horas.

**Herramientas de las tiendas.** Heronite descarga las mismas herramientas de código abierto que Heroic:

| Tienda | Herramienta |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Juegos que ya tenías instalados (Windows).** Heronite importa los juegos instalados con el Epic Games Launcher, GOG Galaxy o la app de Amazon Games, sin volver a descargarlos.

## Usa Battle.net, EA app, Ubisoft Connect y Rockstar Games

En Linux, Heronite instala cada app de tienda en su propio prefijo de Wine (una carpeta de Windows aparte), `~/Games/Heronite/Prefixes/<tienda>`. En Windows, la app de la tienda funciona tal cual, sin Wine.

1. Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>) y elige la app de la tienda.
2. Pulsa **Instalar** con el nombre de la app, como **Instalar Battle.net**. Heronite descarga el instalador oficial y lo ejecuta. En Linux instala la app con tu Proton por defecto, lo que tarda unos 5 minutos. En Windows, puede que Windows te pida permiso.
3. Pulsa **Abrir** con el nombre de la app e inicia sesión ahí.
4. Instala juegos en la app de la tienda. Aparecen en tu biblioteca y se inician desde ella.

En Windows, Heronite usa tal cual una app de tienda que ya esté instalada.

## Añade juegos de Microsoft Store y PC Game Pass (Windows)

Heronite encuentra los juegos que instalaron la app de Xbox y Microsoft Store, comprados o de PC Game Pass, y los añade solo. No hay inicio de sesión: instálalos y actualízalos en la app de Xbox, y Heronite los inicia y cuenta su tiempo de juego.

Heronite los lee unos segundos después de abrirse y cada diez minutos. Para leerlos ahora, pulsa **Leer juegos ahora** en **Tiendas → Xbox**, o el botón de actualizar de la Colección. Desinstala estos juegos en la app de Xbox.

## Importa juegos de Heroic, Lutris, Bottles, Faugus y Playnite

Activa un launcher en **Ajustes → Otros launchers** con **Importar sus juegos**. Heronite mantiene luego sus juegos sincronizados. En Linux, cada launcher puede ser una instalación normal o un Flatpak:

| Launcher | Qué entra |
|---|---|
| Heroic (Linux) | Los juegos que añadiste a mano y tus juegos instalados de Epic, GOG y Amazon |
| Lutris (Linux) | Juegos de su biblioteca (`pga.db`) |
| Bottles (Linux) | Los programas de cada bottle |
| Faugus (Linux) | Juegos de su lista |
| Playnite (Windows) | Los juegos instalados que no están ocultos, con portadas y tiempo de juego |

Cierra Playnite antes de activar su importación: mientras está abierto, mantiene su biblioteca bloqueada y Heronite no lee nada. Playnite sigue iniciando sus juegos.

Heronite omite sus juegos de Steam, que entran con la importación de Steam, así que nada aparece dos veces. Solo lee los archivos de los otros launchers, así que siguen funcionando.

## Añade los juegos que ya tienes

Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> para añadir un programa, o indica una carpeta para añadir todos los juegos que contenga: programas de Windows y, en Linux, AppImages, scripts de inicio y programas de Linux.
