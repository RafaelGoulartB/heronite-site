---
title: "Alternative à Heroic : Heronite face à Heroic"
description: "Une alternative à Heroic sur Linux et Windows : comparez Steam, émulateurs et mémoire, découvrez les atouts de Heroic et importez vos jeux Heroic."
eyebrow: Comparatif
headline: "Heronite face à Heroic Games Launcher"
lead: "Heronite ajoute Steam, les émulateurs et les applications Battle.net, EA, Ubisoft et Rockstar à votre bibliothèque Epic, GOG et Amazon. Heroic fonctionne aussi sur macOS."
navLabel: Heronite face à Heroic
summary: "Les différences entre Heronite et Heroic, les cas où Heroic convient mieux et l’import de vos jeux Heroic sur Linux."
order: 2
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "Palette Ctrl+K recherchant « contr » : Control sur Epic et CONTROL Ultimate Edition sur Steam dans la même liste, avec temps de jeu et actions de lancement, réglages et dossier."
og: /og/fr/heroic.jpg
updated: 2026-11-04
highlights:
  - title: Les mêmes outils de boutique
    text: Les deux utilisent les mêmes outils open source pour se connecter et télécharger.
  - title: Retrouvez tout rapidement
    text: Ctrl+K ouvre un jeu, une page ou une action.
  - title: Import de votre configuration Heroic
    text: Sur Linux, connexions aux boutiques et jeux ajoutés manuellement sont repris.
  - title: Démarrage en environ 215 ms
    text: Temps médian du lancement à l’affichage de la bibliothèque.
faq:
  - q: Puis-je utiliser Heronite et Heroic en parallèle ?
    a: Oui. Heronite lit uniquement les fichiers de Heroic.
  - q: Mes identifiants sont-ils en sécurité dans Heronite ?
    a: Oui. Ils restent sur votre PC et ne sont transmis qu’aux boutiques. Vous saisissez votre mot de passe sur la page de connexion de la boutique.
  - q: Heronite fonctionne-t-il sur Steam Deck ?
    a: Oui, en AppImage en mode Bureau et comme jeu non-Steam en mode Jeu. Voir le [guide Steam Deck](/guides/steam-deck/).
related:
  - /features/stores/
  - /features/wine-and-proton/
  - /compare/lutris/
---

## Heronite et Heroic : comparatif des fonctionnalités

| | Heronite | Heroic |
|---|---|---|
| Systèmes | Linux et Windows 10/11 | Linux, Windows 10/11, macOS 14 ou ultérieur |
| Technologies | Rust, rendu GPU, sans navigateur embarqué | Electron, TypeScript et React |
| Mémoire au repos | Environ 190 Mo | — |
| Epic, GOG, Amazon | Oui | Oui |
| Bibliothèque Steam | Oui, sans connexion | — |
| Battle.net, EA app, Ubisoft Connect, Rockstar | Oui, via Wine sur Linux | — |
| Microsoft Store et PC Game Pass | Oui, sur Windows | — |
| Émulation | Oui | — |
| Temps de jeu | Statistiques, journal, bilan annuel | Temps sur la page de chaque jeu |
| Mode console | Oui, avec thèmes | Oui |
| Sauvegardes cloud | Epic et GOG, en bêta | Oui |
| Copies de sauvegarde | Ludusavi, après chaque session | — |
| Même bibliothèque sur plusieurs PC | Oui, via dossier ou compte cloud | — |
| Import depuis l’autre lanceur | Oui, sur Linux | Sans objet |

La colonne Heroic s’appuie sur son [README](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher), son [site](https://heroicgameslauncher.com) et ses [notes de version](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases), à jour en novembre 2026. — = non mentionné dans ces sources.

## Quels sont leurs points communs ?

Tous deux sont sous GPL-3.0 et utilisent les mêmes outils open source : legendary pour Epic Games, gogdl pour GOG et nile pour Amazon Games. Tous deux lancent les jeux Windows sur Linux via Wine ou Proton, avec un gestionnaire Wine. Ils proposent une file de téléchargement, les jaquettes SteamGridDB et l’ajout de jeux hors boutique.

## Lequel choisir ?

### Choisissez Heroic si…

- **Vous utilisez macOS.** Heroic fonctionne sur macOS 14 ou ultérieur, avec les jeux Windows via Crossover.
- **Vous voulez des fonctions propres aux boutiques.** Heroic propose des écrans de promotions, les succès GOG sur les pages de jeu et la prise en charge expérimentale de ZOOM Platform sur Linux.
- **Vous voulez une configuration Wine et Steam Deck éprouvée.** Son site met en avant les réglages Wine automatiques et le Steam Deck.
- **Vous avez besoin d’une autre langue.** Heroic est traduit dans près de 40 langues ; l’application Heronite en anglais, portugais (Brésil), espagnol et allemand.
- **Vous voulez des versions fréquentes.** Heroic publie souvent, ce qui aide lorsqu’une boutique change.

### Choisissez Heronite si…

- **Vous voulez toutes les sources dans une bibliothèque.** Steam sans connexion, émulateurs, applications de boutique et jeux Microsoft Store sur Windows, regroupés par statut, boutique ou genre ([boutiques](/fr/features/stores/)).
- **Vous voulez une application native Rust.** Sans navigateur embarqué, environ 190 Mo au repos ([performances](/fr/features/performance/)).
- **Vous voulez un historique détaillé.** Chaque session alimente les [statistiques](/fr/features/play-time-tracking/), un objectif annuel, un journal et un bilan annuel.
- **Vous voulez personnaliser le mode console.** Huit dispositions et sept thèmes modifiables et partageables dans un fichier ([mode console](/fr/features/console-mode/)).
- **Vous jouez sur plusieurs PC.** **Settings → Cloud** garde la même bibliothèque sur chacun, par exemple en double démarrage ([sauvegardes](/fr/features/saves-and-backups/)).

## Comment passer de Heroic à Heronite ?

Sur Linux, Heronite importe la configuration Heroic en lisant uniquement ses fichiers. Vous pouvez continuer à utiliser les deux.

1. **Lancez Heronite.** Si `~/.config/heroic` existe, Heronite copie ses données une fois : connexions, réglages et jeux ajoutés manuellement avec leur configuration.
2. **Activez l’import Heroic.** Dans **Settings → Other launchers**, activez **Bring its games in** sous Heroic. Les jeux ajoutés et installés restent synchronisés avec l’installation classique ou Flatpak.
3. **Retrouvez vos jeux installés.** L’import reprend les informations des jeux Epic, GOG et Amazon installés par Heroic, dans les mêmes dossiers.

Heronite ignore les jeux Steam de Heroic et les importe directement depuis Steam pour éviter les doublons.

Si les jaquettes ne chargent pas, collez à nouveau la clé dans **Settings → Metadata → SteamGridDB API key** : Heroic a peut-être chiffré la clé importée.

**À lire ensuite :** [téléchargez Heronite](/fr/download/), puis consultez [Boutiques et lanceurs](/fr/docs/stores-and-launchers/).
