---
title: "Sauvegardes de jeux PC avec Ludusavi | Heronite"
description: "Copiez automatiquement vos sauvegardes après chaque session avec Ludusavi et restaurez-les depuis le jeu. Copies planifiées de la Collection et carte du disque."
eyebrow: Sauvegardes et copies de sécurité
headline: "Vos sauvegardes protégées avec Ludusavi après chaque session"
lead: "Heronite est une interface Ludusavi pour Linux et Windows. Il restaure les sauvegardes depuis la page du jeu et copie toute votre Collection selon un calendrier."
navLabel: Sauvegardes
summary: "Copies automatiques avec Ludusavi, sauvegardes cloud Epic et GOG, bibliothèque sur plusieurs PC, copies planifiées et carte d’utilisation du disque."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "Réglages Backups d’Heronite : dossier, fréquence hebdomadaire, nombre de copies conservées, bouton Back up now, éléments à inclure et copies précédentes à restaurer."
og: /og/fr/saves-and-backups.jpg
updated: 2026-11-04
highlights:
  - title: Annulez une restauration
    text: Heronite conserve les fichiers remplacés ; Undo les remet en place.
  - title: Verrouillez une copie
    text: Nommez et verrouillez une copie de sauvegarde pour qu’Heronite ne la supprime jamais.
  - title: Copies planifiées
    text: Copiez votre Collection chaque jour, semaine ou mois ; Heronite conserve les 10 plus récentes.
  - title: Retrouvez l’espace occupé
    text: Storage affiche l’usage du disque, une carte des jeux et les éléments à nettoyer.
faq:
  - q: Puis-je restaurer sur Linux une sauvegarde créée sur Windows ?
    a: Oui. Heronite la restaure dans le préfixe Wine actuel du jeu, même si elle vient de Windows ou d’une autre bibliothèque Steam.
  - q: Ludusavi est-il gratuit ?
    a: Oui. Ludusavi est un programme gratuit séparé, à installer une seule fois.
  - q: Où conserver mes copies de sauvegarde ?
    a: Hors du dossier de données d’Heronite, sur un autre disque ou dans un dossier synchronisé. Choisissez les dossiers dans **Settings → Saves** et **Settings → Backups**. **Settings → Cloud** peut aussi les envoyer vers un compte cloud.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

