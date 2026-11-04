---
title: "Cómo jugar GOG en Linux sin GOG Galaxy"
description: "Cómo jugar juegos de GOG en Linux sin GOG Galaxy: inicia sesión para traer toda tu biblioteca o añade instaladores offline sin DRM, sin cuenta."
eyebrow: Guía de Linux
headline: "Cómo jugar juegos de GOG en Linux"
lead: "Juega tus juegos de GOG en Linux sin GOG Galaxy. Inicia sesión y Heronite los instala con gogdl, o añade a mano instaladores sin DRM."
navLabel: GOG en Linux
summary: "Inicia sesión en GOG desde Heronite, instala juegos con gogdl, o añade a mano instaladores offline y carpetas de juegos sin DRM."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego seleccionado: su portada, un botón Jugar, los detalles y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Inicia sesión en Tiendas"
    text: "Toda tu biblioteca de GOG se une a la Colección tras iniciar sesión."
  - title: "Instala con gogdl"
    text: "gogdl es la herramienta de código abierto que también usa Heroic."
  - title: "Sin DRM, a tu manera"
    text: "Añade instaladores offline o carpetas de juegos sin iniciar sesión."
  - title: "Necesita python3"
    text: "gogdl funciona con Python, así que instala python3 primero."
faq:
  - q: "¿Hay un GOG Galaxy para Linux?"
    a: "No, GOG no hace una versión de Galaxy para Linux. Heronite usa la herramienta de código abierto [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para iniciar sesión, descargar, verificar y actualizar tus juegos."
  - q: "¿Funcionan los juegos de GOG en Linux?"
    a: "Muchos sí. La mayoría son juegos de Windows que se ejecutan con Wine o Proton, y algunos tienen versión nativa para Linux. Mira la valoración del juego en [ProtonDB](https://www.protondb.com) antes de instalar."
  - q: "¿Por qué fallan mis descargas de GOG en Linux?"
    a: "gogdl necesita `python3`. Instálalo con tu gestor de paquetes y vuelve a intentarlo. Hay otras causas en la [página de solución de problemas](/docs/troubleshooting/)."
  - q: "¿Puedo jugar juegos de GOG sin iniciar sesión?"
    a: "Sí. Los juegos de GOG no tienen DRM, así que un instalador offline funciona sin ningún launcher. Mira [Añade a mano juegos de GOG sin DRM](#añade-a-mano-juegos-de-gog-sin-drm)."
  - q: "¿Puedo usar mis juegos de GOG Galaxy en Windows?"
    a: "Sí, en Windows. Heronite muestra como instalados los juegos que instaló GOG Galaxy, sin descargarlos otra vez. En Linux no hay Galaxy desde donde importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione.
- `python3`, con el que funciona la herramienta gogdl. Compruébalo con `python3 --version` e instálalo con tu gestor de paquetes si el comando no existe.
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

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **GOG** y luego **Iniciar sesión con GOG**.
3. Inicia sesión en la página de GOG, en la ventana que se abre.

Toda tu biblioteca de GOG aparece ahora en la Colección.

Si la ventana no se abre, usa el **método del navegador** en la misma página. Copia la dirección a la que llegas, que contiene `code=`, y pégala en Heronite. Mira [Solución de problemas](/es/docs/troubleshooting/#falla-un-inicio-de-sesión-o-una-descarga-de-una-tienda) para los inicios de sesión en las tiendas.

## Instala un juego de GOG

Mira primero el recuadro **En Linux** en los detalles del juego para ver la valoración de [ProtonDB](https://www.protondb.com).

1. Busca el juego en la Colección y pulsa <kbd>Enter</kbd>, o elige **Instalar con GOG**.
2. Elige la **Carpeta de instalación** y, para un juego de Windows, la **Versión de Wine**. La opción por defecto es un buen punto de partida.
3. Confirma. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Algunos juegos de GOG tienen versión nativa para Linux. Cuando GOG la lista, Heronite puede ofrecerla en lugar de la de Windows, sin Wine.

## Juega

Selecciona el juego instalado y pulsa <kbd>Enter</kbd>.

## Cambia la versión de Proton

Los juegos de Windows se ejecutan con Wine o Proton, cada uno con su prefijo en `~/Games/Heronite/Prefixes`. Si un juego da problemas, prueba otra versión de Proton en **Ajustes del juego → Compatibilidad**. La [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo conseguir más.

![Los Ajustes del juego de Control en la pestaña Compatibilidad, con la versión de Proton, su valoración de ProtonDB y el prefijo de Wine.](../../../assets/screenshots/game-settings.webp)

## Añade a mano juegos de GOG sin DRM

1. Descarga el instalador offline desde tu cuenta de GOG en la web.
2. Ejecuta un instalador de Windows con Wine, tú mismo o con el botón **Ejecutar .exe en el prefijo** en **Ajustes del juego → Compatibilidad**. Ejecuta un instalador de Linux como de costumbre.
3. Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> y añade el juego instalado. Elige un programa de Windows (`.exe`), un programa nativo de Linux o un script de inicio.
4. O apunta Heronite a la carpeta donde guardas tus juegos. Añade todos los que encuentre de una vez.

Heronite busca imágenes y detalles para ellos, pero no están vinculados a tu cuenta de GOG, así que no se actualizan. Si un juego de GOG ya está en este PC, usa **Importar un juego instalado** en la página de GOG en lugar de descargarlo otra vez.

## Actualiza, repara o mueve un juego de GOG

Una sola cola de descargas gestiona actualizaciones, reparaciones, movimientos y desinstalaciones. Heronite busca actualizaciones cada 3 horas, y **Actualizar todo** en la página de GOG instala varias a la vez. La cola se pausa cuando estás sin conexión y reintenta las descargas fallidas.

Los juegos instalados se quedan en el disco si cierras sesión en GOG. Heronite guarda tu sesión en su carpeta de datos, así que mantén esa carpeta privada. Mira [Archivos y carpetas](/es/docs/files-and-folders/).

## Un juego de GOG no arranca en Linux

Abre **Ajustes → Logs** y lee el log de inicio del juego. Heronite muestra una solución cuando conoce alguna. Las correcciones habituales de Wine están en [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux), y las opciones de cada juego en [Wine y Proton](/es/docs/wine-and-proton/#opciones-por-juego).
