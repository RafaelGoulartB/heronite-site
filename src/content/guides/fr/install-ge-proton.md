---
title: "Installer GE-Proton et Proton-CachyOS sur Linux"
description: "Installez GE-Proton, Proton-CachyOS et d’autres versions sur Linux avec Wine Manager. Choisissez une version par jeu ou partagez-les avec Steam."
eyebrow: Guide Linux
headline: "Comment installer GE-Proton et Proton-CachyOS"
lead: "Installez GE-Proton sur Linux en un clic depuis Wine Manager, puis choisissez-le par jeu ou partagez-le avec Steam."
navLabel: Installer GE-Proton
summary: "Ouvrez Wine Manager, installez GE-Proton ou Proton-CachyOS et choisissez la version de chaque jeu dans Game settings."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "Wine Manager : sources Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM et Proton-Sarek à gauche, versions avec Install à droite et option Install Proton into Steam en bas."
og: /og/fr/install-ge-proton.jpg
updated: 2026-11-04
highlights:
  - title: Ouvrez Wine Manager
    text: Ctrl+3, choisissez une source comme GE-Proton, puis Install sur une version.
  - title: Six sources
    text: Choisissez parmi six sources de Proton dans une liste.
  - title: Partage avec Steam
    text: Activez Install Proton into Steam pour utiliser les nouvelles versions dans Steam.
  - title: Choix par jeu
    text: Choisissez dans Game settings → Compatibility.
faq:
  - q: Quelle différence entre GE-Proton et Proton-CachyOS ?
    a: GE-Proton vient de Glorious Eggroll, Proton-CachyOS de l’équipe CachyOS. Tous deux reçoivent souvent les correctifs avant le Proton de Valve.
  - q: Heronite utilise-t-il les versions déjà installées ?
    a: Oui. Il détecte Proton dans les bibliothèques Steam et les versions Wine de Lutris, évitant les téléchargements en double.
  - q: Où Heronite installe-t-il Proton ?
    a: Dans `~/.local/share/heronite/tools/proton`. Avec **Install Proton into Steam**, les nouvelles versions vont dans `compatibilitytools.d` de Steam.
  - q: Wine Manager fonctionne-t-il sur Windows ?
    a: Non. Il est réservé à Linux. Sur Windows, les jeux fonctionnent nativement.
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

GE-Proton et Proton-CachyOS reçoivent souvent en premier les correctifs des nouveaux jeux : essayez-les en cas de plantage.

## Prérequis

- Heronite sur Linux ([installation](/fr/docs/installation/)). Sur Steam Deck, commencez par le [guide Steam Deck](/fr/guides/steam-deck/).
- Internet ; les versions viennent de GitHub.
- De l’espace disque : de quelques centaines de mégaoctets à plus d’un gigaoctet par version.

## Installer GE-Proton dans Wine Manager

1. Ouvrez Wine Manager avec <kbd>Ctrl</kbd> <kbd>3</kbd> ou la palette de commandes (<kbd>Ctrl</kbd> <kbd>K</kbd>).
2. Choisissez **GE-Proton** à gauche. Les versions apparaissent à droite, les plus récentes d’abord, avec date et taille.
3. Choisissez une version ou recherchez son numéro. **GE-Proton-latest** suit la dernière publication. Une version numérotée reste fixe, utile pour un jeu qui ne fonctionne qu’avec elle.
4. Appuyez sur **Install**. La ligne passe à **Installed**.

![Wine Manager avec Proton-CachyOS sélectionné et les versions, dates, tailles et boutons Install.](../../../assets/screenshots/wine-manager.webp)

Les versions vont dans `~/.local/share/heronite/tools/proton`. Activez **Keep the -latest builds up to date** pour maintenir les entrées **-latest** à jour en arrière-plan, jamais pendant une partie.

## Installer Proton-CachyOS

1. Choisissez **Proton-CachyOS** à gauche dans Wine Manager.
2. Appuyez sur **Install** sur une version.

Les versions coexistent ; gardez GE-Proton et Proton-CachyOS et choisissez par jeu.

## À quoi servent les autres versions ?

| Source | Description |
|---|---|
| Proton-CachyOS | Variante de l’équipe CachyOS avec des outils comme DXVK-Sarek et D7VK |
| GE-Proton | Variante de Glorious Eggroll conçue pour le lanceur umu |
| DW-Proton | Proton de Dawn Winery : Proton Experimental et correctifs supplémentaires |
| UMU-Proton | Proton de Valve empaqueté par umu pour les jeux hors Steam |
| Proton-EM | Correctifs encore en test, comme FSR 4 et HDR ; certaines versions sont des préversions |
| Proton-Sarek | Avec DXVK-Sarek pour les cartes anciennes sans Vulkan 1.3 |

[ProtonDB](https://www.protondb.com) indique souvent quelle version fonctionne pour un jeu.

## Choisir une version dans Game settings

1. Sélectionnez le jeu et ouvrez **Game settings**.
2. Ouvrez **Compatibility**.
3. Dans **Version**, choisissez la version installée.

![Onglet Compatibility : Version réglé sur GE-Proton-latest, note ProtonDB et préfixe Wine dessous.](../../../assets/screenshots/game-settings.webp)

Le même onglet affiche la note ProtonDB et une version **Recommended**. Le choix concerne uniquement ce jeu. Pour les nouveaux jeux, réglez **Version** dans **Settings → Game defaults → Compatibility**. Voir [Wine et Proton](/fr/docs/wine-and-proton/).

## Partager les versions avec Steam (facultatif)

Heronite peut installer dans `compatibilitytools.d` de Steam :

1. Activez **Install Proton into Steam** dans Wine Manager.
2. Installez les versions comme ci-dessus. Les nouvelles y sont téléchargées et Heronite reconnaît celles déjà présentes.
3. Redémarrez Steam pour les détecter.
4. Dans Steam, clic droit sur un jeu, **Propriétés**, puis **Compatibilité**.
5. Forcez l’utilisation d’un outil de compatibilité et choisissez votre version.

## Mettre à jour et supprimer des versions

Appuyez sur **Update** près d’une version installée si une nouvelle est disponible. **Remove** la supprime. Les jeux qui l’utilisaient reviennent à la version par défaut.

## Une version ne s’installe pas, n’apparaît pas ou ne résout rien

- **Liste vide :** actualisez. Si la limite GitHub est atteinte, attendez l’heure indiquée.
- **Téléchargement échoué :** vérifiez Internet et réessayez **Install**.
- **Version absente de Steam :** vérifiez que **Install Proton into Steam** était actif à l’installation, puis redémarrez Steam.
- **Le jeu plante encore :** essayez une autre source, comme Proton-CachyOS ou DW-Proton, ou un préfixe neuf.

Voir [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux) pour Vulkan et les erreurs courantes. Si l’antitriche bloque Linux, aucune version de Proton ne peut y remédier : voir [Antitriche](/fr/docs/wine-and-proton/#antitriche).
