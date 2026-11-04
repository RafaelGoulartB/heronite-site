---
title: "Cómo instalar GE-Proton y Proton-CachyOS en Linux"
description: "Instala GE-Proton, Proton-CachyOS y otras versiones de Proton en Linux con el Gestor de Wine de Heronite. Elige una por juego o compártela con Steam."
eyebrow: Guía de Linux
headline: "Cómo instalar GE-Proton y Proton-CachyOS"
lead: "Instala GE-Proton en Linux con un clic desde el Gestor de Wine, y luego elígelo por juego o compártelo con Steam."
navLabel: Instalar GE-Proton
summary: "Abre el Gestor de Wine, instala GE-Proton o Proton-CachyOS y elige la versión de cada juego en Ajustes del juego."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "El Gestor de Wine de Heronite: una lista de fuentes a la izquierda (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek), una lista de versiones con botones Instalar a la derecha y el interruptor Instalar Proton en Steam abajo a la izquierda."
og: /og/install-ge-proton.jpg
updated: 2026-11-04
highlights:
  - title: "Abre el Gestor de Wine"
    text: "Pulsa Ctrl+3, elige una fuente como GE-Proton y haz clic en Instalar en una versión."
  - title: "Seis fuentes"
    text: "Elige entre seis fuentes de Proton en una sola lista."
  - title: "Compártelas con Steam"
    text: "Activa Instalar Proton en Steam y Steam también podrá usar las versiones nuevas."
  - title: "Elígela por juego"
    text: "Elige la versión de cada juego en Ajustes del juego → Compatibilidad."
faq:
  - q: "¿Cuál es la diferencia entre GE-Proton y Proton-CachyOS?"
    a: "Vienen de equipos distintos: Glorious Eggroll hace GE-Proton y el equipo de CachyOS hace Proton-CachyOS. Las dos suelen recibir correcciones antes que el Proton de Valve."
  - q: "¿Usa Heronite las versiones de Proton que ya tengo?"
    a: "Sí. Heronite encuentra las versiones de Proton de tus bibliotecas de Steam y de los runners de Wine de Lutris, así que no las descargas dos veces."
  - q: "¿Dónde instala Heronite las versiones de Proton?"
    a: "En `~/.local/share/heronite/tools/proton`. Con **Instalar Proton en Steam** activado, las versiones nuevas van a la carpeta `compatibilitytools.d` de Steam."
  - q: "¿Funciona el Gestor de Wine en Windows?"
    a: "No. El Gestor de Wine es solo para Linux. En Windows, los juegos funcionan de forma nativa."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

GE-Proton y Proton-CachyOS suelen traer antes las correcciones para los juegos nuevos, así que pruébalos cuando un juego se cierre.

## Qué necesitas

- Heronite en Linux ([guía de instalación](/es/docs/installation/)). En Steam Deck, configura primero Heronite con la [guía de Steam Deck](/es/guides/steam-deck/).
- Conexión a internet. Las versiones se descargan de GitHub.
- Espacio en disco. Una versión de Proton ocupa desde unos cientos de megabytes hasta más de un gigabyte.

## Instala GE-Proton en el Gestor de Wine

1. Pulsa <kbd>Ctrl</kbd> <kbd>3</kbd> para abrir el Gestor de Wine, o ábrelo desde la paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>).
2. Elige **GE-Proton** en la lista de la izquierda. Sus versiones aparecen a la derecha, las más nuevas primero, con fecha de publicación y tamaño.
3. Busca la versión que quieras, o escribe un número de versión en el cuadro de búsqueda. **GE-Proton-latest** sigue la publicación más reciente. Una versión numerada se queda fija, y eso sirve cuando un juego solo funciona con una publicación.
4. Haz clic en **Instalar**. La fila cambia a **Instalado**.

![El Gestor de Wine de Heronite con Proton-CachyOS seleccionado: una lista de versiones con fechas de publicación, tamaños y botones Instalar.](../../../assets/screenshots/wine-manager.webp)

