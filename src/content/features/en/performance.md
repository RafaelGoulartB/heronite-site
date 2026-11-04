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
  - title: About 190 MB idle
    text: One process, and about 95 MB when closed to the tray.
  - title: About 0.1% CPU
    text: Measured at idle as 0.05 s of CPU time over 60 s.
  - title: 64 MB install
    text: The app and the store login helper, with no browser engine.
faq:
  - q: What is the lightest game launcher for Linux and Windows?
    a: Heronite is built to be light. It is a single native process with no bundled browser, and the install is 64 MB.
  - q: Does Heronite use Electron?
    a: No. Heronite is written in Rust and drawn on the GPU with GPUI, with no bundled browser engine. See [what "no Electron" means](#what-does-no-electron-mean-for-me).
  - q: How fast does Heronite start?
    a: About 215 ms from start to your library on screen (median).
  - q: How much memory does Heronite use?
    a: About 190 MB while idle, in a single process, and about 95 MB when closed to the tray. CPU use at idle is about 0.1%.
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
| Install size | 64 MB (app and store login helper) |

## What does "no Electron" mean for me?

Electron apps ship a full browser engine. Heronite does not. One native program reads your library and draws it on the GPU with GPUI, a UI framework for Rust.

The store login window is the one place that shows a web page. It is a small separate window that uses the web view already on your system (WebKitGTK on Linux, WebView2 on Windows). It opens only when you log in to Epic Games, GOG or Amazon.

![Heronite's Collection in Focus view: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, details and a timeline of play sessions.](../../../assets/screenshots/collection.webp)

*A full Collection with screenshots, details and a play timeline, drawn on the GPU.*

## What is in the 64 MB install?

Two parts: the app and the store login helper. The helper is a small separate program that runs only for the login window, so the main app stays a single process. Store tools like legendary, gogdl and nile run only when needed, such as while a game installs or updates.

## Is console mode light too?

Yes. Console mode loads nothing until you turn it on. You can set it to open at startup or when a controller connects. See [console mode](/features/console-mode/).

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

Heronite is free and open source under the GPL-3.0 license, with no accounts, ads or telemetry. [Download Heronite](/download/) to try it.
