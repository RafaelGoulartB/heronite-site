---
title: "Como rodar jogos do Windows no Linux com Wine e Proton"
description: "Rode jogos do Windows no Linux em um launcher só. O Heronite gerencia Proton-CachyOS e GE-Proton, prefixos, DXVK, gamescope, limite de FPS, DLSS e FSR por jogo."
eyebrow: Wine e Proton
headline: "Jogos do Windows no Linux, *sem dor de cabeça*"
lead: "Um gerenciador de Wine e Proton e um launcher de jogos em um app só. Escolha uma versão, dê a cada jogo o seu próprio prefixo e ajuste DXVK, gamescope, limite de FPS e upscaling por jogo."
navLabel: Wine e Proton
summary: "Um Gerenciador do Wine embutido, prefixos e opções por jogo, sandbox e dicas de erro de inicialização para jogos do Windows no Linux."
order: 4
hero: ../../../assets/screenshots/game-settings.webp
heroAlt: "Configurações do jogo Control na aba Compatibilidade: a versão do Proton definida como GE-Proton-latest com nota Platinum no ProtonDB, o prefixo Wine e a pasta dele, os botões Winecfg e Winetricks e o campo de ID do umu."
og: /og/wine-and-proton.jpg
updated: 2026-11-01
highlights:
  - title: Gerenciador do Wine
    text: Baixe e atualize Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek.
  - title: Ajustes por jogo
    text: Versão, prefixo, DXVK, VKD3D-Proton, gamescope, limite de FPS, escolha da GPU e upgrades de DLSS, FSR ou XeSS.
  - title: Sandbox
    text: Rode um jogo em que você não confia sem rede e sem acesso à sua pasta pessoal.
  - title: Correções quando falha
    text: O Heronite lê o log de inicialização e sugere uma correção quando reconhece o problema.
