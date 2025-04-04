var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livro')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.charater){
    Livro.getLivrosByCharacter(req.query.charater)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  if(req.query.genre){
    Livro.getLivrosByGenre(req.query.genre)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  if(req.query.author){
    Livro.getLivrosByAuthor(req.query.author)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else {
    Livro.getLivros()
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
});

router.get('/genres', function(req, res, next) {
  Livro.getGenres()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.get('/characters', function(req, res, next) {
  Livro.getCharacters()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.get('/:id', function(req, res, next) {
  Livro.getLivroById(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.post('/', function(req, res, next) {
  Livro.insert(req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.delete('/:id', function(req, res, next) {
  Livro.delete(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.put('/:id', function(req, res, next) {
  Livro.update(req.body, req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});



module.exports = router;


