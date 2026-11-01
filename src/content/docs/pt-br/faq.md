---
title: "Perguntas frequentes sobre o Heronite"
navLabel: "FAQ"
description: "Respostas sobre o Heronite: preço, Steam Deck, anticheat, diferenças para Heroic, Lutris e Playnite, segurança do login nas lojas e uso portátil."
section: Start
order: 3
updated: 2026-11-01
---

## O Heronite é gratuito?

Sim. Ele é gratuito e de código aberto, sob a [licença GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE). Não há contas, anúncios nem telemetria.

## Em quais sistemas ele funciona?

Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). Veja [Instalação](/pt-br/docs/installation/).

## Funciona no Steam Deck?

O Heronite roda no Linux como AppImage, que é como os apps costumam ser instalados no modo desktop do SteamOS, e o [Modo console](/pt-br/docs/console-mode/) foi feito para controles. Para usá-lo no Modo de Jogo, adicione o AppImage à Steam como um jogo que não é da Steam, com a opção `--console`.

## Qual a diferença para Heroic, Lutris ou Playnite?

- **Tudo em um só lugar:** Steam, Epic, GOG, Amazon, os clientes das lojas, emuladores e seus próprios jogos, no Linux e no Windows.
- **Leve:** um app nativo em Rust desenhado na GPU, sem navegador embutido. Cerca de 190 MB de memória em repouso, e a biblioteca na tela em cerca de 0,2 s.
- **Seu histórico de jogo:** cada sessão registrada, estatísticas, um diário, uma meta de backlog e um resumo do ano.
- **Modo console** com temas que você pode mudar e compartilhar.

No Linux, ele pode importar seus jogos do Heroic, Lutris, Bottles e Faugus, então você pode testá-lo sem perder nada.

## Vou perder minha configuração do Heroic?

Não. Na primeira inicialização, o Heronite copia os dados do Heroic uma única vez e só os lê. O Heroic continua funcionando como antes.

## Jogos com anticheat funcionam?

No Windows, sim, como em qualquer launcher. No Linux, depende do jogo: o status do anticheat do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) aparece nos detalhes do jogo.

## O login nas minhas lojas é seguro?

O Heronite usa as mesmas ferramentas de código aberto do Heroic (legendary, gogdl, nile). Seus logins ficam no seu PC e são enviados só para as lojas. Você digita a senha na página de login da própria loja.

## Por que o Windows mostra um aviso do SmartScreen?

Os arquivos do Windows ainda não têm assinatura de código. Mesmo assim, toda versão é assinada com minisign, e o Heronite confere essa assinatura antes de instalar uma atualização.

## Posso levar tudo em um pendrive?

Sim, com a cópia portátil do Windows. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Em quais idiomas ele está disponível?

Inglês, português (Brasil), espanhol e alemão. Ajude a traduzir: veja [Tradução](/pt-br/docs/translating/).

## Onde peço ajuda ou sugiro um recurso?

- Dúvidas e ideias: [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs e pedidos de recursos: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de segurança: em privado, pela [aba Security](https://github.com/RafaelGoulartB/Heronite/security)
