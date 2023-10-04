const { Movie, Genre, Cast, User, sequelize } = require("../models");
const slugFormatter = require("../helpers/slugFormatter");

class MovieController {
    static test(req, res) {
        res.send('ini test')
    }

    static async addMovie(req, res, next) {
        const trx = await sequelize.transaction();
        const { id } = req.user;
        const { title, synopsis, trailerUrl, imgUrl, rating, genreId, Casts } = req.body;
        console.log(req.body);
        try {
            const slug = slugFormatter(title);

            const movie = await Movie.create(
                {
                    title, slug, synopsis, trailerUrl, imgUrl, rating, genreId, authorId: id
                },
                {
                    transaction: trx,
                }
            );

            Casts.forEach((cast) => {
                cast.movieId = movie.id;
            });

            await Cast.bulkCreate(Casts, {
                transaction: trx,
            });

            await trx.commit();

            res.status(201).json({
                message: `Successfully added the movie ${movie.title}`,
            });
        } catch (err) {
            await trx.rollback();
            next(err);
        }
    }

    static async showMovies(req, res, next) {
        try {
            // console.log('masukkkkkkk');
            const movies = await Movie.findAll({
                order: [
                    ["id", "ASC"]
                ],
                include: [
                    {
                        model: Genre
                    },
                    {
                        model: Cast,
                        order: [
                            ["id", "ASC"]
                        ]
                    },
                ],
            });
            // console.log(movies, '<<<<<<<<<');
            res.status(200).json(movies);
        } catch (err) {
            next(err);
        }
    }

    static async showMovieById(req, res, next) {
        // console.log('masukkkkkkkk');
        const { id } = req.params;
        try {
            const movie = await Movie.findOne({
                where: {
                    id: +id,
                },
                include: [
                    {
                        model: Genre
                    },
                    {
                        model: Cast,
                        order: [
                            ["id", "ASC"]
                        ]
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ["password"],
                        },
                    },
                ],
            });
            // console.log(movie,'<<<<<<<<<<');

            if (!movie) throw { name: "ErrorNotFound" };

            res.status(200).json(movie);
        } catch (err) {
            next(err);
        }
    }

    static async deleteMovie(req, res, next) {
        const { id } = req.params;
        try {
            const findMovie = await Movie.findByPk(+id);

            const deletedMovie = await Movie.destroy({
                where: {
                    id: +id
                }
            })

            if (!deletedMovie) throw { name: "ErrorNotFound" };

            res.status(200).json({
                message: `Successfully deleted the movie ${findMovie.title}`,
            });
        } catch (err) {
            next(err);
        }
    }

    static async editMovie(req, res, next) {
        const trx = await sequelize.transaction();
        const { title, synopsis, trailerUrl, imgUrl, rating, genreId, Casts } = req.body;
        const { id: movieId } = req.params;
        const { id: authorId } = req.user;
        try {
            const slug = slugFormatter(title);

            const findMovie = await Movie.findByPk(+movieId);
            if (!findMovie) throw { name: "ErrorNotFound" };

            await Movie.update(
                {
                    title, slug, synopsis, trailerUrl, imgUrl, rating, genreId, authorId,
                },
                {
                    where: {
                        id: +movieId,
                    },
                    transaction: trx,
                }
            );

            await Cast.destroy({ where: { movieId: +movieId } });

            Casts.forEach((cast) => {
                cast.movieId = +movieId;
            });

            await Cast.bulkCreate(Casts, {
                transaction: trx,
            });

            await trx.commit();

            res.status(201).json({
                message: `Successfully edited the movie ${findMovie.title}`,
            });
        } catch (err) {
            await trx.rollback();
            next(err);
        }
    }
}

module.exports = MovieController;
