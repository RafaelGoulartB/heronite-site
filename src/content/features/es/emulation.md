---
title: "Frontend de emuladores y ROMs para Linux | Heronite"
description: "Frontend de emuladores y lanzador de ROMs para Linux y Windows: encuentra RetroArch, Dolphin y PCSX2, escanea carpetas de ROMs y añade arte a cada juego."
eyebrow: Emulación
headline: "Frontend de emuladores y lanzador de ROMs para Linux"
lead: "Heronite es un frontend de emuladores para Linux y Windows. Detecta tus emuladores y escanea tus carpetas de ROMs de juegos retro y de consola."
navLabel: Emulación
summary: "Detecta 17 emuladores y núcleos de RetroArch, escanea carpetas de ROMs, une los juegos de varios discos y muestra RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "La página de Emuladores de Heronite con tarjetas de PCSX2 y RPCS3, cada una marcada como Nativo y Listo, con su carpeta de ROMs y los botones Escanear ahora y Revisar, y botones para detectar emuladores, escanear una carpeta y añadir una carpeta de ROMs."
og: /og/emulation.jpg
updated: 2026-11-04
highlights:
  - title: 17 emuladores detectados
    text: RetroArch, Dolphin, PCSX2, Ryujinx y más, en el PATH o como Flatpak.
  - title: Escanea ROMs
    text: Indica tus carpetas de ROMs y cada juego recibe su arte.
  - title: Varios discos, unidos
    text: Los juegos de varios discos aparecen una vez, no una por disco.
  - title: Logros
    text: Conecta una cuenta de RetroAchievements para ver tu progreso en los juegos emulados.
faq:
  - q: ¿Cuál es el mejor lanzador de ROMs para Linux?
    a: Depende de lo que necesites. Heronite encaja si quieres tus juegos emulados junto a tus juegos de Steam, Epic y GOG. Es gratis y de código abierto.
  - q: ¿Hay un frontend de RetroArch para Linux y Windows?
    a: Sí. Heronite encuentra RetroArch y sus núcleos, y elige un núcleo por defecto para cada sistema.
  - q: ¿Heronite incluye emuladores o ROMs?
    a: No. Tú instalas los emuladores y pones tus ROMs.
  - q: ¿Puedo usar un emulador que no está en la lista?
    a: Sí. Añade un emulador personalizado indicando a Heronite el programa y sus argumentos.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Los juegos emulados entran en la misma biblioteca que tus juegos de PC, con tiempo de juego y una línea de tiempo de sesiones.

## ¿Cómo configuro la emulación en Heronite?

1. [Descarga Heronite](/es/download/) para Linux o Windows.
2. Instala los emuladores que quieras.
3. Pon tus ROMs en una subcarpeta por sistema.
4. Abre la página **Emuladores** (<kbd>Ctrl</kbd> <kbd>5</kbd>).
5. Elige **Detectar emuladores…** para encontrar los que tienes instalados.
6. Pulsa **Añadir carpeta de ROMs** y elige el emulador y la carpeta con sus ROMs.

Heronite escanea la carpeta y añade sus juegos. **Escanear todas las carpetas ahora** encuentra los juegos que añadas después.

## ¿Qué emuladores son compatibles con Heronite?

Heronite admite los 17 emuladores de abajo y cualquiera personalizado. Instálalos desde tu distribución, Flathub o sus sitios web. Heronite los encuentra en el `PATH`, como Flatpak y como núcleos de RetroArch.

| Emulador | Sistemas |
|---|---|
| RetroArch | Muchos, mediante núcleos |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Azahar (o Citra) | 3DS |
| melonDS | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Juegos de aventura |
| Personalizado | Cualquier otro emulador: indica el programa y sus argumentos |

Si un juego no abre, mira la [solución de problemas](/es/docs/troubleshooting/).

## ¿Qué núcleo de RetroArch usa Heronite para cada sistema?

RetroArch emula cada sistema con **núcleos** (cores). Heronite usa este núcleo por defecto para cada uno:

| Sistema | Núcleo por defecto |
|---|---|
| NES | `nestopia` |
| SNES | `snes9x` |
| Game Boy | `gambatte` |
| Game Boy Advance | `mgba` |
| Nintendo 64 | `mupen64plus_next` |
| Nintendo DS | `melonds` |
| Mega Drive, Master System, Game Gear | `genesis_plus_gx` |
| Saturn | `mednafen_saturn` |
| Dreamcast | `flycast` |
| PlayStation | `pcsx_rearmed` |
| PSP | `ppsspp` |
| PC Engine | `mednafen_pce_fast` |
| Neo Geo Pocket | `mednafen_ngp` |
| WonderSwan | `mednafen_wswan` |
| Lynx | `mednafen_lynx` |
| Atari 2600 | `stella` |
| Arcade | `fbneo` |
| MAME | `mame` |

Instala los núcleos desde el **Online Updater** de RetroArch. Heronite los busca en la carpeta de núcleos de RetroArch (`~/.config/retroarch/cores` en Linux, `%APPDATA%\RetroArch\cores` en Windows), en el Flatpak y en las carpetas libretro del sistema. Mira los [núcleos de RetroArch](/es/docs/emulation/#núcleos-de-retroarch).

## ¿Dónde pongo mis ROMs?

Usa una subcarpeta por sistema:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

En el primer inicio, Heronite escanea las carpetas de ROMs más comunes si existen. En Linux son, entre otras, `ROMs`, `Emulation/roms` y `Games/ROMs` en tu carpeta personal, más `retrodeck/roms` para RetroDECK. En Windows son, entre otras, `ROMs`, `Emulation\roms` y `Games\ROMs` en tu carpeta de usuario y en la raíz de cada unidad.

Las [carpetas de ROMs](/es/docs/emulation/#carpetas-de-roms) tienen la lista completa. Los escaneos se saltan las carpetas llamadas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` y `manuals`.

## ¿Cómo maneja Heronite los juegos de varios discos y los estados guardados?

Los juegos leídos desde archivos `.m3u`, `.cue` y `.gdi` aparecen una sola vez en tu biblioteca, no una vez por disco. La página de un juego te deja continuar desde un **estado guardado**, para seguir donde lo dejaste.

## ¿Los juegos emulados tienen carátulas y logros?

Sí. Cada juego añadido desde una carpeta de ROMs recibe arte como cualquier otro. Las carátulas de [SteamGridDB](https://www.steamgriddb.com) quedan bien con los juegos emulados. Añade su clave gratuita y opcional en **Ajustes → Metadatos**, como explica [Metadatos y arte](/es/docs/metadata-and-art/).

Para los logros, conecta una cuenta de [RetroAchievements](https://retroachievements.org) en Ajustes.

![La Colección de Heronite con juegos agrupados en Jugando y En curso, y ELDEN RING abierto con su carátula, un botón Jugar, capturas, detalles y una línea de tiempo de sesiones de juego.](../../../assets/screenshots/collection.webp)

*La página de un juego con arte, un botón Jugar, detalles y una línea de tiempo de sesiones.*

## ¿Puedo jugar a juegos emulados con un mando?

Sí. El [modo consola](/es/features/console-mode/) muestra toda tu biblioteca, juegos emulados incluidos, en un diseño pensado para mandos, para el sofá o la TV. Heronite también registra su [tiempo de juego](/es/features/play-time-tracking/). En una Steam Deck, mira la [guía de la Steam Deck](/es/guides/steam-deck/).

Siguiente: añade tus juegos de PC en la página de [tiendas y lanzadores](/es/features/stores/).
