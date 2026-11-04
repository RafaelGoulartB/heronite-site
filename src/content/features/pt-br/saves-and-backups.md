---
title: "Backup de saves de jogos no PC com Ludusavi | Heronite"
description: "Faça backup dos saves dos jogos após cada sessão com o Ludusavi e restaure pela página do jogo. Com backups agendados da Coleção e mapa de disco."
eyebrow: Saves e backups
headline: "Backup de saves de jogos com Ludusavi, após cada sessão"
lead: "O Heronite faz backup dos saves dos seus jogos após cada sessão. É um frontend do Ludusavi para Linux e Windows, e também faz backup da Coleção inteira em um horário agendado."
navLabel: Saves e backups
summary: "Backup automático de saves com o Ludusavi, backups agendados da Coleção, um mapa do uso de disco e configurações de capturas de tela."
order: 7
hero: ../../../assets/screenshots/backups.webp
heroAlt: "As configurações de Backups do Heronite: a pasta de backup, a frequência (uma vez por semana), quantos backups são mantidos, um botão Fazer backup agora, opções do que entra em um backup e uma lista de backups anteriores para restaurar."
og: /og/saves-and-backups.jpg
updated: 2026-11-04
highlights:
  - title: Saves após cada sessão
    text: Com o Ludusavi instalado, o Heronite faz backup dos saves toda vez que você para de jogar.
  - title: Restaure pela página do jogo
    text: Devolva um save pela página do jogo, também no modo console.
  - title: Backups agendados
    text: Backup da Coleção todo dia, semana ou mês; o Heronite mantém os 10 mais novos.
  - title: Veja para onde foi o espaço
    text: O Armazenamento mostra o uso de disco, um mapa dos jogos e o que dá para limpar.
