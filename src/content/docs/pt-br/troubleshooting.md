---
title: "Solução de problemas do Heronite e dos seus jogos"
navLabel: "Solução de problemas"
description: "Resolva problemas do Heronite e de jogos no Linux: onde ficam os logs, como relatar um bug, falhas de login nas lojas e erros comuns do Wine e do Proton."
section: Start
order: 4
updated: 2026-11-01
---

## Logs

Abra **Configurações → Logs** para lê-los no Heronite, ou encontre-os na pasta de dados (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)):

| Log | Onde |
|---|---|
| O próprio Heronite | `logs/launcher/heronite-rs-<date>.log` (um por dia, os últimos 7 são mantidos) |
| Um jogo | `logs/games/<game>_<store>/launch.log` (também `install.log` e outros) |
| Uma ferramenta de loja | `logs/runners/<tool>.log` |

Para mais detalhes:

- abra o Heronite com `RUST_LOG=debug`,
- ligue **Logs detalhados** nas configurações de um jogo (Avançado). No Linux, isso também liga mais saída do Wine.

Se os logs estiverem desligados em Configurações, ligue-os de novo antes de relatar um problema.

## Como relatar um bug

[Abra uma issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) com:

- seu sistema (distribuição ou versão do Windows, ambiente de desktop, GPU e driver),
- como você instalou o Heronite (AppImage, pacote, instalador, portátil) e a versão dele (Configurações → Sobre),
- o que você fez, o que aconteceu e o que esperava,
- os logs acima.

## O app

**O Windows avisa "O Windows protegeu o computador".** Os arquivos ainda não têm assinatura de código. Escolha **Mais informações** e depois **Executar assim mesmo**.

**Linux: a janela não abre ou fica preta.** O Heronite desenha com Vulkan. Confira se o `vulkaninfo` funciona e lista a sua GPU, e se o driver Vulkan dela está instalado (`vulkan-radeon` ou `vulkan-intel` do Mesa, ou o driver da NVIDIA).

**"O Heronite já está em execução, mas não está respondendo".** Um Heronite antigo travou. Feche-o pelo gerenciador de tarefas (ou com `pkill heronite-rs`) e abra de novo.

**O AppImage não atualiza.** Ele se substitui sozinho, então a pasta dele precisa ter permissão de escrita. Mova-o para `~/Applications` ou outra pasta dentro da sua pasta pessoal.

**"Limite de requisições do GitHub atingido".** Muitas verificações de atualização vindas da sua rede. Tente de novo mais tarde.

## Logins das lojas

**A janela de login não abre.** Use o **login pelo navegador** na mesma página: entre no seu navegador e cole o endereço ou o código.

- Linux: a janela de login precisa do WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`).
- Windows: ela precisa do Microsoft Edge WebView2 Runtime. [Instale-o pela Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/).

**Os downloads da GOG falham no Linux.** O gogdl precisa do `python3`.

## Jogos (Linux)

Quando um jogo não inicia, o Heronite lê o log de inicialização dele e mostra o que deu errado, com uma correção quando conhece uma. Casos comuns:

| Problema | Solução |
|---|---|
| Falta uma DLL ou o .NET | Instale com o Winetricks (o Heronite sugere qual) |
| Jogo com DirectX 12 | Ligue o VKD3D-Proton |
| O Direct3D falhou | Ligue o DXVK |
| "O Vulkan não conseguiu iniciar" | Muitas vezes falta o driver Vulkan de 32 bits (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Arquivos abertos demais | Use Fsync em vez de Esync |
| Falha ao iniciar em alguns jogos mais novos | Aumente o `vm.max_map_count` (muitas distribuições já fazem isso) |
| Outro `wineserver` está rodando | Feche o outro jogo ou execute `wineserver -k` nesse prefixo |
| Anticheat | Confira o status do jogo no [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

O que vale tentar em um jogo que se comporta mal:

- outra versão do Proton (Proton-GE ou Proton-CachyOS costumam ter correções primeiro),
- um prefixo novo,
- a página do jogo no [ProtonDB](https://www.protondb.com), onde os jogadores compartilham o que funcionou.

## O overlay dentro do jogo (Linux)

Ele precisa de uma sessão Wayland cujo compositor tenha suporte a layer-shell (KDE Plasma, Hyprland, Sway e outros). Ele não funciona no GNOME nem no X11. Se o botão Guide abrir a Steam, desligue "Guide Button Focuses Steam" nas configurações de controle da Steam.
