---
title: "EA app, Ubisoft Connect y Rockstar en Linux (Wine)"
description: "Instala la EA app, Ubisoft Connect y el Rockstar Games Launcher en Linux con Heronite. Cada uno usa su prefijo de Wine y sus juegos se unen a tu Colección."
eyebrow: Guía de Linux
headline: "*EA app*, *Ubisoft Connect* y *Rockstar* en Linux"
lead: "Heronite instala cada uno de estos launchers en su propio prefijo de Wine y muestra en tu Colección los juegos que instales. Así se configuran y esto es lo que bloquea el anticheat."
navLabel: EA, Ubisoft y Rockstar en Linux
summary: "Instala cada launcher desde la página Tiendas, inicia sesión en él, instala juegos y juégalos desde la Colección."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton, su valoración de ProtonDB, la carpeta del prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Un botón para cada uno"
    text: "En la página Tiendas, elige el launcher e Instalar. Heronite lo instala con Wine y tu Proton por defecto."
  - title: "Un prefijo para cada uno"
    text: "Cada launcher tiene su propia carpeta en ~/Games/Heronite/Prefixes, así que no se rompen entre sí."
  - title: "Inicia sesión dentro de la app"
    text: "Inicias sesión en el propio launcher. Heronite nunca ve tu contraseña."
  - title: "Conoce los límites del anticheat"
    text: "Algunos juegos, como Apex Legends, Rainbow Six Siege y GTA Online, están bloqueados en Linux."
faq:
  - q: "¿Puedo usar la EA app en Linux?"
    a: "Sí, con Wine o Proton. Heronite descarga el instalador oficial e instala la EA app en un prefijo de Wine propio. Muchos juegos de EA funcionan, pero Battlefield 6, Battlefield 2042, Apex Legends y EA SPORTS FC usan anticheats que bloquean Linux."
  - q: "¿Funciona Ubisoft Connect en Linux?"
    a: "Sí, como app de Windows con Wine. Los juegos de Ubisoft varían mucho, así que revisa cada uno en [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloquea Linux, y algunos juegos necesitan otra versión de Proton, que cambias en los ajustes de Wine del juego."
  - q: "¿Puedo jugar a GTA V o Red Dead Redemption 2 en Linux?"
    a: "GTA Online y Red Dead Online están bloqueados por BattlEye en Linux. Los modos historia funcionan con el Rockstar Games Launcher. Mira la página de ProtonDB del juego para saber qué tan bien funciona cada uno."
  - q: "¿Funciona esto en Windows?"
    a: "No. Las páginas de la EA app, Ubisoft Connect y Rockstar son solo para Linux en Heronite. En Windows, usa las apps de las propias tiendas."
  - q: "¿Puedo usar un launcher que ya instalé en Wine?"
    a: "Sí. Elige **Usar una instalación existente** en la página del launcher y apunta Heronite al prefijo de Wine que ya tienes."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

La EA app, Ubisoft Connect y el Rockstar Games Launcher son programas de Windows y ninguno tiene versión para Linux. Sí funcionan con Wine, y Heronite se encarga de la configuración. Cada uno tiene su propio prefijo de Wine, y los juegos que instalas en él aparecen en tu Colección junto a todo lo demás.

Esta guía cubre los tres, porque los pasos son los mismos. También lista lo que bloquea el anticheat, para que no instales un juego que no puede funcionar.

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, además del controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta de cada launcher que quieras usar.
- Conexión a internet. Heronite descarga una versión de Proton si no tienes ninguna, y luego el instalador del launcher.
- Espacio libre en disco. Cada launcher y sus juegos ocupan bastante.

## Paso 1: Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Hay otros formatos en la [guía de instalación](/es/docs/installation/). Comprueba que `vulkaninfo --summary` muestra tu GPU. Si no, instala primero el controlador de Vulkan de tu distribución.

## Paso 2: Instala el launcher

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **EA app**, **Ubisoft Connect** o **Rockstar Games Launcher**.
3. Elige **Instalar** seguido de su nombre, como **Instalar EA app** («Descargar su instalador e instalarlo con Wine»).

Heronite busca o descarga un Proton, descarga el instalador oficial, crea el prefijo de Wine e instala el launcher. La página muestra el progreso. Puede tardar unos minutos. Cuando termina, la página dice **Listo**.

Cada launcher vive en su propio prefijo:

| Launcher | Prefijo |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Nota.** Si ya usas uno de estos launchers en un prefijo de Wine, elige en su lugar **Usar una instalación existente** y apunta Heronite a ese prefijo.

