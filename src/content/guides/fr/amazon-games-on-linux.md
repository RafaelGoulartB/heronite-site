---
title: "Amazon Games et Prime Gaming sur Linux"
description: "Jouez à Amazon Games et Prime Gaming sur Linux : connectez-vous, récupérez vos jeux gratuits sur Amazon, puis installez-les et lancez-les avec Proton."
eyebrow: Guide Linux
headline: "Comment jouer à Amazon Games sur Linux"
lead: "L’application Amazon ne fonctionne pas sur Linux. Heronite se connecte à Amazon et lance vos jeux Amazon Games et Prime Gaming récupérés via Proton."
navLabel: Amazon Games sur Linux
summary: "Connectez-vous à Amazon dans Heronite : vos jeux Amazon et Prime Gaming rejoignent la bibliothèque, prêts à installer avec Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Réglages Compatibility d’Heronite : GE-Proton-latest, note ProtonDB Platinum, préfixe Wine et boutons Winecfg et Winetricks."
og: /og/fr/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: Vérifiez avant d’installer
    text: Chaque jeu affiche sa note ProtonDB et l’état de son antitriche.
  - title: Un Proton par jeu
    text: Choisissez une version différente pour chaque jeu.
  - title: Recherche automatique de mises à jour
    text: Heronite vérifie les mises à jour des jeux Amazon toutes les 3 heures.
  - title: Les jeux restent après déconnexion
    text: Les jeux installés restent sur disque après déconnexion d’Amazon.
faq:
  - q: Existe-t-il une application Amazon Games pour Linux ?
    a: Non. Heronite utilise [nile](https://github.com/imLinguin/nile), un outil open source pour se connecter, télécharger et mettre à jour les jeux Amazon.
  - q: Les jeux Prime Gaming fonctionnent-ils sur Linux ?
    a: Oui, après les avoir récupérés sur le site Amazon. Actualisez votre bibliothèque dans Heronite pour les installer comme les autres jeux.
  - q: Dois-je installer Wine au préalable ?
    a: Non. Heronite télécharge Proton au besoin. Il suffit d’un pilote Vulkan fonctionnel. Voir [Wine et Proton](/docs/wine-and-proton/).
  - q: Puis-je jouer aux jeux Amazon sur Steam Deck ?
    a: Oui. Connectez-vous en mode Bureau, puis jouez en mode Jeu. Voir le [guide Steam Deck](/guides/steam-deck/).
  - q: Puis-je utiliser Amazon Games sur Windows avec Heronite ?
    a: Oui. Heronite détecte les jeux installés par Amazon Games sans les télécharger à nouveau. La connexion et l’installation fonctionnent de la même façon.
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

## Prérequis

- Un PC Linux 64 bits avec un pilote Vulkan fonctionnel.
- Un compte Amazon. Pour les jeux gratuits, un abonnement Prime incluant Prime Gaming.
- De l’espace disque. Les jeux s’installent par défaut dans `~/Games/Heronite`.

## Installer Heronite

Téléchargez l’AppImage depuis la [page de téléchargement](/fr/download/) :

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Les autres formats sont dans le [guide d’installation](/fr/docs/installation/). Sur Steam Deck, suivez le [guide Steam Deck](/fr/guides/steam-deck/).

## Se connecter à Amazon Games

1. Ouvrez **Stores** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Choisissez **Amazon Games**.
3. Appuyez sur **Log in**.
4. Connectez-vous sur la page Amazon dans la fenêtre qui s’ouvre.

Vos jeux Amazon apparaissent, y compris les jeux Prime Gaming récupérés. Si la fenêtre ne s’ouvre pas, utilisez **Or log in with your browser** et collez le code obtenu. Pour Amazon, le code est l’adresse de la page amazon.com d’arrivée ([connexion aux boutiques](/fr/docs/troubleshooting/#une-connexion-à-une-boutique-ou-un-téléchargement-échoue)).

## Récupérer les jeux Prime Gaming

Heronite ne récupère pas les offres à votre place. Faites-le sur le site Amazon :

1. Ouvrez la page Prime Gaming dans votre navigateur et connectez-vous.
2. Récupérez les jeux souhaités.
3. Dans Heronite, choisissez **Stores → Amazon Games → Refresh library**.

Les nouveaux jeux apparaissent. Amazon décide des offres et les renouvelle : récupérez un jeu pendant sa disponibilité. S’il manque, vérifiez le compte utilisé et actualisez à nouveau.

## Installer et lancer un jeu Amazon

Consultez d’abord **On Linux** dans les détails : note [ProtonDB](https://www.protondb.com) et état de l’antitriche. Gold ou Platinum fonctionne généralement sans modification.

1. Sélectionnez le jeu et appuyez sur <kbd>Entrée</kbd>, ou **Install with Amazon Games**.
2. Vérifiez **Select install path**. **Wine version** se trouve dans **Show Wine settings** ; commencez par la valeur par défaut.
3. Appuyez sur **Install** et suivez le téléchargement dans Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Une fois terminé, sélectionnez le jeu et appuyez sur <kbd>Entrée</kbd> pour jouer.

## Changer de version de Proton

Si le jeu ne démarre pas, ouvrez **Game settings → Compatibility** et choisissez une autre version dans **Version**. GE-Proton et Proton-CachyOS reçoivent souvent les correctifs en premier ; le [guide GE-Proton](/fr/guides/install-ge-proton/) explique leur installation. La page [ProtonDB](https://www.protondb.com) du jeu propose souvent aussi une solution.

## Mettre à jour, réparer ou déplacer un jeu Amazon

- **Mise à jour :** vérification toutes les 3 heures. **Update all** sur la page Amazon Games les installe toutes.
- **Réparation ou déplacement :** choisissez **Verify and repair** ou **Move install** dans les actions du jeu.

Une file unique gère ces opérations et les désinstallations, et se met en pause hors ligne. Les jeux installés restent après déconnexion. Heronite conserve la connexion dans son dossier de données : gardez-le privé ([Fichiers et dossiers](/fr/docs/files-and-folders/)).

## Quels jeux Amazon ne fonctionnent pas sur Linux ?

Les jeux solo posent rarement problème. Les jeux dont l’antitriche bloque Linux ne fonctionneront pas. L’état **On Linux** vient d’[Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Voir la documentation sur l’[antitriche](/fr/docs/wine-and-proton/#antitriche).

## Un jeu Amazon ne démarre pas sur Linux

Consultez son journal de lancement dans **Settings → Logs**. La page [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux) décrit les corrections Wine courantes.
