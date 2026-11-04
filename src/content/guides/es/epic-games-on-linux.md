---
title: "Juegos de Epic en Linux: tu biblioteca y los gratis"
description: "Cómo jugar juegos de Epic en Linux sin el launcher oficial: inicia sesión, reclama los gratis de la semana, instala con Proton y revisa el anticheat."
eyebrow: Guía de Linux
headline: "Cómo jugar juegos de Epic Games en Linux"
lead: "Epic no hace un launcher para Linux. Heronite inicia sesión con legendary y ejecuta tus juegos de Epic con Proton, sin configurar Wine."
navLabel: Epic Games en Linux
summary: "Inicia sesión en Epic desde Heronite, instala tus juegos con Proton y revisa la compatibilidad con el anticheat antes de descargar."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "La Colección de Heronite con ELDEN RING abierto: su botón Jugar y, debajo, el recuadro En Linux con la valoración Gold de ProtonDB y el estado del anticheat EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Inicia sesión una vez"
    text: "Toda tu biblioteca de Epic aparece tras un solo inicio de sesión."
  - title: "Con los juegos gratis"
    text: "Los juegos gratis que reclamaste se instalan como cualquier otro."
  - title: "Proton por defecto"
    text: "Heronite elige una versión de Proton y puedes cambiarla en cada juego."
  - title: "Mira antes de instalar"
    text: "Cada juego muestra su valoración de ProtonDB y el estado del anticheat."
faq:
  - q: "¿Hay un Epic Games Launcher para Linux?"
    a: "No, Epic no hace un launcher para Linux. Heronite usa la herramienta de código abierto [legendary](https://github.com/derrod/legendary) para iniciar sesión, instalar, actualizar y jugar."
  - q: "¿Se puede jugar a Fortnite en Linux?"
    a: "No. Su desarrollador no ha activado el soporte de Linux en el anticheat. Mira [qué juegos de Epic bloquea el anticheat](#qué-juegos-de-epic-bloquea-el-anticheat)."
  - q: "¿Funcionan en Linux los juegos gratis semanales de Epic?"
    a: "Sí, una vez que los reclamas en la web de Epic. Mira [Reclama los juegos gratis de la semana](#reclama-los-juegos-gratis-de-la-semana)."
  - q: "¿Necesito instalar Wine o Proton antes?"
    a: "No. Heronite descarga una versión de Proton cuando la necesita. Solo necesitas un controlador de Vulkan que funcione. Mira [Wine y Proton](/docs/wine-and-proton/)."
  - q: "¿Es seguro iniciar sesión en Epic a través de Heronite?"
    a: "Sí. Tu contraseña solo va a la página de inicio de sesión de Epic. Heronite guarda la sesión en tu PC. Mira las [preguntas frecuentes](/docs/faq/)."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

## Qué necesitas

- Un PC con Linux de 64 bits y un controlador de Vulkan que funcione. Ejecuta `vulkaninfo --summary` para comprobar que muestra tu GPU. Los juegos antiguos de 32 bits también necesitan el controlador de Vulkan de 32 bits.
- Una cuenta de Epic Games.
- Espacio libre en disco. Heronite instala los juegos en `~/Games/Heronite` por defecto.

## Instala Heronite

Descarga el AppImage desde la [página de descarga](/es/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Los paquetes para otras distribuciones están en la [guía de instalación](/es/docs/installation/). En Steam Deck, sigue la [guía de Steam Deck](/es/guides/steam-deck/).

## Inicia sesión en Epic Games

1. Pulsa <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Tiendas**.
2. Elige **Epic Games** y luego **Iniciar sesión con Epic Games**.
3. Inicia sesión en la página de Epic, en la ventana que se abre.

Escribes tu contraseña en la página de Epic. Toda tu biblioteca de Epic aparece ahora en la Colección, esté instalada o no.

Si la ventana no se abre, usa el **método del navegador** en la misma página. La [página de solución de problemas](/es/docs/troubleshooting/#falla-un-inicio-de-sesión-o-una-descarga-de-una-tienda) tiene los detalles.

## Reclama los juegos gratis de la semana

Heronite no reclama los juegos gratis de Epic, así que reclámalos en Epic:

1. Abre la página de la tienda de Epic en tu navegador e inicia sesión con la misma cuenta.
2. Reclama el juego gratis.
3. En Heronite, elige **Tiendas → Epic Games → Actualizar biblioteca**.

El juego aparece en la Colección como cualquier otro, y los de semanas anteriores también. Si falta alguno, comprueba que usaste la misma cuenta de Epic y actualiza otra vez.

## Instala un juego de Epic

Mira primero el recuadro **En Linux** en los detalles del juego. Muestra la valoración de [ProtonDB](https://www.protondb.com) y el estado del anticheat. Un juego Gold o Platinum suele funcionar sin tocar nada.

1. Selecciona el juego y pulsa <kbd>Enter</kbd>, o elige **Instalar con Epic Games**.
2. Revisa la **Carpeta de instalación** y la **Versión de Wine**. Si no estás seguro, deja la versión por defecto.
3. Confirma. La descarga aparece en la página Descargas (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Cada juego tiene su propio prefijo de Wine, una carpeta de Windows privada y simulada. Deja desactivado **Usar el prefijo de Wine compartido** salvo que sepas por qué lo quieres. Si los archivos del juego ya están en el disco, elige **Importar una instalación existente** y apunta Heronite a esa carpeta.

## Juega

Selecciona el juego instalado y pulsa <kbd>Enter</kbd>.

## Cambia la versión de Proton

Si el juego no arranca o va mal, abre **Ajustes del juego → Compatibilidad** y elige otra versión de Proton en **Versión**. La línea de ProtonDB suele indicar cuál funciona mejor.

![Los Ajustes del juego de Control, un juego de Epic, en la pestaña Compatibilidad: la versión de Proton GE-Proton-latest, su valoración Platinum de ProtonDB, el prefijo de Wine y los botones Winecfg y Winetricks.](../../../assets/screenshots/game-settings.webp)

GE-Proton y Proton-CachyOS suelen traer correcciones antes que otras versiones. La [guía de GE-Proton](/es/guides/install-ge-proton/) explica cómo instalarlas.

## ¿Qué juegos de Epic bloquea el anticheat?

Los juegos para un jugador rara vez tienen este problema. En los demás, el anticheat es la razón principal por la que un juego de Epic no funciona en Linux.

- Algunos juegos usan Easy Anti-Cheat o BattlEye y funcionan. Heronite puede aportar los componentes necesarios.
- Algunos desarrolladores no permiten Linux, así que el juego no se ejecutará, hagas lo que hagas.
- Fortnite es uno de ellos. El Easy Anti-Cheat de Epic puede dar soporte a Linux, pero el desarrollador tiene que activarlo, y Fortnite no lo hace.

[Are We Anti-Cheat Yet?](https://areweanticheatyet.com) sigue el estado de cada juego. Mira [Anticheat](/es/docs/wine-and-proton/#anticheat) para saber más.

## Un juego no arranca

Lee su log de inicio en **Ajustes → Logs**. [Solución de problemas](/es/docs/troubleshooting/#un-juego-no-arranca-linux) cubre DLL que faltan, DirectX 12, errores de Vulkan y otras correcciones habituales.
