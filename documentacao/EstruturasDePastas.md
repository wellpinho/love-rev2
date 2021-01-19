## Estrutura de pastas do projeto

- Criando as pastas pelo terminal
```
mkdir -p src/config
mkdir -p src/modules
mkdir -p src/shared/http
```

## Configurando as importações
* Podemos usar um recurso que facilitará o prcesso de importação de arquivos em nosso projeto
* iniciamos configurando o objeto path da tsconfig.json que permite criar uma base para cada áth a ser buscado no projeto funcionando de forma similar a um aralho

```
  "paths": {
    "@config/*": [
      "src/config/*"
    ],
    "@modules/*": [
      "src/modules/*"
    ],
    "@shared/*": [
      "src/shared/*"
    ]
  },
```
* Agora para fazer o import de um arquivo, basta chamar o cmainho iniciando com @ usando ctrl + space para usar o autocomplete.

[Iniciando com Typeorm](Typeorm.md)
