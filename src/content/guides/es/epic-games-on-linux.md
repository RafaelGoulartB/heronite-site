---
title: "Cómo jugar juegos de Epic Games en Linux (y los gratis)"
description: "Juega tu biblioteca de Epic Games Store en Linux con Heronite: inicia sesión, reclama los juegos gratis de la semana, instala con Proton y revisa el anticheat."
eyebrow: Guía de Linux
headline: "Cómo jugar juegos de *Epic Games* en Linux"
lead: "Epic no tiene app para Linux, pero toda tu biblioteca se puede jugar en Linux. Esta guía explica cómo iniciar sesión, reclamar los juegos gratis semanales, instalarlos y elegir la versión de Proton adecuada."
navLabel: Epic Games en Linux
summary: "Inicia sesión en Epic desde Heronite, instala tus juegos con Proton y revisa la compatibilidad con el anticheat antes de descargar."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con ELDEN RING abierto: su botón Jugar y, debajo, el recuadro En Linux con la valoración Gold de ProtonDB y el estado del anticheat EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Inicia sesión una vez"
    text: "Pulsa Ctrl+4, elige Epic Games e inicia sesión. Toda tu biblioteca se une a la Colección, esté instalada o no."
  - title: "Con los juegos gratis"
    text: "Reclama el juego gratis de la semana en la web de Epic, actualiza la biblioteca y aparece listo para instalar."
  - title: "Proton por defecto"
    text: "Los juegos de Windows se ejecutan con Proton. Heronite elige una versión por ti y puedes cambiarla en cada juego."
  - title: "Mira antes de instalar"
    text: "Cada juego muestra su valoración de ProtonDB y el estado del anticheat, así sabes si va a funcionar."
faq:
  - q: "¿Hay un Epic Games Launcher para Linux?"
    a: "No. Epic no hace una versión de su launcher para Linux. Heronite usa la herramienta de código abierto [legendary](https://github.com/derrod/legendary), que habla con los servidores de Epic igual que el launcher, así que puedes iniciar sesión, instalar, actualizar y jugar sin la app oficial."
  - q: "¿Se puede jugar a Fortnite en Linux?"
    a: "Ahora mismo no. Los desarrolladores de Fortnite no han activado el soporte de Linux en su anticheat, y [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lo marca como no compatible. Heronite muestra este estado en los detalles del juego, así que míralo antes de perder tiempo con una descarga."
  - q: "¿Funcionan en Linux los juegos gratis semanales de Epic?"
    a: "Sí, una vez que los reclamas. Reclama el juego en la web de Epic con la misma cuenta y actualiza tu biblioteca en Heronite. Los juegos gratis son juegos normales de tu biblioteca, así que se instalan y se ejecutan como cualquier otro."
  - q: "¿Necesito instalar Wine o Proton antes?"
    a: "No. Heronite descarga una versión de Proton cuando la necesita. Solo hace falta un controlador de Vulkan que funcione. Lee [Wine y Proton](/docs/wine-and-proton/) para saber qué puedes cambiar."
  - q: "¿Es seguro iniciar sesión en Epic a través de Heronite?"
    a: "Tu contraseña solo va a la página de inicio de sesión de Epic, que se abre en una ventana pequeña. Heronite guarda la sesión en tu PC. Consulta las [preguntas frecuentes](/docs/faq/) para más información."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

Puedes jugar tu biblioteca de Epic Games Store en Linux sin el launcher oficial y sin configurar Wine a mano. Heronite inicia sesión en tu cuenta de Epic, muestra en un solo lugar todos los juegos que tienes y ejecuta los de Windows con Proton.

Al terminar esta guía tendrás tu biblioteca de Epic en tu PC con Linux, el juego gratis de la semana reclamado e instalado, y una forma de saber qué juegos no van a funcionar.

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione (Mesa para AMD e Intel, el controlador propietario para NVIDIA).
- Una cuenta de Epic Games.
- Espacio libre en disco para los juegos. Heronite los instala en `~/Games/Heronite` por defecto.
- Unos diez minutos.

## Paso 1: Instala Heronite

Abre la [página de descarga](/es/download/) y consigue el AppImage, que funciona en cualquier distribución. Hazlo ejecutable e inícialo:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

También hay paquetes `.deb`, `.rpm` y para Arch. La [guía de instalación](/es/docs/installation/) los lista todos. Si prefieres el AppImage, déjalo en una carpeta donde puedas escribir, como `~/Applications`, para que pueda actualizarse solo.

## Paso 2: Comprueba tu controlador de Vulkan

Heronite y la mayoría de los juegos de Windows en Linux necesitan Vulkan. Comprueba que funciona:

```bash
vulkaninfo --summary
```

Si aparece tu GPU, todo está listo. Si no, instala el controlador de Vulkan de tu distribución (por ejemplo `vulkan-radeon` o `vulkan-intel` en Arch, `mesa-vulkan-drivers` en Ubuntu, o el controlador de NVIDIA). Los juegos antiguos de 32 bits también necesitan el controlador de Vulkan de 32 bits, como `lib32-vulkan-radeon` o `mesa-vulkan-drivers:i386`.

