---
title: "Cómo ejecutar juegos de Windows en Linux | Heronite"
description: "Ejecuta juegos de Windows en Linux desde un solo lanzador. Heronite gestiona Proton-CachyOS y GE-Proton, prefijos, DXVK, gamescope, límite de FPS, DLSS y FSR."
eyebrow: Wine y Proton
headline: "Juegos de Windows en Linux, *sin el dolor de cabeza*"
lead: "Un gestor de Wine y Proton y un lanzador de juegos en una sola app. Elige una versión, dale a cada juego su propio prefijo y ajusta DXVK, gamescope, el límite de FPS y el escalado por juego."
navLabel: Wine y Proton
summary: "Un Gestor de Wine integrado, prefijos y opciones por juego, un sandbox y pistas ante errores de inicio para juegos de Windows en Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Ajustes del juego de Control en la pestaña Compatibilidad: la versión de Proton en GE-Proton-latest con una valoración Platinum de ProtonDB, el prefijo de Wine y su carpeta, los botones Winecfg y Winetricks, y el campo del ID de umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-01
highlights:
  - title: Gestor de Wine
    text: Descarga y actualiza Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek.
  - title: Ajustes por juego
    text: Versión, prefijo, DXVK, VKD3D-Proton, gamescope, límite de FPS, elección de GPU y mejoras de DLSS, FSR o XeSS.
  - title: Sandbox
    text: Ejecuta un juego en el que no confías sin red y sin acceso a tu carpeta personal.
  - title: Soluciones cuando falla
    text: Heronite lee el log de inicio y sugiere una solución cuando reconoce el problema.
faq:
  - q: ¿Cómo ejecuto juegos de Windows en Linux?
    a: Instala Heronite, añade el juego o inicia sesión en su tienda y pulsa Jugar. Heronite lo ejecuta con Wine o Proton con valores predeterminados razonables. Si un juego necesita otros ajustes, cámbialos en **Ajustes del juego**, en la pestaña **Compatibilidad**.
  - q: ¿Cuál es la mejor versión de Proton para mi juego?
    a: No hay una única mejor. **Proton-CachyOS** y **GE-Proton** suelen recibir las correcciones primero, así que son un buen punto de partida. La página de un juego muestra su valoración de [ProtonDB](https://www.protondb.com), y puedes cambiar a otra versión con un clic. Consulta [cómo instalar GE-Proton](/guides/install-ge-proton/).
  - q: ¿Hay un gestor de Proton para juegos que no son de Steam?
    a: Sí. El **Gestor de Wine** (`Ctrl+3`) descarga y actualiza versiones de Proton para cualquier juego de tu Colección. Activa la opción de Steam y las mismas versiones también aparecen en la carpeta `compatibilitytools.d` de Steam.
  - q: ¿Los juegos con anti-cheat funcionan en Linux?
    a: Depende del juego. El estado procede de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) y se muestra en los detalles del juego. Heronite puede aportar los runtimes de EAC y BattlEye, pero un juego cuyo desarrollador no permite Linux no funcionará. Consulta el [anti-cheat](/docs/wine-and-proton/).
  - q: ¿Puedo usar la generación de fotogramas de Lossless Scaling en Linux?
    a: Sí, mediante [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Necesitas Lossless Scaling de Steam, y funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL.
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Los juegos de Windows se ejecutan en Linux con Wine o Proton. Hoy los dos funcionan bien, pero configurarlos juego por juego es lento: qué versión, qué prefijo, qué variables de entorno. Heronite hace ese trabajo por ti. Elige valores predeterminados razonables, y cada opción se puede cambiar por juego en **Ajustes del juego**, en la pestaña **Compatibilidad**, o para todos los juegos en Ajustes.

## ¿Cómo ejecuta Heronite los juegos de Windows en Linux?

Cuando pulsas Jugar en un juego de Windows, Heronite lo inicia con Wine o Proton, en un prefijo propio. Eso vale para los juegos de [Epic, GOG, Amazon y las demás tiendas](/es/features/stores/) y también para los programas de Windows que añades a mano. La página del juego muestra su valoración de ProtonDB, así que sabes qué tan bien debería funcionar antes de instalarlo.

Tu biblioteca de juegos no cambia. Los juegos de Windows conviven con los juegos nativos de Linux y con los [emulados](/es/features/emulation/) en la misma Colección, con el mismo registro de tiempo de juego.

## ¿Qué es el Gestor de Wine?

El Gestor de Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) descarga y actualiza estas versiones:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Las versiones van a la carpeta de datos de Heronite, o a `compatibilitytools.d` de Steam si lo activas, para que Steam también pueda usarlas. Heronite además encuentra las versiones de Proton que ya tienes en tus bibliotecas de Steam y los runners de Wine de Lutris, así que no las descargas dos veces.

![El Gestor de Wine con una lista de versiones de Proton a la izquierda, Proton-CachyOS seleccionada, y sus versiones a la derecha con fechas de lanzamiento, tamaños y botones Instalar.](../../../assets/screenshots/wine-manager.webp)