faq:
  - q: O Heronite é um frontend do Ludusavi?
    a: Sim. O Heronite roda o Ludusavi, um programa gratuito separado que você instala uma vez. Veja [como instalar](#como-instalo-o-ludusavi-para-o-heronite).
  - q: Dá para restaurar no Linux um save feito no Windows?
    a: Sim. O Heronite o restaura no prefixo Wine atual do jogo, mesmo que o backup tenha vindo do Windows ou de outra biblioteca da Steam.
  - q: O backup do Heronite inclui os meus jogos instalados?
    a: Não. Um backup guarda a sua Coleção e, se você quiser, as configurações, as imagens e os logins das lojas. Veja [o que vai dentro de um backup](#o-que-vai-dentro-de-um-backup).
  - q: Onde devo guardar meus backups?
    a: Fora da pasta de dados do Heronite. Outro disco ou uma pasta sincronizada é o melhor.
related:
  - /features/play-time-tracking/
  - /features/game-library/
  - /features/wine-and-proton/
---

O [Ludusavi](https://github.com/mtkennerly/ludusavi) é um programa gratuito que sabe onde milhares de jogos guardam os saves, seja em uma pasta do Windows, em uma pasta da Steam ou em um prefixo do Wine. Instale uma vez, e o Heronite faz backup dos saves de um jogo após cada sessão.

## Como instalo o Ludusavi para o Heronite?

Baixe o Ludusavi pelas [versões dele](https://github.com/mtkennerly/ludusavi/releases/latest), pela sua distribuição, pelo winget ou pelo Scoop. No Linux, o Heronite o procura no `PATH`, em `/usr/bin`, `/usr/local/bin` e `~/.local/bin`.

Em **Configurações → Saves** você escolhe para onde vão os backups e quantos backups completos o Heronite mantém para cada jogo. O Ludusavi atualiza a lista de jogos uma vez por dia. Mais em [Backups e saves](/pt-br/docs/backups-and-saves/).

## Como restaurar o save de um jogo?

1. Feche o jogo.
2. Abra a página do jogo e a aba **Saves**, que lista os backups desse jogo.
3. Escolha um backup, selecione os arquivos a devolver e restaure.

No **modo console** isso é uma linha na página do jogo, **Fazer backup dos saves (Ludusavi)**.

- O Heronite guarda uma cópia do que a restauração substituiu, e **Desfazer** a devolve.
- Dê um nome a um backup, como "Antes do último chefe", e **trave-o** para que o Heronite nunca o remova.

Jogos de emulador também podem continuar dos [save states](/pt-br/features/emulation/).

## Como agendar backups da minha Coleção inteira?

Abra **Configurações → Backups** para proteger seus status, notas, diário e [histórico de jogo](/pt-br/features/play-time-tracking/). Escolha uma pasta e um agendamento: **todo dia**, **toda semana**, **todo mês** ou só quando você apertar **Fazer backup agora**. O Heronite mantém os 10 backups mais novos por padrão.

Cada backup é uma pasta com data que você pode explorar. O Heronite compartilha os arquivos que não mudaram com o backup anterior, então um novo ocupa só o espaço do que mudou. Os backups agendados rodam enquanto o Heronite está aberto e nunca durante um jogo.

### O que vai dentro de um backup?

| Parte | O que tem nela |
|---|---|
| Coleção (sempre) | Seus jogos, sessões, status, diário e configurações por jogo |
| Configurações | Aparência, temas do modo console e as outras configurações |
| Imagens | Capas e imagens que você escolheu |
| Logins | Os logins das suas lojas |

Jogos instalados, versões do Wine e do Proton, caches e logs ficam de fora, porque podem ser baixados de novo.

### Como restaurar um backup da Coleção?

Em **Configurações → Backups**, escolha um backup para ver o que ele guarda e devolva tudo ou só uma parte. O Heronite antes faz backup do que você tem agora, para você poder voltar atrás. Ele aplica a restauração quando reinicia. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Para onde foi o meu espaço em disco?

A página **Armazenamento** nas Configurações mostra o que seus jogos ocupam em cada disco, com barras para os jogos, prefixos do Wine, Proton e runtimes, e caches. Um **treemap** desenha cada jogo instalado como um bloco com o tamanho do espaço que ele usa. Ordene por tamanho ou por quando você jogou pela última vez.

![As configurações de Armazenamento do Heronite com barras de uso de disco para duas unidades, um cartão Liberar espaço com caches selecionados e um treemap dos jogos instalados com o tamanho proporcional ao espaço em disco.](../../../assets/screenshots/storage.webp)

*Configurações de Armazenamento, com um cartão Liberar espaço.*

**Liberar espaço** lista o que pode sair, como caches e shaders compilados. No Linux ele acha prefixos do Wine sem uso, versões do Proton sem uso e sobras da Steam de jogos que não estão mais instalados. O Heronite move prefixos e pastas de sobras para a lixeira e se recusa a remover pastas que outro jogo ainda usa.

## Como gerenciar as capturas de tela e o espaço que ocupam?

As capturas de tela ficam em uma pasta que você escolhe em **Configurações → Capturas de tela**, que mostra o espaço que elas usam. Uma chave compacta capturas em PNG para WebP sem perdas, que mantém cada pixel e ocupa cerca de metade do espaço. A compactação pausa enquanto um jogo está rodando.

![As configurações de Capturas de tela do Heronite com a pasta de capturas e o espaço usado, a compactação sem perdas, o atalho de captura dentro do jogo e a captura com o controle.](../../../assets/screenshots/screenshots.webp)

*Configurações de Capturas de tela.*

Aperte <kbd>F10</kbd> enquanto joga para tirar uma captura, e mude a tecla nas mesmas configurações. Com o controle, o [overlay dentro do jogo](/pt-br/features/console-mode/) tira uma com Guide + RB. O Heronite associa as capturas ao jogo, então elas aparecem nas suas [estatísticas](/pt-br/features/play-time-tracking/) e no diário.

Próximo: [baixe o Heronite](/pt-br/download/).
