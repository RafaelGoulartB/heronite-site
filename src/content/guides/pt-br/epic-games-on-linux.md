---
title: "Como jogar jogos da Epic Games no Linux (e os grátis)"
description: "Jogue sua biblioteca da Epic Games no Linux com o Heronite: entre na conta, resgate os jogos grátis, instale pelo Proton e veja o que o anti-cheat bloqueia."
eyebrow: Guia para Linux
headline: "Como jogar jogos da *Epic Games* no Linux"
lead: "A Epic não tem app para Linux, mas sua biblioteca inteira roda por aqui. Este guia mostra como entrar na conta, resgatar os jogos grátis da semana, instalar tudo e escolher a versão certa do Proton."
navLabel: Epic Games no Linux
summary: "Entre na Epic pelo Heronite, instale seus jogos pelo Proton e confira o suporte a anti-cheat antes de baixar."
order: 1
hero: ../../../assets/screenshots/collection.webp
heroAlt: "A Coleção do Heronite com ELDEN RING aberto: o botão Jogar e, abaixo dele, uma caixa No Linux com a nota Gold do ProtonDB e o status do anti-cheat EAC ok."
og: /og/epic-games-on-linux.jpg
updated: 2026-11-01
highlights:
  - title: "Entre uma vez só"
    text: "Aperte Ctrl+4, escolha Epic Games e entre na conta. Sua biblioteca inteira vai para a Coleção, instalada ou não."
  - title: "Jogos grátis incluídos"
    text: "Resgate o jogo grátis da semana no site da Epic, atualize a biblioteca e ele aparece pronto para instalar."
  - title: "Proton por padrão"
    text: "Os jogos de Windows rodam pelo Proton. O Heronite escolhe uma versão para você, e você pode trocar em cada jogo."
  - title: "Confira antes de instalar"
    text: "Cada jogo mostra a nota do ProtonDB e o status do anti-cheat, então você sabe se ele vai rodar."
faq:
  - q: "Existe a Epic Games Launcher para Linux?"
    a: "Não. A Epic não faz uma versão da launcher para Linux. O Heronite usa a ferramenta de código aberto [legendary](https://github.com/derrod/legendary), que conversa com os servidores da Epic do mesmo jeito, então você entra na conta, instala, atualiza e joga sem o app oficial."
  - q: "Dá para jogar Fortnite no Linux?"
    a: "Hoje não. A desenvolvedora do Fortnite não ativou o suporte a Linux no anti-cheat, e o [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lista o jogo como não funcionando. O Heronite mostra esse status nos detalhes do jogo, então confira lá antes de perder tempo com o download."
  - q: "Os jogos grátis da semana da Epic funcionam no Linux?"
    a: "Sim, depois que você resgata. Resgate o jogo no site da Epic, com a mesma conta, e atualize sua biblioteca no Heronite. Jogos grátis são jogos normais da biblioteca, então instalam e rodam como qualquer outro."
  - q: "Preciso instalar o Wine ou o Proton antes?"
    a: "Não. O Heronite baixa uma versão do Proton quando precisa. Você só precisa de um driver Vulkan funcionando. Leia [Wine e Proton](/docs/wine-and-proton/) para ver o que dá para mudar."
  - q: "É seguro entrar na Epic pelo Heronite?"
    a: "Sua senha vai só para a página de login da própria Epic, que abre numa janela pequena. O Heronite guarda o login no seu PC. Veja o [FAQ](/docs/faq/) para saber mais."
related:
  - /guides/install-ge-proton/
  - /guides/gog-on-linux/
  - /features/stores/
---

Você pode jogar sua biblioteca da Epic Games Store no Linux sem a launcher oficial e sem configurar o Wine à mão. O Heronite entra na sua conta da Epic, mostra todos os jogos que você tem num só lugar e roda os de Windows pelo Proton.

Ao final deste guia, você terá sua biblioteca da Epic no PC com Linux, o jogo grátis da semana resgatado e instalado, e um jeito de saber quais jogos não vão rodar.

## O que você precisa

- Um PC com Linux de 64 bits e um driver Vulkan funcionando (Mesa para AMD e Intel, o driver proprietário para NVIDIA).
- Uma conta da Epic Games.
- Espaço livre em disco para os jogos. O Heronite instala em `~/Games/Heronite` por padrão.
- Cerca de dez minutos.

## Passo 1: Instale o Heronite

Abra a [página de download](/pt-br/download/) e baixe o AppImage, que funciona em qualquer distribuição. Torne-o executável e abra:

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Também há pacotes `.deb`, `.rpm` e para Arch. O [guia de instalação](/pt-br/docs/installation/) lista todos. Se preferir o AppImage, deixe-o numa pasta onde você possa gravar, como `~/Applications`, para que ele consiga se atualizar sozinho.

## Passo 2: Confira o driver Vulkan

O Heronite e a maioria dos jogos de Windows no Linux precisam do Vulkan. Veja se ele funciona:

```bash
vulkaninfo --summary
```

Se a sua GPU aparecer na lista, está tudo certo. Se não, instale o driver Vulkan da sua distribuição (por exemplo `vulkan-radeon` ou `vulkan-intel` no Arch, `mesa-vulkan-drivers` no Ubuntu, ou o driver da NVIDIA). Jogos antigos de 32 bits também precisam do driver Vulkan de 32 bits, como `lib32-vulkan-radeon` ou `mesa-vulkan-drivers:i386`.

## Passo 3: Entre na sua conta da Epic Games

