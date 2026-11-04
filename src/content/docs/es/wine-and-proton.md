---
title: "Wine y Proton en Linux: juegos de Windows"
navLabel: "Wine y Proton"
description: "Wine y Proton en Linux con Heronite para juegos de Windows: Gestor de Wine, versiones de Proton, prefijos, DXVK y gamescope por juego, sandbox y anticheat."
section: Guides
order: 3
updated: 2026-11-04
---

Heronite ejecuta los juegos de Windows en Linux con Wine o Proton. Cambia cualquier opción de abajo por juego en **Ajustes del juego → Compatibilidad**, o para todos los juegos en Ajustes. Cuando un juego no abre, Heronite sugiere una solución: consulta [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux).

## Descarga versiones de Proton en el Gestor de Wine

El Gestor de Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) descarga y actualiza estas versiones:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Las versiones van a la carpeta de datos de Heronite (`~/.local/share/heronite/tools/proton` y `tools/wine`), o al `compatibilitytools.d` de Steam si lo activas, para que Steam también pueda usarlas. Heronite encuentra las versiones de Proton que ya tienes en tus bibliotecas de Steam y los runners de Wine de Lutris.

## Dónde se guardan los juegos y los prefijos de Wine

Un prefijo de Wine es la unidad de Windows propia de un juego, con sus ajustes, sus partidas y lo que instala Winetricks. Por defecto:

- Los juegos se instalan en `~/Games/Heronite`
- Cada juego tiene su propio prefijo en `~/Games/Heronite/Prefixes`
- Varios juegos pueden compartir `~/Games/Heronite/Prefixes/shared`, pero entonces pueden romper las dependencias de los otros

El Gestor de Wine lista tus prefijos. En **Ajustes del juego → Compatibilidad**, el menú **Prefijo** elige el prefijo del juego o crea un **Nuevo prefijo para este juego**. Los botones **Winecfg** y **Winetricks** de ahí actúan sobre ese prefijo.

## Opciones por juego

- Versión de Wine o Proton y prefijo
- DXVK, VKD3D-Proton y DXVK-NVAPI
- Esync y Fsync
- gamescope (necesita `gamescope` instalado)
- Límite de FPS
- Elección de GPU en PC con más de una
- Mejoras con DLSS, FSR y XeSS
- Winetricks
- umu y sus protonfixes (correcciones de juegos de la base de datos de umu)
- Generación de fotogramas de Lossless Scaling con [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) (necesita Lossless Scaling de Steam; funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL)
- Wayland en lugar de X11 (necesita una versión de Wine compatible con Wayland)
- Scripts que se ejecutan antes y después del juego, y programas que se ejecutan junto a él (como trainers)
- Presets de inicio para reutilizar en otros juegos

## Sandbox

Para ejecutar un juego en el que no confías, activa **Ejecutar en un sandbox** en **Ajustes del juego → Sandbox**. El juego se ejecuta entonces con [bubblewrap](https://github.com/containers/bubblewrap) (`bwrap`, del paquete `bubblewrap`), sin red y sin acceso a tu carpeta personal. Permite la red o una carpeta en **Excepciones** cuando el juego lo necesite.

## Anticheat

Heronite muestra en los detalles de cada juego su estado de anticheat, tomado de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Si el juego funciona en Linux, activa **BattlEye** o **Easy Anti-Cheat** en **Runtimes de anti-cheat**, en **Ajustes del juego → Compatibilidad**; Heronite lo descarga antes de la próxima vez que abras el juego. Un juego cuyo desarrollador no permite Linux no funcionará, con ningún ajuste.
