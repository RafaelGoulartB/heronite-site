---
title: "Cómo instalar Battle.net en Linux con Wine y Proton"
description: "Instala Battle.net en Linux con un solo botón: Heronite prepara Wine, inicias sesión y los juegos de Blizzard que instales se unen a tu Colección."
eyebrow: Guía de Linux
headline: "Cómo instalar Battle.net en Linux"
lead: "Blizzard no hace una versión para Linux, así que Heronite instala Battle.net de Windows con Wine desde la página Tiendas, sin configurar nada a mano."
navLabel: Battle.net en Linux
summary: "Instala Battle.net desde la página Tiendas, inicia sesión, instala tus juegos y juégalos desde la Colección."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego abierto: su portada, el botón Jugar y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat. Los juegos instalados en Battle.net también aparecen aquí."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Un botón para instalarlo"
    text: "Heronite instala Battle.net con Wine y tu Proton por defecto."
  - title: "Su propio prefijo de Wine"
    text: "Battle.net queda aparte de tus otros juegos."
  - title: "Inicia sesión dentro de Battle.net"
    text: "Heronite nunca ve tu contraseña."
  - title: "Los juegos se unen a la Colección"
    text: "Los juegos de Blizzard instalados se inician desde ahí, junto a los demás."
faq:
  - q: "¿Hay un Battle.net oficial para Linux?"
    a: "No, Blizzard no hace una versión para Linux. Heronite ejecuta la app de Windows con Wine o Proton, usando el instalador oficial."
  - q: "¿Qué juegos de Blizzard funcionan en Linux?"
    a: "Muchos, según el juego. Mira antes su valoración de ProtonDB. Call of Duty no funciona: mira [¿El anticheat bloquea algún juego de Blizzard?](#el-anticheat-bloquea-algún-juego-de-blizzard)"
  - q: "¿Funciona esto en Windows?"
    a: "No. La página de Battle.net de Heronite es solo para Linux. En Windows, usa la app de Blizzard."
  - q: "¿Dónde pone Heronite Battle.net?"
    a: "En un prefijo de Wine en `~/Games/Heronite/Prefixes/Battle.net`. Si quitas Battle.net de Heronite, esa carpeta y sus juegos se quedan en el disco."
  - q: "Ya uso Battle.net con Wine o Lutris. ¿Puedo conservarlo?"
    a: "Sí. Elige **Usar una instalación existente** en la página de Battle.net y apunta Heronite a tu prefijo de Wine."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, además del controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta de Battle.net.
- Conexión a internet. Heronite descarga una versión de Proton si no tienes ninguna, y luego el instalador de Battle.net.
- Espacio libre en disco para Wine y tus juegos.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/). Funciona en cualquier distribución:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Instala Battle.net

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **Battle.net**.
3. Elige **Instalar Battle.net**.

Heronite busca o descarga un Proton, descarga el instalador oficial, crea el prefijo `~/Games/Heronite/Prefixes/Battle.net` e instala Battle.net. Puede tardar unos minutos. Cuando termina, la página dice **Listo**.

> **Nota.** Si ya tienes Battle.net en un prefijo de Wine, elige en su lugar **Usar una instalación existente** y selecciona ese prefijo.

## Inicia sesión e instala juegos de Blizzard

1. Elige **Abrir Battle.net**.
2. Inicia sesión en la ventana de Battle.net. Escribes tu contraseña allí y Heronite nunca la ve.
3. Instala un juego como lo harías en Windows.

Heronite muestra **Conectado** en su página cuando ya has iniciado sesión.

## Juega tus juegos de Battle.net

Los juegos instalados entran en la Colección. Si falta alguno, elige **Actualizar los juegos de Battle.net** en la página de Battle.net. Pulsa <kbd>Enter</kbd> sobre un juego para iniciarlo. Heronite registra el tiempo de juego.

Un juego que no has instalado muestra **Instalar con Battle.net** en la Colección, que abre la app.

Antes de instalar un juego grande, mira su recuadro **En Linux**. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Cambia la versión de Proton de Battle.net

Heronite usa tu Proton por defecto. Para cambiarlo, abre **Ajustes de Wine** en la página de Battle.net y elige otra versión de Proton. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son las que se suelen probar. **Abrir carpeta** en la misma página abre el prefijo.

Para detener la app y todo lo que se ejecuta en su prefijo, cierra primero cualquier juego en ejecución y elige **Cerrar Battle.net**.

## Quita Battle.net de Heronite

Elige **Quitar de Heronite**. El prefijo de Wine y los juegos instalados en él se quedan en el disco. Borra tú mismo la carpeta del prefijo para recuperar el espacio. Los datos de Heronite, con tu Colección y tus ajustes, están en `~/.local/share/heronite`. Mira [Archivos y carpetas](/es/docs/files-and-folders/).

## ¿El anticheat bloquea algún juego de Blizzard?

Los juegos de Blizzard pueden cambiar de un parche a otro, así que mira ProtonDB antes de instalar. Call of Duty está bloqueado: la página de Battle.net avisa de que su anticheat Ricochet no funciona en Linux. Mira [Tiendas y launchers](/es/docs/stores-and-launchers/) para saber cómo trata Heronite estas apps de tiendas.

## Battle.net no se instala o se cierra con un error

- **La instalación se detiene o falla.** Comprueba tu conexión a internet y vuelve a intentarlo. Los logs están en **Ajustes → Logs**.
- **Battle.net o un juego se cierra con un error.** Prueba otra versión de Proton en **Ajustes de Wine**, o un prefijo nuevo.

Para DLL que faltan, errores de Vulkan y otras correcciones habituales de Wine, mira [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux).
