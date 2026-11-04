---
title: "EA app, Ubisoft Connect e Rockstar no Linux"
description: "Instale a EA app, a Ubisoft Connect e a Rockstar Games Launcher no Linux com Wine e Proton, e veja quais jogos o anti-cheat bloqueia."
eyebrow: Guia para Linux
headline: "EA app, Ubisoft Connect e Rockstar no Linux"
lead: "A EA app, a Ubisoft Connect e a Rockstar não têm versão para Linux, mas todas rodam no Wine. O Heronite instala cada uma pela página Lojas, num prefixo Wine próprio."
navLabel: EA, Ubisoft e Rockstar no Linux
summary: "Instale cada launcher pela página Lojas, entre na conta dentro dela, instale os jogos por lá e jogue pela Coleção."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton, a nota do ProtonDB, a pasta do prefixo Wine e os botões Winecfg e Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Um botão para cada"
    text: "Escolha a launcher na página Lojas e o Heronite instala com o Wine e o seu Proton padrão."
  - title: "Um prefixo para cada"
    text: "Cada launcher ganha a própria pasta em ~/Games/Heronite/Prefixes."
  - title: "Entre dentro do app"
    text: "O Heronite nunca vê a sua senha."
  - title: "Conheça os limites do anti-cheat"
    text: "Apex Legends, Rainbow Six Siege e GTA Online são bloqueados no Linux."
faq:
  - q: "Dá para rodar a EA app no Linux?"
    a: "Dá, pelo Wine ou pelo Proton, mas o anti-cheat bloqueia vários jogos da EA. Veja [Quais jogos o anti-cheat bloqueia?](#quais-jogos-o-anti-cheat-bloqueia)"
  - q: "A Ubisoft Connect funciona no Linux?"
    a: "Funciona, como um app de Windows no Wine. Veja cada jogo no [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloqueia o Linux."
  - q: "Dá para jogar GTA V ou Red Dead Redemption 2 no Linux?"
    a: "Os modos história funcionam pela Rockstar Games Launcher. O BattlEye bloqueia GTA Online e Red Dead Online no Linux."
  - q: "Isso funciona no Windows?"
    a: "Não. Essas páginas são só para Linux no Heronite. No Windows, use os apps das próprias lojas."
  - q: "Posso usar uma launcher que já configurei no Wine?"
    a: "Pode. Escolha **Usar uma instalação existente** na página da launcher e aponte o Heronite para o seu prefixo Wine."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando, além do driver Vulkan de 32 bits para jogos antigos.
- Uma conta para cada launcher que quiser usar.
- Conexão com a internet. O Heronite baixa um Proton se você não tiver nenhum e, depois, o instalador da launcher.
- Espaço livre em disco para cada launcher e seus jogos.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Instale a launcher

Os passos são os mesmos para as três.

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Na lista da esquerda, em **Apps das lojas**, escolha **EA app**, **Ubisoft Connect** ou **Rockstar Games Launcher**.
3. Escolha **Instalar o** seguido do nome dela, como **Instalar o EA app**.

O Heronite acha ou baixa um Proton, baixa o instalador oficial, cria o prefixo Wine e instala a launcher. Quando terminar, a página mostra **Pronto**.

| Launcher | Prefixo |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Nota.** Se você já usa uma dessas launchers num prefixo Wine, escolha **Usar uma instalação existente** e aponte o Heronite para esse prefixo.

## Entre na conta e instale jogos

1. Escolha **Abrir o** seguido do nome dela, como **Abrir o Ubisoft Connect**.
2. Entre na janela da launcher. O Heronite nunca vê a sua senha.
3. Instale um jogo na launcher, como faria no Windows.

O Heronite mostra **Conectado** na página dele assim que você entra. Um jogo que você ainda não instalou mostra **Instalar pelo EA app**, **Instalar pelo Ubisoft Connect** ou **Instalar pelo Rockstar Games Launcher** na Coleção. O botão abre a launcher.

## Jogue pela Coleção

Os jogos instalados entram na Coleção. Se algum estiver faltando, use o botão de atualizar na página da launcher. Aperte <kbd>Enter</kbd> num jogo para abri-lo.

Antes de instalar um jogo grande, veja a caixa **No Linux** nos detalhes: ela mostra a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Gold e Platinum são as mais seguras. Se estiver em dúvida, instale primeiro um jogo pequeno para testar.

## Quais jogos o anti-cheat bloqueia?

Jogos para um jogador e multiplayers antigos sem anti-cheat no kernel são os que mais têm chance de rodar. Nos outros, o anti-cheat é o limite real. Os casos mais conhecidos:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends e EA SPORTS FC usam anti-cheats que bloqueiam o Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloqueia o Linux. Alguns outros jogos precisam de uma versão diferente do Proton.
- **Rockstar Games Launcher.** O BattlEye bloqueia GTA Online e Red Dead Online no Linux. Os modos história funcionam.

Um jogo que a desenvolvedora não libera no Linux não roda. Os status mudam, então confira o [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Veja mais em [Anti-cheat](/pt-br/docs/wine-and-proton/#anticheat).

## Troque a versão do Proton de uma launcher

O Heronite usa o seu Proton padrão. Se uma launcher ou um jogo der problema, abra **Configurações do Wine** na página da launcher e escolha outra versão do Proton. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar. A **pasta do prefixo do Wine**, na mesma página, abre o prefixo.

Para encerrar uma launcher e tudo o que roda no prefixo dela, feche antes qualquer jogo aberto e escolha **Fechar o** seguido do nome dela.

## Remova uma launcher

Escolha **Remover do Heronite** na página dela. O prefixo Wine e os jogos continuam no disco, então você pode adicioná-la de novo depois com **Usar uma instalação existente**. Apague a pasta do prefixo para liberar o espaço.

## A launcher não deixa entrar ou um jogo fecha ao abrir

- **A instalação falha.** Verifique sua conexão e tente de novo. Os logs ficam em **Configurações → Logs**.
- **A launcher não deixa entrar, ou trava.** Teste outra versão do Proton em **Configurações do Wine**, ou um prefixo novo.
- **Um jogo fecha ao abrir.** Leia o log de inicialização dele em **Configurações → Logs** e veja o ProtonDB.

Para DLLs faltando, erros do Vulkan e outras correções comuns, veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux).
