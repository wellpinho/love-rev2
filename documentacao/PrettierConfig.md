# Prettier
## Prettier é um formatador de código opinativo e, em conjunto com o ESLint, forma uma parceria perfeita para nós, desenvolvedores.

## __Instalação e Configuração do Prettier__
- Prettier é um formatador de código opinativo e, em conjunto com o ESLint, forma uma parceria perfeita para nós, desenvolvedores:

- ESLint define as convenções de código.
- Prettier realiza a formatação automática com base nas regras ESLint.
- Instalação:
``` yarn add prettier -D ```

- Criar o arquivo .prettierrc com uma configuração básica do Prettier:
```
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

- Os parâmetros são:

__semi__: definido como true, significa que o Prettier adicionará ponto-e-vírgulas quando necessário.

__trailingComma__: definido como all, significa que o Prettier colocará vírgulas no final dos objetos.

__singleQuote__: definido como true, significa que o Prettier usará automaticamente aspas simples em vez de aspas duplas.

__printWidth__: definido como 80, especifica que a impressora quebrará todas as linhas que excederem 80 caracteres.

- É fundamental que extensão __Prettier – Code Formatter__ esteja instalada no VSCode, pois permitirá a formatação automática do código ao salvar o arquivo.

- Verifique se a sua configuração do VS Code possui os parâmetro:
```
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"formattingToggle.affects": ["formatOnSave"]
```

- Essas configurações formatarão seu código quando você colar o novo código e quando você salvar o código de qualquer extensão de arquivo que o Prettier entende.

- Configurando o Prettier para trabalhar com ESLint
- Com ESLint e Prettier já instalados, instale esses dois pacotes também:
``` yarn add eslint-config-prettier eslint-plugin-prettier -D ```

__eslint-config-prettier__: Desativa todas as regras ESLint que têm o potencial de interferir com as regras do Prettier.

__eslint-plugin-prettier__: Transforma regras do Prettier em regras ESLint.

Ajustar o arquivo .eslintrc:
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "prettier/prettier": "error"
  }
}
```

[Um pouco mais sobre Typescript](Typescript.md)
