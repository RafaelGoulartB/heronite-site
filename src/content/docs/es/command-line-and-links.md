---
title: "Línea de comandos y enlaces heronite://"
navLabel: "Línea de comandos y enlaces"
description: "Inicia Heronite desde scripts: opciones de línea de comandos como --launch, --console y --no-gui, los ids de juego de cada tienda y enlaces heronite://."
section: Reference
order: 2
updated: 2026-11-04
---

Inicia Heronite desde scripts con opciones como `--launch`. El programa se llama `heronite-rs` en Linux y con el instalador de Windows (`heronite-rs.exe`), y `heronite.exe` en la copia portable de Windows.

## Opciones de la línea de comandos

| Opción | Qué hace |
|---|---|
| `--launch <juego>` | Inicia un juego (ver más abajo) |
| `--no-gui` | Con `--launch`: sin ventana; Heronite se cierra cuando termina el juego |
| `--console` | Abre en el [modo consola](/es/docs/console-mode/) |
| `--fullscreen` | Abre en pantalla completa (<kbd>F11</kbd> vuelve atrás) |
| `--autostart` | Lo usa **Iniciar con el sistema** en **Ajustes → General**; solo entonces se aplica **Iniciar minimizado** |
| `-h`, `--help` | Muestra las opciones |

Solo se ejecuta un Heronite a la vez: si lo abres otra vez, la petición (como `--launch`) pasa al que ya está abierto.

## Inicia un juego desde la línea de comandos

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

Los accesos directos que crea Heronite (escritorio, menú Inicio, Steam) ya llevan el comando correcto, así que esto sirve sobre todo para scripts.

## Inicia un juego con un enlace `heronite://`

```
heronite://launch/<juego>
heronite://launch/<tienda>/<juego>
heronite://launch?appName=<juego>&runner=<tienda>
```

La forma con parámetros también acepta:

- `arg=<valor>`: un argumento para el juego (repítelo para añadir más)
- `gui=false`: inicia sin mostrar la ventana de Heronite

Escribe los espacios de los nombres como `%20` (`My%20Game`). Para ocultar la ventana en todos los enlaces, activa **Ocultar la ventana en inicios con heronite://**. El esquema antiguo `heronite-rs://` sigue funcionando.

### Dónde funcionan los enlaces heronite://

- **Instalador de Windows:** se registran para tu usuario en cada inicio
- **Windows portable:** no se registran, así que la copia no deja rastro en el PC
- **Linux:** los registra `scripts/install.sh` cuando compilas desde el código fuente
