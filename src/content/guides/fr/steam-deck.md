---
title: "Epic, GOG et Amazon Games sur Steam Deck"
description: "Jouez à Epic, GOG et Amazon sur Steam Deck : installez l’AppImage Heronite en mode Bureau, ajoutez-la à Steam avec --console et lancez le mode Jeu."
eyebrow: Guide Steam Deck
headline: "Comment jouer à Epic, GOG et Amazon sur Steam Deck"
lead: "Utilisez Heronite sur Steam Deck pour jouer à vos jeux Epic, GOG et Amazon depuis le mode Jeu, dans une bibliothèque pensée pour la manette."
navLabel: Steam Deck
summary: "Installez l’AppImage en mode Bureau, ajoutez-la à Steam avec --console et accédez aux autres boutiques en mode Jeu."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "Mode console avec ELDEN RING : liste Play, Status, Favourite, Game settings et Full page à la manette, sur le carrousel de jaquettes."
og: /og/fr/steam-deck.jpg
updated: 2026-11-04
highlights:
  - title: Installation en mode Bureau
    text: Téléchargez l’AppImage, rendez-la exécutable et connectez-vous au clavier.
  - title: Ajout à Steam
    text: Ajoutez l’AppImage comme jeu non-Steam avec l’option --console.
  - title: Boutons du Deck
    text: Heronite affiche les images des boutons du Steam Deck.
  - title: Installation sur carte SD
    text: Choisissez tout dossier d’installation, y compris sur carte SD.
faq:
  - q: Heronite fonctionne-t-il sur Steam Deck ?
    a: Oui. Il fonctionne en AppImage sur SteamOS et son mode console est conçu pour les manettes.
  - q: Heronite est-il gratuit ?
    a: Oui. Gratuit et open source sous GPL-3.0, sans compte, publicité ni télémétrie.
  - q: Dois-je revenir en mode Bureau à chaque fois ?
    a: Non. Il sert à installer Heronite, l’ajouter à Steam et connecter vos boutiques. Ensuite, restez en mode Jeu.
  - q: Puis-je ajouter un seul jeu à Steam ?
    a: Oui. **Add to Steam** dans les actions d’un jeu installé crée un raccourci non-Steam qui le lance directement, sans afficher la fenêtre Heronite.
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

Heronite fonctionne sur Steam Deck car SteamOS est Linux. Il n’est pas Steam Deck Verified : la configuration est manuelle.

## Prérequis

- Un Steam Deck avec SteamOS d’origine.
- Clavier et souris pour la configuration, ou écran tactile et clavier virtuel (<kbd>Steam</kbd> <kbd>X</kbd>).
- Des comptes pour les boutiques souhaitées.

## Installer Heronite en mode Bureau

1. Appuyez sur <kbd>Steam</kbd>, ouvrez **Marche/arrêt** et choisissez **Basculer vers le bureau**.
2. Dans le navigateur du bureau, ouvrez la [page de téléchargement](/fr/download/) et récupérez `Heronite-x86_64.AppImage`. Aucun paquet supplémentaire n’est nécessaire sur SteamOS.
3. Déplacez-la dans un dossier accessible en écriture, comme `~/Applications`.
4. Dans le gestionnaire de fichiers, clic droit, **Propriétés**, **Droits d’accès**, puis cochez **Est exécutable**.
5. Lancez l’AppImage.

Ou réalisez les étapes 3 à 5 dans un terminal :

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

Au premier lancement, Heronite ajoute les jeux Steam sans connexion et recherche émulateurs et dossiers de ROM.

## Se connecter à Epic, GOG et Amazon Games

1. Ouvrez **Stores** avec <kbd>Ctrl</kbd> <kbd>4</kbd>.
2. Choisissez **Epic Games**, **GOG** ou **Amazon Games**.
3. Appuyez sur **Log in**.
4. Connectez-vous dans la fenêtre de la boutique. Utilisez un clavier pour le mot de passe.

Les jeux apparaissent dans la bibliothèque. Installez un ou deux jeux depuis le bureau ; vous pouvez choisir la carte SD comme destination.

Guides par boutique : [Epic Games](/fr/guides/epic-games-on-linux/), [GOG](/fr/guides/gog-on-linux/) et [Amazon Games](/fr/guides/amazon-games-on-linux/).

## Ajouter Heronite à Steam

1. Ouvrez Steam en mode Bureau.
2. Choisissez **Ajouter un jeu** en bas à gauche, puis **Ajouter un jeu non-Steam**.
3. Cliquez sur **Parcourir**, affichez tous les fichiers et sélectionnez `Heronite-x86_64.AppImage`.
4. Ajoutez-la, puis faites un clic droit sur **Heronite** dans la bibliothèque et ouvrez **Propriétés**.
5. Dans **Options de lancement**, saisissez :

```
--console
```

`--console` ouvre l’interface à la manette. Ajoutez `--fullscreen` pour le plein écran. Les noms de menus Steam peuvent changer avec les mises à jour. Voir [Ligne de commande et liens](/fr/docs/command-line-and-links/) pour toutes les options.

## Lancer Heronite en mode Jeu

1. Double-cliquez sur **Retour au mode Jeu** sur le bureau.
2. Lancez Heronite depuis les jeux non-Steam de votre bibliothèque.

Heronite ouvre l’accueil console, avec la rangée **Continue playing** des jeux récents. **Library** contient tous les jeux.

![Bibliothèque console : grille de jaquettes, filtres Show, Sort, Status et Search en haut, indications Details, Install et Search en bas.](../../../assets/screenshots/console-library.webp)

*Toutes les boutiques dans une grille, avec les indications de manette.*

| Bouton | Action |
|---|---|
| A | Confirmer |
| B | Revenir |
| X, Y | Actions affichées |
| L1 / R1 | Changer d’onglet |
| Croix, stick gauche | Se déplacer |
| Menu | Ouvrir le menu |

Heronite reconnaît les boutons du Steam Deck. La liste complète est dans [Mode console](/fr/docs/console-mode/).

## Installer et lancer un jeu

1. Ouvrez **Library** avec R1.
2. Choisissez un jeu et appuyez sur X pour l’installer.
3. Appuyez sur A sur un jeu installé pour sa page, puis **Play**.

Pour un raccourci Steam individuel, utilisez **Add to Steam** dans les actions du jeu. Pour ouvrir le mode console sans option, réglez le démarrage ou la connexion de manette dans **Settings → Console mode**. L’interface en jeu (bêta) nécessite Wayland avec layer-shell ; consultez [Mode console](/fr/docs/console-mode/) avant de compter dessus.

## Quels jeux fonctionnent bien sur Steam Deck ?

Tous les jeux Windows ne fonctionnent pas bien avec Proton. Vérifiez ProtonDB et l’antitriche avant installation. Un jeu peut nécessiter une autre version : voir [GE-Proton](/fr/guides/install-ge-proton/).

Certains jeux nécessitent une limite de FPS plus basse pour la batterie et l’écran du Deck. Réglez-la par jeu dans **Game settings**.

## Heronite ne démarre pas ou ne répond pas sur Steam Deck

- **Ne démarre pas :** vérifiez que le fichier est exécutable ; lancez-le dans un terminal pour lire le message.
- **L’AppImage ne se met pas à jour :** elle se remplace elle-même ; son dossier doit être accessible en écriture. Utilisez `~/Applications` ou un autre dossier personnel.
- **Les boutons ne répondent pas :** vérifiez la disposition de manette Steam pour l’entrée Heronite.

Pour les problèmes de connexion et de jeu, voir [Dépannage](/fr/docs/troubleshooting/).
