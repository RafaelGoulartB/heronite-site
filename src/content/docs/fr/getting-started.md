---
title: "Premiers pas : configurez votre bibliothèque Heronite"
navLabel: "Premiers pas"
description: "Configurez votre bibliothèque sur Linux ou Windows : connexion à Epic, GOG et Amazon, ajout de jeux, raccourcis, organisation et lancement des parties."
section: Start
order: 2
updated: 2026-11-04
---

Heronite construit votre bibliothèque depuis Steam, les émulateurs et les boutiques auxquelles vous vous connectez. Commencez par [installer Heronite](/fr/docs/installation/) sur Linux ou Windows.

Les noms des boutons et réglages ci-dessous sont ceux de l’interface anglaise : l’application ne dispose pas encore de traduction française.

## Ce qu’Heronite détecte au premier lancement

Si la bibliothèque est vide, Heronite ajoute :

- **Steam :** vos jeux installés, sans connexion.
- **Émulateurs et ROM :** émulateurs détectés et ROM des dossiers courants comme `~/ROMs` ou `~/Emulation/roms`. Voir [Émulation](/fr/docs/emulation/).

Sur Linux, la bibliothèque vide affiche **Bring in from another launcher** si elle détecte des jeux Heroic, Lutris, Bottles ou Faugus. Choisissez un lanceur pour importer et synchroniser ses jeux.

Sur Windows, Heronite détecte les jeux Microsoft Store et PC Game Pass installés par Xbox, sans connexion.

## Se connecter à Epic Games, GOG ou Amazon Games

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **Epic Games**, **GOG** ou **Amazon Games**.
3. Appuyez sur **Log in**.
4. Connectez-vous sur la page de la boutique dans la fenêtre ouverte.

Si elle ne s’ouvre pas, utilisez **Or log in with your browser** et collez le code obtenu. Voir [Boutiques et lanceurs](/fr/docs/stores-and-launchers/).

Sur Windows, Heronite reprend aussi les jeux installés par Epic Games Launcher, GOG Galaxy ou Amazon Games, sans les télécharger à nouveau.

## Ajouter d’autres jeux à votre bibliothèque

Appuyez sur <kbd>Ctrl</kbd> <kbd>N</kbd> ou **Add a game** pour ajouter :

- Un programme Windows (`.exe`), lancé via Wine ou Proton sur Linux
- Un programme Linux natif, une AppImage ou un script
- Un jeu de navigateur (adresse web)
- Une ROM ou un dossier de ROM complet

Pour tous les jeux d’un dossier, choisissez **Add from folder** dans le menu ☰.

## Ouvrir une page avec un raccourci

| Page | Raccourci |
|---|---|
| Collection | <kbd>Ctrl</kbd> <kbd>1</kbd> |
| Downloads | <kbd>Ctrl</kbd> <kbd>2</kbd> |
| Wine Manager (Linux) | <kbd>Ctrl</kbd> <kbd>3</kbd> |
| Stores | <kbd>Ctrl</kbd> <kbd>4</kbd> |
| Emulators | <kbd>Ctrl</kbd> <kbd>5</kbd> |
| Statistics | <kbd>Ctrl</kbd> <kbd>6</kbd> |
| Settings | <kbd>Ctrl</kbd> <kbd>,</kbd> |

La **palette de commandes** (<kbd>Ctrl</kbd> <kbd>K</kbd>) ouvre une page, exécute une action ou lance un jeu à partir de son nom. <kbd>?</kbd> affiche les raccourcis ; voir [Raccourcis clavier](/fr/docs/keyboard-shortcuts/).

## Organiser votre bibliothèque

- Passez de **Focus** (liste avec détails) à une **grille** de jaquettes.
- **Regroupez** par statut, boutique, genre, série, année, etc.
- Enregistrez des **vues** avec filtres et tri (Playing now, Backlog, Finished, Favourites).
- Sélectionnez plusieurs jeux (<kbd>Espace</kbd>, <kbd>Maj</kbd> avec flèches, <kbd>Ctrl</kbd> <kbd>A</kbd>) puis <kbd>F3</kbd> pour modifier séries et étiquettes ensemble. <kbd>Ctrl</kbd> <kbd>Z</kbd> annule.

## Jouer et prendre des captures d’écran

1. Sélectionnez un jeu et appuyez sur <kbd>Entrée</kbd>. Heronite l’installe d’abord si nécessaire.
2. <kbd>F10</kbd> prend une capture pendant la partie.
3. Ouvrez **Statistics** (<kbd>Ctrl</kbd> <kbd>6</kbd>) pour voir les sessions enregistrées et les captures associées.

## Utiliser une manette (mode console)

Activez le [mode console](/fr/docs/console-mode/) dans la palette ou le menu ☰, ou lancez avec `--console`. Pour l’ouvrir au démarrage ou à la connexion d’une manette, utilisez **Settings → Console mode**.
