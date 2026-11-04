---
title: "Lanzador de juegos para sofá, TV y Steam Deck | Heronite"
description: "Juega tu biblioteca desde el sofá con un mando. El modo consola tiene ocho diseños, siete temas y teclado en pantalla. Gratis en Linux y Windows."
eyebrow: Modo consola
headline: "Un lanzador de juegos para el sofá, la TV y la Steam Deck"
lead: "El modo consola te deja jugar toda tu biblioteca con un mando y sin ratón, en Linux y Windows. Tiene teclado en pantalla y, en Linux, un overlay dentro del juego."
navLabel: Modo consola
summary: "Un modo pensado para mandos, para el sofá o la TV, con ocho diseños, siete temas que puedes cambiar y compartir, y un overlay dentro del juego."
order: 5
hero: ../../../assets/screenshots/console-carousel.webp
heroAlt: "El modo consola de Heronite: un carrusel de los juegos en curso con Control enfocado entre Brotato y Crash Team Racing, su tienda, tiempo de juego y estado debajo, y pestañas Todos, Instalados, Favoritos y Jugando."
og: /og/console-mode.jpg
updated: 2026-11-04
highlights:
  - title: Pensado para un mando
    text: La cruceta mueve, A confirma, B vuelve y LB y RB cambian de pestaña.
  - title: Ocho diseños, siete temas
    text: Dale su propio diseño a cada una de hasta cuatro pestañas.
  - title: Comparte tu tema
    text: Envía un tema en un solo archivo que se importa en cualquier PC.
  - title: Ligero cuando está apagado
    text: Nada se carga hasta que lo activas.
faq:
  - q: ¿Heronite es una alternativa al modo Big Picture de Steam?
    a: Sí. Reúne juegos de todas las tiendas, emuladores y tus propios programas en una interfaz pensada para mandos, en Linux y Windows.
  - q: ¿El modo consola funciona con mandos de PlayStation y Nintendo?
    a: Sí. Las indicaciones de botones muestran imágenes de Xbox, PlayStation, Nintendo o Steam Deck según tu mando.
  - q: ¿El modo consola funciona con teclado?
    a: Sí. Las flechas mueven, `Enter` confirma y `Esc` vuelve. Mira [Modo consola](/docs/console-mode/#teclado).
  - q: ¿El modo consola hace que Heronite pese más?
    a: No. Es parte de la misma app nativa en Rust y solo se carga cuando lo activas.
related:
  - /guides/steam-deck/
  - /features/game-library/
  - /features/play-time-tracking/
---

## ¿Cómo activo el modo consola?

- Ábrelo desde la paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>) o el menú ☰.
- Inicia Heronite con la opción `--console`, por ejemplo en un acceso directo de Steam o en una sesión de juego.
- En **Ajustes → Modo consola**, elige desactivado, preguntar o activado para abrirlo al arrancar o al conectar un mando.

## ¿Qué hacen los botones del mando?

Las indicaciones al pie de cada página siguen a tu mando, con imágenes de los botones de Xbox, PlayStation, Nintendo o Steam Deck. Para la distribución de Nintendo, intercambia A y B en los controles del tema.

| Mando | Acción |
|---|---|
| A (sur) | Confirmar |
| B (este) | Volver |
| X, Y | Acciones que se muestran en pantalla |
| LB / RB | Cambiar de pestaña |
| Cruceta, stick izquierdo | Moverse |
| Stick derecho | Desplazarse |
| Start o Guide | Menú |

Sin mando, el teclado hace de mando:

| Tecla | Hace de |
|---|---|
| Flechas | Moverse |
| <kbd>Enter</kbd> o <kbd>Espacio</kbd> | A |
| <kbd>Esc</kbd> o <kbd>Backspace</kbd> | B |
| <kbd>X</kbd>, <kbd>Y</kbd> | X, Y |
| <kbd>Q</kbd> / <kbd>E</kbd> | LB / RB |
| <kbd>PgUp</kbd> / <kbd>PgDn</kbd> | Desplazarse |
| <kbd>M</kbd> o <kbd>F1</kbd> | Start (menú) |
| <kbd>Tab</kbd> | Select |

## ¿Cómo exploro y juego desde el sofá?

La primera pestaña suele ser **Inicio**. Muestra el juego que vas a continuar sobre su arte, con estantes como *Seguir jugando* y *Favoritos*. Pulsa A para ver su página, X para jugar e Y para buscar.

