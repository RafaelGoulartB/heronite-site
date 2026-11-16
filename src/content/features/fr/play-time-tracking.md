---
title: "Temps de jeu et statistiques de vos parties | Heronite"
description: "Suivez votre temps de jeu sur PC : statistiques par semaine, mois et année, objectif annuel de jeux à terminer et bilan de jeu, sur Linux et Windows."
eyebrow: Suivi du temps de jeu
headline: "Temps de jeu, statistiques et bilan annuel"
lead: "Heronite suit le temps de jeu de chaque titre lancé depuis l’application, quelle que soit sa boutique, sur Linux et Windows. Sans configuration ni compte."
navLabel: Suivi du temps de jeu
summary: "Chaque session enregistrée, des statistiques par semaine, mois et année, un objectif annuel et un bilan à partager."
order: 6
hero: ../../../assets/screenshots/statistics.webp
heroAlt: "Vue d’ensemble des statistiques d’octobre 2026 : 32 h 56 min de jeu, série de 16 jours, 61 sessions, cartes Journeys, Goal for 2026, Discovery et Album, et graphique quotidien par jeu."
og: /og/fr/play-time-tracking.jpg
updated: 2026-11-04
highlights:
  - title: Semaine, mois, année
    text: Temps total, séries de jours et graphique quotidien pour chaque période.
  - title: Un objectif annuel
    text: Choisissez combien de jeux terminer cette année et suivez votre rythme.
  - title: Votre bilan annuel
    text: Des récits en plein écran de votre année, avec une carte finale à partager.
  - title: Captures d’écran avec F10
    text: Heronite classe chaque capture sous le jeu auquel vous jouez.
faq:
  - q: Heronite suit-il le temps des jeux émulés ?
    a: Oui. Heronite enregistre les jeux émulés comme tout autre jeu lancé depuis l’application.
  - q: Heronite permet-il de suivre les jeux à terminer ?
    a: Oui. Utilisez les statuts Plan to play, Playing, Beaten ou Abandoned, et fixez un objectif annuel de jeux terminés.
  - q: Mon historique de jeu est-il envoyé quelque part ?
    a: Non. Heronite enregistre les sessions dans des fichiers JSON dans son dossier de données sur votre PC. Voir [Fichiers et dossiers](/docs/files-and-folders/).
  - q: Heronite importe-t-il les captures d’autres outils ?
    a: Oui. Heronite lit un dossier avec un sous-dossier par jeu, par exemple des captures Xbox Game Bar, et les associe aux jeux par leur nom.
related:
  - /features/game-library/
  - /features/saves-and-backups/
  - /features/console-mode/
---

Le temps de jeu apparaît sous chaque jaquette, dans les détails du jeu, son historique et sa page en mode console.

Heronite enregistre tout sur votre PC dans des fichiers JSON, sans télémétrie. Pour en faire une copie, voir [Sauvegardes et copies de sécurité](/fr/features/saves-and-backups/).

## Où voir mes statistiques de jeu ?

Ouvrez **Statistics** avec <kbd>Ctrl</kbd> <kbd>6</kbd>. Choisissez **Week**, **Month**, **Year** ou **All time** en haut, puis les flèches pour changer de période. L’onglet **Overview** affiche :

- Le temps total, comparé à la période précédente
- Les jours joués, votre série de jours et le nombre de sessions
- Votre journée la plus chargée et vos jeux les plus joués
- Un **graphique quotidien** où chaque couleur correspond à un jeu

Les autres onglets :

- **Journeys** affiche l’évolution de vos jeux et ceux auxquels vous jouiez en parallèle.
- **Backlog** suit votre objectif et les jeux terminés.
- **Discoveries** relève des événements, comme reprendre un ancien jeu après des mois d’arrêt.
- **Album** rassemble vos captures d’écran.

## Comment fixer un objectif annuel de jeux à terminer ?

1. Ouvrez **Statistics** (<kbd>Ctrl</kbd> <kbd>6</kbd>), puis l’onglet **Backlog**.
2. Fixez votre objectif annuel avec les boutons moins et plus.

Un cercle de progression indique le nombre de jeux terminés, si vous êtes dans les temps et le rythme à tenir. Heronite compare vos heures aux durées **[How Long To Beat](https://howlongtobeat.com)**.

![L’onglet Backlog pour 2026 : 9 jeux terminés sur un objectif de 12, une frise des jeux terminés et abandonnés par mois, et une barre des statuts de toute la Collection.](../../../assets/screenshots/stats-backlog.webp)

*L’onglet Backlog avec son cercle d’objectif et son historique de jeux terminés.*

Sous le cercle :

- Une frise annuelle, avec les jeux terminés au-dessus et abandonnés en dessous
- Les heures passées sur les jeux terminés et abandonnés
- Le nombre médian de jours entre la première session et la fin d’un jeu
- Votre liste Plan to play et le temps nécessaire à votre rythme habituel

## Comment ouvrir mon bilan annuel de jeu ?

Ouvrez la bannière de la page **Statistics**, ou appuyez sur <kbd>Ctrl</kbd> <kbd>K</kbd> et saisissez « Year in review ». Heronite présente votre année en **sept récits en plein écran**, en fin d’année ou à tout moment.

![Premier récit du bilan annuel, Your 2026 in games, avec le nombre de jours, jeux et sessions à côté d’un mur de jaquettes.](../../../assets/screenshots/year-in-review.webp)

*Le premier récit, sur un mur de jaquettes.*

Les récits couvrent votre mois le plus actif, votre plus longue série, votre plus longue pause et votre jeu de l’année. Les derniers présentent vos horaires habituels, puis une synthèse. **Copy summary** copie un court texte sur votre année, à publier où vous voulez.

![Dernier récit, That is a wrap : nombre de captures, liste des jeux terminés et carte à partager avec les heures totales et les trois jeux les plus joués.](../../../assets/screenshots/year-in-review-wrap.webp)

*Le dernier récit se termine par une carte de votre année, prête à partager.*

## Comment ajouter des notes et des captures à mon historique ?

Chaque jeu dispose d’un **journal** pour vos notes, par exemple où vous en étiez. Il partage le même historique que vos sessions.

Pour les captures, appuyez sur <kbd>F10</kbd> en jouant. Heronite associe la capture au jeu ; vous pouvez changer la touche dans **Settings → Screenshots**. L’onglet **Album** et la page de chaque jeu affichent vos captures.

Pour commencer : [téléchargez Heronite](/fr/download/).
