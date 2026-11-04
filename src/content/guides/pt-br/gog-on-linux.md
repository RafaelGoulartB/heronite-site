---
title: "Como jogar GOG no Linux sem o GOG Galaxy"
description: "Como jogar GOG no Linux sem o GOG Galaxy: entre na conta para ter sua biblioteca inteira ou adicione instaladores offline sem DRM, sem precisar de conta."
eyebrow: Guia para Linux
headline: "Como jogar GOG no Linux"
lead: "Jogue GOG no Linux sem o GOG Galaxy. Entre na conta e o Heronite instala os jogos com o gogdl, ou adicione instaladores sem DRM à mão."
navLabel: GOG no Linux
summary: "Entre na GOG pelo Heronite, instale jogos com o gogdl ou adicione à mão instaladores offline sem DRM e pastas de jogos."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo selecionado: capa, botão Jogar, detalhes e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Entre pela página Lojas"
    text: "Sua biblioteca inteira da GOG vai para a Coleção depois do login."
  - title: "Instala com o gogdl"
    text: "O gogdl é a ferramenta de código aberto que o Heroic também usa."
  - title: "Sem DRM, do seu jeito"
    text: "Adicione instaladores offline ou pastas de jogos, sem login."
  - title: "Precisa do python3"
    text: "O gogdl roda em Python, então instale o python3 antes."
faq:
  - q: "Existe um GOG Galaxy para Linux?"
    a: "Não, a GOG não faz uma versão do Galaxy para Linux. O Heronite usa a ferramenta de código aberto [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para entrar na conta, baixar, verificar e atualizar seus jogos."
  - q: "Os jogos da GOG rodam no Linux?"
    a: "Muitos rodam. A maioria é de jogos de Windows que rodam pelo Wine ou pelo Proton, e alguns têm versão nativa para Linux. Veja a nota do jogo no [ProtonDB](https://www.protondb.com) antes de instalar."
  - q: "Por que meus downloads da GOG falham no Linux?"
    a: "O gogdl precisa do `python3`. Instale pelo gerenciador de pacotes e tente de novo. Outras causas estão na [página de solução de problemas](/docs/troubleshooting/)."
  - q: "Posso jogar os jogos da GOG sem entrar na conta?"
    a: "Pode. Os jogos da GOG não têm DRM, então um instalador offline funciona sem nenhuma launcher. Veja [Adicione jogos da GOG sem DRM à mão](#adicione-jogos-da-gog-sem-drm-à-mão)."
  - q: "Posso usar meus jogos do GOG Galaxy no Windows?"
    a: "Pode, no Windows. O Heronite mostra como instalados os jogos que o GOG Galaxy instalou, sem baixar de novo. No Linux não existe Galaxy para importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- O `python3`, no qual a ferramenta gogdl roda. Teste com `python3 --version` e instale pelo gerenciador de pacotes se o comando não existir.
- Uma conta da GOG, para entrar. Adicionar jogos à mão não precisa de conta.
- Espaço livre em disco. O Heronite instala os jogos em `~/Games/Heronite`.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Entre na sua conta da GOG

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **GOG** e depois **Entrar com a GOG**.
3. Entre na página da GOG, na janela que abrir.

Sua biblioteca inteira da GOG já aparece na Coleção.

Se a janela não abrir, use o **método do navegador** na mesma página. Copie o endereço da página em que você cair, que contém `code=`, e cole no Heronite. Veja [Logins das lojas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha).

## Instale um jogo da GOG

Veja antes a caixa **No Linux** nos detalhes do jogo, com a nota do [ProtonDB](https://www.protondb.com).

1. Encontre o jogo na Coleção e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela GOG**.
2. Escolha a **Pasta de instalação** e, para um jogo de Windows, a **Versão do Wine**. O padrão é um bom começo.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Alguns jogos da GOG têm versão nativa para Linux. Quando a GOG lista uma, o Heronite pode oferecê-la no lugar da versão de Windows, sem Wine.

## Jogue

Selecione o jogo instalado e aperte <kbd>Enter</kbd>.

## Troque a versão do Proton

Os jogos de Windows rodam pelo Wine ou pelo Proton, cada um com o próprio prefixo em `~/Games/Heronite/Prefixes`. Se um jogo der problema, teste outra versão do Proton em **Configurações do jogo → Compatibilidade**. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como conseguir mais.

![As Configurações do jogo do Heronite para Control, na aba Compatibilidade, com a versão do Proton, a nota do ProtonDB e o prefixo Wine.](../../../assets/screenshots/game-settings.webp)

## Adicione jogos da GOG sem DRM à mão

1. Baixe o instalador offline na sua conta, no site da GOG.
2. Rode um instalador de Windows pelo Wine, você mesmo ou com o botão **Executar .exe no prefixo** em **Configurações do jogo → Compatibilidade**. Rode um instalador de Linux como de costume.
3. Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> e adicione o jogo instalado. Escolha um programa de Windows (`.exe`), um programa nativo de Linux ou um script de inicialização.
4. Ou aponte o Heronite para a pasta onde ficam seus jogos. Ele adiciona de uma vez todos os jogos que encontrar.

O Heronite busca arte e detalhes para eles, mas eles não ficam ligados à sua conta da GOG, então não se atualizam. Se um jogo da GOG já está neste PC, use **Importar um jogo instalado** na página da GOG em vez de baixar de novo.

## Atualize, repare ou mova um jogo da GOG

Uma única fila de downloads cuida de atualizações, reparos, mudanças de pasta e desinstalações. O Heronite procura atualizações a cada 3 horas, e **Atualizar tudo** na página da GOG instala várias de uma vez. A fila pausa quando você fica sem conexão e tenta de novo os downloads que falham.

Seus jogos instalados continuam no disco se você sair da conta da GOG. O Heronite guarda o login na pasta de dados dele, então mantenha essa pasta privada. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Um jogo da GOG não abre no Linux

Abra **Configurações → Logs** e leia o log de inicialização do jogo. O Heronite mostra uma solução quando conhece uma. As correções comuns do Wine estão em [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux), e as opções por jogo em [Wine e Proton](/pt-br/docs/wine-and-proton/#opções-por-jogo).
