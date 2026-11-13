---
title: "Installer Heronite sur Linux et Windows"
navLabel: "Installation"
description: "Installez Heronite sur Windows 10 et 11 ou Linux : programme d’installation, zip portable, AppImage, paquets .deb, .rpm et Arch, mises à jour et suppression."
section: Start
order: 1
updated: 2026-11-04
---

Chaque [version](https://github.com/RafaelGoulartB/Heronite/releases/latest) propose des paquets Linux et Windows, tous en 64 bits (x86_64).

## Installer sur Windows

Windows 10 et 11 sont pris en charge.

| Fichier | Description |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recommandé**) | Installation pour votre utilisateur dans `%LOCALAPPDATA%\Programs\Heronite`, sans droits administrateur. |
| `Heronite-Portable-x86_64.zip` | Version portable : tout reste dans un dossier. |

Si SmartScreen affiche une alerte, choisissez **Informations complémentaires**, puis **Exécuter quand même**. Le code des fichiers Windows n’est pas encore signé.

La fenêtre de connexion Epic Games, GOG et Amazon nécessite Microsoft Edge WebView2 Runtime. Windows 11 l’inclut ; sur Windows 10, [installez-le depuis Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) si demandé.

### Créer une version portable sur Windows

1. Téléchargez `Heronite-Portable-x86_64.zip`.
2. Extrayez-le dans un dossier ou sur une clé USB.
3. Lancez `Heronite\heronite.exe`.

Le dossier contient programme, bibliothèque, réglages, caches et captures. Déplacez-le vers un autre PC ou une clé USB : il continue de fonctionner. La version portable n’écrit pas dans le registre et n’enregistre pas les liens `heronite://`.

Le fichier `portable.txt` près de `heronite.exe` active ce mode. Supprimez-le pour utiliser les dossiers utilisateur habituels (voir [Fichiers et dossiers](/fr/docs/files-and-folders/)).

## Installer sur Linux

| Système | Fichier | Installation |
|---|---|---|
| Toute distribution (**recommandé**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

Installez d’abord un pilote Vulkan fonctionnel : Mesa pour AMD et Intel, propriétaire pour NVIDIA. Heronite affiche sa fenêtre avec Vulkan. Les paquets installent le programme sous le nom `heronite-rs`.

### Outils facultatifs pour les fonctions supplémentaires

Chaque outil active une fonction ; Heronite fonctionne sans eux.

| Outil | Fonction |
|---|---|
| `bubblewrap` (`bwrap`) | Bac à sable pour les jeux non fiables |
| `gamescope` | Option gamescope dans **Game settings → Compatibility** |
| `umu-launcher` | Lancement via umu (Heronite télécharge sa copie si absent) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (paquet système ou application Flathub) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Copies de sauvegarde après chaque session |
| `python3` | Téléchargements GOG via gogdl |
| WebKitGTK 4.1 | Fenêtre de connexion aux boutiques ; sinon, utilisez le navigateur |

## Mettre à jour Heronite

Heronite vérifie GitHub peu après son lancement, puis toutes les 6 heures. Il vérifie chaque téléchargement avec la clé de signature minisign de la version.

- **AppImage :** télécharge la nouvelle version à côté de l’ancienne et la remplace pour le prochain démarrage. Gardez-la dans un dossier accessible en écriture, comme `~/Applications`.
- **Paquets .deb, .rpm et Arch :** télécharge le paquet signé et l’installe via `pkexec`, qui demande votre mot de passe.
- **Installation Windows :** lance silencieusement le nouveau programme d’installation à la fermeture.
- **Version portable Windows :** remplace les programmes sur place et garde les anciens en `.old` jusqu’au prochain démarrage.

Dans **Settings → About**, désactivez **Check for updates automatically**, ou activez **Install updates automatically** (désactivé par défaut). `HERONITE_NO_UPDATE_CHECK=1` désactive aussi les vérifications.

## Désinstaller Heronite

- **Installation Windows :** **Paramètres → Applications → Applications installées → Heronite → Désinstaller**.
- **Version portable Windows :** supprimez le dossier.
- **Paquets Linux :** `sudo apt remove heronite`, `sudo dnf remove heronite` ou `sudo pacman -R heronite`.
- **AppImage :** supprimez le fichier.

La bibliothèque, les réglages et les jeux sont conservés. Pour les supprimer aussi, voir [Fichiers et dossiers](/fr/docs/files-and-folders/). Les jeux installés sur Linux sont dans `~/Games/Heronite`, sauf choix d’un autre dossier.

## Compiler Heronite depuis les sources

Il faut Rust stable. Sur Linux : `clang`, `lld`, pilote Vulkan et GTK/WebKitGTK. Sur Windows : Visual Studio Build Tools (« Développement Desktop en C++ »).

```bash
# compilation rapide (la fenêtre de connexion est un binaire séparé, à compiler aussi)
cargo build --profile quick -p heronite-epic-login && cargo run --profile quick -p heronite
```

Pour les versions de production et l’installateur Windows, voir [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) et [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
