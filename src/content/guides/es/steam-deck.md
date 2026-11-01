---
title: "Heronite en Steam Deck: juegos de Epic, GOG y Amazon"
description: "Configura Heronite en la Steam Deck: instala el AppImage en el Modo Escritorio, añádelo a Steam con --console y juega a Epic, GOG y Amazon desde el Modo Juego."
eyebrow: Guía de Steam Deck
headline: "Heronite en *Steam Deck*"
lead: "Instala Heronite en el Modo Escritorio, añádelo a Steam como juego que no es de Steam y abre desde el Modo Juego una biblioteca pensada para mando con tus juegos de Epic, GOG y Amazon."
navLabel: Steam Deck
summary: "Instala el AppImage en el Modo Escritorio, añádelo a Steam con la opción --console y juega tus otras tiendas desde el Modo Juego."
order: 2
hero: ../../../assets/screenshots/console-home.webp
heroAlt: "La pantalla de inicio del Modo consola de Heronite: un título grande sobre su ilustración, un estante Seguir jugando con portadas de juegos y, abajo, las indicaciones del mando para Detalles, Jugar, Buscar y Menú."
og: /og/steam-deck.jpg
updated: 2026-11-01
highlights:
  - title: "Instálalo en el Modo Escritorio"
    text: "Descarga el AppImage, hazlo ejecutable e inicia sesión en tus tiendas una vez con un teclado."
  - title: "Añádelo a Steam"
    text: "Añade el AppImage como juego que no es de Steam y pon --console como opción de lanzamiento."
  - title: "Juega desde el Modo Juego"
    text: "Abre Heronite desde tu biblioteca de Steam y usa los botones de la Deck para explorar, instalar y jugar."
  - title: "Epic, GOG y Amazon"
    text: "Tus otras bibliotecas están junto a tus juegos de Steam en una Colección cómoda de usar con mando."
faq:
  - q: "¿Funciona Heronite en la Steam Deck?"
    a: "Heronite funciona en Linux como AppImage, que es como se suelen instalar las apps en el Modo Escritorio de SteamOS, y su Modo consola está hecho para mandos. No es una app verificada para Steam Deck, así que tendrás que configurarla tú con esta guía."
  - q: "¿Qué opción de lanzamiento uso en la Steam Deck?"
    a: "Usa `--console`. Hace que Heronite se abra en el Modo consola, el diseño para mandos y televisores. Añade también `--fullscreen` si quieres que arranque a pantalla completa."
  - q: "¿Puedo jugar a juegos de Epic Games, GOG y Amazon en la Deck?"
    a: "Sí. Inicia sesión en la página **Tiendas** y los juegos se unen a tu Colección. Los juegos de Windows se ejecutan con Proton, igual que en cualquier PC con Linux. Mira las guías de [Epic](/guides/epic-games-on-linux/), [GOG](/guides/gog-on-linux/) y [Amazon Games](/guides/amazon-games-on-linux/)."
  - q: "¿Tengo que usar el Modo Escritorio cada vez?"
    a: "No. Necesitas el Modo Escritorio para instalar Heronite, añadirlo a Steam e iniciar sesión en tus tiendas. Después puedes quedarte en el Modo Juego y volver al Modo Escritorio solo para cambiar ajustes que son más fáciles con teclado y ratón."
  - q: "¿Puedo añadir un solo juego a Steam en lugar de todo el launcher?"
    a: "Sí. En un juego instalado, elige **Añadir a Steam** en sus acciones. Heronite añade un acceso directo que no es de Steam y que inicia ese juego directamente, sin mostrar la ventana de Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

La Steam Deck funciona con Linux, así que Heronite funciona en ella. Puedes instalarlo en el Modo Escritorio, añadirlo a Steam y luego abrirlo desde el Modo Juego con un diseño hecho para los controles de la Deck. Así tienes tus juegos de Epic, GOG y Amazon junto a tu biblioteca de Steam.

Esta guía muestra los pasos. Heronite no es una app verificada para Steam Deck, así que lo configuras a mano, pero hay poco que hacer.

## Qué necesitas

