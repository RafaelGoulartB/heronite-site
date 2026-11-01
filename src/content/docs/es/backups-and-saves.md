---
title: "Copias de seguridad y partidas guardadas"
description: "Programa copias de tu Colección de Heronite y haz copia de tus partidas guardadas tras cada sesión con Ludusavi, y restáuralas cuando las necesites."
section: Guides
order: 6
updated: 2026-11-01
---

## Copias de seguridad de la Colección

En **Ajustes → Copias**, elige una carpeta y una frecuencia (diaria, semanal, mensual o solo cuando tú lo pidas). Heronite conserva por defecto las 10 copias más recientes.

Una copia puede incluir:

| Parte | Qué contiene |
|---|---|
| Colección (siempre) | Tus juegos, sesiones, estados, diario y ajustes de cada juego |
| Ajustes | Apariencia, temas del modo consola y el resto de ajustes |
| Arte | Las portadas y el arte que elegiste |
| Sesiones | Tus inicios de sesión en las tiendas |

Las versiones de Wine y Proton, las cachés y los logs no se incluyen, porque se pueden volver a descargar.

La carpeta de copias debe estar fuera de la carpeta de datos de Heronite; lo mejor es otro disco o una carpeta sincronizada. Una copia restaurada se aplica la próxima vez que se inicia Heronite.

## Partidas guardadas con Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) sabe dónde guardan sus partidas miles de juegos. Si está instalado, Heronite hace una copia de las partidas guardadas de un juego después de cada sesión, y puedes restaurarlas desde la página del juego (también en el modo consola).

Instala Ludusavi desde [sus versiones](https://github.com/mtkennerly/ludusavi/releases/latest), desde tu distribución, con winget o con Scoop. En Linux, Heronite lo busca en `PATH`, `/usr/bin`, `/usr/local/bin` y `~/.local/bin`; el Flatpak todavía no se detecta.

## Estados guardados de emuladores

Los juegos emulados pueden continuar desde sus estados guardados; consulta [Emulación](/es/docs/emulation/).
