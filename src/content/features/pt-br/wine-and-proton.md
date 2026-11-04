---
title: "Gerenciador de Wine e Proton para Linux | Heronite"
description: "Rode jogos do Windows no Linux: baixe GE-Proton e Proton-CachyOS e ajuste prefixo, DXVK, gamescope e limite de FPS por jogo em um só launcher."
eyebrow: Wine e Proton
headline: "Gerenciador de Wine e Proton para jogos do Windows no Linux"
lead: "O Heronite é um gerenciador de Wine e Proton e um launcher de jogos em um app só. Ele baixa GE-Proton e Proton-CachyOS e dá a cada jogo o seu próprio prefixo."
navLabel: Wine e Proton
summary: "Um Gerenciador do Wine embutido, prefixos e opções por jogo, sandbox e dicas de erro de inicialização para jogos do Windows no Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Configurações do jogo Control na aba Compatibilidade: a versão do Proton definida como GE-Proton-latest com nota Platinum no ProtonDB, o prefixo Wine e a pasta dele, os botões Winecfg e Winetricks e o campo de ID do umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Gerenciador do Wine
    text: Baixe e atualize versões do Proton em uma lista só.
  - title: Ajustes por jogo
    text: Defina versão, prefixo, DXVK e limite de FPS para cada jogo.
  - title: Sandbox
    text: Rode jogos suspeitos sem rede e sem acesso à sua pasta pessoal.
  - title: Correções quando falha
    text: Erros de inicialização vêm com uma sugestão de correção.
faq:
  - q: Como rodar jogos do Windows no Linux?
    a: Adicione o jogo e aperte Jogar. Se for de uma loja, entre nela primeiro. Mude os ajustes em **Configurações do jogo → Compatibilidade**.
  - q: Qual é a melhor versão do Proton para o meu jogo?
    a: Não existe uma única melhor. **Proton-CachyOS** e **GE-Proton** costumam receber correções primeiro, então comece por elas. A página do jogo mostra a nota dele no [ProtonDB](https://www.protondb.com).
  - q: Existe um gerenciador de Proton para jogos que não são da Steam?
    a: Sim. O **Gerenciador do Wine** (`Ctrl+3`) baixa e atualiza versões do Proton para qualquer jogo da sua Coleção.
  - q: Jogos com anti-cheat funcionam no Linux?
    a: Depende do jogo. Veja o [status do anti-cheat](#como-verifico-o-status-de-anti-cheat-de-um-jogo) e a [documentação de anti-cheat](/docs/wine-and-proton/#anticheat).
  - q: Posso usar a geração de quadros do Lossless Scaling no Linux?
    a: Sim, por meio do [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk), se você tem o Lossless Scaling na Steam. Veja [como ligar](#como-ligo-a-geração-de-quadros-do-lossless-scaling).
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

O Heronite roda jogos da [Epic, GOG, Amazon e das outras lojas](/pt-br/features/stores/) e programas que você adiciona à mão com Wine ou Proton. A maioria inicia com um clique.

Mude qualquer opção por jogo em **Configurações do jogo → Compatibilidade**, ou para todos os jogos em Configurações. **Restaurar esta aba** devolve os padrões de uma aba.

## Quais versões do Proton e do Wine o Heronite baixa?

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite, ou para a `compatibilitytools.d` da Steam se você ligar essa opção, para que a Steam também possa usá-las. O Heronite acha versões do Proton nas suas bibliotecas da Steam e os runners do Wine do Lutris, então você não baixa duas vezes.

![O Gerenciador do Wine com uma lista de versões do Proton à esquerda, Proton-CachyOS selecionado, e as versões dele à direita com datas de lançamento, tamanhos e botões Instalar.](../../../assets/screenshots/wine-manager.webp)

*Escolha uma família de versões e depois instale ou remova qualquer versão.*

Para instalar passo a passo, veja [instalar o GE-Proton](/pt-br/guides/install-ge-proton/).

## O que é um prefixo do Wine?

Um prefixo é a pasta de "Windows de mentirinha" em que um jogo roda. Por padrão os jogos são instalados em `~/Games/Heronite`, e cada jogo ganha o seu próprio prefixo em `~/Games/Heronite/Prefixes`, embora vários jogos possam compartilhar um. O Gerenciador do Wine lista os seus prefixos, e as configurações de um jogo têm botões **Winecfg** e **Winetricks**.

## Quais opções posso ajustar por jogo?

Tudo abaixo pode ser definido para um jogo e salvo como um **preset de inicialização** para reaproveitar em outros. A lista completa está na [documentação](/pt-br/docs/wine-and-proton/#opções-por-jogo).

- Versão do Wine ou Proton e prefixo
- DXVK, VKD3D-Proton e DXVK-NVAPI
- Esync e Fsync
- gamescope (precisa do `gamescope` instalado)
- Limite de FPS
- Escolha da GPU em PCs com mais de uma
- Upgrades de DLSS, FSR e XeSS
- Winetricks
- umu e os protonfixes dele, que são correções de jogos do banco de dados do umu
- Wayland em vez de X11 (precisa de uma versão do Wine com suporte a Wayland)
- Scripts para rodar antes e depois do jogo, e programas para rodar junto com ele, como trainers

> **Nota.** `gamescope` e `bubblewrap` (para o sandbox) são ferramentas opcionais. Veja [Instalação](/pt-br/docs/installation/).

### Como ligo a geração de quadros do Lossless Scaling?

O Heronite usa o [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Ele precisa do Lossless Scaling da Steam e funciona com jogos Vulkan, DXVK e VKD3D, não com OpenGL.

## Posso colocar um jogo do Windows em um sandbox?

Sim. O Heronite pode rodar um jogo em que você não confia com o [bubblewrap](https://github.com/containers/bubblewrap), sem rede e sem acesso à sua pasta pessoal. Você pode liberar uma coisa só, como uma pasta ou a rede. Precisa do `bwrap` instalado; veja a [documentação do sandbox](/pt-br/docs/wine-and-proton/#sandbox).

## Um jogo do Windows não inicia no Linux

O Heronite lê o log de inicialização e sugere uma correção quando reconhece um destes problemas:

- uma DLL ou o .NET faltando,
- um jogo DirectX 12 sem o VKD3D-Proton,
- um driver Vulkan de 32 bits faltando,
- um `vm.max_map_count` baixo,
- outro `wineserver` ainda rodando,
- anti-cheat sem suporte.

Se nenhuma correção aparecer, tente outra versão do Proton, como GE-Proton ou Proton-CachyOS, ou um prefixo novo. Depois veja a página do jogo no [ProtonDB](https://www.protondb.com). Os logs ficam em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/) tem a tabela completa.

## Como verifico o status de anti-cheat de um jogo?

Jogos para um jogador raramente têm problemas com anti-cheat. Nos outros, os detalhes do jogo mostram o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para você conferir antes de comprar ou instalar. O Heronite pode fornecer os runtimes do EAC e do BattlEye. Um jogo cuja desenvolvedora não permite o Linux não vai rodar.

## Funciona no Steam Deck?

Sim. O Heronite roda no modo desktop do SteamOS como AppImage, e o modo console dele é feito para controles. Veja o [guia do Steam Deck](/pt-br/guides/steam-deck/). Vem do Lutris ou do Heroic? O Heronite importa os jogos deles; compare [Heronite vs Lutris](/pt-br/compare/lutris/) e [vs Heroic](/pt-br/compare/heroic/).
