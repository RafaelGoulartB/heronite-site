---
title: "Juegos de Epic, GOG y Amazon en Steam Deck"
description: "Cómo jugar juegos de Epic, GOG y Amazon en Steam Deck: instala el AppImage de Heronite en el Modo Escritorio, añádelo a Steam con --console y juega."
eyebrow: Guía de Steam Deck
headline: "Cómo jugar juegos de Epic, GOG y Amazon en Steam Deck"
lead: "Usa Heronite en la Steam Deck para jugar tus juegos de Epic, GOG y Amazon desde el Modo Juego, en una biblioteca pensada para mando."
navLabel: Steam Deck
summary: "Instala el AppImage en el Modo Escritorio, añádelo a Steam con la opción --console y juega tus otras tiendas desde el Modo Juego."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "El modo consola de Heronite con ELDEN RING abierto: Jugar, Estado, Favorito, Ajustes del juego y Página completa en una lista para el mando, sobre el carrusel de portadas."
og: /og/steam-deck.jpg
updated: 2026-11-04
highlights:
  - title: "Instálalo en el Modo Escritorio"
    text: "Descarga el AppImage, hazlo ejecutable e inicia sesión una vez con un teclado."
  - title: "Añádelo a Steam"
    text: "Añade el AppImage como juego que no es de Steam con la opción de lanzamiento --console."
  - title: "Juega desde el Modo Juego"
    text: "Abre Heronite desde tu biblioteca de Steam y usa los botones de la Deck."
  - title: "Una biblioteca para mando"
    text: "Tus otras tiendas están junto a tus juegos de Steam."
faq:
  - q: "¿Funciona Heronite en la Steam Deck?"
    a: "Sí. Funciona en SteamOS como AppImage, y su modo consola está hecho para mandos."
  - q: "¿Qué opción de lanzamiento uso en la Steam Deck?"
    a: "Usa `--console`, que abre el diseño para mandos y televisores. Añade `--fullscreen` para arrancar a pantalla completa."
  - q: "¿Puedo jugar a juegos de Epic Games, GOG y Amazon en la Deck?"
    a: "Sí. Inicia sesión en la página **Tiendas** y los juegos se unen a tu Colección. Los juegos de Windows se ejecutan con Proton. Mira [Inicia sesión en Epic, GOG y Amazon Games](#inicia-sesión-en-epic-gog-y-amazon-games)."
  - q: "¿Tengo que usar el Modo Escritorio cada vez?"
    a: "No. Lo necesitas para instalar Heronite, añadirlo a Steam e iniciar sesión en tus tiendas. Después, quédate en el Modo Juego."
  - q: "¿Puedo añadir un solo juego a Steam en lugar de todo el launcher?"
    a: "Sí. Elige **Añadir a Steam** en las acciones de un juego instalado. Steam recibe un acceso directo que no es de Steam y que inicia ese juego directamente, sin mostrar la ventana de Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

Heronite funciona en la Steam Deck porque SteamOS es Linux. No es una app verificada para Steam Deck, así que lo configuras a mano.

## Qué necesitas

