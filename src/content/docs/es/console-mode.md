---
title: "Modo consola: usa Heronite con mando en la tele"
navLabel: "Modo consola"
description: "El modo consola de Heronite: cómo activarlo, botones del mando y del teclado, diseños y temas, cómo compartir temas y el overlay dentro del juego en Linux."
section: Guides
order: 4
updated: 2026-11-04
---

El modo consola es un diseño pensado para el mando, para el sofá o la tele, con teclado en pantalla y un menú de Energía.

## Activa el modo consola

Ábrelo de cualquiera de estas formas:

- Elige **Modo consola** en la paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) o en el menú ☰.
- Inicia Heronite con `--console` (por ejemplo, en un acceso directo de Steam o en una sesión de juego).
- En **Ajustes → Modo consola**, haz que se abra al iniciar o cuando se conecte un mando (desactivado, preguntar o activado).

Mientras está desactivado, el modo consola no carga nada. En la Steam Deck, consulta la [guía de la Steam Deck](/es/guides/steam-deck/).

## Botones del mando

| Botón | Acción |
|---|---|
| A (sur) | Confirmar |
| B (este) | Volver |
| X, Y | Acciones que se muestran en pantalla |
| LB / RB | Cambiar de pestaña |
| Cruceta, stick izquierdo | Moverse |
| Stick derecho | Desplazarse |
| Start o Guide | Menú |

Si prefieres la disposición de Nintendo, intercambia A y B en los controles del tema. Los iconos de los botones siguen al mando (Xbox, PlayStation, Nintendo, Steam Deck) o se pueden elegir a mano.

## Teclado

| Tecla | Equivale a |
|---|---|
| Flechas | Moverse |
| <kbd>Enter</kbd> o <kbd>Espacio</kbd> | A |
| <kbd>Esc</kbd> o <kbd>Retroceso</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>RePág</kbd> / <kbd>AvPág</kbd> | Desplazarse |
| <kbd>M</kbd> o <kbd>F1</kbd> | Start (menú) |
| <kbd>Tab</kbd> | Select |

## Cambia los diseños y los temas

Cambia cada parte del modo consola, en directo desde el sofá o en **Ajustes → Modo consola**:

- Hasta cuatro pestañas, cada una con su diseño (Estanterías, Destacados, Cine, Panel, Cuadrícula, Lista, Carrusel, Series X) y sus juegos (todos, instalados, no instalados, favoritos, PC, emulados, o un estado, categoría, tienda o plataforma)
- Portadas, fondo, colores, fuentes e iconos de los botones
- El menú y las páginas de los juegos

Vienen siete temas incluidos: Mínima, Clásico, Cine, Pulse, Arcade, Central y Salón.

### Comparte un tema

En **Ajustes → Modo consola**, elige **Exportar…** para guardar un tema como archivo `.heronite-theme.json`, con la imagen de fondo dentro. En otro PC, elige **Importar…**. Comparte los tuyos en [Discusiones](https://github.com/RafaelGoulartB/Heronite/discussions) o edita el archivo a mano con el [formato de temas del modo consola](/es/docs/console-theme-format/).

## Abre el overlay dentro del juego (beta, Linux)

1. En **Ajustes → Overlay**, activa **Activar el overlay**. Viene desactivado por defecto.
2. Durante un juego abierto por Heronite, pulsa el botón Guide del mando.

El panel sobre el juego tiene volumen, micrófono, límite de FPS, capturas de pantalla y notas del diario.

| Botones | Acción |
|---|---|
| Guide | Abrir o cerrar el panel (<kbd>Super</kbd> <kbd>G</kbd> en el teclado) |
| Guide + RB | Captura de pantalla (el botón se puede cambiar) |
| Guide + ↑ / ↓ | Volumen |
| Guide + Y | Marcar un momento |
| Guide + X | Guardar el replay |

El overlay necesita una sesión de Wayland cuyo compositor admita layer-shell, así que no funciona en GNOME ni en X11. Si Steam se queda con el botón Guide, consulta [Solución de problemas](/es/docs/troubleshooting/#el-overlay-dentro-del-juego-no-funciona-linux).

**Replay** guarda los últimos segundos de juego, grabados en la GPU con [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/). Viene desactivado por defecto: actívalo en **Ajustes → Replay**.
