---
title: "Copier votre Collection et vos sauvegardes avec Ludusavi"
navLabel: "Copies de sécurité et sauvegardes"
description: "Planifiez les copies de la Collection Heronite, protégez vos sauvegardes avec Ludusavi, synchronisez Epic et GOG et gardez une bibliothèque sur plusieurs PC."
section: Guides
order: 6
updated: 2026-11-04
---

## Copier la Collection

1. Ouvrez **Settings → Backups**.
2. Choisissez un dossier hors du dossier de données d’Heronite, idéalement sur un autre disque ou dans un dossier synchronisé.
3. Choisissez **Once a day**, **Once a week**, **Once a month** ou **Only when I click Back up now**.

Heronite conserve par défaut les 10 copies les plus récentes. Une copie peut contenir :

| Partie | Contenu |
|---|---|
| Collection (toujours) | Jeux, sessions, statuts, journal et réglages par jeu |
| Settings | Apparence, thèmes du mode console et autres réglages |
| Art | Jaquettes et illustrations choisies |
| Logins | Connexions aux boutiques |

Versions de Wine et Proton, caches et journaux sont exclus, car téléchargeables à nouveau.

## Restaurer une copie

1. Dans **Settings → Backups**, choisissez une copie pour voir son contenu.
2. Choisissez tout ou certaines parties.
3. Choisissez **Restore and restart**.

Heronite copie d’abord l’état actuel, puis redémarre avec les données restaurées.

## Copier les sauvegardes de jeu avec Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) connaît l’emplacement des sauvegardes de milliers de jeux. Une fois installé, Heronite les copie après chaque session et permet leur restauration depuis la page du jeu, y compris en mode console. Les états de sauvegarde émulés sont distincts : voir [Émulation](/fr/docs/emulation/#reprendre-un-jeu-depuis-un-état-de-sauvegarde).

Installez Ludusavi depuis [ses versions](https://github.com/mtkennerly/ludusavi/releases/latest), votre distribution, winget ou Scoop. Sur Linux, Heronite le cherche sur `PATH`, dans `/usr/bin`, `/usr/local/bin` et `~/.local/bin` ; le Flatpak n’est pas encore détecté. Réglez le dossier des copies dans **Settings → Saves**.

## Synchroniser les sauvegardes cloud Epic et GOG

1. Ouvrez **Game settings**, puis **Cloud saves**.
2. Vérifiez le dossier **Location**, détecté pour la plupart des jeux.
3. Sous **Sync now**, choisissez **Sync (download and upload)**, **Force Download** ou **Force Upload**, puis **Sync**.
4. Activez **Sync automatically** pour synchroniser au lancement et à la fermeture.

Cette fonction est en bêta : copiez vos sauvegardes avant synchronisation. Elle fonctionne sur Linux et Windows.

## Envoyer les copies dans le cloud

**Settings → Cloud** envoie **Heronite backups**, **Game saves (Ludusavi)** et **Screenshots** vers un compte cloud, un serveur ou un dossier partagé. Chaque élément peut être **Automatic**, **Manual** ou **Off**. Aucun envoi automatique pendant une partie.

Le même emplacement synchronise votre bibliothèque : voir [Synchronisation entre PC](/fr/docs/sync-between-pcs/).

## Configurer un nouveau PC depuis le cloud

1. Dans **Settings → Cloud**, connectez le même compte ou dossier.
2. Dans **Settings → Backups**, choisissez un dossier. Pour les sauvegardes de jeu, installez Ludusavi et réglez son dossier dans **Settings → Saves**.
3. Sous **Restore from the cloud**, appuyez sur **See what is in the cloud**, puis **Restore everything**.
4. Confirmez. Heronite redémarre avec votre bibliothèque ; la [synchronisation entre PC](/fr/docs/sync-between-pcs/) la garde à jour.

Les sauvegardes arrivent dans le dossier de copies Ludusavi. Restaurez chaque jeu depuis son onglet **Saves**.
