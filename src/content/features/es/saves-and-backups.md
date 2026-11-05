---
title: "Copia de seguridad de partidas con Ludusavi | Heronite"
description: "Copia de seguridad de partidas guardadas tras cada sesión con Ludusavi y restauración desde la página del juego. Con copias programadas y mapa del disco."
eyebrow: Partidas guardadas y copias
headline: "Copia de seguridad de partidas guardadas con Ludusavi, tras cada sesión"
lead: "Heronite es un frontend de Ludusavi para Linux y Windows. Restaura partidas guardadas desde la página del juego y hace copia de toda tu Colección de forma programada."
navLabel: Partidas guardadas y copias
summary: "Copias automáticas de partidas con Ludusavi, guardados en la nube de Epic y GOG, una biblioteca en varios PC, copias programadas de la Colección y un mapa del disco."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "Los ajustes de Copias de Heronite: la carpeta de copias, cada cuánto se hacen (una vez a la semana), cuántas se conservan, un botón Copiar ahora, interruptores para lo que entra en una copia y una lista de copias anteriores para restaurar."
og: /og/saves-and-backups.jpg
updated: 2026-11-04
highlights:
  - title: Deshaz una restauración
    text: Heronite conserva lo que reemplazó una restauración, y Deshacer lo devuelve.
  - title: Bloquea una copia
    text: Ponle nombre a una copia y bloquéala para que Heronite nunca la elimine.
  - title: Copias programadas
    text: Copia tu Colección cada día, semana o mes; Heronite conserva las 10 más recientes.
  - title: Mira a dónde fue el espacio
    text: Almacenamiento muestra el uso del disco, un treemap y lo que puedes limpiar.
faq:
  - q: ¿Puedo restaurar en Linux una partida guardada en Windows?
    a: Sí. Heronite la restaura en el prefijo de Wine actual del juego, aunque la copia venga de Windows o de otra biblioteca de Steam.
  - q: ¿Ludusavi es gratis?
    a: Sí. Ludusavi es un programa gratuito aparte que instalas una sola vez.
  - q: ¿Dónde debo guardar mis copias?
    a: Fuera de la carpeta de datos de Heronite, en otro disco o en una carpeta sincronizada. Elige las carpetas en **Ajustes → Guardados** y **Ajustes → Copias**. **Ajustes → Nube** también puede enviarlas a una cuenta en la nube.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

