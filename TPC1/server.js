const http = require('http')
const axios = require('axios')

http.createServer((req, res) => {
    console.log("METHOD: " + req.method)
    console.log("URL: " + req.url)

    switch(req.method){
        case "GET":
        {    
            if (req.url === "/") {
                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.write("<h1>Bem-vindo à Oficina</h1>");
                res.write("<ul>");
                res.write("<li><a href='/reparacoes'>🔧 Lista de Reparações</a></li>");
                res.write("<li><a href='/intervencoes'>🛠 Tipos de Intervenção</a></li>");
                res.write("<li><a href='/viaturas'>🚗 Viaturas Intervencionadas</a></li>");
                res.write("</ul>");
                res.end();
            }
            else if (req.url === "/reparacoes") 
            {   
                axios.get('http://localhost:3000/reparacoes')
                    .then(resp => {
                        var reparacoes = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write("<h1>Lista de Reparações</h1>")
                        res.write("<a href='/'><- Regressar à Página Inicial</a>")
                        res.write("<ul>")
                        reparacoes.forEach(element => {
                            res.write("<li>")
                            res.write(`<strong>Data:</strong> ${element.data}<br>`) 
                            res.write(`<strong>Cliente:</strong> ${element.nome} | <strong>NIF:</strong> ${element.id}<br>`)
                            res.write(`<strong>Viatura:</strong> ${element.viatura.marca} ${element.viatura.id}<br>`)
                            res.write(`<strong>Nº de Intervenções:</strong> ${element.nr_intervencoes}<br>`)
                            res.write(`<a href='/reparacoes/${element.id}'>Ver detalhes</a><br>`)
                            res.write("<br></li>")
                        });
                        res.write("</ul>")
                        res.end()  
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        console.log(err)
                        res.end()  
                    })
            }
            else if (req.url.match(/\/reparacoes\/.+/)) 
            {
                var id = req.url.split("/")[2]
                axios.get(`http://localhost:3000/reparacoes/${id}`)
                    .then(resp => {
                        var reparacao = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write(`<h1>Reparação</h1>`)
                        res.write("<a href='/reparacoes'><- Voltar</a><br><br>")
                        res.write(`<strong>Data:</strong> ${reparacao.data}<br>`) 
                        res.write(`<strong>Cliente:</strong> ${reparacao.nome} | <strong>NIF:</strong> ${reparacao.id}<br>`)
                        res.write(`<strong>Viatura:</strong> ${reparacao.viatura.marca} ${reparacao.viatura.id} | <strong>Matrícula:</strong> ${reparacao.viatura.matricula}<br>`)
                        res.write(`<strong>Nº de Intervenções:</strong> ${reparacao.nr_intervencoes}<br>`)
                        res.write("<strong>Lista de Intervenções:</strong>")
                        res.write("<ul>")
                        reparacao.intervencoes.forEach(i => {
                            res.write("<li>")
                            res.write(`<strong>${i.id} - ${i.nome}</strong><br>`)
                            res.write(`${i.descricao}<br>`)
                            res.write("</li>")
                        })
                        res.write("</ul>")
                        res.end()  
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        console.log(err)
                        res.end()  
                    })
            }
            else if (req.url === "/intervencoes") 
            {    
                axios.get('http://localhost:3000/intervencoes?_sort=id')
                    .then(resp => {
                        var intervencoes = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write("<h1>Tipos de Intervenções</h1>")
                        res.write("<a href='/'><- Regressar à Página Inicial</a>")
                        res.write("<ul>")
                        intervencoes.forEach(element => {
                            res.write("<li>")
                            res.write(`<strong>${element.id} - ${element.nome}</strong><br>`) 
                            res.write(`${element.descricao}<br>`)
                            res.write(`<a href='/intervencoes/${element.id}'>Ver detalhes</a><br>`)
                            res.write("<br></li>")
                        });
                        res.write("</ul>")
                        res.end()  
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        console.log(err)
                        res.end()  
                    })
            }
            else if (req.url.match(/\/intervencoes\/.+/)) 
            {
                var id = req.url.split("/")[2]
                axios.get(`http://localhost:3000/intervencoes/${id}`)
                    .then(resp => {
                        var intervencao = resp.data

                        axios.get('http://localhost:3000/reparacoes')
                            .then(resp2 =>{
                                var reparacoes = resp2.data
                                var reparacoesFiltradas = []
                                reparacoes.forEach(element => {
                                    element.intervencoes.forEach(i => {
                                        if(i.id === intervencao.id) {
                                            reparacoesFiltradas.push(element)
                                        }
                                    })
                                })

                                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                                res.write(`<h1>${intervencao.id} - ${intervencao.nome}</h1>`)
                                res.write("<a href='/intervencoes'><- Voltar</a><br><br>")
                                res.write(`<strong>Descrição:</strong> ${intervencao.descricao}<br>`)
                                res.write(`<strong>Lista de Reparações onde a Intervenção ${intervencao.id} foi utilizada:</strong>`)
                                res.write("<ul>")
                                reparacoesFiltradas.forEach(element => {
                                    res.write("<li>")
                                    res.write(`<strong>Data:</strong> ${element.data}<br>`)
                                    res.write(`<strong>Cliente:</strong> ${element.nome} (NIF:${element.id})<br>`)
                                    res.write(`<a href='/reparacoes/${element.id}'>Ver detalhes</a><br>`)
                                    res.write("<br></li>")
                                })
                                res.write("</ul>")
                                res.end()  
                            })
                            .catch(err => {
                                res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                                console.log(err)
                                res.end()
                            })
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        console.log(err)
                        res.end()  
                    })
            }
            else if (req.url === "/viaturas") 
            {    
                axios.get('http://localhost:3000/viaturas?_sort=marca')
                    .then(resp => {
                        var viaturas = resp.data
                        var contagem = {}

                        viaturas.forEach(v => {
                            if(!contagem[v.marca]) {
                                contagem[v.marca] = { total: 0, modelos: {} };
                            }
                            contagem[v.marca].total += 1

                            if(!contagem[v.marca].modelos[v.id]) {
                                contagem[v.marca].modelos[v.id] = 0
                            }
                            contagem[v.marca].modelos[v.id] += 1

                        })

                        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                        res.write("<h1>Viaturas Intervencionadas</h1>");
                        res.write("<a href='/'><- Regressar à Página Inicial</a>")
                        res.write("<ul>");
                        Object.keys(contagem).forEach(marca => {
                            res.write(`<li>${marca} - ${contagem[marca].total}</li>`);
                            res.write("<ul>");
                            Object.keys(contagem[marca].modelos).forEach(modelo => {
                                res.write(`<li><a href='/viaturas/${modelo}'>${modelo}</a> - ${contagem[marca].modelos[modelo]}</li>`)
                            })
                            res.write("</ul>")
                        })
                        res.write("</ul")
                        res.end()
                    }) 
                    .catch(err => {
                        res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' });
                        console.log(err);
                        res.end();
                    })
            }
            else if(req.url.match(/\/viaturas\/.+/))
            {
                var id = req.url.split("/")[2]
                axios.get(`http://localhost:3000/viaturas/${id}`)
                    .then(resp => {
                        var viatura = resp.data

                        axios.get('http://localhost:3000/reparacoes')
                            .then(resp2 => {
                                var reparacoes = resp2.data
                                var reparacoesFiltradas = []
                                reparacoes.forEach(element => {
                                    if(element.viatura.id === viatura.id) {
                                        reparacoesFiltradas.push(element)
                                    }
                                })

                                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                                res.write(`<h1>${viatura.marca} ${viatura.id}</h1>`);
                                res.write("<a href='/viaturas'><- Voltar</a><br><br>")
                                res.write("Reparações deste modelo:");
                                res.write("<ul>");
                                reparacoesFiltradas.forEach(r => {
                                    res.write("<li>")
                                    res.write(`<strong>Data:</strong> ${r.data}<br>`)
                                    res.write(`<strong>Cliente:</strong> ${r.nome} (NIF:${r.id})<br>`)
                                    res.write(`<a href='/reparacoes/${r.id}'>Ver detalhes</a><br>`)
                                    res.write("<br></li>")
                                })
                                res.write("</ul>");
                                res.end()
                            })
                            .catch(err => {
                                res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' });
                                console.log(err);
                                res.end();
                            })
                    })
                    .catch(err => {
                        res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' });
                        console.log(err);
                        res.end();
                    })
            }
    
            break;
        }
        default : 
            res.writeHead(405, {'Content-Type' : 'text/html;charset=utf-8'})
            res.end()  
            break;
    }

}).listen(1234)


console.log("Servidor à escuta na porta 1234...")