![La pestaña Biblioteca del modo consola de Heronite con una cuadrícula de carátulas, los filtros Mostrar, Ordenar, Estado y Buscar arriba, y las indicaciones de Detalles, Instalar, Buscar, Inicio y Menú abajo.](../../../assets/screenshots/console-library.webp)

*La pestaña Biblioteca muestra toda tu [Colección](/es/features/game-library/) como carátulas.*

La página de un juego tiene estas filas:

- **Jugar**, **Estado**, **Favorito**, **Ajustes del juego** y **Tiempo de juego**
- **Copia de guardados**, con [Ludusavi](/es/features/saves-and-backups/) instalado

Los detalles, como la puntuación, el desarrollador y la última partida, están a la derecha.

![La página de ELDEN RING en el modo consola de Heronite con una lista de Jugar, Estado, Favorito, Ajustes del juego, Tiempo de juego y Copia de guardados (Ludusavi), y un panel de detalles con puntuación, desarrollador, última vez jugado y características.](../../../assets/screenshots/console-game.webp)

*La página de ELDEN RING en el modo consola.*

## ¿Qué diseños y pestañas tiene el modo consola?

El modo consola tiene hasta **cuatro pestañas**, cada una con su propio diseño y sus propios juegos. Los diseños son:

- Estanterías
- Destacados
- Cine
- Panel
- Cuadrícula
- Lista
- Carrusel
- Series X

Una pestaña muestra todos los juegos, solo los instalados o solo los favoritos, o filtra por un estado, una tienda o una plataforma.

## ¿Cómo cambio el aspecto del modo consola?

Elige uno de los siete temas (**Mínima**, **Clásico**, **Cine**, **Pulse**, **Arcade**, **Central**, **Salón**). Luego cambia cualquiera de estas cosas en vivo o en **Ajustes → Modo consola**:

- Carátulas, forma y tamaño de los mosaicos
- Fondo: el arte del juego, una carátula desenfocada, capturas o una imagen tuya
- Color de acento, fuentes, tamaño de la interfaz y el reloj
- Imágenes de los botones
- El menú (barra lateral, cuadrícula, dock o riel) y las páginas de los juegos

### ¿Cómo comparto un tema?

Exporta tu tema a un archivo `.heronite-theme.json` e impórtalo en cualquier PC. La imagen de fondo va dentro del archivo. Publica el tuyo en [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions). El [formato de los temas](/es/docs/console-theme-format/) lista todos los campos, y todos son opcionales.

## ¿Puedo escribir sin teclado?

Sí. El modo consola tiene un **teclado en pantalla** y un **menú de energía**. El botón Menú abre el menú principal desde cualquier página.

## ¿Cómo inicio el modo consola desde el Modo Juego de la Steam Deck?

1. En el modo escritorio, descarga `Heronite-x86_64.AppImage` y hazlo ejecutable.
2. En Steam, elige **Add a Game** y luego **Add a Non-Steam Game**, y selecciona el AppImage.
3. En las **Properties** de Heronite, escribe `--console` en **Launch Options**.
4. Vuelve al Modo Juego e inicia Heronite desde tu biblioteca.

La [guía de la Steam Deck](/es/guides/steam-deck/) tiene cada paso en detalle.

## ¿Cómo uso el overlay dentro del juego y Replay (beta, Linux)?

Activa el overlay en **Ajustes → Overlay**. Así, el botón Guide abre un panel sobre el juego. Ajusta el volumen, el micrófono y el límite de FPS, y hace capturas y notas del diario.

| Botones | Acción |
|---|---|
| Guide | Abrir o cerrar el panel (<kbd>Super</kbd> <kbd>G</kbd> en el teclado) |
| Guide + RB | Captura de pantalla |
| Guide + ↑ / ↓ | Volumen |
| Guide + Y | Marcar un momento |
| Guide + X | Guardar el replay |

**Replay** está desactivado por defecto; actívalo en **Ajustes → Replay**. Guarda los últimos segundos de juego, grabados en la GPU por [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/).

El overlay necesita una sesión de Wayland cuyo compositor admita layer-shell, como KDE Plasma, Hyprland o Sway. No funciona en GNOME ni en X11.

Siguiente: [documentación del modo consola](/es/docs/console-mode/).
