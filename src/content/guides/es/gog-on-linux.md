---
title: "Cómo jugar juegos de GOG en Linux sin GOG Galaxy"
description: "Juega tu biblioteca de GOG en Linux sin GOG Galaxy: inicia sesión con Heronite, instala con gogdl o añade a mano instaladores offline sin DRM. Paso a paso."
eyebrow: Guía de Linux
headline: "Cómo jugar juegos de *GOG* en Linux"
lead: "GOG no tiene app para Linux, pero no la necesitas. Inicia sesión con Heronite para instalar tu biblioteca, o añade los instaladores sin DRM que ya descargaste."
navLabel: GOG en Linux
summary: "Inicia sesión en GOG desde Heronite, instala juegos con gogdl, o añade a mano instaladores offline y carpetas de juegos sin DRM."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego seleccionado: su portada, un botón Jugar, los detalles y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Inicia sesión en la página Tiendas"
    text: "Pulsa Ctrl+4, elige GOG e inicia sesión. Toda tu biblioteca se une a la Colección."
  - title: "Instala con gogdl"
    text: "Heronite descarga y verifica los juegos con gogdl, la misma herramienta de código abierto que usa Heroic."
  - title: "Sin DRM, a tu manera"
    text: "Añade los instaladores offline o las carpetas que ya tienes, sin iniciar sesión."
  - title: "Necesita python3"
    text: "gogdl funciona con Python, así que instala python3 si fallan las descargas de GOG."
faq:
  - q: "¿Hay un GOG Galaxy para Linux?"
    a: "No, GOG no hace una versión oficial de Galaxy para Linux. Heronite usa en su lugar la herramienta de código abierto [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para iniciar sesión, descargar, verificar y actualizar tus juegos."
  - q: "¿Funcionan los juegos de GOG en Linux?"
    a: "Muchos sí. La mayoría de los juegos de GOG son juegos de Windows y se ejecutan con Wine o Proton. Algunos también tienen versión nativa para Linux, y Heronite puede ofrecerla cuando GOG la lista. Mira la valoración del juego en [ProtonDB](https://www.protondb.com) en sus detalles antes de instalar."
  - q: "¿Por qué fallan mis descargas de GOG en Linux?"
    a: "gogdl necesita `python3`. Instálalo con tu gestor de paquetes y vuelve a intentar la descarga. Consulta la [página de solución de problemas](/docs/troubleshooting/) para otras causas."
  - q: "¿Puedo jugar juegos de GOG sin iniciar sesión?"
    a: "Sí. Los juegos de GOG no tienen DRM, así que un instalador offline descargado de la web de GOG funciona sin ningún launcher. Añade a mano el juego instalado a Heronite y se juega como cualquier otro."
  - q: "¿Puedo usar mis juegos de GOG Galaxy en Windows?"
    a: "Sí, en Windows. Heronite puede mostrar como instalados los juegos que instaló GOG Galaxy, sin descargarlos otra vez, y GOG Galaxy sigue actualizándolos. En Linux no hay Galaxy desde donde importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

Tu biblioteca de GOG puede vivir en Linux sin GOG Galaxy. Heronite inicia sesión en tu cuenta, lista todos los juegos que tienes y los instala con una sola cola. Los juegos de GOG no tienen DRM, así que también puedes saltarte el inicio de sesión y añadir tus propios instaladores.

Esta guía muestra las dos formas: con inicio de sesión, y a mano para los instaladores offline y las carpetas que ya tienes.

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione.
- `python3` instalado. La herramienta gogdl funciona con él.
- Una cuenta de GOG, para la forma con inicio de sesión. La forma a mano no necesita cuenta.
- Espacio en disco. Heronite instala los juegos en `~/Games/Heronite` por defecto.

## Paso 1: Instala Heronite

Consigue el AppImage en la [página de descarga](/es/download/). Funciona en cualquier distribución:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los paquetes para Debian, Ubuntu, Fedora y Arch están en la [guía de instalación](/es/docs/installation/).

## Paso 2: Comprueba que python3 está instalado

```bash
python3 --version
```

Si muestra una versión, todo está bien. Si el comando no existe, instala `python3` con tu gestor de paquetes. Sin él, las descargas de GOG fallan.

## Paso 3: Inicia sesión en GOG

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **GOG** y usa **Iniciar sesión con GOG**.
3. Inicia sesión en la ventana pequeña con la página de GOG.

Si la ventana no se abre, usa el **método del navegador** en la misma página. Abre la página de inicio de sesión en tu navegador e inicia sesión. Después copia la dirección de la página a la que llegas. Contiene `code=`. Pégala en Heronite. En Linux la ventana de inicio de sesión necesita WebKitGTK 4.1, que es la razón habitual de que no se abra.

