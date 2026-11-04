---
title: "Heronite FAQ: price, Steam Deck, anti-cheat, safety"
navLabel: "FAQ"
description: "Is Heronite free? Short answers on Steam Deck support, anti-cheat, how it differs from Heroic, Lutris and Playnite, login safety and portable use."
section: Start
order: 3
updated: 2026-11-04
---

Short answers about Heronite, a game launcher for Linux and Windows.

## Is Heronite free?

Yes. It is open source under the [GPL-3.0 license](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE), with no accounts, ads, or telemetry.

## Which systems does it run on?

Linux (any distribution, x86_64) and Windows 10 and 11 (x86_64). See [Installation](/docs/installation/).

## Does it work on the Steam Deck?

Yes. Heronite runs as an AppImage in SteamOS desktop mode. For Gaming Mode, add the AppImage to Steam as a non-Steam game with the `--console` option. [Console mode](/docs/console-mode/) is built for controllers; see the [Steam Deck guide](/guides/steam-deck/).

## How is it different from Heroic, Lutris, or Playnite?

- **Everything in one place:** Steam, Epic, GOG, Amazon, store apps, emulators, and your own games.
- **Light:** a native Rust app drawn on the GPU, with no bundled browser engine. It uses about 190 MB of memory when idle and shows the library in about 215 ms.
- **Your play history:** every session, statistics, a journal, a backlog goal, and a year in review.
- **Console mode** with themes you can change and share.

It can import your games from Heroic, Lutris, Bottles, and Faugus on Linux, and from Playnite on Windows. See [Heronite vs Heroic](/compare/heroic/), [vs Lutris](/compare/lutris/) and [vs Playnite](/compare/playnite/).

## Can I use the same library on two PCs?

Yes. **Settings → Cloud** keeps your statuses, favourites, notes, play time and sessions the same on every PC, such as the Linux and Windows of a dual boot. It syncs through a shared folder or a cloud account; see [Backups and saves](/docs/backups-and-saves/).

## Will I lose my Heroic setup?

No. Heronite never changes Heroic's files. On first start it copies Heroic's logins, settings and games added by hand once, and Heroic keeps working.

## Do games with anti-cheat work?

On Windows, yes, as with any launcher. On Linux it depends on the game. Heronite shows each game's status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) in its details; see [Anti-cheat](/docs/wine-and-proton/#anti-cheat).

## Is my store login safe?

Yes. Heronite uses the same open source tools as Heroic: legendary for Epic, gogdl for GOG and nile for Amazon. Your logins stay on your PC and go only to the stores, and you type your password on the store's own login page.

## Why does Windows show a SmartScreen warning?

The Windows files are not code-signed yet. Choose **More info**, then **Run anyway**. Every release is still signed with minisign, and Heronite checks that signature before installing an update.

## Can I keep everything on a USB drive?

Yes, with the Windows portable copy. See [Files and folders](/docs/files-and-folders/#the-portable-copy-windows).

## Which languages does Heronite support?

English, Portuguese (Brazil), Spanish, and German. To help translate, see [Translating](/docs/translating/).

## Where do I ask for help or suggest a feature?

- Questions and ideas: [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs and feature requests: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Security problems: privately, through the [Security tab](https://github.com/RafaelGoulartB/Heronite/security)
