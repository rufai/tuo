let moviesModel = require('../models/moviesModel');
let allMovies = require('../database/movies')

// Getting all movies
exports.getMovies = function(req, res) {
    const {id} = req.params; 
    const movie = allMovies.find((film) => film.id === Number(id))
    return res.status(200).render('getmovie', {success: true, film: movie})
}