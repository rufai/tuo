const express= require('express');
const router= express.Router();
const {getMovieById
       ,searchMovies
      ,checkReviews} = require('../controllers/movieController')

//search for movie
router.get('/search',searchMovies)

//takes users to review
router.get('/reviews',checkReviews)

//To get all the movies
router.get('/:id',getMovieById);






module.exports=router