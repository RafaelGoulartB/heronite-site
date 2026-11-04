---
title: "Portadas y metadatos: claves de SteamGridDB e IGDB"
navLabel: "Metadatos y arte"
description: "De dónde saca Heronite las portadas, el arte y los datos de los juegos, cómo añadir claves de SteamGridDB e IGDB y ver logros de Steam y RetroAchievements."
section: Guides
order: 5
updated: 2026-11-04
---

Heronite rellena portadas, arte, descripciones y detalles con varias fuentes. La mayoría no necesita configuración; dos claves opcionales mejoran los resultados.

## ¿Qué fuentes no necesitan configuración?

- **Steam y las tiendas:** portadas, arte y detalles de sus propios juegos.
- Metadatos de **Lutris**.
- **[How Long To Beat](https://howlongtobeat.com):** cuánto se tarda en terminar un juego.
- **[ProtonDB](https://www.protondb.com)** (Linux): qué tal funciona un juego de Windows en Linux. Los juegos que no son de Steam se asocian por título.
- **[Are We Anti-Cheat Yet?](https://areweanticheatyet.com)** (Linux): el estado del anticheat.
- **Tus propias capturas de pantalla**, la web o un archivo de imagen para cualquier juego.

## Añade claves de SteamGridDB e IGDB

Añade ambas claves en **Ajustes → Metadatos**.

### Consigue una clave de SteamGridDB

[SteamGridDB](https://www.steamgriddb.com) tiene portadas, heroes y logos de la comunidad, útiles para juegos que no son de Steam y para juegos emulados.

1. Inicia sesión en SteamGridDB.
2. Abre [Preferences → API](https://www.steamgriddb.com/profile/preferences/api) y genera una clave.
3. Pégala en "Clave de API de SteamGridDB".

Una clave importada de Heroic puede haber sido cifrada por Heroic; si las portadas no cargan, vuelve a pegar la clave.

### Consigue una clave de IGDB

[IGDB](https://www.igdb.com) aporta descripciones, géneros, compañías, series y fechas de lanzamiento. Necesita una cuenta de desarrollador de Twitch:

1. Abre la [consola para desarrolladores de Twitch](https://dev.twitch.tv/console) y registra una aplicación (el nombre que quieras; redirección OAuth `http://localhost`; categoría "Application Integration").
2. Copia su **Client ID** y crea un **Client Secret**.
3. Pega ambos en "Client ID de Twitch / IGDB" y "Client secret", y pulsa **Probar IGDB**.

## Muestra los logros de Steam y RetroAchievements

- **Steam:** añade tu clave de la Steam Web API para ver logros y progreso.
- **[RetroAchievements](https://retroachievements.org):** conecta tu cuenta para los juegos emulados.

Las cuentas se guardan en tu carpeta de datos (consulta [Archivos y carpetas](/es/docs/files-and-folders/)).

## Edita el nombre, el arte y los detalles de un juego

Selecciona un juego y pulsa <kbd>F3</kbd> para cambiar su nombre, arte, géneros, compañías, serie y más. Selecciona varios juegos para cambiarlos todos a la vez; <kbd>Ctrl</kbd> <kbd>Z</kbd> lo deshace. Los géneros, las compañías y las series también se pueden renombrar y fusionar en toda la Colección.
