---
title: "Install Heronite on Linux and Windows"
navLabel: "Installation"
description: "Install Heronite on Windows 10 and 11 or any Linux distribution: installer, portable zip, AppImage, .deb, .rpm and Arch packages, updates, removal."
section: Start
order: 1
updated: 2026-11-04
---

Every [release](https://github.com/RafaelGoulartB/Heronite/releases/latest) has packages for Linux and Windows. All of them are 64-bit (x86_64).

## Install on Windows

Windows 10 and 11 are supported.

| File | What it is |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recommended**) | Installs for your user into `%LOCALAPPDATA%\Programs\Heronite`. No administrator rights needed. |
| `Heronite-Portable-x86_64.zip` | A portable copy: everything stays in one folder. |

If SmartScreen warns about the file, choose **More info**, then **Run anyway**. The Windows files are not code-signed yet.

The Epic Games, GOG, and Amazon login window needs the Microsoft Edge WebView2 Runtime. Windows 11 has it; on Windows 10, [install it from Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) if the window asks for it.

### Make a portable copy on Windows

1. Download `Heronite-Portable-x86_64.zip`.
2. Extract it to any folder, or to a USB drive.
3. Run `Heronite\heronite.exe`.

The folder holds the program, your library, settings, caches, and screenshots. Move it to another PC or a USB drive and it keeps working. A portable copy does not write to the registry or register `heronite://` links.

The `portable.txt` file next to `heronite.exe` makes a copy portable. Delete it to use the normal user folders instead (see [Files and folders](/docs/files-and-folders/)).

## Install on Linux

| System | File | Install |
|---|---|---|
| Any distribution (**recommended**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

Install a working Vulkan driver first: Mesa for AMD and Intel, the proprietary driver for NVIDIA. Heronite draws its window with Vulkan. The packages install the program as `heronite-rs`.

### Optional tools for extra features

Each tool turns on one feature. Heronite works without them.

| Tool | For |
|---|---|
| `bubblewrap` (`bwrap`) | The sandbox for games you do not trust |
| `gamescope` | The gamescope option in **Game settings → Compatibility** |
| `umu-launcher` | Running games through umu (Heronite downloads its own copy if this is missing) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (the system package or the Flathub app) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Save backups after each session |
| `python3` | GOG downloads (gogdl, the GOG download tool, runs on Python) |
| WebKitGTK 4.1 | The store login window. Without it, use the browser method on the login page. |

## Update Heronite

Heronite checks GitHub for a new release shortly after it starts, then every 6 hours. It verifies every download against the release signing key (minisign) before using it.

- **AppImage:** Heronite downloads the new version next to the old one and replaces it; it runs from the next start. Keep the AppImage in a writable folder, like `~/Applications`.
- **.deb, .rpm, and Arch packages:** Heronite downloads the signed package and installs it through `pkexec`, which asks for your password.
- **Windows installer:** Heronite runs the new setup silently when you quit.
- **Windows portable:** Heronite replaces the program files in place and keeps the old ones as `.old` until the next start.

In **Settings → About**, turn off **Check for updates automatically**, or turn on **Install updates automatically** (off by default). The environment variable `HERONITE_NO_UPDATE_CHECK=1` turns off the checks too.

## Uninstall Heronite

- **Windows installer:** open Windows **Settings → Apps → Installed apps → Heronite → Uninstall**.
- **Windows portable:** delete the folder.
- **Linux packages:** `sudo apt remove heronite`, `sudo dnf remove heronite`, or `sudo pacman -R heronite`.
- **AppImage:** delete the file.

Uninstalling keeps your library, settings, and games. To remove those too, delete the folders listed in [Files and folders](/docs/files-and-folders/). Games installed by Heronite are in `~/Games/Heronite` on Linux unless you chose another folder.

## Build Heronite from source

You need stable Rust. On Linux, also `clang`, `lld`, a Vulkan driver and GTK/WebKitGTK. On Windows, the Visual Studio Build Tools ("Desktop development with C++").

```bash
# quick build (the login window is its own binary, so build it too)
cargo build --profile quick -p heronite-epic-login && cargo run --profile quick -p heronite
```

For release builds and the Windows installer, see [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) in the README and [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
