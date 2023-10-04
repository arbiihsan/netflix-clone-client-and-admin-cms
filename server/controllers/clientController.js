const { comparePassword } = require("../helpers/bcrypt");
const { signToken, verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

class ClientController {
    static test(req, res) {
        res.send('ini test')
    }

    static async registerAdmin(req, res, next) {
        const { username, email, password, role, phoneNumber, address } = req.body
        console.log(req.body);
        try {
            const userCreated = await User.create({
                username,
                email,
                password,
                role: 'admin',
                phoneNumber,
                address,
            });

            res.status(201).json({
                id: userCreated.id,
                username: userCreated.username,
                email: userCreated.email,
                role: userCreated.role,
            });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        // res.send('ini test')
        const { email, password } = req.body;

        console.log(email, password);
        try {
            if (!email) throw { name: "Email can't be empty" };
            if (!password) throw { name: "Password can't be empty" };

            const user = await User.findOne({
                where: {
                    email
                }
            });

            if (!user) throw { name: "InvalidLogin" };

            const isValidPassword = comparePassword(password, user.password);

            if (!isValidPassword) throw { name: "InvalidLogin" }
            const accessToken = signToken({
                id: user.id,
                role: user.role,
                email: user.email,
            });

            res.status(200).json({
                access_token: accessToken,
                email: user.email,
                role: user.role,
                id: user.id,
            });

        } catch (err) {
            next(err);
        }
    }
}

module.exports = ClientController;
