## O Editor Config é uma ferramenta que auxilia na padronização da configuração para vários desenvolvedores trabalhando em um mesmo projeto, mas em diferentes editores de código ou IDE's.

- O Editor Config é uma ferramenta que auxilia na padronização da configuração para vários desenvolvedores trabalhando em um mesmo projeto, mas em diferentes editores de código ou IDE's.

__Instalar no VSCode a extensão EditorConfig for VS Code.__

Depois de instalada, ao clicar com o botão direito sobre o explorador de arquivos do projeto vamos selecionar a opção Generate __.editorconfig__.
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

- Nesse arquivo podemos ver algumas opções como o tipo de indentação, o tamanho da indentação, qual o charset que está sendo utilizado e algumas outras configurações.

- O que vamos modificar nesse arquivo são apenas as 2 últimas opções, __trim_trailing_whitespace__ e __insert_final_newline_ , que devem ser modificadas de false para true .

Além de adicionar uma última opção, a __end_of_line = lf__ , para garantir que as quebras de linha sejam padronizadas, pois em linguagem de código, no Windows o final das linhas são representadas por __\r\n__ , já no Linux é apenas com __\n__ , e para evitar que isso gere algum tipo de problema ao mudar de Sistema Operacional, essa opção é adicionada.

O arquivo final vai ficar assim:
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

- E para garantir que o código seja formatado corretamente, abra os arquivos do projeto e salve-os novamente.

[Configurando ESLint](ESLint.md)