*El Gestor de Wine: elige una familia de versiones y luego instala o elimina cualquier versión.*

¿Eres nuevo en esto? La guía [instalar GE-Proton](/es/guides/install-ge-proton/) muestra los pasos.

## ¿Necesito saber Wine para usarlo?

No. Heronite elige por ti una versión de Wine o Proton y un prefijo, así que la mayoría de los juegos arrancan con un clic. Abre **Ajustes del juego** solo cuando un juego necesite algo especial, como otra versión de Proton, DXVK o un límite de FPS. Un botón **Restablecer pestaña** devuelve una pestaña a sus valores predeterminados.

## ¿Cómo funcionan los prefijos de Wine?

Un prefijo es la carpeta de Windows simulada en la que se ejecuta un juego. De forma predeterminada los juegos se instalan en `~/Games/Heronite`, y cada juego recibe su propio prefijo en `~/Games/Heronite/Prefixes`. Varios juegos también pueden compartir un prefijo. El Gestor de Wine lista tus prefijos, y los ajustes de un juego tienen botones para **Winecfg** y **Winetricks** en su prefijo.

## ¿Qué opciones puedo ajustar por juego?

Todo lo de abajo se puede ajustar para un solo juego. Heronite también tiene presets de inicio, para reutilizar una configuración en otros juegos.

- Versión de Wine o Proton y prefijo
- DXVK, VKD3D-Proton y DXVK-NVAPI
- Esync y Fsync
- gamescope (requiere tener `gamescope` instalado)
- Límite de FPS
- Elección de GPU en PCs con más de una
- Mejoras de DLSS, FSR y XeSS
- Winetricks
- umu y sus protonfixes, que son correcciones para juegos de la base de datos de umu
- Wayland en lugar de X11 (requiere una versión de Wine con soporte para Wayland)
- Scripts que se ejecutan antes y después del juego, y programas que se ejecutan a su lado, como trainers

### Generación de fotogramas con Lossless Scaling

Heronite puede activar la generación de fotogramas de Lossless Scaling mediante [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Necesita Lossless Scaling de Steam, y funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL.

> **Nota.** Algunas opciones necesitan herramientas adicionales. gamescope necesita `gamescope`, y el sandbox necesita `bubblewrap`. Heronite funciona sin ellas y cada una solo activa su función. La lista está en [Instalación](/es/docs/installation/).

## ¿Puedo aislar un juego de Windows en un sandbox?

Sí. Si no confías en un juego, ejecútalo con [bubblewrap](https://github.com/containers/bubblewrap). El juego no tiene red ni acceso a tu carpeta personal. Cuando necesite una sola cosa, como una carpeta o la red, puedes permitir solo eso. Requiere tener `bwrap` instalado. Más en la [documentación del sandbox](/es/docs/wine-and-proton/).

## ¿Qué pasa cuando un juego no arranca?

Heronite lee el log de inicio y sugiere una solución cuando reconoce el problema. Busca:

- una DLL o .NET que faltan,
- un juego de DirectX 12 sin VKD3D-Proton,
- un driver de Vulkan de 32 bits que falta,
- un `vm.max_map_count` demasiado bajo,
- otro `wineserver` que sigue en ejecución,
- un anti-cheat no compatible.

Más allá de eso, valen los consejos de siempre: prueba otra versión de Proton, como Proton-GE o Proton-CachyOS, prueba con un prefijo nuevo y revisa la página del juego en [ProtonDB](https://www.protondb.com). Los logs están en **Ajustes → Logs**. La [página de solución de problemas](/es/docs/troubleshooting/) tiene la tabla completa.

## ¿Qué puedo hacer con scripts y trainers?

Cada juego puede ejecutar scripts antes y después de iniciarse, y programas a su lado, como trainers. Guarda esa configuración como un **preset de inicio** y reutilízala en otros juegos. Consulta la [documentación](/es/docs/wine-and-proton/) para ver la lista completa.

## ¿Y el anti-cheat?

El anti-cheat es lo principal que decide si un juego online funciona en Linux. Heronite muestra en los detalles de cada juego su estado según [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para que lo compruebes antes de comprar o instalar. Puede aportar los runtimes de EAC y BattlEye. Un juego cuyo desarrollador no permite Linux no funcionará, sea cual sea el launcher.

## ¿Es Heronite un buen launcher de Wine para la Steam Deck?

Heronite funciona en el modo escritorio de SteamOS como AppImage, y su modo consola está pensado para mandos. Consulta la [guía de la Steam Deck](/es/guides/steam-deck/). Si hoy usas Lutris o Heroic, [Heronite vs Lutris](/es/compare/lutris/) y [Heronite vs Heroic](/es/compare/heroic/) explican qué cambia, y Heronite puede importar sus juegos.

## Consulta la referencia completa

Todas las opciones están en la página de documentación [Wine y Proton](/es/docs/wine-and-proton/). ¿Listo para probarlo? [Descarga Heronite](/es/download/) para Linux.
