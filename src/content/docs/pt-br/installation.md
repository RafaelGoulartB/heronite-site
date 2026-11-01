---
title: "Como instalar o Heronite no Linux e no Windows"
navLabel: "Instalação"
description: "Instale o Heronite no Windows 10 e 11 ou em qualquer distribuição Linux: instalador, zip portátil, AppImage, pacotes .deb, .rpm e Arch, atualizações e remoção."
section: Start
order: 1
updated: 2026-11-01
---

Cada [versão](https://github.com/RafaelGoulartB/Heronite/releases/latest) tem pacotes para Linux e Windows. Todos são de 64 bits (x86_64).

## Windows

Windows 10 e 11 são compatíveis.

| Arquivo | O que é |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recomendado**) | Instala para o seu usuário em `%LOCALAPPDATA%\Programs\Heronite`. Não precisa de direitos de administrador. |
| `Heronite-Portable-x86_64.zip` | Extraia em qualquer lugar e execute `Heronite\heronite.exe`. A biblioteca, as configurações e as capturas de tela ficam nessa pasta. |

Os arquivos do Windows ainda não têm assinatura de código, então o SmartScreen pode exibir um aviso: escolha **Mais informações** e depois **Executar assim mesmo**.

O login na Epic Games, na GOG ou na Amazon usa o Microsoft Edge WebView2 Runtime. O Windows 11 já o tem; no Windows 10, [instale-o pela Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) se a janela de login pedir.

### Cópia portátil

Uma cópia portátil é uma pasta que guarda tudo: o programa, sua Coleção, configurações, caches e capturas de tela. Leve-a para outro PC ou para um pendrive e ela continua funcionando. Ela não grava no registro e não registra links `heronite://`.

O que torna uma cópia portátil é o arquivo `portable.txt` ao lado do `heronite.exe`. Apague esse arquivo e a cópia passa a usar as pastas normais do usuário (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Linux

| Sistema | Arquivo | Instalação |
|---|---|---|
| Qualquer distribuição (**recomendado**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<version>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<version>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<version>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

O Heronite desenha sua janela com Vulkan, então você precisa de um driver Vulkan funcionando (Mesa para AMD e Intel, o driver proprietário para NVIDIA). Os pacotes instalam o programa como `heronite-rs`.

### Ferramentas opcionais

O Heronite funciona sem elas. Cada uma ativa um recurso:

| Ferramenta | Para quê |
|---|---|
| `bubblewrap` (`bwrap`) | O sandbox para jogos em que você não confia |
| `gamescope` | A opção do gamescope nas configurações de um jogo |
| `umu-launcher` | Rodar jogos pelo umu (o Heronite baixa a própria cópia se este faltar) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (o pacote do sistema ou o app do Flathub) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Backup dos saves depois de cada sessão |
| `python3` | Downloads da GOG (a ferramenta gogdl roda em Python) |
| WebKitGTK 4.1 | A janela de login das lojas. Sem ele, use o login pelo navegador na página de login. |

## Atualizações

O Heronite consulta o GitHub atrás de uma nova versão pouco depois de iniciar e depois a cada 6 horas. Todo download é conferido com a chave de assinatura das versões (minisign) antes de ser usado.

- **AppImage:** a nova versão é baixada ao lado da antiga e a substitui. Ela passa a rodar na próxima inicialização. Deixe o AppImage em uma pasta com permissão de escrita, como `~/Applications`.
- **Pacotes .deb, .rpm e Arch:** o Heronite baixa o pacote assinado e o instala pelo `pkexec`, então pede a sua senha. Isso nunca acontece sozinho.
- **Instalador do Windows:** o novo instalador roda em silêncio quando você fecha o Heronite.
- **Windows portátil:** os arquivos do programa são substituídos no lugar; os antigos ficam como `.old` até a próxima inicialização.

Em **Configurações → Sobre**, você pode desligar "Verificar atualizações automaticamente" ou ligar "Instalar atualizações automaticamente" (desligado por padrão). Definir a variável de ambiente `HERONITE_NO_UPDATE_CHECK=1` também desliga as verificações.

## Como remover o Heronite

- **Instalador do Windows:** Configurações → Aplicativos → Aplicativos instalados → Heronite → Desinstalar.
- **Windows portátil:** apague a pasta.
- **Pacotes do Linux:** `sudo apt remove heronite`, `sudo dnf remove heronite` ou `sudo pacman -R heronite`.
- **AppImage:** apague o arquivo.

Remover o programa mantém sua Coleção, configurações e jogos. Para remover isso também, apague as pastas listadas em [Arquivos e pastas](/pt-br/docs/files-and-folders/). Os jogos instalados pelo Heronite ficam em `~/Games/Heronite` no Linux, a menos que você tenha escolhido outra pasta.

## Compilar a partir do código-fonte

Veja [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) no README e o [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
