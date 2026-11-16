---
title: "Gestionnaire Wine et Proton pour Linux | Heronite"
description: "Gérez Wine et Proton et lancez vos jeux sur Linux. Téléchargez GE-Proton et Proton-CachyOS, puis réglez préfixe, DXVK, gamescope et FPS par jeu."
eyebrow: Wine et Proton
headline: "Gérez Wine et Proton pour vos jeux Windows sur Linux"
lead: "Heronite télécharge GE-Proton, Proton-CachyOS et d’autres versions de Proton, et donne à chaque jeu son propre préfixe. La plupart des jeux Windows démarrent alors en un clic."
navLabel: Wine et Proton
summary: "Gestionnaire Wine intégré, préfixes et options par jeu, bac à sable et pistes de résolution des erreurs de lancement sur Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Réglages de Control, onglet Compatibility : GE-Proton-latest, note ProtonDB Platinum, préfixe Wine et dossier, boutons Winecfg et Winetricks, et champ umu ID."
og: /og/fr/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Versions partagées avec Steam
    text: Placez Proton dans compatibilitytools.d de Steam pour qu’il puisse aussi l’utiliser.
  - title: Réglages par jeu
    text: Définissez version, préfixe, DXVK et limite de FPS pour chaque jeu.
  - title: Bac à sable
    text: Lancez les jeux non fiables sans réseau ni accès à votre dossier personnel.
  - title: Aide en cas d’échec
    text: Les erreurs de lancement s’accompagnent d’une suggestion de correction.
faq:
  - q: Comment lancer des jeux Windows sur Linux ?
    a: Ajoutez le jeu, puis appuyez sur Play. Pour un jeu de boutique, connectez-vous d’abord. Modifiez les réglages dans **Game settings → Compatibility**.
  - q: Quelle est la meilleure version de Proton pour mon jeu ?
    a: Aucune ne convient à tous les jeux. **Proton-CachyOS** et **GE-Proton** reçoivent souvent les correctifs en premier ; commencez par eux. La page du jeu affiche sa note [ProtonDB](https://www.protondb.com).
  - q: Existe-t-il un gestionnaire Proton pour les jeux non-Steam ?
    a: Oui. **Wine Manager** (Ctrl+3) télécharge et met à jour les versions de Proton pour tout jeu de votre Collection.
  - q: Les jeux avec antitriche fonctionnent-ils sur Linux ?
    a: Cela dépend du jeu. Si le développeur n’autorise pas Linux, il ne fonctionnera pas. Voir la [documentation antitriche](/docs/wine-and-proton/#antitriche).
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Heronite lance les jeux Windows de [toutes les boutiques](/fr/features/stores/) et les programmes ajoutés manuellement via Wine ou Proton.

Modifiez les options pour un jeu dans **Game settings**, ou pour tous dans Settings. **Reset this tab** rétablit les valeurs par défaut d’un onglet.

## Quelles versions de Proton et Wine Heronite peut-il télécharger ?

Wine Manager (<kbd>Ctrl</kbd> <kbd>3</kbd>) télécharge et met à jour :

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

Les versions sont placées dans le dossier de données d’Heronite, ou dans `compatibilitytools.d` de Steam si vous activez l’option, pour les partager avec Steam. Heronite détecte aussi Proton dans vos bibliothèques Steam et les versions Wine de Lutris, évitant les doublons.

![Wine Manager : familles de Proton à gauche, Proton-CachyOS sélectionné, versions à droite avec dates, tailles et boutons Install.](../../../assets/screenshots/wine-manager.webp)

*Choisissez une famille, puis installez ou supprimez une version.*

Pour les étapes détaillées, voir [Installer GE-Proton](/fr/guides/install-ge-proton/).

## Qu’est-ce qu’un préfixe Wine ?

Un préfixe Wine est un dossier Windows séparé pour un jeu. Par défaut, les jeux s’installent dans `~/Games/Heronite` et chaque jeu reçoit un préfixe dans `~/Games/Heronite/Prefixes`, même si plusieurs peuvent en partager un. Wine Manager répertorie les préfixes ; **Game settings → Compatibility** propose **Winecfg** et **Winetricks**.

## Quelles options puis-je régler par jeu ?

Toutes les options ci-dessous peuvent être réglées pour un jeu et enregistrées dans un **préréglage de lancement** réutilisable. Voir la liste complète dans la [documentation](/fr/docs/wine-and-proton/#options-par-jeu).

- Version de Wine ou Proton et préfixe
- DXVK, VKD3D-Proton et DXVK-NVAPI
- Esync et Fsync
- gamescope (nécessite `gamescope`, voir [Installation](/fr/docs/installation/))
- Limite de FPS
- Choix du GPU sur les PC qui en ont plusieurs
- Mises à niveau DLSS, FSR et XeSS
- Winetricks
- umu et ses protonfixes, des correctifs issus de sa base de données
- Wayland à la place de X11 (avec une version Wine compatible)
- Scripts avant et après le jeu, et programmes à lancer avec lui, comme les trainers

### Comment activer la génération d’images Lossless Scaling ?

1. Installez [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) depuis votre distribution ou le guide sur lsfg-vk.dev.
2. Dans Steam, activez Steam Play pour tous les autres titres dans **Steam → Paramètres → Compatibilité**.
3. Installez Lossless Scaling depuis Steam. Il n’a pas besoin d’être lancé.
4. Ouvrez **Game settings → Performance** sur le jeu.
5. Sous **Frame generation**, activez **Lossless Scaling frame generation**.

Cela fonctionne avec les jeux Vulkan, DXVK et VKD3D, mais pas OpenGL.

## Puis-je isoler un jeu Windows dans un bac à sable ?

Oui. Dans **Game settings → Sandbox**, Heronite lance un jeu non fiable via [bubblewrap](https://github.com/containers/bubblewrap), sans réseau ni accès au dossier personnel. Vous pouvez autoriser certains accès, par exemple un dossier ou le réseau. Il faut installer `bwrap` ; voir la [documentation du bac à sable](/fr/docs/wine-and-proton/#bac-à-sable).

## Un jeu Windows ne démarre pas sur Linux

Heronite lit le journal de lancement et propose une correction s’il reconnaît :

- Une DLL ou .NET manquant
- Un jeu DirectX 12 sans VKD3D-Proton
- Un pilote Vulkan 32 bits manquant
- Une valeur `vm.max_map_count` trop basse
- Un autre `wineserver` encore actif
- Un antitriche non pris en charge

Sans suggestion, essayez une autre version dans **Game settings → Compatibility**, comme GE-Proton ou Proton-CachyOS, ou un préfixe neuf. Consultez ensuite [ProtonDB](https://www.protondb.com). Les journaux se trouvent dans **Settings → Logs**. La page [Dépannage](/fr/docs/troubleshooting/) contient le tableau complet.

## Comment vérifier l’état de l’antitriche d’un jeu ?

Les jeux solo posent rarement problème. Pour les autres, les détails du jeu affichent l’état fourni par [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), à vérifier avant achat ou installation. Heronite peut fournir les environnements EAC et BattlEye. Si le développeur n’autorise pas Linux, le jeu ne fonctionnera pas.

## Cela fonctionne-t-il sur Steam Deck ?

Oui. Heronite fonctionne en AppImage dans le mode Bureau de SteamOS, avec un mode console conçu pour les manettes. Voir le [guide Steam Deck](/fr/guides/steam-deck/).

À lire ensuite : [Heronite face à Lutris](/fr/compare/lutris/) et [à Heroic](/fr/compare/heroic/).
