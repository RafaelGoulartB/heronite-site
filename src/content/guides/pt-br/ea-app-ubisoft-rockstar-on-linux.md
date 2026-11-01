---
title: "Como instalar EA app, Ubisoft Connect e Rockstar no Linux"
description: "Instale a EA app, a Ubisoft Connect e a Rockstar Games Launcher no Linux com o Heronite. Cada uma roda num prefixo Wine próprio, e os jogos vão para a Coleção."
eyebrow: Guia para Linux
headline: "*EA app*, *Ubisoft Connect* e *Rockstar* no Linux"
lead: "O Heronite instala cada uma dessas launchers num prefixo Wine próprio e mostra os jogos que você instalar na sua Coleção. Veja como configurar e o que o anti-cheat bloqueia."
navLabel: EA, Ubisoft e Rockstar no Linux
summary: "Instale cada launcher pela página Lojas, entre na conta dentro dela, instale os jogos por lá e jogue pela Coleção."
order: 6
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "As Configurações do jogo do Heronite na aba Compatibilidade: a versão do Proton, a nota do ProtonDB, a pasta do prefixo Wine e os botões Winecfg e Winetricks."
og: /og/ea-app-ubisoft-rockstar-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Um botão para cada"
    text: "Na página Lojas, escolha a launcher e clique em instalar. O Heronite instala com o Wine e o seu Proton padrão."
  - title: "Um prefixo para cada"
    text: "Cada launcher ganha a própria pasta em ~/Games/Heronite/Prefixes, então uma não estraga a outra."
  - title: "Entre dentro do app"
    text: "Você entra na própria launcher. O Heronite nunca vê a sua senha."
  - title: "Conheça os limites do anti-cheat"
    text: "Alguns jogos, como Apex Legends, Rainbow Six Siege e GTA Online, são bloqueados no Linux."
faq:
  - q: "Dá para rodar a EA app no Linux?"
    a: "Dá, pelo Wine ou pelo Proton. O Heronite baixa o instalador oficial e instala a EA app num prefixo Wine próprio. Muitos jogos da EA rodam, mas Battlefield 6, Battlefield 2042, Apex Legends e EA SPORTS FC usam anti-cheats que bloqueiam o Linux."
  - q: "A Ubisoft Connect funciona no Linux?"
    a: "Funciona, como um app de Windows no Wine. Os jogos da Ubisoft variam muito, então veja cada um no [ProtonDB](https://www.protondb.com). Rainbow Six Siege bloqueia o Linux, e alguns jogos precisam de outra versão do Proton, que você troca nas configurações do Wine do jogo."
  - q: "Dá para jogar GTA V ou Red Dead Redemption 2 no Linux?"
    a: "GTA Online e Red Dead Online são bloqueados pelo BattlEye no Linux. Os modos história funcionam pela Rockstar Games Launcher. Veja a página de cada jogo no ProtonDB para saber como ele roda."
  - q: "Isso funciona no Windows?"
    a: "Não. As páginas da EA app, Ubisoft Connect e Rockstar são só para Linux no Heronite. No Windows, use os apps das próprias lojas."
  - q: "Posso usar uma launcher que já configurei no Wine?"
    a: "Pode. Escolha **Usar uma instalação existente** na página da launcher e aponte o Heronite para o prefixo Wine que você já tem."
related:
  - /guides/battle-net-on-linux/
  - /guides/install-ge-proton/
  - /features/stores/
---

A EA app, a Ubisoft Connect e a Rockstar Games Launcher são programas de Windows, e nenhuma tem versão para Linux. Todas rodam no Wine, e o Heronite cuida da configuração. Cada uma ganha o próprio prefixo Wine, e os jogos que você instalar nela aparecem na sua Coleção ao lado de todo o resto.

Este guia cobre as três, porque os passos são os mesmos. Ele também lista o que o anti-cheat bloqueia, para você não instalar um jogo que não pode rodar.

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando, além do driver Vulkan de 32 bits para jogos antigos.
- Uma conta para cada launcher que quiser usar.
- Conexão com a internet. O Heronite baixa um Proton se você não tiver nenhum e, depois, o instalador da launcher.
- Espaço livre em disco. Cada launcher e seus jogos ocupam bastante.

## Passo 1: Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os outros formatos estão no [guia de instalação](/pt-br/docs/installation/). Veja se o `vulkaninfo --summary` lista a sua GPU. Se não listar, instale antes o driver Vulkan da sua distribuição.

## Passo 2: Instale a launcher

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Na lista da esquerda, em **Apps das lojas**, escolha **EA app**, **Ubisoft Connect** ou **Rockstar Games Launcher**.
3. Escolha **Instalar o** seguido do nome dela, como **Instalar o EA app** ("Baixar o instalador e instalar com o Wine").

O Heronite encontra ou baixa um Proton, baixa o instalador oficial, cria o prefixo Wine e instala a launcher. A página mostra o progresso. Pode levar alguns minutos. Quando terminar, a página mostra **Pronto**.

Cada launcher fica no próprio prefixo:

| Launcher | Prefixo |
|---|---|
| EA app | `~/Games/Heronite/Prefixes/EA app` |
| Ubisoft Connect | `~/Games/Heronite/Prefixes/Ubisoft Connect` |
| Rockstar Games Launcher | `~/Games/Heronite/Prefixes/Rockstar Games Launcher` |

