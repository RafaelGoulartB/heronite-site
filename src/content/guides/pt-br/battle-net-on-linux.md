---
title: "Battle.net no Linux: instale com Wine e Proton"
description: "Instale a Battle.net no Linux com um botão: o Heronite configura o Wine, você faz login e os jogos da Blizzard que instalar entram na sua biblioteca."
eyebrow: Guia para Linux
headline: "Como instalar a Battle.net no Linux"
lead: "A Blizzard não faz versão para Linux, então o Heronite instala a Battle.net de Windows com o Wine pela página Lojas, sem configurar nada à mão."
navLabel: Battle.net no Linux
summary: "Instale a Battle.net pela página Lojas, faça login, instale seus jogos nela e jogue pela sua biblioteca do Heronite."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo aberto: capa, botão Jogar e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat. Os jogos instalados na Battle.net aparecem aqui também."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Um botão para instalar"
    text: "O Heronite baixa o Proton se precisar e depois o instalador oficial."
  - title: "Prefixo Wine próprio"
    text: "A Battle.net fica separada dos seus outros jogos."
  - title: "Login dentro da Battle.net"
    text: "O Heronite nunca vê a sua senha."
  - title: "Jogue pelo Heronite"
    text: "Os jogos da Blizzard instalados abrem pela sua biblioteca do Heronite e contam tempo de jogo."
faq:
  - q: "Existe uma Battle.net oficial para Linux?"
    a: "Não, a Blizzard não faz versão para Linux. O Heronite roda o app da loja de Windows pelo Wine ou pelo Proton, com o instalador oficial."
  - q: "Quais jogos da Blizzard funcionam no Linux?"
    a: "Muitos, dependendo do jogo. Veja antes a nota dele no ProtonDB. Call of Duty não funciona, porque o anti-cheat Ricochet dele não roda no Linux."
  - q: "Isso funciona no Windows?"
    a: "Sim. No Windows, o Heronite roda a Battle.net direto, sem Wine, e usa a instalação que você já tem, se houver. Os jogos dela aparecem na sua biblioteca e abrem pela Battle.net."
  - q: "Onde o Heronite coloca a Battle.net?"
    a: "Num prefixo Wine em `~/Games/Heronite/Prefixes/Battle.net`. Remover a Battle.net do Heronite deixa essa pasta e os jogos dela no disco."
  - q: "Já uso a Battle.net no Wine ou no Lutris. Posso manter?"
    a: "Sim. Clique em **Usar uma instalação existente** na página da Battle.net e selecione o seu prefixo Wine."
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
3. Clique em **Instalar o Battle.net**.
4. Espere a página mostrar **Pronto**. Pode levar alguns minutos.

O Heronite acha ou baixa um Proton e depois o instalador oficial. Ele cria o prefixo Wine (uma pasta que funciona como um Windows só daquele app) `~/Games/Heronite/Prefixes/Battle.net` e instala a Battle.net nele. Se você já tem a Battle.net num prefixo Wine, clique em **Usar uma instalação existente** no lugar do passo 3 e selecione esse prefixo.

## Faça login, instale e jogue os jogos da Blizzard

1. Clique em **Abrir o Battle.net**.
2. Faça login na janela da Battle.net. O Heronite nunca vê a sua senha, e a página dele passa a mostrar **Conectado**.
3. Instale um jogo na Battle.net, como faria no Windows.
4. Aperte <kbd>Enter</kbd> no jogo na sua biblioteca do Heronite para abri-lo. O Heronite registra o tempo de jogo.

Antes de instalar um jogo grande, veja a caixa **No Linux** dele no Heronite. Ela mostra a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

Se um jogo instalado não aparecer na sua biblioteca, clique em **Atualizar** em **Instalados** na página da Battle.net. Um jogo que você não instalou mostra **Instalar pelo Battle.net**, que abre o app da loja.

## Troque a versão do Proton da Battle.net

Abra **Configurações do Wine** na página da Battle.net e escolha outra versão em **Versão**, na aba **Compatibilidade**. Até você mudar, o Heronite usa o seu Proton padrão. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar.

Para abrir o prefixo, clique em **Abrir pasta** ao lado de **Prefixo Wine**, na mesma página. Para encerrar o app da loja e tudo o que roda no prefixo dele, feche antes qualquer jogo aberto e clique em **Fechar o Battle.net**.

## Remova a Battle.net do Heronite

Clique em **Remover do Heronite** na página da Battle.net. O prefixo Wine e os jogos instalados nele continuam no disco. Apague a pasta do prefixo você mesmo para ter o espaço de volta ([Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## O anti-cheat bloqueia algum jogo da Blizzard?

Sim, Call of Duty. A página da Battle.net avisa que o anti-cheat Ricochet dele não roda no Linux. Os outros jogos da Blizzard podem mudar de uma atualização para outra, então veja o ProtonDB antes de instalar.

## A Battle.net não instala ou trava

- **A instalação para ou falha.** Verifique sua conexão com a internet e tente de novo. Os logs ficam em **Configurações → Logs**.
- **A Battle.net ou um jogo trava.** Teste outra versão em **Configurações do Wine**, ou um prefixo novo.

Para DLLs faltando, erros do Vulkan e outras correções do Wine, veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux).
