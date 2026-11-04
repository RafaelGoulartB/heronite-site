---
title: "FAQ do Heronite: preço, Steam Deck, anticheat, segurança"
navLabel: "FAQ"
description: "O Heronite é grátis? Respostas curtas sobre Steam Deck, anticheat, diferenças para Heroic, Lutris e Playnite, segurança do login e uso portátil."
section: Start
order: 3
updated: 2026-11-04
---

Respostas curtas sobre o Heronite, um launcher de jogos para Linux e Windows.

## O Heronite é grátis?

Sim. Ele é de código aberto, sob a [licença GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE), sem contas, anúncios nem telemetria.

## Em quais sistemas ele funciona?

Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). Veja [Instalação](/pt-br/docs/installation/).

## Funciona no Steam Deck?

Sim. O Heronite roda como AppImage no modo desktop do SteamOS. Para o Modo de Jogo, adicione o AppImage à Steam como um jogo que não é da Steam, com a opção `--console`. O [Modo console](/pt-br/docs/console-mode/) foi feito para controles; veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Qual a diferença para Heroic, Lutris ou Playnite?

- **Tudo em um só lugar:** Steam, Epic, GOG, Amazon, os apps das lojas, emuladores e seus próprios jogos.
- **Leve:** um app nativo em Rust desenhado na GPU, sem navegador embutido. Usa cerca de 190 MB de memória em repouso e mostra a biblioteca em cerca de 0,2 s.
- **Seu histórico de jogo:** cada sessão, estatísticas, um diário, uma meta de backlog e um resumo do ano.
- **Modo console** com temas que você pode mudar e compartilhar.

No Linux, ele pode importar seus jogos do Heroic, Lutris, Bottles e Faugus.

## Vou perder minha configuração do Heroic?

Não. Na primeira inicialização, o Heronite copia os dados do Heroic uma única vez e só os lê. O Heroic continua funcionando.

## Jogos com anticheat funcionam?

No Windows, sim, como em qualquer launcher. No Linux, depende do jogo. O Heronite mostra nos detalhes de cada jogo o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com); veja [Anticheat](/pt-br/docs/wine-and-proton/#anticheat).

## O login nas minhas lojas é seguro?

Sim. O Heronite usa as mesmas ferramentas de código aberto do Heroic (legendary, gogdl, nile). Seus logins ficam no seu PC e vão só para as lojas, e você digita a senha na página de login da própria loja.

## Por que o Windows mostra um aviso do SmartScreen?

Os arquivos do Windows ainda não têm assinatura de código. Escolha **Mais informações** e depois **Executar assim mesmo**. Toda versão é assinada com minisign, e o Heronite confere essa assinatura antes de instalar uma atualização.

## Posso levar tudo em um pendrive?

Sim, com a cópia portátil do Windows. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/#a-cópia-portátil-windows).

## Em quais idiomas o Heronite está disponível?

Inglês, português (Brasil), espanhol e alemão. Para ajudar a traduzir, veja [Tradução](/pt-br/docs/translating/).

## Onde peço ajuda ou sugiro um recurso?

- Dúvidas e ideias: [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs e pedidos de recursos: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de segurança: em privado, pela [aba Security](https://github.com/RafaelGoulartB/Heronite/security)
