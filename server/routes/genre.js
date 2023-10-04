const genreRoute = require('express').Router()
const GenreController = require('../controllers/genreController')
const { authorizeAdmin } = require('../middleware/authorization')

genreRoute.get("/genres", GenreController.showGenres);
genreRoute.post("/genres", authorizeAdmin, GenreController.addGenre);
genreRoute.get("/genres/:id", GenreController.showGenreById);
genreRoute.put("/genres/:id", authorizeAdmin, GenreController.editGenre);
genreRoute.delete("/genres/:id", authorizeAdmin, GenreController.deleteGenre);

module.exports = genreRoute;