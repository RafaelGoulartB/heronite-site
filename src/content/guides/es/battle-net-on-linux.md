---
title: "Cómo instalar Battle.net en Linux (Wine y Proton)"
description: "Instala la app de Battle.net en Linux con Heronite: configura Wine por ti, inicias sesión, instalas los juegos de Blizzard y aparecen en tu Colección."
eyebrow: Guía de Linux
headline: "Cómo instalar *Battle.net* en Linux"
lead: "Heronite descarga el instalador de Battle.net, le prepara un prefijo de Wine y trae a tu Colección los juegos que instales, sin configurar Wine a mano."
navLabel: Battle.net en Linux
summary: "Instala Battle.net desde la página Tiendas, inicia sesión, instala tus juegos y juégalos desde la Colección."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con un juego abierto: su portada, el botón Jugar y un recuadro En Linux con la valoración de ProtonDB y el estado del anticheat. Los juegos instalados en Battle.net también aparecen aquí."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Un botón para instalarlo"
    text: "Elige Battle.net en la página Tiendas y Heronite lo instala con Wine, usando tu Proton por defecto."
  - title: "Su propio prefijo de Wine"
    text: "La app vive en ~/Games/Heronite/Prefixes/Battle.net, aparte de tus otros juegos."
  - title: "Inicia sesión en la página de Blizzard"
    text: "Inicias sesión dentro de Battle.net. Heronite nunca ve tu contraseña."
  - title: "Los juegos se unen a la Colección"
    text: "Lo que instalas en Battle.net aparece junto a tus otros juegos y se inicia desde ahí."
faq:
  - q: "¿Hay un Battle.net oficial para Linux?"
    a: "No. Blizzard no hace una versión para Linux, así que la app de Windows se ejecuta con Wine o Proton. Heronite lo automatiza: descarga el instalador oficial y lo instala en un prefijo de Wine propio con tu Proton por defecto."
  - q: "¿Qué juegos de Blizzard funcionan en Linux?"
    a: "Muchos funcionan bien, pero depende del juego. Mira su valoración de ProtonDB antes de instalar. Call of Duty es la excepción clara, porque su anticheat Ricochet no funciona en Linux."
  - q: "¿Funciona esto en Windows?"
    a: "No. Las páginas de Battle.net, EA app, Ubisoft Connect y Rockstar son solo para Linux en Heronite. En Windows, usa las apps de las propias tiendas."
  - q: "¿Dónde pone Heronite Battle.net?"
    a: "En un prefijo de Wine en `~/Games/Heronite/Prefixes/Battle.net`. Si quitas Battle.net de Heronite, esa carpeta y sus juegos se quedan en el disco. Consulta [Archivos y carpetas](/docs/files-and-folders/)."
  - q: "Ya uso Battle.net con Wine o Lutris. ¿Puedo conservarlo?"
    a: "Sí. Elige **Usar una instalación existente** en la página de Battle.net y apunta Heronite al prefijo de Wine que ya tienes."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

Blizzard no tiene versión de Battle.net para Linux, pero la app de Windows funciona con Wine, y muchos de sus juegos también. Heronite se encarga de la configuración. Instala la app en su propio prefijo de Wine, te deja iniciar sesión e instalar juegos como siempre y luego muestra esos juegos en tu Colección.

Al terminar esta guía tendrás Battle.net funcionando en Linux y tus juegos de Blizzard en la misma lista que el resto de tu biblioteca.

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione, además del controlador de Vulkan de 32 bits para los juegos antiguos.
- Una cuenta de Battle.net.
- Conexión a internet. Heronite descarga una versión de Proton si no tienes ninguna, y luego el instalador de Battle.net.
- Espacio libre en disco para Wine y tus juegos.

Heronite es lo único que instalas a mano. Wine y Proton vienen incluidos.

## Paso 1: Instala Heronite

Consigue el AppImage en la [página de descarga](/es/download/). Funciona en cualquier distribución:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Hay otros formatos en la [guía de instalación](/es/docs/installation/). Comprueba que Vulkan funciona con `vulkaninfo --summary`. Si no muestra tu GPU, instala primero el controlador de Vulkan de tu distribución.

## Paso 2: Instala Battle.net

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. En la lista de la izquierda, bajo **Apps de las tiendas**, elige **Battle.net**.
3. Elige **Instalar Battle.net** («Descargar su instalador e instalarlo con Wine»).

Heronite busca un Proton, descarga uno si hace falta, descarga el instalador oficial, crea el prefijo de Wine e instala Battle.net. La página muestra el progreso. Puede tardar unos minutos.

