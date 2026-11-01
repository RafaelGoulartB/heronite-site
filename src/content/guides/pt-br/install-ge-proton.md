---
title: "Como instalar o GE-Proton e o Proton-CachyOS no Linux"
description: "Instale o GE-Proton, o Proton-CachyOS e outras versões do Proton pelo Gerenciador do Wine do Heronite. Escolha por jogo ou compartilhe com a Steam, sem terminal."
eyebrow: Guia para Linux
headline: "Como instalar o *GE-Proton* e o Proton-CachyOS"
lead: "O Gerenciador do Wine do Heronite baixa e atualiza as versões do Proton em que seus jogos rodam. Instale uma com um clique e escolha por jogo ou compartilhe com a Steam."
navLabel: Instalar o GE-Proton
summary: "Abra o Gerenciador do Wine, instale o GE-Proton ou o Proton-CachyOS e escolha a versão de cada jogo em Configurações do jogo."
order: 7
hero: ../../../assets/screenshots/wine-manager.webp
heroAlt: "O Gerenciador do Wine do Heronite: uma lista de fontes à esquerda (Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek), uma lista de versões com botões Instalar à direita e a chave Instalar o Proton no Steam embaixo, à esquerda."
og: /og/install-ge-proton.jpg
updated: 2026-11-01
highlights:
  - title: "Abra o Gerenciador do Wine"
    text: "Aperte Ctrl+3, escolha uma fonte como o GE-Proton e clique em Instalar numa versão."
  - title: "Seis fontes"
    text: "Proton-CachyOS, GE-Proton, DW-Proton, UMU-Proton, Proton-EM e Proton-Sarek, todas na mesma lista."
  - title: "Compartilhe com a Steam"
    text: "Ligue Instalar o Proton no Steam e as versões novas vão para o compatibilitytools.d, onde a Steam também enxerga."
  - title: "Escolha por jogo"
    text: "Em Configurações do jogo, Compatibilidade, escolha a versão de cada jogo."
faq:
  - q: "Como instalar o GE-Proton no Linux?"
    a: "No Heronite, aperte `Ctrl+3` para abrir o Gerenciador do Wine, escolha **GE-Proton** na lista da esquerda e clique em **Instalar** na versão que quiser. O Heronite baixa e extrai para você. Não precisa copiar arquivos à mão."
  - q: "Qual a diferença entre o GE-Proton e o Proton-CachyOS?"
    a: "O GE-Proton é uma variante do Proton feita por Glorious Eggroll. O Proton-CachyOS é mantido pela equipe do CachyOS e inclui ferramentas extras como DXVK-Sarek e D7VK. Os dois costumam receber correções de jogos antes do Proton da Valve, e você pode instalar os dois e trocar em cada jogo."
  - q: "A Steam consegue usar as versões que instalo no Heronite?"
    a: "Consegue. Ligue **Instalar o Proton no Steam** no Gerenciador do Wine. As versões novas passam a ser baixadas para a pasta `compatibilitytools.d` da Steam, e as que já estão instaladas são registradas lá. A Steam as enxerga depois de reiniciar."
  - q: "Como escolho qual Proton um jogo usa?"
    a: "Abra as **Configurações do jogo**, vá em **Compatibilidade** e escolha uma versão no menu **Versão**. Também dá para definir um padrão para todos os jogos em Configurações. Leia [Wine e Proton](/docs/wine-and-proton/) para ver as outras opções."
  - q: "O Gerenciador do Wine funciona no Windows?"
    a: "Não. Wine e Proton são para Linux, então o Gerenciador do Wine é só para Linux. No Windows, os jogos rodam nativamente."
related:
  - /features/wine-and-proton/
  - /guides/epic-games-on-linux/
  - /guides/steam-deck/
---

Muitos jogos de Windows no Linux rodam melhor numa versão do Proton diferente da padrão. O GE-Proton e o Proton-CachyOS costumam trazer primeiro as correções para lançamentos novos, e são as primeiras coisas a testar quando um jogo trava ou fica com defeitos visuais. O Gerenciador do Wine do Heronite instala os dois para você.

Ao final deste guia, você terá o GE-Proton e o Proton-CachyOS instalados, saberá para que servem as outras versões e poderá escolher uma para cada jogo, ou compartilhá-las com a Steam.

## O que você precisa

- O Heronite no Linux. O Gerenciador do Wine não existe no Windows.
- Conexão com a internet, porque as versões são baixadas do GitHub.
- Uma GPU com um driver Vulkan funcionando.
- Algum espaço em disco. Uma versão do Proton ocupa de algumas centenas de megabytes a mais de um gigabyte.

## Passo 1: Instale o Heronite

Baixe o AppImage na [página de download](/pt-br/download/):

```bash
chmod +x Heronite-x86_64.AppImage
./Heronite-x86_64.AppImage
```

Os pacotes estão listados no [guia de instalação](/pt-br/docs/installation/).

## Passo 2: Abra o Gerenciador do Wine

Aperte <kbd>Ctrl</kbd> <kbd>3</kbd>, ou abra pela paleta de comandos (<kbd>Ctrl</kbd> <kbd>K</kbd>). A página lista seis fontes à esquerda. Escolha uma e as versões que ela oferece aparecem à direita, das mais novas para as mais antigas, com a data de lançamento e o tamanho.

![O Gerenciador do Wine do Heronite com o Proton-CachyOS selecionado: uma lista de versões com datas de lançamento, tamanhos e botões Instalar.](../../../assets/screenshots/wine-manager.webp)

*O Gerenciador do Wine: escolha uma fonte à esquerda e instale uma versão à direita.*

## Passo 3: Instale o GE-Proton