## Paso 3: Inicia sesión e instala juegos

1. Elige **Abrir** seguido de su nombre, como **Abrir Ubisoft Connect** («Inicia sesión e instala juegos»).
2. Inicia sesión en la ventana del propio launcher. Heronite nunca ve tu contraseña.
3. Instala un juego en el launcher, como lo harías en Windows.

Heronite muestra **Conectado** en su página cuando ya has iniciado sesión. Los juegos que tienes pero no has instalado aparecen en la Colección con un botón de instalar que abre el launcher, como **Instalar con EA app**, **Instalar con Ubisoft Connect** o **Instalar con Rockstar Games Launcher**.

## Paso 4: Juega desde la Colección

Los juegos instalados entran solos en la Colección. Si falta alguno, usa el botón de actualizar en la página del launcher para traer sus juegos instalados. Pulsa <kbd>Enter</kbd> sobre un juego para iniciarlo. Heronite registra el tiempo de juego como con cualquier juego.

Antes de instalar un juego grande, revisa el recuadro **En Linux** en sus detalles. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Qué bloquea el anticheat

Este es el límite real con estos launchers. Las propias páginas de Heronite para ellos avisan de los casos más conocidos:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends y EA SPORTS FC usan anticheats que bloquean Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloquea Linux. Algunos otros juegos necesitan una versión de Proton distinta.
- **Rockstar Games Launcher.** GTA Online y Red Dead Online están bloqueados por BattlEye en Linux. Los modos historia funcionan.

Un juego que el desarrollador no permite en Linux no se ejecutará, pruebes el Proton que pruebes. Los juegos para un jugador son la apuesta segura. El estado del anticheat puede cambiar, así que consulta el estado actual en [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Cambiar Wine o Proton de un launcher

Heronite usa tu Proton por defecto. Si un launcher o un juego da problemas, abre **Ajustes de Wine** en la página del launcher y elige otra versión. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son las que se suelen probar. Puedes abrir la carpeta del prefijo de Wine desde la misma página.

Elige **Cerrar** seguido del nombre del launcher para detenerlo y lo que se ejecuta en su prefijo. Si hay un juego en ejecución, ciérralo primero.

## Qué juegos probar primero

Empieza por los juegos para un jugador y los multijugador antiguos sin anticheat a nivel de kernel. Son los que más probablemente funcionen bien. Mira tres cosas antes de instalar:

1. La valoración de ProtonDB en los detalles. Gold y Platinum son las más seguras.
2. El estado del anticheat. No vale la pena descargar un juego que el desarrollador no permite en Linux.
3. El espacio en disco. Estos juegos suelen ser grandes, y Wine necesita espacio además.

Si dudas, instala primero un juego pequeño. Así compruebas que el launcher, el prefijo de Wine y tus controladores funcionan, antes de comprometerte con una descarga de 100 GB.

## Quitar un launcher

Si dejas de usar uno, elige **Quitar de Heronite** en su página. Su prefijo de Wine y los juegos instalados en él se quedan en el disco, así que puedes volver a añadirlo más tarde con **Usar una instalación existente**. Borra tú mismo la carpeta del prefijo para liberar el espacio.

## Solución de problemas

- **La instalación falla.** Comprueba tu conexión y vuelve a intentarlo. Los logs están en **Ajustes → Logs**.
- **El launcher se abre pero no deja iniciar sesión o se cierra con un error.** Prueba otra versión de Proton en **Ajustes de Wine**, o un prefijo nuevo.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits. Instálalo para tu GPU, por ejemplo `lib32-vulkan-radeon` o `mesa-vulkan-drivers:i386`.
- **Hay otro `wineserver` en ejecución.** Cierra el otro juego o ejecuta `wineserver -k` en ese prefijo.
- **Falta una DLL o .NET.** Instálalo con Winetricks. Heronite indica cuál.
- **Un juego no aparece.** Usa el botón de actualizar en la página del launcher.
- **Un juego se cierra al arrancar.** Lee su log de inicio en **Ajustes → Logs** y revisa ProtonDB.

Hay más ayuda en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [Battle.net en Linux](/es/guides/battle-net-on-linux/), que funciona igual.
- [Cómo instalar GE-Proton](/es/guides/install-ge-proton/), las versiones que arreglan más juegos.
- [Cómo funcionan las tiendas en Heronite](/es/features/stores/).
- [Tiendas y launchers](/es/docs/stores-and-launchers/) en la documentación.
