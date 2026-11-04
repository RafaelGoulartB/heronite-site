---
title: "FAQ do Heronite: preço, Steam Deck, anti-cheat, segurança"
navLabel: "FAQ"
description: "O Heronite é grátis? Respostas curtas sobre Steam Deck, anti-cheat, diferenças para Heroic, Lutris e Playnite, segurança do login e uso portátil."
section: Start
order: 3
updated: 2026-11-04
---

Respostas curtas sobre o Heronite, um launcher de jogos para Linux e Windows.

## O Heronite é grátis?

Sim. Ele é open source, sob a [licença GPL-3.0](https://github.com/RafaelGoulartB/Heronite/blob/main/LICENSE), sem contas, anúncios nem telemetria.

## Em quais sistemas ele roda?

Linux (qualquer distribuição, x86_64) e Windows 10 e 11 (x86_64). Veja [Instalação](/pt-br/docs/installation/).

## Funciona no Steam Deck?

Sim. O Heronite roda como AppImage no modo desktop do SteamOS. Para o Modo de Jogo, adicione o AppImage à Steam como jogo que não é da Steam, com a opção `--console`. O [modo console](/pt-br/docs/console-mode/) foi feito para controles; veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Qual a diferença para Heroic, Lutris ou Playnite?

- **Tudo em um lugar só:** Steam, Epic, GOG, Amazon, apps de loja, emuladores e seus próprios jogos.
- **Leve:** um app nativo em Rust que usa a GPU para mostrar a tela, sem navegador embutido. Ele usa cerca de 190 MB de RAM parado e mostra a biblioteca em cerca de 215 ms.
- **Seu histórico de jogo:** cada sessão, estatísticas, um diário, uma meta de backlog e uma retrospectiva do ano.
- **Modo console** com temas que você pode mudar e compartilhar.

Ele importa seus jogos do Heroic, Lutris, Bottles e Faugus no Linux, e do Playnite no Windows. Veja [Heronite vs Heroic](/pt-br/compare/heroic/), [vs Lutris](/pt-br/compare/lutris/) e [vs Playnite](/pt-br/compare/playnite/).

## Dá para usar a mesma biblioteca em dois PCs?

Sim. **Configurações → Nuvem** deixa seus status, favoritos, notas, tempo de jogo e sessões iguais em todos os PCs, como o Linux e o Windows de um dual boot. A sincronização usa uma pasta compartilhada ou uma conta na nuvem; veja [Backups e saves](/pt-br/docs/backups-and-saves/).

## Vou perder minha configuração do Heroic?

Não. Na primeira vez que você abre o Heronite, ele copia os dados do Heroic uma vez e só lê esses dados, então o Heroic continua funcionando.

## Jogos com anti-cheat funcionam?

No Windows, sim, como em qualquer launcher. No Linux, depende do jogo. O Heronite mostra nos detalhes de cada jogo o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com); veja [Anti-cheat](/pt-br/docs/wine-and-proton/#anti-cheat).

## O login nas minhas lojas é seguro?

Sim. O Heronite usa as mesmas ferramentas open source do Heroic: legendary para a Epic, gogdl para a GOG e nile para a Amazon. Seus logins ficam no seu PC e só vão para as lojas, e você digita a senha na página de login da própria loja.

## Por que o Windows mostra um aviso do SmartScreen?

Os arquivos do Windows ainda não são assinados. Escolha **Mais informações** e depois **Executar assim mesmo**. Mesmo assim, toda versão é assinada com minisign, e o Heronite confere essa assinatura antes de instalar uma atualização.

## Posso levar tudo em um pendrive?

Sim, com a cópia portátil do Windows. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/#a-cópia-portátil-windows).

## Em quais idiomas o Heronite está?

Inglês, português (Brasil), espanhol e alemão. Para ajudar a traduzir, veja [Tradução](/pt-br/docs/translating/).

## Onde peço ajuda ou sugiro um recurso?

- Dúvidas e ideias: [Discussões](https://github.com/RafaelGoulartB/Heronite/discussions)
- Bugs e pedidos de recursos: [Issues](https://github.com/RafaelGoulartB/Heronite/issues/new/choose)
- Problemas de segurança: em privado, pela [aba Security](https://github.com/RafaelGoulartB/Heronite/security)
