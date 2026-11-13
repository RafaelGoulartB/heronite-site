---
title: "Un lanceur de jeux léger, sans Electron | Heronite"
description: "Un lanceur de jeux léger pour Linux et Windows : bibliothèque en environ 215 ms, 190 Mo de mémoire au repos et 64 Mo sur disque, sans Electron."
eyebrow: Performances
headline: "Un lanceur de jeux léger, sans Electron"
lead: "Heronite est un lanceur de jeux léger : un processus natif en Rust avec rendu GPU, sans navigateur embarqué."
navLabel: Performances
summary: "Rust natif, rendu GPU et sans Electron : environ 215 ms pour ouvrir la bibliothèque, 190 Mo au repos et 64 Mo sur disque."
order: 8
hero: ../../../assets/screenshots/command-palette.webp
heroAlt: "La palette de commandes d’Heronite ouverte sur la Collection, recherchant « contr » et proposant Control et d’autres jeux, avec les actions pour jouer, ouvrir les réglages ou le dossier."
og: /og/fr/performance.jpg
updated: 2026-11-04
highlights:
  - title: Environ 215 ms
    text: Temps médian du lancement à l’affichage de votre bibliothèque.
  - title: Environ 0,1 % de CPU
    text: Mesuré au repos, soit 0,05 s de temps CPU sur 60 s.
  - title: Portable sur Windows
    text: Un dossier à emporter sur clé USB, sans écriture dans le registre.
  - title: Désactivez les tâches de fond
    text: Des variables d’environnement désactivent l’icône de notification, les animations et la recherche de mises à jour.
faq:
  - q: Quel lanceur de jeux léger pour Linux et Windows ?
    a: Heronite est conçu pour être léger. Il utilise environ 190 Mo au repos dans un seul processus et occupe 64 Mo sur disque.
  - q: Heronite fonctionne-t-il sur Steam Deck ?
    a: Oui, en AppImage sur SteamOS. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: Heronite collecte-t-il de la télémétrie ?
    a: Non. Heronite est sans compte, publicité ni télémétrie, gratuit et open source sous licence GPL-3.0.
related:
  - /features/game-library/
  - /features/console-mode/
  - /download/
---

## À quel point Heronite est-il rapide et léger ?

| Mesure | Heronite |
|---|---|
| Du lancement à la bibliothèque affichée | environ 215 ms (médiane) |
| Mémoire au repos | environ 190 Mo dans un seul processus |
| Mémoire après réduction dans la zone de notification | environ 95 Mo |
| CPU au repos | environ 0,1 % (0,05 s de temps CPU sur 60 s) |
| Taille de l’installation | 64 Mo |

## Que signifie « sans Electron » pour moi ?

Les applications Electron embarquent un moteur de navigateur complet. Heronite utilise un programme natif unique qui lit votre bibliothèque et l’affiche avec le GPU via GPUI, un framework d’interface pour Rust.

Seule la fenêtre de connexion aux boutiques affiche une page web. Cette petite fenêtre séparée utilise la vue web du système (WebKitGTK sur Linux, WebView2 sur Windows). Elle s’ouvre uniquement à la connexion à Epic Games, GOG ou Amazon.

![La Collection d’Heronite en vue Focus : jaquettes regroupées dans Playing et On Going, temps de jeu et ELDEN RING ouvert avec ses détails et son historique.](../../../assets/screenshots/collection.webp)

*Une Collection complète avec captures, détails et historique de jeu, rendue par le GPU.*

## Que contiennent les 64 Mo de l’installation ?

Deux éléments : l’application et l’assistant de connexion aux boutiques. Ce petit programme séparé ne fonctionne que pour la fenêtre de connexion ; l’application principale reste un processus unique. Les outils legendary, gogdl et nile ne s’exécutent qu’au besoin, par exemple pendant l’installation ou la mise à jour d’un jeu.

## Le mode console est-il léger aussi ?

Oui. Il ne charge rien tant que vous ne l’activez pas. Dans **Settings → Console mode**, vous pouvez choisir de l’ouvrir au démarrage ou à la connexion d’une manette. Voir [Mode console](/fr/features/console-mode/).

## Puis-je emporter Heronite sur une clé USB ?

Sur Windows, oui. La version portable tient dans un dossier avec le programme, votre Collection, les réglages, caches et captures d’écran. Extrayez-la où vous voulez ou déplacez-la sur une clé USB. Elle n’écrit pas dans le registre. Voir [La version portable](/fr/docs/files-and-folders/#la-version-portable-windows).

## Puis-je désactiver les tâches en arrière-plan ?

Oui. Définissez ces [variables d’environnement](/fr/docs/environment-variables/) :

| Variable | Effet |
|---|---|
| `HERONITE_NO_TRAY` | Pas d’icône dans la zone de notification |
| `HERONITE_NO_ANIMATIONS` | Pas d’animations |
| `HERONITE_DISABLE_IDLE_JOBS` | Pas de tâches de fond au repos |
| `HERONITE_NO_UPDATE_CHECK` | Pas de recherche automatique de mises à jour |

## De quoi Heronite a-t-il besoin pour fonctionner ?

Heronite fonctionne sur Linux (toute distribution, x86_64) et Windows 10 et 11 (x86_64). Sur Linux, il utilise Vulkan : il faut un pilote Vulkan fonctionnel, Mesa pour AMD et Intel, ou le pilote propriétaire NVIDIA.

Si la fenêtre ne s’ouvre pas ou reste noire, lancez `vulkaninfo` et vérifiez que votre GPU apparaît. Voir [Dépannage](/fr/docs/troubleshooting/#heronite-ne-démarre-pas-ou-affiche-une-fenêtre-noire) et [Installation](/fr/docs/installation/).

Pour commencer : [téléchargez Heronite](/fr/download/).
