---
title: "Solução de problemas do Heronite: app, login e jogos"
navLabel: "Solução de problemas"
description: "Resolva o Heronite que não abre, falhas de login nas lojas, erros de atualização e jogos que travam no Linux, e veja onde ficam os logs."
section: Start
order: 4
updated: 2026-11-04
---

## O Heronite não abre ou mostra uma janela preta

### "O Windows protegeu o computador"

Os arquivos do Windows ainda não têm assinatura de código. Escolha **Mais informações** e depois **Executar assim mesmo**.

### A janela não abre ou fica preta (Linux)

Instale o driver Vulkan da sua GPU (`vulkan-radeon` ou `vulkan-intel` do Mesa, ou o driver da NVIDIA) e confira se o `vulkaninfo` lista a sua GPU. O Heronite desenha com Vulkan.

### "O Heronite já está em execução, mas não está respondendo"

Feche o Heronite travado pelo gerenciador de tarefas ou com `pkill heronite-rs` e abra de novo.

## O Heronite não atualiza

### O AppImage não atualiza

Mova o AppImage para `~/Applications` ou outra pasta dentro da sua pasta pessoal. Ele se substitui sozinho, então a pasta dele precisa ter permissão de escrita.

### "Limite de requisições do GitHub atingido"

Tente de novo mais tarde. Sua rede fez muitas verificações de atualização.

## O login ou o download de uma loja falha

### A janela de login não abre

Use o **login pelo navegador** na página de login: entre no seu navegador e cole o endereço ou o código.

- Linux: instale o WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`).
- Windows: [instale o Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/).

### Os downloads da GOG falham no Linux

Instale o `python3`. O gogdl, a ferramenta de download da GOG, precisa dele.

## Um jogo não inicia (Linux)

O Heronite lê o log de inicialização do jogo e mostra o que deu errado, com uma correção quando conhece uma. Casos comuns:

| Problema | Solução |
|---|---|
| Falta uma DLL ou o .NET | Instale com o Winetricks (o Heronite sugere qual) |
| Jogo com DirectX 12 | Em **Configurações do jogo → Compatibilidade**, ligue o VKD3D-Proton |
| O Direct3D falhou | Em **Configurações do jogo → Compatibilidade**, ligue o DXVK |
| "O Vulkan não conseguiu iniciar" | Instale o driver Vulkan de 32 bits, que muitas vezes falta (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| Arquivos abertos demais | Em **Configurações do jogo → Compatibilidade**, use Fsync em vez de Esync |
| Falha ao iniciar em alguns jogos mais novos | Aumente o `vm.max_map_count` (muitas distribuições já fazem isso) |
| Outro `wineserver` está rodando | Feche o outro jogo ou execute `wineserver -k` nesse prefixo |
| Anticheat | Confira o status do jogo no [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) |

Se o jogo continuar com problemas:

- escolha outra versão do Proton em **Configurações do jogo → Compatibilidade** (GE-Proton ou Proton-CachyOS costumam ter correções primeiro),
- use um prefixo novo,
- leia a página do jogo no [ProtonDB](https://www.protondb.com), onde os jogadores compartilham o que funcionou.

## O overlay dentro do jogo não funciona (Linux)

Se o botão Guide abrir a Steam, desligue "Guide Button Focuses Steam" nas configurações de controle da Steam. Se não, confira sua sessão: o overlay precisa de Wayland com um compositor que tenha suporte a layer-shell (KDE Plasma, Hyprland, Sway e outros). Ele não funciona no GNOME nem no X11.

## Onde ficam os logs

Leia-os em **Configurações → Logs**, ou encontre-os na pasta de dados (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)):

| Log | Onde |
|---|---|
| O próprio Heronite | `logs/launcher/heronite-rs-<date>.log` (um por dia, os últimos 7 são mantidos) |
| Um jogo | `logs/games/<game>_<store>/launch.log` (também `install.log` e outros) |
| Uma ferramenta de loja | `logs/runners/<tool>.log` |

Para mais detalhes:

- abra o Heronite com `RUST_LOG=debug`,
- ligue **Logs detalhados** nas configurações de um jogo (Avançado). No Linux, isso também liga mais saída do Wine.

Se os logs estiverem desligados em Configurações, ligue-os de novo antes de relatar um problema.

## Relate um bug

[Abra uma issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) com:

- seu sistema (distribuição ou versão do Windows, ambiente de desktop, GPU e driver),
- como você instalou o Heronite (AppImage, pacote, instalador, portátil) e a versão dele (Configurações → Sobre),
- o que você fez, o que aconteceu e o que esperava,
- os logs acima.
