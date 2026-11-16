---
title: "Wine et Proton sur Linux : lancer des jeux Windows"
navLabel: "Wine et Proton"
description: "Lancez vos jeux Windows sur Linux : Wine Manager, Proton, préfixes, options DXVK et gamescope par jeu, bac à sable et antitriche dans Heronite."
section: Guides
order: 3
updated: 2026-11-04
---

Heronite lance les jeux Windows sur Linux via Wine ou Proton. Modifiez les options par jeu dans **Game settings → Compatibility**, ou globalement dans Settings. En cas d’échec, Heronite suggère une solution : voir [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux).

## Télécharger Proton dans Wine Manager

Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) télécharge et met à jour :

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Les versions vont dans le dossier de données (`~/.local/share/heronite/tools/proton` et `tools/wine`), ou dans `compatibilitytools.d` de Steam si activé, pour les partager. Heronite détecte aussi celles déjà dans Steam et les versions Wine de Lutris.

## Emplacement des jeux et préfixes Wine

Un préfixe Wine est un dossier Windows séparé contenant réglages, sauvegardes et composants Winetricks. Par défaut :

- Jeux dans `~/Games/Heronite`
- Un préfixe par jeu dans `~/Games/Heronite/Prefixes`
- Préfixe partagé possible dans `~/Games/Heronite/Prefixes/shared`, avec risque de conflits de dépendances

Wine Manager répertorie les préfixes. Dans **Game settings → Compatibility**, **Prefix** choisit un préfixe ou en crée un avec **New prefix for this game**. **Winecfg** et **Winetricks** agissent sur celui-ci.

## Options par jeu

- Version de Wine ou Proton et préfixe
- DXVK, VKD3D-Proton et DXVK-NVAPI
- Esync et Fsync
- gamescope (nécessite `gamescope` installé)
- Limite de FPS
- Choix du GPU sur PC à plusieurs GPU
- Mises à niveau DLSS, FSR et XeSS
- Winetricks
- umu et ses protonfixes (correctifs de sa base de données)
- Génération d’images Lossless Scaling via [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) (nécessite Lossless Scaling sur Steam ; Vulkan, DXVK et VKD3D, pas OpenGL)
- Wayland au lieu de X11 (version Wine compatible nécessaire)
- Scripts avant et après, programmes en parallèle comme les trainers
- Préréglages de lancement réutilisables

## Bac à sable

Activez **Run in a sandbox** dans **Game settings → Sandbox** pour un jeu non fiable. Il passe par [bubblewrap](https://github.com/containers/bubblewrap) (`bwrap`, paquet `bubblewrap`), sans réseau ni accès au dossier personnel. Autorisez un dossier ou le réseau dans **Exceptions** au besoin.

## Antitriche

Heronite affiche dans les détails l’état fourni par [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Si le jeu fonctionne sur Linux, activez **BattlEye** ou **Easy Anti-Cheat** sous **Anti-cheat runtimes** dans **Game settings → Compatibility** ; Heronite le télécharge avant le prochain lancement. Si le développeur n’autorise pas Linux, aucun réglage ne permettra de jouer.
