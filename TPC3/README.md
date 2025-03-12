# TPC3 - Gestão de Alunos 

**Aluno:** Salvador Duarte Magalhães Barreto - *A104520*  
![Alt text](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/image.png)

## Descrição  

Este trabalho tem como objetivo a implementação de um servidor HTTP em Node.js para a gestão de alunos, que consome dados de uma API fornecida por `json-server` e serve páginas `HTML` com recurso à biblioteca `axios` e templates HTML personalizados.

O projeto foi desenvolvido com base numa arquitetura modular, onde o ficheiro principal (`alunos_server_skeleton.js`) trata as requisições HTTP e interage com a API, enquanto os ficheiros auxiliares (`templates.js` e `static.js`) são responsáveis pela geração de páginas HTML e pela gestão de recursos estáticos, respetivamente. 

## Implementação  

### Gestão de Requisições GET
- `/alunos` ou `/`:
Lista todos os alunos, apresentando-os numa tabela. Utiliza `axios` para obter os dados da API e o template `studentsListPage` para gerar a página.

- `/alunos/:id`:
Mostra os detalhes de um aluno com base no seu identificador (`Axxxxxx` ou `PGxxxxx`). Os dados são obtidos através de `axios` e renderizados através do template `studentPage`.

- `/alunos/registo`:
Página com formulário para registo de um novo aluno, gerado com o template `studentFormPage`.

- `/alunos/edit/:id`:
Página de edição de um aluno existente. Os dados do aluno são primeiro carregados da API e o formulário de edição é preenchido automaticamente.

- `/alunos/delete/:id`:
Apaga o aluno correspondente da base de dados e apresenta uma página de aviso com `studentDeletedPage`

### Gestão de Requisições POST
- `/alunos/registo`:
Cria um novo aluno com base nos dados do formulário submetido. O corpo da requisição é lido com a função auxiliar `collectRequestBodyData`, e enviado à API via `axios.post`.

- `/alunos/edit/:id`:
Atualiza os dados de um aluno existente. O servidor utiliza `axios.put` com os novos dados recolhidos do formulário para atualizar o aluno na base de dados.

### Gestão de Requisições DELETE
- `/alunos/delete/:id`:
Apaga o aluno correspondente da base de dados através do `axios.delete`.

### Observações
Em relação aos templates disponibilizados inicialmente, adicionei uma nova função chamada `studentDeletedPage`, responsável por gerar uma página de confirmação após a remoção de um aluno. Esta página informa o utilizador que a operação foi concluída com sucesso e inclui um link para voltar à página principal.

## Código-Fonte  

O código-fonte pode ser encontrado no seguinte repositório:  

📌 [**Servidor em node.js**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC3/alunos_server_skeleton.js) 
📌 [**Geração das páginas HTML**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC3/templates.js)   
