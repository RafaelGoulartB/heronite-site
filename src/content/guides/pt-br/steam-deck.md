---
title: "Epic, GOG e Amazon Games no Steam Deck"
description: "Jogue Epic, GOG e Amazon no Steam Deck: instale o AppImage do Heronite no Modo Desktop, adicione à Steam com --console e abra no Modo Jogo."
eyebrow: Guia para Steam Deck
headline: "Como jogar Epic, GOG e Amazon no Steam Deck"
lead: "Rode o Heronite no Steam Deck para jogar seus jogos da Epic, GOG e Amazon no Modo Jogo, numa biblioteca feita para o controle."
navLabel: Steam Deck
summary: "Instale o AppImage no Modo Desktop, adicione à Steam com a opção --console e jogue suas outras lojas no Modo Jogo."
order: 2
hero: ../../../assets/screenshots/console-game-panel.webp
heroAlt: "O modo console do Heronite com ELDEN RING aberto: Jogar, Status, Favorito, Configurações do jogo e Página completa em uma lista para o controle, sobre o carrossel de capas."
og: /og/steam-deck.jpg
updated: 2026-11-04
highlights:
  - title: "Instale no Modo Desktop"
    text: "Baixe o AppImage, torne-o executável e entre nas lojas uma vez, com um teclado."
  - title: "Adicione à Steam"
    text: "Adicione o AppImage como jogo não Steam com a opção de inicialização --console."
  - title: "Jogue no Modo Jogo"
    text: "Abra o Heronite pela biblioteca da Steam e use os botões do Deck."
  - title: "Uma biblioteca para o controle"
    text: "Suas outras lojas ficam ao lado dos seus jogos da Steam."
faq:
  - q: "O Heronite funciona no Steam Deck?"
    a: "Funciona. Ele roda no SteamOS como AppImage, e o modo console dele é feito para controles."
  - q: "Qual opção de inicialização uso no Steam Deck?"
    a: "Use `--console`, que abre o layout para controles e TVs. Adicione `--fullscreen` para abrir em tela cheia."
  - q: "Dá para jogar jogos da Epic Games, GOG e Amazon no Deck?"
    a: "Dá. Entre na página **Lojas** e os jogos vão para a Coleção. Os jogos de Windows rodam pelo Proton. Veja [Entre na Epic, GOG e Amazon Games](#entre-na-epic-gog-e-amazon-games)."
  - q: "Preciso usar o Modo Desktop toda vez?"
    a: "Não. Você precisa dele para instalar o Heronite, adicioná-lo à Steam e entrar nas lojas. Depois disso, fique no Modo Jogo."
  - q: "Posso adicionar um jogo à Steam em vez da launcher inteira?"
    a: "Pode. Escolha **Adicionar à Steam** nas ações de um jogo instalado. A Steam ganha um atalho de jogo não Steam que abre aquele jogo direto, sem mostrar a janela do Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

O Heronite roda no Steam Deck porque o SteamOS é Linux. Ele não é um app Verificado para o Steam Deck, então você o configura à mão.

## O que você precisa

- Um Steam Deck com o SteamOS padrão.
- Um teclado e um mouse para a configuração, ou a tela sensível ao toque do Deck e o teclado virtual dela (<kbd>Steam</kbd> + <kbd>X</kbd>).
- Contas das lojas que você quiser usar.

## Mude para o Modo Desktop

Aperte o botão <kbd>Steam</kbd>, abra **Energia** (Power) e escolha **Switch to Desktop**.

## Baixe e abra o AppImage

No navegador do desktop, abra a [página de download](/pt-br/download/) e baixe o `Heronite-x86_64.AppImage`. Ele roda no SteamOS sem instalar pacotes.

Mova-o para uma pasta onde você possa gravar, como `~/Applications`, e torne-o executável. No gerenciador de arquivos, clique com o botão direito no arquivo, escolha **Propriedades**, abra **Permissões** e marque **Is executable**. Ou use um terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

Na primeira vez que abre, o Heronite adiciona os jogos da Steam que encontra, sem login. Ele também procura emuladores e pastas de ROMs.

