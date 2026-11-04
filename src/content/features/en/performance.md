---
title: "Lightweight Game Launcher, Not Electron | Heronite"
description: "Lightweight game launcher for Linux and Windows. Opens your library in about 215 ms, idles at about 190 MB and installs in 64 MB, with no Electron."
eyebrow: Performance
headline: "A lightweight game launcher, not Electron"
lead: "Heronite is a lightweight game launcher: one native Rust process drawn on the GPU, with no bundled browser."
navLabel: Performance
summary: "Native Rust, GPU-rendered and Electron-free: about 215 ms to the library, 190 MB idle and a 64 MB install."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "Heronite's command palette open over the Collection, searching for \"contr\" and listing Control and other matching games with actions to play Control, open its settings or its folder."
og: /og/performance.jpg
updated: 2026-11-04
highlights:
  - title: About 215 ms
    text: Median time from start to your library on screen.
  - title: About 0.1% CPU
    text: Measured at idle as 0.05 s of CPU time over 60 s.
  - title: Portable on Windows
    text: One folder you can carry on a USB drive, with no registry writes.
  - title: Background work off
    text: Environment variables turn off the tray, animations and update checks.
faq:
  - q: What is the lightest game launcher for Linux and Windows?
    a: Heronite is built to be light. It idles at about 190 MB in one process and installs in 64 MB.
  - q: Does Heronite run on the Steam Deck?
    a: Yes. Heronite runs on SteamOS as an AppImage. The [Steam Deck guide](/guides/steam-deck/) has the setup.
  - q: Does Heronite collect telemetry?
    a: No. Heronite has no accounts, ads or telemetry. It is free and open source under the GPL-3.0 license.
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

## How fast and light is Heronite?

| Measure | Heronite |
|---|---|
| Start to library on screen | about 215 ms (median) |
| Memory while idle | about 190 MB in a single process |
| Memory closed to the tray | about 95 MB |
| CPU while idle | about 0.1% (0.05 s of CPU time over 60 s) |
| Install size | 64 MB |

## What does "no Electron" mean for me?

Electron apps ship a full browser engine. Heronite does not. One native program reads your library and draws it on the GPU with GPUI, a UI framework for Rust.

The store login window is the one place that shows a web page. It is a small separate window that uses the web view already on your system (WebKitGTK on Linux, WebView2 on Windows). It opens only when you log in to Epic Games, GOG or Amazon.

![Heronite's Collection in Focus view: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, details and a timeline of play sessions.](../../../assets/screenshots/collection.webp)

*A full Collection with screenshots, details and a play timeline, drawn on the GPU.*

## What is in the 64 MB install?

Two parts: the app and the store login helper. The helper is a small separate program that runs only for the login window, so the main app stays a single process. Store tools like legendary, gogdl and nile run only when needed, such as while a game installs or updates.

## Is console mode light too?

Yes. Console mode loads nothing until you turn it on. In **Settings → Console mode**, you can set it to open at startup or when a controller connects. See [console mode](/features/console-mode/).

## Can I carry Heronite on a USB drive?

On Windows, yes. The portable copy is one folder with the program, your Collection, settings, caches and screenshots. Extract it anywhere or move it to a USB drive. It does not write to the registry. See [the portable copy](/docs/files-and-folders/#the-portable-copy-windows).

## Can I turn background work off?

Yes. Set these [environment variables](/docs/environment-variables/):

| Variable | What it does |
|---|---|
| `HERONITE_NO_TRAY` | No tray icon |
| `HERONITE_NO_ANIMATIONS` | No animations |
| `HERONITE_DISABLE_IDLE_JOBS` | No background work while idle |
| `HERONITE_NO_UPDATE_CHECK` | No automatic update checks |

## What does Heronite need to run?

Heronite runs on Linux (any distribution, x86_64) and Windows 10 and 11 (x86_64). On Linux it draws with Vulkan, so you need a working Vulkan driver: Mesa for AMD and Intel, or the proprietary driver for NVIDIA.

If the window does not open or is black, run `vulkaninfo` and check that it lists your GPU. See [Troubleshooting](/docs/troubleshooting/) and [Installation](/docs/installation/).

Next: [download Heronite](/download/).