1. Escolha **GE-Proton** na lista da esquerda.
2. Encontre a versão que quer. **GE-Proton-latest** acompanha o lançamento mais novo. Uma versão numerada, com o número no nome, fica fixa, o que ajuda quando um jogo funciona só em uma versão.
3. Clique em **Instalar**.

O Heronite baixa e extrai, e a linha muda para **Instalado**. As versões vão para `~/.local/share/heronite/tools/proton`. Você também pode usar a caixa de busca para achar uma versão rápido. Se a lista estiver vazia, clique no ícone de atualizar.

> **Dica.** As entradas **-latest** se atualizam sozinhas se você ligar **Manter os builds -latest atualizados**. O Heronite baixa então o lançamento novo em segundo plano, e nunca enquanto um jogo está aberto.

## Passo 4: Instale o Proton-CachyOS

Faça o mesmo com o **Proton-CachyOS**: escolha-o na lista e clique em **Instalar** numa versão. O Proton-CachyOS inclui ferramentas extras como DXVK-Sarek e D7VK. Você pode instalar várias versões lado a lado, então mantenha as duas e troque em cada jogo.

## Para que servem as outras versões

| Fonte | O que é |
|---|---|
| Proton-CachyOS | Uma variante do Proton da equipe do CachyOS, com ferramentas extras como DXVK-Sarek e D7VK |
| GE-Proton | Uma variante do Proton feita por Glorious Eggroll, pensada para uso com a launcher umu |
| DW-Proton | O Proton da Dawn Winery: o Proton Experimental com correções extras para jogos |
| UMU-Proton | O Proton da Valve, empacotado pelo projeto umu para rodar jogos fora da Steam |
| Proton-EM | Proton com patches ainda em teste, como FSR 4 e HDR. Algumas versões são pré-lançamentos |
| Proton-Sarek | Proton com DXVK-Sarek, para placas de vídeo antigas sem suporte a Vulkan 1.3 |

Se um jogo falhar numa versão, teste outra antes de desistir. A página do jogo no [ProtonDB](https://www.protondb.com) muitas vezes diz qual versão funciona.

## Passo 5: Escolha a versão de um jogo

1. Selecione o jogo na sua Coleção e abra as **Configurações do jogo**.
2. Vá na aba **Compatibilidade**.
3. Em **Versão**, escolha a versão que você instalou.

![As Configurações do jogo do Heronite na aba Compatibilidade: o menu Versão em GE-Proton-latest, com a nota do ProtonDB e o prefixo Wine embaixo.](../../../assets/screenshots/game-settings.webp)

*Configurações do jogo → Compatibilidade: o menu Versão escolhe a versão para este jogo.*

A mesma aba mostra a nota do ProtonDB do jogo e a versão que ele recomenda, com uma linha como **Recomendado** e o nome. Sua escolha vale só para aquele jogo. Você também pode definir um padrão para jogos novos em Configurações. Se você remover uma versão depois, os jogos configurados para usá-la voltam ao padrão.

## Passo 6: Deixe a Steam usar as versões também (opcional)

A Steam pode usar qualquer versão do Proton colocada na pasta `compatibilitytools.d` dela. O Heronite consegue colocá-las lá:

1. No Gerenciador do Wine, ligue **Instalar o Proton no Steam**.
2. Instale as versões como nos passos acima. As novas são baixadas para a pasta `compatibilitytools.d` da Steam, e as que você já tem são registradas lá.
3. Reinicie a Steam para ela enxergá-las.
4. Na Steam, clique com o botão direito num jogo, escolha **Propriedades**, depois **Compatibilidade**, ligue a opção de forçar uma ferramenta de compatibilidade e escolha a sua versão.

O Heronite também encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris, então você não precisa baixar duas vezes.

## Atualize e remova versões

Ao lado de uma versão instalada, você pode **Atualizar** quando há um lançamento novo, ou **Remover**. Uma confirmação lembra que os jogos configurados para usá-la voltam ao padrão. Remover uma versão que você não usa libera espaço em disco.

## Problemas comuns

- **A lista está vazia.** Clique no ícone de atualizar. Se aparecer que o limite do GitHub foi atingido, tente de novo depois do horário mostrado.
- **Um download falha.** Verifique sua conexão e clique em **Instalar** de novo.
- **A Steam não mostra a versão.** Confira se **Instalar o Proton no Steam** estava ligado quando você instalou e reinicie a Steam.
- **Um jogo continua travando.** Teste outra fonte, como Proton-CachyOS ou DW-Proton, ou um prefixo novo. O Heronite também sugere correções a partir do log de inicialização, como ligar o VKD3D-Proton em jogos com DirectX 12.
- **"O Vulkan não conseguiu iniciar."** Muitas vezes falta o driver Vulkan de 32 bits. Instale o do seu vídeo, como `lib32-vulkan-radeon` ou `mesa-vulkan-drivers:i386`.
- **Um jogo com anti-cheat não roda.** Nenhuma versão do Proton muda isso se a desenvolvedora não libera o Linux. Veja o [Are We Anti-Cheat Yet?](https://areweanticheatyet.com).

Há mais soluções em [Solução de problemas](/pt-br/docs/troubleshooting/).

## O que ler em seguida

- [Wine e Proton no Heronite](/pt-br/features/wine-and-proton/), com todas as opções por jogo.
- [Epic Games no Linux](/pt-br/guides/epic-games-on-linux/) e [Heronite no Steam Deck](/pt-br/guides/steam-deck/).
- [Wine e Proton](/pt-br/docs/wine-and-proton/) na documentação, com prefixos e o sandbox.
- [Variáveis de ambiente](/pt-br/docs/environment-variables/), para configurações avançadas.
