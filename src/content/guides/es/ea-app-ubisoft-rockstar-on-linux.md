---
title: "EA app, Ubisoft Connect y Rockstar en Linux"
description: "Cómo instalar la EA app, Ubisoft Connect y el Rockstar Games Launcher en Linux con Wine y Proton, y qué juegos bloquea el anticheat."
eyebrow: Guía de Linux
headline: "EA app, Ubisoft Connect y Rockstar en Linux"
lead: "La EA app, Ubisoft Connect y Rockstar no tienen versión para Linux, pero los tres funcionan con Wine. Heronite instala cada uno desde la página Tiendas, en su propio prefijo de Wine."
navLabel: EA, Ubisoft y Rockstar en Linux
summary: "Instala cada launcher desde la página Tiendas, inicia sesión en él, instala juegos y juégalos desde la Colección."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton, su valoración de ProtonDB, la carpeta del prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Un botón para cada uno"
    text: "Elige un launcher en la página Tiendas y Heronite lo instala con Wine y tu Proton por defecto."
  - title: "Un prefijo para cada uno"
    text: "Cada launcher tiene su propia carpeta en ~/Games/Heronite/Prefixes."
  - title: "Inicia sesión dentro de la app"
    text: "Heronite nunca ve tu contraseña."
  - title: "Conoce los límites del anticheat"
    text: "Apex Legends, Rainbow Six Siege y GTA Online están bloqueados en Linux."
faq:
  - q: "¿Puedo usar la EA app en Linux?"
    a: "Sí, con Wine o Proton, pero el anticheat bloquea varios juegos de EA. Mira [¿Qué juegos bloquea el anticheat?](#qué-juegos-bloquea-el-anticheat)"
  - q: "¿Funciona Ubisoft Connect en Linux?"
    a: "Sí, como app de Windows con Wine. Revisa cada juego en [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloquea Linux."
  - q: "¿Puedo jugar a GTA V o Red Dead Redemption 2 en Linux?"
    a: "Los modos historia funcionan con el Rockstar Games Launcher. BattlEye bloquea GTA Online y Red Dead Online en Linux."
  - q: "¿Funciona esto en Windows?"
    a: "No. Estas páginas son solo para Linux en Heronite. En Windows, usa las apps de las propias tiendas."
  - q: "¿Puedo usar un launcher que ya instalé en Wine?"
    a: "Sí. Elige **Usar una instalación existente** en la página del launcher y apunta Heronite a tu prefijo de Wine."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, además del controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta de cada launcher que quieras usar.
- Conexión a internet. Heronite descarga un Proton si no tienes ninguno, y luego el instalador del launcher.
- Espacio libre en disco para cada launcher y sus juegos.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Instala el launcher

Los pasos son los mismos para los tres.

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **EA app**, **Ubisoft Connect** o **Rockstar Games Launcher**.
3. Elige **Instalar** seguido de su nombre, como **Instalar EA app**.

Heronite busca o descarga un Proton, descarga el instalador oficial, crea el prefijo de Wine e instala el launcher. Cuando termina, la página dice **Listo**.

| Launcher | Prefijo |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Nota.** Si ya usas uno de estos launchers en un prefijo de Wine, elige en su lugar **Usar una instalación existente** y apunta Heronite a ese prefijo.

## Inicia sesión e instala juegos

1. Elige **Abrir** seguido de su nombre, como **Abrir Ubisoft Connect**.
2. Inicia sesión en la ventana del launcher. Heronite nunca ve tu contraseña.
3. Instala un juego en el launcher, como lo harías en Windows.

Heronite muestra **Conectado** en su página cuando ya has iniciado sesión. Un juego que no has instalado muestra **Instalar con EA app**, **Instalar con Ubisoft Connect** o **Instalar con Rockstar Games Launcher** en la Colección. Eso abre el launcher.

## Juega desde la Colección

Los juegos instalados entran en la Colección. Si falta alguno, usa el botón de actualizar en la página del launcher. Pulsa <kbd>Enter</kbd> sobre un juego para iniciarlo.

Antes de instalar un juego grande, mira el recuadro **En Linux** en sus detalles: muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat. Gold y Platinum son las más seguras. Si dudas, instala primero un juego pequeño para probar tu configuración.

## ¿Qué juegos bloquea el anticheat?

Los juegos para un jugador y los multijugador antiguos sin anticheat a nivel de kernel son los que más probablemente funcionen. En los demás, el anticheat es el límite real. Los casos más conocidos:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends y EA SPORTS FC usan anticheats que bloquean Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloquea Linux. Algunos otros juegos necesitan una versión de Proton distinta.
- **Rockstar Games Launcher.** BattlEye bloquea GTA Online y Red Dead Online en Linux. Los modos historia funcionan.

Un juego que su desarrollador no permite en Linux no se ejecutará. El estado cambia, así que consulta [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Mira [Anticheat](/es/docs/wine-and-proton/#anticheat) para saber más.

## Cambia la versión de Proton de un launcher

Heronite usa tu Proton por defecto. Si un launcher o un juego da problemas, abre **Ajustes de Wine** en la página del launcher y elige otra versión de Proton. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son las que se suelen probar. **Abrir carpeta** en la misma página abre el prefijo.

Para detener un launcher y todo lo que se ejecuta en su prefijo, cierra cualquier juego en ejecución y elige **Cerrar** seguido del nombre del launcher.

## Quita un launcher

Elige **Quitar de Heronite** en su página. El prefijo de Wine y sus juegos se quedan en el disco, así que puedes volver a añadirlo más tarde con **Usar una instalación existente**. Borra la carpeta del prefijo para liberar el espacio.

## Un launcher no deja iniciar sesión o un juego se cierra al arrancar

- **La instalación falla.** Comprueba tu conexión y vuelve a intentarlo. Los logs están en **Ajustes → Logs**.
- **El launcher no deja iniciar sesión o se cierra con un error.** Prueba otra versión de Proton en **Ajustes de Wine**, o un prefijo nuevo.
- **Un juego se cierra al arrancar.** Lee su log de inicio en **Ajustes → Logs** y revisa ProtonDB.

Para DLL que faltan, errores de Vulkan y otras correcciones habituales, mira [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux).
