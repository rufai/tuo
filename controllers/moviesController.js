let moviesModel = require('../models/moviesModel');
let allMovies = require('../database/movies/movies').movies;

// Getting all movies
exports.getMovies = function(req, res) {
    return res.status(200).render('getmovie', {success: true, film: allMovies})
}