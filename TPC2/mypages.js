// mypages.js

export function genMainPage(data) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola de Música</title>        
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Consultas</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul">
                        <li>
                            <a href="/alunos">Lista de Alunos</a>
                        </li>

                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>

                        <li>
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>

                    </ul>
                </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>  
    `

    return pagHTML
}


export function genAlunosPage(lalun, curso, instrumento, data) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola de Música</title>        
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Lista de Alunos 
                        ${curso === null ? ' ' : "do Curso " + curso}
                        ${instrumento === null ? ' ' : "que tocam " + instrumento['#text']}
                    </h1>
                </header>
                `
                if(curso === null && instrumento === null) {
                    pagHTML += '<a href="/" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>'
                }
                else if (curso === null) {
                    pagHTML += '<a href="/instrumentos" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>'
                }
                else {
                    pagHTML += '<a href="/cursos" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>'
                }
                
                pagHTML += `
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Cusro</th>
                            <th>Instrumento</th>
                        </tr>

                        `

    lalun.forEach(aluno => {
        pagHTML += `
        <tr>
            <td><a href="alunos/${aluno.id}">${aluno.id}</a></td>
            <td>${aluno.nome}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.instrumento}</td>
        </tr>
        `
    });

    pagHTML +=
                        `
                    </table>
                </div>

                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>  
    `

    return pagHTML
}


export function genAlunoPage(aluno, data) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola de Música</title>        
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Ficha de Aluno - ${aluno.id}</h1>
                </header>

                <a href="/alunos" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>

                <div class="w3-container">
                    <ul>
                        <li>Nome: ${aluno.nome}</li>
                        <li>Data de Nascimento: ${aluno.dataNasc}</li>
                        <li>Cruso : ${aluno.curso}</li>
                        <li>Ano: ${aluno.anoCurso}</li>
                        <li>Instrumento: ${aluno.instrumento}</li>
                    </ul>
                </div>

                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>  
    `

    return pagHTML
}


export function genCursosPage(lcurs, data) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola de Música</title>        
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-green">
                    <h1>Lista de Cursos</h1>
                </header>

                <a href="/" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                            <th>Duração</th>
                            <th>Instrumento</th>
                        </tr>

                        `

        lcurs.forEach(curso => {
        pagHTML += `
        <tr>
            <td><a href="cursos/${curso.id}">${curso.id}</a></td>
            <td>${curso.designacao}</td>
            <td>${curso.duracao}</td>
            <td>${curso.instrumento["#text"]}</td>
        </tr>
        `
    });

    pagHTML +=
                        `
                    </table>
                </div>

                <footer class="w3-container w3-green">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>  
    `

    return pagHTML
}


export function genInstrumentosPage(linstr, data) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola de Música</title>        
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-red">
                    <h1>Lista de Instrumentos</h1>
                </header>

                <a href="/" class="w3-btn w3-round-large w3-light-grey"><- Voltar</a>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                        </tr>

                        `

        linstr.forEach(instrumento => {
        pagHTML += `
        <tr>
            <td><a href="instrumentos/${instrumento.id}">${instrumento.id}</a></td>
            <td>${instrumento['#text']}</td>
        </tr>
        `
    });

    pagHTML +=
                        `
                    </table>
                </div>

                <footer class="w3-container w3-red">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>  
    `

    return pagHTML
}