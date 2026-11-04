---
title: "Juegos de GOG en Linux sin GOG Galaxy"
description: "Instala juegos de GOG en Linux sin GOG Galaxy: inicia sesión para traer toda tu biblioteca o añade instaladores offline sin DRM, sin cuenta."
eyebrow: Guía de Linux
headline: "Cómo jugar juegos de GOG en Linux"
lead: "Juega tus juegos de GOG en Linux sin GOG Galaxy. Inicia sesión para instalar tu biblioteca desde Heronite, o añade a mano instaladores sin DRM."
navLabel: GOG en Linux
summary: "Inicia sesión en GOG desde Heronite para instalar tu biblioteca, o añade a mano instaladores offline y carpetas de juegos sin DRM."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego seleccionado: su portada, un botón Jugar, los detalles y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Inicia sesión una vez"
    text: "Toda tu biblioteca de GOG aparece tras iniciar sesión una sola vez."
  - title: "Versiones nativas de Linux"
    text: "Si GOG tiene versión para Linux, Heronite puede instalarla sin Wine."
  - title: "Actualizaciones automáticas"
    text: "Heronite busca actualizaciones de tus juegos de GOG cada 3 horas."
  - title: "Un prefijo por juego"
    text: "Cada juego de Windows funciona en su propia carpeta, separado de los demás."
faq:
  - q: "¿Hay un GOG Galaxy para Linux?"
    a: "No, GOG no hace una versión de Galaxy para Linux. Heronite usa [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl), una herramienta de código abierto no oficial para GOG, para iniciar sesión, descargar, verificar y actualizar tus juegos."
  - q: "¿Funcionan los juegos de GOG en Linux?"
    a: "Muchos sí. La mayoría son juegos de Windows que funcionan con Wine o Proton. Mira la valoración del juego en [ProtonDB](https://www.protondb.com) antes de instalar."
  - q: "¿Por qué fallan mis descargas de GOG en Linux?"
    a: "Comprueba que tienes `python3` instalado, porque gogdl lo necesita. Instálalo con tu gestor de paquetes y vuelve a intentarlo. Hay otras causas en la [página de solución de problemas](/docs/troubleshooting/)."
  - q: "¿Puedo jugar juegos de GOG en Steam Deck?"
    a: "Sí. Inicia sesión en GOG en el modo escritorio y luego juega desde el Modo Juego. La [guía de Steam Deck](/guides/steam-deck/) tiene los pasos."
  - q: "¿Puedo usar mis juegos de GOG Galaxy en Windows?"
    a: "Sí, en Windows. Heronite muestra como instalados los juegos instalados con GOG Galaxy, sin descargarlos otra vez. En Linux no hay Galaxy desde donde importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione.
- `python3`, que usa gogdl (la herramienta de descargas de GOG). Compruébalo con `python3 --version` e instálalo con tu gestor de paquetes si el comando no existe.
- Una cuenta de GOG, para iniciar sesión. Añadir juegos a mano no necesita cuenta.
- Espacio libre en disco. Los juegos se instalan en `~/Games/Heronite`.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Inicia sesión en GOG

1. Abre **Tiendas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Elige **GOG**.
3. Haz clic en **Iniciar sesión**.
4. Inicia sesión en la página de GOG, en la ventana que se abre.

Toda tu biblioteca de GOG aparece entonces en Heronite. Si la ventana de inicio de sesión no se abre, usa **O inicia sesión con tu navegador** en esa misma página y pega el código que te dé. En GOG, el código es la dirección a la que llegas, que contiene `code=` ([inicios de sesión en tiendas](/es/docs/troubleshooting/#falla-un-inicio-de-sesión-o-una-descarga-de-una-tienda)).

## Instala y juega un juego de GOG

Mira primero la fila **En Linux** en los detalles del juego para ver la valoración de [ProtonDB](https://www.protondb.com).

1. Busca el juego en tu biblioteca y pulsa <kbd>Enter</kbd>, o elige **Instalar con GOG**.
2. Revisa la carpeta en **Seleccionar ruta de instalación**. Para un juego de Windows, la **Versión de Wine** está en **Mostrar ajustes de Wine**; la opción por defecto es un buen punto de partida.
3. Haz clic en **Instalar**. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Cuando termine, selecciona el juego y pulsa <kbd>Enter</kbd> para jugar.

Si GOG tiene una versión nativa para Linux, Heronite puede ofrecerla en lugar de la de Windows, sin Wine.

## Cambia la versión de Proton

Si un juego de Windows da problemas, abre **Ajustes del juego → Compatibilidad** y elige otra versión en **Versión**. La [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo conseguir más.

![Los Ajustes del juego de Control en la pestaña Compatibilidad, con la versión de Proton, su valoración de ProtonDB y el prefijo de Wine.](../../../assets/screenshots/game-settings.webp)

Cada juego de Windows tiene su propio prefijo de Wine (una carpeta que funciona como un Windows solo para ese juego) en `~/Games/Heronite/Prefixes`.

## Añade a mano juegos de GOG sin DRM

1. Descarga el instalador offline desde tu cuenta de GOG en la web.
2. Ejecuta el instalador. Para uno de Windows, haz clic en **Ejecutar .exe en el prefijo** en **Ajustes del juego → Compatibilidad**, o ejecútalo tú mismo con Wine.
3. Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> y añade el juego instalado: un programa de Windows (`.exe`), un programa nativo de Linux o un script de inicio.

Para añadir muchos juegos a la vez, elige **Añadir desde una carpeta** en el menú ☰. Heronite busca imágenes y detalles para estos juegos, pero no están vinculados a tu cuenta de GOG, así que no se actualizan.

Si un juego de GOG ya está en este PC, haz clic en **Importar juego** bajo **Importar un juego instalado** en la página de GOG en lugar de descargarlo otra vez.

## Actualiza, repara o mueve un juego de GOG

- **Actualizar:** Heronite busca actualizaciones cada 3 horas. **Actualizar todo** en la página de GOG instala varias a la vez.
- **Reparar o mover:** elige **Verificar y reparar** o **Mover instalación** en las acciones del juego.

Una sola cola de descargas hace estas tareas y las desinstalaciones. Se pausa cuando estás sin conexión y reintenta las descargas fallidas.

Los juegos instalados se quedan en el disco si cierras sesión en GOG. Heronite guarda tu sesión en su carpeta de datos, así que mantén esa carpeta privada ([Archivos y carpetas](/es/docs/files-and-folders/)).

## Un juego de GOG no abre en Linux

Abre **Ajustes → Logs** y lee el log de inicio del juego. Heronite muestra una solución cuando conoce alguna. Las soluciones habituales de Wine están en [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux), y las opciones de cada juego en [Wine y Proton](/es/docs/wine-and-proton/#opciones-por-juego).
