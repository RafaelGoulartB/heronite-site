---
title: "Jogar Amazon Games e Prime Gaming no Linux"
description: "Jogue Amazon Games e Prime Gaming no Linux: faça login, resgate os jogos grátis no site da Amazon e instale e rode com o Proton. Passo a passo."
eyebrow: Guia para Linux
headline: "Como jogar Amazon Games no Linux"
lead: "O app da Amazon não roda no Linux. O Heronite faz login na Amazon e roda pelo Proton seus jogos da Amazon Games e os do Prime Gaming que você resgatou."
navLabel: Amazon Games no Linux
summary: "Faça login na Amazon pelo Heronite, e seus jogos do Prime Gaming e da Amazon entram na sua biblioteca, prontos para instalar pelo Proton."
order: 5
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks."
og: /og/amazon-games-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Confira antes de instalar"
    text: "Cada jogo mostra a nota no ProtonDB e o status do anti-cheat."
  - title: "Um Proton por jogo"
    text: "Escolha uma versão do Proton diferente para cada jogo."
  - title: "Atualizações automáticas"
    text: "O Heronite procura atualizações dos seus jogos da Amazon a cada 3 horas."
  - title: "Os jogos ficam se você sair"
    text: "Os jogos instalados continuam no disco depois que você sai da conta da Amazon."
faq:
  - q: "Existe um app da Amazon Games para Linux?"
    a: "Não, a Amazon não faz app para Linux. O Heronite usa o [nile](https://github.com/imLinguin/nile), uma ferramenta de código aberto da Amazon Games, para fazer login, baixar e atualizar seus jogos."
  - q: "Os jogos do Prime Gaming funcionam no Linux?"
    a: "Sim, depois que você os resgata no site da Amazon. Atualize a biblioteca no Heronite e eles instalam como qualquer outro jogo."
  - q: "Preciso instalar o Wine antes?"
    a: "Não. O Heronite baixa uma versão do Proton quando precisa. Você só precisa de um driver Vulkan funcionando. Veja [Wine e Proton](/docs/wine-and-proton/)."
  - q: "Dá para jogar jogos da Amazon no Steam Deck?"
    a: "Sim. Faça login na Amazon Games no Modo Desktop e depois jogue no Modo Jogo. O [guia do Steam Deck](/guides/steam-deck/) mostra os passos."
  - q: "Posso usar a Amazon Games no Windows com o Heronite?"
    a: "Sim. No Windows, o Heronite mostra os jogos que o app da Amazon Games instalou, sem baixar de novo. O login e a instalação funcionam do mesmo jeito."
related:
  - /guides/epic-games-on-linux/
  - /guides/gog-on-linux/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- Uma conta da Amazon. Para os jogos grátis, uma assinatura Prime que inclua o Prime Gaming.
- Espaço livre em disco. Os jogos são instalados em `~/Games/Heronite` por padrão.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Faça login na Amazon Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Amazon Games** e depois **Entrar com a Amazon Games**.
3. Faça login na página da Amazon, na janela que abrir.

Aí seus jogos da Amazon aparecem na sua biblioteca, com os jogos do Prime Gaming que você resgatou. Se a janela de login não abrir, escolha **Abrir no navegador** na mesma página. Faça login e cole o endereço da página do amazon.com em que você cair ([logins das lojas](/pt-br/docs/troubleshooting/#o-login-ou-o-download-de-uma-loja-falha)).

## Resgate seus jogos do Prime Gaming

O Heronite não resgata jogos, então faça isso no site da Amazon:

1. Abra a página do Prime Gaming da Amazon no navegador e faça login.
2. Resgate os jogos que quiser.
3. No Heronite, escolha **Lojas → Amazon Games → Atualizar biblioteca**.

Aí os jogos novos aparecem na sua biblioteca. A Amazon decide o que o Prime Gaming oferece e troca as ofertas, então resgate o jogo enquanto ele estiver disponível. Se um jogo resgatado não aparecer, confira se usou a mesma conta da Amazon e atualize de novo.

## Instale e jogue um jogo da Amazon

Antes, veja a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo Gold ou Platinum costuma rodar sem mudar nada.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Amazon Games**.
2. Confira a **Pasta de instalação**. A **Versão do Wine** fica em **Mostrar configurações do Wine**; o padrão serve para começar.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).
4. Quando terminar, selecione o jogo e aperte <kbd>Enter</kbd> para jogar.

## Troque a versão do Proton

Se um jogo não abre, vá em **Configurações do jogo → Compatibilidade** e escolha outra versão em **Versão**. O GE-Proton e o Proton-CachyOS costumam ter correções primeiro, e o [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalar. A página do jogo no [ProtonDB](https://www.protondb.com) muitas vezes traz a solução também.

## Atualize, repare ou mova um jogo da Amazon

- **Atualizar:** o Heronite procura atualizações de jogos a cada 3 horas. **Atualizar tudo** na página da Amazon Games instala todas de uma vez.
- **Reparar ou mover:** escolha **Verificar e reparar** ou **Mover instalação** nas ações do jogo.

Uma única fila de downloads faz essas tarefas e as desinstalações, e pausa quando você fica offline. Os jogos instalados continuam no disco se você sair da conta da Amazon. O Heronite guarda o seu login na pasta de dados dele, então mantenha essa pasta privada ([Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Quais jogos da Amazon não rodam no Linux?

Jogos single-player raramente têm problemas com anti-cheat. Jogos com anti-cheat que bloqueia o Linux não vão rodar. O status do anti-cheat na caixa **No Linux** vem do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), e a documentação explica o [anti-cheat](/pt-br/docs/wine-and-proton/#anti-cheat) com mais detalhes.

## Um jogo da Amazon não abre no Linux

Leia o log de inicialização dele em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux) traz as correções mais comuns do Wine.
