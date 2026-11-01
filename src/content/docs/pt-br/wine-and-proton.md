---
title: "Jogar jogos do Windows no Linux com Wine e Proton"
navLabel: "Wine e Proton"
description: "Rode jogos do Windows no Linux com o Heronite: Gerenciador do Wine, versões do Proton, prefixos, opções por jogo como DXVK e gamescope, sandbox e anticheat."
section: Guides
order: 3
updated: 2026-11-01
---

No Linux, os jogos do Windows rodam pelo Wine ou pelo Proton. O Heronite escolhe padrões sensatos; toda opção abaixo pode ser mudada por jogo em **Configurações do jogo → Compatibilidade**, ou para todos os jogos em Configurações.

## Gerenciador do Wine

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite (`~/.local/share/heronite/tools/proton` e `tools/wine`), ou para o `compatibilitytools.d` da Steam se você ativar isso, para que a Steam também possa usá-las. O Heronite também encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris.

## Prefixos

Um prefixo é a pasta de "Windows de mentira" em que o jogo roda. Por padrão:

- os jogos são instalados em `~/Games/Heronite`,
- cada jogo recebe o próprio prefixo em `~/Games/Heronite/Prefixes`,
- ou vários jogos podem compartilhar `~/Games/Heronite/Prefixes/shared`.

O Gerenciador do Wine lista seus prefixos, e as configurações de um jogo têm botões para o Winecfg e o Winetricks no prefixo dele.

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

Rode um jogo em que você não confia pelo [bubblewrap](https://github.com/containers/bubblewrap): sem rede e sem acesso à sua pasta pessoal. Libere só uma coisa (como uma pasta ou a rede) quando o jogo precisar. Precisa do `bwrap` instalado.

## Quando um jogo não inicia

O Heronite lê o log de inicialização e sugere uma correção quando reconhece o problema: uma DLL ou o .NET faltando, um jogo com DirectX 12 sem o VKD3D-Proton, um driver Vulkan de 32 bits faltando, um `vm.max_map_count` baixo, outro `wineserver` ainda rodando ou um anticheat sem suporte. Veja [Solução de problemas](/pt-br/docs/troubleshooting/).

## Anticheat

O status do anticheat de um jogo vem do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) e aparece nos detalhes dele. O Heronite pode fornecer os runtimes do EAC e do BattlEye, mas um jogo cuja desenvolvedora não permite o Linux não vai rodar.
