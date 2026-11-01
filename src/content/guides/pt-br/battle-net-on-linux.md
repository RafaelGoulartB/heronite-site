---
title: "Como instalar a Battle.net no Linux (Wine e Proton)"
description: "Instale a Battle.net no Linux com o Heronite: ele configura o Wine por você, você entra na conta, instala os jogos da Blizzard e eles aparecem na Coleção."
eyebrow: Guia para Linux
headline: "Como instalar a *Battle.net* no Linux"
lead: "O Heronite baixa o instalador da Battle.net, cria um prefixo Wine para ela e traz os jogos que você instalar para a sua Coleção, sem configurar o Wine à mão."
navLabel: Battle.net no Linux
summary: "Instale a Battle.net pela página Lojas, entre na conta, instale seus jogos nela e jogue pela Coleção."
order: 4
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo aberto: capa, botão Jogar e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat. Os jogos instalados na Battle.net aparecem aqui também."
og: /og/battle-net-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Um botão para instalar"
    text: "Escolha Battle.net na página Lojas e o Heronite instala com o Wine, usando o seu Proton padrão."
  - title: "Prefixo Wine próprio"
    text: "O app fica em ~/Games/Heronite/Prefixes/Battle.net, separado dos seus outros jogos."
  - title: "Login na página da Blizzard"
    text: "Você entra dentro da própria Battle.net. O Heronite nunca vê a sua senha."
  - title: "Jogos na Coleção"
    text: "O que você instala na Battle.net aparece ao lado dos seus outros jogos e abre por lá."
faq:
  - q: "Existe uma Battle.net oficial para Linux?"
    a: "Não. A Blizzard não faz uma versão para Linux, então o app de Windows roda pelo Wine ou pelo Proton. O Heronite automatiza isso: baixa o instalador oficial e instala num prefixo Wine próprio, com o seu Proton padrão."
  - q: "Quais jogos da Blizzard funcionam no Linux?"
    a: "Muitos rodam bem, mas depende do jogo. Veja a nota dele no ProtonDB antes de instalar. Call of Duty é a exceção clara, porque o anti-cheat Ricochet não roda no Linux."
  - q: "Isso funciona no Windows?"
    a: "Não. As páginas da Battle.net, EA app, Ubisoft Connect e Rockstar são só para Linux no Heronite. No Windows, use os apps das próprias lojas."
  - q: "Onde o Heronite coloca a Battle.net?"
    a: "Num prefixo Wine em `~/Games/Heronite/Prefixes/Battle.net`. Remover a Battle.net do Heronite deixa essa pasta e os jogos dela no disco. Veja [Arquivos e pastas](/docs/files-and-folders/)."
  - q: "Já uso a Battle.net no Wine ou no Lutris. Posso manter?"
    a: "Pode. Escolha **Usar uma instalação existente** na página da Battle.net e aponte o Heronite para o prefixo Wine que você já tem."
related:
  - /guides/ea-app-ubisoft-rockstar-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

A Blizzard não tem uma Battle.net para Linux, mas o app de Windows roda no Wine, e muitos dos jogos dela também. O Heronite faz a configuração para você. Ele instala o app num prefixo Wine próprio, deixa você entrar na conta e instalar jogos como de costume, e depois mostra esses jogos na sua Coleção.

Ao final deste guia, você terá a Battle.net rodando no Linux e seus jogos da Blizzard na mesma lista do resto da biblioteca.

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando, além do driver Vulkan de 32 bits para jogos antigos.
- Uma conta da Battle.net.
- Conexão com a internet. O Heronite baixa uma versão do Proton se você não tiver nenhuma e, depois, o instalador da Battle.net.
- Espaço livre em disco para o Wine e os jogos.

O Heronite é a única coisa que você instala à mão. O Wine e o Proton vêm com ele.

## Passo 1: Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/). Ele roda em qualquer distribuição:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). Veja se o Vulkan funciona com `vulkaninfo --summary`. Se a sua GPU não aparecer, instale antes o driver Vulkan da sua distribuição.

## Passo 2: Instale a Battle.net

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Na lista da esquerda, em **Apps das lojas**, escolha **Battle.net**.
3. Escolha **Instalar o Battle.net** ("Baixar o instalador e instalar com o Wine").

Em seguida, o Heronite procura um Proton, baixa um se precisar, baixa o instalador oficial, cria o prefixo Wine e instala a Battle.net. A página mostra o progresso. Pode levar alguns minutos.

