const express = require('express');
const departamentoController = require('../controllers/departamentoController');
const appController = require('../controllers/appController');

const router = express.Router();


router.get('/', appController.index);
router.get('/autores', appController.getAuthors);
router.get('/departamentos', departamentoController.index);

module.exports = router;