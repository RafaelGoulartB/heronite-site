---
title: "Battle.net en Linux: instálalo con Wine y Proton"
description: "Instala Battle.net en Linux con un solo botón: Heronite prepara Wine, inicias sesión y los juegos de Blizzard que instales aparecen en tu biblioteca."
eyebrow: Guía de Linux
headline: "Cómo instalar Battle.net en Linux"
lead: "Blizzard no tiene versión para Linux, así que Heronite instala el Battle.net de Windows con Wine desde su página Tiendas, sin configurar nada a mano."
navLabel: Battle.net en Linux
summary: "Instala Battle.net desde la página Tiendas, inicia sesión, instala tus juegos en él y juégalos desde tu biblioteca de Heronite."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego abierto: su portada, el botón Jugar y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat. Los juegos instalados en Battle.net también aparecen aquí."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Un botón para instalarlo"
    text: "Heronite descarga Proton si hace falta y luego el instalador oficial."
  - title: "Su propio prefijo de Wine"
    text: "Battle.net queda aparte de tus otros juegos."
  - title: "Inicia sesión en Battle.net"
    text: "Heronite nunca ve tu contraseña."
  - title: "Juega desde Heronite"
    text: "Los juegos de Blizzard instalados se inician desde Heronite y suman tiempo de juego."
faq:
  - q: "¿Hay un Battle.net oficial para Linux?"
    a: "No, Blizzard no tiene versión para Linux. Heronite ejecuta la app de la tienda de Windows con Wine o Proton, usando el instalador oficial."
  - q: "¿Qué juegos de Blizzard funcionan en Linux?"
    a: "Muchos, según el juego. Mira antes su valoración de ProtonDB. Call of Duty no funciona, porque su anti-cheat Ricochet no funciona en Linux."
  - q: "¿Funciona esto en Windows?"
    a: "Sí. En Windows, Heronite ejecuta Battle.net directamente, sin Wine, y usa tu instalación si ya tienes una. Sus juegos aparecen en tu biblioteca y se inician a través de Battle.net."
  - q: "¿Dónde pone Heronite Battle.net?"
    a: "En un prefijo de Wine en `~/Games/Heronite/Prefixes/Battle.net`. Si quitas Battle.net de Heronite, esa carpeta y sus juegos se quedan en el disco."
  - q: "Ya uso Battle.net con Wine o Lutris. ¿Puedo conservarlo?"
    a: "Sí. Haz clic en **Usar una instalación existente** en la página de Battle.net y selecciona tu prefijo de Wine."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, más el controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta de Battle.net.
- Conexión a internet. Heronite descarga una versión de Proton si no tienes ninguna, y luego el instalador de Battle.net.
- Espacio libre en disco para Wine y tus juegos.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/). Funciona en cualquier distribución:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En la Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Instala Battle.net

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **Battle.net**.
3. Haz clic en **Instalar Battle.net**.
4. Espera a que la página diga **Listo**. Puede tardar unos minutos.

Heronite busca o descarga un Proton y luego el instalador oficial. Crea el prefijo de Wine (una carpeta que funciona como un Windows solo para esa app) `~/Games/Heronite/Prefixes/Battle.net` e instala Battle.net ahí. Si ya tienes Battle.net en un prefijo de Wine, haz clic en **Usar una instalación existente** en lugar del paso 3 y selecciona ese prefijo.

## Inicia sesión, instala y juega a juegos de Blizzard

1. Haz clic en **Abrir Battle.net**.
2. Inicia sesión en la ventana de Battle.net. Heronite nunca ve tu contraseña, y su página muestra luego **Conectado**.
3. Instala un juego en Battle.net, como lo harías en Windows.
4. Pulsa <kbd>Enter</kbd> sobre el juego en tu biblioteca de Heronite para iniciarlo. Heronite registra el tiempo de juego.

Antes de instalar un juego grande, mira su recuadro **En Linux** en Heronite. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado de anti-cheat de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

Si falta un juego instalado en tu biblioteca, haz clic en **Actualizar** bajo **Instalados** en la página de Battle.net. Un juego que no has instalado muestra **Instalar con Battle.net**, que abre la app de la tienda.

## Cambia la versión de Proton de Battle.net

Abre **Ajustes de Wine** en la página de Battle.net y elige otra versión en **Versión**, en la pestaña **Compatibilidad**. Hasta que la cambies, Heronite usa tu Proton por defecto. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son los que se suelen probar.

Para abrir el prefijo, haz clic en **Abrir carpeta** junto a **Prefijo de Wine** en la misma página. Para detener la app de la tienda y todo lo que corre en su prefijo, cierra antes cualquier juego abierto y haz clic en **Cerrar Battle.net**.

## Quita Battle.net de Heronite

Haz clic en **Quitar de Heronite** en la página de Battle.net. El prefijo de Wine y los juegos instalados en él se quedan en el disco. Borra tú la carpeta del prefijo para recuperar el espacio ([Archivos y carpetas](/es/docs/files-and-folders/)).

## ¿El anti-cheat bloquea algún juego de Blizzard?

Sí, Call of Duty. La página de Battle.net avisa de que su anti-cheat Ricochet no funciona en Linux. Los demás juegos de Blizzard pueden cambiar de un parche a otro, así que mira ProtonDB antes de instalar.

## Battle.net no se instala o se cierra

- **La instalación se detiene o falla.** Comprueba tu conexión a internet y vuelve a intentarlo. Los logs están en **Ajustes → Logs**.
- **Battle.net o un juego se cierra.** Prueba otra versión en **Ajustes de Wine**, o un prefijo nuevo.

Para DLL que faltan, errores de Vulkan y otras correcciones de Wine, mira [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux).
