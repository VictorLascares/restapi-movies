import Movie from "../models/Movie.js";

const addMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.json(savedMovie);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

const getOneMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
        const error = new Error("No existe la pelicula");
        return res.status(404).json({ msg: error.message });
    }
    res.json(movie);
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
        const error = new Error("No existe la pelicula");
        return res.status(404).json({ msg: error.message });
    }

    // Update Movie
    Object.keys(req.body).forEach(property => {
        if (req.body[property]) {
            movie[property] = req.body[property];
        }
    });

    // Save updated movie
    try {
        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
        const error = new Error("No existe la pelicula");
        return res.status(404).json({ msg: error.message });
    }

    try {
        const deletedMovie = await movie.deleteOne();
        res.json(deletedMovie);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export {
    addMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
};