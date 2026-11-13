---
title: "Variables d’environnement Heronite (HERONITE_*)"
navLabel: "Variables d’environnement"
description: "Variables HERONITE_* : changer les dossiers, indiquer Steam, désactiver mises à jour, icône de notification, manette ou animations, et utiliser vos outils."
section: Reference
order: 4
updated: 2026-11-04
---

Définissez ces variables avant de lancer Heronite. Un interrupteur `HERONITE_*` est actif pour toute valeur autre que vide ou `0`.

## Changer les dossiers et le détail des journaux

| Variable | Effet |
|---|---|
| `HERONITE_DATA_DIR=<folder>` | Autre dossier de données pour une Collection séparée. Configuration et cache à côté, dans `<folder>.heronite/`. |
| `HERONITE_LOG_DIR=<folder>` | Autre dossier pour les journaux |
| `HERONITE_STEAM_DIR=<folder>` | Emplacement Steam si non détecté |
| `RUST_LOG=debug` | Journaux détaillés (`trace` pour tout) |

## Désactiver des fonctions

| Variable | Effet |
|---|---|
| `HERONITE_NO_UPDATE_CHECK` | Pas de recherche automatique de mises à jour |
| `HERONITE_NO_TRAY` | Pas d’icône dans la zone de notification |
| `HERONITE_NO_GAMEPAD` | Pas de manette en mode console |
| `HERONITE_NO_ANIMATIONS` | Pas d’animations |
| `HERONITE_NO_SINGLE_INSTANCE` | Plusieurs instances autorisées |
| `HERONITE_NO_ONBOARDING` | Ignore la configuration du premier lancement |
| `HERONITE_DISABLE_IDLE_JOBS` | Pas de tâches de fond au repos |
| `HERONITE_DISABLE_TOOLS_UPDATE` | Pas d’actualisation de DXVK, Winetricks et umu en arrière-plan |
| `HERONITE_WINE_OFFLINE` | Pas de réseau pour Wine Manager (Linux) |

## Utiliser vos propres legendary, gogdl ou nile

Heronite télécharge ces outils. Pour vos propres copies :

| Variable | Effet |
|---|---|
| `HERONITE_LEGENDARY_BIN=<path>` | Chemin de legendary (Epic) |
| `HERONITE_GOGDL_BIN=<path>` | Chemin de gogdl (GOG) |
| `HERONITE_NILE_BIN=<path>` | Chemin de nile (Amazon Games) |

## Variables fournies aux scripts des jeux

Les scripts avant et après le jeu et les programmes lancés en parallèle reçoivent :

| Variable | Valeur |
|---|---|
| `HERONITE_GAME_TITLE` | Nom du jeu |
| `HERONITE_GAME_APP_NAME` | Identifiant |
| `HERONITE_GAME_RUNNER` | Boutique (`legendary`, `gog`, `nile`, `sideload`, …) |
| `HERONITE_GAME_PLATFORM` | Plateforme |
| `HERONITE_GAME_EXEC` | Programme lancé |
| `HERONITE_GAME_PREFIX` | Préfixe Wine (Linux) |
| `HERONITE_GAME_SCRIPT_TYPE` | Type de script (before ou after) |

Les mêmes valeurs sont fournies en `HEROIC_GAME_*` pour les scripts Heroic existants. Dans le [bac à sable](/fr/docs/wine-and-proton/#bac-à-sable), Heronite définit aussi `HERONITE_SANDBOX`.
