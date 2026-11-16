---
title: "Interface d’émulation et lanceur de ROM Linux | Heronite"
description: "Interface d’émulation et lanceur de ROM pour Linux et Windows : détection de RetroArch, Dolphin et PCSX2, analyse des dossiers et jaquettes pour les jeux."
eyebrow: Émulation
headline: "Une interface pour émulateurs et ROM sur Linux"
lead: "Heronite est une interface pour émulateurs sur Linux et Windows. Il détecte vos émulateurs et analyse vos dossiers de ROM pour les jeux rétro et console."
navLabel: Émulation
summary: "Détection de 22 émulateurs et des cœurs RetroArch, analyse des ROM, regroupement des jeux multidisques et affichage de RetroAchievements."
order: 3
hero: ../../../assets/screenshots/emulators.webp
heroAlt: "Page Emulators d’Heronite : cartes PCSX2 et RPCS3 marquées Native et Ready, dossiers de ROM avec Scan now et Review, et boutons de détection, d’analyse et d’ajout."
og: /og/fr/emulation.jpg
updated: 2026-11-13
highlights:
  - title: 22 émulateurs détectés
    text: RetroArch, Dolphin, PCSX2, Ryujinx et d’autres, trouvés sur PATH ou en Flatpak.
  - title: Analyse des ROM
    text: Indiquez vos dossiers de ROM ; chaque jeu reçoit une illustration.
  - title: Multidisques regroupés
    text: Chaque jeu apparaît une seule fois, quel que soit son nombre de disques.
  - title: Succès
    text: Connectez un compte RetroAchievements pour voir la progression de vos jeux émulés.
faq:
  - q: Quel est le meilleur lanceur de ROM pour Linux ?
    a: Cela dépend de vos besoins. Heronite convient si vous voulez réunir jeux émulés et jeux Steam, Epic et GOG. Il est gratuit et open source.
  - q: Existe-t-il une interface RetroArch pour Linux et Windows ?
    a: Oui. Heronite détecte RetroArch et ses cœurs, et choisit un cœur par défaut pour chaque système.
  - q: Heronite inclut-il des émulateurs ou des ROM ?
    a: Non. Vous installez les émulateurs et fournissez vos ROM.
  - q: Puis-je utiliser un émulateur absent de la liste ?
    a: Oui. Ajoutez un émulateur personnalisé en indiquant son programme et ses arguments.
related:
  - /features/game-library/
  - /features/console-mode/
  - /features/stores/
---

Les jeux émulés rejoignent la même bibliothèque que vos jeux PC, avec temps de jeu et historique des sessions.

## Comment configurer l’émulation dans Heronite ?

1. [Téléchargez Heronite](/fr/download/) pour Linux ou Windows.
2. Installez les émulateurs souhaités.
3. Rangez vos ROM dans un sous-dossier par système.
4. Ouvrez **Emulators** (<kbd>Ctrl</kbd> <kbd>5</kbd>).
5. Choisissez **Detect emulators…** pour trouver les émulateurs installés.
6. Appuyez sur **Add ROM folder**, puis choisissez l’émulateur et son dossier de ROM.

Heronite analyse le dossier et ajoute ses jeux. **Scan all folders now** détecte ceux ajoutés plus tard.

## Quels émulateurs Heronite prend-il en charge ?

Heronite prend en charge les 22 émulateurs ci-dessous et tout émulateur personnalisé. Installez-les depuis votre distribution, Flathub ou leur site. Heronite les trouve sur `PATH`, en Flatpak et sous forme de cœurs RetroArch.

| Émulateur | Systèmes |
|---|---|
| RetroArch | Nombreux systèmes, via les cœurs |
| Dolphin | GameCube, Wii |
| PCSX2 | PlayStation 2 |
| DuckStation | PlayStation |
| ePSXe | PlayStation |
| PPSSPP | PSP |
| RPCS3 | PlayStation 3 |
| shadPS4 | PlayStation 4 |
| Vita3K | PlayStation Vita |
| Cemu | Wii U |
| Ryujinx | Switch |
| Mupen64Plus | Nintendo 64 |
| M64Py | Nintendo 64 |
| gopher64 | Nintendo 64 |
| Azahar (ou Citra) | 3DS |
| melonDS | Nintendo DS |
| DeSmuME | Nintendo DS |
| mGBA | Game Boy, Game Boy Advance |
| Xemu | Xbox |
| Flycast | Dreamcast |
| MAME | Arcade |
| ScummVM | Jeux d’aventure |
| Personnalisé | Tout autre émulateur : indiquez le programme et ses arguments |

Si un jeu ne démarre pas, voir [Dépannage](/fr/docs/troubleshooting/).

## Quel cœur RetroArch Heronite utilise-t-il pour chaque système ?

RetroArch émule les systèmes via des **cœurs**. Voici ceux utilisés par défaut :

| Système | Cœur par défaut |
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

Installez les cœurs depuis **Online Updater** dans RetroArch. Heronite cherche dans le dossier des cœurs (`~/.config/retroarch/cores` sur Linux, `%APPDATA%\RetroArch\cores` sur Windows), le Flatpak et les dossiers libretro du système. Voir [Cœurs RetroArch](/fr/docs/emulation/#cœurs-retroarch).

## Où placer mes ROM ?

Conservez un sous-dossier par système :

```
ROMs/
├── snes/
├── psx/
└── gba/
```

Au premier démarrage, Heronite analyse les dossiers de ROM courants s’ils existent. Sur Linux : `ROMs`, `Emulation/roms` et `Games/ROMs` dans votre dossier personnel, ainsi que `retrodeck/roms` pour RetroDECK. Sur Windows : `ROMs`, `Emulation\roms` et `Games\ROMs` dans votre dossier utilisateur et à la racine de chaque lecteur.

Voir la liste complète dans [Dossiers de ROM](/fr/docs/emulation/#dossiers-de-rom). Les analyses ignorent `bios`, `firmware`, `saves`, `states`, `cheats`, `system`, `media` et `manuals`.

## Comment sont gérés les jeux multidisques et les états de sauvegarde ?

Les jeux lus depuis des fichiers `.m3u`, `.cue` et `.gdi` apparaissent une seule fois dans la bibliothèque. La page d’un jeu permet de reprendre depuis un **état de sauvegarde**, là où vous en étiez.

## Les jeux émulés ont-ils des jaquettes et des succès ?

Oui. Chaque jeu ajouté depuis un dossier de ROM reçoit une illustration. Les jaquettes [SteamGridDB](https://www.steamgriddb.com) conviennent bien aux jeux émulés. Ajoutez sa clé gratuite facultative dans **Settings → Metadata**, comme expliqué dans [Métadonnées et illustrations](/fr/docs/metadata-and-art/).

Pour les succès, connectez un compte [RetroAchievements](https://retroachievements.org) dans Settings.

![La Collection d’Heronite avec des jeux dans Playing et On Going et ELDEN RING ouvert : jaquette, bouton Play, captures, détails et historique des sessions.](../../../assets/screenshots/collection.webp)

*Une page de jeu avec illustration, bouton Play, détails et historique.*

## Puis-je jouer aux jeux émulés à la manette ?

Oui. Le [mode console](/fr/features/console-mode/) affiche toute votre bibliothèque, jeux émulés compris, dans une interface pensée pour la manette, le canapé ou la TV. Heronite enregistre aussi leur [temps de jeu](/fr/features/play-time-tracking/). Sur Steam Deck, voir le [guide Steam Deck](/fr/guides/steam-deck/).

À lire ensuite : ajoutez vos jeux PC sur la page [Boutiques et lanceurs](/fr/features/stores/).
