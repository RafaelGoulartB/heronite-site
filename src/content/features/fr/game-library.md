---
title: "Gérez votre bibliothèque de jeux sur Linux | Heronite"
description: "Gérez tous vos jeux PC dans une bibliothèque sur Linux et Windows. Regroupez, filtrez, recherchez et modifiez vos jeux Steam, Epic, GOG et émulés."
eyebrow: Bibliothèque de jeux
headline: "Une bibliothèque de jeux pour Linux et Windows"
lead: "Heronite est un lanceur et gestionnaire de bibliothèque pour Linux et Windows. Sa Collection réunit boutiques, émulateurs et jeux indépendants en un seul endroit."
navLabel: Bibliothèque de jeux
summary: "Une Collection pour toutes les boutiques, émulateurs et jeux indépendants, avec vues, groupes, modifications groupées et palette de commandes."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Collection d’Heronite : jaquettes regroupées dans Playing et On Going avec temps de jeu, et ELDEN RING ouvert avec sa jaquette, le bouton Play, les détails et l’historique des sessions."
og: /og/fr/game-library.jpg
updated: 2026-11-04
highlights:
  - title: Regroupez à votre façon
    text: Par statut, boutique, genre ou série, en liste ou en grille.
  - title: Vues enregistrées
    text: Conservez filtres et tri dans des vues comme Playing now, Backlog ou Finished.
  - title: Retrouvez tout rapidement
    text: La recherche tolère les fautes ; Ctrl+K ouvre un jeu, une page ou une action.
  - title: Un journal pour chaque jeu
    text: Prenez des notes dans le même historique que vos sessions de jeu.
faq:
  - q: Puis-je utiliser Heronite sur Steam Deck ?
    a: Oui. Heronite fonctionne en AppImage sur SteamOS. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: L’import depuis Heroic ou Lutris modifie-t-il leurs fichiers ?
    a: Non. Heronite lit uniquement leurs fichiers, sans jamais y écrire.
  - q: Heronite trouve-t-il les jaquettes des jeux émulés ?
    a: Oui. Chaque jeu ajouté depuis un dossier de ROM reçoit une illustration. Une clé SteamGridDB gratuite ajoute des jaquettes communautaires.
  - q: Puis-je annuler une modification groupée ?
    a: Oui. Appuyez sur Ctrl+Z pour annuler la dernière modification.
related:
  - /features/stores/
  - /features/play-time-tracking/
  - /docs/getting-started/
---

## Comment réunir tous mes jeux dans une Collection ?

- **Steam :** Heronite lit vos bibliothèques [Steam](/fr/features/stores/) sans connexion.
- **Epic Games, GOG et Amazon Games :** connectez-vous sur la page **Stores** ; Heronite ajoute toute votre bibliothèque, jeux installés ou non.
- **Battle.net, EA app, Ubisoft Connect et Rockstar Games :** les jeux installés dans chaque boutique apparaissent. Sur Linux, la boutique fonctionne dans son propre préfixe Wine (un dossier Windows séparé).
- **Microsoft Store et PC Game Pass (Windows) :** Heronite ajoute les jeux installés par l’application Xbox, sans connexion.
- **Émulateurs :** Heronite [les détecte](/fr/features/emulation/) et analyse vos dossiers de ROM.
- **Autres lanceurs :** jeux Heroic, Lutris, Bottles et Faugus sur Linux et Playnite sur Windows, importés et synchronisés.

## Comment ajouter un jeu qui ne vient pas d’une boutique ?

Appuyez sur <kbd>Ctrl</kbd> <kbd>N</kbd> (ou **Add a game**) pour ajouter :

- Un programme Windows (`.exe`), lancé via [Wine ou Proton](/fr/features/wine-and-proton/) sur Linux
- Un programme Linux natif, une AppImage ou un script de lancement
- Un jeu de navigateur, avec son adresse web
- Une ROM ou un dossier de ROM complet

Pour ajouter plusieurs jeux à la fois, choisissez **Add from folder** dans le menu ☰.

![La fenêtre Add game : titre, illustration carrée et arrière-plan, plateforme, préfixe Wine, version de Proton et programme à lancer.](../../../assets/screenshots/add-game.webp)

*Ajout d’un jeu Windows sur Linux.*

## Comment regrouper, filtrer et trier mes jeux ?

**Focus** est une liste avec un panneau de détails : jaquette, captures d’écran, description et historique des sessions. La **grille** affiche uniquement les jaquettes.

Dans les deux dispositions, regroupez les jeux par :

- Statut, comme Playing, On going, Plan to play ou Finished
- Boutique
- Genre
- Série
- Année de sortie ou autre champ

Enregistrez filtres et tri comme **vues**, par exemple *Playing now*, *Backlog*, *Finished* ou *Favourites*.

## Comment rechercher dans la Collection ?

Commencez à saisir du texte n’importe où dans la Collection. La recherche tolère les petites fautes ; <kbd>Entrée</kbd> lance ou installe le premier résultat.

La **palette de commandes** (<kbd>Ctrl</kbd> <kbd>K</kbd>) ouvre toute page, exécute toute action et lance tout jeu à partir d’une partie de son nom. Appuyez sur <kbd>→</kbd> sur un jeu pour accéder à ses actions, comme ouvrir ses réglages ou son dossier d’installation.

![La palette de commandes recherche « contr » : Control et d’autres jeux correspondants, avec les actions pour lancer Control, ouvrir ses réglages ou son dossier.](../../../assets/screenshots/command-palette.webp)

*Recherche de « contr » dans la palette de commandes.*

## Comment modifier plusieurs jeux à la fois ?

1. Sélectionnez les jeux avec <kbd>Espace</kbd>, <kbd>Maj</kbd> et les flèches, ou <kbd>Ctrl</kbd> <kbd>A</kbd>.
2. Appuyez sur <kbd>F3</kbd>.
3. Modifiez leur statut, genres, séries, entreprises et autres champs.

<kbd>Ctrl</kbd> <kbd>Z</kbd> annule la modification. Vous pouvez renommer et fusionner genres, entreprises et séries pour réunir, par exemple, *RPG* et *Role-playing (RPG)*.

## D’où viennent les jaquettes et les informations des jeux ?

Jaquettes, arrière-plans et logos proviennent des boutiques et des métadonnées Steam et Lutris, tout comme descriptions et dates de sortie. Deux clés gratuites facultatives ajoutent du contenu :

- [SteamGridDB](https://www.steamgriddb.com) pour les jaquettes communautaires, utiles aux jeux émulés et sans DRM
- [IGDB](https://www.igdb.com) pour les descriptions, genres et séries

Chaque jeu affiche les durées **How Long To Beat**, les notes **ProtonDB** sur Linux, l’**état de l’antitriche** d’Are We Anti-Cheat Yet? et les **succès** Steam et RetroAchievements. Ajoutez les clés dans **Settings → Metadata** ; voir [Métadonnées et illustrations](/fr/docs/metadata-and-art/).

## Puis-je prendre des notes sur un jeu ?

Oui. Chaque jeu dispose d’un **journal**, pour noter où vous en étiez ou votre avis sur une fin. Il partage un historique avec vos [sessions de jeu](/fr/features/play-time-tracking/) et vos captures d’écran.
