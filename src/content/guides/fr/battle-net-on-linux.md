---
title: "Battle.net sur Linux : installation avec Wine et Proton"
description: "Installez Battle.net sur Linux en un bouton : Heronite configure Wine, vous vous connectez et les jeux Blizzard installés rejoignent votre bibliothèque."
eyebrow: Guide Linux
headline: "Comment installer Battle.net sur Linux"
lead: "Blizzard ne propose pas de version Linux. Heronite installe Battle.net pour Windows avec Wine depuis la page Stores, sans configuration manuelle."
navLabel: Battle.net sur Linux
summary: "Configurez Battle.net depuis Stores, connectez-vous, installez-y vos jeux et lancez-les depuis votre bibliothèque Heronite."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Collection avec un jeu ouvert : jaquette, bouton Play et encadré On Linux avec note ProtonDB et état antitriche. Les jeux Battle.net installés y apparaissent aussi."
og: /og/fr/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: Configuration en un bouton
    text: Heronite télécharge Proton au besoin, puis le programme d’installation officiel.
  - title: Son propre préfixe Wine
    text: Battle.net reste séparé des autres jeux.
  - title: Connexion dans Battle.net
    text: Heronite ne voit jamais votre mot de passe.
  - title: Jouez depuis Heronite
    text: Lancez vos jeux Blizzard installés depuis la bibliothèque, avec suivi du temps.
faq:
  - q: Existe-t-il un Battle.net officiel pour Linux ?
    a: Non. Heronite utilise le programme d’installation officiel Windows et lance la boutique via Wine ou Proton.
  - q: Quels jeux Blizzard fonctionnent sur Linux ?
    a: Beaucoup, selon le jeu. Vérifiez d’abord ProtonDB. Call of Duty ne fonctionne pas, car son antitriche Ricochet ne prend pas en charge Linux.
  - q: Cela fonctionne-t-il sur Windows ?
    a: Oui. Heronite lance Battle.net directement sans Wine et reprend votre installation existante. Ses jeux apparaissent et passent par Battle.net.
  - q: Où Heronite installe-t-il Battle.net ?
    a: Dans le préfixe Wine `~/Games/Heronite/Prefixes/Battle.net`. Le retirer d’Heronite laisse ce dossier et ses jeux sur disque.
  - q: Puis-je garder mon Battle.net déjà configuré dans Wine ou Lutris ?
    a: Oui. Appuyez sur **Use an existing install** sur la page Battle.net et sélectionnez votre préfixe Wine.
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Prérequis

- Un PC Linux 64 bits avec un pilote Vulkan fonctionnel, et le pilote Vulkan 32 bits pour les anciens jeux.
- Un compte Battle.net.
- Internet pour télécharger Proton si nécessaire, puis le programme d’installation Battle.net.
- De l’espace disque pour Wine et les jeux.

## Installer Heronite

Récupérez l’AppImage sur la [page de téléchargement](/fr/download/). Elle fonctionne sur toute distribution :

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Les autres formats sont dans le [guide d’installation](/fr/docs/installation/). Sur Steam Deck, suivez le [guide Steam Deck](/fr/guides/steam-deck/).

## Configurer Battle.net

1. Appuyez sur <kbd>Ctrl</kbd> <kbd>4</kbd> pour ouvrir **Stores**.
2. À gauche, sous **Store apps**, choisissez **Battle.net**.
3. Appuyez sur **Set up Battle.net**.
4. Attendez l’état **Ready** ; cela peut prendre quelques minutes.

Heronite trouve ou télécharge Proton, puis l’installateur officiel. Il crée le préfixe Wine (un dossier Windows séparé) `~/Games/Heronite/Prefixes/Battle.net` et y installe Battle.net. Si vous disposez déjà d’un préfixe, choisissez **Use an existing install** à l’étape 3.

## Se connecter, installer et lancer les jeux Blizzard

1. Appuyez sur **Open Battle.net**.
2. Connectez-vous dans Battle.net. Heronite ne voit jamais votre mot de passe ; sa page affiche ensuite **Signed in**.
3. Installez un jeu dans Battle.net, comme sur Windows.
4. Appuyez sur <kbd>Entrée</kbd> sur le jeu dans Heronite pour le lancer et suivre son temps de jeu.

Avant un gros téléchargement, consultez **On Linux** dans les détails : note [ProtonDB](https://www.protondb.com) et état antitriche d’[Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

Si un jeu installé manque, appuyez sur **Refresh** sous **Installed games** sur la page Battle.net. Un jeu non installé affiche **Install with Battle.net**, qui ouvre la boutique.

## Changer la version de Proton pour Battle.net

Ouvrez **Wine settings** sur la page Battle.net et choisissez une version dans **Version**, onglet **Compatibility**. Sans modification, Heronite utilise votre Proton par défaut. Essayez généralement [GE-Proton ou Proton-CachyOS](/fr/guides/install-ge-proton/).

**Open folder** près de **Wine prefix** ouvre le préfixe. Pour arrêter la boutique et tout son préfixe, fermez d’abord les jeux en cours, puis appuyez sur **Close Battle.net**.

## Retirer Battle.net d’Heronite

Appuyez sur **Remove from Heronite**. Le préfixe et ses jeux restent sur disque. Supprimez vous-même le dossier pour récupérer l’espace ([Fichiers et dossiers](/fr/docs/files-and-folders/)).

## L’antitriche bloque-t-il des jeux Blizzard ?

Oui, Call of Duty. La page Battle.net avertit que Ricochet ne fonctionne pas sur Linux. Les autres jeux peuvent changer à chaque mise à jour : vérifiez ProtonDB avant d’installer.

## Battle.net ne s’installe pas ou plante

- **La configuration s’arrête ou échoue.** Vérifiez Internet et réessayez. Les journaux sont dans **Settings → Logs**.
- **Battle.net ou un jeu plante.** Essayez une autre version dans **Wine settings** ou un préfixe neuf.

Pour les DLL manquantes, erreurs Vulkan et autres corrections Wine, voir [Dépannage](/fr/docs/troubleshooting/#un-jeu-ne-démarre-pas-linux).
