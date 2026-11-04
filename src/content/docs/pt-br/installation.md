---
title: "Como instalar o Heronite no Linux e no Windows"
navLabel: "Instalação"
description: "Como instalar o Heronite no Windows 10 e 11 ou em qualquer distro Linux: instalador, zip portátil, AppImage, pacotes .deb, .rpm e Arch, atualizar, remover."
section: Start
order: 1
updated: 2026-11-04
---

Cada [versão](https://github.com/RafaelGoulartB/Heronite/releases/latest) tem pacotes para Linux e Windows. Todos são de 64 bits (x86_64).

## Instalar no Windows

O Heronite roda no Windows 10 e 11.

| Arquivo | O que é |
|---|---|
| `Heronite-Setup-x86_64.exe` (**recomendado**) | Instala para o seu usuário em `%LOCALAPPDATA%\Programs\Heronite`. Não precisa de direitos de administrador. |
| `Heronite-Portable-x86_64.zip` | Uma cópia portátil: tudo fica em uma pasta só. |

Se o SmartScreen mostrar um aviso sobre o arquivo, escolha **Mais informações** e depois **Executar assim mesmo**. O instalador do Windows ainda não é assinado.

A janela de login da Epic Games, da GOG e da Amazon precisa do Microsoft Edge WebView2 Runtime. O Windows 11 já vem com ele; no Windows 10, [instale pela Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/) se a janela pedir.

### Fazer uma cópia portátil no Windows

1. Baixe o `Heronite-Portable-x86_64.zip`.
2. Extraia em qualquer pasta ou em um pendrive.
3. Abra o `Heronite\heronite.exe`.

A pasta guarda o programa, sua biblioteca, configurações, caches e capturas de tela. Leve para outro PC ou um pendrive e ela continua funcionando. Uma cópia portátil não grava no registro nem registra links `heronite://`.

O arquivo `portable.txt` ao lado do `heronite.exe` é o que torna a cópia portátil. Apague ele para usar as pastas normais do usuário (veja [Arquivos e pastas](/pt-br/docs/files-and-folders/)).

## Instalar no Linux

| Sistema | Arquivo | Instalação |
|---|---|---|
| Qualquer distribuição (**recomendado**) | `Heronite-x86_64.AppImage` | `chmod +x Heronite-x86_64.AppImage && ./Heronite-x86_64.AppImage` |
| Debian 12+, Ubuntu 22.04+, Mint, Pop!_OS | `heronite_<versão>-1_amd64.deb` | `sudo apt install ./heronite_*_amd64.deb` |
| Fedora 36+, openSUSE | `heronite-<versão>-1.x86_64.rpm` | `sudo dnf install ./heronite-*.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS, CachyOS | `heronite-<versão>-1-x86_64.pkg.tar.zst` | `sudo pacman -U heronite-*-x86_64.pkg.tar.zst` |

Antes, instale um driver Vulkan que funcione: Mesa para AMD e Intel, o driver proprietário para NVIDIA. O Heronite usa Vulkan para mostrar a janela. Os pacotes instalam o programa como `heronite-rs`.

### Ferramentas opcionais para recursos extras

Cada ferramenta liga um recurso. O Heronite funciona sem elas.

| Ferramenta | Para quê |
|---|---|
| `bubblewrap` (`bwrap`) | O sandbox para jogos em que você não confia |
| `gamescope` | A opção do gamescope em **Configurações do jogo → Compatibilidade** |
| `umu-launcher` | Rodar jogos pelo umu (o Heronite baixa a própria cópia se ele não estiver instalado) |
| [gpu-screen-recorder](https://git.dec05eba.com/gpu-screen-recorder/about/) | Replay (o pacote do sistema ou o app do Flathub) |
| [Ludusavi](https://github.com/mtkennerly/ludusavi) | Backup dos saves depois de cada sessão |
| `python3` | Downloads da GOG (o gogdl, a ferramenta de download da GOG, roda em Python) |
| WebKitGTK 4.1 | A janela de login das lojas. Sem ele, faça login pelo navegador. |

## Atualizar o Heronite

O Heronite procura uma versão nova no GitHub logo depois de abrir e depois a cada 6 horas. Ele confere cada download com a chave de assinatura das versões (minisign) antes de usar.

- **AppImage:** o Heronite baixa a versão nova ao lado da antiga e troca uma pela outra; ela passa a valer na próxima vez que você abrir o Heronite. Deixe o AppImage em uma pasta com permissão de escrita, como `~/Applications`.
- **Pacotes .deb, .rpm e Arch:** o Heronite baixa o pacote assinado e instala pelo `pkexec`, que pede a sua senha.
- **Instalador do Windows:** o Heronite roda o novo instalador em silêncio quando você fecha o programa.
- **Windows portátil:** o Heronite troca os arquivos do programa no lugar e guarda os antigos como `.old` até você abrir o Heronite de novo.

Em **Configurações → Sobre**, desligue **Verificar atualizações automaticamente** ou ligue **Instalar atualizações automaticamente** (desligado por padrão). A variável de ambiente `HERONITE_NO_UPDATE_CHECK=1` também desliga as verificações.

## Desinstalar o Heronite

- **Instalador do Windows:** abra **Configurações → Aplicativos → Aplicativos instalados → Heronite → Desinstalar** do Windows.
- **Windows portátil:** apague a pasta.
- **Pacotes do Linux:** `sudo apt remove heronite`, `sudo dnf remove heronite` ou `sudo pacman -R heronite`.
- **AppImage:** apague o arquivo.

Desinstalar mantém sua biblioteca, configurações e jogos. Para remover isso também, apague as pastas listadas em [Arquivos e pastas](/pt-br/docs/files-and-folders/). Os jogos instalados pelo Heronite ficam em `~/Games/Heronite` no Linux, a não ser que você tenha escolhido outra pasta.

## Compilar o Heronite do código-fonte

Você precisa do Rust stable. No Linux, também de `clang`, `lld`, um driver Vulkan e GTK/WebKitGTK. No Windows, das Visual Studio Build Tools ("Desktop development with C++").

```bash
# quick build (the login window is its own binary, so build it too)
cargo build --profile quick -p heronite-epic-login && cargo run --profile quick -p heronite
```

Para builds de release e o instalador do Windows, veja [Run from source](https://github.com/RafaelGoulartB/Heronite#run-from-source) no README e o [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md).
