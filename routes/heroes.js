var express = require('express');
let heroesController = require('../controllers/heroesController')
var router = express.Router();

router.get('/', heroesController.main);
router.get('/:id/profesion', heroesController.profesion);
router.get('/:id/resenia/tipo', heroesController.resenia);

module.exports = router;

