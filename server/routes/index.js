const router = require('express').Router()
const userRoutes = require('./user')
const movieRoutes = require('./movie')
const genreRoutes = require('./genre')
const authentication = require('../middleware/authentication')
const { authorizeAdmin } = require('../middleware/authorization')
const ClientController = require("../controllers/clientController")

router.use(userRoutes)
router.post("/login", ClientController.login);

router.use(authentication)

router.post("/register", authorizeAdmin, ClientController.registerAdmin)
router.use(movieRoutes)
router.use(genreRoutes)


module.exports = router
