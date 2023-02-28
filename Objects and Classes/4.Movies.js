function solve(arr) {
    let moviesArr = [];
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    function findMovieByName(movieName) {
        for (const movie of moviesArr) {
            if (movie.name === movieName) {
                return movie;
            }
        }
    }

    for (const elem of arr) {
        let data = elem.split(" ");
        let searchedMovieName = "";
        let movie;

        if (elem.split(" ")[0] === "addMovie") {
            let movieName = data.slice(1).join(" ");
            moviesArr.push(new Movie(movieName));

        } else if (data.includes("directedBy")) {
            let idx = data.indexOf("directedBy");
            let director = data.slice(idx + 1).join(" ");
            searchedMovieName = data.slice(0, idx).join(' ');
            movie = findMovieByName(searchedMovieName);
         
            if (movie){
                movie.director = director;
            }
            
        } else if (data.includes("onDate")) {
            let date = data.pop();
            searchedMovieName = data.slice(0, data.indexOf('onDate')).join(' ');
            movie = findMovieByName(searchedMovieName);

            if (movie){
                movie.date = date;
            }
        }

    }

    for (const movie of moviesArr) {
        if (movie.date && movie.director)
        console.log(JSON.stringify(movie));
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)