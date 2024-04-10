const express = require('express');
const departamentoController = require('../controllers/departamentoController');
const appController = require('../controllers/appController');

const flujoController = require('../controllers/flujoController');
const variablesCuantitativasController = require('../controllers/variablesCuantitativasController');
const tiempoController = require('../controllers/tiempoController');

const variablesCualitativasController = require('../controllers/variablesCualitativasController');

const router = express.Router();


router.get('/', appController.index);
router.get('/autores', appController.getAuthors);
router.get('/departamentos', departamentoController.index);

//paso 1
router.get('/flujos', flujoController.index);
router.get('/cuantitativas', variablesCuantitativasController.index);
router.get('/tiempo/periodicidad', tiempoController.indexPeriodicidad);
router.get('/tiempo/gestiones', tiempoController.indexGestiones);
router.get('/cualitativas', variablesCualitativasController.index);






module.exports = router;