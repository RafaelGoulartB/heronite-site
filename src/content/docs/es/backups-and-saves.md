---
title: "Copia de seguridad de tu Colección y partidas (Ludusavi)"
navLabel: "Copias de seguridad"
description: "Haz copias de seguridad de tu Colección de Heronite con horario y de tus partidas con Ludusavi, sincroniza Epic y GOG en la nube y usa varios PC."
section: Guides
order: 6
updated: 2026-11-04
---

## Haz una copia de seguridad de la Colección

1. Abre **Ajustes → Copias**.
2. Elige una carpeta de copias fuera de la carpeta de datos de Heronite. Lo mejor es otro disco o una carpeta sincronizada.
3. Elige una frecuencia: **Una vez al día**, **Una vez a la semana**, **Una vez al mes** o **Solo cuando pulse Copiar ahora**.

Heronite conserva por defecto las 10 copias más recientes. Una copia puede incluir:

| Parte | Qué contiene |
|---|---|
| Colección (siempre) | Tus juegos, sesiones, estados, diario y ajustes de cada juego |
| Ajustes | Apariencia, temas del modo consola y el resto de ajustes |
| Arte | Las portadas y el arte que elegiste |
| Inicios de sesión | Tus inicios de sesión en las tiendas |

Heronite deja fuera las versiones de Wine y Proton, las cachés y los logs, porque se pueden volver a descargar.

## Restaura una copia de seguridad

1. En **Ajustes → Copias**, elige una copia para ver qué contiene.
2. Elige todo o solo algunas partes.
3. Elige **Restaurar y reiniciar**.

Heronite primero guarda una copia de lo que tienes ahora y luego se reinicia con la copia restaurada.

## Copia de seguridad de las partidas con Ludusavi

[Ludusavi](https://github.com/mtkennerly/ludusavi) sabe dónde guardan sus partidas miles de juegos. Si está instalado, Heronite copia las partidas de un juego después de cada sesión, y puedes restaurarlas desde la página del juego (también en el modo consola). Los estados guardados de los juegos emulados van aparte: consulta [Emulación](/es/docs/emulation/#continúa-una-partida-desde-un-estado-guardado).

Instala Ludusavi desde [sus versiones](https://github.com/mtkennerly/ludusavi/releases/latest), desde tu distribución, con winget o con Scoop. En Linux, Heronite lo busca en `PATH`, `/usr/bin`, `/usr/local/bin` y `~/.local/bin`; el Flatpak todavía no se detecta. Elige dónde van las copias de partidas en **Ajustes → Guardados**.

## Sincroniza los guardados en la nube de Epic y GOG

1. Abre los **Ajustes del juego** y luego la pestaña **Guardados en la nube**.
2. Revisa la carpeta en **Ubicación**. Heronite la encuentra en la mayoría de los juegos.
3. En **Sincronizar ahora**, elige **Sincronizar (descarga y subida)**, **Forzar descarga** o **Forzar subida** y haz clic en **Sincronizar**.
4. Activa **Sincronizar automáticamente** para sincronizar al abrir el juego y después de cerrarlo.

Los guardados en la nube están en beta: haz una copia de tus partidas antes de sincronizar. Funcionan en Linux y en Windows.

## Envía las copias a la nube

**Ajustes → Nube** puede enviar **Copias de Heronite**, **Guardados de los juegos (Ludusavi)** y **Capturas**, cada una en **Automático**, **Manual** o **Desactivado**. En automático, nunca envía nada durante un juego. Los juegos instalados, los prefijos de Wine, los ajustes de los juegos y los inicios de sesión en las tiendas se quedan siempre en cada PC.

El mismo sitio mantiene tu biblioteca igual en todos tus PC: consulta [Sincronizar entre PC](/es/docs/sync-between-pcs/).

## Configura un PC nuevo desde la nube

1. En **Ajustes → Nube**, conéctate a la misma cuenta o carpeta.
2. En **Ajustes → Copias**, elige una carpeta de copias. Para los guardados de los juegos, instala también Ludusavi.
3. En **Restaurar desde la nube**, pulsa **Ver qué hay en la nube** y después **Restaurar todo**.
4. Confirma la restauración. Heronite se reinicia con tu biblioteca, y después [Sincronizar entre PC](/es/docs/sync-between-pcs/) lo mantiene al día.
