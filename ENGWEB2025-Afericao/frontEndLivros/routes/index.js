var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
    .then(resp => {
      var livros = resp.data;
      res.render('index', { title: 'Livros', livros: livros });
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});

router.get('/entidades/:id', function(req, res, next) {
  axios.get(`http://localhost:17000/books?author=${req.params.id}`)
    .then(resp => {
      var livros = resp.data;
      res.render('authors', {author: req.params.id, livros: livros });
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});

router.get('/:id', function(req, res, next) {
  axios.get(`http://localhost:17000/books/${req.params.id}`)
    .then(resp => {
      var livro = resp.data;
      res.render('livro', { livro: livro });
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});



module.exports = router;