O prefixo é `~/Games/Heronite/Prefixes/Battle.net`. Cada app de loja recebe um prefixo próprio, então um não estraga o outro. Quando terminar, a página mostra **Pronto**.

> **Nota.** Se você já tem a Battle.net em um prefixo Wine, escolha **Usar uma instalação existente** e selecione esse prefixo.

## Passo 3: Entre na conta e instale jogos

1. Escolha **Abrir o Battle.net** ("Entre na sua conta e instale jogos").
2. Entre na janela da Battle.net. Você digita a senha lá, e o Heronite nunca a vê.
3. Instale um jogo como faria no Windows.

O Heronite mostra **Conectado** na página dele assim que você entra.

## Passo 4: Encontre seus jogos na Coleção

Os jogos instalados na Battle.net entram sozinhos na Coleção. Se algum não aparecer, escolha **Atualizar os jogos do Battle.net** ("Trazer os jogos instalados dele para a Coleção") na página. Aperte <kbd>Enter</kbd> num jogo para abri-lo, e o Heronite registra o tempo de jogo como faz com qualquer outro.

Para um jogo que você tem, mas ainda não instalou, a Coleção oferece **Instalar pelo Battle.net**, que abre o app.

Antes de instalar um jogo grande, veja a caixa **No Linux** nos detalhes. Ela mostra a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Passo 5: Troque o Wine ou o Proton se algo quebrar

O Heronite usa o seu Proton padrão para a Battle.net. Para mudar, abra **Configurações do Wine** na página da Battle.net e escolha outra versão. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar. Na mesma página, você também pode abrir a **pasta do prefixo do Wine**.

Se um jogo estiver aberto, feche-o antes. Escolha **Fechar o Battle.net** para encerrar o app e o que estiver rodando no prefixo dele.

## Onde fica tudo

Saber as pastas ajuda na hora de fazer backup ou liberar espaço:

- O app da Battle.net e os jogos que você instala nele ficam no prefixo Wine dele, `~/Games/Heronite/Prefixes/Battle.net`.
- Os dados do próprio Heronite, com a sua Coleção e as configurações, ficam em `~/.local/share/heronite`.
- A página tem um botão **Abrir pasta** para o prefixo, então você não precisa digitar o caminho.

Se não quiser mais a Battle.net no Heronite, escolha **Remover do Heronite**. O prefixo Wine e os jogos instalados nele continuam no disco, então nada é apagado sem querer. Apague a pasta você mesmo se quiser o espaço de volta.

Os jogos da Battle.net se comportam como todos os outros da Coleção. Você pode definir o status, agrupar por loja e vê-los nas suas estatísticas. Leia [Arquivos e pastas](/pt-br/docs/files-and-folders/) para a lista completa de caminhos.

## O que não vai funcionar

O limite é o anti-cheat. A própria página da Battle.net no Heronite avisa que Call of Duty usa o anti-cheat Ricochet, que não roda no Linux. Outros jogos da Blizzard podem se comportar de forma diferente a cada atualização, então veja o ProtonDB antes de instalar.

No Windows, não há uma página da Battle.net no Heronite. Use o app da própria Blizzard lá. Veja [Lojas e launchers](/pt-br/docs/stores-and-launchers/).

## Problemas comuns

- **A instalação trava ou falha.** Verifique sua conexão com a internet e tente de novo. Leia os logs em **Configurações → Logs**.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits. Instale o do seu vídeo, por exemplo `lib32-vulkan-radeon` ou `mesa-vulkan-drivers:i386`.
- **Outro `wineserver` está rodando.** Feche o outro jogo ou rode `wineserver -k` nesse prefixo.
- **Um jogo não aparece.** Use **Atualizar os jogos do Battle.net**.
- **A Battle.net ou um jogo trava.** Teste outra versão do Proton em **Configurações do Wine**, ou um prefixo novo.
- **Falta uma DLL ou o .NET.** Instale com o Winetricks. O Heronite sugere qual.

Veja [Solução de problemas](/pt-br/docs/troubleshooting/) para mais.

## O que ler em seguida

- [EA app, Ubisoft Connect e Rockstar no Linux](/pt-br/guides/ea-app-ubisoft-rockstar-on-linux/), que funcionam do mesmo jeito.
- [Como instalar o GE-Proton](/pt-br/guides/install-ge-proton/).
- [Como as lojas funcionam no Heronite](/pt-br/features/stores/).
- [Wine e Proton](/pt-br/docs/wine-and-proton/), com todas as opções por jogo.
