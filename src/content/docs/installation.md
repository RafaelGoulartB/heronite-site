---
title: "Install Heronite on Linux and Windows"
navLabel: "Installation"
description: "Install Heronite on Windows 10 and 11 or any Linux distribution: the installer, portable zip, AppImage, .deb, .rpm and Arch packages, updates and removal."
section: Start
order: 1
updated: 2026-11-01
---

Every [release](https://github.com/RafaelGoulartB/Heronite/releases/latest) has packages for Linux and Windows. All of them are 64-bit (x86_64).

## Windows

Windows 10 and 11 are supported.

| File | What it is |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recommended**) | Installs for your user into `%LOCALAPPDATA%\Programs\Heronite`. No administrator rights needed. |
| `Heronite-Portable-x86_64.zip` | Extract it anywhere and run `Heronite\heronite.exe`. The library, settings, and screenshots stay in that folder. |

The Windows files are not code-signed yet, so SmartScreen may warn about them: choose **More info**, then **Run anyway**.

Logging in to Epic Games, GOG, or Amazon uses the Microsoft Edge WebView2 Runtime. Windows 11 has it; on Windows 10, [install it from Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) if the login window asks for it.

### Portable copy

A portable copy is a folder that holds everything: the program, your Collection, settings, caches, and screenshots. Move it to another PC or a USB drive and it keeps working. It does not write to the registry and does not register `heronite://` links.

What makes a copy portable is the `portable.txt` file next to `heronite.exe`. Delete that file and the copy uses the normal user folders instead (see [Files and Folders](/docs/files-and-folders/)).

## Linux

| System | File | Install |
|---|---|---|
| Any distribution (**recommended**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

Heronite draws its window with Vulkan, so you need a working Vulkan driver (Mesa for AMD and Intel, the proprietary driver for NVIDIA). The packages install the program as `heronite-rs`.

### Optional tools

Heronite works without these. Each one turns on a feature:

| Tool | For |
|---|---|
| `bubblewrap` (`bwrap`) | The sandbox for games you do not trust |
| `gamescope` | The gamescope option in a game's settings |
| `umu-launcher` | Running games through umu (Heronite downloads its own copy if this is missing) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (the system package or the Flathub app) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Save backups after each session |
| `python3` | GOG downloads (the gogdl tool runs on Python) |
| WebKitGTK 4.1 | The store login window. Without it, use the browser method on the login page. |

## Updates

Heronite checks GitHub for a new release shortly after it starts and then every 6 hours. Every download is checked against the release signing key (minisign) before it is used.

- **AppImage:** the new version is downloaded next to the old one and replaces it. It runs from the next start. Keep the AppImage in a folder you can write to, like `~/Applications`.
- **.deb, .rpm, and Arch packages:** Heronite downloads the signed package and installs it through `pkexec`, so it asks for your password. This never happens by itself.
- **Windows installer:** the new setup runs silently when you quit Heronite.
- **Windows portable:** the program files are replaced in place; the old ones are kept as `.old` until the next start.

In **Settings → About** you can turn off "Check for updates automatically", or turn on "Install updates automatically" (off by default). Setting the environment variable `HERONITE_NO_UPDATE_CHECK=1` also turns off the checks.

## Removing Heronite

- **Windows installer:** Settings → Apps → Installed apps → Heronite → Uninstall.
- **Windows portable:** delete the folder.
- **Linux packages:** `sudo apt remove heronite`, `sudo dnf remove heronite`, or `sudo pacman -R heronite`.
- **AppImage:** delete the file.

Removing the program keeps your Collection, settings, and games. To remove those too, delete the folders listed in [Files and Folders](/docs/files-and-folders/). Games installed by Heronite are in `~/Games/Heronite` on Linux unless you chose another folder.

## Building from source

See [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) in the README and [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
