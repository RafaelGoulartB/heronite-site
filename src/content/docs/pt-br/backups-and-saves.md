---
title: "Backup da Coleção e dos saves de jogos (Ludusavi)"
navLabel: "Backups e saves"
description: "Faça backup agendado da Coleção do Heronite e dos saves com o Ludusavi, sincronize saves na nuvem da Epic e da GOG e use a biblioteca em vários PCs."
section: Guides
order: 6
updated: 2026-11-04
---

## Fazer backup da Coleção

1. Abra **Configurações → Backups**.
2. Escolha uma pasta de backup fora da pasta de dados do Heronite. O ideal é outro disco ou uma pasta sincronizada.
3. Escolha a frequência: **Uma vez por dia**, **Uma vez por semana**, **Uma vez por mês** ou **Só quando eu clicar em Fazer backup agora**.

Por padrão, o Heronite guarda os 10 backups mais recentes. Um backup pode ter:

| Parte | O que entra |
|---|---|
| Coleção (sempre) | Seus jogos, sessões, status, diário e configurações de cada jogo |
| Configurações | Aparência, temas do modo console e as demais configurações |
| Arte | Capas e arte que você escolheu |
| Logins | Seus logins das lojas |

O Heronite deixa de fora as versões do Wine e do Proton, os caches e os logs, porque dá para baixar tudo de novo.

## Restaurar um backup

1. Em **Configurações → Backups**, escolha um backup para ver o que tem nele.
2. Escolha tudo ou só algumas partes.
3. Escolha **Restaurar e reiniciar**.

Antes, o Heronite faz um backup do que você tem agora. Depois, reinicia com o backup restaurado.

## Backup de saves de jogos com o Ludusavi

O [Ludusavi](https://github.com/mtkennerly/ludusavi) sabe onde milhares de jogos guardam os saves. Com ele instalado, o Heronite faz backup dos saves de um jogo depois de cada sessão, e você restaura pela página do jogo (também no modo console). Os estados salvos de jogos emulados são outra coisa: veja [Emulação](/pt-br/docs/emulation/#continuar-um-jogo-de-um-estado-salvo).

Instale o Ludusavi pelas [versões do projeto](https://github.com/mtkennerly/ludusavi/releases/latest), pela sua distribuição, pelo winget ou pelo Scoop. No Linux, o Heronite procura por ele no `PATH`, em `/usr/bin`, `/usr/local/bin` e `~/.local/bin`; o Flatpak ainda não é encontrado. Escolha onde ficam os backups de saves em **Configurações → Saves**.

## Sincronizar saves na nuvem da Epic e da GOG

1. Abra as **Configurações do jogo** e depois a aba **Saves na nuvem**.
2. Confira a pasta em **Local**. O Heronite encontra ela na maioria dos jogos.
3. Em **Sincronizar agora**, escolha **Sincronizar (download e upload)**, **Forçar download** ou **Forçar upload** e clique em **Sincronizar**.
4. Ligue **Sincronizar automaticamente** para sincronizar quando o jogo abre e depois que ele fecha.

Os saves na nuvem estão em beta: faça backup dos seus saves antes de sincronizar. Eles funcionam no Linux e no Windows.

## Enviar backups para a nuvem

**Configurações → Nuvem** pode enviar **Backups do Heronite**, **Saves dos jogos (Ludusavi)** e **Capturas de tela** para uma conta na nuvem, um servidor ou uma pasta compartilhada, cada um em **Automático**, **Manual** ou **Desligado**. O modo automático nunca envia nada durante um jogo.

O mesmo lugar deixa sua biblioteca igual em todos os PCs: veja [Sincronizar entre PCs](/pt-br/docs/sync-between-pcs/).

## Configurar um PC novo pela nuvem

1. Em **Configurações → Nuvem**, conecte na mesma conta ou pasta.
2. Em **Configurações → Backups**, escolha uma pasta de backup. Para os saves dos jogos, instale o Ludusavi e escolha a pasta de backup dele em **Configurações → Saves**.
3. Em **Restaurar da nuvem**, clique em **Ver o que está na nuvem** e depois em **Restaurar tudo**.
4. Confirme a restauração. O Heronite reinicia com sua biblioteca, e depois [Sincronizar entre PCs](/pt-br/docs/sync-between-pcs/) mantém tudo em dia.

Os saves vão para a pasta de backup do Ludusavi. Restaure cada jogo pela aba **Saves** dele.
