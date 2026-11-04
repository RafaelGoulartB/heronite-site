---
title: "Como jogar GOG no Linux sem o GOG Galaxy"
description: "Instale jogos da GOG no Linux sem o GOG Galaxy: faça login para ter sua biblioteca inteira ou adicione instaladores offline sem DRM, sem conta."
eyebrow: Guia para Linux
headline: "Como jogar GOG no Linux"
lead: "Jogue GOG no Linux sem o GOG Galaxy. Faça login para instalar sua biblioteca pelo Heronite, ou adicione instaladores sem DRM à mão."
navLabel: GOG no Linux
summary: "Faça login na GOG pelo Heronite para instalar sua biblioteca, ou adicione à mão instaladores offline sem DRM e pastas de jogos."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo selecionado: capa, botão Jogar, detalhes e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Login uma vez só"
    text: "Sua biblioteca inteira da GOG aparece depois de um login."
  - title: "Versões nativas para Linux"
    text: "Quando a GOG lista uma versão para Linux, o Heronite instala sem Wine."
  - title: "Atualizações automáticas"
    text: "O Heronite procura atualizações dos seus jogos da GOG a cada 3 horas."
  - title: "Um prefixo por jogo"
    text: "Cada jogo de Windows roda na sua própria pasta, separado dos outros."
faq:
  - q: "Existe um GOG Galaxy para Linux?"
    a: "Não, a GOG não faz versão do Galaxy para Linux. O Heronite usa o [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para fazer login, baixar, verificar e atualizar seus jogos. Ele é uma ferramenta de código aberto, não oficial, para a GOG."
  - q: "Os jogos da GOG rodam no Linux?"
    a: "Muitos rodam. A maioria é de jogos de Windows que rodam pelo Wine ou pelo Proton. Veja a nota do jogo no [ProtonDB](https://www.protondb.com) antes de instalar."
  - q: "Por que meus downloads da GOG falham no Linux?"
    a: "Confira se o `python3` está instalado, porque o gogdl precisa dele. Instale pelo gerenciador de pacotes e tente de novo. Outras causas estão na [página de solução de problemas](/docs/troubleshooting/)."
  - q: "Dá para jogar jogos da GOG no Steam Deck?"
    a: "Sim. Faça login na GOG no Modo Desktop e depois jogue no Modo Jogo. O [guia do Steam Deck](/guides/steam-deck/) mostra os passos."
  - q: "Posso usar meus jogos do GOG Galaxy no Windows?"
    a: "Sim, no Windows. O Heronite mostra como instalados os jogos que o GOG Galaxy instalou, sem baixar de novo. No Linux não existe Galaxy para importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- O `python3`, no qual o gogdl (a ferramenta que baixa os jogos da GOG) roda. Teste com `python3 --version` e instale pelo gerenciador de pacotes se o comando não existir.
- Uma conta da GOG, para fazer login. Adicionar jogos à mão não precisa de conta.
- Espaço livre em disco. Os jogos são instalados em `~/Games/Heronite`.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Faça login na GOG

1. Abra **Lojas** (<kbd>Ctrl</kbd> <kbd>4</kbd>).
2. Escolha **GOG**.
3. Clique em **Entrar**.
4. Faça login na página da GOG, na janela que abrir.

Aí todos os seus jogos da GOG aparecem na sua biblioteca. Se a janela de login não abrir, use **Ou entre pelo navegador** na mesma página. Copie o endereço da página em que você cair, que contém `code=`, e cole no Heronite ([logins das lojas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha)).

## Instale e jogue um jogo da GOG

Antes, veja a caixa **No Linux** nos detalhes do jogo, com a nota do [ProtonDB](https://www.protondb.com).

1. Encontre o jogo na sua biblioteca e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela GOG**.
2. Confira a pasta em **Selecionar local de instalação**. Para um jogo de Windows, a **Versão do Wine** fica em **Mostrar configurações do Wine**; o padrão é um bom começo.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Quando terminar, selecione o jogo e aperte <kbd>Enter</kbd> para jogar.

Quando a GOG lista uma versão nativa para Linux, o Heronite pode oferecê-la no lugar da versão de Windows, sem Wine.

## Troque a versão do Proton

Se um jogo de Windows der problema, abra **Configurações do jogo → Compatibilidade** e escolha outra versão em **Versão**. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como conseguir mais versões.

![As Configurações do jogo do Heronite para Control, na aba Compatibilidade, com a versão do Proton, a nota do ProtonDB e o prefixo Wine.](../../../assets/screenshots/game-settings.webp)

Cada jogo de Windows tem o seu próprio prefixo Wine (uma pasta que funciona como um Windows só daquele jogo) em `~/Games/Heronite/Prefixes`.

## Adicione jogos da GOG sem DRM à mão

1. Baixe o instalador offline na sua conta, no site da GOG.
2. Abra o instalador. Para um instalador de Windows, clique em **Executar .exe no prefixo** em **Configurações do jogo → Compatibilidade**, ou rode pelo Wine você mesmo.
3. Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> e adicione o jogo instalado: um programa de Windows (`.exe`), um programa nativo de Linux ou um script de início.

Para adicionar vários jogos de uma vez, escolha **Adicionar de uma pasta** no menu ☰. O Heronite busca arte e detalhes para esses jogos, mas eles não ficam ligados à sua conta da GOG, então não se atualizam.

Se um jogo da GOG já está neste PC, clique em **Importar jogo**, na seção **Importar um jogo instalado** da página da GOG, em vez de baixar de novo.

## Atualize, repare ou mova um jogo da GOG

- **Atualizar:** o Heronite procura atualizações a cada 3 horas. **Atualizar tudo** na página da GOG instala várias de uma vez.
- **Reparar ou mover:** escolha **Verificar e reparar** ou **Mover instalação** nas ações do jogo.

Uma única fila de downloads faz essas tarefas e as desinstalações. Ela pausa quando você fica offline e tenta de novo os downloads que falham.

Os jogos instalados continuam no disco se você sair da conta da GOG. O Heronite guarda o seu login na pasta de dados dele, então mantenha essa pasta privada ([Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Um jogo da GOG não abre no Linux

Abra **Configurações → Logs** e leia o log de inicialização do jogo. O Heronite mostra uma correção quando conhece uma. As correções comuns do Wine estão em [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux), e as opções por jogo em [Wine e Proton](/pt-br/docs/wine-and-proton/#opções-por-jogo).
