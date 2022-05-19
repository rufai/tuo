let express = require('express');
let router = express.Router;

let moviesController = require('../controllers/moviesController');

router.get('/:id', moviesController.getMovies);

module.exports = router;