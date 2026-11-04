---
title: "Troubleshooting Heronite: app, login and game fixes"
navLabel: "Troubleshooting"
description: "Fix Heronite that won't start, store logins that fail, update errors and Linux games that crash, then find the logs and report a bug."
section: Start
order: 4
updated: 2026-11-04
---

## Heronite won't start or shows a black window

### "Windows protected your PC"

The Windows files are not code-signed yet. Choose **More info**, then **Run anyway**.

### The window does not open or is black (Linux)

Install the Vulkan driver for your GPU (Mesa's `vulkan-radeon` or `vulkan-intel`, or NVIDIA's driver), then check that `vulkaninfo` lists the GPU. Heronite draws with Vulkan.

### "Heronite is already running but is not responding"

Close the stuck Heronite from the task manager or with `pkill heronite-rs`, then start it again.

## Heronite won't update

### The AppImage does not update

Move the AppImage to `~/Applications` or another folder in your home. It replaces itself, so its folder must be writable.

### "GitHub rate limit reached"

Try again later. Your network made too many update checks.

## A store login or download fails

### The login window does not open

Use the **browser method** on the login page: log in in your browser and paste the address or code.

- Linux: install WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`).
- Windows: [install the Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/).

### GOG downloads fail on Linux

Install `python3`; gogdl, the GOG download tool, needs it.

## A game won't start (Linux)

Heronite reads the game's launch log and shows what went wrong, with a fix when it knows one. Common cases:

| Problem | Fix |
|---|---|
| A DLL or .NET is missing | Install it with Winetricks (Heronite suggests which) |
| DirectX 12 game | In **Game settings → Compatibility**, turn on VKD3D-Proton |
| Direct3D failed | In **Game settings → Compatibility**, turn on DXVK |
| "Vulkan could not start" | Install the 32-bit Vulkan driver, which is often missing (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Too many open files | In **Game settings → Compatibility**, use Fsync instead of Esync |
| Crash on start in some newer games | Raise `vm.max_map_count` (many distributions already do) |
| Another `wineserver` is running | Close the other game or run `wineserver -k` in that prefix |
| Anti-cheat | Check the game's status on [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

If the game still misbehaves:

- pick another Proton build in **Game settings → Compatibility** (GE-Proton or Proton-CachyOS often have fixes first),
- use a fresh prefix,
- read the game's page on [ProtonDB](https://www.protondb.com), where players share what worked.

## The in-game overlay does not work (Linux)

If the Guide button opens Steam instead, turn off "Guide Button Focuses Steam" in Steam's controller settings. Otherwise check your session: the overlay needs Wayland with a compositor that supports layer-shell (KDE Plasma, Hyprland, Sway, and others). It does not work on GNOME or X11.

## Find the logs

Read them in **Settings → Logs**, or find them in the data folder (see [Files and Folders](/docs/files-and-folders/)):

| Log | Where |
|---|---|
| Heronite itself | `logs/launcher/heronite-rs-<date>.log` (one per day, the last 7 kept) |
| A game | `logs/games/<game>_<store>/launch.log` (also `install.log` and others) |
| A store tool | `logs/runners/<tool>.log` |

For more detail:

- start Heronite with `RUST_LOG=debug`,
- turn on **Detailed logs** in a game's settings (Advanced). On Linux this also turns on more Wine output.

If logs are turned off in Settings, turn them on again before reporting a problem.

## Report a bug

[Open an issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) with:

- your system (distribution or Windows version, desktop, GPU and driver),
- how you installed Heronite (AppImage, package, installer, portable) and its version (Settings → About),
- what you did, what happened, and what you expected,
- the logs above.