[Ludusavi](https://github.com/mtkennerly/ludusavi) es un programa gratuito que sabe dónde guardan sus partidas miles de juegos: en una carpeta de Windows, en una carpeta de Steam o en el prefijo de Wine del juego (una carpeta que funciona como un Windows solo para ese juego). Instálalo una vez y Heronite copia las partidas guardadas de un juego después de cada sesión.

## ¿Cómo instalo Ludusavi para Heronite?

1. Instala Ludusavi desde [sus releases](https://github.com/mtkennerly/ludusavi/releases/latest), tu distribución, winget o Scoop.
2. En **Ajustes → Guardados**, elige dónde van las copias y cuántas copias completas conservar por juego.

En Linux, Heronite busca Ludusavi en el `PATH`, en `/usr/bin`, `/usr/local/bin` y `~/.local/bin`. Ludusavi actualiza su lista de juegos una vez al día. Más en [Copias y guardados](/es/docs/backups-and-saves/).

## ¿Cómo restauro una partida guardada?

1. Cierra el juego.
2. Abre la página del juego y su pestaña **Guardados**, que lista las copias del juego.
3. Elige una copia y haz clic en **Restaurar…**.
4. Elige los archivos que quieres devolver en **Archivos a restaurar** y haz clic en **Restaurar *n* archivos**.

En el **modo consola** es una fila de la página del juego, **Copia de guardados (Ludusavi)**.

- Heronite conserva una copia de lo que reemplazó la restauración, y **Deshacer** lo devuelve.
- Ponle nombre a una copia, como "Antes del último jefe", y **bloquéala** para que Heronite nunca la elimine.
- Los juegos emulados pueden continuar desde [estados guardados](/es/features/emulation/).

## ¿Heronite sincroniza los guardados en la nube de Epic y GOG?

Sí, en beta, en Linux y Windows. Abre **Ajustes del juego → Guardados en la nube** y haz clic en **Sincronizar**, o activa **Sincronizar automáticamente** para sincronizar al iniciar el juego y al cerrarlo. Haz una copia de tus partidas antes de la primera sincronización.

## ¿Cómo programo copias de toda mi Colección?

1. Abre **Ajustes → Copias**.
2. Elige una carpeta para las copias.
3. Elige una frecuencia: **una vez al día**, **una vez a la semana**, **una vez al mes** o solo cuando hagas clic en **Copiar ahora**.

Una copia protege tus estados, valoraciones, diario e [historial de juego](/es/features/play-time-tracking/). Heronite conserva por defecto las 10 copias más recientes.

Cada copia es una carpeta con fecha que puedes explorar. Heronite comparte los archivos sin cambios con la copia anterior, así que una nueva solo ocupa el espacio de lo que cambió. Las copias programadas se hacen con Heronite abierto y nunca durante un juego.

### ¿Qué contiene una copia?

| Parte | Qué incluye |
|---|---|
| Colección (siempre) | Tus juegos, sesiones, estados, diario y ajustes de cada juego |
| Ajustes | Apariencia, temas del modo consola y los demás ajustes |
| Arte | Las carátulas y el arte que elegiste |
| Inicios de sesión | Tus inicios de sesión en las tiendas |

Los juegos instalados, las versiones de Wine y Proton, las cachés y los logs se quedan fuera, porque puedes volver a descargarlos.

### ¿Cómo restauro una copia de la Colección?

1. En **Ajustes → Copias**, elige una copia para ver qué contiene.
2. Elige las partes que quieres devolver.
3. Haz clic en **Restaurar…** y luego en **Restaurar y reiniciar**.

Heronite primero copia lo que tienes ahora, para que puedas volver atrás. Mira [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿Puedo tener la misma biblioteca en varios PC?

Sí. **Ajustes → Nube** mantiene iguales los estados, favoritos, notas, tiempo de juego y sesiones en cada PC, como el Linux y el Windows de un arranque dual. Sincroniza con una carpeta compartida o con una cuenta en la nube como Google Drive, Dropbox o OneDrive.

El mismo sitio puede guardar tus copias de Heronite, las copias de partidas de Ludusavi y las capturas. Configúralo en [Sincronizar entre PC](/es/docs/sync-between-pcs/).

## ¿A dónde se fue el espacio de mi disco?

**Ajustes → Almacenamiento** muestra lo que ocupan tus juegos en cada disco, con barras para los juegos, los prefijos de Wine, Proton y los runtimes, y las cachés. Un **treemap** dibuja cada juego instalado como un bloque del tamaño de su espacio en disco. Ordénalo por tamaño o por la última vez que jugaste.

![Los ajustes de Almacenamiento de Heronite con barras de uso del disco de dos unidades, una tarjeta Liberar espacio con las cachés seleccionadas y un treemap de juegos instalados según su espacio en disco.](../../../assets/screenshots/storage.webp)

*Ajustes de Almacenamiento, con una tarjeta Liberar espacio.*

**Liberar espacio** lista lo que se puede quitar, como cachés y shaders compilados. En Linux encuentra prefijos de Wine sin usar, versiones de Proton sin usar y restos de Steam de juegos que ya no están instalados. Heronite manda los prefijos y las carpetas sobrantes a la papelera y se niega a borrar carpetas que otro juego sigue usando.

## ¿Cómo gestiono las capturas y el espacio que ocupan?

Las capturas van a una carpeta que eliges en **Ajustes → Capturas**, que muestra el espacio que usan. Un interruptor comprime las capturas PNG a WebP sin pérdidas, que conserva cada píxel y ocupa más o menos la mitad. La compresión se pausa mientras hay un juego abierto.

![Los ajustes de Capturas de Heronite con la carpeta de capturas y el espacio usado, la compresión sin pérdidas, el atajo de captura en el juego y la captura con el mando.](../../../assets/screenshots/screenshots.webp)

*Ajustes de Capturas.*

Pulsa <kbd>F10</kbd> mientras juegas para hacer una captura, y cambia la tecla en los mismos ajustes. Con un mando, el [overlay dentro del juego](/es/features/console-mode/) hace una con Guide + RB. Heronite asocia las capturas al juego, así que aparecen en tus [estadísticas](/es/features/play-time-tracking/) y en el diario.

Siguiente: [descarga Heronite](/es/download/).
