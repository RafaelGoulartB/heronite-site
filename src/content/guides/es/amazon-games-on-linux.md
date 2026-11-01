---
title: "Cómo jugar Amazon Games y Prime Gaming en Linux"
description: "Juega tu biblioteca de Amazon Games y Prime Gaming en Linux: inicia sesión con Heronite, reclama tus juegos gratis e instálalos con nile y Proton. Paso a paso."
eyebrow: Guía de Linux
headline: "Cómo jugar *Amazon Games* en Linux"
lead: "La app de juegos de Amazon no tiene versión para Linux. Heronite inicia sesión en tu cuenta de Amazon con nile, así los juegos de Prime Gaming que reclamaste se instalan y se ejecutan en Linux."
navLabel: Amazon Games en Linux
summary: "Inicia sesión en Amazon desde Heronite y tus juegos de Prime Gaming y de Amazon se unen a la Colección, listos para instalar con Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton GE-Proton-latest, su valoración Platinum de ProtonDB, el prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Inicia sesión con Amazon"
    text: "Pulsa Ctrl+4, elige Amazon Games e inicia sesión. Tu biblioteca entra, con los juegos de Prime Gaming que reclamaste."
  - title: "Instala con nile"
    text: "Heronite descarga y verifica los juegos con nile, un cliente de código abierto de Amazon Games."
  - title: "Reclama en la web de Amazon"
    text: "Los juegos gratis de Prime Gaming se reclaman en la página de Amazon y luego se actualizan en Heronite."
  - title: "Funciona con Proton"
    text: "Los juegos de Windows usan Wine o Proton, con una versión que puedes cambiar en cada juego."
faq:
  - q: "¿Hay una app de Amazon Games para Linux?"
    a: "No, Amazon no hace una. Heronite usa la herramienta de código abierto [nile](https://github.com/imLinguin/nile) para iniciar sesión, descargar y actualizar tus juegos, y ejecuta los de Windows con Wine o Proton."
  - q: "¿Funcionan los juegos de Prime Gaming en Linux?"
    a: "Sí, una vez que los reclamas en tu cuenta de Amazon. Después de iniciar sesión, toda tu biblioteca de Amazon Games, con los juegos de Prime Gaming que reclamaste, aparece en tu Colección. Se instalan y se ejecutan como cualquier otro juego."
  - q: "¿Cómo reclamo los juegos de Prime Gaming sin la app de Amazon?"
    a: "Reclámalos en la página de Prime Gaming de Amazon, en tu navegador, con la misma cuenta que usas en Heronite. Luego actualiza la biblioteca en Heronite y los juegos nuevos aparecen."
  - q: "¿Necesito tener Wine instalado antes?"
    a: "No. Heronite elige una versión de Proton y la descarga por ti. Solo necesitas un controlador de Vulkan que funcione. Consulta [Wine y Proton](/docs/wine-and-proton/) para ver las opciones."
  - q: "¿Puedo usar Amazon Games en Windows con Heronite?"
    a: "Sí. En Windows, Heronite puede mostrar los juegos que instaló la app de Amazon Games, sin descargarlos otra vez. Iniciar sesión e instalar funciona igual."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

Amazon regala juegos con Prime, y su propia app solo funciona en Windows. Heronite te permite jugarlos en Linux. Inicias sesión con tu cuenta de Amazon, tu biblioteca aparece en la Colección y los juegos se instalan con la misma cola de descargas que tus juegos de Epic y GOG.

Esta guía te lleva desde una instalación nueva hasta un juego de Prime Gaming reclamado y funcionando en Linux.

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione.
- Una cuenta de Amazon. Para los juegos gratis, una suscripción a Prime que incluya Prime Gaming.
- Espacio libre en disco. Heronite instala los juegos en `~/Games/Heronite` por defecto.

## Paso 1: Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/). Funciona en cualquier distribución:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los paquetes para Debian, Ubuntu, Fedora y Arch están en la [guía de instalación](/es/docs/installation/). Ejecuta `vulkaninfo --summary` para comprobar que Vulkan muestra tu GPU.

## Paso 2: Inicia sesión en Amazon Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Amazon Games** y usa **Iniciar sesión con Amazon Games**.
3. Inicia sesión en la página de Amazon, en la ventana pequeña que se abre.

Si la ventana no se abre, usa el **método del navegador**. En la misma página, elige **Abrir en el navegador**, inicia sesión en Amazon, copia la dirección de la página de amazon.com a la que llegas y pégala en Heronite. En Linux la ventana de inicio de sesión necesita WebKitGTK 4.1, que es la razón habitual.

