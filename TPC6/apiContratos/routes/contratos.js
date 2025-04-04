var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

/* GET all contracts */
router.get('/', function(req, res, next) {
  if(req.query.entidade) {
    Contrato.getContratosByEntidade(req.query.entidade)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.nipc) {
    Contrato.getEntidadeByNIPC(req.query.nipc)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.tipo) {
    Contrato.getContratosByTipo(req.query.tipo)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else {
    Contrato.getContratos()
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
});

/* GET entidades ordenadas alfabeticamente */
router.get('/entidades', function(req, res, next) {
  Contrato.getEntidades()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* GET tipos ordenadas alfabeticamente */
router.get('/tipos', function(req, res, next) {
  Contrato.getTipos()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});


/* GET all contracts by id */
router.get('/:id', function(req, res, next) {
  Contrato.getContratoById(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});


/* POST inserir contrato novo */
router.post('/', function(req, res, next) {
  Contrato.insert(req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* PUT atualizar contrato novo */
router.put('/:id', function(req, res, next) {
  Contrato.update(req.body, req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});


/* DELETE atualizar contrato novo */
router.delete('/:id', function(req, res, next) {
  Contrato.delete(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
