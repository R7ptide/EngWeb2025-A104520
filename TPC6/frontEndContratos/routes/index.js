var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(resp => {
      var contratos = resp.data;
      res.render('index', { title: 'Contratos', contratos: contratos });
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});

router.get('/entidades/:id', function(req, res, next) {
  axios.get(`http://localhost:16000/contratos?nipc=${req.params.id}`)
    .then(resp => {
      var entidade = resp.data[0].entidade_comunicante
      axios.get(`http://localhost:16000/contratos?entidade=${entidade}`)
        .then(resp => {
          var contratos = resp.data;
          res.render('entidades', {nipc: req.params.id, entidade: entidade, contratos: contratos });
        })
        .catch(error => {
          console.log(error);
          res.render('error', {error: error})
        })
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});

router.get('/:id', function(req, res, next) {
  axios.get(`http://localhost:16000/contratos/${req.params.id}`)
    .then(resp => {
      var contrato = resp.data;
      res.render('contrato', { contrato: contrato });
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    })
});



module.exports = router;
