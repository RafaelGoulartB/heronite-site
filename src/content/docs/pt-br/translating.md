---
title: "Traduzir o Heronite: corrija ou adicione um idioma"
navLabel: "Tradução"
description: "Traduzir o Heronite: como funcionam os arquivos de idioma JSON, como corrigir uma tradução, conferir seu trabalho e adicionar um idioma por pull request."
section: Contribute
order: 1
updated: 2026-11-04
---

O Heronite está em inglês, português (Brasil), espanhol e alemão. Correções e novos idiomas são bem-vindos: você só edita arquivos JSON.

## Como funcionam os arquivos de idioma?

O texto em inglês no código é a chave. Cada idioma tem uma pasta com arquivos JSON, um para cada parte do app:

```
crates/i18n/locales/
├── pt-BR/
│   ├── common.json
│   ├── settings_panel.json
│   └── …
├── es/
└── de/
```

Cada arquivo é um objeto simples que liga o texto em inglês à tradução:

```json
{
  "Add a game": "Adicionar um jogo",
  "verb|Play": "Jogar",
  "{n} games": "{n} jogos"
}
```

- Um `context|` na frente de uma chave diferencia a mesma palavra em inglês usada de maneiras diferentes (como "Play", o verbo). Traduza só a parte depois do `|`.
- Marcadores como `{n}` devem ficar iguais na tradução.
- Os plurais têm uma chave separada para o singular e para o plural.

## Corrija uma tradução

Edite o arquivo JSON e abra um pull request. Não precisa de código.

## Confira sua tradução

```bash
HERONITE_I18N_MISSING=1 cargo test -p heronite-i18n --test coverage -- --nocapture
```

Isso lista as chaves que faltam ou sobram e os marcadores que não combinam.

Para ver seu idioma no app, escolha-o em **Configurações → Geral → Idioma**.

## Adicione um novo idioma

Copie uma das pastas para uma nova, com o nome do código do idioma (como `fr` ou `it`), e traduza os arquivos dela. Um novo idioma também precisa de algumas linhas de código em `crates/i18n/src/lib.rs` (o nome e o código dele). Se você não se sente à vontade com Rust, abra o pull request com a tradução e peça ajuda por lá.

Veja o [CONTRIBUTING.md](https://github.com/RafaelGoulartB/Heronite/blob/main/CONTRIBUTING.md) para compilar o Heronite.