Tras iniciar sesión, toda tu biblioteca de GOG aparece en la Colección, esté instalada o no. Lee [Tiendas y launchers](/es/docs/stores-and-launchers/) para ver cómo maneja Heronite cada tienda.

## Paso 4: Instala un juego

1. Busca el juego en la Colección y pulsa <kbd>Enter</kbd>, o elige **Instalar con GOG**.
2. Elige la **Carpeta de instalación** y, para un juego de Windows, la **Versión de Wine**. La opción por defecto es un buen punto de partida.
3. Confirma. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Heronite descarga y verifica el juego con [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl). Una sola cola de descargas se encarga de instalaciones, actualizaciones, reparaciones y traslados, se pausa cuando estás sin conexión y reintenta las descargas fallidas. Heronite busca actualizaciones de los juegos cada 3 horas.

Antes de una descarga grande, mira el recuadro **En Linux** en los detalles del juego. Muestra su valoración de [ProtonDB](https://www.protondb.com), así sabes si funciona bien.

![Los Ajustes del juego de Control en la pestaña Compatibilidad, con la versión de Proton, su valoración de ProtonDB y el prefijo de Wine.](../../../assets/screenshots/game-settings.webp)

*Elige otra versión de Proton para cada juego en Ajustes del juego → Compatibilidad.*

## Paso 5: Juega

Pulsa <kbd>Enter</kbd> sobre el juego para iniciarlo. Los juegos de Windows se ejecutan con Wine o Proton, con su propio prefijo en `~/Games/Heronite/Prefixes`. Si un juego da problemas, abre **Ajustes del juego** y ve a **Compatibilidad** para probar otra versión. La [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo conseguir más.

## Añadir a mano juegos sin DRM

Los juegos de GOG no tienen DRM, así que no necesitas iniciar sesión para jugarlos. Es útil cuando guardas los instaladores en un disco, o cuando no quieres que un launcher toque tu cuenta.

1. Descarga el instalador offline desde tu cuenta de GOG en la web.
2. Si es un instalador de Windows, ejecútalo con Wine, tú mismo o con el botón **Ejecutar .exe en el prefijo** en **Ajustes del juego → Compatibilidad** de un juego. Si es un instalador de Linux, ejecútalo como de costumbre.
3. Pulsa <kbd>Ctrl</kbd> <kbd>N</kbd> y añade el juego instalado. Elige un programa de Windows (`.exe`), un programa nativo de Linux o un script de inicio.
4. O apunta Heronite a la carpeta donde guardas tus juegos. Añade todos los que encuentre de una vez.

Heronite buscará imágenes y detalles para ellos, pero no están vinculados a tu cuenta de GOG, así que no se actualizan solos. Si los archivos de un juego de GOG ya están en este PC, usa **Importar un juego instalado** en la página de GOG en lugar de descargarlo otra vez.

## Actualizaciones, reparaciones y versiones nativas para Linux

Los juegos de GOG instalados por Heronite se pueden actualizar, reparar, mover a otro disco o desinstalar desde la misma cola de descargas. Heronite busca actualizaciones cada 3 horas, y la página de GOG tiene un botón **Actualizar todo** cuando hay varias pendientes.

Algunos juegos de GOG también tienen una versión nativa para Linux. Cuando GOG la lista, Heronite puede ofrecerla en lugar de la versión de Windows. Una versión nativa no necesita Wine. Si da problemas, aún puedes instalar la versión de Windows y ejecutarla con Proton.

Tus juegos instalados se quedan en el disco si cierras sesión en GOG en Heronite. Tu sesión de GOG se guarda en la carpeta de datos de Heronite, así que mantén esa carpeta privada cuando la compartas o la copies.

## Solución de problemas

- **Las descargas de GOG fallan.** Instala `python3`. gogdl lo necesita.
- **La ventana de inicio de sesión no se abre.** Usa el método del navegador, o instala WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`).
- **Falta una DLL o .NET.** Instálalo con Winetricks. Heronite indica cuál.
- **Un juego de DirectX 12 falla.** Activa VKD3D-Proton en los ajustes del juego.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits, como `lib32-vulkan-radeon` o `mesa-vulkan-drivers:i386`.
- **Un juego no arranca en absoluto.** Abre **Ajustes → Logs** y lee su log de inicio. Heronite muestra una solución cuando conoce alguna.

Hay más soluciones en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [Epic Games en Linux](/es/guides/epic-games-on-linux/) y [Amazon Games en Linux](/es/guides/amazon-games-on-linux/) para tus otras bibliotecas.
- [Cómo funcionan las tiendas en Heronite](/es/features/stores/).
- [Wine y Proton](/es/docs/wine-and-proton/) para las opciones de cada juego.
- [Archivos y carpetas](/es/docs/files-and-folders/) para ver dónde están tus juegos y tus inicios de sesión.
