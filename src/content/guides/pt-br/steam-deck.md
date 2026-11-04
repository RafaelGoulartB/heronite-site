---
title: "Heronite no Steam Deck: jogos da Epic, GOG e Amazon"
description: "Configure o Heronite no Steam Deck: instale o AppImage no Modo Desktop, adicione à Steam com --console e jogue seus jogos da Epic, GOG e Amazon no Modo Jogo."
eyebrow: Guia para Steam Deck
headline: "Heronite no *Steam Deck*"
lead: "Instale o Heronite no Modo Desktop, adicione-o à Steam como jogo não Steam e abra, no Modo Jogo, uma biblioteca feita para o controle com seus jogos da Epic, GOG e Amazon."
navLabel: Steam Deck
summary: "Instale o AppImage no Modo Desktop, adicione à Steam com a opção --console e jogue suas outras lojas no Modo Jogo."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "O modo console do Heronite com ELDEN RING aberto: Jogar, Status, Favorito, Configurações do jogo e Página completa em uma lista para o controle, sobre o carrossel de capas."
og: /og/steam-deck.jpg
updated: 2026-11-01
highlights:
  - title: "Instale no Modo Desktop"
    text: "Baixe o AppImage, torne-o executável e entre nas suas lojas uma vez, com um teclado."
  - title: "Adicione à Steam"
    text: "Adicione o AppImage como jogo não Steam e defina a opção de inicialização como --console."
  - title: "Jogue no Modo Jogo"
    text: "Abra o Heronite pela sua biblioteca da Steam e use os botões do Deck para navegar, instalar e jogar."
  - title: "Epic, GOG e Amazon"
    text: "Suas outras bibliotecas ficam ao lado dos seus jogos da Steam, numa Coleção feita para o controle."
faq:
  - q: "O Heronite funciona no Steam Deck?"
    a: "O Heronite roda no Linux como AppImage, que é como os apps costumam ser instalados no Modo Desktop do SteamOS, e o modo console dele é feito para controles. Ele não é um app Verificado para o Steam Deck, então espere configurar por conta própria, seguindo este guia."
  - q: "Qual opção de inicialização uso no Steam Deck?"
    a: "Use `--console`. Ela faz o Heronite abrir no modo console, o layout para controles e TVs. Adicione `--fullscreen` também se quiser tela cheia ao abrir."
  - q: "Dá para jogar jogos da Epic Games, GOG e Amazon no Deck?"
    a: "Dá. Entre na página **Lojas** e os jogos vão para a Coleção. Os jogos de Windows rodam pelo Proton, como em qualquer PC com Linux. Veja os guias da [Epic](/guides/epic-games-on-linux/), da [GOG](/guides/gog-on-linux/) e da [Amazon Games](/guides/amazon-games-on-linux/)."
  - q: "Preciso usar o Modo Desktop toda vez?"
    a: "Não. Você precisa do Modo Desktop para instalar o Heronite, adicioná-lo à Steam e entrar nas suas lojas. Depois disso, pode ficar no Modo Jogo e voltar ao Modo Desktop só para mudar configurações mais fáceis com teclado e mouse."
  - q: "Posso adicionar um jogo à Steam em vez da launcher inteira?"
    a: "Pode. Para um jogo instalado, escolha **Adicionar à Steam** nas ações dele. O Heronite adiciona um atalho de jogo não Steam que abre aquele jogo direto, sem mostrar a janela do Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

O Steam Deck roda Linux, então o Heronite roda nele. Você instala no Modo Desktop, adiciona à Steam e depois abre pelo Modo Jogo, com um layout feito para os controles do Deck. Assim você tem seus jogos da Epic, GOG e Amazon ao lado da sua biblioteca da Steam.

Este guia mostra os passos. O Heronite não é um app Verificado para o Steam Deck, então você o configura à mão, mas não há muito a fazer.

## O que você precisa

