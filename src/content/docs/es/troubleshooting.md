---
title: "Solución de problemas de Heronite: inicio, tiendas y juegos"
navLabel: "Solución de problemas"
description: "Soluciona Heronite cuando no inicia, fallos de inicio de sesión en tiendas, errores de actualización y juegos de Linux que fallan; logs y cómo reportar."
section: Start
order: 4
updated: 2026-11-04
---

## Heronite no inicia o muestra una ventana negra

### "Windows protegió su PC"

Los archivos de Windows todavía no están firmados con un certificado de código. Elige **Más información** y luego **Ejecutar de todas formas**.

### La ventana no se abre o se ve negra (Linux)

Instala el controlador de Vulkan de tu GPU (`vulkan-radeon` o `vulkan-intel` de Mesa, o el controlador de NVIDIA) y comprueba que `vulkaninfo` muestra la GPU. Heronite dibuja con Vulkan.

### "Heronite is already running but is not responding"

Cierra el Heronite bloqueado desde el administrador de tareas o con `pkill heronite-rs`, y vuelve a iniciarlo.

## Heronite no se actualiza

### El AppImage no se actualiza

Mueve el AppImage a `~/Applications` o a otra carpeta de tu carpeta personal. Se reemplaza a sí mismo, así que su carpeta debe tener permiso de escritura.

### "GitHub rate limit reached"

Inténtalo de nuevo más tarde. Tu red hizo demasiadas búsquedas de actualizaciones.

## Falla un inicio de sesión o una descarga de una tienda

### La ventana de inicio de sesión no se abre

Usa el **método del navegador** de la página de inicio de sesión: inicia sesión en tu navegador y pega la dirección o el código.

- Linux: instala WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`).
- Windows: [instala Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/).

### Las descargas de GOG fallan en Linux

Instala `python3`; gogdl, la herramienta de descarga de GOG, lo necesita.

## Un juego no arranca (Linux)

Heronite lee el log de inicio del juego y muestra qué salió mal, con una solución cuando conoce una. Casos comunes:

| Problema | Solución |
|---|---|
| Falta una DLL o .NET | Instálalo con Winetricks (Heronite sugiere cuál) |
| Juego con DirectX 12 | En **Ajustes del juego → Compatibilidad**, activa VKD3D-Proton |
| Falló Direct3D | En **Ajustes del juego → Compatibilidad**, activa DXVK |
| "Vulkan could not start" | Instala el controlador de Vulkan de 32 bits, que suele faltar (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Demasiados archivos abiertos | En **Ajustes del juego → Compatibilidad**, usa Fsync en lugar de Esync |
| Cierre al iniciar en algunos juegos recientes | Aumenta `vm.max_map_count` (muchas distribuciones ya lo hacen) |
| Se está ejecutando otro `wineserver` | Cierra el otro juego o ejecuta `wineserver -k` en ese prefijo |
| Anticheat | Consulta el estado del juego en [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

Si el juego sigue dando problemas:

- elige otra versión de Proton en **Ajustes del juego → Compatibilidad** (GE-Proton o Proton-CachyOS suelen tener las correcciones antes),
- usa un prefijo nuevo,
- lee la página del juego en [ProtonDB](https://www.protondb.com), donde los jugadores comparten lo que les funcionó.

## El overlay dentro del juego no funciona (Linux)

Si el botón Guide abre Steam, desactiva "Guide Button Focuses Steam" en los ajustes del mando de Steam. Si no, revisa tu sesión: el overlay necesita Wayland con un compositor que admita layer-shell (KDE Plasma, Hyprland, Sway y otros). No funciona en GNOME ni en X11.

## Busca los logs

Léelos en **Ajustes → Logs**, o búscalos en la carpeta de datos (consulta [Archivos y carpetas](/es/docs/files-and-folders/)):

| Log | Dónde |
|---|---|
| Heronite | `logs/launcher/heronite-rs-<date>.log` (uno por día, se conservan los últimos 7) |
| Un juego | `logs/games/<game>_<store>/launch.log` (también `install.log` y otros) |
| Una herramienta de tienda | `logs/runners/<tool>.log` |

Para obtener más detalle:

- inicia Heronite con `RUST_LOG=debug`,
- activa **Logs detallados** en los ajustes de un juego (Avanzado). En Linux, esto también activa más salida de Wine.

Si los logs están desactivados en Ajustes, vuelve a activarlos antes de reportar un problema.

## Reporta un error

[Abre un issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) con:

- tu sistema (distribución o versión de Windows, escritorio, GPU y controlador),
- cómo instalaste Heronite (AppImage, paquete, instalador, portable) y su versión (Ajustes → Acerca de),
- qué hiciste, qué pasó y qué esperabas,
- los logs anteriores.
