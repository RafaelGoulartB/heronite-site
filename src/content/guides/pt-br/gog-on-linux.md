---
title: "Como jogar jogos da GOG no Linux sem o GOG Galaxy"
description: "Jogue sua biblioteca da GOG no Linux sem o GOG Galaxy: entre pelo Heronite, instale com o gogdl ou adicione instaladores offline sem DRM à mão. Veja como."
eyebrow: Guia para Linux
headline: "Como jogar jogos da *GOG* no Linux"
lead: "A GOG não tem app para Linux, mas você não precisa de um. Entre na conta pelo Heronite para instalar sua biblioteca, ou adicione os instaladores sem DRM que você já baixou."
navLabel: GOG no Linux
summary: "Entre na GOG pelo Heronite, instale jogos com o gogdl ou adicione à mão instaladores offline sem DRM e pastas de jogos."
order: 3
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com um jogo selecionado: capa, botão Jogar, detalhes e uma caixa No Linux com a nota do ProtonDB e o status do anti-cheat."
og: /og/gog-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Entre pela página Lojas"
    text: "Aperte Ctrl+4, escolha GOG e entre. Sua biblioteca inteira vai para a Coleção."
  - title: "Instala com o gogdl"
    text: "O Heronite baixa e verifica os jogos com o gogdl, a mesma ferramenta de código aberto que o Heroic usa."
  - title: "Sem DRM, do seu jeito"
    text: "Adicione os instaladores offline ou as pastas que você já tem, sem precisar entrar na conta."
  - title: "Precisa do python3"
    text: "O gogdl roda em Python, então instale o python3 se os downloads da GOG falharem."
faq:
  - q: "Existe um GOG Galaxy para Linux?"
    a: "Não, a GOG não faz uma versão oficial do Galaxy para Linux. O Heronite usa a ferramenta de código aberto [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl) para entrar na conta, baixar, verificar e atualizar seus jogos."
  - q: "Os jogos da GOG rodam no Linux?"
    a: "Muitos rodam. A maioria dos jogos da GOG é de Windows e roda pelo Wine ou pelo Proton. Alguns também têm versão nativa para Linux, e o Heronite pode oferecê-la quando a GOG lista uma. Veja a nota do jogo no [ProtonDB](https://www.protondb.com), nos detalhes, antes de instalar."
  - q: "Por que meus downloads da GOG falham no Linux?"
    a: "O gogdl precisa do `python3`. Instale pelo gerenciador de pacotes e tente o download de novo. Veja a [página de solução de problemas](/docs/troubleshooting/) para outras causas."
  - q: "Posso jogar os jogos da GOG sem entrar na conta?"
    a: "Pode. Os jogos da GOG não têm DRM, então um instalador offline baixado do site da GOG funciona sem nenhuma launcher. Adicione o jogo instalado ao Heronite à mão e ele joga como qualquer outro."
  - q: "Posso usar meus jogos do GOG Galaxy no Windows?"
    a: "Pode, no Windows. O Heronite mostra como instalados os jogos que o GOG Galaxy instalou, sem baixar de novo, e o GOG Galaxy continua atualizando eles. No Linux não existe Galaxy para importar."
related:
  - /guides/epic-games-on-linux/
  - /guides/amazon-games-on-linux/
  - /features/stores/
---

Sua biblioteca da GOG pode viver no Linux sem o GOG Galaxy. O Heronite entra na sua conta, lista todos os jogos que você tem e instala tudo com uma fila só. Os jogos da GOG não têm DRM, então você também pode pular o login e adicionar os seus próprios instaladores.

Este guia mostra os dois caminhos: o do login e o manual, para instaladores offline e pastas que você já tem.

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando.
- O `python3` instalado. A ferramenta gogdl roda nele.
- Uma conta da GOG, para o caminho do login. O caminho manual não precisa de conta.
- Espaço em disco. O Heronite instala os jogos em `~/Games/Heronite` por padrão.

## Passo 1: Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/). Ele funciona em qualquer distribuição:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os pacotes para Debian, Ubuntu, Fedora e Arch estão no [guia de instalação](/pt-br/docs/installation/).

## Passo 2: Veja se o python3 está instalado

```bash
python3 --version
```

Se aparecer uma versão, está tudo certo. Se o comando não existir, instale o `python3` pelo gerenciador de pacotes. Sem ele, os downloads da GOG falham.

## Passo 3: Entre na sua conta da GOG

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **GOG** e use **Entrar com a GOG**.
3. Entre na janela pequena, com a página da própria GOG.

Se a janela não abrir, use o **método do navegador** na mesma página. Abra a página de login no navegador e entre na conta. Depois copie o endereço da página em que você cair. Ele contém `code=`. Cole no Heronite. No Linux, a janela de login precisa do WebKitGTK 4.1, que é a causa mais comum de ela não abrir.

