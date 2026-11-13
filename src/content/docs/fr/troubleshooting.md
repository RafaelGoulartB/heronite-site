---
title: "Dépannage Heronite : application, connexion et jeux"
navLabel: "Dépannage"
description: "Résolvez les échecs de lancement d’Heronite, les connexions aux boutiques, les mises à jour et les plantages Linux ; trouvez les journaux et signalez un bug."
section: Start
order: 4
updated: 2026-11-04
---

## « Windows a protégé votre ordinateur » au lancement

Choisissez **Informations complémentaires**, puis **Exécuter quand même**. Le code des fichiers Windows n’est pas encore signé.

## Heronite ne démarre pas ou affiche une fenêtre noire

Sur Linux, installez le pilote Vulkan du GPU puis vérifiez sa présence avec `vulkaninfo`. Heronite utilise Vulkan. Pour AMD ou Intel : `vulkan-radeon` ou `vulkan-intel` sur Arch, `mesa-vulkan-drivers` sur Debian et Ubuntu. Pour NVIDIA : son pilote propriétaire.

### « Heronite is already running but is not responding »

Fermez Heronite bloqué dans le gestionnaire de tâches ou avec `pkill heronite-rs`, puis relancez-le.

## Heronite ne se met pas à jour

### L’AppImage ne se met pas à jour

Déplacez-la dans `~/Applications` ou un dossier personnel accessible en écriture : elle se remplace elle-même.

### « GitHub rate limit reached »

Réessayez plus tard : votre réseau a envoyé trop de requêtes à GitHub.

## Une connexion à une boutique ou un téléchargement échoue

### La fenêtre de connexion ne s’ouvre pas

Utilisez **Or log in with your browser** sur la même page et collez le code obtenu.

Pour réparer la fenêtre, installez :

- Linux : WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`)
- Windows : [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

### Les téléchargements GOG échouent sur Linux

Installez `python3`, requis par l’outil gogdl.

## Un jeu ne démarre pas (Linux)

Si un jeu se ferme dans les 30 secondes et qu’Heronite reconnaît la cause, **Launch problem** s’ouvre. Son premier bouton corrige et relance le jeu. Pour les autres plantages, clic droit puis **Troubleshoot**.

| Message Heronite | Solution |
|---|---|
| « Visual C++ 2015-2022 is missing » (ou autre environnement) | **Install … and play** installe via Winetricks dans le préfixe du jeu uniquement |
| « .NET Framework is missing » | **Install .NET Framework 4.8 and play** (quelques minutes) |
| « DirectX 12 needs VKD3D-Proton » | **Turn on VKD3D-Proton and play**, ou activation dans **Game settings → Compatibility** |
| « Direct3D failed without DXVK » | **Turn on DXVK and play**, ou activation dans **Game settings → Compatibility** |
| « Vulkan could not start » | **Copy the command**, puis exécution dans un terminal pour installer le pilote, souvent sa partie 32 bits (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| « Wine ran out of open files » | **Use fsync and play**, ou Fsync au lieu d’Esync dans **Game settings → Compatibility** |
| « The memory map limit is low » | **Raise it and play**, puis mot de passe administrateur ([détails](#la-limite-de-mappage-mémoire-est-basse-vmmax_map_count)) |
| « Another Wine still runs on the prefix » | **Stop it and play**, ou fermeture de l’autre jeu |
| « Easy Anti-Cheat needs its runtime » | **Turn on the anti-cheat runtime and play** |
| « Easy Anti-Cheat blocks Linux players » | Aucune : le développeur n’autorise pas Linux ([Are We Anti-Cheat Yet?](https://areweanticheatyet.com) indique denied) |

### La limite de mappage mémoire est basse (vm.max_map_count)

Beaucoup de jeux et Easy Anti-Cheat nécessitent `vm.max_map_count` à 1048576, comme SteamOS, Fedora, Ubuntu et Arch. **Raise it and play** l’applique immédiatement et après redémarrage. Manuellement :

```bash
echo 'vm.max_map_count = 1048576' | sudo tee /etc/sysctl.d/80-heronite-max-map-count.conf
sudo sysctl -w vm.max_map_count=1048576
```

### Le jeu plante toujours

- Changez **Version** sous **Wine / Proton** dans **Game settings → Compatibility**. Essayez GE-Proton ou Proton-CachyOS.
- Créez un préfixe neuf via **New prefix for this game** dans **Prefix**, même onglet. Il est vide : copiez d’abord vos sauvegardes.
- Consultez [ProtonDB](https://www.protondb.com) pour les solutions des joueurs.

## L’interface en jeu ne fonctionne pas (Linux)

- Guide ouvre Steam : désactivez **Le bouton Guide active Steam** dans **Steam → Paramètres → Contrôleur**.
- Aucun panneau : activez **Turn on the overlay** dans **Settings → Overlay**, désactivé par défaut. Nécessite Wayland avec layer-shell (KDE Plasma, Hyprland, Sway), pas GNOME ni X11.

## Trouver les journaux

Dans **Settings → Logs**, ou `logs/` du [dossier de données](/fr/docs/files-and-folders/) :

| Journal | Emplacement |
|---|---|
| Heronite | `logs/launcher/heronite-rs-<date>.log` (quotidien, les 7 derniers conservés) |
| Jeu | `logs/games/<game>_<store>/launch.log` (aussi `install.log`, etc.) |
| Outil de boutique | `logs/runners/<tool>.log` |

Pour plus de détails :

- Lancez avec `RUST_LOG=debug`
- Activez **Detailed logs** dans **Game settings → Advanced** (ajoute aussi la sortie Wine sur Linux)

Si **Turn off logs** est activé dans **Settings → Advanced**, désactivez-le avant de signaler le problème.

## Signaler un bug

[Ouvrez une issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) avec :

- Système : distribution ou version Windows, bureau, GPU et pilote
- Méthode d’installation (AppImage, paquet, installateur, portable) et version, dans **Settings → About**
- Actions effectuées, résultat et résultat attendu
- Journaux ci-dessus
