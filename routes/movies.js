import { Router } from "express";
import { 
    addMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
} from "../controllers/MovieController.js";

const router = Router();

router
    .route('/')
    .post(addMovie)
    .get(getMovies)

router
    .route('/:id')
    .get(getOneMovie)
    .put(updateMovie)
    .delete(deleteMovie)

export default router;