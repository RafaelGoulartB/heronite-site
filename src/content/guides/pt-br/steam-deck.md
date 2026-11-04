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
    text: "Baixe o AppImage, torne-o executável e faça login uma vez, com um teclado."
  - title: "Adicione à Steam"
    text: "Adicione o AppImage como jogo não Steam com a opção de inicialização --console."
  - title: "Botões do Deck na tela"
    text: "O Heronite mostra as imagens dos botões do próprio Steam Deck."
  - title: "Instale no cartão SD"
    text: "Escolha qualquer pasta de instalação, o cartão SD incluído."
faq:
  - q: "O Heronite funciona no Steam Deck?"
    a: "Sim. Ele roda no SteamOS como AppImage, e o modo console dele é feito para controles."
  - q: "O Heronite é grátis?"
    a: "Sim. O Heronite é grátis e de código aberto, sob a licença GPL-3.0, sem contas, anúncios nem telemetria."
  - q: "Preciso usar o Modo Desktop toda vez?"
    a: "Não. Você precisa dele para instalar o Heronite, adicioná-lo à Steam e fazer login nas lojas. Depois disso, fique no Modo Jogo."
  - q: "Posso adicionar um jogo à Steam em vez do launcher inteiro?"
    a: "Sim. Escolha **Adicionar à Steam** nas ações de um jogo instalado. A Steam ganha um atalho de jogo não Steam que abre aquele jogo direto, sem mostrar a janela do Heronite."
related:
  - /guides/epic-games-on-linux/
  - /features/console-mode/
  - /docs/console-mode/
---

O Heronite roda no Steam Deck porque o SteamOS é Linux. Ele não é Verificado para o Steam Deck, então você o configura à mão.

## O que você precisa

- Um Steam Deck com o SteamOS padrão.
- Um teclado e um mouse para a configuração, ou a tela sensível ao toque do Deck e o teclado na tela dele (<kbd>Steam</kbd> <kbd>X</kbd>).
- Contas das lojas que você quiser usar.

## Instale o Heronite no Modo Desktop

1. Aperte o botão <kbd>Steam</kbd>, abra **Energia** e escolha **Switch to Desktop**.
2. No navegador do desktop, abra a [página de download](/pt-br/download/) e baixe o `Heronite-x86_64.AppImage`. Ele roda no SteamOS sem instalar pacotes.
3. Mova o arquivo para uma pasta onde você possa gravar, como `~/Applications`.
4. Torne-o executável: no gerenciador de arquivos, clique com o botão direito no arquivo, escolha **Properties**, abra **Permissions** e marque **Is executable**.
5. Abra o AppImage.

Ou faça os passos 3 a 5 num terminal:

```bash
mkdir -p ~/Applications
mv ~/Downloads/Heronite-x86_64.AppImage ~/Applications/
chmod +x ~/Applications/Heronite-x86_64.AppImage
~/Applications/Heronite-x86_64.AppImage
```

Na primeira vez que você abre o Heronite, ele traz os jogos da Steam que encontra, sem login, e procura emuladores e pastas de ROMs.

## Faça login na Epic, GOG e Amazon Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Epic Games**, **GOG** ou **Amazon Games**.
3. Clique em **Entrar**.
4. Faça login na página da loja, na janela que abrir. Use um teclado para digitar a senha.

Os jogos da loja aparecem na sua biblioteca. Instale um jogo ou dois agora, enquanto está no desktop. Dá para escolher a pasta de instalação, então o cartão SD também serve.

Cada loja tem um guia: [Epic Games](/pt-br/guides/epic-games-on-linux/), [GOG](/pt-br/guides/gog-on-linux/) e [Amazon Games](/pt-br/guides/amazon-games-on-linux/).

## Adicione o Heronite à Steam

1. Abra a Steam no Modo Desktop.
2. Escolha **Add a Game** no canto inferior esquerdo da biblioteca e depois **Add a Non-Steam Game**.
3. Clique em **Browse**, mude o filtro de arquivos para todos os arquivos e selecione `Heronite-x86_64.AppImage`.
4. Adicione, encontre o **Heronite** na sua biblioteca, clique com o botão direito nele e abra **Properties**.
5. Em **Launch Options**, digite:

```
--console
```

`--console` abre o Heronite no modo console, o layout feito para o controle. Adicione `--fullscreen` para uma janela em tela cheia. Os nomes dos menus da Steam podem mudar entre atualizações. Veja [Linha de comando e links](/pt-br/docs/command-line-and-links/) para todas as opções.

## Abra o Heronite no Modo Jogo

1. Dê dois cliques no ícone **Return to Gaming Mode** na área de trabalho.
2. Abra o Heronite pela sua biblioteca da Steam, entre os jogos não Steam.

O Heronite abre na tela inicial do modo console, com uma prateleira **Continuar jogando** com seus jogos recentes. A aba **Biblioteca** guarda todos os jogos.

![A biblioteca do modo console do Heronite: uma grade de capas de jogos com os filtros Mostrar, Ordenar, Status e Pesquisar em cima e as dicas Detalhes, Instalar e Pesquisar na parte de baixo.](../../../assets/screenshots/console-library.webp)

*A biblioteca do modo console: todas as lojas numa grade, com dicas para o controle.*

Os controles são os próprios botões do Deck:

| Botão | Ação |
|---|---|
| A | Confirmar |
| B | Voltar |
| X, Y | As ações mostradas na tela |
| L1 / R1 | Trocar de aba |
| D-pad, analógico esquerdo | Mover |
| Botão de menu | Abrir o menu |

As imagens dos botões seguem o controle, e o Heronite conhece as do Steam Deck. A lista completa está em [Modo console](/pt-br/docs/console-mode/).

## Instale e jogue um jogo

1. Abra a aba **Biblioteca** com o R1.
2. Escolha um jogo e aperte X para instalar.
3. Aperte A num jogo instalado para abrir a página dele e escolha **Jogar**.

Para manter um jogo como entrada própria na Steam, use **Adicionar à Steam** nas ações dele. Para abrir o modo console sem a opção de inicialização, ligue as opções de inicialização ou de controle em **Configurações → Modo console**. O overlay dentro do jogo (beta) precisa de uma sessão Wayland com suporte a layer-shell, então leia [Modo console](/pt-br/docs/console-mode/) antes de contar com ele.

## Quais jogos rodam bem no Steam Deck?

Nem todo jogo de Windows roda bem pelo Proton. Veja a nota no ProtonDB e o status do anti-cheat nos detalhes do jogo antes de instalar. Um jogo pode precisar de outra versão do Proton: veja o [guia do GE-Proton](/pt-br/guides/install-ge-proton/).

Alguns jogos precisam de um limite de FPS menor para a bateria e a tela do Deck. Defina por jogo em **Configurações do jogo**.

## O Heronite não abre ou não responde no Steam Deck

- **O Heronite não abre.** Confira se o arquivo é executável. Rode-o por um terminal para ver alguma mensagem.
- **O AppImage não atualiza.** Ele substitui a si mesmo, então a pasta dele precisa permitir gravação. Mova-o para `~/Applications` ou outra pasta dentro da sua home.
- **Os botões não reagem.** Confira o layout de controle que a Steam usa para a entrada do Heronite.

Para problemas de login e de jogos, veja [Solução de problemas](/pt-br/docs/troubleshooting/).
