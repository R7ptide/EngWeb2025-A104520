# TPC2 - Escola de Música 

**Aluno:** Salvador Duarte Magalhães Barreto - *A104520*  
![Alt text](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/image.png)

## Descrição  

O objetivo deste trabalho é construir um serviço em nodejs, que consuma a API de dados servida pelo json-server da escola de música e sirva um website com as seguintes caraterísticas:

1. Página principal: Listar alunos, Listar Cursos, Listar Instrumentos;
2. Página de alunos: Tabela com a informação dos alunos (clicando numa linha deve saltar-se para a página de aluno);
3. Página de cursos: Tabela com a informação dos cursos (clicando numa linha deve saltar-se para a página do curso onde deverá aparecer a lista de alunos a frequentá-lo);
4. Página de instrumentos: Tabela com a informação dos instrumentos (clicando numa linha deve saltar-se para a página do instrumento onde deverá aparecer a lista de alunos que o tocam).
 

## Implementação  

O servidor HTTP foi desenvolvido em Node.js e utiliza a biblioteca `axios` para interagir com a API criada pelo `json-server`.

### Estrutura do Projeto

O projeto foi estruturado nos dois seguintes ficheiros principais:
- **`server.js`**: Responsável por criar e configurar o servidor HTTP, lidar com as requisições e consumir a API JSON.
- **`mypages.js`**: Contém funções para a geração das páginas HTML.

### Funcionalidades

O ficheiro `server.js` processa as requisições, identificando o URL solicitado e gerando a página correspondente através das funções definidas na `mypages.js`. Além disso, foi implementado um favicon, que é carregado automaticamente ao detetar o URL correspondente, personalizando assim o ícone da página da Escola de Música.

As principais funcionalidades implementadas são:
- **Página Principal:** A página principal apresenta três links principais:
    - Lista de Alunos
    - Lista de Cursos
    - Lista de Instrumentos
- **Página de Alunos:** Apresenta uma tabela com informações dos alunos. Ao clicar num aluno, o utilizador é redirecionado para a página individual do aluno, que exibe os seus detalhes. Nesta página existe um botão para regressar à lista de alunos.
- **Página de Cursos:** Lista os cursos disponíveis. Ao selecionar um curso, é possível visualizar a lista de alunos inscritos nesse curso. Nesta página existe, também, um botão para regressar à lista de cursos
- **Página de Instrumentos:** Lista os instrumentos musicais. Ao selecionar um instrumento, é possível ver quais alunos o tocam. Mais uma vez, com a opção de regressar à lista de instrumentos.

### Observações
Para a personalização das páginas HTML, utilizei a biblioteca w3.css, empregando os seguintes elementos:

- `w3-container` para estruturar os headers e footers de cada página;
- `w3-'color'` para definir a cor dos containers das páginas;
- `w3-table-all` para estilizar as tabelas de listagem;
- `w3-btn w3-round-large` para os botões de navegação entre páginas.

Uma funcionalidade que merece destaque é a reutilização da função `genAlunosPage` do `mypages.js`, que recebe quatro argumentos: a lista de alunos, um identificador do curso, um instrumento e a data da última atualização dos dados.

Esta função permite gerar dinamicamente a página de listagem de alunos, adaptando-se ao contexto:

- Se não houver curso nem instrumento associados, a página apresenta todos os alunos e um botão para voltar à página principal.
- Se houver um instrumento associado, mas não um curso, a página exibe apenas os alunos que tocam esse instrumento, com um botão para voltar à página de instrumentos.
- Se houver um curso associado, mas não um instrumento, a página exibe os alunos inscritos nesse curso, com um botão para voltar à página de cursos.

Desta forma, a `genAlunosPage` evita duplicação de código.

## Código-Fonte  

O código-fonte pode ser encontrado no seguinte repositório:  

📌 [**Servidor em node.js**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC2/server.js) 
📌 [**Geração das páginas HTML**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC2/mypages.js)   
