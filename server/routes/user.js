const userRoute = require('express').Router()
const UserController = require('../controllers/userController')

userRoute.get("/users/movies", UserController.showMovies);
userRoute.get("/users/movies/:slug", UserController.showMovieById);

module.exports = userRoute;