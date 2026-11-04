---
title: "Copia de seguridad de tu Colección y partidas (Ludusavi)"
navLabel: "Copias de seguridad"
description: "Haz una copia de seguridad de tu Colección de Heronite con un horario y de tus partidas guardadas tras cada sesión con Ludusavi, y restáuralas."
section: Guides
order: 6
updated: 2026-11-04
---

## Haz una copia de seguridad de la Colección

En **Ajustes → Copias**, elige una carpeta y una frecuencia (diaria, semanal, mensual o solo cuando tú lo pidas). Heronite conserva por defecto las 10 copias más recientes.

Una copia puede incluir:

| Parte | Qué contiene |
|---|---|
| Colección (siempre) | Tus juegos, sesiones, estados, diario y ajustes de cada juego |
| Ajustes | Apariencia, temas del modo consola y el resto de ajustes |
| Arte | Las portadas y el arte que elegiste |
| Inicios de sesión | Tus inicios de sesión en las tiendas |

Las versiones de Wine y Proton, las cachés y los logs quedan fuera; se pueden volver a descargar.

La carpeta de copias debe estar fuera de la carpeta de datos de Heronite; lo mejor es otro disco o una carpeta sincronizada. Heronite aplica una copia restaurada la próxima vez que se inicia.

## Copia de seguridad de las partidas guardadas con Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) sabe dónde guardan sus partidas miles de juegos. Si está instalado, Heronite copia las partidas guardadas de un juego después de cada sesión. Puedes restaurarlas desde la página del juego (también en el modo consola).

Instala Ludusavi desde [sus versiones](https://github.com/mtkennerly/ludusavi/releases/latest), desde tu distribución, con winget o con Scoop. En Linux, Heronite lo busca en `PATH`, `/usr/bin`, `/usr/local/bin` y `~/.local/bin`; el Flatpak todavía no se detecta.

## Continúa los juegos emulados desde estados guardados

Los juegos emulados pueden continuar desde sus estados guardados; consulta [Emulación](/es/docs/emulation/).
