---
title: "Instalar Heronite en Linux y Windows"
navLabel: "Instalación"
description: "Instalar Heronite en Windows 10 y 11 o en cualquier distro de Linux: instalador, zip portable, AppImage, paquetes .deb, .rpm y Arch, y cómo actualizar."
section: Start
order: 1
updated: 2026-11-04
---

Cada [versión](https://github.com/RafaelGoulartB/Heronite/releases/latest) incluye paquetes para Linux y Windows. Todos son de 64 bits (x86_64).

## Instalar en Windows

Son compatibles Windows 10 y 11.

| Archivo | Qué es |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recomendado**) | Se instala para tu usuario en `%LOCALAPPDATA%\Programs\Heronite`. No necesita permisos de administrador. |
| `Heronite-Portable-x86_64.zip` | Extráelo donde quieras y ejecuta `Heronite\heronite.exe`. Todo se queda en esa carpeta. |

Los archivos de Windows todavía no están firmados con un certificado de código, así que SmartScreen puede mostrar un aviso: elige **Más información** y luego **Ejecutar de todas formas**.

La ventana de inicio de sesión de Epic Games, GOG y Amazon necesita Microsoft Edge WebView2 Runtime. Windows 11 ya lo incluye; en Windows 10, [instálalo desde Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) si la ventana te lo pide.

### Crear una copia portable en Windows

Una copia portable guarda el programa, tu biblioteca, los ajustes, las cachés y las capturas en una sola carpeta. Muévela a otro PC o a una unidad USB y seguirá funcionando. No escribe en el registro ni registra los enlaces `heronite://`.

El archivo `portable.txt` junto a `heronite.exe` hace portable a una copia. Si lo borras, la copia usa las carpetas de usuario normales (consulta [Archivos y carpetas](/es/docs/files-and-folders/)).

## Instalar en Linux

| Sistema | Archivo | Instalación |
|---|---|---|
| Cualquier distribución (**recomendado**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

Heronite dibuja su ventana con Vulkan, así que instala antes un controlador de Vulkan que funcione: Mesa para AMD e Intel, el controlador propietario para NVIDIA. Los paquetes instalan el programa como `heronite-rs`.

### Herramientas opcionales para más funciones

Cada herramienta activa una función. Heronite funciona sin ellas.

| Herramienta | Para qué sirve |
|---|---|
| `bubblewrap` (`bwrap`) | El sandbox para juegos en los que no confías |
| `gamescope` | La opción de gamescope en **Ajustes del juego → Compatibilidad** |
| `umu-launcher` | Ejecutar juegos con umu (Heronite descarga su propia copia si falta) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (el paquete del sistema o la app de Flathub) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Copias de las partidas guardadas después de cada sesión |
| `python3` | Descargas de GOG (gogdl, la herramienta de descarga de GOG, funciona con Python) |
| WebKitGTK 4.1 | La ventana de inicio de sesión de las tiendas. Sin ella, usa el método del navegador en la página de inicio de sesión. |

## Actualizar Heronite

Heronite consulta GitHub en busca de una versión nueva poco después de iniciarse y luego cada 6 horas. Comprueba cada descarga con la clave de firma de la versión (minisign) antes de usarla.

- **AppImage:** Heronite descarga la versión nueva junto a la antigua y la reemplaza; se usa a partir del siguiente inicio. Guarda el AppImage en una carpeta con permiso de escritura, como `~/Applications`.
- **Paquetes .deb, .rpm y de Arch:** Heronite descarga el paquete firmado y lo instala con `pkexec`, que te pide la contraseña.
- **Instalador de Windows:** Heronite ejecuta el nuevo instalador en silencio cuando cierras la app.
- **Windows portable:** Heronite reemplaza los archivos del programa en el sitio y conserva los antiguos como `.old` hasta el siguiente inicio.

En **Ajustes → Acerca de** puedes desactivar "Buscar actualizaciones automáticamente" o activar "Instalar actualizaciones automáticamente" (desactivado por defecto). La variable de entorno `HERONITE_NO_UPDATE_CHECK=1` también desactiva las búsquedas.

## Desinstalar Heronite

- **Instalador de Windows:** Configuración → Aplicaciones → Aplicaciones instaladas → Heronite → Desinstalar.
- **Windows portable:** borra la carpeta.
- **Paquetes de Linux:** `sudo apt remove heronite`, `sudo dnf remove heronite` o `sudo pacman -R heronite`.
- **AppImage:** borra el archivo.

Desinstalar el programa conserva tu biblioteca, tus ajustes y tus juegos. Para eliminarlos también, borra las carpetas que se indican en [Archivos y carpetas](/es/docs/files-and-folders/). Los juegos instalados por Heronite están en `~/Games/Heronite` en Linux, salvo que hayas elegido otra carpeta.

## Compilar Heronite desde el código fuente

Consulta [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) en el README y [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
