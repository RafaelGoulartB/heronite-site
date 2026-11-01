---
title: "Frequently asked questions"
navLabel: "FAQ"
description: "Answers about Heronite: price, Steam Deck support, anti-cheat, how it differs from Heroic, Lutris and Playnite, login safety and portable use."
section: Start
order: 3
updated: 2026-11-01
---

## Is Heronite free?

Yes. It is free and open source under the [GPL-3.0 license](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE). There are no accounts, ads, or telemetry.

## Which systems does it run on?

Linux (any distribution, x86_64) and Windows 10 and 11 (x86_64). See [Installation](/docs/installation/).

## Does it work on the Steam Deck?

Heronite runs on Linux as an AppImage, which is how apps are usually installed in SteamOS desktop mode, and [Console Mode](/docs/console-mode/) is built for controllers. To use it from Gaming Mode, add the AppImage to Steam as a non-Steam game with the `--console` option.

## How is it different from Heroic, Lutris, or Playnite?

- **Everything in one place:** Steam, Epic, GOG, Amazon, the store clients, emulators, and your own games, on Linux and Windows.
- **Light:** a native Rust app drawn on the GPU, with no bundled browser engine. About 190 MB of memory when idle, and the library on screen in about 0.2 s.
- **Your play history:** every session recorded, statistics, a journal, a backlog goal, and a year in review.
- **Console mode** with themes you can change and share.

On Linux it can import your games from Heroic, Lutris, Bottles, and Faugus, so you can try it without losing anything.

## Will I lose my Heroic setup?

No. On the first start Heronite copies Heroic's data once and only reads it. Heroic keeps working as before.

## Do games with anti-cheat work?

On Windows, yes, as with any launcher. On Linux it depends on the game: the anti-cheat status from [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) is shown in the game's details.

## Is my store login safe?

Heronite uses the same open source tools as Heroic (legendary, gogdl, nile). Your logins stay on your PC and are sent only to the stores. You type your password in the store's own login page.

## Why does Windows show a SmartScreen warning?

The Windows files are not code-signed yet. Every release is still signed with minisign, and Heronite checks that signature before installing an update.

## Can I keep everything on a USB drive?

Yes, with the Windows portable copy. See [Files and Folders](/docs/files-and-folders/#the-portable-copy-windows).

## Which languages does it speak?

English, Portuguese (Brazil), Spanish, and German. Help translate it: see [Translating](/docs/translating/).

## Where do I ask for help or suggest a feature?

- Questions and ideas: [Discussions](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs and feature requests: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Security problems: privately, through the [Security tab](https://github.com/RafaelGoulartB/Heronite/security)
