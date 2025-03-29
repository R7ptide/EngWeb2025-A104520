# TPC5 - Gestão de Alunos 

**Aluno:** Salvador Duarte Magalhães Barreto - *A104520*  
![Alt text](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/image.png)

## Descrição  

Este trabalho tem como objetivo a criação de uma App para gerir alunos com dois serviços: `api de dados` e `front-end`.

## Implementação  

### Dependências
A aplicação é construída utilizando `Node.js` com a framework `Express`. A base de dados usada é `MongoDB`, sendo que a interação com a base de dados é feita através do Mongoose.

Para instalar as dependências, é necessário seguir os seguintes passos:

Dentro da pasta home, execute:
```
npm install mongoose
```
Depois, dentro da pasta `apialunos`, execute:
```
npm install
```
### Conexão com a Base de Dados 
A conexão com o MongoDB é realizada no `app.js` com o seguinte código:
```
var mongoDB = "mongodb://localhost:27017/alunos"; //27017
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
db.once("open", () => console.log("Conexão ao MongoDB realizada com sucesso"));
```
Este código realiza a conexão com a base de dados chamada `alunos` na máquina local. Caso haja algum erro na conexão, uma mensagem de erro será exibida.

### Modelo do Aluno
O modelo do aluno está descrito no ficheiro `aluno.js` dentro da pasta `models`. Ele define o `schema` dos dados que serão armazenados para cada aluno.

### Funcionalidades no Controller
Dentro do controller `alunos.js`, são implementadas as funções responsáveis por interagir com o banco de dados:
- `module.exports.list` -> lista todos os alunos
- `module.exports.findById` -> encontra um aluno pelo seu identificador
- `module.exports.insert` -> adiciona um novo aluno à base de dados
- `module.exports.update` -> atualiza um aluno na base de dados
- `module.exports.delete` -> remove um aluno da base de dados

### Rotas
As rotas principais da aplicação estão descritas no focheiro `routes/alunos.js`. Estas são responsáveis por conectar as páginas da interface com as funcionalidades do controller:

- `GET /`: Exibe a lista de alunos.
- `GET /new`: Exibe o formulário para adicionar um novo aluno.
- `GET /:id`: Exibe as informações de um aluno específico.
- `GET /edit/:id`: Exibe o formulário para editar um aluno existente.
- `POST /new`: Adiciona um novo aluno.
- `POST /edit/:id`: Atualiza um aluno existente.
- `GET /delete/:id` e DELETE /delete/:id: Deleta um aluno.

### Front-end

O front-end da aplicação foi desenvolvido utilizando o motor de templates `Pug`.
Aqui estão algumas das páginas principais:

- Lista de Alunos (`index.pug`): Exibe uma tabela com todos os alunos.
- Adicionar Aluno (`newAluno.pug`): Exibe um formulário para adicionar um novo aluno.
- Editar Aluno (`editAluno.pug`): Exibe um formulário para editar um aluno existente.
- Visualizar Aluno (`aluno.pug`): Exibe detalhes de um aluno específico.

## Código-Fonte  

O código-fonte pode ser encontrado no seguinte repositório:  

📌 [**app.js**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC5/apialunos/app.js)   
📌 [**Modelo**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC5/apialunos/models/aluno.js)
📌 [**Controlador**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC5/apialunos/controllers/alunos.js)   
📌 [**Rotas**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC5/apialunos/routes/alunos.js) 
📌 [**Front-end**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC5/apialunos/views) 