[Ludusavi](https://github.com/mtkennerly/ludusavi) est un programme gratuit qui connaît l’emplacement des sauvegardes de milliers de jeux : dossier Windows, Steam ou préfixe Wine (un dossier Windows séparé pour le jeu). Installez-le une fois ; Heronite copie les sauvegardes après chaque session.

## Comment installer Ludusavi pour Heronite ?

1. Installez Ludusavi depuis [ses versions](https://github.com/mtkennerly/ludusavi/releases/latest), votre distribution, winget ou Scoop.
2. Dans **Settings → Saves**, choisissez le dossier des copies et le nombre de copies complètes à conserver par jeu.

Sur Linux, Heronite cherche Ludusavi sur `PATH`, dans `/usr/bin`, `/usr/local/bin` et `~/.local/bin`. Ludusavi met à jour sa liste de jeux une fois par jour. Voir [Copies de sécurité et sauvegardes](/fr/docs/backups-and-saves/).

## Comment restaurer une sauvegarde de jeu ?

1. Fermez le jeu.
2. Ouvrez sa page et l’onglet **Saves**, qui répertorie ses copies.
3. Choisissez une copie et appuyez sur **Restore…**.
4. Choisissez les fichiers dans **Files to restore**, puis appuyez sur **Restore *n* files**.

En **mode console**, utilisez la ligne **Back up saves (Ludusavi)** de la page du jeu.

- Heronite conserve une copie des fichiers remplacés ; **Undo** les remet en place.
- Nommez une copie, par exemple « Avant le boss final », et **verrouillez-la** pour qu’Heronite ne la supprime jamais.
- Les jeux émulés peuvent reprendre depuis des [états de sauvegarde](/fr/features/emulation/).

## Heronite synchronise-t-il les sauvegardes cloud Epic et GOG ?

Oui, en bêta, sur Linux et Windows. Ouvrez **Game settings → Cloud saves** et appuyez sur **Sync**, ou activez **Sync automatically** pour synchroniser au lancement et à la fermeture du jeu. Faites une copie de vos sauvegardes avant la première synchronisation.

## Comment planifier les copies de toute ma Collection ?

1. Ouvrez **Settings → Backups**.
2. Choisissez un dossier de destination.
3. Choisissez **daily**, **weekly**, **monthly**, ou uniquement à l’appui sur **Back up now**.

Une copie protège vos statuts, notes, journal et [historique de jeu](/fr/features/play-time-tracking/). Heronite conserve par défaut les 10 copies les plus récentes.

Chaque copie est un dossier daté que vous pouvez parcourir. Les fichiers inchangés sont partagés avec la copie précédente : seule la partie modifiée prend de l’espace supplémentaire. Les copies planifiées s’exécutent quand Heronite est ouvert, jamais pendant une partie.

### Que contient une copie ?

| Partie | Contenu |
|---|---|
| Collection (toujours) | Jeux, sessions, statuts, journal et réglages par jeu |
| Settings | Apparence, thèmes du mode console et autres réglages |
| Art | Jaquettes et illustrations choisies |
| Logins | Connexions aux boutiques |

Les jeux installés, versions de Wine et Proton, caches et journaux techniques sont exclus : vous pouvez les télécharger à nouveau.

### Comment restaurer une copie de la Collection ?

1. Dans **Settings → Backups**, choisissez une copie pour voir son contenu.
2. Choisissez les parties à remettre en place.
3. Appuyez sur **Restore…**, puis **Restore and restart**.

Heronite copie d’abord l’état actuel pour permettre un retour en arrière. Voir [Fichiers et dossiers](/fr/docs/files-and-folders/).

## Puis-je garder la même bibliothèque sur plusieurs PC ?

Oui. **Settings → Cloud** synchronise statuts, favoris, notes, temps de jeu et sessions entre PC, par exemple entre Linux et Windows en double démarrage. Il utilise un dossier partagé ou un compte cloud comme Google Drive, Dropbox ou OneDrive.

Le même emplacement peut accueillir les copies Heronite, les sauvegardes Ludusavi et les captures. Voir [Synchronisation entre PC](/fr/docs/sync-between-pcs/).

## Où est passé mon espace disque ?

**Settings → Storage** affiche l’espace occupé par vos jeux sur chaque disque : jeux, préfixes Wine, Proton et environnements d’exécution, caches. Une **carte proportionnelle** représente chaque jeu installé par un bloc dont la taille reflète son espace disque. Triez par taille ou date de dernière partie.

![Réglages Storage d’Heronite : barres d’utilisation de deux disques, carte Free up space avec caches sélectionnés et carte proportionnelle des jeux installés.](../../../assets/screenshots/storage.webp)

*Les réglages Storage, avec la carte Free up space.*

**Free up space** liste les éléments supprimables, comme les caches et shaders compilés. Sur Linux, il détecte les préfixes Wine et versions de Proton inutilisés et les restes Steam de jeux désinstallés. Heronite met les préfixes et dossiers résiduels à la corbeille et refuse de supprimer les dossiers utilisés par un autre jeu.

## Comment gérer les captures et leur espace disque ?

Les captures sont placées dans le dossier choisi dans **Settings → Screenshots**, qui affiche leur taille. Une option compresse les PNG en WebP sans perte, conservant chaque pixel pour environ moitié moins d’espace. La compression s’interrompt pendant les parties.

![Réglages Screenshots d’Heronite : dossier et espace occupé, compression sans perte, raccourci de capture en jeu et capture à la manette.](../../../assets/screenshots/screenshots.webp)

*Les réglages Screenshots.*

Appuyez sur <kbd>F10</kbd> en jouant ; changez la touche dans ces mêmes réglages. À la manette, l’[interface en jeu](/fr/features/console-mode/) prend une capture avec Guide + RB. Heronite l’associe au jeu pour l’afficher dans vos [statistiques](/fr/features/play-time-tracking/) et votre journal.

Pour commencer : [téléchargez Heronite](/fr/download/).