El prefijo es `~/Games/Heronite/Prefixes/Battle.net`. Cada una de estas apps de tiendas tiene su propio prefijo, así que una no puede romper a otra. Cuando termina, la página dice **Listo**.

> **Nota.** Si ya tienes Battle.net en un prefijo de Wine, elige en su lugar **Usar una instalación existente** y selecciona ese prefijo.

## Paso 3: Inicia sesión e instala juegos

1. Elige **Abrir Battle.net** («Inicia sesión e instala juegos»).
2. Inicia sesión en la ventana de Battle.net. Escribes tu contraseña allí y Heronite nunca la ve.
3. Instala un juego como lo harías en Windows.

Heronite muestra **Conectado** en su página cuando ya has iniciado sesión.

## Paso 4: Encuentra tus juegos en la Colección

Los juegos de Battle.net instalados entran solos en la Colección. Si alguno no aparece, elige **Actualizar los juegos de Battle.net** («Traer sus juegos instalados a la Colección») en la página. Puedes pulsar <kbd>Enter</kbd> sobre un juego para iniciarlo, y Heronite registra el tiempo de juego como con cualquier otro.

Para un juego que tienes pero no has instalado, la Colección ofrece **Instalar con Battle.net**, que abre la app.

Antes de instalar un juego grande, mira su recuadro **En Linux** en los detalles. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat de [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Paso 5: Cambia Wine o Proton si algo falla

Heronite usa tu Proton por defecto para Battle.net. Para cambiarlo, abre **Ajustes de Wine** en la página de Battle.net y elige otra versión. [GE-Proton y Proton-CachyOS](/es/guides/install-ge-proton/) son las que se suelen probar. También puedes abrir la carpeta del prefijo de Wine desde la misma página.

Si hay un juego en ejecución, ciérralo primero. Elige **Cerrar Battle.net** para detener la app y lo que se ejecuta en su prefijo.

## Dónde se guarda todo

Conocer las carpetas ayuda cuando quieres hacer copias de seguridad o liberar espacio:

- La app de Battle.net y los juegos que instalas en ella viven en su prefijo de Wine, `~/Games/Heronite/Prefixes/Battle.net`.
- Los datos propios de Heronite, con tu Colección y tus ajustes, están en `~/.local/share/heronite`.
- La página tiene un botón **Abrir carpeta** para el prefijo, así no tienes que escribir la ruta.

Si ya no quieres Battle.net en Heronite, elige **Quitar de Heronite**. Su prefijo de Wine y los juegos instalados en él se quedan en el disco, así que no se borra nada por accidente. Borra la carpeta tú mismo si quieres recuperar el espacio.

Los juegos de Battle.net se comportan como todos los demás de la Colección. Puedes cambiar su estado, agruparlos por tienda y verlos en tus estadísticas. Lee [Archivos y carpetas](/es/docs/files-and-folders/) para ver la lista completa de rutas.

## Qué no va a funcionar

El límite es el anticheat. La propia página de Battle.net de Heronite avisa de que Call of Duty usa el anticheat Ricochet, que no funciona en Linux. Otros juegos de Blizzard pueden comportarse distinto de un parche a otro, así que mira ProtonDB antes de instalar.

En Windows no hay página de Battle.net en Heronite. Usa allí la app de Blizzard. Consulta [Tiendas y launchers](/es/docs/stores-and-launchers/).

## Solución de problemas

- **La instalación se detiene o falla.** Comprueba tu conexión a internet y vuelve a intentarlo. Lee los logs en **Ajustes → Logs**.
- **«Vulkan no pudo iniciarse».** Suele faltar el controlador de Vulkan de 32 bits. Instálalo para tu GPU, por ejemplo `lib32-vulkan-radeon` o `mesa-vulkan-drivers:i386`.
- **Hay otro `wineserver` en ejecución.** Cierra el otro juego, o ejecuta `wineserver -k` en ese prefijo.
- **Un juego no aparece.** Usa **Actualizar los juegos de Battle.net**.
- **Battle.net o un juego se cierra con un error.** Prueba otra versión de Proton en **Ajustes de Wine**, o un prefijo nuevo.
- **Falta una DLL o .NET.** Instálalo con Winetricks. Heronite indica cuál.

Hay más en [Solución de problemas](/es/docs/troubleshooting/).

## Qué leer a continuación

- [EA app, Ubisoft Connect y Rockstar en Linux](/es/guides/ea-app-ubisoft-rockstar-on-linux/), que funcionan igual.
- [Cómo instalar GE-Proton](/es/guides/install-ge-proton/).
- [Cómo funcionan las tiendas en Heronite](/es/features/stores/).
- [Wine y Proton](/es/docs/wine-and-proton/) para ver todas las opciones de cada juego.
