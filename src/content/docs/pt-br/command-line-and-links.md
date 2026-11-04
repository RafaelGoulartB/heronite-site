---
title: "Linha de comando e links heronite:// do Heronite"
navLabel: "Linha de comando e links"
description: "Abra o Heronite por scripts: opções de linha de comando como --launch, --console e --no-gui, ids de jogos de cada loja e links heronite://."
section: Reference
order: 2
updated: 2026-11-04
---

Abra o Heronite por scripts com opções como `--launch`. O programa se chama `heronite-rs` no Linux e no instalador do Windows (`heronite-rs.exe`), e `heronite.exe` na cópia portátil do Windows.

## Opções de linha de comando

| Opção | O que faz |
|---|---|
| `--launch <jogo>` | Abre um jogo (veja abaixo) |
| `--no-gui` | Com `--launch`: sem janela; o Heronite fecha quando o jogo termina |
| `--console` | Abre no [modo console](/pt-br/docs/console-mode/) |
| `--fullscreen` | Abre em tela cheia (<kbd>F11</kbd> volta ao normal) |
| `--autostart` | Usada por **Iniciar com o sistema** em **Configurações → Geral**; só com ela vale **Iniciar minimizado** |
| `-h`, `--help` | Mostra as opções |

Só um Heronite roda por vez: se você abrir de novo, o pedido (como o `--launch`) vai para o que já está aberto.

## Abrir um jogo pela linha de comando

O `--launch` recebe o id do jogo na loja, não o nome, e aceita a ferramenta da loja na frente:

```bash
heronite-rs --launch gog_1207658930      # GOG game 1207658930
heronite-rs --launch gog 1207658930      # the same
heronite-rs --launch 1207658930          # searches every store
heronite-rs --launch legendary_Fortnite --no-gui
```

| Prefixo | Loja |
|---|---|
| `legendary` | Epic Games |
| `gog` | GOG |
| `nile` | Amazon Games |
| `sideload` | Jogos que você mesmo adicionou |

Os atalhos que o Heronite cria (área de trabalho, menu Iniciar, Steam) já têm o comando certo, então isso serve mais para scripts.

## Abrir um jogo com um link `heronite://`

```
heronite://launch/<jogo>
heronite://launch/<loja>/<jogo>
heronite://launch?appName=<jogo>&runner=<loja>
```

A forma com parâmetros também aceita:

- `arg=<valor>`: um argumento para o jogo (repita para passar mais de um)
- `gui=false`: abre sem mostrar a janela do Heronite

Escreva espaços nos nomes como `%20` (`My%20Game`). Para esconder a janela em todos os links, ligue **Ocultar a janela em inicializações por heronite://**. O esquema antigo `heronite-rs://` continua funcionando.

### Onde os links heronite:// funcionam

- **Instalador do Windows:** registrados para o seu usuário sempre que o Heronite abre
- **Windows portátil:** não são registrados, então a cópia não deixa rastro no PC
- **Linux:** registrados pelo `scripts/install.sh` quando você compila do código-fonte
