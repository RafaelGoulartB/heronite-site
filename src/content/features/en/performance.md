---
title: "Lightweight Game Launcher Without Electron | Heronite"
description: "A fast, lightweight game launcher for Linux and Windows. Native Rust, GPU-rendered, no bundled browser. Library in about 215 ms and about 190 MB of memory idle."
eyebrow: Performance
headline: "A launcher that *stays out of your way*"
lead: "Heronite is a native Rust app drawn on the GPU, in a single process with no bundled browser. It opens in about a fifth of a second and sits quietly while you play."
navLabel: Performance
summary: "Native Rust, GPU-rendered and Electron-free: about 215 ms to the library, 190 MB idle and a 64 MB install."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "Heronite's command palette open over the Collection, searching for \"contr\" and listing Control and other matching games with actions to play Control, open its settings or its folder."
og: /og/performance.jpg
updated: 2026-11-01
highlights:
  - title: About 215 ms
    text: Median time from start to your library on screen.
  - title: About 190 MB idle
    text: In a single process, and about 95 MB when closed to the tray.
  - title: About 0.1% CPU
    text: At idle, measured as 0.05 s of CPU time over 60 s.
  - title: 64 MB install
    text: The app and the store login helper, with no bundled browser engine.
faq:
  - q: What is the lightest game launcher for Linux and Windows?
    a: Heronite is built to be light. It is a single native process that uses about 190 MB of memory when idle, about 95 MB when closed to the tray, and about 0.1% of the CPU. The install is 64 MB.
  - q: Does Heronite use Electron?
    a: No. Heronite is written in Rust and drawn on the GPU with GPUI. There is no bundled browser engine and no web page behind the interface.
  - q: How fast does Heronite start?
    a: The median time from start to the library on screen is about 215 ms.
  - q: How much memory does Heronite use?
    a: About 190 MB while idle, in a single process. When you close the window to the tray, it drops to about 95 MB. Console mode loads nothing until you turn it on.
  - q: What do I need to run it?
    a: Linux (any distribution, x86_64) or Windows 10 and 11 (x86_64). On Linux, Heronite draws with Vulkan, so you need a working Vulkan driver. See [installation](/docs/installation/).
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

A game launcher should be the lightest thing you run, because it is open next to the game. Many launchers are web pages in a bundled browser, and they pay for it in memory and startup time. Heronite takes the other route. It is a native Rust app, drawn directly on the GPU, with no browser inside.

## How fast and light is Heronite?

These are the numbers we measure and publish, with nothing to compare against but Heronite itself:

| Measure | Heronite |
|---|---|
| Start to library on screen | about 215 ms (median) |
| Memory while idle | about 190 MB in a single process |
| Memory closed to the tray | about 95 MB |
| CPU while idle | about 0.1% (0.05 s of CPU time over 60 s) |
| Install size | 64 MB (app and store login helper) |

The idle figures matter most. A launcher spends most of its life open and doing nothing, and Heronite does almost nothing in that time.

## Why does it start so fast?

Heronite does not load a web engine or run a web page before showing you something. It is one native program that reads your Collection and draws it. Your library is on screen in about 215 ms, and in everyday use that feels like the app was already open.

## What does "no Electron" mean for me?

Electron apps ship a full browser engine with every app. Heronite does not. It is written in Rust and its interface is drawn on the GPU with GPUI, a UI framework for Rust. That has three effects you can feel:

- **Less memory.** One process, about 190 MB when idle, and about 95 MB when closed to the tray.
- **Less CPU.** About 0.1% when idle, which is 0.05 s of CPU time over 60 s.
- **A small install.** 64 MB for the app and the helper that shows the store login page.

The store login window is the one place that shows a web page. It is a small separate window that uses the web view already on your system (WebKitGTK on Linux, WebView2 on Windows), and it only opens when you log in to Epic Games, GOG or Amazon.

![Heronite's Collection in Focus view: game covers grouped into Playing and On Going with play time under each, and ELDEN RING open with its cover, details and a timeline of play sessions.](../../../assets/screenshots/collection.webp)

*A full Collection with screenshots, details and a play timeline, drawn on the GPU.*

## What fits in 64 MB?

More than a launcher usually does. The same install gives you:

- a [Collection](/features/game-library/) with views, groups, bulk edits and a command palette,
- [stores](/features/stores/): Steam, Epic, GOG and Amazon, with the Battle.net, EA app, Ubisoft Connect and Rockstar clients on Linux,
- [emulation](/features/emulation/) with ROM scanning,
- a Wine Manager and per-game [Wine and Proton](/features/wine-and-proton/) options on Linux,
- [play time tracking](/features/play-time-tracking/) with statistics and a year in review,
- [saves and backups](/features/saves-and-backups/),
- [console mode](/features/console-mode/) with themes.

## How is the work split between Heronite and the helper?

The 64 MB install holds two parts: the app and the store login helper. The helper is its own small program. It only runs for the login window, so the main app stays a single process. Store tools like legendary, gogdl and nile run only when they are needed, such as while a game installs or updates.

## Can I carry it on a USB drive?

On Windows, yes. The portable copy is a folder that holds everything: the program, your Collection, settings, caches and screenshots. Extract it anywhere, or move it to a USB drive, and it keeps working. It does not write to the registry. See [Files and folders](/docs/files-and-folders/).

## Can I turn background work off?

Yes. A few switches in [environment variables](/docs/environment-variables/) cut the extras when you want an even quieter launcher:

| Variable | What it does |
|---|---|
| `HERONITE_NO_TRAY` | No tray icon |
| `HERONITE_NO_ANIMATIONS` | No animations |
| `HERONITE_DISABLE_IDLE_JOBS` | No background work while idle |
| `HERONITE_NO_UPDATE_CHECK` | No automatic update checks |

You never need any of them. They are there for people who like to trim.

## Is console mode light too?

Yes. Console mode, the controller-first layout for a TV, loads nothing until you turn it on. It can open at startup or when a controller connects, so you pay for it only when you use it. See [console mode](/features/console-mode/).

## What do I need to run it?

Heronite runs on Linux (any distribution, x86_64) and Windows 10 and 11 (x86_64). On Linux it draws with Vulkan, so you need a working Vulkan driver: Mesa for AMD and Intel, or the proprietary driver for NVIDIA. If the window does not open or is black, check that `vulkaninfo` lists your GPU. More in [Troubleshooting](/docs/troubleshooting/).

> **Note.** Heronite does not take over the work of your games. Steam still starts its own games, emulators run in their own programs and Windows games run through [Wine or Proton](/features/wine-and-proton/). Heronite is the part that stays small.

## Why does a light launcher matter?

You open a launcher many times a week, and often right before a game that needs every bit of your PC. A launcher that starts at once and idles at almost no CPU is one you stop thinking about. That is the goal: you pick a game, press play, and the launcher gets out of the way.

## Free, open source and ready to try

Heronite is free, with no accounts, ads or telemetry, and open source under the GPL-3.0 license. If you use another launcher today, [Heronite vs Playnite](/compare/playnite/), [vs Heroic](/compare/heroic/) and [vs Lutris](/compare/lutris/) explain the differences.

[Download Heronite](/download/) and see how it feels. The docs page [Installation](/docs/installation/) covers every package, and [Getting started](/docs/getting-started/) takes you through the first run.
