---
title: "Backup de saves de jogos no PC com Ludusavi | Heronite"
description: "Faça backup dos saves dos jogos após cada sessão com o Ludusavi e restaure pela página do jogo. Com backups agendados da Coleção e mapa de disco."
eyebrow: Saves e backups
headline: "Backup de saves de jogos com Ludusavi, após cada sessão"
lead: "O Heronite é um frontend do Ludusavi para Linux e Windows. Ele restaura saves pela página do jogo e faz backup da Coleção inteira num horário agendado."
navLabel: Saves e backups
summary: "Backup automático de saves com o Ludusavi, saves na nuvem da Epic e da GOG, uma biblioteca em vários PCs, backups agendados da Coleção e um mapa do uso de disco."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "As configurações de Backups do Heronite: a pasta de backup, a frequência (uma vez por semana), quantos backups são mantidos, um botão Fazer backup agora, opções do que entra em um backup e uma lista de backups anteriores para restaurar."
og: /og/saves-and-backups.jpg
updated: 2026-11-04
highlights:
  - title: Desfaça uma restauração
    text: O Heronite guarda o que a restauração substituiu, e Desfazer devolve.
  - title: Trave um backup
    text: Dê nome a um backup de save e trave para o Heronite nunca removê-lo.
  - title: Backups agendados
    text: Backup da Coleção todo dia, semana ou mês; o Heronite mantém os 10 mais novos.
  - title: Veja para onde foi o espaço
    text: O Armazenamento mostra o uso de disco, um mapa dos jogos e o que dá para limpar.
faq:
  - q: Dá para restaurar no Linux um save feito no Windows?
    a: Sim. O Heronite o restaura no prefixo Wine atual do jogo, mesmo que o backup tenha vindo do Windows ou de outra biblioteca da Steam.
  - q: O Ludusavi é grátis?
    a: Sim. O Ludusavi é um programa gratuito e separado que você instala uma vez.
  - q: Onde devo guardar meus backups?
    a: Fora da pasta de dados do Heronite, em outro disco ou numa pasta sincronizada. Escolha as pastas em **Configurações → Saves** e **Configurações → Backups**. **Configurações → Nuvem** também pode enviá-los para uma conta na nuvem.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

