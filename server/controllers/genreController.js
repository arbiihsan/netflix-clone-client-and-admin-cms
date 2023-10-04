const { Genre } = require("../models");

class GenreController {
    static test(req, res) {
        res.send('ini test')
    }

    static async addGenre(req, res, next) {
        const { name } = req.body;
        try {
            const genres = await Genre.create(
                {
                    name
                }
            );

            res.status(201).json(genres);
        } catch (err) {
            next(err);
        }
    }

    static async showGenres(req, res, next) {
        try {
            const genres = await Genre.findAll({
                order: [
                    ["id","ASC"]
                ]
            })
            res.status(200).json(genres);
        } catch (err) {
            next(err);
        }
    }

    static async showGenreById(req, res, next) {
        const { id } = req.params;
        try {
            const genre = await Genre.findByPk(+id);

            if (!genre) throw { name: "ErrorNotFound" };

            res.status(200).json(genre);
        } catch (err) {
            next(err);
        }
    }

    static async deleteGenre(req, res, next) {
        const { id } = req.params;
        try {
            const findGenre = await Genre.findByPk(+id);

            const deletedGenre = await Genre.destroy({
                where: {
                    id: +id
                }
            })

            if (!deletedGenre) throw { name: "ErrorNotFound" };


            res.status(200).json({
                statusCode: 200,
                message: `Successfully deleted the genre ${findGenre.name}`,
            });
        } catch (err) {
            next(err);
        }
    }

    static async editGenre(req, res, next) {
        const { id } = req.params;
        const { name } = req.body;
        try {

            const findGenre = await Genre.findByPk(+id);
            if (!findGenre) throw { name: "ErrorNotFound" };

            await Genre.update(
                { name },
                {
                    where: {
                        id: +id
                    }
                }
            );

            res.status(201).json({
                message: `Successfully edited the genre ${findGenre.name}`,
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = GenreController;
