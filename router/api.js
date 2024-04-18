const express = require('express');
const departamentoController = require('../controllers/departamentoController');
const appController = require('../controllers/appController');
const flujoController = require('../controllers/flujoController');
const variablesCuantitativasController = require('../controllers/variablesCuantitativasController');
const tiempoController = require('../controllers/tiempoController');
const variablesCualitativasController = require('../controllers/variablesCualitativasController');
const paisController = require('../controllers/paisController');
const medioController = require('../controllers/medioController');
const viaController = require('../controllers/viaController');
const aduanaController = require('../controllers/aduanaController');

const router = express.Router();


router.get('/', appController.index);
router.get('/autores', appController.getAuthors);
router.get('/departamentos', departamentoController.index);

//paso 1
router.get('/flujos', flujoController.index);
router.get('/cuantitativas', variablesCuantitativasController.index);
router.get('/tiempo/periodicidad', tiempoController.indexPeriodicidad);
router.get('/tiempo/gestiones', tiempoController.indexGestiones);
//paso 2 
router.get('/cualitativas/c_flujo/:codFlujo', variablesCualitativasController.index);
router.get('/cualitativas/n_flujo/:codFlujo', variablesCualitativasController.indexNandina);
router.get('/departamentos', departamentoController.index);
router.get('/pais/continentes', paisController.indexContinentes);
router.get('/pais/paises', paisController.indexPaisesDestino);
router.get('/medios', medioController.index);
router.get('/vias', viaController.index);

router.get('/aduanas', aduanaController.index);

router.get('/cualitativas/sub/:codSub', variablesCualitativasController.indexSub);


module.exports = router;