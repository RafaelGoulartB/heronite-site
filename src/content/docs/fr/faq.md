---
title: "FAQ Heronite : prix, Steam Deck, antitriche et sécurité"
navLabel: "FAQ"
description: "Heronite est-il gratuit ? Réponses sur Steam Deck, antitriche, différences avec Heroic, Lutris et Playnite, sécurité des connexions et version portable."
section: Start
order: 3
updated: 2026-11-04
---

Réponses courtes sur Heronite, lanceur de jeux pour Linux et Windows.

## Heronite est-il gratuit ?

Oui. Open source sous [licence GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE), sans compte, publicité ni télémétrie.

## Sur quels systèmes fonctionne-t-il ?

Linux (toute distribution, x86_64) et Windows 10 et 11 (x86_64). Voir [Installation](/fr/docs/installation/).

## Fonctionne-t-il sur Steam Deck ?

Oui, en AppImage dans le mode Bureau de SteamOS. Pour le mode Jeu, ajoutez-la à Steam comme jeu non-Steam avec `--console`. Le [mode console](/fr/docs/console-mode/) est pensé pour la manette ; voir le [guide Steam Deck](/fr/guides/steam-deck/).

## En quoi diffère-t-il de Heroic, Lutris ou Playnite ?

- **Tout au même endroit :** Steam, Epic, GOG, Amazon, boutiques, émulateurs et jeux personnels.
- **Léger :** application Rust native avec rendu GPU, sans navigateur embarqué. Environ 190 Mo au repos et bibliothèque affichée en 215 ms.
- **Historique :** sessions, statistiques, journal, objectif de jeux à terminer et bilan annuel.
- **Mode console** avec thèmes modifiables et partageables.

Import depuis Heroic, Lutris, Bottles et Faugus sur Linux, Playnite sur Windows. Voir [Heroic](/fr/compare/heroic/), [Lutris](/fr/compare/lutris/) et [Playnite](/fr/compare/playnite/).

## Puis-je utiliser la même bibliothèque sur deux PC ?

Oui. **Settings → Cloud** synchronise statuts, favoris, notes, temps de jeu et sessions entre PC, y compris Linux et Windows en double démarrage, via dossier partagé ou compte cloud. Voir [Copies de sécurité et sauvegardes](/fr/docs/backups-and-saves/).

## Vais-je perdre ma configuration Heroic ?

Non. Heronite ne modifie jamais ses fichiers. Au premier lancement, il copie une fois connexions, réglages et jeux ajoutés manuellement. Heroic continue de fonctionner.

## Les jeux avec antitriche fonctionnent-ils ?

Sur Windows, oui, comme avec tout lanceur. Sur Linux, cela dépend du jeu. Les détails affichent son état d’[Are We Anti-Cheat Yet?](https://areweanticheatyet.com) ; voir [Antitriche](/fr/docs/wine-and-proton/#antitriche).

## Mes identifiants de boutique sont-ils en sécurité ?

Oui. Heronite utilise les mêmes outils open source que Heroic : legendary pour Epic, gogdl pour GOG et nile pour Amazon. Les connexions restent sur le PC et ne vont qu’aux boutiques ; le mot de passe est saisi sur leur propre page.

## Pourquoi Windows affiche-t-il une alerte SmartScreen ?

Le code des fichiers Windows n’est pas encore signé. Choisissez **Informations complémentaires**, puis **Exécuter quand même**. Chaque version est toutefois signée avec minisign ; Heronite vérifie cette signature avant les mises à jour.

## Puis-je tout garder sur une clé USB ?

Oui, avec la version portable Windows. Voir [Fichiers et dossiers](/fr/docs/files-and-folders/#la-version-portable-windows).

## Quelles langues Heronite prend-il en charge ?

L’application est disponible en anglais, portugais (Brésil), espagnol et allemand. Cette traduction française concerne le site web. Pour contribuer à l’application, voir [Traduction](/fr/docs/translating/).

## Où demander de l’aide ou proposer une fonctionnalité ?

- Questions et idées : [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs et demandes : [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problèmes de sécurité, en privé : [onglet Security](https://github.com/RafaelGoulartB/Heronite/security)
