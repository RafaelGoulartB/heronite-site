---
title: "Jogos da Epic no Linux: biblioteca e jogos grátis"
description: "Jogue os jogos da Epic no Linux sem o launcher oficial: faça login, resgate os grátis da semana, instale com o Proton e veja o anti-cheat antes."
eyebrow: Guia para Linux
headline: "Como jogar Epic Games no Linux"
lead: "A Epic não faz launcher para Linux. O Heronite faz login na Epic e roda seus jogos pelo Proton, sem configurar o Wine."
navLabel: Epic Games no Linux
summary: "Faça login na Epic pelo Heronite, instale seus jogos pelo Proton e confira o suporte a anti-cheat antes de baixar."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com ELDEN RING aberto: o botão Jogar e, abaixo dele, uma caixa No Linux com a nota Gold do ProtonDB e o status do anti-cheat EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Login uma vez só"
    text: "Sua biblioteca inteira da Epic aparece depois de um login."
  - title: "Já está no disco?"
    text: "Importe os arquivos que você já tem em vez de baixar o jogo de novo."
  - title: "Proton por padrão"
    text: "O Heronite escolhe uma versão do Proton, e você troca em cada jogo."
  - title: "Confira antes de instalar"
    text: "Cada jogo mostra a nota do ProtonDB e o status do anti-cheat."
faq:
  - q: "Existe o Epic Games Launcher para Linux?"
    a: "Não. O Heronite usa o [legendary](https://github.com/derrod/legendary), uma ferramenta de código aberto da Epic, para fazer login, instalar, atualizar e jogar seus jogos."
  - q: "Dá para jogar Fortnite no Linux?"
    a: "Não. A Epic não ativou o suporte a Linux no anti-cheat do Fortnite."
  - q: "Os jogos grátis da semana da Epic funcionam no Linux?"
    a: "Sim, depois que você os resgata no site da Epic. Atualize a biblioteca no Heronite e eles instalam como qualquer outro jogo."
  - q: "Preciso instalar o Wine ou o Proton antes?"
    a: "Não. O Heronite baixa uma versão do Proton quando precisa. Você só precisa de um driver Vulkan funcionando. Veja [Wine e Proton](/docs/wine-and-proton/)."
  - q: "É seguro fazer login na Epic pelo Heronite?"
    a: "Sim. Sua senha vai só para a página de login da própria Epic, e o Heronite guarda o login no seu PC. Veja o [FAQ](/docs/faq/)."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando. Rode `vulkaninfo --summary` para ver se ele lista a sua GPU. Jogos antigos de 32 bits também precisam do driver Vulkan de 32 bits.
- Uma conta da Epic Games.
- Espaço livre em disco. Os jogos são instalados em `~/Games/Heronite` por padrão.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os pacotes para outras distribuições estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Faça login na Epic Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Epic Games** e depois **Entrar com a Epic Games**.
3. Faça login na página da Epic, na janela que abrir. Sua senha vai só para a Epic.

Aí sua biblioteca inteira da Epic aparece no Heronite, instalada ou não. Se a janela de login não abrir, use o **login pelo navegador** na mesma página, como explica a [Solução de problemas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha).

## Resgate os jogos grátis da semana

O Heronite não resgata os jogos grátis da Epic, então faça isso no site dela:

1. Abra a página da loja da Epic no navegador e faça login com a mesma conta.
2. Resgate o jogo grátis.
3. No Heronite, escolha **Lojas → Epic Games → Atualizar biblioteca**.

Aí o jogo aparece na sua biblioteca, junto com os de semanas anteriores. Se algum não aparecer, confira se usou a mesma conta da Epic e atualize de novo.

## Instale e jogue um jogo da Epic

Antes, veja a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo Gold ou Platinum costuma rodar sem trabalho nenhum.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Epic Games**.
2. Confira a **Pasta de instalação**. A **Versão do Wine** fica em **Mostrar configurações do Wine**; se estiver em dúvida, deixe a padrão.
3. Confirme. O download aparece na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Quando terminar, selecione o jogo e aperte <kbd>Enter</kbd> para jogar.

Cada jogo ganha o seu próprio prefixo Wine, uma pasta separada do Windows. Deixe **Usar o prefixo Wine compartilhado** desligado, a menos que saiba por que quer usar. Se os arquivos do jogo já estão no disco, escolha **Importar uma instalação existente** e aponte o Heronite para a pasta.

## Troque a versão do Proton

Se o jogo não abre ou roda mal, vá em **Configurações do jogo → Compatibilidade** e escolha outra versão em **Versão**. A linha do ProtonDB ali costuma dizer qual é a melhor.

![As Configurações do jogo do Heronite para Control, um jogo da Epic, na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks.](../../../assets/screenshots/game-settings.webp)

O GE-Proton e o Proton-CachyOS costumam ter correções antes das outras versões. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalar.

## Quais jogos da Epic o anti-cheat bloqueia?

O anti-cheat é o principal motivo de um jogo online da Epic não rodar no Linux. Jogos single-player raramente têm esse problema.

- Alguns jogos com Easy Anti-Cheat ou BattlEye funcionam. Ligue o runtime certo em **Runtimes de anti-cheat**, em **Configurações do jogo → Compatibilidade**, e o Heronite baixa antes da próxima abertura.
- Jogos cuja desenvolvedora não permite o Linux não vão rodar.
- O Fortnite é um deles. O Easy Anti-Cheat pode funcionar no Linux, mas a Epic não ativou isso no Fortnite.

O [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) acompanha o status de cada jogo. A documentação explica o [anti-cheat](/pt-br/docs/wine-and-proton/#anti-cheat) com mais detalhes.

## Um jogo da Epic não abre no Linux

Leia o log de inicialização dele em **Configurações → Logs**. A [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux) cobre DLLs faltando, DirectX 12 e erros do Vulkan.
