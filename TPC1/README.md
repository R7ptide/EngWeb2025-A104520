# TPC1 - A Oficina

**Aluno:** Salvador Duarte Magalhães Barreto - *A104520*  
![Alt text](image.PNG)

## Descrição  

O objetivo deste trabalho é construir um serviço em Node.js que consuma a API de dados servida pelo `json-server` da oficina de reparações e criar as respetivas páginas web do site.

## Implementação  

### Processamento de JSON em Python 

Antes de iniciar a implementação do site, foi necessário modificar o ficheiro JSON fornecido para estruturar melhor os dados e permitir consultas eficientes com o `json-server`. Para isso, criei um script em Python (`json_editor.py`) que:

- Copia os dados originais, mantendo a estrutura principal.
- Renomeia o campo `nif` para `id`.
- Extrai as informações das intervenções e viaturas de cada reparação e cria listas separadas (`intervencoes` e `viaturas`).
- Renomeia o código da intervenção para `id` e o modelo do veículo também para `id`, facilitando as queries no `json-server`.

Depois desta reformulação, o `json-server` pode ser utilizado com `json-server --watch`, permitindo fazer consultas e filtragens mais eficientes.

### Servidor Web em Node.js

O servidor HTTP foi desenvolvido em Node.js e utiliza a biblioteca `axios` para interagir com a API criada pelo `json-server`. As funcionalidades principais do servidor incluem:

- **Página Inicial ("/"):** Exibe um menu com ligações para as diferentes secções do site.
- **Lista de Reparações ("/reparacoes"):** Obtém todas as reparações do sistema e apresenta detalhes como data, cliente e viatura associada.
- **Detalhes de uma Reparação (reparacoes/{id}):** Exibe informações detalhadas sobre uma reparação específica, incluindo a lista de intervenções realizadas.
- **Lista de Intervenções ("/intervencoes"):** Apresenta os diferentes tipos de intervenção ordenadas lexicográficamente.
- **Detalhes de uma Intervenção ("/intervencoes/{id}"):** Apresenta a descrição da intervenção e uma lista de reparações onde a intervenção foi utilizada.
- **Lista de Viaturas ("/viaturas"):** Organiza os veículos por marca e modelo e apresenta o numero de viaturas.
- **Detalhes de uma Viatura (/"viaturas/{id}):** Apresenta a lista de todas as reparações que foram efetuadas em viaturas da dada marca e modelo.
- **Erro 500:** Em caso de falha nas requisições à API, o servidor devolve um erro adequado ao utilizador.

Todas as páginas principais incluem uma opção para regressar à página inicial (`<- Regressar à Página Inicial`). Além disso, cada item listado tem a opção `Ver detalhes`, que redireciona para a página `.../{id}` correspondente. Nesta página, há também a opção `Voltar` para regressar à página anterior.


## Código-Fonte  

O código-fonte pode ser encontrado no seguinte repositório:

📌 [**Script em python para editar o json original**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC1/json_editor.py)

📌 [**Implementação do servidor em node.js**](https://github.com/R7ptide/EngWeb2025-A104520/blob/main/TPC1/server.js)