- Una Steam Deck con su SteamOS por defecto.
- Conexión a internet.
- Un teclado y un ratón para la configuración, o la pantalla táctil de la Deck y su teclado en pantalla (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Cuentas de las tiendas que quieras usar.

## Paso 1: Cambia al Modo Escritorio

Pulsa el botón <kbd>Steam</kbd>, abre el menú de energía («Power») y elige «Switch to Desktop» (cambiar a escritorio). La Deck se reinicia en un escritorio Linux normal.

## Paso 2: Descarga el AppImage

En el navegador del escritorio, abre la [página de descarga](/es/download/) y consigue `Heronite-x86_64.AppImage`. Un AppImage es un único archivo que funciona en cualquier distribución de Linux, así que no necesitas instalar paquetes en SteamOS.

Muévelo a una carpeta donde puedas escribir, como `~/Applications`. Heronite actualiza el AppImage reemplazándolo, así que la carpeta debe tener permiso de escritura.

## Paso 3: Hazlo ejecutable e inícialo

En el gestor de archivos, haz clic derecho en el archivo, elige «Properties» (propiedades), abre «Permissions» (permisos) y marca «Is executable» (es ejecutable). O usa una terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

En el primer arranque Heronite añade los juegos de Steam que encuentra, sin iniciar sesión. También busca emuladores y carpetas de ROMs.

## Paso 4: Inicia sesión en tus tiendas

Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas** e inicia sesión en Epic Games, GOG o Amazon Games. Se abre una ventana pequeña con la página de la propia tienda. Usa un teclado aquí, porque tienes que escribir una contraseña. Luego toda tu biblioteca aparece en la Colección.

Cada tienda tiene su propia guía con los detalles: [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/). Instala uno o dos juegos ahora, mientras tienes el escritorio. Puedes elegir la carpeta de instalación, así que la tarjeta SD también sirve.

## Paso 5: Añade Heronite a Steam

1. Abre Steam en el Modo Escritorio.
2. Elige «Add a Game» (añadir un juego) abajo a la izquierda de la biblioteca y luego «Add a Non-Steam Game» (añadir un juego que no es de Steam).
3. Haz clic en «Browse» (examinar), pon el filtro de archivos en todos los archivos y selecciona `Heronite-x86_64.AppImage`.
4. Añádelo, busca **Heronite** en tu biblioteca, haz clic derecho y abre «Properties» (propiedades).
5. En «Launch Options» (opciones de lanzamiento), escribe:

```
--console
```

`--console` abre Heronite en el Modo consola, el diseño pensado primero para mandos. Añade también `--fullscreen` si quieres la ventana a pantalla completa. Los nombres de los menús de Steam pueden cambiar entre actualizaciones, pero la idea es la misma: añadir el archivo como juego que no es de Steam y luego definir sus opciones de lanzamiento. Consulta [Línea de comandos y enlaces](/es/docs/command-line-and-links/) para ver todas las opciones.

## Paso 6: Usa el Modo consola desde el Modo Juego

Haz doble clic en el icono «Return to Gaming Mode» (volver al Modo Juego) del escritorio. Heronite está en tu biblioteca, entre los juegos que no son de Steam. Ábrelo y llegarás a la pantalla de inicio del Modo consola, con un estante **Seguir jugando** con tus juegos recientes. La pestaña **Biblioteca** contiene todos los juegos.

![La biblioteca del Modo consola de Heronite: una cuadrícula de portadas de juegos con los filtros Mostrar, Ordenar, Estado y Buscar arriba y las indicaciones de Detalles, Instalar y Buscar abajo.](../../../assets/screenshots/console-library.webp)

*La biblioteca del Modo consola: una cuadrícula para todas las tiendas, con indicaciones del mando abajo.*

Los controles son los botones propios de la Deck:

| Botón | Acción |
|---|---|
| A | Confirmar |
| B | Volver |
| X, Y | Las acciones que se muestran en pantalla |
| L1 / R1 | Cambiar de pestaña |
| Cruceta, stick izquierdo | Moverse |
| Botón de menú | Abrir el menú |

Las imágenes de los botones siguen al mando, y Heronite conoce las de la Steam Deck. Si los botones no responden como esperas, revisa la configuración de mando que usa Steam para la entrada de Heronite. La lista completa de controles está en [Modo consola](/es/docs/console-mode/).

## Paso 7: Instala y juega

Abre la pestaña **Biblioteca** con R1, elige un juego y pulsa X para instalarlo. Pulsa A en un juego instalado para abrir su página, y **Jugar** para iniciarlo. Heronite registra la sesión como lo hace en un PC.

Para tener un juego como entrada propia en Steam, usa **Añadir a Steam** en las acciones del juego. Steam muestra entonces un acceso directo que inicia ese juego directamente.

También puedes hacer que Heronite se abra solo en el Modo consola. En **Ajustes → Modo consola**, activa las opciones para el inicio o para cuando se conecta un mando.

## Límites que conviene conocer

- Los juegos de Windows se ejecutan con Proton, y no todos funcionan bien. Mira antes la valoración de ProtonDB del juego en sus detalles.
- Los juegos con anticheat pueden no funcionar en Linux. Los detalles muestran el estado de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Por la batería y la pantalla de la Deck, algunos juegos necesitan un límite de FPS más bajo. Defínelo para cada juego en **Ajustes del juego**.
- La superposición dentro del juego (beta) necesita una sesión Wayland con soporte de layer-shell. Lee [Modo consola](/es/docs/console-mode/) antes de depender de ella.

## Solución de problemas

- **Heronite no arranca.** Asegúrate de que el archivo es ejecutable. Ejecútalo desde una terminal para ver cualquier mensaje.
- **El AppImage no se actualiza.** Muévelo a `~/Applications` o a otra carpeta de tu carpeta personal.
- **La ventana de inicio de sesión no se abre.** Usa el **método del navegador** en la misma página: inicia sesión en un navegador y pega la dirección o el código.
- **Las descargas de GOG fallan.** La herramienta gogdl necesita `python3`. Comprueba que está instalado.
- **Un juego se cierra al instante.** Abre su log de inicio en **Ajustes → Logs**. Heronite sugiere una solución para las causas más comunes. Puede que el juego necesite otra versión de Proton, como explica la [guía de GE-Proton](/es/guides/install-ge-proton/).

Hay más ayuda en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [Modo consola](/es/features/console-mode/) para ver los temas y diseños que puedes cambiar.
- [Cómo instalar GE-Proton](/es/guides/install-ge-proton/) para tener más versiones de Proton.
- [Epic Games en Linux](/es/guides/epic-games-on-linux/).
- [Primeros pasos](/es/docs/getting-started/).
