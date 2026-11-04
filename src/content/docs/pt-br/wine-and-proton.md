---
title: "Wine e Proton no Linux: rode jogos do Windows"
navLabel: "Wine e Proton"
description: "Wine e Proton no Linux com o Heronite para rodar jogos do Windows: Gerenciador do Wine, versões do Proton, prefixos, DXVK, gamescope, sandbox e anti-cheat."
section: Guides
order: 3
updated: 2026-11-04
---

O Heronite roda jogos do Windows no Linux pelo Wine ou pelo Proton. Mude qualquer opção abaixo por jogo em **Configurações do jogo → Compatibilidade**, ou para todos os jogos em Configurações. Quando um jogo não abre, o Heronite sugere uma correção: veja [Solução de problemas](/pt-br/docs/troubleshooting/#um-jogo-não-inicia-linux).

## Baixar versões do Proton no Gerenciador do Wine

O Gerenciador do Wine (<kbd>Ctrl</kbd> <kbd>3</kbd>) baixa e atualiza estas versões:

- Proton-CachyOS
- GE-Proton
- DW-Proton
- UMU-Proton
- Proton-EM
- Proton-Sarek

As versões vão para a pasta de dados do Heronite (`~/.local/share/heronite/tools/proton` e `tools/wine`), ou para o `compatibilitytools.d` da Steam se você ligar essa opção, para a Steam também poder usar. O Heronite encontra as versões do Proton que já estão nas suas bibliotecas da Steam e os runners do Wine do Lutris.

## Onde ficam os jogos e os prefixos Wine

Um prefixo Wine é uma pasta que funciona como um Windows só daquele jogo, com as configurações, os saves e o que o Winetricks instala. Por padrão:

- Os jogos são instalados em `~/Games/Heronite`
- Cada jogo ganha o próprio prefixo em `~/Games/Heronite/Prefixes`
- Vários jogos podem dividir `~/Games/Heronite/Prefixes/shared`, mas aí um pode quebrar as dependências do outro

O Gerenciador do Wine lista seus prefixos. Em **Configurações do jogo → Compatibilidade**, o menu **Prefixo** escolhe o prefixo do jogo ou cria um **Novo prefixo para este jogo**. Os botões **Winecfg** e **Winetricks** ali funcionam nesse prefixo.

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

Para rodar um jogo em que você não confia, ligue **Rodar em um sandbox** em **Configurações do jogo → Sandbox**. O jogo passa a rodar pelo [bubblewrap](https://github.com/containers/bubblewrap) (`bwrap`, do pacote `bubblewrap`), sem rede e sem acesso à sua pasta pessoal. Libere a rede ou uma pasta em **Exceções** quando o jogo precisar.

## Anti-cheat

O Heronite mostra nos detalhes de cada jogo o status do anti-cheat, vindo do [Are We Anti-Cheat Yet?](https://areweanticheatyet.com). Se o jogo funciona no Linux, ligue **BattlEye** ou **Easy Anti-Cheat** em **Runtimes de anti-cheat**, em **Configurações do jogo → Compatibilidade**; o Heronite baixa o runtime antes de você abrir o jogo de novo. Um jogo cujo desenvolvedor não permite Linux não abre, com nenhuma configuração.
