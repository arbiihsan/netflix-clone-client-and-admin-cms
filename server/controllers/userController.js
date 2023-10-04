const { Movie, Genre, Cast } = require("../models");

class UserController {
    static test(req, res) {
        res.send('ini test')
    }
    
    static async showMovies(req, res, next) {
        try {
            const movies = await Movie.findAll({
                order: [
                    ["id","ASC"]
                ],
                include: [
                    {
                        model: Genre
                    },
                    {
                        model: Cast,
                        order: [
                            ["id","ASC"]
                        ]
                    },
                ],
            });

            res.status(200).json(movies);
        } catch (error) {
            next(error);
        }
    }

    static async showMovieById(req, res, next) {
        const { slug } = req.params;
        try {
            const movie = await Movie.findOne({
                where: {
                    slug
                },
                include: [
                    {
                        model: Genre
                    },
                    {
                        model: Cast,
                        order: [
                            ["id","ASC"]
                        ]
                    },
                ],
            });

            if (!movie) throw { name: "ErrorNotFound" };

            res.status(200).json(movie);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