> **Nota.** Se você já usa uma dessas launchers num prefixo Wine, escolha **Usar uma instalação existente** e aponte o Heronite para esse prefixo.

## Passo 3: Entre na conta e instale jogos

1. Escolha **Abrir o** seguido do nome dela, como **Abrir o Ubisoft Connect** ("Entre na sua conta e instale jogos").
2. Entre na janela da própria launcher. O Heronite nunca vê a sua senha.
3. Instale um jogo na launcher, como faria no Windows.

O Heronite mostra **Conectado** na página dele assim que você entra. Os jogos que você tem, mas ainda não instalou, aparecem na Coleção com um botão de instalar que abre a launcher, como **Instalar pelo EA app**, **Instalar pelo Ubisoft Connect** ou **Instalar pelo Rockstar Games Launcher**.

## Passo 4: Jogue pela Coleção

Os jogos instalados entram sozinhos na Coleção. Se algum estiver faltando, use o botão de atualizar na página da launcher para trazer os jogos instalados dela. Aperte <kbd>Enter</kbd> num jogo para abri-lo. O Heronite registra o tempo de jogo como faz com qualquer jogo.

Antes de instalar um jogo grande, veja a caixa **No Linux** nos detalhes. Ela mostra a nota do [ProtonDB](https://www.protondb.com) e o status do anti-cheat do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## O que o anti-cheat bloqueia

Esse é o limite real dessas launchers. As páginas do próprio Heronite para elas avisam sobre os casos mais conhecidos:

- **EA app.** Battlefield 6, Battlefield 2042, Apex Legends e EA SPORTS FC usam anti-cheats que bloqueiam o Linux.
- **Ubisoft Connect.** Rainbow Six Siege bloqueia o Linux. Alguns outros jogos precisam de uma versão diferente do Proton.
- **Rockstar Games Launcher.** GTA Online e Red Dead Online são bloqueados pelo BattlEye no Linux. Os modos história funcionam.

Um jogo que a desenvolvedora não libera no Linux não roda, não importa qual Proton você teste. Jogos para um jogador são a aposta segura. O status do anti-cheat pode mudar, então confira o status atual no [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

## Troque o Wine ou o Proton de uma launcher

O Heronite usa o seu Proton padrão. Se uma launcher ou um jogo der problema, abra **Configurações do Wine** na página da launcher e escolha outra versão. [GE-Proton e Proton-CachyOS](/pt-br/guides/install-ge-proton/) são os mais comuns para testar. Na mesma página, você pode abrir a **pasta do prefixo do Wine**.

Escolha **Fechar o** seguido do nome da launcher para encerrá-la e o que estiver rodando no prefixo dela. Se um jogo estiver aberto, feche-o antes.

## Quais jogos testar primeiro

Comece por jogos para um jogador e por multiplayers antigos sem anti-cheat no kernel. São os que têm mais chance de rodar bem. Veja três coisas antes de instalar:

1. A nota do ProtonDB nos detalhes. Gold e Platinum são as mais seguras.
2. O status do anti-cheat. Um jogo que a desenvolvedora não libera no Linux não vale o download.
3. O espaço em disco. Esses jogos costumam ser grandes, e o Wine precisa de espaço além disso.

Se estiver em dúvida, instale um jogo pequeno primeiro. Isso confirma que a launcher, o prefixo Wine e os seus drivers funcionam, antes de você se comprometer com um download de 100 GB.

## Remova uma launcher

Se parar de usar uma, escolha **Remover do Heronite** na página dela. O prefixo Wine e os jogos instalados nele continuam no disco, então você pode adicioná-la de novo depois com **Usar uma instalação existente**. Apague a pasta do prefixo você mesmo para liberar o espaço.

## Problemas comuns

- **A instalação falha.** Verifique sua conexão e tente de novo. Os logs ficam em **Configurações → Logs**.
- **A launcher abre, mas não deixa entrar ou trava.** Teste outra versão do Proton em **Configurações do Wine**, ou um prefixo novo.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits. Instale o do seu vídeo, por exemplo `lib32-vulkan-radeon` ou `mesa-vulkan-drivers:i386`.
- **Outro `wineserver` está rodando.** Feche o outro jogo ou rode `wineserver -k` nesse prefixo.
- **Falta uma DLL ou o .NET.** Instale com o Winetricks. O Heronite sugere qual.
- **Um jogo não aparece.** Use o botão de atualizar na página da launcher.
- **Um jogo fecha ao abrir.** Leia o log de inicialização dele em **Configurações → Logs** e veja o ProtonDB.

Há mais ajuda em [Solução de problemas](/pt-br/docs/troubleshooting/).

## O que ler em seguida

- [Battle.net no Linux](/pt-br/guides/battle-net-on-linux/), que funciona do mesmo jeito.
- [Como instalar o GE-Proton](/pt-br/guides/install-ge-proton/), com as versões que consertam mais jogos.
- [Como as lojas funcionam no Heronite](/pt-br/features/stores/).
- [Lojas e launchers](/pt-br/docs/stores-and-launchers/) na documentação.
