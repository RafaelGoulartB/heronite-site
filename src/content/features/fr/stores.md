---
title: "Un lanceur pour toutes vos boutiques sur Linux | Heronite"
description: "Un lanceur pour toutes vos boutiques sur Linux et Windows : Steam sans connexion, Epic, GOG et Amazon réunis, avec import depuis Heroic et Lutris."
eyebrow: Boutiques et lanceurs
headline: "Un lanceur pour toutes vos boutiques"
lead: "Steam, Epic, GOG, Amazon, Battle.net, EA, Ubisoft et Rockstar dans une bibliothèque sur Linux et Windows. Et les jeux Microsoft Store et PC Game Pass sur Windows."
navLabel: Boutiques et lanceurs
summary: "Steam, Epic, GOG, Amazon, Battle.net, EA app, Ubisoft Connect et Rockstar réunis, les jeux Xbox sur Windows et l’import depuis d’autres lanceurs."
order: 2
hero: ../../../assets/screenshots/console-library.webp
heroAlt: "La bibliothèque du mode console d’Heronite : une grille de jaquettes, d’A Plague Tale, Alan Wake et Baldur’s Gate 3 à Black Myth: Wukong, avec les filtres Show, Sort et Status et 207 jeux."
og: /og/fr/stores.jpg
updated: 2026-11-04
highlights:
  - title: Steam sans connexion
    text: Heronite lit l’installation classique, Flatpak ou Snap de Steam ; Steam lance toujours ses jeux.
  - title: Vos identifiants restent sur votre PC
    text: Vos identifiants de connexion ne sont transmis qu’aux boutiques.
  - title: Les boutiques dans Wine sur Linux
    text: Chaque boutique dispose de son préfixe Wine ; sur Windows, elle fonctionne sans Wine.
  - title: Import depuis d’autres lanceurs
    text: Les jeux Heroic, Lutris, Bottles, Faugus et Playnite restent synchronisés.
faq:
  - q: Puis-je utiliser Epic Games et GOG dans un seul lanceur ?
    a: Oui. Connectez-vous à chaque boutique sur la page **Stores** ; une file de téléchargement gère les deux. Voir [Epic sur Linux](/guides/epic-games-on-linux/) et [GOG sur Linux](/guides/gog-on-linux/).
  - q: Heronite fonctionne-t-il sur Steam Deck ?
    a: Oui, en AppImage dans le mode Bureau de SteamOS et comme jeu non-Steam en mode Jeu. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: Heronite est-il gratuit ?
    a: Oui. Heronite est gratuit et open source sous licence GPL-3.0, sans compte, publicité ni télémétrie.
related:
  - /features/game-library/
  - /guides/epic-games-on-linux/
  - /compare/heroic/
---

## Quelles boutiques Heronite prend-il en charge ?

| Boutique ou lanceur | Linux | Windows | Fonctionnement |
|---|---|---|---|
| Steam | Oui | Oui | Sans connexion ; Heronite lit vos bibliothèques |
| Epic Games | Oui | Oui | Connexion ; Heronite installe les jeux |
| GOG | Oui | Oui | Connexion ; Heronite installe les jeux |
| Amazon Games | Oui | Oui | Connexion ; Heronite installe les jeux |
| Battle.net | Oui | Oui | Connexion ; l’application de la boutique installe les jeux |
| EA app | Oui | Oui | Connexion ; l’application de la boutique installe les jeux |
| Ubisoft Connect | Oui | Oui | Connexion ; l’application de la boutique installe les jeux |
| Rockstar Games | Oui | Oui | Connexion ; l’application de la boutique installe les jeux |
| Microsoft Store et PC Game Pass | Non | Oui | Sans connexion ; Heronite lit les jeux de l’application Xbox |

