---
title: "Backup da coleção e dos saves de jogos (Ludusavi)"
navLabel: "Backups e saves"
description: "Faça backup agendado da sua Coleção do Heronite e dos saves dos jogos depois de cada sessão com o Ludusavi, e restaure tudo quando precisar."
section: Guides
order: 6
updated: 2026-11-04
---

## Backup da coleção

Em **Configurações → Backups**, escolha uma pasta e uma frequência (diária, semanal, mensal ou só quando você pedir). O Heronite guarda os 10 backups mais recentes por padrão.

Um backup pode incluir:

| Parte | O que entra |
|---|---|
| Coleção (sempre) | Seus jogos, sessões, status, diário e configurações de cada jogo |
| Configurações | Aparência, temas do modo console e as demais configurações |
| Arte | Capas e arte que você escolheu |
| Logins | Seus logins das lojas |

Versões do Wine e do Proton, caches e logs ficam de fora, porque podem ser baixados de novo.

A pasta de backup precisa ficar fora da pasta de dados do Heronite. O ideal é outro disco ou uma pasta sincronizada. A restauração de um backup é aplicada na próxima vez que o Heronite iniciar.

## Backup de saves de jogos com o Ludusavi

O [Ludusavi](https://github.com/mtkennerly/ludusavi) sabe onde milhares de jogos guardam seus saves. Com ele instalado, o Heronite faz backup dos saves de um jogo depois de cada sessão. Você restaura os saves pela página do jogo, também no modo console.

Instale o Ludusavi pelas [versões do projeto](https://github.com/mtkennerly/ludusavi/releases/latest), pela sua distribuição, pelo winget ou pelo Scoop. No Linux, o Heronite procura por ele no `PATH`, em `/usr/bin`, `/usr/local/bin` e `~/.local/bin`. O Flatpak ainda não é encontrado.

## Continue jogos emulados com estados salvos

Jogos emulados podem continuar a partir dos estados salvos. Veja [Emuladores e ROMs](/pt-br/docs/emulation/).
