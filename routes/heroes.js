var express = require('express');
let heroesController = require('../controllers/heroesController')
var router = express.Router();

router.get('/heroes', heroesController.main);
router.get('/heroes/:id/profesion', heroesController.profesion);
router.get('/heroes/:id/resenia/tipo', heroesController.resenia);

module.exports = router;