O [Ludusavi](https://github.com/mtkennerly/ludusavi) é um programa gratuito que sabe onde milhares de jogos guardam os saves: numa pasta do Windows, numa pasta da Steam ou num prefixo Wine (a pasta do Windows onde um jogo roda no Linux). Instale uma vez, e o Heronite faz backup dos saves de um jogo após cada sessão.

## Como instalo o Ludusavi para o Heronite?

1. Instale o Ludusavi pelas [versões dele](https://github.com/mtkennerly/ludusavi/releases/latest), pela sua distribuição, pelo winget ou pelo Scoop.
2. Em **Configurações → Saves**, escolha para onde vão os backups e quantos backups completos manter para cada jogo.

No Linux, o Heronite procura o Ludusavi no `PATH`, em `/usr/bin`, `/usr/local/bin` e `~/.local/bin`. O Ludusavi atualiza a lista de jogos uma vez por dia. Mais em [Backups e saves](/pt-br/docs/backups-and-saves/).

## Como restaurar o save de um jogo?

1. Feche o jogo.
2. Abra a página do jogo e a aba **Saves**, que lista os backups desse jogo.
3. Escolha um backup e aperte **Restaurar…**.
4. Escolha os arquivos a devolver em **Arquivos a restaurar** e confirme.

No **modo console** isso é uma linha na página do jogo, **Fazer backup dos saves (Ludusavi)**.

- O Heronite guarda uma cópia do que a restauração substituiu, e **Desfazer** a devolve.
- Dê um nome a um backup, como "Antes do último chefe", e use **Travar** para o Heronite nunca removê-lo.
- Jogos de emulador podem continuar dos [save states](/pt-br/features/emulation/).

## O Heronite sincroniza os saves na nuvem da Epic e da GOG?

Sim, em beta, no Linux e no Windows. Abra **Configurações do jogo → Saves na nuvem** e aperte **Sincronizar**, ou ligue **Sincronizar automaticamente** para sincronizar quando o jogo abre e depois que ele fecha. Faça backup dos seus saves antes da primeira sincronização.

## Como agendar backups da minha Coleção inteira?

1. Abra **Configurações → Backups**.
2. Escolha uma pasta de backup.
3. Escolha um agendamento: **Uma vez por dia**, **Uma vez por semana**, **Uma vez por mês** ou só quando você apertar **Fazer backup agora**.

Um backup protege seus status, notas, diário e [histórico de jogo](/pt-br/features/play-time-tracking/). O Heronite mantém os 10 backups mais novos por padrão.

Cada backup é uma pasta com data que você pode explorar. O Heronite compartilha os arquivos que não mudaram com o backup anterior, então um novo ocupa só o espaço do que mudou. Os backups agendados rodam enquanto o Heronite está aberto e nunca durante um jogo.

### O que vai dentro de um backup?

| Parte | O que tem nela |
|---|---|
| Coleção (sempre) | Seus jogos, sessões, status, diário e configurações por jogo |
| Configurações | Aparência, temas do modo console e as outras configurações |
| Imagens | Capas e imagens que você escolheu |
| Logins | Os logins das suas lojas |

Jogos instalados, versões do Wine e do Proton, caches e logs ficam de fora, porque dá para baixar tudo de novo.

### Como restaurar um backup da Coleção?

1. Em **Configurações → Backups**, escolha um backup para ver o que ele guarda.
2. Escolha as partes a devolver.
3. Aperte **Restaurar…** e depois **Restaurar e reiniciar**.

O Heronite antes faz backup do que você tem agora, para você poder voltar atrás. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Dá para ter a mesma biblioteca em vários PCs?

Sim. **Configurações → Nuvem** mantém status, favoritos, anotações, tempo de jogo e sessões iguais em todos os PCs, como o Linux e o Windows de um dual boot. A sincronização passa por uma pasta compartilhada ou por uma conta na nuvem, como Google Drive, Dropbox ou OneDrive.

O mesmo lugar pode guardar seus backups do Heronite, os backups de saves do Ludusavi e as capturas de tela. Configure em [Backups e saves](/pt-br/docs/backups-and-saves/#sincronizar-a-biblioteca-entre-pcs).

## Para onde foi o meu espaço em disco?

**Configurações → Armazenamento** mostra o que seus jogos ocupam em cada disco, com barras para os jogos, prefixos Wine, Proton e runtimes, e caches. Um **treemap** desenha cada jogo instalado como um bloco do tamanho do espaço que ele usa. Ordene por tamanho ou por quando você jogou pela última vez.

![As configurações de Armazenamento do Heronite com barras de uso de disco para duas unidades, um cartão Liberar espaço com caches selecionados e um treemap dos jogos instalados com o tamanho proporcional ao espaço em disco.](../../../assets/screenshots/storage.webp)

*Configurações de Armazenamento, com um cartão Liberar espaço.*

**Liberar espaço** lista o que pode sair, como caches e shaders compilados. No Linux ele acha prefixos Wine sem uso, versões do Proton sem uso e sobras da Steam de jogos que não estão mais instalados. O Heronite move prefixos e pastas de sobras para a lixeira e se recusa a remover pastas que outro jogo ainda usa.

## Como gerenciar as capturas de tela e o espaço que ocupam?

As capturas de tela ficam numa pasta que você escolhe em **Configurações → Capturas de tela**, que mostra o espaço que elas usam. Uma chave compacta capturas em PNG para WebP sem perdas, que mantém cada pixel e ocupa cerca de metade do espaço. A compactação pausa enquanto um jogo está rodando.

![As configurações de Capturas de tela do Heronite com a pasta de capturas e o espaço usado, a compactação sem perdas, o atalho de captura dentro do jogo e a captura com o controle.](../../../assets/screenshots/screenshots.webp)

*Configurações de Capturas de tela.*

Aperte <kbd>F10</kbd> enquanto joga para tirar uma captura, e mude a tecla nas mesmas configurações. Com o controle, o [overlay dentro do jogo](/pt-br/features/console-mode/) tira uma com Guide + RB. O Heronite associa as capturas ao jogo, então elas aparecem nas suas [estatísticas](/pt-br/features/play-time-tracking/) e no diário.

Próximo: [baixe o Heronite](/pt-br/download/).
