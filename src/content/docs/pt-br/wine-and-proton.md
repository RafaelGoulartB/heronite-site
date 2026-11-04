---
title: "Wine e Proton no Linux: rode jogos do Windows"
navLabel: "Wine e Proton"
description: "Rode jogos do Windows no Linux com Wine e Proton no Heronite: Gerenciador do Wine, prefixos, opções por jogo como DXVK e gamescope, sandbox e anticheat."
section: Guides
order: 3
updated: 2026-11-04
---

O Heronite roda jogos do Windows no Linux pelo Wine ou pelo Proton. Mude qualquer opção abaixo por jogo em **Configurações do jogo → Compatibilidade**, ou para todos os jogos em Configurações.

## Baixe versões do Proton no Gerenciador do Wine

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite (`~/.local/share/heronite/tools/proton` e `tools/wine`), ou para o `compatibilitytools.d` da Steam se você ativar isso, para que a Steam também possa usá-las. O Heronite encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris.

## Onde ficam os jogos e os prefixos do Wine

Um prefixo é a pasta de "Windows de mentira" em que o jogo roda. Por padrão:

- os jogos são instalados em `~/Games/Heronite`,
- cada jogo recebe o próprio prefixo em `~/Games/Heronite/Prefixes`,
- ou vários jogos podem compartilhar `~/Games/Heronite/Prefixes/shared`.

O Gerenciador do Wine lista seus prefixos. **Configurações do jogo → Compatibilidade** tem botões do Winecfg e do Winetricks para o prefixo do jogo.

## Opções por jogo

- Versão do Wine ou do Proton e prefixo
- DXVK, VKD3D-Proton e DXVK-NVAPI
- Esync e Fsync
- gamescope (precisa do `gamescope` instalado)
- Limite de FPS
- Escolha da GPU em PCs com mais de uma
- Upgrades de DLSS, FSR e XeSS
- Winetricks
- umu e seus protonfixes (correções de jogos do banco de dados do umu)
- Geração de quadros do Lossless Scaling pelo [lsfg-vk](https://github.com/PancakeTAS/lsfg-vk) (precisa do Lossless Scaling da Steam; funciona com jogos Vulkan, DXVK e VKD3D, não com OpenGL)
- Wayland em vez de X11 (precisa de uma versão do Wine com suporte a Wayland)
- Scripts para rodar antes e depois do jogo, e programas para rodar junto com ele (como trainers)
- Presets de inicialização para reutilizar em outros jogos

## Sandbox

Rode um jogo em que você não confia pelo [bubblewrap](https://github.com/containers/bubblewrap): sem rede e sem acesso à sua pasta pessoal. Libere uma pasta ou a rede quando o jogo precisar. Precisa do `bwrap` instalado.

## Um jogo do Windows não inicia

O Heronite lê o log de inicialização e sugere uma correção quando reconhece o problema. Veja as [causas e correções em Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux).

## Anticheat

O Heronite mostra nos detalhes de cada jogo o status do anticheat, do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). O Heronite pode fornecer os runtimes do EAC e do BattlEye, mas um jogo cuja desenvolvedora não permite o Linux não vai rodar.
