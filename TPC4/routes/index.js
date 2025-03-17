var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res) {
  res.render('index', 
    { title: 'Engenharia Web 2025',
      docente:'jcr',
      instituicao: 'DI-UM'
     });
});

router.get('/filmes', function(req, res) {
  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      res.render('filmes', {lfilmes: resp.data, tit:"Lista de Filmes"})
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error})
    })
});

router.get('/actor/:nome', function(req, res) {
  var nome = req.params.nome  

  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      lfilmes = resp.data
      filmesAtor = []
      lfilmes.forEach(f => {
        if(f.cast && f.cast.includes(nome)) {
          filmesAtor.push(f)
        }
      });

      filmesAtor.sort((a, b) => a.title.localeCompare(b.title))

      res.render('actor', {lfilmes: filmesAtor, tit:`Lista de Filmes do Ator ${nome}`})
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error})
    })
});

router.get('/filmes/edit/:id', function(req, res) {
  var id = req.params.id

  axios.get(`http://localhost:3000/filmes/${id}`) 
    .then(resp => {
      res.render('editFilm', {filme: resp.data, tit:`Editar Filme: ${id}`})
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error})
    })
});

router.post('/filmes/edit/:id', function(req, res) {
  var id = req.params.id

  axios.put(`http://localhost:3000/filmes/${id}`, req.body)
      .then(resp => {
        res.redirect('/filmes')
      })
      .catch(erro => {
        console.log(erro)
        res.render('error', {error: erro})
      })

})


router.get('/filmes/delete/:id', function(req, res) {
  var id = req.params.id

  axios.delete(`http://localhost:3000/filmes/${id}`, req.body)
      .then(resp => {
        res.redirect('/filmes')
      })
      .catch(erro => {
        console.log(erro)
        res.render('error', {error: erro})
      })

})

module.exports = router;