## Entre na Epic, GOG e Amazon Games

Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas** e entre na Epic Games, na GOG ou na Amazon Games. Entre na página da loja, na janela que abrir, e use um teclado para digitar a senha. Sua biblioteca inteira aparece então na Coleção.

Instale um jogo ou dois agora, enquanto você está no desktop. Dá para escolher a pasta de instalação, então o cartão SD também serve. Cada loja tem um guia: [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/).

## Adicione o Heronite à Steam

1. Abra a Steam no Modo Desktop.
2. Escolha **Add a Game** no canto inferior esquerdo da biblioteca e depois **Add a Non-Steam Game**.
3. Clique em **Browse**, mude o filtro de arquivos para todos os arquivos e selecione `Heronite-x86_64.AppImage`.
4. Adicione, encontre o **Heronite** na sua biblioteca, clique com o botão direito nele e abra **Properties**.
5. Em **Launch Options**, digite:

```
--console
```

`--console` abre o Heronite no modo console, o layout feito para o controle. Adicione `--fullscreen` também para uma janela em tela cheia. Os nomes dos menus da Steam podem mudar entre atualizações. Veja [Linha de comando e links](/pt-br/docs/command-line-and-links/) para todas as opções.

## Abra o Heronite no Modo Jogo

Dê dois cliques no ícone **Return to Gaming Mode** na área de trabalho. O Heronite está na sua biblioteca, entre os jogos não Steam. Abra e você cai na tela inicial do modo console, com uma prateleira **Continuar jogando** com seus jogos recentes. A aba **Biblioteca** guarda todos os jogos.

![A biblioteca do modo console do Heronite: uma grade de capas de jogos com os filtros Mostrar, Ordenar, Status e Pesquisar em cima e as dicas Detalhes, Instalar e Pesquisar na parte de baixo.](../../../assets/screenshots/console-library.webp)

Os controles são os próprios botões do Deck:

| Botão | Ação |
|---|---|
| A | Confirmar |
| B | Voltar |
| X, Y | As ações mostradas na tela |
| L1 / R1 | Trocar de aba |
| D-pad, analógico esquerdo | Mover |
| Botão de menu | Abrir o menu |

As imagens dos botões seguem o controle, e o Heronite conhece as do Steam Deck. Se os botões não reagirem, confira o layout de controle que a Steam usa para a entrada do Heronite. A lista completa está em [Modo console](/pt-br/docs/console-mode/).

## Instale e jogue um jogo

1. Abra a aba **Biblioteca** com o R1.
2. Escolha um jogo e aperte X para instalar.
3. Aperte A num jogo instalado para abrir a página dele e escolha **Jogar**.

Para manter um jogo como entrada própria na Steam, use **Adicionar à Steam** nas ações dele. Para abrir o modo console sem a opção de inicialização, ligue as opções de inicialização ou de controle em **Configurações → Modo console**.

## Limites no Steam Deck

- Nem todo jogo de Windows roda bem pelo Proton. Os detalhes do jogo mostram a nota no ProtonDB e o status do anti-cheat.
- Alguns jogos precisam de um limite de FPS menor para a bateria e a tela do Deck. Defina por jogo em **Configurações do jogo**.
- O overlay dentro do jogo (beta) precisa de uma sessão Wayland com suporte a layer-shell. Leia [Modo console](/pt-br/docs/console-mode/) antes de contar com ele.

## O Heronite não abre ou não atualiza no Steam Deck

- **O Heronite não abre.** Confira se o arquivo é executável. Rode-o por um terminal para ver alguma mensagem.
- **O AppImage não atualiza.** Ele substitui a si mesmo, então a pasta dele precisa permitir gravação. Mova-o para `~/Applications` ou outra pasta dentro da sua home.

Para problemas de login e de jogos, veja [Solução de problemas](/pt-br/docs/troubleshooting/). Um jogo pode precisar de outra versão do Proton: veja o [guia do GE-Proton](/pt-br/guides/install-ge-proton/).
