---
title: "Como instalar o Heronite no Linux e no Windows"
navLabel: "Instalação"
description: "Instale o Heronite no Windows 10 e 11 ou no Linux: instalador, zip portátil, AppImage, pacotes .deb, .rpm e Arch, atualizações e remoção."
section: Start
order: 1
updated: 2026-11-04
---

Cada [versão](https://github.com/RafaelGoulartB/Heronite/releases/latest) tem pacotes para Linux e Windows. Todos são de 64 bits (x86_64).

## Instale no Windows

Windows 10 e 11 são compatíveis.

| Arquivo | O que é |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recomendado**) | Instala para o seu usuário em `%LOCALAPPDATA%\Programs\Heronite`. Não precisa de direitos de administrador. |
| `Heronite-Portable-x86_64.zip` | Extraia em qualquer lugar e execute `Heronite\heronite.exe`. Tudo fica nessa pasta. |

Os arquivos do Windows ainda não têm assinatura de código, então o SmartScreen pode exibir um aviso: escolha **Mais informações** e depois **Executar assim mesmo**.

A janela de login da Epic Games, da GOG e da Amazon precisa do Microsoft Edge WebView2 Runtime. O Windows 11 já o tem. No Windows 10, [instale-o pela Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) se a janela pedir.

### Faça uma cópia portátil no Windows

Uma cópia portátil guarda o programa, sua biblioteca, configurações, caches e capturas de tela em uma só pasta. Leve-a para outro PC ou para um pendrive e ela continua funcionando. Ela não grava no registro nem registra links `heronite://`.

O arquivo `portable.txt` ao lado do `heronite.exe` torna uma cópia portátil. Apague esse arquivo para usar as pastas normais do usuário (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Instale no Linux

| Sistema | Arquivo | Instalação |
|---|---|---|
| Qualquer distribuição (**recomendado**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

O Heronite desenha a janela com Vulkan, então instale antes um driver Vulkan que funcione: Mesa para AMD e Intel, o driver proprietário para NVIDIA. Os pacotes instalam o programa como `heronite-rs`.

### Ferramentas opcionais para recursos extras

Cada ferramenta ativa um recurso. O Heronite funciona sem elas.

| Ferramenta | Para quê |
|---|---|
| `bubblewrap` (`bwrap`) | O sandbox para jogos em que você não confia |
| `gamescope` | A opção do gamescope em **Configurações do jogo → Compatibilidade** |
| `umu-launcher` | Rodar jogos pelo umu (o Heronite baixa a própria cópia se este faltar) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (o pacote do sistema ou o app do Flathub) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Backup dos saves depois de cada sessão |
| `python3` | Downloads da GOG (o gogdl, a ferramenta de download da GOG, roda em Python) |
| WebKitGTK 4.1 | A janela de login das lojas. Sem ele, use o login pelo navegador na página de login. |

## Atualize o Heronite

O Heronite consulta o GitHub atrás de uma nova versão pouco depois de iniciar e depois a cada 6 horas. Ele confere todo download com a chave de assinatura das versões (minisign) antes de usá-lo.

- **AppImage:** o Heronite baixa a nova versão ao lado da antiga e a substitui. Ela passa a rodar na próxima inicialização. Deixe o AppImage em uma pasta com permissão de escrita, como `~/Applications`.
- **Pacotes .deb, .rpm e Arch:** o Heronite baixa o pacote assinado e o instala pelo `pkexec`, que pede a sua senha.
- **Instalador do Windows:** o Heronite roda o novo instalador em silêncio quando você fecha o programa.
- **Windows portátil:** o Heronite substitui os arquivos do programa no lugar e guarda os antigos como `.old` até a próxima inicialização.

Em **Configurações → Sobre**, desligue "Verificar atualizações automaticamente" ou ligue "Instalar atualizações automaticamente" (desligado por padrão). A variável de ambiente `HERONITE_NO_UPDATE_CHECK=1` também desliga as verificações.

## Desinstale o Heronite

- **Instalador do Windows:** Configurações → Aplicativos → Aplicativos instalados → Heronite → Desinstalar.
- **Windows portátil:** apague a pasta.
- **Pacotes do Linux:** `sudo apt remove heronite`, `sudo dnf remove heronite` ou `sudo pacman -R heronite`.
- **AppImage:** apague o arquivo.

Desinstalar mantém sua biblioteca, configurações e jogos. Para remover isso também, apague as pastas listadas em [Arquivos e pastas](/pt-br/docs/files-and-folders/). Os jogos instalados pelo Heronite ficam em `~/Games/Heronite` no Linux, a menos que você tenha escolhido outra pasta.

## Compile o Heronite a partir do código-fonte

Veja [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) no README e o [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
