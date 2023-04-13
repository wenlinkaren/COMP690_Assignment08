//STEP 1
//const movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception"];
//console.log(movies[1]);

//STEP 2
//let movies = new Array(5);
//movies[0] = "The Shawshank Redemption";
//movies[1] = "The Godfather";
//movies[2] = "Pulp Fiction";
//movies[3] = "The Dark Knight";
//movies[4] = "Inception";
//console.log(movies[0]);

//STEP 3
//let movies = new Array(5);
//movies[0] = "The Shawshank Redemption";
//movies[1] = "The Godfather";
//movies[2] = "Pulp Fiction";
//movies[3] = "The Dark Knight";
//movies[4] = "Inception";
//movies.splice(2, 0, "Iron Man");
//console.log(movies.length);
//STEP 4
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception"];
//delete movies[0];
//console.log(movies);
//STEP 5
// Declare an array called movies using literal notation
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//for (let movie in movies) {
//    console.log(movies[movie]);
//}
//STEP 6
// Declare an array called movies using literal notation
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//for (let movie of movies) {
//    console.log(movie);
//}
//STEP 7
// Declare an array called movies using literal notation
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//movies.sort();
//for (let movie of movies) {
//    console.log(movie);
//}
//STEP 8
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//let leastFavMovies = ["Movie 1", "Movie 2", "Movie 3"];
//
//console.log("Movies I like:\n");
//for (let movie of movies) {
//    console.log(movie);
//}
//
//console.log("\nMovies I regret watching:\n");
//for (let movie of leastFavMovies) {
//    console.log(movie);
//}
//STEP 9
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//let leastFavMovies = ["Movie 1", "Movie 2", "Movie 3"];
//movies = movies.concat(leastFavMovies);
//movies.sort().reverse();
//console.log("Merged and reverse sorted movie list:\n");
//for (let movie of movies) {
//    console.log(movie);
//}
//STEP 10
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//let lastMovie = movies[movies.length - 1];
//console.log("Last movie in the array:", lastMovie);
//STEP 11
//let movies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Inception", "Forrest Gump", "The Matrix"];
//let firstMovie = movies[0];
//console.log("First movie in the array:", firstMovie);
//STEP 12
//let movies = ["The Shawshank Redemption", "The Godfather", "Bad Movie 1", "Pulp Fiction", "The Dark Knight", "Bad Movie 2", "Inception", "Forrest Gump", "The Matrix", "Bad Movie 3"];
//let dislikedMovies = ["Bad Movie 1", "Bad Movie 2", "Bad Movie 3"];
//let replacementMovies = ["Good Movie 1", "Good Movie 2", "Good Movie 3"];
//for (let i = 0; i < movies.length; i++) {
//    if (dislikedMovies.includes(movies[i])) {
//        let index = dislikedMovies.indexOf(movies[i]);
//        movies[i] = replacementMovies[index];
//    }
//}
//console.log("Updated movies array:");
//for (let movie of movies) {
//    console.log(movie);
//}
//STEP 13
//let movies = [["The Shawshank Redemption", 1], ["The Godfather", 2], ["Pulp Fiction", 3], ["The Dark Knight", 4], ["Inception", 5]];
//function filterMovieNames(item) {
//    return typeof item === 'string';
//}
//for (let i = 0; i < movies.length; i++) {
//    let movieNames = movies[i].filter(filterMovieNames);
//    console.log(movieNames[0]);
//}
//STEP 14
//let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//let showEmployee = function(empArray) {
//    console.log("Employees:\n");
//    for (let employee of empArray) {
//        console.log(employee);
//    }
//};
//showEmployee(employees);
//STEP 15
//function filterValues(arr) {
//    return arr.filter(function(value) {
//        return value !== false && value !== null && value !== 0 && value !== '';
//    });
//}
//console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
//function getRandomItem(arr) {
//    let randomIndex = Math.floor(Math.random() * arr.length);
//    return arr[randomIndex];
//}
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(getRandomItem(numbers));
//STEP 17
//function getLargestNumber(arr) {
//    return Math.max(...arr);
//}
//let numbers = [1, 2, 50, 4, 5, 6, 7, 8, 9, 10];
//console.log(getLargestNumber(numbers));