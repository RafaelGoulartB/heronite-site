---
title: "Gestor de Wine y Proton para Linux, GE-Proton | Heronite"
description: "Gestor de Wine y Proton y lanzador de juegos para Linux. Descarga GE-Proton y Proton-CachyOS y ajusta prefijo, DXVK, gamescope y límite de FPS por juego."
eyebrow: Wine y Proton
headline: "Gestor de Wine y Proton para juegos de Windows en Linux"
lead: "Heronite descarga GE-Proton, Proton-CachyOS y otras versiones de Proton, y da a cada juego su propio prefijo. Así la mayoría de los juegos de Windows abren con un clic."
navLabel: Wine y Proton
summary: "Un Gestor de Wine integrado, prefijos y opciones por juego, un sandbox y pistas ante errores de inicio para juegos de Windows en Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Ajustes del juego de Control en la pestaña Compatibilidad: la versión de Proton en GE-Proton-latest con una valoración Platinum de ProtonDB, el prefijo de Wine y su carpeta, los botones Winecfg y Winetricks, y el campo del ID de umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Versiones compartidas con Steam
    text: Pon las versiones de Proton en compatibilitytools.d para que Steam también las use.
  - title: Ajustes por juego
    text: Define versión, prefijo, DXVK y límite de FPS para cada juego.
  - title: Sandbox
    text: Ejecuta juegos en los que no confías sin red y sin acceso a tu carpeta personal.
  - title: Soluciones cuando falla
    text: Los errores de inicio vienen con una solución sugerida.
faq:
  - q: ¿Cómo juego a juegos de Windows en Linux?
    a: Añade el juego y pulsa Jugar. Si es de una tienda, inicia sesión primero en ella. Cambia los ajustes en **Ajustes del juego → Compatibilidad**.
  - q: ¿Cuál es la mejor versión de Proton para mi juego?
    a: No hay una única mejor. **Proton-CachyOS** y **GE-Proton** suelen recibir las correcciones primero, así que empieza por ahí. La página de un juego muestra su valoración de [ProtonDB](https://www.protondb.com).
  - q: ¿Hay un gestor de Proton para juegos que no son de Steam?
    a: Sí. El **Gestor de Wine** (`Ctrl+3`) descarga y actualiza versiones de Proton para cualquier juego de tu Colección.
  - q: ¿Los juegos con anti-cheat funcionan en Linux?
    a: Depende del juego. Un juego cuyo desarrollador no permite Linux no funcionará. Mira la [documentación del anti-cheat](/docs/wine-and-proton/#anticheat).
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Heronite ejecuta con Wine o Proton los juegos de Windows de [todas las tiendas](/es/features/stores/) y los programas que añades a mano.

Cambia cualquier opción por juego en **Ajustes del juego**, o para todos los juegos en Ajustes. **Restablecer pestaña** devuelve una pestaña a sus valores por defecto.

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

*Elige una familia de versiones y luego instala o quita cualquier versión.*

Para instalarla paso a paso, mira [instalar GE-Proton](/es/guides/install-ge-proton/).

## ¿Qué es un prefijo de Wine?

Un prefijo es la carpeta que imita Windows en la que corre un juego. Los juegos se instalan por defecto en `~/Games/Heronite`, y cada juego tiene su propio prefijo en `~/Games/Heronite/Prefixes`, aunque varios juegos pueden compartir uno. El Gestor de Wine lista tus prefijos, y **Ajustes del juego → Compatibilidad** tiene los botones **Winecfg** y **Winetricks**.

## ¿Qué opciones puedo ajustar por juego?

Todo lo de abajo se puede ajustar para un juego y guardar como un **preset de inicio** para reutilizarlo en otros. La lista completa está en la [documentación](/es/docs/wine-and-proton/#opciones-por-juego).

- Versión de Wine o Proton y prefijo
- DXVK, VKD3D-Proton y DXVK-NVAPI
- Esync y Fsync
- gamescope (necesita `gamescope` instalado, mira [Instalación](/es/docs/installation/))
- Límite de FPS
- Elección de GPU en PC con más de una
- Mejoras de DLSS, FSR y XeSS
- Winetricks
- umu y sus protonfixes, que son correcciones de juegos de la base de datos de umu
- Wayland en lugar de X11 (necesita una versión de Wine con soporte para Wayland)
- Scripts que se ejecutan antes y después del juego, y programas que corren a su lado, como trainers

### ¿Cómo activo el frame generation de Lossless Scaling?

1. Instala [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk), con el paquete de tu distribución o la guía de lsfg-vk.dev.
2. En Steam, activa Steam Play para todos los demás títulos en **Steam → Settings → Compatibility**.
3. Instala Lossless Scaling desde Steam. No hace falta abrirlo nunca.
4. Abre **Ajustes del juego → Rendimiento**.
5. En **Frame generation**, activa **Frame generation de Lossless Scaling**.

Funciona con juegos de Vulkan, DXVK y VKD3D, no con OpenGL.

## ¿Puedo aislar un juego de Windows en un sandbox?

Sí. En **Ajustes del juego → Sandbox**, Heronite ejecuta un juego en el que no confías con [bubblewrap](https://github.com/containers/bubblewrap), sin red y sin acceso a tu carpeta personal. Puedes dejar pasar una sola cosa, como una carpeta o la red. Necesita `bwrap` instalado; mira la [documentación del sandbox](/es/docs/wine-and-proton/#sandbox).

## Un juego de Windows no abre en Linux

Heronite lee el log de inicio y sugiere una solución cuando reconoce uno de estos problemas:

- Falta una DLL o .NET
- Un juego de DirectX 12 sin VKD3D-Proton
- Falta el driver de Vulkan de 32 bits
- Un `vm.max_map_count` demasiado bajo
- Otro `wineserver` sigue en ejecución
- Un anti-cheat no compatible

Si no aparece ninguna solución, elige otra versión de Proton en **Ajustes del juego → Compatibilidad**, como GE-Proton o Proton-CachyOS, o prueba un prefijo nuevo. Luego revisa la página del juego en [ProtonDB](https://www.protondb.com). Los logs están en **Ajustes → Logs**. La [página de solución de problemas](/es/docs/troubleshooting/) tiene la tabla completa.

## ¿Cómo compruebo el estado del anti-cheat de un juego?

Los juegos de un jugador rara vez tienen problemas de anti-cheat. En los demás, los detalles del juego muestran su estado según [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para que lo compruebes antes de comprar o instalar. Heronite puede aportar los runtimes de EAC y BattlEye. Un juego cuyo desarrollador no permite Linux no funcionará.

## ¿Funciona en la Steam Deck?

Sí. Heronite funciona como AppImage en el modo escritorio de SteamOS, y su modo consola está pensado para mandos. Mira la [guía de la Steam Deck](/es/guides/steam-deck/).

Siguiente: compara [Heronite vs Lutris](/es/compare/lutris/) y [vs Heroic](/es/compare/heroic/).
