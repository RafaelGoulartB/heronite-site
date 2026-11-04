---
title: "Juegos de Epic, GOG y Amazon en Steam Deck"
description: "Juega a Epic, GOG y Amazon en Steam Deck: instala el AppImage de Heronite en el modo escritorio, añádelo a Steam con --console y ábrelo en el Modo Juego."
eyebrow: Guía de Steam Deck
headline: "Cómo jugar juegos de Epic, GOG y Amazon en Steam Deck"
lead: "Usa Heronite en la Steam Deck para jugar tus juegos de Epic, GOG y Amazon desde el Modo Juego, en una biblioteca pensada para mando."
navLabel: Steam Deck
summary: "Instala el AppImage en el modo escritorio, añádelo a Steam con la opción --console y juega tus otras tiendas desde el Modo Juego."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "El modo consola de Heronite con ELDEN RING abierto: Jugar, Estado, Favorito, Ajustes del juego y Página completa en una lista para el mando, sobre el carrusel de portadas."
og: /og/steam-deck.jpg
updated: 2026-11-04
highlights:
  - title: "Instálalo en el modo escritorio"
    text: "Descarga el AppImage, hazlo ejecutable e inicia sesión una vez con un teclado."
  - title: "Añádelo a Steam"
    text: "Añade el AppImage como juego que no es de Steam con la opción --console."
  - title: "Botones de la Deck"
    text: "Heronite muestra las imágenes de los botones de la Steam Deck."
  - title: "Instala en la tarjeta SD"
    text: "Elige cualquier carpeta de instalación, también la tarjeta SD."
faq:
  - q: "¿Funciona Heronite en la Steam Deck?"
    a: "Sí. Funciona en SteamOS como AppImage, y su modo consola está hecho para mandos."
  - q: "¿Heronite es gratis?"
    a: "Sí. Heronite es gratis y de código abierto bajo la licencia GPL-3.0, sin cuentas, anuncios ni telemetría."
  - q: "¿Tengo que usar el modo escritorio cada vez?"
    a: "No. Lo necesitas para instalar Heronite, añadirlo a Steam e iniciar sesión en tus tiendas. Después, quédate en el Modo Juego."
  - q: "¿Puedo añadir un solo juego a Steam en lugar de todo el lanzador?"
    a: "Sí. Elige **Añadir a Steam** en las acciones de un juego instalado. Steam recibe un acceso directo que no es de Steam y que inicia ese juego directamente, sin mostrar la ventana de Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

Heronite funciona en la Steam Deck porque SteamOS es Linux. No está verificado para Steam Deck, así que lo configuras a mano.

## Qué necesitas

