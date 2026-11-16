---
title: "Epic Games sur Linux : bibliothèque et jeux gratuits"
description: "Jouez à Epic Games sur Linux sans lanceur officiel : connexion, jeux gratuits hebdomadaires, installation avec Proton et vérification de l’antitriche."
eyebrow: Guide Linux
headline: "Comment jouer à Epic Games sur Linux"
lead: "Epic ne propose pas de lanceur Linux. Heronite se connecte à Epic et lance vos jeux avec Proton, sans configuration de Wine."
navLabel: Epic Games sur Linux
summary: "Connectez-vous à Epic, installez vos jeux avec Proton et vérifiez l’antitriche avant de télécharger."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Collection avec ELDEN RING ouvert : bouton Play et encadré On Linux avec note ProtonDB Gold et état EAC ok."
og: /og/fr/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: Une seule connexion
    text: Toute votre bibliothèque Epic apparaît après connexion.
  - title: Déjà sur disque ?
    text: Importez les fichiers existants au lieu de télécharger à nouveau.
  - title: Proton par défaut
    text: Heronite choisit une version, modifiable par jeu.
  - title: Vérifiez avant d’installer
    text: Chaque jeu affiche sa note ProtonDB et l’état antitriche.
faq:
  - q: Existe-t-il un Epic Games Launcher pour Linux ?
    a: Non. Heronite utilise [legendary](https://github.com/derrod/legendary), un outil open source pour la connexion, l’installation, les mises à jour et le lancement.
  - q: Puis-je jouer à Fortnite sur Linux ?
    a: Non. Epic n’a pas activé la prise en charge Linux dans l’antitriche de Fortnite.
  - q: Heronite synchronise-t-il les sauvegardes cloud Epic ?
    a: Oui, en bêta. Ouvrez **Game settings → Cloud saves** et appuyez sur **Sync**. Faites une copie des sauvegardes avant la première synchronisation.
  - q: Dois-je installer Wine ou Proton avant ?
    a: Non. Heronite télécharge Proton au besoin. Il suffit d’un pilote Vulkan fonctionnel. Voir [Wine et Proton](/docs/wine-and-proton/).
  - q: La connexion à Epic via Heronite est-elle sûre ?
    a: Oui. Votre mot de passe va uniquement à la page de connexion Epic ; Heronite garde la connexion sur votre PC. Voir la [FAQ](/docs/faq/).
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

## Prérequis

- Un PC Linux 64 bits avec pilote Vulkan fonctionnel. Vérifiez avec `vulkaninfo --summary` que votre GPU est reconnu. Les anciens jeux 32 bits nécessitent aussi le pilote Vulkan 32 bits.
- Un compte Epic Games.
- De l’espace disque. Installation par défaut dans `~/Games/Heronite`.

## Installer Heronite

Récupérez l’AppImage sur la [page de téléchargement](/fr/download/) :

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Voir les autres paquets dans le [guide d’installation](/fr/docs/installation/). Sur Steam Deck, suivez le [guide Steam Deck](/fr/guides/steam-deck/).

## Se connecter à Epic Games

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **Epic Games**.
3. Appuyez sur **Log in**.
4. Connectez-vous sur la page Epic dans la fenêtre qui s’ouvre.

Toute votre bibliothèque apparaît, jeux installés ou non. Si la fenêtre ne s’ouvre pas, choisissez **Or log in with your browser** et collez le code obtenu. Voir [Dépannage](/fr/docs/troubleshooting/#une-connexion-à-une-boutique-ou-un-téléchargement-échoue).

## Récupérer les jeux gratuits hebdomadaires

Heronite ne récupère pas les offres Epic à votre place :

1. Ouvrez la boutique Epic dans votre navigateur avec le même compte.
2. Récupérez le jeu gratuit.
3. Dans Heronite, ouvrez **Stores → Epic Games** et appuyez sur **Refresh library**.

Le jeu apparaît alors. S’il manque, vérifiez le compte Epic et actualisez à nouveau.

## Installer et lancer un jeu Epic

1. Consultez **On Linux** dans les détails : note [ProtonDB](https://www.protondb.com) et état antitriche. Gold ou Platinum fonctionne généralement sans intervention.
2. Sélectionnez le jeu et appuyez sur <kbd>Entrée</kbd>, ou choisissez **Install with Epic Games**.
3. Vérifiez le dossier dans **Select install path**.
4. Appuyez sur **Install**. Le téléchargement apparaît dans Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
5. Une fois terminé, appuyez sur <kbd>Entrée</kbd> sur le jeu pour jouer.

Chaque jeu reçoit un préfixe Wine (un dossier Windows séparé). Si les fichiers sont déjà sur disque, choisissez **Import game** et leur dossier.

## Changer de version de Proton

Si un jeu ne démarre pas ou fonctionne mal, ouvrez **Game settings → Compatibility** et changez **Version**. La ligne ProtonDB indique souvent la version adaptée. Avant installation, utilisez **Show Wine settings**, puis **Wine version**.

![Réglages de Control, jeu Epic : onglet Compatibility, GE-Proton-latest, note Platinum, préfixe Wine et boutons Winecfg et Winetricks.](../../../assets/screenshots/game-settings.webp)

GE-Proton et Proton-CachyOS reçoivent souvent les correctifs avant les autres. Voir le [guide GE-Proton](/fr/guides/install-ge-proton/).

## Quels jeux Epic sont bloqués par l’antitriche ?

L’antitriche est la principale raison d’échec des jeux Epic en ligne sur Linux. Les jeux solo sont rarement concernés.

- Certains jeux Easy Anti-Cheat ou BattlEye fonctionnent. Activez l’environnement correspondant sous **Anti-cheat runtimes** dans **Game settings → Compatibility** : Heronite le télécharge au prochain lancement.
- Si le développeur n’autorise pas Linux, comme pour Fortnite, le jeu ne fonctionnera pas.

[Are We Anti-Cheat Yet?](https://areweanticheatyet.com) suit l’état des jeux. Voir la documentation sur l’[antitriche](/fr/docs/wine-and-proton/#antitriche).

## Un jeu Epic ne démarre pas sur Linux

Consultez son journal dans **Settings → Logs**. [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux) couvre DLL manquantes, DirectX 12 et erreurs Vulkan.
