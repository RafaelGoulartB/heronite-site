---
title: "Solución de problemas de Heronite y tus juegos"
navLabel: "Solución de problemas"
description: "Soluciona problemas de Heronite y de tus juegos en Linux: dónde están los logs, cómo reportar un error, fallos de inicio de sesión y errores de Wine y Proton."
section: Start
order: 4
updated: 2026-11-01
---

## Logs

Abre **Ajustes → Logs** para leerlos en Heronite, o búscalos en la carpeta de datos (consulta [Archivos y carpetas](/es/docs/files-and-folders/)):

| Log | Dónde |
|---|---|
| Heronite | `logs/launcher/heronite-rs-<date>.log` (uno por día, se conservan los últimos 7) |
| Un juego | `logs/games/<game>_<store>/launch.log` (también `install.log` y otros) |
| Una herramienta de tienda | `logs/runners/<tool>.log` |

Para obtener más detalle:

- inicia Heronite con `RUST_LOG=debug`,
- activa **Logs detallados** en los ajustes de un juego (Avanzado). En Linux, esto también activa más salida de Wine.

Si los logs están desactivados en Ajustes, vuelve a activarlos antes de reportar un problema.

## Reportar un error

[Abre un issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) con:

- tu sistema (distribución o versión de Windows, escritorio, GPU y controlador),
- cómo instalaste Heronite (AppImage, paquete, instalador, portable) y su versión (Ajustes → Acerca de),
- qué hiciste, qué pasó y qué esperabas,
- los logs anteriores.

## La aplicación

**Windows muestra "Windows protegió su PC".** Los archivos todavía no están firmados con un certificado de código. Elige **Más información** y luego **Ejecutar de todas formas**.

**Linux: la ventana no se abre o se ve negra.** Heronite dibuja con Vulkan. Comprueba que `vulkaninfo` funciona y muestra tu GPU, y que está instalado el controlador de Vulkan correspondiente (`vulkan-radeon` o `vulkan-intel` de Mesa, o el controlador de NVIDIA).

**"Heronite is already running but is not responding".** Hay un Heronite antiguo bloqueado. Ciérralo desde el administrador de tareas (o con `pkill heronite-rs`) y vuelve a iniciarlo.

**El AppImage no se actualiza.** Se reemplaza a sí mismo, así que su carpeta debe tener permiso de escritura. Muévelo a `~/Applications` o a otra carpeta de tu carpeta personal.

**"GitHub rate limit reached".** Se hicieron demasiadas búsquedas de actualizaciones desde tu red. Inténtalo de nuevo más tarde.

## Inicios de sesión en tiendas

**La ventana de inicio de sesión no se abre.** Usa el **método del navegador** de esa misma página: inicia sesión en tu navegador y pega la dirección o el código.

- Linux: la ventana de inicio de sesión necesita WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`).
- Windows: necesita Microsoft Edge WebView2 Runtime. [Instálalo desde Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/).

**Las descargas de GOG fallan en Linux.** gogdl necesita `python3`.

## Juegos (Linux)

Cuando un juego no arranca, Heronite lee su log de inicio y muestra qué salió mal, con una solución cuando conoce una. Casos comunes:

| Problema | Solución |
|---|---|
| Falta una DLL o .NET | Instálalo con Winetricks (Heronite sugiere cuál) |
| Juego con DirectX 12 | Activa VKD3D-Proton |
| Falló Direct3D | Activa DXVK |
| "Vulkan could not start" | Suele faltar el controlador de Vulkan de 32 bits (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Demasiados archivos abiertos | Usa Fsync en lugar de Esync |
| Cierre al iniciar en algunos juegos recientes | Aumenta `vm.max_map_count` (muchas distribuciones ya lo hacen) |
| Se está ejecutando otro `wineserver` | Cierra el otro juego o ejecuta `wineserver -k` en ese prefijo |
| Anticheat | Consulta el estado del juego en [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

Cosas que merece la pena probar con un juego que da problemas:

- otra versión de Proton (Proton-GE o Proton-CachyOS suelen tener las correcciones antes),
- un prefijo nuevo,
- la página del juego en [ProtonDB](https://www.protondb.com), donde los jugadores comparten lo que les funcionó.

## El overlay dentro del juego (Linux)

Necesita una sesión de Wayland cuyo compositor admita layer-shell (KDE Plasma, Hyprland, Sway y otros). No funciona en GNOME ni en X11. Si el botón Guide abre Steam en su lugar, desactiva "Guide Button Focuses Steam" en los ajustes del mando de Steam.
