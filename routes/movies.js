let express = require('express');
let router = express.Router();

let moviesController = require('../controllers/moviesController.js');

router.get('/', moviesController.getMovies);

module.exports = router;