const movies_db= require('../database/movies/movies');
const axios = require('axios').default;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//Method GET
//Path /:id
//Description Getting all the movies from the database
function getMovieById(req,res){
    const {id}= req.params
    
    
    //picks out the movie id that matches the parameter
    const searchedMovie= movies_db.movies.filter((movie)=>{
        return movie.id===Number(id)
    })
    
    console.log(searchedMovie)
    res.render('movieCharles',{searchedMovie,allGenres:movies_db.genres})
//    res.send(`id :${id}`)
}


//Method GET
//Path /search
//Description Getting all the movies from the database
function searchMovies(req,res){
    const {query}= req;
    let searchedMovie;
    
    //this runs when the query path is "genre"
    if(query.genre){
       const genreName=query.genre;
        
        searchedMovie=movies_db.movies.filter((movie)=>{
//            let convertedText=[]
            
            //changes the genre strings to lowercase
//            movie.genres.forEach((item)=>{
//               convertedText.push(item.toLowerCase()) 
//            })
            
            return movie.genres.includes(genreName)
        })
        
       
    }
//    img(src=movie.posterUrl height=300 width=200)
    res.render('movieCharles', {searchedMovie,allGenres:movies_db.genres})
//    res.send('searching')
}

async function checkReviews(req,res){
    const {query}= req;
    const reveiwedMovie=query.search;
//    reveiwedMovie=reveiwedMovie.replace(" ", "%20")
    const apiKey= process.env.MOVIE_KEY
    
    const url=`https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&offset=3&order=by-publication-date&query=${reveiwedMovie}&api-key=${apiKey}`;
    
    try{
       const response= await axios.get(url);
        const data= response.data.results || []
        
        res.render('reviewsCharles',{data})
    }catch(error){
        console.log(error)
        res.send('not working')
    }
    
    
    
    
}

module.exports={
    getMovieById,
    searchMovies,
    checkReviews
}