- Um Steam Deck com o SteamOS padrão.
- Conexão com a internet.
- Um teclado e um mouse para a configuração, ou a tela sensível ao toque do Deck e o teclado virtual dela (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Contas das lojas que você quiser usar.

## Passo 1: Mude para o Modo Desktop

Aperte o botão <kbd>Steam</kbd>, abra **Energia** ("Power") e escolha a opção de mudar para o desktop ("Switch to Desktop"). O Deck reinicia numa área de trabalho Linux normal.

## Passo 2: Baixe o AppImage

No navegador do desktop, abra a [página de download](/pt-br/download/) e baixe o `Heronite-x86_64.AppImage`. Um AppImage é um arquivo único que roda em qualquer distribuição Linux, então você não precisa instalar pacotes no SteamOS.

Mova-o para uma pasta onde você possa gravar, como `~/Applications`. O Heronite se atualiza substituindo o AppImage, então a pasta precisa permitir gravação.

## Passo 3: Torne-o executável e abra

No gerenciador de arquivos, clique com o botão direito no arquivo, escolha **Propriedades**, abra **Permissões** e marque a opção "Is executable" (é executável). Ou use um terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

Na primeira vez que abre, o Heronite adiciona os jogos da Steam que encontra, sem login. Ele também procura emuladores e pastas de ROMs.

## Passo 4: Entre nas suas lojas

Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas** e entre na Epic Games, na GOG ou na Amazon Games. Uma janela pequena de login abre com a página da própria loja. Use um teclado aqui, porque você precisa digitar a senha. Sua biblioteca inteira aparece então na Coleção.

Cada loja tem o próprio guia, com os detalhes: [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/). Instale um jogo ou dois agora, enquanto você está no desktop. Dá para escolher a pasta de instalação, então o cartão SD também serve.

## Passo 5: Adicione o Heronite à Steam

1. Abra a Steam no Modo Desktop.
2. Escolha "Add a Game" (Adicionar um jogo) no canto inferior esquerdo da biblioteca e depois "Add a Non-Steam Game" (adicionar um jogo não Steam).
3. Clique em "Browse" (procurar), mude o filtro de arquivos para todos os arquivos e selecione `Heronite-x86_64.AppImage`.
4. Adicione, encontre o **Heronite** na sua biblioteca, clique com o botão direito nele e abra **Propriedades**.
5. Em "Launch Options" (opções de inicialização), digite:

```
--console
```

`--console` abre o Heronite no modo console, o layout feito para o controle. Adicione `--fullscreen` também se quiser a janela em tela cheia. Os nomes dos menus da Steam podem mudar entre atualizações, mas a ideia é a mesma: adicionar o arquivo como jogo não Steam e depois definir as opções de inicialização. Veja [Linha de comando e links](/pt-br/docs/command-line-and-links/) para todas as opções.

## Passo 6: Use o modo console no Modo Jogo

Dê dois cliques no ícone "Return to Gaming Mode" (voltar ao Modo Jogo) na área de trabalho. O Heronite está na sua biblioteca, entre os jogos não Steam. Abra e você cai na tela inicial do modo console, com uma prateleira **Continuar jogando** com seus jogos recentes. A aba **Biblioteca** guarda todos os jogos.

![A biblioteca do modo console do Heronite: uma grade de capas de jogos com os filtros Mostrar, Ordenar, Status e Pesquisar em cima e as dicas Detalhes, Instalar e Pesquisar na parte de baixo.](../../../assets/screenshots/console-library.webp)

*A biblioteca do modo console: uma grade única para todas as lojas, com dicas do controle na parte de baixo.*

Os controles são os próprios botões do Deck:

| Botão | Ação |
|---|---|
| A | Confirmar |
| B | Voltar |
| X, Y | As ações mostradas na tela |
| L1 / R1 | Trocar de aba |
| D-pad, analógico esquerdo | Mover |
| Botão de menu | Abrir o menu |

As imagens dos botões seguem o controle, e o Heronite conhece as do Steam Deck. Se os botões não reagirem como você espera, confira o layout de controle que a Steam usa para a entrada do Heronite. A lista completa de controles está em [Modo console](/pt-br/docs/console-mode/).

## Passo 7: Instale e jogue

Abra a aba **Biblioteca** com o R1, escolha um jogo e aperte X para instalar. Aperte A num jogo instalado para abrir a página dele e **Jogar** para começar. O Heronite registra a sessão como faz no PC.

Para manter um jogo como entrada própria na Steam, use **Adicionar à Steam** nas ações do jogo. A Steam passa a mostrar um atalho que abre aquele jogo direto.

Você também pode fazer o Heronite abrir no modo console sozinho. Em **Configurações → Modo console**, ligue as opções de inicialização ou de quando um controle conecta.

## Limites que você deve conhecer

- Os jogos de Windows rodam pelo Proton, e nem todos rodam bem. Veja antes a nota do jogo no ProtonDB, nos detalhes.
- Jogos com anti-cheat podem não rodar no Linux. Os detalhes mostram o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).
- Por causa da bateria e da tela do Deck, alguns jogos precisam de um limite de FPS menor. Defina por jogo em **Configurações do jogo**.
- O overlay dentro do jogo (beta) precisa de uma sessão Wayland com suporte a layer-shell. Leia [Modo console](/pt-br/docs/console-mode/) antes de contar com ele.

## Problemas comuns

- **O Heronite não abre.** Confira se o arquivo é executável. Rode-o por um terminal para ver alguma mensagem.
- **O AppImage não atualiza.** Mova-o para `~/Applications` ou outra pasta dentro da sua home.
- **A janela de login não abre.** Use o **método do navegador** na mesma página: entre num navegador e cole o endereço ou o código.
- **Os downloads da GOG falham.** A ferramenta gogdl precisa do `python3`. Confira se ele está instalado.
- **Um jogo fecha na hora.** Abra o log de inicialização dele em **Configurações → Logs**. O Heronite sugere uma solução para as causas comuns. Um jogo pode precisar de outra versão do Proton, como explica o [guia do GE-Proton](/pt-br/guides/install-ge-proton/).

Há mais ajuda em [Solução de problemas](/pt-br/docs/troubleshooting/).

## O que ler em seguida

- [Modo console](/pt-br/features/console-mode/), com temas e layouts que você pode mudar.
- [Como instalar o GE-Proton](/pt-br/guides/install-ge-proton/), para mais versões do Proton.
- [Epic Games no Linux](/pt-br/guides/epic-games-on-linux/).
- [Primeiros passos](/pt-br/docs/getting-started/).