## Paso 3: Inicia sesión en Epic Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Epic Games** y luego **Iniciar sesión con Epic Games**.
3. Inicia sesión en la ventana pequeña que se abre. La contraseña la escribes en la página de Epic.

Si la ventana no se abre, usa el **método del navegador** en la misma página: abre la página de inicio de sesión en tu navegador de siempre, inicia sesión, copia la dirección o el código al que llegas y pégalo en Heronite. En Linux la ventana necesita WebKitGTK 4.1, y esa es la causa habitual.

Cuando hayas iniciado sesión, toda tu biblioteca de Epic aparece en la Colección, esté instalada o no. Heronite la lee con [legendary](https://github.com/derrod/legendary). Hay más en [Tiendas y launchers](/es/docs/stores-and-launchers/).

## Paso 4: Reclama los juegos gratis de cada semana

Epic regala juegos gratis cada semana. Heronite no los reclama por ti, así que esta parte se hace en el lado de Epic:

1. Abre la página de la tienda de Epic en tu navegador e inicia sesión con la misma cuenta.
2. Reclama el juego gratis para que se añada a tu biblioteca.
3. Vuelve a Heronite, abre **Tiendas**, **Epic Games** y elige **Actualizar biblioteca** («Buscar juegos nuevos y actualizaciones»).

El juego nuevo aparece en la Colección como cualquier otro. Los juegos gratis que reclamaste en semanas anteriores también están ahí.

## Paso 5: Instala un juego

Antes de instalar, mira los detalles del juego en la Colección. El recuadro **En Linux** muestra su valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat. Un juego con valoración Gold o Platinum suele funcionar sin tocar nada.

1. Selecciona el juego y pulsa <kbd>Enter</kbd>, o elige **Instalar con Epic Games**.
2. Revisa la **Carpeta de instalación** y la **Versión de Wine**. Si no estás seguro, deja la versión por defecto.
3. Confirma. La descarga aparece en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Cada juego tiene su propio prefijo de Wine, una carpeta de Windows privada y simulada. Deja desactivado **Usar el prefijo de Wine compartido** salvo que sepas por qué lo quieres. ¿Ya tienes los archivos de un juego en el disco? Usa **Importar una instalación existente** y apunta Heronite a esa carpeta.

## Paso 6: Juega y cambia de Proton si hace falta

Pulsa <kbd>Enter</kbd> sobre el juego para jugar. Si no arranca o va mal, abre **Ajustes del juego** y ve a **Compatibilidad**. El menú **Versión** te permite elegir otra versión de Proton, y la línea de ProtonDB suele indicar cuál funciona mejor.

![Los Ajustes del juego de Control, un juego de Epic, en la pestaña Compatibilidad: la versión de Proton GE-Proton-latest, su valoración Platinum de ProtonDB, el prefijo de Wine y los botones Winecfg y Winetricks.](../../../assets/screenshots/game-settings.webp)

*La pestaña Compatibilidad: elige la versión de Proton para cada juego.*

Versiones como GE-Proton y Proton-CachyOS suelen traer correcciones antes que las demás. La [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo instalarlas.

## Fortnite y otros juegos con anticheat

El anticheat es la razón principal por la que un juego de Epic no funciona en Linux.

- Algunos juegos usan Easy Anti-Cheat o BattlEye y funcionan. Heronite puede aportar los componentes necesarios.
- Algunos desarrolladores no permiten Linux, así que el juego no se ejecutará, hagas lo que hagas.
- Fortnite es uno de ellos. El Easy Anti-Cheat de Epic puede dar soporte a Linux, pero el desarrollador del juego tiene que activarlo, y Fortnite no lo hace. [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) sigue el estado actual de cada juego.

Heronite muestra ese estado en los detalles del juego, así que míralo antes de instalar un juego multijugador grande. Los juegos para un jugador rara vez tienen este problema.

## Solución de problemas

- **La ventana de inicio de sesión no se abre.** Usa el método del navegador en la misma página, o instala WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`).
- **Falta un juego gratis.** Asegúrate de haberlo reclamado con la misma cuenta de Epic y actualiza la biblioteca.
- **Falta una DLL o .NET.** Instálalo con Winetricks. Heronite indica cuál en el log de inicio.
- **Un juego de DirectX 12 falla.** Activa VKD3D-Proton en los ajustes del juego. Si el error es de Direct3D, activa DXVK.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits. Instálalo para tu GPU.
- **Hay otro `wineserver` en ejecución.** Cierra el otro juego o ejecuta `wineserver -k` en ese prefijo.
- **Se cierra al arrancar un juego reciente.** Sube `vm.max_map_count`. Muchas distribuciones ya lo hacen.

Hay más soluciones en [Solución de problemas](/es/docs/troubleshooting/). Los logs están en **Ajustes → Logs**.

## Qué leer a continuación

- [Cómo instalar GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/), las versiones que arreglan más juegos.
- [GOG en Linux](/es/guides/gog-on-linux/) y [Amazon Games en Linux](/es/guides/amazon-games-on-linux/) para traer tus otras tiendas a la misma Colección.
- [Cómo funcionan las tiendas en Heronite](/es/features/stores/).
- [Primeros pasos](/es/docs/getting-started/) para conocer el resto de la app.
