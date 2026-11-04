---
title: "Como instalar o GE-Proton e o Proton-CachyOS no Linux"
description: "Instalar GE-Proton no Linux com o Gerenciador do Wine do Heronite, junto com o Proton-CachyOS e outras versões. Escolha por jogo ou use na Steam."
eyebrow: Guia para Linux
headline: "Como instalar o GE-Proton e o Proton-CachyOS"
lead: "Instale o GE-Proton no Linux com um clique pelo Gerenciador do Wine, e depois escolha a versão por jogo ou compartilhe com a Steam."
navLabel: Instalar o GE-Proton
summary: "Abra o Gerenciador do Wine, instale o GE-Proton ou o Proton-CachyOS e escolha a versão de cada jogo em Configurações do jogo."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite: uma lista de fontes à esquerda (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek), uma lista de versões com botões Instalar à direita e a chave Instalar o Proton no Steam embaixo, à esquerda."
og: /og/install-ge-proton.jpg
updated: 2026-11-04
highlights:
  - title: "Abra o Gerenciador do Wine"
    text: "Aperte Ctrl+3, escolha uma fonte como o GE-Proton e clique em Instalar numa versão."
  - title: "Seis fontes"
    text: "Escolha entre seis fontes de Proton na mesma lista."
  - title: "Compartilhe com a Steam"
    text: "Ligue Instalar o Proton no Steam e a Steam também usa as versões novas."
  - title: "Escolha por jogo"
    text: "Escolha a versão de cada jogo em Configurações do jogo → Compatibilidade."
faq:
  - q: "Qual a diferença entre o GE-Proton e o Proton-CachyOS?"
    a: "Vêm de equipes diferentes: Glorious Eggroll faz o GE-Proton, e a equipe do CachyOS faz o Proton-CachyOS. Os dois costumam receber correções antes do Proton da Valve. Veja [a tabela de fontes](#para-que-servem-as-outras-versões-do-proton)."
  - q: "A Steam consegue usar as versões que instalo no Heronite?"
    a: "Consegue. Ligue **Instalar o Proton no Steam** no Gerenciador do Wine e reinicie a Steam. Veja [Compartilhe as versões com a Steam](#compartilhe-as-versões-com-a-steam-opcional)."
  - q: "Onde o Heronite instala as versões do Proton?"
    a: "Em `~/.local/share/heronite/tools/proton`. Com **Instalar o Proton no Steam** ligado, as versões novas vão para a pasta `compatibilitytools.d` da Steam."
  - q: "O Gerenciador do Wine funciona no Windows?"
    a: "Não. O Gerenciador do Wine é só para Linux. No Windows, os jogos rodam nativamente."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

O GE-Proton e o Proton-CachyOS costumam receber primeiro as correções para lançamentos novos, então teste os dois quando um jogo travar.

## O que você precisa

- O Heronite no Linux ([guia de instalação](/pt-br/docs/installation/)). O Gerenciador do Wine não existe no Windows. No Steam Deck, configure antes o Heronite com o [guia do Steam Deck](/pt-br/guides/steam-deck/).
- Conexão com a internet. As versões são baixadas do GitHub.
- Espaço em disco. Uma versão do Proton ocupa de algumas centenas de megabytes a mais de um gigabyte.

## Abra o Gerenciador do Wine

Aperte <kbd>Ctrl</kbd> <kbd>3</kbd>, ou abra pela paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>). Escolha uma das seis fontes à esquerda e as versões dela aparecem à direita, das mais novas para as mais antigas, com a data de lançamento e o tamanho.

![O Gerenciador do Wine do Heronite com o Proton-CachyOS selecionado: uma lista de versões com datas de lançamento, tamanhos e botões Instalar.](../../../assets/screenshots/wine-manager.webp)

## Instale o GE-Proton no Gerenciador do Wine

1. Escolha **GE-Proton** na lista da esquerda.
2. Encontre a versão que quer. **GE-Proton-latest** acompanha o lançamento mais novo. Uma versão numerada fica fixa, o que ajuda quando um jogo funciona só em uma versão.
3. Clique em **Instalar**.