Las versiones van a `~/.local/share/heronite/tools/proton`. Para mantener al día las entradas **-latest**, activa **Mantener actualizadas las versiones -latest**. Heronite las actualiza entonces en segundo plano, nunca mientras un juego está abierto.

## Instala Proton-CachyOS

1. En el Gestor de Wine, elige **Proton-CachyOS** en la lista de la izquierda.
2. Haz clic en **Instalar** en una versión.

Las versiones se instalan una junto a otra, así que puedes tener GE-Proton y Proton-CachyOS y cambiar por juego.

## ¿Para qué sirven las otras versiones de Proton?

| Fuente | Qué es |
|---|---|
| Proton-CachyOS | Una variante de Proton del equipo de CachyOS, con herramientas extra como DXVK-Sarek y D7VK |
| GE-Proton | Una variante de Proton de Glorious Eggroll, pensada para usarse con el launcher umu |
| DW-Proton | El Proton de Dawn Winery: Proton Experimental con correcciones extra para juegos |
| UMU-Proton | El Proton de Valve, empaquetado por el proyecto umu para ejecutar juegos fuera de Steam |
| Proton-EM | Proton con parches que aún se están probando, como FSR 4 y HDR. Algunas publicaciones son preliminares |
| Proton-Sarek | Proton con DXVK-Sarek, para tarjetas gráficas antiguas sin soporte de Vulkan 1.3 |

[ProtonDB](https://www.protondb.com) suele nombrar la versión que funciona con un juego.

## Elige una versión en Ajustes del juego

1. Selecciona el juego en tu biblioteca y abre sus **Ajustes del juego**.
2. Abre la pestaña **Compatibilidad**.
3. En **Versión**, elige la que instalaste.

![Los Ajustes del juego de Heronite en la pestaña Compatibilidad: el menú Versión en GE-Proton-latest, con su valoración de ProtonDB y el prefijo de Wine debajo.](../../../assets/screenshots/game-settings.webp)

La misma pestaña muestra la valoración de ProtonDB del juego y una versión **Recomendado**. Tu elección se aplica solo a ese juego. Para elegir la versión de los juegos nuevos, elige una en **Versión**, en **Ajustes → Valores por defecto → Compatibilidad**. Más en [Wine y Proton](/es/docs/wine-and-proton/).

## Comparte las versiones con Steam (opcional)

Heronite puede poner versiones en la carpeta `compatibilitytools.d` de Steam, donde Steam puede usarlas:

1. En el Gestor de Wine, activa **Instalar Proton en Steam**.
2. Instala versiones como arriba. Las nuevas se descargan en `compatibilitytools.d`, y Heronite registra las que ya tienes allí.
3. Reinicia Steam para que las vea.
4. En Steam, haz clic derecho en un juego y elige **Properties** (Propiedades), luego **Compatibility** (Compatibilidad).
5. Activa la opción de forzar una herramienta de compatibilidad y elige tu versión.

## Actualiza y quita versiones

En el Gestor de Wine, haz clic en **Actualizar** junto a una versión instalada cuando haya una publicación nueva. Haz clic en **Quitar** para borrar una versión. Los juegos configurados con una versión quitada vuelven a la versión por defecto.

## Una versión no se instala, no aparece o no arregla el juego

- **La lista está vacía.** Haz clic en el icono de actualizar. Si dice que se alcanzó el límite de GitHub, vuelve a intentarlo después del tiempo que muestra.
- **Falla una descarga.** Comprueba tu conexión y haz clic otra vez en **Instalar**.
- **Steam no muestra la versión.** Asegúrate de que **Instalar Proton en Steam** estaba activado cuando la instalaste y reinicia Steam.
- **Un juego sigue cerrándose.** Prueba otra fuente, como Proton-CachyOS o DW-Proton, o un prefijo nuevo.

Para errores de Vulkan y otras soluciones habituales, mira [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux). Si un juego tiene un anti-cheat que bloquea Linux, ninguna versión de Proton puede ayudar: mira [Anti-cheat](/es/docs/wine-and-proton/#anticheat).
