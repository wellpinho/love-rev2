# Trabalhando com TypeORM e banco de dados postgres

Instalando o pacote
``` yarn add typeorm reflect-metadata pg ```

## Conexão com banco de dados postgres
criar arquivo na raiz do projeto
``` touch ormconfig.json ```

infomrações de conexão
```
{
  "type: "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test"
}
```

Arquivo para definir a conexão
criar arquvio index.ts em: src/shared/typeorm/
```
import { createConnection } from 'typeorm'

createConnection()
```

importar o typeorm/index.ts no server.ts

## Criando uma migration
``` yarn typeorm migration:create -n nome_da_migration ```

## Executar a ultima migration criada
``` yarn typeorm migration:run ```

## Reverter a ultima migration criada
``` yarn typeorm migration:revert ```

