# TPC4 - Filmes 

**Aluno:** Salvador Duarte Magalhães Barreto - *A104520*  
![Alt text](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/image.png)

## Descrição  

Este trabalho consistiu no desenvolvimento de uma aplicação web para gestão de uma lista de filmes, utilizando **Express**, **Node.js** e **Pug** (usando **w3.css**) como motor de templates . A aplicação permite:

- Visualizar uma lista de filmes.
- Aceder à lista de filmes em que um determinado ator participou.
- Editar as informações de um filme.
- Remover filmes da lista.

## Implementação  

A aplicação está estruturada da seguinte forma:

- **Página Inicial** (`/`) – Contém informações básicas do projeto e um link para a lista de filmes.
- **Lista de Filmes** (`/filmes`) – Apresenta os filmes disponíveis numa tabela, com o título, ano, elenco e géneros. Cada filme tem as opções **Editar** e **Remover**.
- **Filmes por Ator** (`/actor/:nome`) – Quando o utilizador clica no nome de um ator, é redirecionado para uma página que mostra todos os filmes em que esse ator participou.
- **Editar Filme** (`/filmes/edit/:id`) – Formulário para editar as informações de um filme específico.
- **Remover Filme** (`/filmes/delete/:id`) – Remove um filme da base de dados.

### index.js

O ficheiro `index.js` define as seguintes rotas:

- `GET /` – A página inicial (`index.pug`) com título, docente da disciplina, instituição e um link para a lista de filmes.
- `GET /filmes` – Vai buscar a lista completa de filmes ao servidor JSON e renderiza a página `filmes.pug`, que mostra os filmes numa tabela, com ano, lista de atores e lista de géneros
- `GET /actor/:nome` – Recebe o nome de um ator como parâmetro, filtra os filmes onde esse ator participa e renderiza `actor.pug` com os resultados.
- `GET /filmes/edit/:id` – Vai buscar os dados do filme com o `id` fornecido e renderiza o formulário de edição `editFilm.pug`.
- `POST /filmes/edit/:id` – Atualiza os dados do filme no servidor JSON, usando `axios.put`, com base nos dados enviados pelo formulário.
- `GET /filmes/delete/:id` – Envia um pedido `axios.delete` para remover o filme correspondente ao `id`.

O ficheiro gere a lógica e coordenação dos dados entre a interface do utilizador e a base de dados.


### editFilm.pug

A página `editFilm.pug` representa o formulário de edição de um filme. É preenchido com os dados atuais do filme (`title`, `year`, `cast`, `genres`) e, ao submeter, envia um `POST` para `/filmes/edit/:id`.

Cada campo é apresentado como um `input` com valor pré-preenchido. O formulário trata múltiplos atores e géneros, criando um campo de input para cada um:

```pug
each a in filme.cast
  input.w3-input.w3-round(type="text" name="cast" value=a)
```

Este padrão permite editar diretamente os elementos do array. O mesmo é feito para os géneros. No `index.js`, quando o `req.body` é recebido no `POST`. A estrutura geral do formulário está organizada com `fieldset` para separar os diferentes grupos de dados (título/ano, elenco e géneros).

## Código-Fonte  

O código-fonte pode ser encontrado no seguinte repositório:  

📌 [**index.js**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC4/routes/index.js)   
📌 [**Views**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC4/views) 
