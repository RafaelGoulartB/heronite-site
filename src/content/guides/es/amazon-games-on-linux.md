---
title: "Amazon Games y Prime Gaming en Linux: guía paso a paso"
description: "Cómo jugar Amazon Games en Linux: inicia sesión, reclama tus juegos gratis de Prime Gaming y ejecútalos con Proton. Guía paso a paso."
eyebrow: Guía de Linux
headline: "Cómo jugar Amazon Games en Linux"
lead: "La app de Amazon no funciona en Linux. Heronite inicia sesión con nile y ejecuta con Proton tus Amazon Games y los juegos de Prime Gaming que reclamaste."
navLabel: Amazon Games en Linux
summary: "Inicia sesión en Amazon desde Heronite y tus juegos de Prime Gaming y de Amazon se unen a la Colección, listos para instalar con Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton GE-Proton-latest, su valoración Platinum de ProtonDB, el prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Inicia sesión con Amazon"
    text: "Entra tu biblioteca de Amazon y los juegos de Prime Gaming que reclamaste."
  - title: "Instala con nile"
    text: "Heronite descarga y verifica los juegos con nile, de código abierto."
  - title: "Reclama en la web de Amazon"
    text: "Actualiza la biblioteca después de reclamar un juego en Amazon."
  - title: "Funciona con Proton"
    text: "Elige otra versión de Proton para cada juego."
faq:
  - q: "¿Hay una app de Amazon Games para Linux?"
    a: "No, Amazon no hace una para Linux. Heronite usa la herramienta de código abierto [nile](https://github.com/imLinguin/nile) para iniciar sesión, descargar y actualizar tus juegos."
  - q: "¿Funcionan los juegos de Prime Gaming en Linux?"
    a: "Sí, una vez que los reclamas en la web de Amazon. Mira [Reclama tus juegos de Prime Gaming](#reclama-tus-juegos-de-prime-gaming)."
  - q: "¿Necesito tener Wine instalado antes?"
    a: "No. Heronite descarga una versión de Proton cuando la necesita. Solo necesitas un controlador de Vulkan que funcione. Mira [Wine y Proton](/docs/wine-and-proton/)."
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
- Espacio libre en disco. Heronite instala los juegos en `~/Games/Heronite` por defecto.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Inicia sesión en Amazon Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Amazon Games** y luego **Iniciar sesión con Amazon Games**.
3. Inicia sesión en la página de Amazon, en la ventana que se abre.

Tu biblioteca de Amazon aparece ahora en la Colección, con los juegos de Prime Gaming que reclamaste.

Si la ventana no se abre, elige **Abrir en el navegador** en la misma página. Inicia sesión y pega la dirección de la página de amazon.com a la que llegas. Mira [Solución de problemas](/es/docs/troubleshooting/#falla-un-inicio-de-sesión-o-una-descarga-de-una-tienda) para los inicios de sesión en las tiendas.

## Reclama tus juegos de Prime Gaming

Heronite no reclama juegos, así que reclámalos en Amazon:

1. Abre la página de Prime Gaming de Amazon en tu navegador e inicia sesión.
2. Reclama los juegos que quieras.
3. En Heronite, elige **Tiendas → Amazon Games → Actualizar biblioteca**.

Los juegos nuevos aparecen en la Colección. Amazon renueva sus ofertas, así que reclama un juego mientras esté disponible. Si falta un juego reclamado, comprueba que usaste la misma cuenta de Amazon y actualiza otra vez.

## Instala y juega un juego de Amazon

Mira primero el recuadro **En Linux** en los detalles del juego. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat. Un juego Gold o Platinum suele funcionar sin cambios.

1. Selecciona el juego y pulsa <kbd>Enter</kbd>, o elige **Instalar con Amazon Games**.
2. Revisa la **Carpeta de instalación** y la **Versión de Wine**. La opción por defecto sirve para empezar.
3. Confirma. Sigue la descarga en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Pulsa <kbd>Enter</kbd> sobre el juego instalado para jugar.

## Cambia la versión de Proton

Si un juego no arranca, abre **Ajustes del juego → Compatibilidad** y elige otra versión de Proton en **Versión**. GE-Proton y Proton-CachyOS suelen traer las correcciones antes, y la [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo instalarlos. La página del juego en [ProtonDB](https://www.protondb.com) también suele traer la solución.

## Actualiza, repara o mueve un juego de Amazon

Una sola cola gestiona actualizaciones, reparaciones, movimientos y desinstalaciones, y se pausa cuando estás sin conexión. Heronite busca actualizaciones de los juegos cada 3 horas. **Actualizar todo** en la página de Amazon Games las instala de una vez.

Los juegos instalados se quedan en el disco si cierras sesión en Amazon. Heronite guarda tu sesión en su carpeta de datos, así que mantén esa carpeta privada. Mira [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿Qué juegos de Amazon no funcionan en Linux?

- Los juegos con un anticheat que bloquea Linux no funcionan. El estado en los detalles viene de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Heronite solo muestra lo que posee tu cuenta de Amazon. Lo que ofrece Prime Gaming depende de Amazon.

## Un juego no arranca

Lee su log de inicio en **Ajustes → Logs**. La [página de solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux) lista las correcciones habituales de Wine.
