---
title: "Amazon Games y Prime Gaming en Linux"
description: "Juega a Amazon Games y Prime Gaming en Linux: inicia sesión, reclama tus juegos gratis en Amazon e instálalos y ejecútalos con Proton. Paso a paso."
eyebrow: Guía de Linux
headline: "Cómo jugar a Amazon Games en Linux"
lead: "La app de Amazon no funciona en Linux. Heronite inicia sesión en Amazon y ejecuta con Proton tus Amazon Games y los juegos de Prime Gaming que reclamaste."
navLabel: Amazon Games en Linux
summary: "Inicia sesión en Amazon desde Heronite y tus juegos de Prime Gaming y de Amazon entran en tu biblioteca, listos para instalar con Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton GE-Proton-latest, su valoración Platinum de ProtonDB, el prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Revisa antes de instalar"
    text: "Cada juego muestra su valoración de ProtonDB y su estado de anti-cheat."
  - title: "Un Proton por juego"
    text: "Elige una versión de Proton distinta para cada juego."
  - title: "Busca actualizaciones solo"
    text: "Heronite busca actualizaciones de tus juegos de Amazon cada 3 horas."
  - title: "Los juegos se quedan"
    text: "Los juegos instalados siguen en el disco si cierras sesión en Amazon."
faq:
  - q: "¿Hay una app de Amazon Games para Linux?"
    a: "No, Amazon no tiene app para Linux. Heronite usa [nile](https://github.com/imLinguin/nile), una herramienta de código abierto para Amazon Games, para iniciar sesión, descargar y actualizar tus juegos."
  - q: "¿Funcionan los juegos de Prime Gaming en Linux?"
    a: "Sí, una vez que los reclamas en la web de Amazon. Actualiza tu biblioteca en Heronite y se instalan como cualquier otro juego."
  - q: "¿Necesito tener Wine instalado antes?"
    a: "No. Heronite descarga una versión de Proton cuando la necesita. Solo necesitas un controlador de Vulkan que funcione. Mira [Wine y Proton](/docs/wine-and-proton/)."
  - q: "¿Puedo jugar a juegos de Amazon en la Steam Deck?"
    a: "Sí. Inicia sesión en Amazon Games en el modo escritorio y luego juega desde el Modo Juego. La [guía de Steam Deck](/guides/steam-deck/) tiene los pasos."
  - q: "¿Puedo usar Amazon Games en Windows con Heronite?"
    a: "Sí. En Windows, Heronite muestra los juegos que instaló la app de Amazon Games, sin descargarlos otra vez. Iniciar sesión e instalar funciona igual."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione.
- Una cuenta de Amazon. Para los juegos gratis, una suscripción a Prime que incluya Prime Gaming.
- Espacio libre en disco. Los juegos se instalan en `~/Games/Heronite` por defecto.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En la Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Inicia sesión en Amazon Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Amazon Games** y luego **Iniciar sesión con Amazon Games**.
3. Inicia sesión en la página de Amazon, en la ventana que se abre.

Tus juegos de Amazon aparecen entonces en tu biblioteca, con los de Prime Gaming que reclamaste. Si la ventana de inicio de sesión no se abre, elige **Abrir en el navegador** en la misma página. Inicia sesión y pega la dirección de la página de amazon.com a la que llegas ([inicios de sesión en tiendas](/es/docs/troubleshooting/#falla-un-inicio-de-sesión-o-una-descarga-de-una-tienda)).

## Reclama tus juegos de Prime Gaming

Heronite no reclama juegos, así que reclámalos en la web de Amazon:

1. Abre la página de Prime Gaming de Amazon en tu navegador e inicia sesión.
2. Reclama los juegos que quieras.
3. En Heronite, elige **Tiendas → Amazon Games → Actualizar biblioteca**.

Los juegos nuevos aparecen entonces en tu biblioteca. Amazon decide qué ofrece Prime Gaming y lo va cambiando, así que reclama un juego mientras esté disponible. Si falta un juego reclamado, comprueba que usaste la misma cuenta de Amazon y actualiza otra vez.

## Instala y juega a un juego de Amazon

Mira primero el recuadro **En Linux** en los detalles del juego. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado de anti-cheat. Un juego Gold o Platinum suele funcionar sin cambios.

1. Selecciona el juego y pulsa <kbd>Enter</kbd>, o elige **Instalar con Amazon Games**.
2. Revisa la **Carpeta de instalación**. La **Versión de Wine** está en **Mostrar ajustes de Wine**; la de por defecto sirve para empezar.
3. Confirma. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Cuando termine, selecciona el juego y pulsa <kbd>Enter</kbd> para jugar.

## Cambia la versión de Proton

Si un juego no abre, ve a **Ajustes del juego → Compatibilidad** y elige otra versión en **Versión**. GE-Proton y Proton-CachyOS suelen traer las correcciones antes, y la [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo instalarlos. La página del juego en [ProtonDB](https://www.protondb.com) también suele tener la solución.

## Actualiza, repara o mueve un juego de Amazon

- **Actualizar:** Heronite busca actualizaciones de los juegos cada 3 horas. **Actualizar todo** en la página de Amazon Games las instala de una vez.
- **Reparar o mover:** elige **Verificar y reparar** o **Mover instalación** en las acciones del juego.

Una sola cola de descargas hace estas tareas y las desinstalaciones, y se pausa cuando estás sin conexión. Los juegos instalados se quedan en el disco si cierras sesión en Amazon. Heronite guarda tu sesión en su carpeta de datos, así que mantén esa carpeta privada ([Archivos y carpetas](/es/docs/files-and-folders/)).

## ¿Qué juegos de Amazon no funcionan en Linux?

Los juegos para un jugador rara vez tienen problemas de anti-cheat. Los juegos cuyo anti-cheat bloquea Linux no funcionan. El estado de anti-cheat del recuadro **En Linux** viene de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), y la documentación explica el [anti-cheat](/es/docs/wine-and-proton/#anticheat) con más detalle.

## Un juego de Amazon no abre en Linux

Lee su log de inicio en **Ajustes → Logs**. La [página de solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux) reúne las correcciones habituales de Wine.
