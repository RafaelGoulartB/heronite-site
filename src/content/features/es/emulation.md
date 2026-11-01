---
title: "Frontend de emuladores para Linux y Windows | Heronite"
description: "Heronite es un frontend de emuladores gratuito para Linux y Windows. Detecta RetroArch, Dolphin, PCSX2, RPCS3 y más, escanea tus ROMs y añade arte a cada juego."
eyebrow: Emulación
headline: "Un frontend de emuladores *que encuentra tus juegos*"
lead: "Heronite detecta tus emuladores, escanea tus carpetas de ROMs y pone todos tus juegos retro y de consola en la misma Colección que tus juegos de PC, con arte, tiempo de juego y logros."
navLabel: Emulación
summary: "Detecta 17 emuladores y núcleos de RetroArch, escanea carpetas de ROMs, une los juegos de varios discos y muestra RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "La página de Emuladores de Heronite con tarjetas de PCSX2 y RPCS3, cada una marcada como Nativo y Listo, con su carpeta de ROMs y los botones Escanear ahora y Revisar, y botones para detectar emuladores, escanear una carpeta y añadir una carpeta de ROMs."
og: /og/emulation.jpg
updated: 2026-11-01
highlights:
  - title: Detecta tus emuladores
    text: Los encuentra en el PATH, como Flatpaks y como núcleos de RetroArch. Añade a mano cualquier otro emulador.
  - title: Escanea carpetas de ROMs
    text: Las carpetas de ROMs habituales se escanean en el primer inicio, y puedes añadir más. Cada juego recibe su arte.
  - title: Varios discos, unidos
    text: Los juegos leídos desde archivos .m3u, .cue y .gdi aparecen una sola vez, no una por disco.
  - title: Logros
    text: Conecta una cuenta de RetroAchievements para ver tu progreso en los juegos emulados.
faq:
  - q: ¿Cuál es el mejor frontend de emuladores para Linux?
    a: Depende de lo que necesites. Heronite encaja bien si quieres tus juegos emulados junto a tus juegos de Steam, Epic y GOG en una sola biblioteca, con arte, tiempo de juego y un [modo consola](/features/console-mode/) pensado para mandos. Es gratuito y de código abierto.
  - q: ¿Hay un frontend de RetroArch para Linux y Windows?
    a: Sí. Heronite ejecuta núcleos de RetroArch para muchos sistemas y elige un núcleo por defecto para cada uno, como `snes9x` para SNES y `mgba` para Game Boy Advance. Instala los núcleos desde el Online Updater de RetroArch y Heronite los encuentra.
  - q: ¿Heronite incluye emuladores o ROMs?
    a: No. Tú instalas los emuladores, desde tu distribución, Flathub o sus sitios web, y traes tus propios juegos. Heronite encuentra los emuladores y escanea tus carpetas de ROMs.
  - q: ¿Cómo añado una carpeta de ROMs?
    a: Abre la página de **Emuladores** con `Ctrl+5` y añade la carpeta. Mantén una subcarpeta por sistema, como `snes`, `psx` y `gba`. Las carpetas habituales, como `~/ROMs`, se escanean en el primer inicio.
  - q: ¿Puedo usar un emulador que no está en la lista?
    a: Sí. Añade un emulador personalizado indicando a Heronite el programa y sus argumentos.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Emular suele significar un montón de programas sueltos, un árbol de carpetas con ROMs y ninguna carátula. Heronite funciona como frontend de emuladores: detecta los emuladores que tienes instalados, escanea tus carpetas de ROMs y añade cada juego a la Colección con su arte. Los juegos emulados están en el mismo estante que el resto de tu [biblioteca de juegos](/es/features/game-library/), con su propio tiempo de juego y su línea de tiempo.

## ¿Qué emuladores son compatibles con Heronite?

Instala los emuladores tú mismo, desde tu distribución, Flathub o sus sitios web. Heronite los encuentra en el `PATH`, como Flatpaks y como núcleos de RetroArch.

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

## ¿Cómo uso RetroArch con Heronite?

RetroArch reproduce muchos sistemas mediante **núcleos** (cores). Cuando RetroArch ejecuta un sistema, Heronite usa un núcleo por defecto para él:

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

