---
title: "Troubleshooting Heronite: app, login and game fixes"
navLabel: "Troubleshooting"
description: "Fix Heronite that won't start, store logins that fail, update errors and Linux games that crash, then find the logs and report a bug."
section: Start
order: 4
updated: 2026-11-04
---

Find your symptom below. Logs and bug reporting are at the end.

## Heronite won't start or shows a black window

### "Windows protected your PC"

The Windows files are not code-signed yet. Choose **More info**, then **Run anyway**.

### The window does not open or is black (Linux)

Heronite draws with Vulkan. Check that `vulkaninfo` works and lists your GPU, and that the Vulkan driver for it is installed (Mesa's `vulkan-radeon` or `vulkan-intel`, or NVIDIA's driver).

### "Heronite is already running but is not responding"

An old Heronite is stuck. Close it from the task manager (or `pkill heronite-rs`) and start again.

## Heronite won't update

### The AppImage does not update

It replaces itself, so its folder must be writable. Move it to `~/Applications` or another folder in your home.

### "GitHub rate limit reached"

There were too many update checks from your network. Try again later.

## A store login or download fails

### The login window does not open

Use the **browser method** on the same page: log in in your browser and paste the address or code.

- Linux: the login window needs WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`).
- Windows: it needs the Microsoft Edge WebView2 Runtime. [Install it from Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/).

### GOG downloads fail on Linux

gogdl needs `python3`.

## A game won't start (Linux)

When a game does not start, Heronite reads its launch log and shows what went wrong, with a fix when it knows one. Common cases:

| Problem | Fix |
|---|---|
| A DLL or .NET is missing | Install it with Winetricks (Heronite suggests which) |
| DirectX 12 game | Turn on VKD3D-Proton |
| Direct3D failed | Turn on DXVK |
| "Vulkan could not start" | Often the 32-bit Vulkan driver is missing (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Too many open files | Use Fsync instead of Esync |
| Crash on start in some newer games | Raise `vm.max_map_count` (many distributions already do) |
| Another `wineserver` is running | Close the other game or run `wineserver -k` in that prefix |
| Anti-cheat | Check the game's status on [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

If a game still misbehaves, try:

- another Proton build (GE-Proton or Proton-CachyOS often have fixes first),
- a fresh prefix,
- the game's page on [ProtonDB](https://www.protondb.com), where players share what worked.

## The in-game overlay does not work (Linux)

It needs a Wayland session whose compositor supports layer-shell (KDE Plasma, Hyprland, Sway, and others). It does not work on GNOME or X11. If the Guide button opens Steam instead, turn off "Guide Button Focuses Steam" in Steam's controller settings.

## Find the logs

Open **Settings → Logs** to read them in Heronite, or find them in the data folder (see [Files and Folders](/docs/files-and-folders/)):

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
