// Array Looping Practice

// Print reverse function to print the reverse of an Array

function printReverse(Array){

    for (let index = Array.length; index >= 0; index--) {
        console.log(Array[index]);
        
    }
}

printReverse([1,2,3,4,5]);

printReverse(["H","C","A","Z"]);

// Array Objects Practice

// Parse array of movie data objects based on have or have no watched attribute

// Initialization of movie data array.

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

// Function to parse array of objects based on have or have not watched attribute.

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

// Execute analyze movie data function.

analyzeMovieData(movieData);