---
title: "Alternative à Lutris sur Linux : Heronite et Lutris"
description: "Une alternative à Lutris sur Linux et Windows. Comparez scripts d’installation, boutiques, émulateurs et historique, puis importez vos jeux Lutris."
eyebrow: Comparatif
headline: "Heronite face à Lutris"
lead: "Heronite est une alternative à Lutris centrée sur les boutiques : il installe vos jeux Epic, GOG et Amazon et fonctionne aussi sur Windows. Lutris s’appuie sur des scripts communautaires et des moteurs pour de nombreux systèmes."
navLabel: Heronite face à Lutris
summary: "Scripts d’installation, moteurs, boutiques, émulation et historique : comparez Heronite et Lutris et importez vos jeux."
order: 3
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Wine Manager avec Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM et Proton-Sarek, et les versions de Proton-CachyOS avec dates, tailles et boutons Install."
og: /og/fr/lutris.jpg
updated: 2026-11-04
highlights:
  - title: Import des jeux Lutris
    text: Sur Linux, vos jeux Lutris sont repris et restent synchronisés.
  - title: Sans inscription
    text: Heronite fonctionne sans compte propre à l’application.
  - title: Isolez les jeux non fiables
    text: Lancez un jeu sans réseau ni accès au dossier personnel.
  - title: Copies de sauvegarde
    text: Ludusavi copie les sauvegardes après chaque session.
faq:
  - q: Heronite a-t-il des scripts d’installation comme Lutris ?
    a: Oui. Heronite installe un jeu depuis un fichier de script YAML que vous choisissez et l’ajoute à la bibliothèque. Lutris propose la bibliothèque communautaire de lutris.net.
  - q: Heronite fonctionne-t-il sur Steam Deck ?
    a: Oui, en AppImage en mode Bureau et comme jeu non-Steam en mode Jeu. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: "Heroic ou Lutris : lequel utiliser ?"
    a: Heroic se concentre sur Epic, GOG et Amazon. Lutris couvre davantage de systèmes, moteurs et scripts. Voir [Heronite face à Heroic](/compare/heroic/).
related:
  - /features/wine-and-proton/
  - /features/emulation/
  - /compare/heroic/
---

## Heronite et Lutris : comparatif des fonctionnalités

| | Heronite | Lutris |
|---|---|---|
| Systèmes | Linux et Windows 10/11 | Linux |
| Technologies | Rust, rendu GPU, sans navigateur embarqué | Python |
| Installation des jeux | Boutique, manuelle ou script YAML | Scripts ou configuration manuelle |
| Bibliothèque Steam | Oui, sans connexion | Oui |
| Epic, GOG, Amazon | Oui, avec legendary, gogdl et nile | Oui |
| Battle.net, EA app | Oui, via Wine sur Linux | Oui |
| Émulation | Détection, analyse des ROM, états de sauvegarde | Moteurs pour de nombreux émulateurs et jeux |
| Wine et Proton | Oui, avec gestionnaire Wine | Oui, GE-Proton via umu par défaut |
| Temps de jeu | Statistiques, journal, bilan annuel | Oui, avec éditeur du temps de jeu |
| Sauvegardes cloud | Epic et GOG, en bêta | — |
| Compte en ligne | Non requis | Compte lutris.net facultatif |
| Import depuis l’autre lanceur | Oui, sur Linux | Sans objet |

La colonne Lutris s’appuie sur [lutris.net](https://lutris.net), le [dépôt Lutris](https://github.com/lutris/lutris) et ses [notes de version](https://github.com/lutris/lutris/releases), à jour en novembre 2026. — = non mentionné dans son README, site ou notes de version.

## Quels sont leurs points communs ?

Tous deux sont gratuits et open source (GPL-3.0). Ils lancent les jeux Windows via Wine ou Proton, se connectent à plusieurs boutiques, suivent le temps de jeu et prennent en charge des émulateurs.

## Lequel choisir ?

### Choisissez Lutris si…

- **Vous utilisez les scripts communautaires.** Les installateurs Lutris sont des scripts YAML sur lutris.net ; un lien `lutris:` permet d’en lancer un en ligne de commande.
- **Vous voulez un moteur pour un ancien système ou un moteur de jeu.** Le site cite Wine, MAME, Dolphin, RetroArch, ScummVM et de nombreux autres.
- **Vous appréciez une interface commune à plusieurs moteurs.** Chacun a ses propres réglages.
- **Vous voulez synchroniser votre bibliothèque avec un compte.** Lutris propose un compte lutris.net facultatif.

### Choisissez Heronite si…

- **Vous jouez surtout depuis des boutiques.** Une connexion à Epic Games, GOG et Amazon Games fait apparaître tous vos jeux, installés ou non ([boutiques](/fr/features/stores/)).
- **Vous voulez Wine ou Proton par jeu.** Choisissez version, préfixe Wine et options DXVK ou gamescope ([Wine et Proton](/fr/features/wine-and-proton/)).
- **Vous voulez une application native Rust.** Sans navigateur embarqué, environ 190 Mo au repos ([performances](/fr/features/performance/)).
- **Vous voulez un historique.** Chaque session alimente les [statistiques](/fr/features/play-time-tracking/), le journal et le bilan annuel.
- **Vous jouez sur TV ou à la manette.** Le [mode console](/fr/features/console-mode/) propose huit dispositions et sept thèmes modifiables et partageables.
- **Vous voulez le même lanceur sur Windows.** **Settings → Cloud** synchronise la bibliothèque entre les systèmes d’un double démarrage ([sauvegardes](/fr/features/saves-and-backups/)).

![La Collection d’Heronite : jeux regroupés dans Playing et On Going, avec un jeu ouvert affichant détails et historique des sessions.](../../../assets/screenshots/collection.webp)

*La Collection : jeux regroupés, temps de jeu et historique des sessions.*

## Comment passer de Lutris à Heronite ?

Sur Linux, Heronite importe les jeux de la bibliothèque Lutris en lisant uniquement ses fichiers. Lutris continue de fonctionner comme avant.

1. **[Installez Heronite](/fr/docs/installation/) et lancez-le.**
2. **Activez l’import Lutris.** Dans **Settings → Other launchers**, activez **Bring its games in** sous Lutris. Les jeux installés apparaissent avec jaquettes et temps de jeu, et restent synchronisés avec l’installation classique ou Flatpak.
3. **Connectez-vous aux boutiques.** Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) et connectez-vous à Epic Games, GOG et Amazon Games.

À savoir :

- Lutris continue de lancer les jeux importés avec les réglages définis dans Lutris.
- Heronite ignore ses jeux Steam et utilise son propre import pour éviter les doublons.
- Heronite importe les jeux, pas leurs scripts d’installation.
- [Wine Manager](/fr/features/wine-and-proton/) détecte les versions Wine déjà installées par Lutris.

**À lire ensuite :** [téléchargez Heronite](/fr/download/), puis consultez [Premiers pas](/fr/docs/getting-started/).
