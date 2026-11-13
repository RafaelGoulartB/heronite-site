---
title: "Mode console : Heronite à la manette sur un téléviseur"
navLabel: "Mode console"
description: "Le mode console d’Heronite : activation, boutons de manette et clavier, dispositions, thèmes, partage et interface superposée en jeu sur Linux."
section: Guides
order: 4
updated: 2026-11-04
---

Le mode console est une interface pensée pour la manette, le canapé ou la TV, avec clavier virtuel et menu d’alimentation.

## Activer le mode console

Choisissez l’une des méthodes :

- **Console mode** dans la palette (<kbd>Ctrl</kbd> <kbd>K</kbd>) ou le menu ☰.
- Démarrage avec `--console` (raccourci Steam ou session de jeu).
- **Settings → Console mode** pour l’ouverture au démarrage ou à la connexion d’une manette (off, ask ou on).

Rien ne charge quand il est désactivé. Sur Steam Deck, voir le [guide Steam Deck](/fr/guides/steam-deck/).

## Boutons de manette

| Bouton | Action |
|---|---|
| A (sud) | Confirmer |
| B (est) | Revenir |
| X, Y | Actions affichées |
| LB / RB | Changer d’onglet |
| Croix, stick gauche | Se déplacer |
| Stick droit | Faire défiler |
| Start ou Guide | Menu |

Inversez A et B dans les commandes du thème pour la disposition Nintendo. Les images suivent la manette (Xbox, PlayStation, Nintendo, Steam Deck) ou se règlent manuellement.

## Clavier

| Touche | Équivalent |
|---|---|
| Flèches | Se déplacer |
| <kbd>Entrée</kbd> ou <kbd>Espace</kbd> | A |
| <kbd>Échap</kbd> ou <kbd>Retour arrière</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>Page préc.</kbd> / <kbd>Page suiv.</kbd> | Faire défiler |
| <kbd>M</kbd> ou <kbd>F1</kbd> | Start (menu) |
| <kbd>Tab</kbd> | Select |

## Modifier dispositions et thèmes

Modifiez tout en direct ou dans **Settings → Console mode** :

- Jusqu’à quatre onglets avec disposition propre (Shelves, Spotlight, Cinema, Dashboard, Grid, Wheel, Carousel, Series X) et jeux propres (tous, installés, non installés, favoris, PC, émulés, ou filtrés par statut, catégorie, boutique ou plateforme)
- Jaquettes, arrière-plan, couleurs, polices et images des boutons
- Menu et pages de jeu

Sept thèmes intégrés : Minimal, Classic, Cinema, Pulse, Arcade, Hub et Living room.

### Partager un thème

Dans **Settings → Console mode**, **Export…** enregistre un `.heronite-theme.json` avec son arrière-plan. Sur un autre PC, choisissez **Import…**. Partagez-le dans les [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions), ou modifiez-le à la main avec le [format des thèmes](/fr/docs/console-theme-format/).

## Ouvrir l’interface en jeu (bêta, Linux)

1. Activez **Turn on the overlay** dans **Settings → Overlay** (désactivé par défaut).
2. Pendant un jeu lancé depuis Heronite, appuyez sur Guide.

Le panneau propose volume, microphone, limite de FPS, captures et notes.

| Boutons | Action |
|---|---|
| Guide | Ouvrir ou fermer (<kbd>Super</kbd> <kbd>G</kbd> au clavier) |
| Guide + RB | Capture (bouton modifiable) |
| Guide + ↑ / ↓ | Volume |
| Guide + Y | Marquer un moment |
| Guide + X | Enregistrer le replay |

Nécessite Wayland avec layer-shell ; ne fonctionne pas sur GNOME ou X11. Si Steam intercepte Guide, voir [Dépannage](/fr/docs/troubleshooting/#linterface-en-jeu-ne-fonctionne-pas-linux).

**Replay** conserve les dernières secondes de jeu, enregistrées sur GPU par [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/). Activez-le dans **Settings → Replay** ; il est désactivé par défaut.
