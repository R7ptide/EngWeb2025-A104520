import { createServer } from 'http'
import axios from 'axios'
import { genMainPage, genAlunosPage, genCursosPage, genAlunoPage, genInstrumentosPage } from './mypages.js'
import { readFile } from 'fs'


createServer(function(req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.write(genMainPage(d))
        res.end()
    }
    else if(req.url === '/alunos') {
        axios.get('http://localhost:3000/alunos')
          .then(function(resp){
            var alunos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(genAlunosPage(alunos, null, null, d))
            res.end()
          })
          .catch(erro => {
            console.log("Erro " + erro)
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
          })
    } 
    else if(req.url.match(/\/alunos\/A\d+/)) {
        var a_id = req.url.split('/')[2]
        axios.get(`http://localhost:3000/alunos/${a_id}`)
          .then(function(resp){
            var aluno = resp.data
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(genAlunoPage(aluno, d))
            res.end()
          })
          .catch(erro => {
            console.log("Erro " + erro)
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
          })
    } 
    else if(req.url === '/cursos') {
        axios.get('http://localhost:3000/cursos')
          .then(function(resp){
            var cursos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(genCursosPage(cursos, d))
            res.end()
          })
          .catch(erro => {
            console.log("Erro " + erro)
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
          })
    } 
    else if(req.url.match(/\/cursos\/.+/)) {
        var c_id = req.url.split('/')[2]
        axios.get(`http://localhost:3000/alunos?curso=${c_id}`)
          .then(function(resp){
            var alunos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(genAlunosPage(alunos, c_id, null, d))
            res.end()
          })
          .catch(erro => {
            console.log("Erro " + erro)
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
          })
    } 
    else if(req.url === '/instrumentos') {
        axios.get('http://localhost:3000/instrumentos')
          .then(function(resp){
            var instru = resp.data
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(genInstrumentosPage(instru, d))
            res.end()
          })
          .catch(erro => {
            console.log("Erro " + erro)
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
          })
    } 
    else if(req.url.match(/\/instrumentos\/.+/)) {
        var i_id = req.url.split('/')[2]
        axios.get(`http://localhost:3000/instrumentos/${i_id}`)
            .then(function(resp){
                var instrumento = resp.data
                axios.get(`http://localhost:3000/alunos?instrumento=${instrumento['#text']}`)
                    .then(function(resp2){
                      var alunos = resp2.data
                      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                      res.write(genAlunosPage(alunos, null, instrumento, d))
                      res.end()
                    })
                    .catch(erro => {
                      console.log("Erro " + erro)
                      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                      res.end('<p>Operação na obtenção de dados: '+ erro + '</p>')
                    })
            })
        
    } 
    else if (req.url.match(/w3\.css$/)) {
        readFile("w3.css", function(erro, dados) {
            if(erro) {
                res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }
    else if (req.url.match(/favicon.\ico$/)) {
        readFile("icon.png", function(erro, dados) {
            if(erro) {
                res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            } else {
                res.writeHead(200, {'Content-Type': 'image/png'})
                res.end(dados)
            }
        })
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.end('<p>Operação não suportada: '+ req.url + '</p>')
    }
}).listen(7777)

console.log("Servidor à escuta na porta 7777")