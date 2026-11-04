---
title: "Solução de problemas do Heronite: app, login e jogos"
navLabel: "Solução de problemas"
description: "Heronite não abre, login da Epic ou da GOG falha, erro de Vulkan, jogo não abre no Linux: veja como resolver, onde ficam os logs e como reportar um bug."
section: Start
order: 4
updated: 2026-11-04
---

## "O Windows protegeu o computador" ao abrir o Heronite

Escolha **Mais informações** e depois **Executar assim mesmo**. O instalador do Heronite para Windows ainda não tem assinatura digital.

## O Heronite não abre ou mostra uma janela preta

No Linux, instale o driver Vulkan da sua GPU e confira se o `vulkaninfo` lista a GPU. O Heronite usa Vulkan para mostrar a tela. Para AMD ou Intel, instale `vulkan-radeon` ou `vulkan-intel` no Arch, ou `mesa-vulkan-drivers` no Debian e no Ubuntu. Para NVIDIA, instale o driver da própria NVIDIA.

### "O Heronite já está em execução, mas não está respondendo"

Feche o Heronite travado pelo gerenciador de tarefas ou com `pkill heronite-rs` e abra de novo.

## O Heronite não atualiza

### O AppImage não atualiza

Mova o AppImage para `~/Applications` ou outra pasta dentro da sua pasta pessoal. Ele se substitui sozinho, então a pasta dele precisa ter permissão de escrita.

### "Limite de requisições do GitHub atingido"

Procure atualizações de novo mais tarde. Sua rede fez requisições demais ao GitHub.

## O login ou o download de uma loja falha

### A janela de login não abre

Use **Ou entre pelo navegador** na mesma página e cole o código que o navegador mostrar.

Para consertar a própria janela de login, instale:

- Linux: WebKitGTK 4.1 (`libwebkit2gtk-4.1` ou `webkit2gtk-4.1`)
- Windows: o [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

### Os downloads da GOG falham no Linux

Instale o `python3`. O gogdl, a ferramenta de download da GOG, precisa dele.

## Um jogo não abre (Linux)

Quando um jogo fecha sozinho nos primeiros 30 segundos e o Heronite conhece a causa, a janela **Problema ao abrir** aparece. O primeiro botão dela aplica a correção e abre o jogo de novo. Para qualquer outro travamento, clique com o botão direito no jogo e escolha **Solucionar problemas**.

| O Heronite diz | Correção |
|---|---|
| "Falta o Visual C++ 2015-2022" (ou outro runtime) | Clique em **Instalar … e jogar**: o Heronite instala com o Winetricks, só no prefixo deste jogo |
| "Falta o .NET Framework" | Clique em **Instalar .NET Framework 4.8 e jogar** (leva alguns minutos) |
| "O DirectX 12 precisa do VKD3D-Proton" | Clique em **Ligar o VKD3D-Proton e jogar**, ou ligue o VKD3D-Proton em **Configurações do jogo → Compatibilidade** |
| "O Direct3D falhou sem o DXVK" | Clique em **Ligar o DXVK e jogar**, ou ligue o DXVK em **Configurações do jogo → Compatibilidade** |
| "O Vulkan não conseguiu iniciar" | Clique em **Copiar o comando** e rode no terminal. O comando instala o driver Vulkan, que muitas vezes está sem a parte de 32 bits (`lib32-vulkan-radeon`, `mesa-vulkan-drivers:i386`, …) |
| "O Wine ficou sem arquivos abertos" | Clique em **Usar fsync e jogar**, ou escolha Fsync em vez de Esync em **Configurações do jogo → Compatibilidade** |
| "O limite de mapas de memória está baixo" | Clique em **Aumentar e jogar** e digite a senha de administrador ([detalhes](#o-limite-de-mapas-de-memória-está-baixo-vmmax_map_count)) |
| "Outro Wine ainda está rodando no prefixo" | Clique em **Encerrar e jogar**, ou feche o outro jogo |
| "O Easy Anti-Cheat precisa do seu runtime" | Clique em **Ligar o runtime de anti-cheat e jogar** |
| "O Easy Anti-Cheat bloqueia jogadores no Linux" | Nenhuma: o desenvolvedor não permite Linux (o [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) lista o jogo como negado) |

### O limite de mapas de memória está baixo (vm.max_map_count)

Muitos jogos, e o Easy Anti-Cheat, precisam do `vm.max_map_count` em 1048576, o valor do SteamOS, Fedora, Ubuntu e Arch. **Aumentar e jogar** muda o valor na hora e mantém depois de reiniciar. Para mudar você mesmo:

```bash
echo 'vm.max_map_count = 1048576' | sudo tee /etc/sysctl.d/80-heronite-max-map-count.conf
sudo sysctl -w vm.max_map_count=1048576
```

### O jogo continua travando

- Escolha outra **Versão** em **Wine / Proton**, em **Configurações do jogo → Compatibilidade**. GE-Proton ou Proton-CachyOS costumam ter correções primeiro.
- Dê ao jogo um prefixo Wine novo (uma pasta que funciona como um Windows só daquele jogo). Em **Configurações do jogo → Compatibilidade**, escolha **Novo prefixo para este jogo** no menu **Prefixo**. O prefixo novo começa vazio, então faça backup dos seus saves antes.
- Leia a página do jogo no [ProtonDB](https://www.protondb.com), onde os jogadores contam o que funcionou.

## O overlay dentro do jogo não funciona (Linux)

- O botão Guide abre a Steam: desligue **Guide Button Focuses Steam** em **Steam → Configurações → Controle**.
- O overlay nunca aparece: marque **Ligar o overlay** em **Configurações → Overlay** (ele vem desligado). Ele precisa de Wayland com layer-shell (KDE Plasma, Hyprland, Sway), então não funciona no GNOME nem no X11.

## Onde ficam os logs

Leia em **Configurações → Logs** ou abra `logs/` na [pasta de dados](/pt-br/docs/files-and-folders/):

| Log | Onde |
|---|---|
| O próprio Heronite | `logs/launcher/heronite-rs-<data>.log` (um por dia, os últimos 7 ficam guardados) |
| Um jogo | `logs/games/<jogo>_<loja>/launch.log` (também `install.log` e outros) |
| Uma ferramenta de loja | `logs/runners/<ferramenta>.log` |

Para mais detalhes:

- Abra o Heronite com `RUST_LOG=debug`
- Ligue **Logs detalhados** em **Configurações do jogo → Avançado** (no Linux, isso também adiciona a saída do Wine)

Em **Configurações → Avançado**, deixe **Desligar logs** desmarcado antes de reportar um bug.

## Reportar um bug

[Abra uma issue](https://github.com/RafaelGoulartB/Heronite/issues/new/choose) com:

- Seu sistema: distribuição ou versão do Windows, ambiente de desktop, GPU e driver
- Como você instalou o Heronite (AppImage, pacote, instalador, portátil) e a versão dele, em **Configurações → Sobre**
- O que você fez, o que aconteceu e o que esperava
- Os logs acima
