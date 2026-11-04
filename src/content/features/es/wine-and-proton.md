---
title: "Gestor de Wine y Proton para Linux, GE-Proton | Heronite"
description: "Gestor de Wine y Proton y lanzador de juegos para Linux. Descarga GE-Proton y Proton-CachyOS y ajusta prefijo, DXVK, gamescope y límite de FPS por juego."
eyebrow: Wine y Proton
headline: "Gestor de Wine y Proton para juegos de Windows en Linux"
lead: "Heronite es un gestor de Wine y Proton y un lanzador de juegos en una sola app. Descarga GE-Proton y Proton-CachyOS y da a cada juego su propio prefijo."
navLabel: Wine y Proton
summary: "Un Gestor de Wine integrado, prefijos y opciones por juego, un sandbox y pistas ante errores de inicio para juegos de Windows en Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Ajustes del juego de Control en la pestaña Compatibilidad: la versión de Proton en GE-Proton-latest con una valoración Platinum de ProtonDB, el prefijo de Wine y su carpeta, los botones Winecfg y Winetricks, y el campo del ID de umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Gestor de Wine
    text: Descarga y actualiza versiones de Proton desde una sola lista.
  - title: Ajustes por juego
    text: Define versión, prefijo, DXVK y límite de FPS para cada juego.
  - title: Sandbox
    text: Ejecuta juegos en los que no confías sin red y sin acceso a tu carpeta personal.
  - title: Soluciones cuando falla
    text: Los errores de inicio vienen con una solución sugerida.
faq:
  - q: ¿Cómo ejecuto juegos de Windows en Linux?
    a: Añade el juego y pulsa Jugar. Si es de una tienda, inicia sesión primero en ella. Cambia los ajustes en **Ajustes del juego → Compatibilidad**.
  - q: ¿Cuál es la mejor versión de Proton para mi juego?
    a: No hay una única mejor. **Proton-CachyOS** y **GE-Proton** suelen recibir las correcciones primero, así que empieza por ahí. La página de un juego muestra su valoración de [ProtonDB](https://www.protondb.com).
  - q: ¿Hay un gestor de Proton para juegos que no son de Steam?
    a: Sí. El **Gestor de Wine** (`Ctrl+3`) descarga y actualiza versiones de Proton para cualquier juego de tu Colección.
  - q: ¿Los juegos con anti-cheat funcionan en Linux?
    a: Depende del juego. Mira el [estado del anti-cheat](#cómo-compruebo-el-estado-del-anti-cheat-de-un-juego) y la [documentación del anti-cheat](/docs/wine-and-proton/#anticheat).
  - q: ¿Puedo usar la generación de fotogramas de Lossless Scaling en Linux?
    a: Sí, mediante [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk), si tienes Lossless Scaling en Steam. Mira [cómo activarla](#cómo-activo-la-generación-de-fotogramas-de-lossless-scaling).
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Heronite ejecuta con Wine o Proton los juegos de [Epic, GOG, Amazon y las demás tiendas](/es/features/stores/) y los programas que añades a mano. La mayoría arrancan con un clic.

Cambia cualquier opción por juego en **Ajustes del juego → Compatibilidad**, o para todos los juegos en Ajustes. **Restablecer pestaña** devuelve una pestaña a sus valores predeterminados.

## ¿Qué versiones de Proton y Wine puede descargar Heronite?

El Gestor de Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) descarga y actualiza estas versiones:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Las versiones van a la carpeta de datos de Heronite, o a `compatibilitytools.d` de Steam si lo activas, para que Steam también pueda usarlas. Heronite encuentra las versiones de Proton de tus bibliotecas de Steam y los runners de Wine de Lutris, así que no las descargas dos veces.

![El Gestor de Wine con una lista de versiones de Proton a la izquierda, Proton-CachyOS seleccionada, y sus versiones a la derecha con fechas de lanzamiento, tamaños y botones Instalar.](../../../assets/screenshots/wine-manager.webp)

*Elige una familia de versiones y luego instala o elimina cualquier versión.*

Para instalarla paso a paso, mira [instalar GE-Proton](/es/guides/install-ge-proton/).

## ¿Qué es un prefijo de Wine?

Un prefijo es la carpeta de Windows simulada en la que se ejecuta un juego. De forma predeterminada los juegos se instalan en `~/Games/Heronite`, y cada juego recibe su propio prefijo en `~/Games/Heronite/Prefixes`, aunque varios juegos pueden compartir uno. El Gestor de Wine lista tus prefijos, y los ajustes de un juego tienen botones para **Winecfg** y **Winetricks**.

## ¿Qué opciones puedo ajustar por juego?

Todo lo de abajo se puede ajustar para un solo juego y guardar como un **preset de inicio** para reutilizarlo en otros. La lista completa está en la [documentación](/es/docs/wine-and-proton/#opciones-por-juego).

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

> **Nota.** `gamescope` y `bubblewrap` (para el sandbox) son herramientas opcionales. Mira [Instalación](/es/docs/installation/).

### ¿Cómo activo la generación de fotogramas de Lossless Scaling?

Heronite usa [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Necesita Lossless Scaling de Steam, y funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL.

## ¿Puedo aislar un juego de Windows en un sandbox?

Sí. Heronite puede ejecutar un juego en el que no confías con [bubblewrap](https://github.com/containers/bubblewrap), sin red y sin acceso a tu carpeta personal. Puedes permitir una sola cosa, como una carpeta o la red. Requiere tener `bwrap` instalado; mira la [documentación del sandbox](/es/docs/wine-and-proton/#sandbox).

## Un juego de Windows no arranca en Linux

Heronite lee el log de inicio y sugiere una solución cuando reconoce uno de estos problemas:

- una DLL o .NET que faltan,
- un juego de DirectX 12 sin VKD3D-Proton,
- un driver de Vulkan de 32 bits que falta,
- un `vm.max_map_count` demasiado bajo,
- otro `wineserver` que sigue en ejecución,
- un anti-cheat no compatible.

Si no aparece ninguna solución, prueba otra versión de Proton, como GE-Proton o Proton-CachyOS, o un prefijo nuevo. Luego revisa la página del juego en [ProtonDB](https://www.protondb.com). Los logs están en **Ajustes → Logs**. La [página de solución de problemas](/es/docs/troubleshooting/) tiene la tabla completa.

## ¿Cómo compruebo el estado del anti-cheat de un juego?

Los juegos para un jugador rara vez tienen problemas de anti-cheat. En los demás, los detalles del juego muestran su estado según [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para que lo compruebes antes de comprar o instalar. Heronite puede aportar los runtimes de EAC y BattlEye. Un juego cuyo desarrollador no permite Linux no funcionará.

## ¿Funciona en la Steam Deck?

Sí. Heronite funciona en el modo escritorio de SteamOS como AppImage, y su modo consola está pensado para mandos. Mira la [guía de la Steam Deck](/es/guides/steam-deck/). ¿Vienes de Lutris o Heroic? Heronite importa sus juegos; compara [Heronite vs Lutris](/es/compare/lutris/) y [vs Heroic](/es/compare/heroic/).
