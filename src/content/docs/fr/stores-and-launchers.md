---
title: "Boutiques et lanceurs : Steam, Epic, GOG et autres"
navLabel: "Boutiques et lanceurs"
description: "Comment Heronite gère Steam, Epic Games, GOG, Amazon, Battle.net, EA app, Ubisoft, Rockstar, Microsoft Store, Heroic, Lutris et Playnite."
section: Guides
order: 1
updated: 2026-11-04
---

Heronite réunit les jeux Steam, Epic Games, GOG, Amazon Games, applications de boutique et autres lanceurs dans une bibliothèque.

## Ajouter vos jeux Steam

Sans connexion. Heronite lit et synchronise vos bibliothèques ; Steam lance ses jeux.

- **Linux :** `~/.steam/steam`, `~/.local/share/Steam`, Flatpak (`~/.var/app/com.valvesoftware.Steam/.local/share/Steam`) et Snap (`~/snap/steam/common/.local/share/Steam`).
- **Windows :** emplacement trouvé dans le registre ou `C:\Program Files (x86)\Steam`.

### Lancer un trainer avec un jeu Steam (Windows)

1. Ouvrez **Game settings → Launch** sur le jeu.
2. Sous **Programs alongside the game**, appuyez sur **Add program** et choisissez le trainer.
3. Lancez le jeu depuis Heronite.

Heronite ferme le trainer à la fin. **Scripts**, dans le même onglet, s’exécute avant et après le jeu. Un jeu lancé directement depuis Steam ne bénéficie d’aucun des deux.

## Se connecter à Epic Games, GOG et Amazon Games

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **Epic Games**, **GOG** ou **Amazon Games**.
3. Appuyez sur **Log in**. Une petite fenêtre affiche la page de la boutique (WebKitGTK sur Linux, WebView2 sur Windows).
4. Connectez-vous.

Si elle ne s’ouvre pas, utilisez **Or log in with your browser** :

1. **Open in browser**, puis connectez-vous.
2. Copiez l’adresse ou le code final.
3. Collez sous **2. Paste the code** et appuyez sur **Log in**.

**Téléchargements.** Une file unique installe, met à jour, répare, déplace, importe et désinstalle les jeux. Elle se met en pause hors ligne, réessaie les échecs et vérifie les mises à jour toutes les 3 heures.

**Outils.** Heronite télécharge les mêmes outils open source que Heroic :

| Boutique | Outil |
|---|---|
| Epic Games | [legendary](https://github.com/derrod/legendary) |
| GOG | [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) |
| Amazon Games | [nile](https://github.com/imLinguin/nile) |

**Jeux déjà installés (Windows).** Heronite importe les installations Epic Games Launcher, GOG Galaxy et Amazon Games sans nouveau téléchargement.

## Utiliser Battle.net, EA app, Ubisoft Connect et Rockstar Games

Sur Linux, chaque boutique s’installe dans son préfixe Wine (dossier Windows séparé), `~/Games/Heronite/Prefixes/<store>`. Sur Windows, elle fonctionne directement sans Wine.

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>) et choisissez la boutique.
2. Appuyez sur **Set up** suivi du nom, comme **Set up Battle.net**. Heronite télécharge et lance l’installateur officiel. Sur Linux, l’installation avec votre Proton par défaut prend environ 5 minutes. Windows peut demander une autorisation.
3. **Open** suivi du nom ouvre la boutique pour vous connecter.
4. Installez les jeux dans la boutique : ils apparaissent et se lancent depuis la bibliothèque.

Sur Windows, Heronite utilise l’installation existante de la boutique.

## Ajouter les jeux Microsoft Store et PC Game Pass (Windows)

Heronite détecte les jeux achetés ou PC Game Pass installés par Xbox ou Microsoft Store. Aucune connexion : Xbox gère installation et mises à jour ; Heronite les lance et compte le temps de jeu.

La lecture se fait quelques secondes après le lancement, puis toutes les dix minutes. Utilisez **Read games now** dans **Stores → Xbox**, ou l’actualisation de la Collection, pour la déclencher. Désinstallez ces jeux depuis Xbox.

## Importer Heroic, Lutris, Bottles, Faugus et Playnite

Activez **Bring its games in** dans **Settings → Other launchers** pour synchroniser un lanceur. Sur Linux, les installations classiques et Flatpak sont prises en charge :

| Lanceur | Contenu importé |
|---|---|
| Heroic (Linux) | Jeux ajoutés manuellement et jeux Epic, GOG et Amazon installés |
| Lutris (Linux) | Bibliothèque (`pga.db`) |
| Bottles (Linux) | Programmes de chaque bouteille |
| Faugus (Linux) | Jeux de sa liste |
| Playnite (Windows) | Jeux installés non masqués, jaquettes et temps de jeu |

Fermez Playnite avant l’import : il verrouille sa bibliothèque quand il fonctionne. Les jeux importés continuent de passer par Playnite.

Heronite ignore les jeux Steam déjà importés directement pour éviter les doublons. Il lit uniquement les fichiers des autres lanceurs, qui continuent de fonctionner.

## Ajouter les jeux que vous possédez déjà

<kbd>Ctrl</kbd> <kbd>N</kbd> ajoute un programme ; **Add from folder** dans le menu ☰ ajoute tout un dossier : programmes Windows et, sur Linux, AppImage, scripts et programmes natifs.
