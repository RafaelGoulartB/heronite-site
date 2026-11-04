---
title: "Gerenciador de Wine e Proton no Linux, GE-Proton | Heronite"
description: "Gerenciador de Wine e Proton e launcher de jogos para Linux. Baixe GE-Proton e Proton-CachyOS e ajuste prefixo, DXVK, gamescope e FPS por jogo."
eyebrow: Wine e Proton
headline: "Gerenciador de Wine e Proton para jogos do Windows no Linux"
lead: "O Heronite baixa GE-Proton, Proton-CachyOS e outras versões do Proton, e dá a cada jogo o seu próprio prefixo. Aí a maioria dos jogos do Windows abre com um clique."
navLabel: Wine e Proton
summary: "Um Gerenciador do Wine embutido, prefixos e opções por jogo, sandbox e dicas de erro de inicialização para jogos do Windows no Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Configurações do jogo Control na aba Compatibilidade: a versão do Proton definida como GE-Proton-latest com nota Platinum no ProtonDB, o prefixo Wine e a pasta dele, os botões Winecfg e Winetricks e o campo de ID do umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-04
highlights:
  - title: Versões compartilhadas com a Steam
    text: Coloque versões do Proton na compatibilitytools.d da Steam para a Steam usar também.
  - title: Ajustes por jogo
    text: Defina versão, prefixo, DXVK e limite de FPS para cada jogo.
  - title: Sandbox
    text: Rode jogos suspeitos sem rede e sem acesso à sua pasta pessoal.
  - title: Correções quando falha
    text: Erros de inicialização vêm com uma sugestão de correção.
faq:
  - q: Como rodar jogos do Windows no Linux?
    a: Adicione o jogo e aperte Jogar. Se for de uma loja, faça login nela primeiro. Mude os ajustes em **Configurações do jogo → Compatibilidade**.
  - q: Qual é a melhor versão do Proton para o meu jogo?
    a: Não existe uma única melhor. **Proton-CachyOS** e **GE-Proton** costumam receber correções primeiro, então comece por elas. A página do jogo mostra a nota dele no [ProtonDB](https://www.protondb.com).
  - q: Existe um gerenciador de Proton para jogos que não são da Steam?
    a: Sim. O **Gerenciador do Wine** (`Ctrl+3`) baixa e atualiza versões do Proton para qualquer jogo da sua Coleção.
  - q: Jogos com anti-cheat funcionam no Linux?
    a: Depende do jogo. Um jogo cuja desenvolvedora não permite o Linux não vai rodar. Veja a [documentação de anti-cheat](/docs/wine-and-proton/#anti-cheat).
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

O Heronite roda com Wine ou Proton os jogos do Windows de [todas as lojas](/pt-br/features/stores/) e os programas que você adiciona à mão.

Mude qualquer opção por jogo em **Configurações do jogo**, ou para todos os jogos em Configurações. **Restaurar esta aba** devolve os padrões de uma aba.

## Quais versões do Proton e do Wine o Heronite baixa?

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite, ou para a `compatibilitytools.d` da Steam se você ligar essa opção, para a Steam também poder usá-las. O Heronite acha versões do Proton nas suas bibliotecas da Steam e nos runners do Wine do Lutris, então você não baixa nada duas vezes.

![O Gerenciador do Wine com uma lista de versões do Proton à esquerda, Proton-CachyOS selecionado, e as versões dele à direita com datas de lançamento, tamanhos e botões Instalar.](../../../assets/screenshots/wine-manager.webp)

*Escolha uma família de versões e depois instale ou remova qualquer versão.*

Para instalar passo a passo, veja [instalar o GE-Proton](/pt-br/guides/install-ge-proton/).

## O que é um prefixo Wine?

Um prefixo é a pasta que imita o Windows onde um jogo roda. Por padrão os jogos são instalados em `~/Games/Heronite`, e cada jogo ganha o seu próprio prefixo em `~/Games/Heronite/Prefixes`, mas vários jogos podem dividir um. O Gerenciador do Wine lista os seus prefixos, e **Configurações do jogo → Compatibilidade** tem os botões **Winecfg** e **Winetricks**.

## Quais opções posso ajustar por jogo?

Tudo abaixo pode ser definido para um jogo e salvo como um **preset de inicialização** para reaproveitar em outros. A lista completa está na [documentação](/pt-br/docs/wine-and-proton/#opções-por-jogo).

- Versão do Wine ou Proton e prefixo
- DXVK, VKD3D-Proton e DXVK-NVAPI
- Esync e Fsync
- gamescope (precisa do `gamescope` instalado, veja [Instalação](/pt-br/docs/installation/))
- Limite de FPS
- Escolha da GPU em PCs com mais de uma
- Upgrades de DLSS, FSR e XeSS
- Winetricks
- umu e os protonfixes dele, que são correções de jogos do banco de dados do umu
- Wayland em vez de X11 (precisa de uma versão do Wine com suporte a Wayland)
- Scripts para rodar antes e depois do jogo, e programas para rodar junto com ele, como trainers

### Como ligo a geração de quadros do Lossless Scaling?

1. Instale o [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk), pelo pacote da sua distribuição ou pelo guia em lsfg-vk.dev.
2. Na Steam, ligue o Steam Play para todos os outros títulos em **Steam → Settings → Compatibility**.
3. Instale o Lossless Scaling pela Steam. Ele nunca precisa rodar.
4. Abra **Configurações do jogo → Desempenho**.
5. Em **Geração de quadros**, ligue **Geração de quadros do Lossless Scaling**.

Funciona com jogos Vulkan, DXVK e VKD3D, não com OpenGL.

## Posso colocar um jogo do Windows em um sandbox?

Sim. Em **Configurações do jogo → Sandbox**, o Heronite roda um jogo em que você não confia com o [bubblewrap](https://github.com/containers/bubblewrap), sem rede e sem acesso à sua pasta pessoal. Você pode liberar uma coisa só, como uma pasta ou a rede. Precisa do `bwrap` instalado; veja a [documentação do sandbox](/pt-br/docs/wine-and-proton/#sandbox).

## Um jogo do Windows não abre no Linux

O Heronite lê o log de inicialização e sugere uma correção quando reconhece um destes problemas:

- Uma DLL ou o .NET faltando
- Um jogo DirectX 12 sem o VKD3D-Proton
- Um driver Vulkan de 32 bits faltando
- Um `vm.max_map_count` baixo
- Outro `wineserver` ainda rodando
- Anti-cheat sem suporte

Se nenhuma correção aparecer, escolha outra versão do Proton em **Configurações do jogo → Compatibilidade**, como GE-Proton ou Proton-CachyOS, ou tente um prefixo novo. Depois veja a página do jogo no [ProtonDB](https://www.protondb.com). Os logs ficam em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/) tem a tabela completa.

## Como verifico o status de anti-cheat de um jogo?

Jogos single-player raramente têm problemas com anti-cheat. Nos outros, os detalhes do jogo mostram o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para você conferir antes de comprar ou instalar. O Heronite pode fornecer os runtimes do EAC e do BattlEye. Um jogo cuja desenvolvedora não permite o Linux não vai rodar.

## Funciona no Steam Deck?

Sim. O Heronite roda no Modo Desktop do SteamOS como AppImage, e o modo console dele é feito para controles. Veja o [guia do Steam Deck](/pt-br/guides/steam-deck/).

Próximo: compare [Heronite vs Lutris](/pt-br/compare/lutris/) e [vs Heroic](/pt-br/compare/heroic/).