1. Aperte <kbd>Ctrl</kbd> <kbd>4</kbd> para abrir **Lojas**.
2. Escolha **Epic Games** e depois **Entrar com a Epic Games**.
3. Entre na janela pequena que abrir. Você digita a senha na página da própria Epic.

Se a janela não abrir, use o **método do navegador** na mesma página: abra a página de login no seu navegador de costume, entre na conta, copie o endereço ou o código da página em que você cair e cole no Heronite. No Linux, a janela precisa do WebKitGTK 4.1, que é a causa mais comum do problema.

Depois de entrar, sua biblioteca inteira da Epic aparece na Coleção, instalada ou não. O Heronite lê tudo com o [legendary](https://github.com/derrod/legendary). Saiba mais em [Lojas e launchers](/pt-br/docs/stores-and-launchers/).

## Passo 4: Resgate os jogos grátis da semana

A Epic dá jogos grátis toda semana. O Heronite não resgata por você, então essa parte é feita no site da Epic:

1. Abra a página da loja da Epic no navegador e entre com a mesma conta.
2. Resgate o jogo grátis, para que ele entre na sua biblioteca.
3. Volte ao Heronite, abra **Lojas**, **Epic Games** e escolha **Atualizar biblioteca** ("Procurar jogos novos e atualizações").

O jogo novo aparece na Coleção como qualquer outro. Os jogos grátis que você resgatou em semanas anteriores também estão lá.

## Passo 5: Instale um jogo

Antes de instalar, veja os detalhes do jogo na Coleção. A caixa **No Linux** mostra a nota dele no [ProtonDB](https://www.protondb.com) e o status do anti-cheat. Um jogo com nota Gold ou Platinum costuma rodar sem trabalho nenhum.

1. Selecione o jogo e aperte <kbd>Enter</kbd>, ou escolha **Instalar pela Epic Games**.
2. Confira a **Pasta de instalação** e a **Versão do Wine**. Se estiver em dúvida, deixe a versão padrão.
3. Confirme. O download aparece na página Downloads (<kbd>Ctrl</kbd> <kbd>2</kbd>).

Cada jogo recebe o próprio prefixo Wine, uma pasta de Windows de mentirinha só dele. Deixe **Usar o prefixo Wine compartilhado** desligado, a menos que saiba por que quer usá-lo. Já tem os arquivos de um jogo no disco? Use **Importar uma instalação existente** e aponte o Heronite para a pasta.

## Passo 6: Jogue e troque o Proton se precisar

Aperte <kbd>Enter</kbd> no jogo para jogar. Se ele não abrir ou rodar mal, abra **Configurações do jogo** e vá em **Compatibilidade**. O menu **Versão** deixa você escolher outra versão do Proton, e a linha do ProtonDB costuma dizer qual funciona melhor.

![As Configurações do jogo do Heronite para Control, um jogo da Epic, na aba Compatibilidade: a versão do Proton GE-Proton-latest, a nota Platinum no ProtonDB, o prefixo Wine e os botões Winecfg e Winetricks.](../../../assets/screenshots/game-settings.webp)

*A aba Compatibilidade: escolha a versão do Proton em cada jogo.*

Versões como GE-Proton e Proton-CachyOS costumam receber correções antes das outras. O [guia do GE-Proton](/pt-br/guides/install-ge-proton/) mostra como instalá-las.

## Fortnite roda no Linux? Jogos com anti-cheat

O anti-cheat é o principal motivo de um jogo da Epic não rodar no Linux.

- Alguns jogos usam Easy Anti-Cheat ou BattlEye e funcionam. O Heronite pode fornecer os runtimes.
- Algumas desenvolvedoras não liberam o Linux, então o jogo não roda, não importa o que você tente.
- O Fortnite é um desses casos. O Easy Anti-Cheat da Epic pode funcionar no Linux, mas a desenvolvedora do jogo precisa ativar, e a do Fortnite não ativou. O [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) acompanha o status atual de cada jogo.

O Heronite mostra esse status nos detalhes do jogo, então confira antes de instalar um multiplayer grande. Jogos para um jogador raramente têm esse problema.

## Problemas comuns

- **A janela de login não abre.** Use o método do navegador na mesma página, ou instale o WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`).
- **Falta um jogo grátis.** Veja se você o resgatou na mesma conta da Epic e atualize a biblioteca.
- **Falta uma DLL ou o .NET.** Instale com o Winetricks. O Heronite sugere qual no log de inicialização.
- **Um jogo com DirectX 12 falha.** Ligue o VKD3D-Proton nas configurações do jogo. Para um erro de Direct3D, ligue o DXVK.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits. Instale o do seu vídeo.
- **Outro `wineserver` está rodando.** Feche o outro jogo ou rode `wineserver -k` nesse prefixo.
- **Travamento ao abrir um jogo novo.** Aumente o `vm.max_map_count`. Muitas distribuições já fazem isso.

Para mais soluções, veja [Solução de problemas](/pt-br/docs/troubleshooting/). Os logs ficam em **Configurações → Logs**.

## O que ler em seguida

- [Como instalar o GE-Proton e o Proton-CachyOS](/pt-br/guides/install-ge-proton/), com as versões que consertam mais jogos.
- [GOG no Linux](/pt-br/guides/gog-on-linux/) e [Amazon Games no Linux](/pt-br/guides/amazon-games-on-linux/), para trazer suas outras lojas para a mesma Coleção.
- [Como as lojas funcionam no Heronite](/pt-br/features/stores/).
- [Primeiros passos](/pt-br/docs/getting-started/), para conhecer o resto do app.
