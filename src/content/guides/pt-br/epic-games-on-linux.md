---
title: "Jogos da Epic no Linux: biblioteca e jogos grátis"
description: "Jogue os jogos da Epic no Linux sem o launcher oficial: entre na conta, resgate os grátis da semana, instale com o Proton e veja o anti-cheat antes."
eyebrow: Guia para Linux
headline: "Como jogar jogos da Epic Games no Linux"
lead: "A Epic não faz launcher para Linux. O Heronite entra na conta com o legendary e roda seus jogos da Epic Games pelo Proton, sem configurar o Wine."
navLabel: Epic Games no Linux
summary: "Entre na Epic pelo Heronite, instale seus jogos pelo Proton e confira o suporte a anti-cheat antes de baixar."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com ELDEN RING aberto: o botão Jogar e, abaixo dele, uma caixa No Linux com a nota Gold do ProtonDB e o status do anti-cheat EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Entre uma vez só"
    text: "Sua biblioteca inteira da Epic aparece depois de um login."
  - title: "Jogos grátis incluídos"
    text: "Os jogos grátis resgatados instalam como qualquer outro."
  - title: "Proton por padrão"
    text: "O Heronite escolhe uma versão do Proton, e você troca em cada jogo."
  - title: "Confira antes de instalar"
    text: "Cada jogo mostra a nota do ProtonDB e o status do anti-cheat."
faq:
  - q: "Existe a Epic Games Launcher para Linux?"
    a: "Não, a Epic não faz launcher para Linux. O Heronite usa a ferramenta de código aberto [legendary](https://github.com/derrod/legendary) para entrar na conta, instalar, atualizar e jogar."
  - q: "Dá para jogar Fortnite no Linux?"
    a: "Não. A desenvolvedora não ativou o suporte a Linux no anti-cheat. Veja [quais jogos da Epic o anti-cheat bloqueia](#quais-jogos-da-epic-o-anti-cheat-bloqueia)."
  - q: "Os jogos grátis da semana da Epic funcionam no Linux?"
    a: "Sim, depois que você os resgata no site da Epic. Veja [Resgate os jogos grátis da semana](#resgate-os-jogos-grátis-da-semana)."
  - q: "Preciso instalar o Wine ou o Proton antes?"
    a: "Não. O Heronite baixa uma versão do Proton quando precisa. Você só precisa de um driver Vulkan funcionando. Veja [Wine e Proton](/docs/wine-and-proton/)."
  - q: "É seguro entrar na Epic pelo Heronite?"
    a: "Sim. Sua senha vai só para a página de login da própria Epic. O Heronite guarda o login no seu PC. Veja o [FAQ](/docs/faq/)."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando. Rode `vulkaninfo --summary` para ver se ele lista a sua GPU. Jogos antigos de 32 bits também precisam do driver Vulkan de 32 bits.
- Uma conta da Epic Games.
- Espaço livre em disco. O Heronite instala os jogos em `~/Games/Heronite` por padrão.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os pacotes para outras distribuições estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Entre na sua conta da Epic Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Epic Games** e depois **Entrar com a Epic Games**.
3. Entre na página da Epic, na janela que abrir.

Você digita a senha na página da própria Epic. Sua biblioteca inteira da Epic aparece na Coleção, instalada ou não.

Se a janela não abrir, use o **método do navegador** na mesma página. A [página de solução de problemas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha) tem os detalhes.

## Resgate os jogos grátis da semana

O Heronite não resgata os jogos grátis da Epic, então faça isso no site dela:

1. Abra a página da loja da Epic no navegador e entre com a mesma conta.
2. Resgate o jogo grátis.
3. No Heronite, escolha **Lojas → Epic Games → Atualizar biblioteca**.

O jogo aparece na Coleção como qualquer outro, e os de semanas anteriores também. Se algum não aparecer, confira se usou a mesma conta da Epic e atualize de novo.

## Instale um jogo da Epic

Veja antes a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo Gold ou Platinum costuma rodar sem trabalho nenhum.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Epic Games**.
2. Confira a **Pasta de instalação** e a **Versão do Wine**. Se estiver em dúvida, deixe a versão padrão.
3. Confirme. O download aparece na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Cada jogo recebe o próprio prefixo Wine, uma pasta de Windows de mentirinha só dele. Deixe **Usar o prefixo Wine compartilhado** desligado, a menos que saiba por que quer usá-lo. Já tem os arquivos do jogo no disco? Escolha **Importar uma instalação existente** e aponte o Heronite para a pasta.

## Jogue

Selecione o jogo instalado e aperte <kbd>Enter</kbd>.

## Troque a versão do Proton

Se o jogo não abrir ou rodar mal, vá em **Configurações do jogo → Compatibilidade** e escolha outra versão do Proton em **Versão**. A linha do ProtonDB ali costuma dizer qual é a melhor.

![As Configurações do jogo do Heronite para Control, um jogo da Epic, na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks.](../../../assets/screenshots/game-settings.webp)

O GE-Proton e o Proton-CachyOS costumam ter correções antes das outras versões. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalá-los.

## Quais jogos da Epic o anti-cheat bloqueia?

Jogos para um jogador raramente têm esse problema. Nos outros, o anti-cheat é o principal motivo de um jogo da Epic não rodar no Linux.

- Alguns jogos usam Easy Anti-Cheat ou BattlEye e funcionam. O Heronite pode fornecer os runtimes.
- Algumas desenvolvedoras não liberam o Linux, então o jogo não roda, não importa o que você tente.
- O Fortnite é um desses casos. O Easy Anti-Cheat da Epic pode funcionar no Linux, mas a desenvolvedora precisa ativar, e a do Fortnite não ativou.

O [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) acompanha o status de cada jogo. Veja mais em [Anti-cheat](/pt-br/docs/wine-and-proton/#anticheat).

## Um jogo não abre

Leia o log de inicialização dele em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux) cobre DLLs faltando, DirectX 12, erros do Vulkan e outras correções comuns.
