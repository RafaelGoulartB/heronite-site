---
title: "EA app, Ubisoft Connect y Rockstar en Linux"
description: "Instala la EA app, Ubisoft Connect y el Rockstar Games Launcher en Linux con Wine y Proton, y mira qué juegos bloquea el anti-cheat."
eyebrow: Guía de Linux
headline: "EA app, Ubisoft Connect y Rockstar en Linux"
lead: "La EA app, Ubisoft Connect y el Rockstar Games Launcher no tienen versión para Linux, pero los tres funcionan con Wine. Heronite instala cada uno desde su página Tiendas."
navLabel: EA, Ubisoft y Rockstar en Linux
summary: "Instala cada app de la tienda desde la página Tiendas, inicia sesión en ella, instala ahí los juegos y juégalos desde tu biblioteca de Heronite."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Los Ajustes del juego de Heronite en la pestaña Compatibilidad: la versión de Proton, su valoración de ProtonDB, la carpeta del prefijo de Wine y los botones Winecfg y Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Un botón para cada una"
    text: "Heronite descarga Proton si hace falta y luego el instalador oficial."
  - title: "Inicia sesión en la app"
    text: "Heronite nunca ve tu contraseña."
  - title: "Revisa antes de instalar"
    text: "La fila En Linux muestra la valoración de ProtonDB y el estado de anti-cheat."
  - title: "Los juegos se quedan"
    text: "Quitar una app de la tienda deja su prefijo y sus juegos en el disco."
faq:
  - q: "¿Puedo usar la EA app en Linux?"
    a: "Sí, con Wine o Proton. El anti-cheat bloquea Battlefield 6, Battlefield 2042, Apex Legends y EA SPORTS FC en Linux."
  - q: "¿Funciona Ubisoft Connect en Linux?"
    a: "Sí, como app de Windows con Wine. Revisa cada juego en [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloquea Linux."
  - q: "¿Puedo jugar a GTA V o Red Dead Redemption 2 en Linux?"
    a: "Sí, a los modos historia, con el Rockstar Games Launcher. BattlEye bloquea GTA Online y Red Dead Online en Linux."
  - q: "¿Funciona esto en Windows?"
    a: "Sí. En Windows, Heronite ejecuta cada app de la tienda directamente, sin Wine, y usa tu instalación si ya tienes una. Sus juegos aparecen en tu biblioteca y se inician a través de la app de la tienda."
  - q: "¿Puedo usar una app de la tienda que ya instalé en Wine?"
    a: "Sí. Haz clic en **Usar una instalación existente** en la página de esa app y selecciona tu prefijo de Wine."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, más el controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta en cada app de la tienda que quieras usar.
- Conexión a internet. Heronite descarga un Proton si no tienes ninguno, y luego el instalador de la app de la tienda.
- Espacio libre en disco para cada app de la tienda y sus juegos.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los demás formatos están en la [guía de instalación](/es/docs/installation/). En la Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Instala la EA app, Ubisoft Connect o el Rockstar Games Launcher

Los pasos son los mismos para las tres.

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **EA app**, **Ubisoft Connect** o **Rockstar Games Launcher**.
3. Haz clic en **Instalar** seguido de su nombre, como **Instalar EA app**.
4. Espera a que la página diga **Listo**.

Heronite busca o descarga un Proton y luego el instalador oficial. Crea un prefijo de Wine (una carpeta que funciona como un Windows solo para esa app) e instala ahí la app de la tienda:

| App de la tienda | Prefijo de Wine |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

Si ya usas una de estas apps en un prefijo de Wine, haz clic en **Usar una instalación existente** en lugar del paso 3 y selecciona ese prefijo.

## Inicia sesión, instala y juega

1. Haz clic en **Abrir** seguido de su nombre, como **Abrir Ubisoft Connect**.
2. Inicia sesión en la ventana de la app de la tienda. Heronite nunca ve tu contraseña, y su página muestra luego **Conectado**.
3. Instala un juego en la app de la tienda, como lo harías en Windows.
4. Pulsa <kbd>Enter</kbd> sobre el juego en tu biblioteca de Heronite para iniciarlo.

Antes de instalar un juego grande, mira la fila **En Linux** en los detalles del juego: muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado de anti-cheat. Gold y Platinum son las más seguras. Si dudas, instala primero un juego pequeño para probar tu configuración.

Si falta un juego instalado en tu biblioteca, haz clic en **Actualizar** bajo **Instalados** en la página de la app de la tienda. Un juego que no has instalado muestra **Instalar con EA app**, **Instalar con Ubisoft Connect** o **Instalar con Rockstar Games Launcher**, que abre la app de la tienda.

## ¿Qué juegos bloquea el anti-cheat?

Los juegos para un jugador y los multijugador antiguos sin anti-cheat a nivel de kernel son los que más probablemente funcionen. En los demás, el anti-cheat es el límite real:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends y EA SPORTS FC usan anti-cheats que bloquean Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloquea Linux.
- **Rockstar Games Launcher.** BattlEye bloquea GTA Online y Red Dead Online en Linux. Los modos historia funcionan.

Un juego cuyo desarrollador no permite Linux no funciona. El estado cambia, así que consulta [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) y la documentación sobre el [anti-cheat](/es/docs/wine-and-proton/#anticheat).

## Cambia la versión de Proton de una app de la tienda

Abre **Ajustes de Wine** en la página de la app de la tienda y elige otra versión en **Versión**, en la pestaña **Compatibilidad**. Hasta que la cambies, Heronite usa tu Proton por defecto. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son los que se suelen probar.

Para abrir el prefijo, haz clic en **Abrir carpeta** junto a **Prefijo de Wine** en la misma página. Para detener una app de la tienda y todo lo que corre en su prefijo, cierra cualquier juego abierto y haz clic en **Cerrar** seguido del nombre de la app.

## Quita una app de la tienda

Haz clic en **Quitar de Heronite** en su página. El prefijo de Wine y sus juegos se quedan en el disco, así que puedes volver a añadirla con **Usar una instalación existente**. Borra la carpeta del prefijo para liberar el espacio.

## Una app de la tienda no inicia sesión o un juego se cierra al abrir

- **La instalación falla.** Comprueba tu conexión y vuelve a intentarlo. Los logs están en **Ajustes → Logs**.
- **La app de la tienda no inicia sesión o se cierra.** Prueba otra versión en **Ajustes de Wine**, o un prefijo nuevo.
- **Un juego se cierra al abrir.** Lee su log de inicio en **Ajustes → Logs** y revisa ProtonDB.

Para DLL que faltan, errores de Vulkan y otras correcciones de Wine, mira [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-abre-linux).
