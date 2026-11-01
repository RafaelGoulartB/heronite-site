---
title: "Cómo instalar GE-Proton y Proton-CachyOS en Linux"
description: "Instala GE-Proton, Proton-CachyOS y otras versiones de Proton con el Gestor de Wine de Heronite. Elige una por juego o compártelas con Steam. Sin terminal."
eyebrow: Guía de Linux
headline: "Cómo instalar *GE-Proton* y Proton-CachyOS"
lead: "El Gestor de Wine de Heronite descarga y actualiza las versiones de Proton con las que se ejecutan tus juegos. Instala una con un clic y luego elígela por juego o compártela con Steam."
navLabel: Instalar GE-Proton
summary: "Abre el Gestor de Wine, instala GE-Proton o Proton-CachyOS y elige la versión de cada juego en Ajustes del juego."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "El Gestor de Wine de Heronite: una lista de fuentes a la izquierda (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek), una lista de versiones con botones Instalar a la derecha y el interruptor Instalar Proton en Steam abajo a la izquierda."
og: /og/install-ge-proton.jpg
updated: 2026-11-01
highlights:
  - title: "Abre el Gestor de Wine"
    text: "Pulsa Ctrl+3, elige una fuente como GE-Proton y haz clic en Instalar en una versión."
  - title: "Seis fuentes"
    text: "Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM y Proton-Sarek, todas en una lista."
  - title: "Compártelas con Steam"
    text: "Activa Instalar Proton en Steam y las versiones nuevas van a compatibilitytools.d, donde Steam también puede usarlas."
  - title: "Elígela por juego"
    text: "En Ajustes del juego, Compatibilidad, elige la versión de cada juego."
faq:
  - q: "¿Cómo se instala GE-Proton en Linux?"
    a: "En Heronite, pulsa `Ctrl+3` para abrir el Gestor de Wine, elige **GE-Proton** en la lista de la izquierda y haz clic en **Instalar** en la versión que quieras. Heronite la descarga y la descomprime por ti. No hace falta copiar archivos a mano."
  - q: "¿Cuál es la diferencia entre GE-Proton y Proton-CachyOS?"
    a: "GE-Proton es una variante de Proton hecha por Glorious Eggroll. Proton-CachyOS la mantiene el equipo de CachyOS e incluye herramientas extra como DXVK-Sarek y D7VK. Las dos suelen recibir correcciones de juegos antes que el Proton de Valve, y puedes instalar ambas y cambiar por juego."
  - q: "¿Puede Steam usar las versiones que instalo en Heronite?"
    a: "Sí. Activa **Instalar Proton en Steam** en el Gestor de Wine. Las versiones nuevas se descargan entonces en la carpeta `compatibilitytools.d` de Steam, y las que ya tienes instaladas se registran allí. Steam las ve después de reiniciarse."
  - q: "¿Cómo elijo qué Proton usa un juego?"
    a: "Abre los **Ajustes del juego**, ve a **Compatibilidad** y elige una versión en el menú **Versión**. También puedes definir una versión por defecto para todos los juegos en Ajustes. Lee [Wine y Proton](/docs/wine-and-proton/) para ver las demás opciones."
  - q: "¿Funciona el Gestor de Wine en Windows?"
    a: "No. Wine y Proton son para Linux, así que el Gestor de Wine es solo para Linux. En Windows, los juegos se ejecutan de forma nativa."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

Muchos juegos de Windows en Linux funcionan mejor con una versión de Proton distinta de la predeterminada. GE-Proton y Proton-CachyOS suelen traer antes las correcciones para los lanzamientos nuevos, y son lo primero que conviene probar cuando un juego se cierra o se ve mal. El Gestor de Wine de Heronite los instala por ti.

Al terminar esta guía tendrás GE-Proton y Proton-CachyOS instalados, sabrás para qué sirven las otras versiones y podrás elegir una para cada juego, o compartirlas con Steam.

## Qué necesitas

- Heronite en Linux. El Gestor de Wine no está en Windows.
- Conexión a internet, porque las versiones se descargan de GitHub.
- Una GPU con un controlador de Vulkan que funcione.
- Algo de espacio en disco. Una versión de Proton ocupa desde unos cientos de megabytes hasta más de un gigabyte.

## Paso 1: Instala Heronite

Consigue el AppImage en la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los paquetes están listados en la [guía de instalación](/es/docs/installation/).

## Paso 2: Abre el Gestor de Wine

Pulsa <kbd>Ctrl</kbd> <kbd>3</kbd>, o ábrelo desde la paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>). La página lista seis fuentes a la izquierda. Elige una y las versiones que ofrece aparecen a la derecha, las más nuevas primero, con su fecha de publicación y su tamaño.

![El Gestor de Wine de Heronite con Proton-CachyOS seleccionado: una lista de versiones con fechas de publicación, tamaños y botones Instalar.](../../../assets/screenshots/wine-manager.webp)

*El Gestor de Wine: elige una fuente a la izquierda e instala una versión a la derecha.*

## Paso 3: Instala GE-Proton

1. Elige **GE-Proton** en la lista de la izquierda.
2. Busca la versión que quieras. **GE-Proton-latest** sigue la publicación más reciente. Una versión numerada, con un número de versión en su nombre, se queda fija, lo cual sirve cuando un juego funciona solo con una publicación.
3. Haz clic en **Instalar**.