Depois de entrar, sua biblioteca inteira da GOG aparece na Coleção, instalada ou não. Leia [Lojas e launchers](/pt-br/docs/stores-and-launchers/) para ver como o Heronite trata cada loja.

## Passo 4: Instale um jogo

1. Encontre o jogo na Coleção e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela GOG**.
2. Escolha a **Pasta de instalação** e, para um jogo de Windows, a **Versão do Wine**. O padrão é um bom começo.
3. Confirme. Acompanhe o download na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).

O Heronite baixa e verifica o jogo com o [gogdl](https://github.com/Heroic-Games-Launcher/heroic-gogdl). Uma única fila de downloads cuida de instalações, atualizações, reparos e movimentações, pausa quando você fica sem conexão e tenta de novo os downloads que falham. O Heronite procura atualizações de jogos a cada 3 horas.

Antes de um download grande, veja a caixa **No Linux** nos detalhes do jogo. Ela mostra a nota dele no [ProtonDB](https://www.protondb.com), para você saber se ele roda bem.

![As Configurações do jogo do Heronite para Control, na aba Compatibilidade, com a versão do Proton, a nota do ProtonDB e o prefixo Wine.](../../../assets/screenshots/game-settings.webp)

*Escolha outra versão do Proton em cada jogo, em Configurações do jogo → Compatibilidade.*

## Passo 5: Jogue

Aperte <kbd>Enter</kbd> no jogo para abri-lo. Os jogos de Windows rodam pelo Wine ou pelo Proton, com o próprio prefixo em `~/Games/Heronite/Prefixes`. Se um jogo der problema, abra **Configurações do jogo** e vá em **Compatibilidade** para testar outra versão. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como conseguir mais.

## Como adicionar jogos sem DRM à mão

Os jogos da GOG não têm DRM, então você não precisa de login para jogá-los. Isso ajuda quando você guarda instaladores num HD, ou quando não quer que uma launcher mexa na sua conta.

1. Baixe o instalador offline na sua conta, no site da GOG.
2. Para um instalador de Windows, rode-o pelo Wine, por conta própria ou com o botão **Executar .exe no prefixo** em **Configurações do jogo → Compatibilidade** de um jogo. Para um instalador de Linux, rode como de costume.
3. Aperte <kbd>Ctrl</kbd> <kbd>N</kbd> e adicione o jogo instalado. Escolha um programa de Windows (`.exe`), um programa nativo de Linux ou um script de inicialização.
4. Ou aponte o Heronite para a pasta onde ficam seus jogos. Ele adiciona de uma vez todos os jogos que encontrar.

O Heronite busca arte e detalhes para eles, mas eles não ficam ligados à sua conta da GOG, então não se atualizam sozinhos. Se os arquivos de um jogo da GOG já estão neste PC, use **Importar um jogo instalado** na página da GOG em vez de baixar de novo.

## Atualizações, reparos e versões nativas para Linux

Os jogos da GOG instalados pelo Heronite podem ser atualizados, reparados, movidos para outro disco ou desinstalados pela mesma fila de downloads. O Heronite procura atualizações a cada 3 horas, e a página da GOG tem um botão **Atualizar tudo** quando várias estão esperando.

Alguns jogos da GOG também têm versão nativa para Linux. Quando a GOG lista uma, o Heronite pode oferecê-la no lugar da versão de Windows. Uma versão nativa não precisa do Wine. Se ela der problema, você ainda pode instalar a versão de Windows e rodá-la pelo Proton.

Seus jogos instalados continuam no disco se você sair da conta da GOG no Heronite. O login da GOG fica na pasta de dados do Heronite, então mantenha essa pasta privada ao compartilhar ou copiar.

## Problemas comuns

- **Os downloads da GOG falham.** Instale o `python3`. O gogdl precisa dele.
- **A janela de login não abre.** Use o método do navegador ou instale o WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`).
- **Falta uma DLL ou o .NET.** Instale com o Winetricks. O Heronite sugere qual.
- **Um jogo com DirectX 12 falha.** Ligue o VKD3D-Proton nas configurações do jogo.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits, como `lib32-vulkan-radeon` ou `mesa-vulkan-drivers:i386`.
- **Um jogo não abre de jeito nenhum.** Abra **Configurações → Logs** e leia o log de inicialização dele. O Heronite mostra uma solução quando conhece uma.

Há mais soluções em [Solução de problemas](/pt-br/docs/troubleshooting/).

## O que ler em seguida

- [Epic Games no Linux](/pt-br/guides/epic-games-on-linux/) e [Amazon Games no Linux](/pt-br/guides/amazon-games-on-linux/), para as suas outras bibliotecas.
- [Como as lojas funcionam no Heronite](/pt-br/features/stores/).
- [Wine e Proton](/pt-br/docs/wine-and-proton/), com as opções por jogo.
- [Arquivos e pastas](/pt-br/docs/files-and-folders/), para ver onde ficam seus jogos e logins.
