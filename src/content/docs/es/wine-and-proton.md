---
title: "Wine y Proton en Linux: juegos de Windows"
navLabel: "Wine y Proton"
description: "Juega a juegos de Windows en Linux con Heronite: Gestor de Wine, versiones de Proton, prefijos, opciones por juego como DXVK y gamescope, sandbox y anticheat."
section: Guides
order: 3
updated: 2026-11-04
---

Heronite ejecuta los juegos de Windows en Linux con Wine o Proton. Cambia cualquier opción de abajo por juego en **Ajustes del juego → Compatibilidad**, o para todos los juegos en Ajustes.

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

Un prefijo es la carpeta de Windows simulada en la que se ejecuta un juego. Por defecto:

- los juegos se instalan en `~/Games/Heronite`,
- cada juego tiene su propio prefijo en `~/Games/Heronite/Prefixes`,
- o varios juegos pueden compartir `~/Games/Heronite/Prefixes/shared`.

El Gestor de Wine lista tus prefijos. **Ajustes del juego → Compatibilidad** tiene botones de Winecfg y Winetricks para el prefijo del juego.

## Opciones por juego

- Versión de Wine o Proton y prefijo
- DXVK, VKD3D-Proton y DXVK-NVAPI
- Esync y Fsync
- gamescope (necesita `gamescope` instalado)
- Límite de FPS
- Elección de GPU en PCs con más de una
- Mejoras con DLSS, FSR y XeSS
- Winetricks
- umu y sus protonfixes (correcciones de juegos de la base de datos de umu)
- Generación de fotogramas de Lossless Scaling mediante [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) (necesita Lossless Scaling de Steam; funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL)
- Wayland en lugar de X11 (necesita una versión de Wine con compatibilidad con Wayland)
- Scripts que se ejecutan antes y después del juego, y programas que se ejecutan junto a él (como trainers)
- Presets de inicio para reutilizar en otros juegos

## Sandbox

Ejecuta un juego en el que no confías con [bubblewrap](https://github.com/containers/bubblewrap): sin red y sin acceso a tu carpeta personal. Permite una carpeta o la red cuando el juego lo necesite. Necesita `bwrap` instalado.

## Un juego de Windows no arranca

Heronite lee el log de inicio y sugiere una solución cuando reconoce el problema. Consulta las [causas y soluciones en Solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux).

## Anticheat

Heronite muestra en los detalles de cada juego su estado de anticheat, tomado de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Heronite puede proporcionar los runtimes de EAC y BattlEye, pero un juego cuyo desarrollador no permite Linux no funcionará.
