---
title: "Dossier de données et emplacement des fichiers Heronite"
navLabel: "Fichiers et dossiers"
description: "Où Heronite conserve données, réglages, cache, captures et journaux sur Linux et Windows, leur contenu et le fonctionnement de la version portable."
section: Reference
order: 3
updated: 2026-11-04
---

Heronite stocke tout dans des fichiers JSON simples, sans base de données.

## Où est le dossier de données ?

| | Linux | Windows | Windows portable |
|---|---|---|---|
| Données (Collection, réglages, connexions, outils, journaux) | `~/.local/share/heronite` | `%APPDATA%\heronite\data` | `<folder>\data` |
| Réglages de l’interface | `~/.config/heronite` | `%APPDATA%\heronite\config` | `<folder>\config` |
| Cache (supprimable) | `~/.cache/heronite` | `%LOCALAPPDATA%\heronite\cache` | `<folder>\cache` |
| Captures | `~/Pictures/Heronite` | `Pictures\Heronite` | `<folder>\Screenshots` |

Changez le dossier des captures dans **Settings → Screenshots**. `HERONITE_DATA_DIR` choisit un autre dossier de données (voir [Variables d’environnement](/fr/docs/environment-variables/)).

## Que contient le dossier de données ?

| Chemin | Contenu |
|---|---|
| `config.json` | Réglages globaux |
| `local_library/` | Collection : `library.json`, `sessions.json`, `statuses.json`, `metadata.json`, `journal.json`, émulateurs et dossiers de ROM |
| `local_library/art/` | Illustrations choisies |
| `GamesConfig/<game>.json` | Réglages par jeu |
| `logs/` | Journaux (voir [Dépannage](/fr/docs/troubleshooting/)) |
| `tools/bin/` | legendary, gogdl et nile |
| `tools/wine/`, `tools/proton/` | Versions Wine et Proton de Wine Manager (Linux) |
| `tools/runtimes/` | umu et environnements antitriche (Linux) |
| `legendaryConfig/`, `gog_store/`, `nile_config/` | Connexions Epic, GOG et Amazon |

Attention avant de copier ou partager ces données : les trois derniers dossiers contiennent vos connexions aux boutiques.

## Où sont stockés les jeux et préfixes Wine ? (Linux)

Un préfixe Wine est un dossier Windows séparé avec réglages et sauvegardes du jeu.

| Chemin | Contenu |
|---|---|
| `~/Games/Heronite` | Jeux installés par défaut ; chaque boutique peut utiliser un autre dossier |
| `~/Games/Heronite/Prefixes/<game>` | Préfixe de chaque jeu |
| `~/Games/Heronite/Prefixes/shared` | Préfixe partagé |
| `~/Games/Heronite/Prefixes/Battle.net` (et `EA app`, `Ubisoft Connect`, `Rockstar Games Launcher`) | Préfixes des boutiques |

## La version portable (Windows)

Avec `portable.txt` près de `heronite.exe`, tout reste dans le dossier :

```
Heronite\
├── heronite.exe
├── portable.txt
├── helpers\
│   └── heronite-epic-login.exe
├── data\
├── config\
├── cache\
└── Screenshots\
```

Supprimez `portable.txt` pour utiliser les dossiers utilisateur habituels. La version portable n’écrit pas dans le registre et n’enregistre pas les liens `heronite://`.

## Passer de Heroic à Heronite (Linux)

Au premier lancement, si `~/.config/heroic` existe, Heronite copie une fois ses connexions, réglages et jeux ajoutés manuellement vers son propre dossier. Il ne modifie jamais les fichiers Heroic.
