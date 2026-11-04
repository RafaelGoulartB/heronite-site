---
title: "EA app, Ubisoft Connect e Rockstar no Linux"
description: "Instale o EA app, o Ubisoft Connect e o Rockstar Games Launcher no Linux com Wine e Proton, e veja quais jogos o anti-cheat bloqueia."
eyebrow: Guia para Linux
headline: "EA app, Ubisoft Connect e Rockstar no Linux"
lead: "O EA app, o Ubisoft Connect e o Rockstar Games Launcher não têm versão para Linux, mas todos rodam no Wine. O Heronite instala cada um pela página Lojas."
navLabel: EA, Ubisoft e Rockstar no Linux
summary: "Instale cada app de loja pela página Lojas, faça login dentro dele, instale os jogos por lá e jogue pela sua biblioteca do Heronite."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton, a nota do ProtonDB, a pasta do prefixo Wine e os botões Winecfg e Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-04
highlights:
  - title: "Um botão para cada"
    text: "O Heronite baixa o Proton se precisar e depois o instalador oficial."
  - title: "Login dentro do app"
    text: "O Heronite nunca vê sua senha."
  - title: "Confira antes de instalar"
    text: "A caixa No Linux de cada jogo mostra a nota no ProtonDB e o status do anti-cheat."
  - title: "Os jogos ficam ao remover"
    text: "Remover um app de loja mantém o prefixo e os jogos no disco."
faq:
  - q: "Dá para rodar o EA app no Linux?"
    a: "Sim, pelo Wine ou pelo Proton. O anti-cheat bloqueia Battlefield 6, Battlefield 2042, Apex Legends e EA SPORTS FC no Linux."
  - q: "O Ubisoft Connect funciona no Linux?"
    a: "Sim, como um app de Windows no Wine. Veja cada jogo no [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloqueia o Linux."
  - q: "Dá para jogar GTA V ou Red Dead Redemption 2 no Linux?"
    a: "Sim, os modos história, pelo Rockstar Games Launcher. O BattlEye bloqueia GTA Online e Red Dead Online no Linux."
  - q: "Isso funciona no Windows?"
    a: "Sim. No Windows, o Heronite roda cada app de loja direto, sem Wine, e usa a instalação que você já tem, se houver. Os jogos aparecem na sua biblioteca e abrem pelo app da loja."
  - q: "Posso usar um app de loja que já configurei no Wine?"
    a: "Sim. Clique em **Usar uma instalação existente** na página do app da loja e selecione seu prefixo Wine."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando, além do driver Vulkan de 32 bits para jogos antigos.
- Uma conta em cada app de loja que quiser usar.
- Conexão com a internet. O Heronite baixa um Proton se você não tiver nenhum e, depois, o instalador do app da loja.
- Espaço livre em disco para cada app de loja e seus jogos.

## Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). No Steam Deck, siga o [guia do Steam Deck](/pt-br/guides/steam-deck/).

## Instale o EA app, o Ubisoft Connect ou o Rockstar Games Launcher

Os passos são os mesmos para os três.

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Na lista da esquerda, em **Apps das lojas**, escolha **EA app**, **Ubisoft Connect** ou **Rockstar Games Launcher**.
3. Clique em **Instalar o** seguido do nome dele, como **Instalar o EA app**.
4. Espere a página mostrar **Pronto**.

O Heronite encontra ou baixa um Proton e depois o instalador oficial. Ele cria um prefixo Wine (uma pasta que funciona como um Windows só daquele app) e instala o app da loja nele:

| App da loja | Prefixo Wine |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

Se você já usa um desses apps de loja num prefixo Wine, clique em **Usar uma instalação existente** no lugar do passo 3 e selecione esse prefixo.

## Faça login, instale e jogue

1. Clique em **Abrir o** seguido do nome dele, como **Abrir o Ubisoft Connect**.
2. Faça login na janela do app da loja. O Heronite nunca vê sua senha, e a página do app no Heronite passa a mostrar **Conectado**.
3. Instale um jogo no app da loja, como faria no Windows.
4. Aperte <kbd>Enter</kbd> no jogo na sua biblioteca do Heronite para abri-lo.

Antes de instalar um jogo grande, veja a linha **No Linux** nos detalhes do jogo, com a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Gold e Platinum são as mais seguras. Se estiver em dúvida, instale primeiro um jogo pequeno para testar.

Se um jogo instalado não aparecer na sua biblioteca, clique em **Atualizar** em **Instalados** na página do app da loja. Um jogo que você não instalou mostra **Instalar pelo EA app**, **Instalar pelo Ubisoft Connect** ou **Instalar pelo Rockstar Games Launcher**, que abre o app da loja.

## Quais jogos o anti-cheat bloqueia?

Jogos single-player e multiplayers antigos sem anti-cheat no kernel são os que mais têm chance de rodar. Nos outros, o anti-cheat é o limite real:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends e EA SPORTS FC usam anti-cheats que bloqueiam o Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloqueia o Linux.
- **Rockstar Games Launcher.** O BattlEye bloqueia GTA Online e Red Dead Online no Linux. Os modos história funcionam.

Um jogo cujo desenvolvedor não permite o Linux não vai rodar. Os status mudam, então confira o [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) e a documentação de [anti-cheat](/pt-br/docs/wine-and-proton/#anti-cheat).

## Troque a versão do Proton de um app de loja

Abra **Configurações do Wine** na página do app da loja e escolha outra versão em **Versão**, na aba **Compatibilidade**. Até você mudar, o Heronite usa seu Proton padrão. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar.

Para abrir o prefixo, clique em **Abrir pasta** ao lado de **Prefixo Wine**, na mesma página. Para encerrar um app de loja e tudo o que roda no prefixo dele, feche qualquer jogo aberto e clique em **Fechar o** seguido do nome do app.

## Remova um app de loja

Clique em **Remover do Heronite** na página dele. O prefixo Wine e os jogos continuam no disco, então você pode adicioná-lo de novo depois com **Usar uma instalação existente**. Apague a pasta do prefixo para liberar o espaço.

## O app da loja não faz login ou um jogo fecha ao abrir

- **A instalação falha.** Verifique sua conexão e tente de novo. Os logs ficam em **Configurações → Logs**.
- **O app da loja não faz login, ou trava.** Teste outra versão em **Configurações do Wine**, ou um prefixo novo.
- **Um jogo fecha ao abrir.** Leia o log de inicialização dele em **Configurações → Logs** e veja o ProtonDB.

Para DLLs faltando, erros do Vulkan e outras correções do Wine, veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-abre-linux).
