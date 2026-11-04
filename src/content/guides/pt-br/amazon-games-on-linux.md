---
title: "Jogar Amazon Games e Prime Gaming no Linux"
description: "Jogue Amazon Games e Prime Gaming no Linux: entre na conta, resgate os jogos grátis no site da Amazon e instale tudo com o Proton. Passo a passo."
eyebrow: Guia para Linux
headline: "Como jogar Amazon Games no Linux"
lead: "O app da Amazon não roda no Linux. O Heronite entra na conta com o nile e roda seus jogos da Amazon Games e do Prime Gaming pelo Proton."
navLabel: Amazon Games no Linux
summary: "Entre na Amazon pelo Heronite, e seus jogos do Prime Gaming e da Amazon vão para a Coleção, prontos para instalar pelo Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Entre com a Amazon"
    text: "Sua biblioteca e os jogos do Prime Gaming resgatados aparecem."
  - title: "Instala com o nile"
    text: "O Heronite baixa e verifica os jogos com o nile, de código aberto."
  - title: "Resgate no site da Amazon"
    text: "Atualize a biblioteca depois de resgatar um jogo na Amazon."
  - title: "Roda pelo Proton"
    text: "Escolha uma versão do Proton diferente para cada jogo."
faq:
  - q: "Existe um app da Amazon Games para Linux?"
    a: "Não, a Amazon não faz um. O Heronite usa a ferramenta de código aberto [nile](https://github.com/imLinguin/nile) para entrar na conta, baixar e atualizar seus jogos."
  - q: "Os jogos do Prime Gaming funcionam no Linux?"
    a: "Sim, depois que você os resgata no site da Amazon. Veja [Resgate seus jogos do Prime Gaming](#resgate-seus-jogos-do-prime-gaming)."
  - q: "Preciso instalar o Wine antes?"
    a: "Não. O Heronite baixa uma versão do Proton quando precisa. Você só precisa de um driver Vulkan funcionando. Veja [Wine e Proton](/docs/wine-and-proton/)."
  - q: "Posso usar a Amazon Games no Windows com o Heronite?"
    a: "Pode. No Windows, o Heronite mostra os jogos que o app da Amazon Games instalou, sem baixar de novo. Entrar na conta e instalar funcionam do mesmo jeito."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- Uma conta da Amazon. Para os jogos grátis, uma assinatura Prime que inclua o Prime Gaming.
- Espaço livre em disco. O Heronite instala os jogos em `~/Games/Heronite` por padrão.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Entre na sua conta da Amazon Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Amazon Games** e depois **Entrar com a Amazon Games**.
3. Entre na página da Amazon, na janela que abrir.

Sua biblioteca da Amazon já aparece na Coleção, com os jogos do Prime Gaming que você resgatou.

Se a janela não abrir, escolha **Abrir no navegador** na mesma página. Entre na conta e cole o endereço da página do amazon.com em que você cair. Veja [Logins das lojas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha).

## Resgate seus jogos do Prime Gaming

O Heronite não resgata jogos, então faça isso no site da Amazon:

1. Abra a página do Prime Gaming da Amazon no navegador e entre na conta.
2. Resgate os jogos que quiser.
3. No Heronite, escolha **Lojas → Amazon Games → Atualizar biblioteca**.

Os jogos novos aparecem na Coleção. A Amazon troca as ofertas com frequência, então resgate o jogo enquanto ele estiver disponível. Se um jogo resgatado não aparecer, confira se usou a mesma conta da Amazon e atualize de novo.

## Instale e jogue um jogo da Amazon

Veja antes a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo Gold ou Platinum costuma rodar sem mudar nada.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Amazon Games**.
2. Confira a **Pasta de instalação** e a **Versão do Wine**. O padrão serve para começar.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Aperte <kbd>Enter</kbd> no jogo instalado para jogar.

## Troque a versão do Proton

Se o jogo não abrir, vá em **Configurações do jogo → Compatibilidade** e escolha outra versão do Proton em **Versão**. O GE-Proton e o Proton-CachyOS costumam ter correções primeiro, e o [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalá-los. A página do jogo no [ProtonDB](https://www.protondb.com) muitas vezes traz a solução também.

## Atualize, repare ou mova um jogo da Amazon

Uma única fila cuida de atualizações, reparos, mudanças de pasta e desinstalações, e pausa quando você fica sem conexão. O Heronite procura atualizações de jogos a cada 3 horas. **Atualizar tudo** na página da Amazon Games instala todas de uma vez.

Seus jogos instalados continuam no disco se você sair da conta da Amazon. O Heronite guarda o login na pasta de dados dele, então mantenha essa pasta privada. Veja [Arquivos e pastas](/pt-br/docs/files-and-folders/).

## Quais jogos da Amazon não rodam no Linux?

- Jogos com anti-cheat que bloqueia o Linux não vão rodar. O status nos detalhes vem do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- O Heronite mostra só o que a sua conta da Amazon tem. O que o Prime Gaming oferece depende da Amazon.

## Um jogo não abre

Leia o log de inicialização dele em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux) traz as correções mais comuns do Wine.