Vos [jeux émulés](/fr/features/emulation/) partagent la même [bibliothèque](/fr/features/game-library/). Pour un jeu qui ne vient pas d’une boutique, voir [Ajouter d’autres jeux à votre bibliothèque](/fr/docs/getting-started/#ajouter-dautres-jeux-à-votre-bibliothèque).

## Comment me connecter à Epic, GOG et Amazon ?

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **Epic Games**, **GOG** ou **Amazon Games**.
3. Appuyez sur **Log in**.
4. Connectez-vous sur la page de la boutique dans la fenêtre qui s’ouvre.

Si la fenêtre ne s’ouvre pas, utilisez **Or log in with your browser** sur la même page et collez le code obtenu. Les étapes détaillées : [Epic Games](/fr/guides/epic-games-on-linux/), [GOG](/fr/guides/gog-on-linux/) et [Amazon Games](/fr/guides/amazon-games-on-linux/).

Sur Windows, Heronite ajoute aussi les jeux déjà installés par Epic Games Launcher, GOG Galaxy ou Amazon Games. Aucun nouveau téléchargement n’est nécessaire.

Heronite télécharge les outils open source utilisés par Heroic : [legendary](https://github.com/derrod/legendary) pour Epic, [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) pour GOG et [nile](https://github.com/imLinguin/nile) pour Amazon.

## Comment Heronite télécharge-t-il et met-il à jour les jeux ?

Appuyez sur **Install** sur un jeu. Une file de téléchargement unique installe, met à jour, répare, déplace, importe et désinstalle vos jeux Epic, GOG et Amazon. Heronite met les téléchargements en pause hors ligne, réessaie ceux qui échouent et recherche les mises à jour toutes les 3 heures.

## Dois-je me connecter à Steam ?

Non. Heronite lit vos bibliothèques Steam et les garde synchronisées. Sur Linux, il détecte les installations classique, Flatpak et Snap. Sur Windows, il lit l’emplacement de Steam dans le registre ; vous pouvez aussi [lancer un trainer avec un jeu Steam](/fr/docs/stores-and-launchers/#lancer-un-trainer-avec-un-jeu-steam-windows).

![Une page de jeu dans la Collection d’Heronite avec Steam dans la ligne Library, le statut Playing et un bouton Play près de la jaquette.](../../../assets/screenshots/collection.webp)

*La page d’un jeu Steam, à côté des jeux d’autres boutiques.*

## Puis-je lancer les jeux Battle.net, EA, Ubisoft et Rockstar ?

Oui, sur Linux et Windows. Connectez-vous et installez les jeux dans l’application de la boutique. Heronite les répertorie, les lance via cette application et comptabilise leur temps de jeu.

Sur Linux, Heronite installe chaque boutique dans son propre préfixe Wine (un dossier Windows séparé) sous `~/Games/Heronite/Prefixes/<store>`. Il la lance avec [Wine et Proton](/fr/features/wine-and-proton/). Les étapes détaillées : [Battle.net](/fr/guides/battle-net-on-linux/) et [EA app, Ubisoft Connect et Rockstar](/fr/guides/ea-app-ubisoft-rockstar-on-linux/).

Sur Windows, la boutique fonctionne directement, sans Wine. Appuyez sur son bouton **Set up**, par exemple **Set up Battle.net**, pour télécharger et lancer le programme d’installation officiel.

## Comment ajouter les jeux Microsoft Store et PC Game Pass ?

Sur Windows, Heronite détecte les jeux installés par l’application Xbox ou Microsoft Store, y compris PC Game Pass. Aucune connexion nécessaire. L’application Xbox continue de les installer, mettre à jour et désinstaller.

**Stores → Xbox** indique si Heronite a trouvé l’application Xbox et affiche ses jeux. Après avoir installé un jeu, appuyez sur **Read games now**.

## Puis-je importer les jeux Heroic, Lutris, Bottles, Faugus ou Playnite ?

Oui. Activez un lanceur dans **Settings → Other launchers**. Heronite ne modifie jamais les fichiers d’un autre lanceur. Au premier démarrage, il copie une seule fois les connexions, réglages et jeux ajoutés manuellement dans Heroic.

| Lanceur | Ce qu’Heronite importe |
|---|---|
| Heroic (Linux) | Jeux ajoutés manuellement et jeux Epic, GOG et Amazon installés |
| Lutris (Linux) | Jeux de sa bibliothèque |
| Bottles (Linux) | Programmes de chaque bouteille |
| Faugus (Linux) | Jeux de sa liste |
| Playnite (Windows) | Jeux installés et non masqués, avec jaquettes et temps de jeu |

Chaque lanceur Linux peut être une installation classique ou Flatpak. Les jeux Playnite passent toujours par Playnite. Heronite ignore les jeux Steam de ces lanceurs, déjà couverts par l’import Steam. Pour changer de lanceur, voir les comparatifs [Heroic](/fr/compare/heroic/), [Lutris](/fr/compare/lutris/) et [Playnite](/fr/compare/playnite/).

Pour commencer : [téléchargez Heronite](/fr/download/) et ajoutez votre première boutique.
