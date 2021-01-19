# ESLint
## ESLint é um linter JavaScript que permite que você aplique um conjunto de padrões de estilo, formatação e codificação para sua base de código. Ele examina seu código e avisa quando você não está seguindo o padrão que definiu.

- __Instalação e Configuração do ESLint__
- ESLint é um linter JavaScript que permite que você aplique um conjunto de padrões de estilo, formatação e codificação para sua base de código. Ele examina seu código e avisa quando você não está seguindo o padrão que definiu.

-- Instalação do ESLint no projeto:
``` yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin ```

- Na raiz do seu projeto crie um arquivo .eslintrc com uma configuração inicial do ESLint:
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```

- Criar o arquivo __.eslintignore__:
```
node_modules
dist
build
/*.js
```

- Adicionar um script no arquivo package.json para executar o lint:
```
"scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
  "lint": "eslint . --ext .ts"
}
```

- Esse comando faz basicamente com que o ESLint analise todos os arquivos dentro do projeto, indicando erros detectados de acordo com a configuração.

- Execute o script e verifique que nenhum erro deve ser retornado.
``` yarn lint ```

- __Adicionando regras__
- No arquivo __.eslintrc__, podemos adicionar o atributo rules ao objeto json para definição de regras.

-Para cada regra podemos atribuir os seguintes valores: __"off", "warn" ou "error"__.
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn"
  }
}
```

- A regra __no-console__ irá indicar se há algum __console.log()__ perdido pelo código.

Correção automática
O ESLint pode receber um parâmetro --fix para que tente corrigir automaticamente os problemas encontrados.

- Vamos configurar outro script com a opção __--fix__.
```
"scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
  "lint": "eslint . --ext .ts",
  "lint-fix": "eslint . --ext .ts --fix"
}
```

[Configurando Prettier](PrettierConfig.md)