A linha muda para **Instalado**. As versões vão para `~/.local/share/heronite/tools/proton`. Use a caixa de busca para achar uma versão rápido.

> **Dica.** Ligue **Manter os builds -latest atualizados**. O Heronite atualiza então as entradas **-latest** em segundo plano, e nunca enquanto um jogo está aberto.

## Instale o Proton-CachyOS

Escolha **Proton-CachyOS** na lista e clique em **Instalar** numa versão. As versões instalam lado a lado, então você pode manter as duas e trocar em cada jogo.

## Para que servem as outras versões do Proton?

| Fonte | O que é |
|---|---|
| Proton-CachyOS | Uma variante do Proton da equipe do CachyOS, com ferramentas extras como DXVK-Sarek e D7VK |
| GE-Proton | Uma variante do Proton feita por Glorious Eggroll, pensada para uso com a launcher umu |
| DW-Proton | O Proton da Dawn Winery: o Proton Experimental com correções extras para jogos |
| UMU-Proton | O Proton da Valve, empacotado pelo projeto umu para rodar jogos fora da Steam |
| Proton-EM | Proton com patches ainda em teste, como FSR 4 e HDR. Algumas versões são pré-lançamentos |
| Proton-Sarek | Proton com DXVK-Sarek, para placas de vídeo antigas sem suporte a Vulkan 1.3 |

A página do jogo no [ProtonDB](https://www.protondb.com) muitas vezes diz qual versão funciona.

## Escolha a versão de um jogo em Configurações do jogo

1. Selecione o jogo na sua Coleção e abra as **Configurações do jogo**.
2. Vá na aba **Compatibilidade**.
3. Em **Versão**, escolha a versão que você instalou.

![As Configurações do jogo do Heronite na aba Compatibilidade: o menu Versão em GE-Proton-latest, com a nota do ProtonDB e o prefixo Wine embaixo.](../../../assets/screenshots/game-settings.webp)

A mesma aba mostra a nota do ProtonDB do jogo e uma versão **Recomendado**. Sua escolha vale só para aquele jogo. Defina um padrão para jogos novos em Configurações. Veja [Wine e Proton](/pt-br/docs/wine-and-proton/).

## Compartilhe as versões com a Steam (opcional)

O Heronite pode colocar as versões na pasta `compatibilitytools.d` da Steam, onde ela consegue usá-las:

1. No Gerenciador do Wine, ligue **Instalar o Proton no Steam**.
2. Instale as versões como acima. As novas são baixadas para a pasta `compatibilitytools.d`, e as que você já tem são registradas lá.
3. Reinicie a Steam para ela enxergá-las.
4. Na Steam, clique com o botão direito num jogo, escolha **Propriedades** e depois **Compatibilidade**. Ligue a opção de forçar uma ferramenta de compatibilidade e escolha a sua versão.

O Heronite também encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris, então você não precisa baixar duas vezes.

## Atualize e remova versões

Ao lado de uma versão instalada, **Atualizar** aparece quando há um lançamento novo, e **Remover** apaga a versão. Os jogos configurados para uma versão removida voltam ao padrão.

## Uma versão não instala, não aparece ou não conserta o jogo

- **A lista está vazia.** Clique no ícone de atualizar. Se aparecer que o limite do GitHub foi atingido, tente de novo depois do horário mostrado.
- **Um download falha.** Verifique sua conexão e clique em **Instalar** de novo.
- **A Steam não mostra a versão.** Confira se **Instalar o Proton no Steam** estava ligado quando você instalou e reinicie a Steam.
- **Um jogo continua travando.** Teste outra fonte, como Proton-CachyOS ou DW-Proton, ou um prefixo novo.

Para erros do Vulkan e outras correções comuns, veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux). Se o jogo tem anti-cheat que bloqueia o Linux, nenhuma versão do Proton ajuda: veja [Anti-cheat](/pt-br/docs/wine-and-proton/#anticheat).
