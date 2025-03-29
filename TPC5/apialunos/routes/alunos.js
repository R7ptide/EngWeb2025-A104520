var express = require('express');
var router = express.Router();
var Aluno = require("../controllers/alunos")

/* GET home page. */
router.get('/', function(req, res, next) {
  Aluno.list()
    .then( data =>
      res.render('index', {tit:"Lista de Alunos", lalunos:data})
    )
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});

/* GET new aluno page. */
router.get('/new', function(req, res, next) {
  res.render('newAluno', { aluno: {} }); 
});


/* GET aluno page by id. */
router.get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id)
    .then( data =>
      res.render('aluno', {aluno:data})
    )
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});

/* GET aluno edit page. */
router.get('/edit/:id', function(req, res, next) {
  Aluno.findById(req.params.id)
    .then( data =>
      res.render('editAluno', {aluno: data})
    )
    .catch( erro => 
      res.render('error', {message: "Erro", error: erro})
    )
});

router.post('/edit/:id', function(req, res, next) {
  Aluno.update(req.params.id, req.body)
    .then( data => {
      res.redirect(`/alunos/${data._id}`)
    })
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});

/* POST new aluno page. */
router.post('/new', function(req, res, next) {
  Aluno.insert(req.body)
    .then( data =>
      res.redirect(`/alunos/${data._id}`)
    )
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});

router.get('/delete/:id', function(req, res, next) {
  Aluno.delete(req.params.id)
    .then( data =>
      res.redirect("/alunos")
    )
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});

router.delete('/delete/:id', function(req, res, next) {
  Aluno.delete(req.params.id)
    .then( data =>
      res.redirect("/alunos")
    )
    .catch( erro => 
      res.render('error', {message:"Erro", error:erro})
    )
});


module.exports = router;
