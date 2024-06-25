const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/moviesDb')
.then(()=>{
    console.log("connection open");
 })
 .catch(err=>{
    console.log("oh no error!!")
    console.log(err)
 })


const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model("Movie",moviesSchema);

// const amadues =  new Movie({title: 'Amadues',year: 1986, score: 9.2, rating: 'R'});

// Movie.insertMany([
//    {title: 'Amelie',year: 2021, score: 8.3, rating: 'R'},
//    {title: 'Alien',year: 1971, score: 8.1, rating: 'R'},
//    {title: 'T Iron Giant',year: 1999, score: 7.5, rating: 'PG'},
//    {title: 'Stand by me',year: 1986, score: 8.6, rating: 'R'},
//    {title: 'Moonrise Kingdom',year: 2012, score: 97.3, rating: 'PG-13'}
// ])
// .then(data =>{
//    console.log('it Worked');
//    console.log(data);
// })