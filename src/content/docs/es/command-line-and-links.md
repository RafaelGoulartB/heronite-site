---
title: "Línea de comandos y enlaces heronite://"
navLabel: "Línea de comandos y enlaces"
description: "Inicia Heronite desde scripts: opciones de línea de comandos como --launch, --console y --no-gui, los ids de juego de cada tienda y los enlaces heronite://."
section: Reference
order: 2
updated: 2026-11-01
---

El programa se llama `heronite-rs` en Linux y con el instalador de Windows (`heronite-rs.exe`), y `heronite.exe` en la copia portable de Windows.

## Opciones

| Opción | Qué hace |
|---|---|
| `--launch <game>` | Inicia un juego (ver más abajo) |
| `--no-gui` | Junto con `--launch`: sin ventana; Heronite se cierra cuando termina el juego |
| `--console` | Se abre en el [Modo consola](/es/docs/console-mode/) |
| `--fullscreen` | Se abre en pantalla completa (<kbd>F11</kbd> vuelve atrás) |
| `--autostart` | Lo usa "Iniciar con el sistema"; solo entonces se aplica "Iniciar minimizado" |
| `-h`, `--help` | Muestra las opciones |

Solo se ejecuta un Heronite a la vez: si lo inicias de nuevo, la petición (como `--launch`) pasa al que ya está en marcha.

## Iniciar un juego

`--launch` recibe el id del juego en su tienda, no su nombre, y opcionalmente la herramienta de la tienda delante:

```bash
heronite-rs --launch gog_1207658930      # GOG game 1207658930
heronite-rs --launch gog 1207658930      # the same
heronite-rs --launch 1207658930          # searches every store
heronite-rs --launch legendary_Fortnite --no-gui
```

| Prefijo | Tienda |
|---|---|
| `legendary` | Epic Games |
| `gog` | GOG |
| `nile` | Amazon Games |
| `sideload` | Juegos que añadiste tú |

Los accesos directos que crea Heronite (escritorio, menú de inicio, Steam) ya llevan el comando correcto, así que esto sirve sobre todo para scripts.

## Enlaces `heronite://`

```
heronite://launch/<game>
heronite://launch/<store>/<game>
heronite://launch?appName=<game>&runner=<store>
```

La forma con parámetros también acepta:

- `arg=<value>`: un argumento para el juego (repítelo para añadir más),
- `gui=false`: inicia el juego sin mostrar la ventana de Heronite.

Los nombres con espacios se escriben con `%20` (`My%20Game`). El ajuste "Ocultar la ventana en inicios con heronite://" oculta la ventana en todos los enlaces.

**Dónde funcionan los enlaces:**

- **Instalador de Windows:** se registran para tu usuario en cada inicio.
- **Windows portable:** no se registran, así que la copia no deja rastro en el PC.
- **Linux:** los registra `scripts/install.sh` cuando compilas desde el código fuente.

El esquema antiguo `heronite-rs://` sigue funcionando.