- Una Steam Deck con su SteamOS por defecto.
- Un teclado y un ratón para la configuración, o la pantalla táctil de la Deck y su teclado en pantalla (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Cuentas de las tiendas que quieras usar.

## Cambia al Modo Escritorio

Pulsa el botón <kbd>Steam</kbd>, abre «Power» (energía) y elige «Switch to Desktop» (cambiar a escritorio).

## Descarga e inicia el AppImage

En el navegador del escritorio, abre la [página de descarga](/es/download/) y consigue `Heronite-x86_64.AppImage`. Funciona en SteamOS sin instalar paquetes.

Muévelo a una carpeta donde puedas escribir, como `~/Applications`, y hazlo ejecutable. En el gestor de archivos, haz clic derecho en el archivo, elige «Properties» (propiedades), abre «Permissions» (permisos) y marca «Is executable» (es ejecutable). O usa una terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

En el primer arranque Heronite añade los juegos de Steam que encuentra, sin iniciar sesión. También busca emuladores y carpetas de ROMs.

## Inicia sesión en Epic, GOG y Amazon Games

Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas** e inicia sesión en Epic Games, GOG o Amazon Games. Inicia sesión en la página de la tienda, en la ventana que se abre, y usa un teclado para escribir tu contraseña. Toda tu biblioteca aparece entonces en la Colección.

Instala uno o dos juegos ahora, mientras tienes el escritorio. Puedes elegir la carpeta de instalación, así que la tarjeta SD también sirve. Cada tienda tiene su guía: [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/).

## Añade Heronite a Steam

1. Abre Steam en el Modo Escritorio.
2. Elige «Add a Game» (añadir un juego) abajo a la izquierda de la biblioteca y luego «Add a Non-Steam Game» (añadir un juego que no es de Steam).
3. Haz clic en «Browse» (examinar), pon el filtro de archivos en todos los archivos y selecciona `Heronite-x86_64.AppImage`.
4. Añádelo, busca **Heronite** en tu biblioteca, haz clic derecho y abre «Properties» (propiedades).
5. En «Launch Options» (opciones de lanzamiento), escribe:

```
--console
```

`--console` abre Heronite en el modo consola, el diseño pensado primero para mandos. Añade también `--fullscreen` para una ventana a pantalla completa. Los nombres de los menús de Steam pueden cambiar entre actualizaciones. Mira [Línea de comandos y enlaces](/es/docs/command-line-and-links/) para ver todas las opciones.

## Inicia Heronite en el Modo Juego

Haz doble clic en el icono «Return to Gaming Mode» (volver al Modo Juego) del escritorio. Heronite está en tu biblioteca, entre los juegos que no son de Steam. Ábrelo y llegarás a la pantalla de inicio del modo consola, con un estante **Seguir jugando** con tus juegos recientes. La pestaña **Biblioteca** contiene todos los juegos.

![La biblioteca del modo consola de Heronite: una cuadrícula de portadas de juegos con los filtros Mostrar, Ordenar, Estado y Buscar arriba y las indicaciones de Detalles, Instalar y Buscar abajo.](../../../assets/screenshots/console-library.webp)

Los controles son los botones propios de la Deck:

| Botón | Acción |
|---|---|
| A | Confirmar |
| B | Volver |
| X, Y | Las acciones que se muestran en pantalla |
| L1 / R1 | Cambiar de pestaña |
| Cruceta, stick izquierdo | Moverse |
| Botón de menú | Abrir el menú |

Las imágenes de los botones siguen al mando, y Heronite conoce las de la Steam Deck. Si los botones no responden, revisa la configuración de mando que usa Steam para la entrada de Heronite. La lista completa está en [Modo consola](/es/docs/console-mode/).

## Instala y juega un juego

1. Abre la pestaña **Biblioteca** con R1.
2. Elige un juego y pulsa X para instalarlo.
3. Pulsa A en un juego instalado para abrir su página y elige **Jugar**.

Para tener un juego como entrada propia en Steam, usa **Añadir a Steam** en las acciones del juego. Para abrir el modo consola sin la opción de lanzamiento, activa las opciones de inicio o de mando en **Ajustes → Modo consola**.

## Límites en la Steam Deck

- No todos los juegos de Windows funcionan bien con Proton. Los detalles del juego muestran su valoración de ProtonDB y el estado del anticheat.
- Algunos juegos necesitan un límite de FPS más bajo por la batería y la pantalla de la Deck. Defínelo para cada juego en **Ajustes del juego**.
- La superposición dentro del juego (beta) necesita una sesión Wayland con soporte de layer-shell. Lee [Modo consola](/es/docs/console-mode/) antes de depender de ella.

## Heronite no arranca o no se actualiza en la Steam Deck

- **Heronite no arranca.** Asegúrate de que el archivo es ejecutable. Ejecútalo desde una terminal para ver cualquier mensaje.
- **El AppImage no se actualiza.** Se reemplaza a sí mismo, así que su carpeta debe tener permiso de escritura. Muévelo a `~/Applications` o a otra carpeta de tu carpeta personal.

Para problemas de inicio de sesión y de juegos, mira [Solución de problemas](/es/docs/troubleshooting/). Puede que un juego necesite otra versión de Proton: mira la [guía de GE-Proton](/es/guides/install-ge-proton/).
