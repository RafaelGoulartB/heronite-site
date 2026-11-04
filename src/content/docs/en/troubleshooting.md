---
title: "Troubleshooting Heronite: app, login and game fixes"
navLabel: "Troubleshooting"
description: "Fix Heronite that won't start, store logins that fail, update errors and Linux games that crash, then find the logs and report a bug."
section: Start
order: 4
updated: 2026-11-04
---

## "Windows protected your PC" when starting Heronite

Choose **More info**, then **Run anyway**. The Windows files are not code-signed yet.

## Heronite won't start or shows a black window

On Linux, install the Vulkan driver for your GPU, then check that `vulkaninfo` lists the GPU. Heronite draws with Vulkan. For AMD or Intel, install `vulkan-radeon` or `vulkan-intel` on Arch, or `mesa-vulkan-drivers` on Debian and Ubuntu; for NVIDIA, its own driver.

### "Heronite is already running but is not responding"

Close the stuck Heronite from the task manager or with `pkill heronite-rs`, then start it again.

## Heronite won't update

### The AppImage does not update

Move the AppImage to `~/Applications` or another folder in your home. It replaces itself, so its folder must be writable.

### "GitHub rate limit reached"

Check for updates again later. Your network made too many requests to GitHub.

## A store login or download fails

### The login window does not open

If the login window does not open, use **Or log in with your browser** on the same page and paste the code it gives you.

To fix the login window itself, install:

- Linux: WebKitGTK 4.1 (`libwebkit2gtk-4.1` or `webkit2gtk-4.1`)
- Windows: the [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

### GOG downloads fail on Linux

Install `python3`. gogdl, the GOG download tool, needs it.

## A game won't start (Linux)

When a game closes within 30 seconds of starting and Heronite knows the cause, the **Launch problem** dialog opens. Its first button applies the fix and starts the game again. For any other crash, right-click the game and choose **Troubleshoot**.

| Heronite says | Fix |
|---|---|
| "Visual C++ 2015-2022 is missing" (or another runtime) | **Install … and play**: Heronite installs it with Winetricks, in this game's prefix only |
| ".NET Framework is missing" | **Install .NET Framework 4.8 and play** (takes a few minutes) |
| "DirectX 12 needs VKD3D-Proton" | **Turn on VKD3D-Proton and play**, or turn it on in **Game settings → Compatibility** |
| "Direct3D failed without DXVK" | **Turn on DXVK and play**, or turn it on in **Game settings → Compatibility** |
| "Vulkan could not start" | **Copy the command** and run it in a terminal. It installs the Vulkan driver, often missing its 32-bit part (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| "Wine ran out of open files" | **Use fsync and play**, or choose Fsync instead of Esync in **Game settings → Compatibility** |
| "The memory map limit is low" | **Raise it and play**, then enter the administrator password ([details](#the-memory-map-limit-is-low-vmmax_map_count)) |
| "Another Wine still runs on the prefix" | **Stop it and play**, or close the other game |
| "Easy Anti-Cheat needs its runtime" | **Turn on the anti-cheat runtime and play** |
| "Easy Anti-Cheat blocks Linux players" | None: the developer does not allow Linux ([Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lists it as denied) |

### The memory map limit is low (vm.max_map_count)

Many games, and Easy Anti-Cheat, need `vm.max_map_count` at 1048576, the value of SteamOS, Fedora, Ubuntu and Arch. **Raise it and play** sets it now and keeps it after a restart. To set it yourself:

```bash
echo 'vm.max_map_count = 1048576' | sudo tee /etc/sysctl.d/80-heronite-max-map-count.conf
sudo sysctl -w vm.max_map_count=1048576
```

### The game still crashes

- Choose another **Version** under **Wine / Proton** in **Game settings → Compatibility**. GE-Proton or Proton-CachyOS often have fixes first.
- Give the game a new Wine prefix (a separate Windows folder for that game). In **Game settings → Compatibility**, choose **New prefix for this game** from the **Prefix** menu. The new prefix starts empty, so back up your saves first.
- Read the game's page on [ProtonDB](https://www.protondb.com), where players share what worked.

## The in-game overlay does not work (Linux)

- Guide button opens Steam: turn off **Guide Button Focuses Steam** in **Steam → Settings → Controller**.
- Overlay never appears: switch on **Turn on the overlay** in **Settings → Overlay** (it is off by default). It needs Wayland with layer-shell (KDE Plasma, Hyprland, Sway), so it does not work on GNOME or X11.

## Find the logs

Read them in **Settings → Logs**, or open `logs/` in the [data folder](/docs/files-and-folders/):

| Log | Where |
|---|---|
| Heronite itself | `logs/launcher/heronite-rs-<date>.log` (one per day, the last 7 kept) |
| A game | `logs/games/<game>_<store>/launch.log` (also `install.log` and others) |
| A store tool | `logs/runners/<tool>.log` |

For more detail:

- Start Heronite with `RUST_LOG=debug`
- Turn on **Detailed logs** in **Game settings → Advanced** (on Linux, it adds Wine output too)

If **Turn off logs** is on in **Settings → Advanced**, switch it off before you report a problem.

## Report a bug

[Open an issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) with:

- Your system: distribution or Windows version, desktop, GPU and driver
- How you installed Heronite (AppImage, package, installer, portable) and its version, from **Settings → About**
- What you did, what happened, and what you expected
- The logs above
