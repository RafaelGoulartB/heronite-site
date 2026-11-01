---
title: "Copia de seguridad de partidas guardadas en PC | Heronite"
description: "Heronite hace copia de tus partidas guardadas con Ludusavi tras cada sesión y las restaura con un clic. Con copias programadas de tu Colección. Gratis."
eyebrow: Partidas guardadas y copias
headline: "Copia de seguridad *automática de tus partidas guardadas*"
lead: "Heronite es un frontend de Ludusavi que guarda tu progreso después de cada sesión y lo devuelve desde la página del juego. También hace copia de toda tu Colección."
navLabel: Partidas guardadas y copias
summary: "Copias automáticas de las partidas guardadas con Ludusavi, copias programadas de la Colección, un mapa del uso del disco y ajustes de capturas."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "Los ajustes de Copias de Heronite: la carpeta de copias, cada cuánto se hacen (una vez a la semana), cuántas se conservan, un botón Copiar ahora, interruptores para lo que entra en una copia y una lista de copias anteriores para restaurar."
og: /og/saves-and-backups.jpg
updated: 2026-11-01
highlights:
  - title: Guardados tras cada sesión
    text: Con Ludusavi instalado, Heronite copia las partidas guardadas de un juego cada vez que dejas de jugar.
  - title: Restaura desde la página del juego
    text: Devuelve una partida guardada desde la página del juego, también en el modo consola.
  - title: Copias programadas
    text: Haz copia de tu Colección, tu historial de juego y tus ajustes cada día, semana o mes. Se conservan las 10 más recientes.
  - title: Mira a dónde fue el espacio
    text: Una página de Almacenamiento muestra el uso del disco, un treemap de tus juegos y restos que puedes limpiar.