Instala los núcleos desde el Online Updater de RetroArch. Heronite los busca en la carpeta de núcleos de RetroArch (`~/.config/retroarch/cores` en Linux o `%APPDATA%\RetroArch\cores` en Windows), en el Flatpak y en las carpetas libretro del sistema. La documentación incluye la misma tabla en [Emuladores y ROMs](/es/docs/emulation/).

## ¿Cómo funciona el escaneo de ROMs?

Mantén una subcarpeta por sistema:

```
ROMs/
├── snes/
├── psx/
└── gba/
```

En el primer inicio, Heronite escanea los lugares habituales si existen. En Linux incluye `ROMs`, `Emulation/roms` y `Games/ROMs` en tu carpeta personal, además de `retrodeck/roms`. En Windows revisa carpetas como `ROMs`, `Emulation\roms` y `Games\ROMs` en tu carpeta de usuario y en la raíz de cada unidad. La lista completa está en [Emuladores y ROMs](/es/docs/emulation/).

Para añadir más, abre la página de **Emuladores** con <kbd>Ctrl</kbd> <kbd>5</kbd>. Los escaneos omiten las carpetas llamadas `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` y `manuals`, para que tus archivos de apoyo no se conviertan en juegos.

> **Consejo.** ¿Ya usas RetroDECK? Su carpeta `retrodeck/roms` es uno de los lugares que Heronite revisa por sí solo.

## ¿Y los juegos de varios discos y los estados guardados?

Los juegos de varios discos se leen desde archivos `.m3u`, `.cue` y `.gdi`, así que cada juego aparece una sola vez en tu Colección en lugar de una vez por disco. Eso mantiene ordenada una biblioteca larga de PlayStation.

La página de un juego también te permite continuar desde un **estado guardado**, para retomarlo donde lo dejaste en lugar de empezar desde la última partida guardada del propio juego.

## ¿Los juegos emulados tienen carátulas y logros?

Sí. Todo juego añadido desde una carpeta de ROMs recibe arte como cualquier otro. [SteamGridDB](https://www.steamgriddb.com) es especialmente útil aquí, porque sus carátulas de la comunidad encajan bien con los juegos emulados. Añade su clave gratuita y opcional en Ajustes, como se explica en [Metadatos y arte](/es/docs/metadata-and-art/).

Para los logros, conecta una cuenta de [RetroAchievements](https://retroachievements.org) en Ajustes. Después podrás ver tus logros de los juegos emulados.

![La Colección de Heronite con juegos agrupados en Jugando y En curso, y ELDEN RING abierto con su carátula, un botón Jugar, capturas, detalles y una línea de tiempo de sesiones de juego.](../../../assets/screenshots/collection.webp)

*Cada juego de la Colección tiene una página como esta, con arte, un botón Jugar, detalles y una línea de tiempo de sesiones.*

## ¿Puedo jugar a juegos emulados con un mando?

Sí. El [modo consola](/es/features/console-mode/) es un diseño pensado para mandos, para el sofá o la TV, y muestra toda tu Colección, así que los juegos emulados están ahí con el resto. Tu [tiempo de juego](/es/features/play-time-tracking/) también se registra para cada uno de ellos.

Si además juegas a juegos de PC de las tiendas, la [página de tiendas](/es/features/stores/) explica cómo Steam, Epic, GOG y Amazon se unen a la misma biblioteca. Y si quieres juegos de Windows en Linux, consulta [Wine y Proton](/es/features/wine-and-proton/).

## ¿A qué sistemas puedo jugar?

Entre los emuladores dedicados y los núcleos de RetroArch, las listas de arriba cubren Nintendo desde la NES hasta la Switch, PlayStation desde la primera consola hasta la PS4 y la Vita, Sega desde la Master System hasta la Dreamcast, Xbox, Atari, máquinas arcade y juegos de aventura con ScummVM. Lo que falte se puede añadir como emulador **personalizado**.

## Configúralo en pocos minutos

1. [Descarga Heronite](/es/download/) para Linux o Windows.
2. Instala los emuladores que quieras.
3. Pon tus ROMs en una subcarpeta por sistema.
4. Abre la página de **Emuladores**, pulsa detectar y luego escanea tus carpetas de ROMs.

La página de documentación [Emuladores y ROMs](/es/docs/emulation/) tiene las listas completas de carpetas, núcleos y reglas. Si un juego no arranca, consulta la [solución de problemas](/es/docs/troubleshooting/).