- Una Steam Deck con su SteamOS por defecto.
- Un teclado y un ratón para la configuración, o la pantalla táctil de la Deck y su teclado en pantalla (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Cuentas de las tiendas que quieras usar.

## Instala Heronite en el modo escritorio

1. Pulsa el botón <kbd>Steam</kbd>, abre **Power** (Energía) y elige **Switch to Desktop** (Cambiar a escritorio).
2. En el navegador del escritorio, abre la [página de descarga](/es/download/) y descarga `Heronite-x86_64.AppImage`. Funciona en SteamOS sin instalar paquetes.
3. Muévelo a una carpeta donde puedas escribir, como `~/Applications`.
4. Hazlo ejecutable: en el gestor de archivos, haz clic derecho en el archivo, elige **Properties** (Propiedades), abre **Permissions** (Permisos) y marca **Is executable** (Es ejecutable).
5. Inicia el AppImage.

O haz los pasos 3 a 5 en una terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

En el primer inicio, Heronite añade los juegos de Steam que encuentra, sin iniciar sesión, y busca emuladores y carpetas de ROMs.

## Inicia sesión en Epic, GOG y Amazon Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Epic Games**, **GOG** o **Amazon Games**.
3. Haz clic en **Iniciar sesión**.
4. Inicia sesión en la página de la tienda, en la ventana que se abre. Usa un teclado para escribir tu contraseña.

Los juegos de la tienda aparecen entonces en tu biblioteca. Instala uno o dos juegos ahora, mientras tienes el escritorio. Puedes elegir la carpeta de instalación, así que la tarjeta SD también sirve.

Cada tienda tiene su guía: [Epic Games](/es/guides/epic-games-on-linux/), [GOG](/es/guides/gog-on-linux/) y [Amazon Games](/es/guides/amazon-games-on-linux/).

## Añade Heronite a Steam

1. Abre Steam en el modo escritorio.
2. Elige **Add a Game** (Añadir un juego) abajo a la izquierda de la biblioteca y luego **Add a Non-Steam Game** (Añadir un juego que no es de Steam).
3. Haz clic en **Browse** (Examinar), pon el filtro de archivos en todos los archivos y selecciona `Heronite-x86_64.AppImage`.
4. Añádelo, busca **Heronite** en tu biblioteca, haz clic derecho y abre **Properties** (Propiedades).
5. En **Launch Options** (Opciones de lanzamiento), escribe:

```
--console
```

`--console` abre Heronite en el modo consola, el diseño pensado para mando. Añade `--fullscreen` para una ventana a pantalla completa. Los nombres de los menús de Steam pueden cambiar entre actualizaciones. Mira [Línea de comandos y enlaces](/es/docs/command-line-and-links/) para ver todas las opciones.

## Inicia Heronite en el Modo Juego

1. Haz doble clic en el icono **Return to Gaming Mode** (Volver al Modo Juego) del escritorio.
2. Inicia Heronite desde tu biblioteca de Steam, entre los juegos que no son de Steam.

Heronite abre la pantalla de inicio del modo consola, con un estante **Seguir jugando** con tus juegos recientes. La pestaña **Biblioteca** tiene todos los juegos.

![La biblioteca del modo consola de Heronite: una cuadrícula de portadas de juegos con los filtros Mostrar, Ordenar, Estado y Buscar arriba y las indicaciones de Detalles, Instalar y Buscar abajo.](../../../assets/screenshots/console-library.webp)

*La biblioteca del modo consola: todas las tiendas en una cuadrícula, con ayudas para el mando.*

Los controles son los botones de la Deck:

| Botón | Acción |
|---|---|
| A | Confirmar |
| B | Volver |
| X, Y | Las acciones que se muestran en pantalla |
| L1 / R1 | Cambiar de pestaña |
| Cruceta, stick izquierdo | Moverse |
| Botón de menú | Abrir el menú |

Las imágenes de los botones siguen al mando, y Heronite conoce las de la Steam Deck. La lista completa está en [Modo consola](/es/docs/console-mode/).

## Instala y juega un juego

1. Abre la pestaña **Biblioteca** con R1.
2. Elige un juego y pulsa X para instalarlo.
3. Pulsa A en un juego instalado para abrir su página y elige **Jugar**.

Para tener un juego como entrada propia en Steam, elige **Añadir a Steam** en las acciones del juego. Para abrir el modo consola sin la opción de lanzamiento, activa las opciones de inicio o de mando en **Ajustes → Modo consola**. El overlay dentro del juego (beta) necesita una sesión Wayland con soporte de layer-shell, así que lee [Modo consola](/es/docs/console-mode/) antes de depender de él.

## ¿Qué juegos funcionan bien en Steam Deck?

No todos los juegos de Windows funcionan bien con Proton. Mira la valoración de ProtonDB y el estado del anti-cheat en los detalles del juego antes de instalar. Puede que un juego necesite otra versión de Proton: mira la [guía de GE-Proton](/es/guides/install-ge-proton/).

Algunos juegos necesitan un límite de FPS más bajo por la batería y la pantalla de la Deck. Ponlo para cada juego en **Ajustes del juego**.

## Heronite no abre o no responde en la Steam Deck

- **Heronite no abre.** Asegúrate de que el archivo es ejecutable. Ejecútalo desde una terminal para ver cualquier mensaje.
- **El AppImage no se actualiza.** Se reemplaza a sí mismo, así que su carpeta debe tener permiso de escritura. Muévelo a `~/Applications` o a otra carpeta dentro de tu carpeta personal.
- **Los botones no responden.** Revisa la configuración de mando que usa Steam para la entrada de Heronite.

Para problemas de inicio de sesión y de juegos, mira [Solución de problemas](/es/docs/troubleshooting/).