Después de iniciar sesión, toda tu biblioteca de Amazon Games aparece en la Colección. Eso incluye los juegos de Prime Gaming que ya has reclamado. Heronite la lee con [nile](https://github.com/imLinguin/nile). Hay más en [Tiendas y launchers](/es/docs/stores-and-launchers/).

## Paso 3: Reclama tus juegos de Prime Gaming

Heronite no reclama los juegos por ti, así que haz esto en el lado de Amazon:

1. Abre la página de Prime Gaming de Amazon en tu navegador e inicia sesión.
2. Reclama los juegos que quieras, para que se añadan a tu cuenta.
3. De vuelta en Heronite, abre **Tiendas**, **Amazon Games** y elige **Actualizar biblioteca** («Buscar juegos nuevos y actualizaciones»).

Los juegos nuevos aparecen en la Colección. Amazon renueva sus ofertas, así que reclama un juego mientras esté disponible.

## Paso 4: Instala un juego

Antes de instalar, mira el recuadro **En Linux** en los detalles del juego. Muestra su valoración de [ProtonDB](https://www.protondb.com) y el estado de su anticheat. Un juego con valoración Gold o Platinum suele funcionar sin cambios.

1. Selecciona el juego y pulsa <kbd>Enter</kbd>, o elige **Instalar con Amazon Games**.
2. Revisa la **Carpeta de instalación** y la **Versión de Wine**. La opción por defecto sirve para empezar.
3. Confirma. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Heronite descarga y verifica los juegos con [nile](https://github.com/imLinguin/nile). Una sola cola instala, actualiza, repara, mueve y desinstala juegos, y se pausa cuando estás sin conexión.

## Paso 5: Juega y ajusta

Pulsa <kbd>Enter</kbd> para jugar. Si el juego no arranca, abre **Ajustes del juego** y ve a **Compatibilidad**. Prueba allí otra versión de Proton. GE-Proton y Proton-CachyOS suelen tener las correcciones antes, y la [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo instalarlos. Si un juego sigue fallando, su página en [ProtonDB](https://www.protondb.com) suele traer la solución.

## Mantén tus juegos al día y ordenados

Heronite busca actualizaciones de los juegos cada 3 horas. Cuando un juego tiene una, **Actualizar todo** en la página de Amazon Games las instala todas de una vez. También puedes reparar un juego, moverlo a otro disco o desinstalarlo desde la misma cola, lo cual viene bien cuando la carpeta de un juego crece demasiado para tu disco principal.

Tus juegos instalados se quedan en el disco si cierras sesión en Amazon en Heronite. Así puedes cambiar de cuenta, o cerrar sesión en un PC compartido, sin borrar los juegos. Tu sesión de Amazon se guarda en la carpeta de datos de Heronite, así que mantén esa carpeta privada. Consulta [Archivos y carpetas](/es/docs/files-and-folders/) para ver dónde está.

Cuando los juegos estén en la Colección, puedes agruparlos, filtrarlos y puntuarlos como cualquier otro, junto a tus juegos de Steam, Epic y GOG. Una vista guardada como *Backlog* cubre entonces todas las tiendas a la vez.

## Una nota sobre Windows

En Windows, Heronite funciona con Amazon de la misma manera, y puede añadir los juegos que instaló la app de Amazon Games sin descargarlos otra vez. Los pasos de Wine y Proton de esta guía solo se aplican a Linux.

## Límites que conviene conocer

- Los juegos con un anticheat que bloquea Linux no funcionan. Mira el estado en los detalles, que viene de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Las ofertas de Prime Gaming cambian a menudo. Lo que puedes reclamar depende de Amazon, no de Heronite.
- Heronite muestra lo que tu cuenta de Amazon posee. Un juego que no está en tu cuenta no aparece.

## Solución de problemas

- **La ventana de inicio de sesión no se abre.** Usa el método del navegador, o instala WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`).
- **Falta un juego reclamado.** Comprueba que usaste la misma cuenta de Amazon y actualiza la biblioteca.
- **Falta una DLL o .NET.** Instálalo con Winetricks. Heronite indica cuál.
- **Un juego de DirectX 12 falla.** Activa VKD3D-Proton en los ajustes del juego. Si el error es de Direct3D, activa DXVK.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits. Instálalo para tu GPU.
- **Hay otro `wineserver` en ejecución.** Cierra el otro juego o ejecuta `wineserver -k` en ese prefijo.

Los logs están en **Ajustes → Logs**. Hay más soluciones en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [Epic Games en Linux](/es/guides/epic-games-on-linux/) para los juegos gratis de cada semana.
- [GOG en Linux](/es/guides/gog-on-linux/) para juegos sin DRM.
- [Cómo funcionan las tiendas en Heronite](/es/features/stores/).
- [Primeros pasos](/es/docs/getting-started/).
