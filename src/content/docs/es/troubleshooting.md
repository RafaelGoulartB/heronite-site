---
title: "Solución de problemas de Heronite: inicio, tiendas y juegos"
navLabel: "Solución de problemas"
description: "Solución de problemas de Heronite: la app no inicia, el inicio de sesión falla, no se actualiza o un juego no abre en Linux; logs y cómo reportar."
section: Start
order: 4
updated: 2026-11-04
---

## "Windows protegió su PC" al iniciar Heronite

Elige **Más información** y luego **Ejecutar de todas formas**. Los archivos de Windows aún no tienen firma de código.

## Heronite no inicia o muestra una ventana negra

### La ventana no se abre o se ve negra (Linux)

Instala el controlador de Vulkan de tu GPU (`vulkan-radeon` o `vulkan-intel` de Mesa, o el controlador de NVIDIA) y comprueba que `vulkaninfo` muestra la GPU. Heronite usa Vulkan para mostrar la pantalla.

### "Heronite ya está en ejecución pero no responde"

Cierra el Heronite bloqueado desde el administrador de tareas o con `pkill heronite-rs`, y vuelve a abrirlo.

## Heronite no se actualiza

### El AppImage no se actualiza

Mueve el AppImage a `~/Applications` o a otra carpeta dentro de tu carpeta personal. Se reemplaza a sí mismo, así que su carpeta debe tener permiso de escritura.

### "Límite de solicitudes de GitHub alcanzado"

Vuelve a buscar actualizaciones más tarde. Tu red hizo demasiadas peticiones a GitHub.

## Falla un inicio de sesión o una descarga de una tienda

### La ventana de inicio de sesión no se abre

Usa **O inicia sesión con tu navegador** en la misma página de la tienda: inicia sesión en tu navegador y luego pega la dirección o el código en Heronite.

Para arreglar la propia ventana de inicio de sesión, instala:

- Linux: WebKitGTK 4.1 (`libwebkit2gtk-4.1` o `webkit2gtk-4.1`)
- Windows: [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

### Las descargas de GOG fallan en Linux

Instala `python3`. gogdl, la herramienta de descarga de GOG, lo necesita.

## Un juego no abre (Linux)

Cuando un juego se cierra en los 30 segundos siguientes a abrirse y Heronite conoce la causa, aparece el diálogo **Problema al abrir**. Su primer botón aplica la solución y vuelve a abrir el juego. Para cualquier otro cierre, haz clic derecho en el juego y elige **Solucionar problemas**.

| Heronite dice | Solución |
|---|---|
| "Falta Visual C++ 2015-2022" (u otro runtime) | **Instalar … y jugar**: Heronite lo instala con Winetricks, solo en el prefijo de este juego |
| "Falta .NET Framework" | **Instalar .NET Framework 4.8 y jugar** (tarda unos minutos) |
| "DirectX 12 necesita VKD3D-Proton" | **Activar VKD3D-Proton y jugar**, o actívalo en **Ajustes del juego → Compatibilidad** |
| "Direct3D falló sin DXVK" | **Activar DXVK y jugar**, o actívalo en **Ajustes del juego → Compatibilidad** |
| "Vulkan no pudo iniciarse" | **Copiar el comando** y ejecútalo en una terminal. Instala el controlador de Vulkan, al que a menudo le falta la parte de 32 bits (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| "Wine se quedó sin archivos abiertos" | **Usar fsync y jugar**, o elige Fsync en lugar de Esync en **Ajustes del juego → Compatibilidad** |
| "El límite de mapas de memoria es bajo" | **Subirlo y jugar**, y luego escribe la contraseña de administrador (ver más abajo) |
| "Otro Wine sigue en marcha en el prefijo" | **Cerrarlo y jugar**, o cierra el otro juego |
| "Easy Anti-Cheat necesita su runtime" | **Activar el runtime anti-cheat y jugar** |
| "Easy Anti-Cheat bloquea a los jugadores de Linux" | Ninguna: el desarrollador no permite Linux ([Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lo marca como denegado) |

### El límite de mapas de memoria es bajo (vm.max_map_count)

Muchos juegos, y Easy Anti-Cheat, necesitan `vm.max_map_count` en 1048576, el valor de SteamOS, Fedora, Ubuntu y Arch. **Subirlo y jugar** lo cambia ahora y lo mantiene tras reiniciar. Para cambiarlo tú:

```bash
echo 'vm.max_map_count = 1048576' | sudo tee /etc/sysctl.d/80-heronite-max-map-count.conf
sudo sysctl -w vm.max_map_count=1048576
```

### El juego sigue cerrándose

- Elige otra **Versión** en **Wine / Proton**, en **Ajustes del juego → Compatibilidad**. GE-Proton o Proton-CachyOS suelen tener las correcciones antes.
- Dale al juego un prefijo de Wine nuevo (una carpeta que funciona como un Windows solo para ese juego). En **Ajustes del juego → Compatibilidad**, elige **Nuevo prefijo para este juego** en el menú **Prefijo**. El prefijo nuevo empieza vacío, así que haz antes una copia de seguridad de tus partidas.
- Lee la página del juego en [ProtonDB](https://www.protondb.com), donde los jugadores comparten lo que les funcionó.

## El overlay dentro del juego no funciona (Linux)

- El botón Guide abre Steam: desactiva **Guide Button Focuses Steam** en **Steam → Configuración → Mando**.
- El overlay nunca aparece: activa **Activar el overlay** en **Ajustes → Overlay** (viene desactivado por defecto). Necesita Wayland con layer-shell (KDE Plasma, Hyprland, Sway), así que no funciona en GNOME ni en X11.

## Busca los logs

Léelos en **Ajustes → Logs**, o abre `logs/` en la [carpeta de datos](/es/docs/files-and-folders/):

| Log | Dónde |
|---|---|
| El propio Heronite | `logs/launcher/heronite-rs-<fecha>.log` (uno por día, se conservan los últimos 7) |
| Un juego | `logs/games/<juego>_<tienda>/launch.log` (también `install.log` y otros) |
| Una herramienta de tienda | `logs/runners/<herramienta>.log` |

Para obtener más detalle:

- Inicia Heronite con `RUST_LOG=debug`
- Activa **Logs detallados** en **Ajustes del juego → Avanzado** (en Linux, también añade la salida de Wine)

Si **Desactivar logs** está activado en **Ajustes → Avanzado**, desactívalo antes de reportar un problema.

## Reporta un error

[Abre un issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) con:

- Tu sistema: distribución o versión de Windows, escritorio, GPU y controlador
- Cómo instalaste Heronite (AppImage, paquete, instalador, portable) y su versión, en **Ajustes → Acerca de**
- Qué hiciste, qué pasó y qué esperabas
- Los logs de arriba
