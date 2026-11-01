---
title: "Como jogar jogos da Amazon Games e Prime Gaming no Linux"
description: "Jogue sua biblioteca da Amazon Games e do Prime Gaming no Linux: entre pelo Heronite, resgate os jogos grátis e instale com o nile e o Proton. Passo a passo."
eyebrow: Guia para Linux
headline: "Como jogar jogos da *Amazon Games* no Linux"
lead: "O app de jogos da Amazon não tem versão para Linux. O Heronite entra na sua conta da Amazon com o nile, e os jogos do Prime Gaming que você resgatou instalam e rodam no Linux."
navLabel: Amazon Games no Linux
summary: "Entre na Amazon pelo Heronite, e seus jogos do Prime Gaming e da Amazon vão para a Coleção, prontos para instalar pelo Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Entre com a Amazon"
    text: "Aperte Ctrl+4, escolha Amazon Games e entre. Sua biblioteca vem junto, com os jogos do Prime Gaming que você resgatou."
  - title: "Instala com o nile"
    text: "O Heronite baixa e verifica os jogos com o nile, um cliente de código aberto da Amazon Games."
  - title: "Resgate no site da Amazon"
    text: "Os jogos grátis do Prime Gaming são resgatados na página da Amazon e depois atualizados no Heronite."
  - title: "Roda pelo Proton"
    text: "Os jogos de Windows usam Wine ou Proton, com uma versão que você pode trocar em cada jogo."
faq:
  - q: "Existe um app da Amazon Games para Linux?"
    a: "Não, a Amazon não faz um. O Heronite usa a ferramenta de código aberto [nile](https://github.com/imLinguin/nile) para entrar na conta, baixar e atualizar seus jogos, e roda os de Windows pelo Wine ou pelo Proton."
  - q: "Os jogos do Prime Gaming funcionam no Linux?"
    a: "Sim, depois que você os resgata na sua conta da Amazon. Ao entrar, sua biblioteca inteira da Amazon Games, incluindo os jogos do Prime Gaming que você resgatou, aparece na Coleção. Eles instalam e rodam como qualquer outro jogo."
  - q: "Como resgato jogos do Prime Gaming sem o app da Amazon?"
    a: "Resgate na página do Prime Gaming da Amazon, no navegador, com a mesma conta que você usa no Heronite. Depois atualize a biblioteca no Heronite e os jogos novos aparecem."
  - q: "Preciso instalar o Wine antes?"
    a: "Não. O Heronite escolhe uma versão do Proton e baixa para você. Você só precisa de um driver Vulkan funcionando. Veja [Wine e Proton](/docs/wine-and-proton/) para as opções."
  - q: "Posso usar a Amazon Games no Windows com o Heronite?"
    a: "Pode. No Windows, o Heronite mostra os jogos que o app da Amazon Games instalou, sem baixar de novo. Entrar na conta e instalar funcionam do mesmo jeito."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

A Amazon dá jogos de graça com o Prime, e o app dela só roda no Windows. O Heronite deixa você jogá-los no Linux. Você entra com a sua conta da Amazon, a biblioteca aparece na Coleção e os jogos instalam pela mesma fila de downloads dos seus jogos da Epic e da GOG.

Este guia leva você de uma instalação nova até um jogo do Prime Gaming resgatado rodando no Linux.

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- Uma conta da Amazon. Para os jogos grátis, uma assinatura Prime que inclua o Prime Gaming.
- Espaço livre em disco. O Heronite instala os jogos em `~/Games/Heronite` por padrão.

## Passo 1: Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/). Ele funciona em qualquer distribuição:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os pacotes para Debian, Ubuntu, Fedora e Arch estão no [guia de instalação](/pt-br/docs/installation/). Rode `vulkaninfo --summary` para ver se o Vulkan lista a sua GPU.

## Passo 2: Entre na sua conta da Amazon Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Amazon Games** e use **Entrar com a Amazon Games**.
3. Entre na página da Amazon, na janela pequena que abrir.

Se a janela não abrir, use o **método do navegador**. Na mesma página, escolha **Abrir no navegador**, entre na Amazon, copie o endereço da página do amazon.com em que você cair e cole no Heronite. No Linux, a janela de login precisa do WebKitGTK 4.1, que é a causa mais comum do problema.

