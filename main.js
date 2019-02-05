// Array Problem Set

// Print reverse function to print the reverse of an Array

function printReverse(Array){

    for (let index = Array.length; index >= 0; index--) {
        console.log(Array[index]);
        
    }
}

printReverse([1,2,3,4,5]);

printReverse(["H","C","A","Z"]);

// Array Objects Practice

// Array of movie data being parsed based on "haveWatched" attribute in array of objects.


var movieData = [
    {
        movieName: "The Incredibles 2",
        haveWatched: true,
        movieRating: 3.5
    },
    {
        movieName: "Top Gun",
        haveWatched: false,
        movieRating: 4
    },
    {
        movieName: "Solo",
        haveWatched: false,
        movieRating: 3
    }

]

function analyzeMovieData(array){

    array.forEach(function(index){
        if(index.haveWatched = true){
            console.log("Have watched \"" + index.movieName + "\" - " + index.movieRating);
        }else{
            console.log("Have not watched \"" + index.movieName + "\" - " + index.movieRating);            
        }
    }
    )
}

analyzeMovieData(movieData);