---
title: "Jaquettes et métadonnées : clés SteamGridDB et IGDB"
navLabel: "Métadonnées et illustrations"
description: "D’où viennent les jaquettes et informations d’Heronite, comment ajouter les clés SteamGridDB et IGDB et afficher les succès Steam et RetroAchievements."
section: Guides
order: 5
updated: 2026-11-04
---

Heronite complète jaquettes, illustrations et détails sans configuration. Deux clés facultatives, SteamGridDB et IGDB, améliorent les résultats.

## Quelles sources ne nécessitent aucune configuration ?

- **Steam et boutiques :** jaquettes, illustrations et détails de leurs jeux
- **Lutris :** métadonnées
- **[How Long To Beat](https://howlongtobeat.com) :** durée pour terminer un jeu
- **[ProtonDB](https://www.protondb.com)** (Linux) : compatibilité des jeux Windows, correspondance par titre pour les jeux non-Steam
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux) : état antitriche
- **Vos captures**, le web ou un fichier image : illustrations pour tout jeu

## Ajouter les clés SteamGridDB et IGDB

### Obtenir une clé SteamGridDB

[SteamGridDB](https://www.steamgriddb.com) propose jaquettes, bannières et logos communautaires, utiles hors Steam et pour l’émulation.

1. Connectez-vous à SteamGridDB.
2. Ouvrez [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) et générez une clé.
3. Collez-la dans **SteamGridDB API key**, sous **Settings → Metadata**.

Si les jaquettes ne chargent pas après import depuis Heroic, recollez la clé : Heroic l’a peut-être chiffrée.

### Obtenir une clé IGDB

[IGDB](https://www.igdb.com) fournit descriptions, genres, entreprises, séries et dates de sortie. Un compte développeur Twitch est requis :

1. Dans la [console Twitch](https://dev.twitch.tv/console), enregistrez une application (nom libre, redirection OAuth `http://localhost`, catégorie « Application Integration »).
2. Copiez **Client ID** et créez **Client Secret**.
3. Collez-les dans **Twitch / IGDB Client ID** et **Twitch / IGDB Client Secret**, sous **Settings → Metadata**.
4. Appuyez sur **Test IGDB**.

## Afficher les succès Steam et RetroAchievements

Réglez les deux dans **Settings → Achievements** :

- **Steam :** pas de clé pour les jeux joués sur ce PC. Pour les autres, ajoutez **Steam Web API key (optional)** depuis [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) ; les détails de jeux du profil Steam doivent être publics.
- **[RetroAchievements](https://retroachievements.org) :** connectez votre compte pour les jeux émulés.

Ces comptes sont stockés dans le [dossier de données](/fr/docs/files-and-folders/).

## Modifier le nom, les illustrations et les détails d’un jeu

Sélectionnez un jeu et appuyez sur <kbd>F3</kbd> pour modifier nom, illustrations, genres, entreprises, séries, etc. Sélectionnez plusieurs jeux pour les modifier ensemble ; <kbd>Ctrl</kbd> <kbd>Z</kbd> annule. Genres, entreprises et séries peuvent être renommés et fusionnés dans toute la bibliothèque.