Depois de entrar, sua biblioteca inteira da Amazon Games aparece na Coleção. Isso inclui os jogos do Prime Gaming que você já resgatou. O Heronite lê tudo com o [nile](https://github.com/imLinguin/nile). Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/) para mais.

## Passo 3: Resgate seus jogos do Prime Gaming

O Heronite não resgata jogos por você, então faça isso no site da Amazon:

1. Abra a página do Prime Gaming da Amazon no navegador e entre na conta.
2. Resgate os jogos que quiser, para que entrem na sua conta.
3. De volta ao Heronite, abra **Lojas**, **Amazon Games** e escolha **Atualizar biblioteca** ("Procurar jogos novos e atualizações").

Os jogos novos aparecem na Coleção. A Amazon troca as ofertas com frequência, então resgate o jogo enquanto ele estiver disponível.

## Passo 4: Instale um jogo

Antes de instalar, veja a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota dele no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo com nota Gold ou Platinum costuma rodar sem mudar nada.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Amazon Games**.
2. Confira a **Pasta de instalação** e a **Versão do Wine**. O padrão serve para começar.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).

O Heronite baixa e verifica os jogos com o [nile](https://github.com/imLinguin/nile). Uma única fila instala, atualiza, repara, move e desinstala jogos, e ela pausa quando você fica sem conexão.

## Passo 5: Jogue e ajuste

Aperte <kbd>Enter</kbd> para jogar. Se o jogo não abrir, abra **Configurações do jogo** e vá em **Compatibilidade**. Teste outra versão do Proton por lá. O GE-Proton e o Proton-CachyOS costumam ter correções primeiro, e o [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalá-los. Se um jogo continuar falhando, a página dele no [ProtonDB](https://www.protondb.com) muitas vezes traz a solução.

## Mantenha seus jogos atualizados e organizados

O Heronite procura atualizações de jogos a cada 3 horas. Quando um jogo tem atualização, **Atualizar tudo** na página da Amazon Games instala todas de uma vez. Você também pode reparar um jogo, movê-lo para outro disco ou desinstalá-lo pela mesma fila, o que ajuda quando a pasta de um jogo fica grande demais para o disco principal.

Seus jogos instalados continuam no disco se você sair da conta da Amazon no Heronite. Assim você pode trocar de conta, ou sair da conta num PC compartilhado, sem apagar os jogos. O login da Amazon fica na pasta de dados do Heronite, então mantenha essa pasta privada. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/) para saber onde ela fica.

Com os jogos na Coleção, você pode agrupar, filtrar e avaliar como os outros, ao lado dos seus jogos da Steam, da Epic e da GOG. Uma visão salva como *Pendentes* passa então a cobrir todas as lojas de uma vez.

## Uma nota sobre o Windows

No Windows, o Heronite trabalha com a Amazon do mesmo jeito e pode adicionar os jogos que o app da Amazon Games instalou, sem baixar de novo. Os passos de Wine e Proton deste guia só valem para o Linux.

## Limites que você deve conhecer

- Jogos com anti-cheat que bloqueia o Linux não vão rodar. Veja o status nos detalhes, que vem do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- As ofertas do Prime Gaming mudam com frequência. O que dá para resgatar depende da Amazon, não do Heronite.
- O Heronite mostra o que a sua conta da Amazon tem. Um jogo que não está na sua conta não aparece.

## Problemas comuns

- **A janela de login não abre.** Use o método do navegador ou instale o WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`).
- **Falta um jogo resgatado.** Confira se você usou a mesma conta da Amazon e atualize a biblioteca.
- **Falta uma DLL ou o .NET.** Instale com o Winetricks. O Heronite sugere qual.
- **Um jogo com DirectX 12 falha.** Ligue o VKD3D-Proton nas configurações do jogo. Para um erro de Direct3D, ligue o DXVK.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits. Instale o do seu vídeo.
- **Outro `wineserver` está rodando.** Feche o outro jogo ou rode `wineserver -k` nesse prefixo.

Os logs ficam em **Configurações → Logs**. Mais soluções em [Solução de problemas](/pt-br/docs/troubleshooting/).

## O que ler em seguida

- [Epic Games no Linux](/pt-br/guides/epic-games-on-linux/), para os jogos grátis da semana.
- [GOG no Linux](/pt-br/guides/gog-on-linux/), para jogos sem DRM.
- [Como as lojas funcionam no Heronite](/pt-br/features/stores/).
- [Primeiros passos](/pt-br/docs/getting-started/).