faq:
  - q: Como rodar jogos do Windows no Linux?
    a: Instale o Heronite, adicione o jogo ou entre na loja dele e aperte Jogar. O Heronite roda o jogo com Wine ou Proton usando padrões sensatos. Se um jogo precisar de outros ajustes, mude em **Configurações do jogo**, na aba **Compatibilidade**.
  - q: Qual é a melhor versão do Proton para o meu jogo?
    a: Não existe uma única melhor. **Proton-CachyOS** e **GE-Proton** costumam receber correções primeiro, então são um bom começo. A página do jogo mostra a nota dele no [ProtonDB](https://www.protondb.com), e você pode trocar para outra versão com um clique. Veja [como instalar o GE-Proton](/guides/install-ge-proton/).
  - q: Existe um gerenciador de Proton para jogos que não são da Steam?
    a: Existe. O **Gerenciador do Wine** (`Ctrl+3`) baixa e atualiza versões do Proton para qualquer jogo da sua Coleção. Ligue a opção da Steam e as mesmas versões também aparecem na pasta `compatibilitytools.d` da Steam.
  - q: Jogos com anti-cheat funcionam no Linux?
    a: Depende do jogo. O status vem do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) e aparece nos detalhes do jogo. O Heronite pode fornecer os runtimes do EAC e do BattlEye, mas um jogo cuja desenvolvedora não permite o Linux não vai rodar. Veja [anti-cheat](/docs/wine-and-proton/).
  - q: Posso usar a geração de quadros do Lossless Scaling no Linux?
    a: Pode, por meio do [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Você precisa do Lossless Scaling da Steam, e ele funciona com jogos Vulkan, DXVK e VKD3D, não com OpenGL.
related:
  - /guides/install-ge-proton/
  - /guides/steam-deck/
  - /compare/lutris/
---

Jogos do Windows rodam no Linux por meio do Wine ou do Proton. Os dois funcionam bem hoje, mas configurar um jogo de cada vez dá trabalho: qual versão, qual prefixo, quais variáveis de ambiente. O Heronite faz esse trabalho por você. Ele escolhe padrões sensatos, e cada opção pode ser mudada por jogo em **Configurações do jogo**, na aba **Compatibilidade**, ou para todos os jogos em Configurações.

## Como o Heronite roda jogos do Windows no Linux?

Quando você aperta Jogar em um jogo do Windows, o Heronite o inicia com Wine ou Proton, em um prefixo só dele. Isso vale para jogos da [Epic, GOG, Amazon e das outras lojas](/pt-br/features/stores/) e também para programas do Windows que você adiciona à mão. A página do jogo mostra a nota dele no ProtonDB, então você sabe como ele deve rodar antes de instalar.

A sua biblioteca não muda. Jogos do Windows ficam ao lado de jogos nativos do Linux e dos [jogos de emulador](/pt-br/features/emulation/) na mesma Coleção, com o mesmo rastreamento de tempo de jogo.

## O que é o Gerenciador do Wine?

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite, ou para a `compatibilitytools.d` da Steam se você ligar essa opção, para que a Steam também possa usá-las. O Heronite também encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris, então você não baixa duas vezes.

![O Gerenciador do Wine com uma lista de versões do Proton à esquerda, Proton-CachyOS selecionado, e as versões dele à direita com datas de lançamento, tamanhos e botões Instalar.](../../../assets/screenshots/wine-manager.webp)

*O Gerenciador do Wine: escolha uma família de versões e depois instale ou remova qualquer versão.*

Está começando? O guia [instalar o GE-Proton](/pt-br/guides/install-ge-proton/) mostra os passos.

## Preciso saber Wine para usar?

Não. O Heronite escolhe uma versão do Wine ou Proton e um prefixo para você, então a maioria dos jogos inicia com um clique. Abra **Configurações do jogo** só quando um jogo precisar de algo especial, como outra versão do Proton, DXVK ou um limite de FPS. Um botão **Restaurar esta aba** devolve uma aba aos padrões.

## Como funcionam os prefixos?

Um prefixo é a pasta de "Windows de mentirinha" em que um jogo roda. Por padrão os jogos são instalados em `~/Games/Heronite`, e cada jogo ganha o seu próprio prefixo em `~/Games/Heronite/Prefixes`. Vários jogos também podem compartilhar um prefixo. O Gerenciador do Wine lista os seus prefixos, e as configurações de um jogo têm botões para **Winecfg** e **Winetricks** no prefixo dele.

## Quais opções posso ajustar por jogo?

Tudo abaixo pode ser definido para um jogo específico. O Heronite também tem presets de inicialização, para você reaproveitar uma configuração em outros jogos.

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

### Geração de quadros com o Lossless Scaling

O Heronite pode ligar a geração de quadros do Lossless Scaling por meio do [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk). Ele precisa do Lossless Scaling da Steam e funciona com jogos Vulkan, DXVK e VKD3D, não com OpenGL.

> **Nota.** Algumas opções precisam de ferramentas extras. O gamescope precisa do `gamescope`, e o sandbox precisa do `bubblewrap`. O Heronite funciona sem elas, e cada uma só liga o seu recurso. A lista está em [Instalação](/pt-br/docs/installation/).

## Posso colocar um jogo do Windows em um sandbox?

Pode. Se você não confia em um jogo, rode-o com o [bubblewrap](https://github.com/containers/bubblewrap). O jogo fica sem rede e sem acesso à sua pasta pessoal. Quando ele precisar de uma coisa só, como uma pasta ou a rede, você pode liberar apenas isso. Precisa do `bwrap` instalado. Mais na [documentação do sandbox](/pt-br/docs/wine-and-proton/).

## O que acontece quando um jogo não inicia?

O Heronite lê o log de inicialização e sugere uma correção quando reconhece o problema. Ele procura por:

- uma DLL ou o .NET faltando,
- um jogo DirectX 12 sem o VKD3D-Proton,
- um driver Vulkan de 32 bits faltando,
- um `vm.max_map_count` baixo,
- outro `wineserver` ainda rodando,
- anti-cheat sem suporte.

Fora isso, valem os conselhos de sempre: tente outra versão do Proton, como Proton-GE ou Proton-CachyOS, tente um prefixo novo e veja a página do jogo no [ProtonDB](https://www.protondb.com). Os logs ficam em **Configurações → Logs**. A [página de solução de problemas](/pt-br/docs/troubleshooting/) tem a tabela completa.

## O que posso fazer com scripts e trainers?

Cada jogo pode rodar scripts antes e depois de iniciar, e programas junto com ele, como trainers. Salve essa configuração como um **preset de inicialização** e reaproveite em outros jogos. Veja a [documentação](/pt-br/docs/wine-and-proton/) para a lista completa.

## E o anti-cheat?

O anti-cheat é o principal fator que decide se um jogo online roda no Linux. O Heronite mostra nos detalhes de cada jogo o status do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com), para você conferir antes de comprar ou instalar. Ele pode fornecer os runtimes do EAC e do BattlEye. Um jogo cuja desenvolvedora não permite o Linux não vai rodar, não importa o launcher.

## O Heronite é um bom launcher de Wine para o Steam Deck?

O Heronite roda no modo desktop do SteamOS como AppImage, e o modo console dele é feito para controles. Veja o [guia do Steam Deck](/pt-br/guides/steam-deck/). Se você usa Lutris ou Heroic hoje, [Heronite vs Lutris](/pt-br/compare/lutris/) e [Heronite vs Heroic](/pt-br/compare/heroic/) explicam o que muda, e o Heronite pode importar os jogos deles.

## Leia a referência completa

Todas as opções estão listadas na página de documentação [Wine e Proton](/pt-br/docs/wine-and-proton/). Pronto para testar? [Baixe o Heronite](/pt-br/download/) para Linux.
