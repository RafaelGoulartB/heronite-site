---
title: "EA app, Ubisoft Connect et Rockstar sur Linux"
description: "Installez EA app, Ubisoft Connect et Rockstar Games Launcher sur Linux avec Wine et Proton, et repérez les jeux bloqués par leur antitriche."
eyebrow: Guide Linux
headline: "EA app, Ubisoft Connect et Rockstar sur Linux"
lead: "Ces trois boutiques n’ont pas de version Linux, mais fonctionnent sous Wine. Heronite configure chacune depuis sa page Stores."
navLabel: EA, Ubisoft et Rockstar sur Linux
summary: "Configurez chaque boutique depuis Stores, connectez-vous dans son application, installez-y les jeux et lancez-les depuis Heronite."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Réglages Compatibility d’Heronite : version de Proton, note ProtonDB, dossier du préfixe Wine et boutons Winecfg et Winetricks."
og: /og/fr/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: Un bouton par boutique
    text: Heronite télécharge Proton au besoin, puis l’installateur officiel.
  - title: Connexion dans l’application
    text: Heronite ne voit jamais votre mot de passe.
  - title: Vérifiez avant d’installer
    text: L’encadré On Linux indique note ProtonDB et état antitriche.
  - title: Les jeux restent sur disque
    text: Retirer une boutique conserve son préfixe et ses jeux.
faq:
  - q: Puis-je lancer EA app sur Linux ?
    a: Oui, via Wine ou Proton. Les antitriches bloquent Battlefield 6, Battlefield 2042, Apex Legends et EA SPORTS FC sur Linux.
  - q: Ubisoft Connect fonctionne-t-il sur Linux ?
    a: Oui, en application Windows sous Wine. Vérifiez chaque jeu sur [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloque Linux.
  - q: Puis-je jouer à GTA V ou Red Dead Redemption 2 sur Linux ?
    a: Oui pour les modes histoire via Rockstar Games Launcher. BattlEye bloque GTA Online et Red Dead Online sur Linux.
  - q: Cela fonctionne-t-il sur Windows ?
    a: Oui. Heronite lance les boutiques directement sans Wine et reprend les installations existantes. Les jeux apparaissent et passent par leur boutique.
  - q: Puis-je utiliser une boutique déjà configurée dans Wine ?
    a: Oui. Appuyez sur **Use an existing install** sur sa page et sélectionnez votre préfixe Wine.
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Prérequis

- Un PC Linux 64 bits avec pilote Vulkan fonctionnel, plus le pilote Vulkan 32 bits pour les anciens jeux.
- Un compte pour chaque boutique souhaitée.
- Internet pour télécharger Proton au besoin, puis les installateurs.
- De l’espace disque pour les boutiques et leurs jeux.

## Installer Heronite

Téléchargez l’AppImage sur la [page de téléchargement](/fr/download/) :

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Les autres formats sont dans le [guide d’installation](/fr/docs/installation/). Sur Steam Deck, suivez le [guide Steam Deck](/fr/guides/steam-deck/).

## Configurer EA app, Ubisoft Connect ou Rockstar Games Launcher

Les étapes sont les mêmes pour les trois :

1. Appuyez sur <kbd>Ctrl</kbd> <kbd>4</kbd> pour ouvrir **Stores**.
2. À gauche, sous **Store apps**, choisissez **EA app**, **Ubisoft Connect** ou **Rockstar Games Launcher**.
3. Appuyez sur **Set up** suivi du nom, par exemple **Set up EA app**.
4. Attendez l’état **Ready**.

Heronite trouve ou télécharge Proton, puis l’installateur officiel. Il crée un préfixe Wine (dossier Windows séparé) pour la boutique :

| Boutique | Préfixe Wine |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

Si vous avez déjà un préfixe, utilisez **Use an existing install** à l’étape 3.

## Se connecter, installer et jouer

1. Appuyez sur **Open** suivi du nom, par exemple **Open Ubisoft Connect**.
2. Connectez-vous dans la boutique. Heronite ne voit jamais le mot de passe ; sa page affiche **Signed in**.
3. Installez un jeu dans la boutique, comme sur Windows.
4. Appuyez sur <kbd>Entrée</kbd> sur le jeu dans Heronite pour le lancer.

Avant un gros téléchargement, consultez **On Linux** pour la note [ProtonDB](https://www.protondb.com) et l’antitriche. Gold et Platinum sont les plus rassurants. En cas de doute, testez d’abord un petit jeu.

Si un jeu installé manque, appuyez sur **Refresh** sous **Installed games**. Un jeu non installé affiche **Install with the EA app**, **Install with Ubisoft Connect** ou **Install with the Rockstar Games Launcher**, qui ouvre la boutique.

## Quels jeux sont bloqués par l’antitriche ?

Les jeux solo et anciens jeux multijoueurs sans antitriche au niveau du noyau ont les meilleures chances de fonctionner. Pour les autres :

- **EA app :** Battlefield 6, Battlefield 2042, Apex Legends et EA SPORTS FC bloquent Linux.
- **Ubisoft Connect :** Rainbow Six Siege bloque Linux.
- **Rockstar Games Launcher :** BattlEye bloque GTA Online et Red Dead Online. Les modes histoire fonctionnent.

Si le développeur n’autorise pas Linux, le jeu ne fonctionnera pas. Les statuts évoluent : consultez [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) et la documentation sur l’[antitriche](/fr/docs/wine-and-proton/#antitriche).

## Changer la version de Proton d’une boutique

Ouvrez **Wine settings** sur sa page et choisissez **Version** dans **Compatibility**. Heronite utilise votre Proton par défaut tant que vous ne changez rien. Essayez généralement [GE-Proton ou Proton-CachyOS](/fr/guides/install-ge-proton/).

**Open folder** près de **Wine prefix** ouvre le préfixe. Pour arrêter la boutique et son préfixe, fermez les jeux puis utilisez **Close** suivi du nom.

## Retirer une boutique

Appuyez sur **Remove from Heronite**. Le préfixe et les jeux restent sur disque, réutilisables avec **Use an existing install**. Supprimez le dossier du préfixe pour libérer l’espace.

## Une boutique refuse la connexion ou un jeu se ferme au lancement

- **Échec de configuration :** vérifiez Internet et réessayez. Journaux dans **Settings → Logs**.
- **Connexion impossible ou plantage de la boutique :** essayez une autre version dans **Wine settings** ou un préfixe neuf.
- **Fermeture du jeu au lancement :** consultez son journal et ProtonDB.

Pour les DLL manquantes, erreurs Vulkan et autres corrections Wine, voir [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux).
