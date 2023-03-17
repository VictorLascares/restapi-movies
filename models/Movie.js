import { Schema, model } from "mongoose";

const movieSchema = Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
});


const Movie = model('Movie', movieSchema);
export default Movie;