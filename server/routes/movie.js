const movieRoute = require('express').Router()
const MovieController = require('../controllers/movieController')
const { authorizeAdmin } = require('../middleware/authorization')

movieRoute.get("/movies", MovieController.showMovies);
movieRoute.post("/movies", authorizeAdmin, MovieController.addMovie);
movieRoute.get("/movies/:id", MovieController.showMovieById);
movieRoute.put("/movies/:id", authorizeAdmin, MovieController.editMovie);
movieRoute.delete("/movies/:id", authorizeAdmin, MovieController.deleteMovie);

module.exports = movieRoute;
