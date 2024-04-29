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

const generarResultadoController = require('../controllers/generarResultadoController');

const router = express.Router();
const apicache = require('apicache');
const cache = apicache.middleware;


router.get('/', appController.index);
//paso 1
router.get('/flujos', flujoController.index);
router.get('/cuantitativas',cache('5 minutes'), variablesCuantitativasController.index);
router.get('/tiempo/periodicidad',cache('5 minutes'), tiempoController.indexPeriodicidad);
router.get('/tiempo/gestiones',cache('5 minutes'), tiempoController.indexGestiones);
//paso 2 
router.get('/cualitativas/c_flujo/:codFlujo',cache('5 minutes'), variablesCualitativasController.index);
router.get('/cualitativas/n_flujo/:codFlujo',cache('5 minutes'), variablesCualitativasController.indexNandina);
router.get('/departamentos',cache('5 minutes'), departamentoController.index);
router.get('/pais/continentes',cache('5 minutes'), paisController.indexContinentes);
router.get('/pais/paises',cache('5 minutes'), paisController.indexPaisesDestino);
router.get('/medios',cache('5 minutes'), medioController.index);
router.get('/vias',cache('5 minutes'), viaController.index);

router.get('/aduanas',cache('5 minutes'), aduanaController.index);

router.get('/cualitativas/sub/:codSub',cache('5 minutes'), variablesCualitativasController.indexSub);

//resultado

router.post('/resultado', generarResultadoController.resultadoExportacion);



module.exports = router;