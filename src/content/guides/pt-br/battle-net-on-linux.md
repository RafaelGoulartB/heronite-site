---
title: "Battle.net no Linux: instale com Wine e Proton"
description: "Instale a Battle.net no Linux com um botão: o Heronite configura o Wine, você entra na conta e os jogos da Blizzard que instalar vão para a Coleção."
eyebrow: Guia para Linux
headline: "Como instalar a Battle.net no Linux"
lead: "A Blizzard não faz versão para Linux, então o Heronite instala a Battle.net de Windows com o Wine pela página Lojas, sem configurar nada à mão."
navLabel: Battle.net no Linux
summary: "Instale a Battle.net pela página Lojas, entre na conta, instale seus jogos nela e jogue pela Coleção."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo aberto: capa, botão Jogar e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat. Os jogos instalados na Battle.net aparecem aqui também."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Um botão para instalar"
    text: "O Heronite instala a Battle.net com o Wine e o seu Proton padrão."
  - title: "Prefixo Wine próprio"
    text: "A Battle.net fica separada dos seus outros jogos."
  - title: "Login dentro da Battle.net"
    text: "O Heronite nunca vê a sua senha."
  - title: "Jogos na Coleção"
    text: "Os jogos da Blizzard instalados abrem por lá, ao lado dos outros."
faq:
  - q: "Existe uma Battle.net oficial para Linux?"
    a: "Não, a Blizzard não faz uma versão para Linux. O Heronite roda o app de Windows pelo Wine ou pelo Proton, com o instalador oficial."
  - q: "Quais jogos da Blizzard funcionam no Linux?"
    a: "Muitos, dependendo do jogo. Veja antes a nota dele no ProtonDB. Call of Duty não funciona: veja [O anti-cheat bloqueia algum jogo da Blizzard?](#o-anti-cheat-bloqueia-algum-jogo-da-blizzard)"
  - q: "Isso funciona no Windows?"
    a: "Não. A página da Battle.net no Heronite é só para Linux. No Windows, use o app da própria Blizzard."
  - q: "Onde o Heronite coloca a Battle.net?"
    a: "Num prefixo Wine em `~/Games/Heronite/Prefixes/Battle.net`. Remover a Battle.net do Heronite deixa essa pasta e os jogos dela no disco."
  - q: "Já uso a Battle.net no Wine ou no Lutris. Posso manter?"
    a: "Pode. Escolha **Usar uma instalação existente** na página da Battle.net e aponte o Heronite para o seu prefixo Wine."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando, além do driver Vulkan de 32 bits para jogos antigos.
- Uma conta da Battle.net.
- Conexão com a internet. O Heronite baixa uma versão do Proton se você não tiver nenhuma e, depois, o instalador da Battle.net.
- Espaço livre em disco para o Wine e os jogos.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/). Ele roda em qualquer distribuição:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Instale a Battle.net

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Na lista da esquerda, em **Apps das lojas**, escolha **Battle.net**.
3. Escolha **Instalar o Battle.net**.

O Heronite acha ou baixa um Proton, baixa o instalador oficial, cria o prefixo `~/Games/Heronite/Prefixes/Battle.net` e instala a Battle.net. Pode levar alguns minutos. Quando terminar, a página mostra **Pronto**.

> **Nota.** Se você já tem a Battle.net em um prefixo Wine, escolha **Usar uma instalação existente** e selecione esse prefixo.

## Entre na conta e instale jogos da Blizzard

1. Escolha **Abrir o Battle.net**.
2. Entre na janela da Battle.net. Você digita a senha lá, e o Heronite nunca a vê.
3. Instale um jogo como faria no Windows.

O Heronite mostra **Conectado** na página dele assim que você entra.

## Jogue seus jogos da Battle.net

Os jogos instalados entram na Coleção. Se algum não aparecer, escolha **Atualizar os jogos do Battle.net** na página da Battle.net. Aperte <kbd>Enter</kbd> num jogo para abri-lo. O Heronite registra o tempo de jogo.

Um jogo que você ainda não instalou mostra **Instalar pelo Battle.net** na Coleção, que abre o app.

Antes de instalar um jogo grande, veja a caixa **No Linux**. Ela mostra a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Troque a versão do Proton da Battle.net

O Heronite usa o seu Proton padrão. Para mudar, abra **Configurações do Wine** na página da Battle.net e escolha outra versão do Proton. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar. A **pasta do prefixo do Wine**, na mesma página, abre o prefixo.

Para encerrar o app e tudo o que roda no prefixo dele, feche antes qualquer jogo aberto e escolha **Fechar o Battle.net**.

## Remova a Battle.net do Heronite

Escolha **Remover do Heronite**. O prefixo Wine e os jogos instalados nele continuam no disco. Apague a pasta do prefixo você mesmo para ter o espaço de volta. Os dados do Heronite, com a sua Coleção e as configurações, ficam em `~/.local/share/heronite`. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## O anti-cheat bloqueia algum jogo da Blizzard?

Os jogos da Blizzard podem mudar a cada atualização, então veja o ProtonDB antes de instalar. Call of Duty é bloqueado: a página da Battle.net avisa que o anti-cheat Ricochet não roda no Linux. Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/) para saber como o Heronite trata esses apps de loja.

## A Battle.net não instala ou trava

- **A instalação trava ou falha.** Verifique sua conexão com a internet e tente de novo. Os logs ficam em **Configurações → Logs**.
- **A Battle.net ou um jogo trava.** Teste outra versão do Proton em **Configurações do Wine**, ou um prefixo novo.

Para DLLs faltando, erros do Vulkan e outras correções comuns do Wine, veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux).
