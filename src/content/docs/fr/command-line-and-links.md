---
title: "Options de ligne de commande et liens heronite://"
navLabel: "Ligne de commande et liens"
description: "Lancez Heronite depuis des scripts : options --launch, --console et --no-gui, identifiants de jeux par boutique et liens de lancement heronite://."
section: Reference
order: 2
updated: 2026-11-04
---

Lancez Heronite depuis des scripts avec des options comme `--launch`. Le programme est `heronite-rs` sur Linux, `heronite-rs.exe` avec l’installateur Windows, et `heronite.exe` dans la version portable.

## Options de ligne de commande

| Option | Effet |
|---|---|
| `--launch <game>` | Lance un jeu (ci-dessous) |
| `--no-gui` | Avec `--launch` : sans fenêtre, quitte à la fin du jeu |
| `--console` | Ouvre le [mode console](/fr/docs/console-mode/) |
| `--fullscreen` | Plein écran (<kbd>F11</kbd> pour revenir) |
| `--autostart` | Utilisé par **Start with the system** dans **Settings → General** ; **Start minimized** s’applique uniquement dans ce cas |
| `-h`, `--help` | Affiche les options |

Une seule instance fonctionne à la fois : un nouveau lancement transmet la demande (comme `--launch`) à l’instance existante.

## Lancer un jeu en ligne de commande

`--launch` attend l’identifiant du jeu dans sa boutique, pas son nom, avec éventuellement l’outil de boutique en préfixe :

```bash
heronite-rs --launch gog_1207658930      # jeu GOG 1207658930
heronite-rs --launch gog 1207658930      # équivalent
heronite-rs --launch 1207658930          # recherche toutes les boutiques
heronite-rs --launch legendary_Fortnite --no-gui
```

| Préfixe | Boutique |
|---|---|
| `legendary` | Epic Games |
| `gog` | GOG |
| `nile` | Amazon Games |
| `sideload` | Jeux ajoutés manuellement |

Les raccourcis créés par Heronite (bureau, menu Démarrer, Steam) ont déjà la bonne commande. Ces options servent surtout aux scripts.

## Lancer un jeu avec un lien `heronite://`

```
heronite://launch/<game>
heronite://launch/<store>/<game>
heronite://launch?appName=<game>&runner=<store>
```

La forme avec paramètres accepte aussi :

- `arg=<value>` : argument du jeu, répétable
- `gui=false` : sans fenêtre Heronite

Encodez les espaces en `%20` (`My%20Game`). **Hide the window for heronite:// launches** masque la fenêtre pour tous les liens. L’ancien schéma `heronite-rs://` fonctionne encore.

### Où fonctionnent les liens heronite:// ?

- **Installateur Windows :** enregistrés pour l’utilisateur à chaque lancement
- **Version portable Windows :** non enregistrés, sans trace sur le PC
- **Linux :** enregistrés par `scripts/install.sh` lors d’une compilation depuis les sources
