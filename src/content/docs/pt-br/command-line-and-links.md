---
title: "Linha de comando e links heronite:// do Heronite"
navLabel: "Linha de comando e links"
description: "Abra o Heronite por scripts: opções de linha de comando como --launch, --console e --no-gui, ids de jogos de cada loja e links heronite://."
section: Reference
order: 2
updated: 2026-11-01
---

O programa se chama `heronite-rs` no Linux e no instalador do Windows (`heronite-rs.exe`), e `heronite.exe` na cópia portátil do Windows.

## Opções

| Opção | O que faz |
|---|---|
| `--launch <game>` | Inicia um jogo (veja abaixo) |
| `--no-gui` | Com `--launch`: sem janela; o Heronite fecha quando o jogo termina |
| `--console` | Abre no [Modo console](/pt-br/docs/console-mode/) |
| `--fullscreen` | Abre em tela cheia (<kbd>F11</kbd> volta ao normal) |
| `--autostart` | Usada por "Iniciar com o sistema"; só com ela vale "Iniciar minimizado" |
| `-h`, `--help` | Mostra as opções |

Só um Heronite roda por vez: ao abri-lo de novo, o pedido (como o `--launch`) é passado para o que já está aberto.

## Como iniciar um jogo

O `--launch` recebe o id do jogo na loja, não o nome dele, opcionalmente com a ferramenta da loja na frente:

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

Os atalhos que o Heronite cria (área de trabalho, menu Iniciar, Steam) já têm o comando certo, então isto serve mais para scripts.

## Links `heronite://`

```
heronite://launch/<game>
heronite://launch/<store>/<game>
heronite://launch?appName=<game>&runner=<store>
```

A forma com parâmetros também aceita:

- `arg=<value>`: um argumento para o jogo (repita para passar mais de um),
- `gui=false`: inicia sem mostrar a janela do Heronite.

Nomes com espaços são escritos com `%20` (`My%20Game`). A opção "Ocultar a janela em inicializações por heronite://" esconde a janela em todos os links.

**Onde os links funcionam:**

- **Instalador do Windows:** registrados para o seu usuário a cada inicialização.
- **Windows portátil:** não são registrados, para que a cópia não deixe rastros no PC.
- **Linux:** registrados pelo `scripts/install.sh` quando o Heronite é compilado do código-fonte.

O esquema antigo `heronite-rs://` continua funcionando.
