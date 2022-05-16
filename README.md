#1 

`clone this project`

#2 

`follow the instructions in this` [table](https://github.com/rufai/tuo)

#3

* `Implement only the GET column of the table`
* `There are 2 database; hotels, books`
* `One person should handle one database endpoint.`
    + `Zinny may hanle row1 of hotels and rob does row3 of books`

#4 

Requirements

0) All updates to this repo should be a pull request. Create your own branch for each commit. 
1) Build a navigation template inserted at the top of each view. This navigation may look like below.

[<img src="/public/images/hotels.PNG">]()

2) Each get actions on the table table should be working. 

3) each database should have its own dedicated route and views folders

* `http://localhost:3000/movies/search?genre=Sci-Fi`
    - `we should be able to search the movies by id, title or genre when any is pass as query parameter`
[<img src="/public/images/movies.PNG">]()
* `localhost:3000/hotels/3/reviews`
* `etc`

4) For each book on the list, add 2 buttons
* `a button that takes users to youtube to watch trailers of the movie. For example, if the movie is "Ratatouille" then the button should take users to see` [Ratatouille Trailer](https://www.youtube.com/results?search_query=Ratatouille+trailer). `Notice how the youtube url is formed, it may be helpful.`
* `a button that allow users see reviews of the movies`
    + `to get reviews of movies, make a call to` [NYTime Movie Review API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)

5) `when we search a resource, we should see its reviews below it.`