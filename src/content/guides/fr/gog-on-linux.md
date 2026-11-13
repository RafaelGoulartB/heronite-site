---
title: "Les jeux GOG sur Linux sans GOG Galaxy"
description: "Installez vos jeux GOG sur Linux sans GOG Galaxy : connectez-vous à votre bibliothèque ou ajoutez des installateurs hors ligne sans DRM et sans compte."
eyebrow: Guide Linux
headline: "Comment jouer aux jeux GOG sur Linux"
lead: "Jouez sans GOG Galaxy. Connectez-vous pour installer votre bibliothèque avec Heronite ou ajoutez manuellement vos installateurs sans DRM."
navLabel: GOG sur Linux
summary: "Connectez-vous à GOG pour installer votre bibliothèque, ou ajoutez des installateurs hors ligne sans DRM et des dossiers de jeux."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Collection avec un jeu sélectionné : jaquette, bouton Play, détails et encadré On Linux avec note ProtonDB et état antitriche."
og: /og/fr/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: Une seule connexion
    text: Toute votre bibliothèque GOG apparaît après connexion.
  - title: Versions Linux natives
    text: Si GOG propose une version Linux, Heronite peut l’installer sans Wine.
  - title: Recherche automatique de mises à jour
    text: Heronite vérifie vos jeux GOG toutes les 3 heures.
  - title: Un préfixe par jeu
    text: Chaque jeu Windows fonctionne dans son propre dossier séparé.
faq:
  - q: Existe-t-il un GOG Galaxy pour Linux ?
    a: Non. Heronite utilise [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl), un outil open source pour se connecter, télécharger, vérifier et mettre à jour les jeux.
  - q: Les jeux GOG fonctionnent-ils sur Linux ?
    a: Beaucoup fonctionnent via Wine ou Proton. Vérifiez la note [ProtonDB](https://www.protondb.com) avant installation.
  - q: Pourquoi mes téléchargements GOG échouent-ils sur Linux ?
    a: Vérifiez que `python3` est installé, car gogdl en dépend. Installez-le avec votre gestionnaire de paquets et réessayez. Voir les autres causes dans [Dépannage](/docs/troubleshooting/).
  - q: Puis-je jouer aux jeux GOG sur Steam Deck ?
    a: Oui. Connectez-vous en mode Bureau, puis jouez en mode Jeu. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: Puis-je utiliser les jeux de GOG Galaxy sur Windows ?
    a: Oui. Heronite les reconnaît comme installés sans nouveau téléchargement. Sur Linux, Galaxy n’existe pas pour cet import.
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## Prérequis

- Un PC Linux 64 bits avec pilote Vulkan fonctionnel.
- `python3`, requis par gogdl. Vérifiez avec `python3 --version` ; installez-le avec votre gestionnaire de paquets si nécessaire.
- Un compte GOG pour la connexion ; aucun compte pour les ajouts manuels.
- De l’espace disque. Les jeux s’installent dans `~/Games/Heronite`.

## Installer Heronite

Récupérez l’AppImage sur la [page de téléchargement](/fr/download/) :

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Les autres formats sont dans le [guide d’installation](/fr/docs/installation/). Sur Steam Deck, suivez le [guide Steam Deck](/fr/guides/steam-deck/).

## Se connecter à GOG

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **GOG**.
3. Appuyez sur **Log in**.
4. Connectez-vous sur la page GOG dans la fenêtre qui s’ouvre.

Tous vos jeux apparaissent. Si la fenêtre ne s’ouvre pas, utilisez **Or log in with your browser** et collez le code obtenu. Pour GOG, il s’agit de l’adresse d’arrivée contenant `code=` ([connexion aux boutiques](/fr/docs/troubleshooting/#une-connexion-à-une-boutique-ou-un-téléchargement-échoue)).

## Installer et lancer un jeu GOG

Consultez d’abord **On Linux** dans les détails pour la note [ProtonDB](https://www.protondb.com).

1. Sélectionnez le jeu et appuyez sur <kbd>Entrée</kbd>, ou **Install with GOG**.
2. Vérifiez **Select install path**. Pour un jeu Windows, **Wine version** est sous **Show Wine settings** ; commencez par la valeur par défaut.
3. Appuyez sur **Install**. Suivez Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Une fois terminé, appuyez sur <kbd>Entrée</kbd> sur le jeu pour jouer.

Si GOG propose une version Linux native, Heronite peut la proposer à la place de Windows, sans Wine.

## Changer de version de Proton

Si un jeu Windows fonctionne mal, changez **Version** dans **Game settings → Compatibility**. Le [guide GE-Proton](/fr/guides/install-ge-proton/) explique comment obtenir d’autres versions.

![Réglages Compatibility de Control avec version de Proton, note ProtonDB et préfixe Wine.](../../../assets/screenshots/game-settings.webp)

Chaque jeu Windows dispose d’un préfixe Wine séparé dans `~/Games/Heronite/Prefixes`.

## Ajouter manuellement des jeux GOG sans DRM

1. Téléchargez l’installateur hors ligne depuis votre compte sur le site GOG.
2. Lancez-le. Pour Windows, utilisez **Run .exe in prefix** dans **Game settings → Compatibility**, ou Wine directement.
3. Appuyez sur <kbd>Ctrl</kbd> <kbd>N</kbd> et ajoutez le jeu installé : `.exe`, programme Linux natif ou script.

Pour plusieurs jeux, utilisez **Add from folder** dans le menu ☰. Heronite récupère illustrations et détails, mais ces jeux ne sont pas liés au compte GOG et ne se mettent pas à jour.

Si le jeu est déjà sur ce PC, utilisez **Import game** sous **Import an installed game** sur la page GOG.

## Mettre à jour, réparer ou déplacer un jeu GOG

- **Mise à jour :** vérification toutes les 3 heures ; **Update all** sur la page GOG les installe ensemble.
- **Réparation ou déplacement :** **Verify and repair** ou **Move install** dans les actions du jeu.

Une file unique gère ces opérations et les désinstallations, se met en pause hors ligne et réessaie les téléchargements échoués.

Les jeux restent après déconnexion. Gardez privé le dossier de données qui contient votre connexion ([Fichiers et dossiers](/fr/docs/files-and-folders/)).

## Un jeu GOG ne démarre pas sur Linux

Lisez son journal dans **Settings → Logs**. Heronite propose une solution lorsqu’il la connaît. Voir les corrections courantes dans [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux) et les options par jeu dans [Wine et Proton](/fr/docs/wine-and-proton/#options-par-jeu).