Heronite la descarga y la descomprime, y la fila cambia a **Instalado**. Las versiones van a `~/.local/share/heronite/tools/proton`. También puedes usar el cuadro de búsqueda para encontrar una versión rápido. Si la lista está vacía, haz clic en el icono de actualizar.

> **Consejo.** Las entradas **-latest** se actualizan solas si activas **Mantener actualizadas las versiones -latest**. Heronite descarga entonces la nueva publicación en segundo plano, y nunca mientras se ejecuta un juego.

## Paso 4: Instala Proton-CachyOS

Haz lo mismo con **Proton-CachyOS**: elígelo en la lista y haz clic en **Instalar** en una versión. Proton-CachyOS incluye herramientas extra como DXVK-Sarek y D7VK. Puedes instalar varias versiones a la vez, así que conserva las dos y cambia por juego.

## Para qué sirven las otras versiones

| Fuente | Qué es |
|---|---|
| Proton-CachyOS | Una variante de Proton del equipo de CachyOS, con herramientas extra como DXVK-Sarek y D7VK |
| GE-Proton | Una variante de Proton de Glorious Eggroll, pensada para usarse con el launcher umu |
| DW-Proton | El Proton de Dawn Winery: Proton Experimental con correcciones extra para juegos |
| UMU-Proton | El Proton de Valve, empaquetado por el proyecto umu para ejecutar juegos fuera de Steam |
| Proton-EM | Proton con parches que aún se están probando, como FSR 4 y HDR. Algunas publicaciones son preliminares |
| Proton-Sarek | Proton con DXVK-Sarek, para tarjetas gráficas antiguas sin soporte de Vulkan 1.3 |

Si un juego falla con una versión, prueba otra antes de rendirte. La página del juego en [ProtonDB](https://www.protondb.com) suele nombrar la versión que funciona.

## Paso 5: Elige la versión para un juego

1. Selecciona el juego en tu Colección y abre sus **Ajustes del juego**.
2. Ve a la pestaña **Compatibilidad**.
3. En **Versión**, elige la que instalaste.

![Los Ajustes del juego de Heronite en la pestaña Compatibilidad: el menú Versión en GE-Proton-latest, con su valoración de ProtonDB y el prefijo de Wine debajo.](../../../assets/screenshots/game-settings.webp)

*Ajustes del juego → Compatibilidad: el menú Versión elige la versión para este juego.*

La misma pestaña muestra la valoración de ProtonDB del juego y la versión que recomienda, con una línea como **Recomendado** y el nombre. Tu elección se aplica solo a ese juego. También puedes definir una versión por defecto para los juegos nuevos en Ajustes. Si quitas una versión más tarde, los juegos configurados para usarla pasan a la versión por defecto.

## Paso 6: Deja que Steam use también las versiones (opcional)

Steam puede usar cualquier versión de Proton colocada en su carpeta `compatibilitytools.d`. Heronite puede ponerlas allí:

1. En el Gestor de Wine, activa **Instalar Proton en Steam**.
2. Instala versiones como en los pasos anteriores. Las nuevas se descargan en la carpeta `compatibilitytools.d` de Steam, y las que ya tienes se registran allí.
3. Reinicia Steam para que las vea.
4. En Steam, haz clic derecho en un juego, elige «Properties» (Propiedades), luego «Compatibility» (Compatibilidad), activa la opción de forzar una herramienta de compatibilidad y elige tu versión.

Heronite también encuentra las versiones de Proton que ya están en tus bibliotecas de Steam y los runners de Wine de Lutris, así que no tienes que descargarlas dos veces.

## Actualizar y quitar versiones

Junto a una versión instalada puedes usar **Actualizar** cuando hay una publicación nueva, o **Quitar**. Una confirmación te recuerda que los juegos configurados para usarla pasan a la versión por defecto. Quitar una versión que no usas libera espacio en disco.

## Solución de problemas

- **La lista está vacía.** Haz clic en el icono de actualizar. Si dice que se alcanzó el límite de GitHub, vuelve a intentarlo después del tiempo que muestra.
- **Falla una descarga.** Comprueba tu conexión y haz clic otra vez en **Instalar**.
- **Steam no muestra la versión.** Asegúrate de que **Instalar Proton en Steam** estaba activado cuando la instalaste y reinicia Steam.
- **Un juego sigue cerrándose.** Prueba otra fuente, como Proton-CachyOS o DW-Proton, o un prefijo nuevo. Heronite también sugiere soluciones a partir del log de inicio, como activar VKD3D-Proton en los juegos de DirectX 12.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits. Instálalo para tu GPU, como `lib32-vulkan-radeon` o `mesa-vulkan-drivers:i386`.
- **Un juego con anticheat no funciona.** Ninguna versión de Proton puede cambiarlo si el desarrollador no permite Linux. Consulta [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

Hay más soluciones en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [Wine y Proton en Heronite](/es/features/wine-and-proton/) para ver todas las opciones de cada juego.
- [Epic Games en Linux](/es/guides/epic-games-on-linux/) y [Heronite en Steam Deck](/es/guides/steam-deck/).
- [Wine y Proton](/es/docs/wine-and-proton/) en la documentación, con prefijos y el sandbox.
- [Variables de entorno](/es/docs/environment-variables/) para ajustes avanzados.