faq:
  - q: ¿Cómo hago copia de seguridad automática de mis partidas guardadas en PC?
    a: Instala [Ludusavi](https://github.com/mtkennerly/ludusavi). Heronite copia entonces las partidas guardadas de un juego después de cada sesión. No necesitas buscar las carpetas de guardado, porque Ludusavi sabe dónde las guardan miles de juegos.
  - q: ¿Heronite es un frontend de Ludusavi?
    a: Sí. Heronite ejecuta Ludusavi por ti, hace copia después de cada sesión y te deja restaurar una copia desde la página del juego, también en el modo consola. Ludusavi es un programa gratuito aparte que instalas una sola vez.
  - q: ¿Cómo instalo Ludusavi para Heronite?
    a: Consíguelo en [sus releases](https://github.com/mtkennerly/ludusavi/releases/latest), en tu distribución, con winget o con Scoop. En Linux, Heronite lo busca en el `PATH`, en `/usr/bin`, `/usr/local/bin` y `~/.local/bin`. Consulta [Copias y guardados](/docs/backups-and-saves/).
  - q: ¿Una copia de Heronite incluye mis juegos instalados?
    a: No. Los juegos instalados no se incluyen, ni tampoco las versiones de Wine y Proton, las cachés o los logs, porque se pueden volver a descargar. Una copia contiene tu Colección y, de forma opcional, tus ajustes, tu arte y tus inicios de sesión en las tiendas.
  - q: ¿Dónde debo guardar mis copias?
    a: Fuera de la carpeta de datos de Heronite. Lo mejor es otro disco o una carpeta sincronizada. Restaurar una copia se aplica la próxima vez que Heronite se inicie.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

Perder una partida guardada duele. Una reinstalación, una mala actualización o un disco que falla pueden llevarse 80 horas de progreso. Heronite te protege de dos maneras: hace copia de tus **partidas guardadas** después de cada sesión y hace copia de toda tu **Colección** de forma programada. Ambas se ejecutan en silencio, y ambas se restauran en unos pocos clics.

## ¿Cómo hago copia de seguridad automática de mis partidas guardadas?

Heronite usa [Ludusavi](https://github.com/mtkennerly/ludusavi), un programa gratuito que sabe dónde guardan sus partidas miles de juegos, ya estén en una carpeta de Windows, en una carpeta de Steam o en un prefijo de Wine. Instálalo una vez y Heronite copia las partidas guardadas de un juego después de cada sesión. Eso convierte a Heronite en un **frontend de Ludusavi** sin comandos que escribir.

Instala Ludusavi desde [sus releases](https://github.com/mtkennerly/ludusavi/releases/latest), tu distribución, winget o Scoop. En Linux, Heronite lo busca en el `PATH`, en `/usr/bin`, `/usr/local/bin` y `~/.local/bin`.

> **Consejo.** Los ajustes de guardados están en **Ajustes → Guardados**. Ahí eliges dónde van las copias y cuántas copias completas se conservan por juego. Ludusavi actualiza su lista de juegos por sí solo una vez al día.

## ¿Cómo restauro una partida guardada?

Abre la página del juego. Su pestaña **Guardados** lista las copias de ese juego. Elige una, selecciona los archivos que quieres devolver y restaura. En el **modo consola** lo mismo es una fila de la página del juego, **Copia de guardados (Ludusavi)**, así que puedes hacerlo desde el sofá con un mando.

Algunos detalles lo hacen más seguro:

- Cierra el juego antes de restaurar una partida guardada.
- Se conserva una copia de lo que reemplazó la restauración, y **Deshacer** la devuelve.
- Puedes ponerle nombre a una copia, como "Antes del último jefe", y **bloquearla** para que nunca se elimine.
- En Linux, la partida guardada vuelve al prefijo de Wine del juego tal como está ahora, aunque la copia se hiciera en Windows o en otra biblioteca de Steam.

Los juegos emulados también pueden continuar desde sus estados guardados. Consulta [Emulación](/es/features/emulation/).

## Copias programadas de tu Colección

Las partidas guardadas son solo una parte de lo que odiarías perder. Tu Colección también contiene tus estados, valoraciones, diario e [historial de juego](/es/features/play-time-tracking/). Abre **Ajustes → Copias** para protegerla.

Elige una carpeta y una programación: **una vez al día**, **una vez a la semana**, **una vez al mes** o solo cuando pulses **Copiar ahora**. Heronite conserva por defecto las 10 copias más recientes y elimina las más antiguas.

Cada copia es una carpeta con fecha que puedes abrir y explorar. Los archivos que no cambiaron se comparten con la copia anterior, así que una nueva solo ocupa el espacio de lo que cambió. Las copias programadas se ejecutan mientras Heronite está abierto y nunca durante un juego.

### Qué contiene una copia

| Parte | Qué incluye |
|---|---|
| Colección (siempre) | Tus juegos, sesiones, estados, diario y ajustes de cada juego |
| Ajustes | Apariencia, temas del modo consola y los demás ajustes |
| Arte | Las carátulas y el arte que elegiste |
| Inicios de sesión | Tus inicios de sesión en las tiendas |

Las versiones de Wine y Proton, las cachés y los logs se dejan fuera, porque se pueden volver a descargar.

### Restaura una copia

Elige una copia para ver qué contiene y devuelve todo o una parte. Heronite primero hace copia de lo que tienes ahora, para que puedas volver atrás. Se aplica cuando Heronite se reinicia. La carpeta debe estar fuera de la carpeta de datos de Heronite, y lo mejor es otro disco o una carpeta sincronizada. Dónde está cada cosa se explica en [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿A dónde se fue el espacio de mi disco?

Los juegos son grandes, y los prefijos de Wine y las cachés se acumulan. La página de **Almacenamiento** en Ajustes muestra lo que ocupan tus juegos en cada disco, con barras para los juegos, los prefijos de Wine, Proton y los runtimes, y las cachés. Debajo, un **treemap** dibuja cada juego instalado como un bloque cuyo tamaño depende del espacio que usa, para que destaquen los más grandes. Ordénalo por tamaño o por la última vez que jugaste.

![Los ajustes de Almacenamiento de Heronite con barras de uso del disco de dos unidades, una tarjeta Liberar espacio con las cachés seleccionadas y un treemap de juegos instalados según su espacio en disco.](../../../assets/screenshots/storage.webp)

*Almacenamiento: uso del disco, una tarjeta Liberar espacio y un treemap de cada juego instalado.*

**Liberar espacio** lista lo que se puede quitar, como cachés y shaders compilados. En Linux también puede encontrar prefijos de Wine y versiones de Proton sin usar, y restos de Steam de juegos que ya no están instalados. Los prefijos y las carpetas sobrantes van a la papelera, desde donde puedes restaurarlos, y Heronite se niega a eliminar carpetas que otro juego sigue usando.

## Capturas de pantalla: dónde van y cuánto espacio ocupan

Las capturas viven en una carpeta que eliges en **Ajustes → Capturas de pantalla**. La página muestra el espacio que usan, y un interruptor puede comprimir las capturas PNG a WebP sin pérdidas, lo que conserva cada píxel y ocupa más o menos la mitad. Se ejecuta en segundo plano y se pausa mientras hay un juego en marcha.

![Los ajustes de Capturas de pantalla de Heronite con la carpeta de capturas y el espacio usado, la compresión sin pérdidas, el atajo de captura en el juego y la captura con el mando.](../../../assets/screenshots/screenshots.webp)

*Ajustes de Capturas de pantalla: la carpeta, la compresión sin pérdidas, el atajo de captura y la captura con el mando.*

Heronite hace una captura con <kbd>F10</kbd> mientras juegas, y aquí puedes cambiar la tecla. Con el mando, el [overlay dentro del juego](/es/features/console-mode/) hace una con Guide + RB. Las capturas se asocian al juego, así que también aparecen en tus [estadísticas](/es/features/play-time-tracking/) y en el diario.

## Más en la documentación

[Copias y guardados](/es/docs/backups-and-saves/) tiene la lista completa de opciones. Si algo no se copia como esperabas, consulta la [solución de problemas](/es/docs/troubleshooting/). [Descarga Heronite](/es/download/) para Linux o Windows. Es gratuito y de código abierto.
