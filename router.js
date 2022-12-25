const Router = require('express')
const router = new Router()
const controller = require ('./controller')
const {check} = require ('express-validator')
const middleware = require ('./middleware/middleware')

router.post('/registration',[
    check('username', 'User name cannot be emty').notEmpty(),
    check('password', 'Password cannot be less than 4 and more than 10 symbols').isLength({min:4, max: 10 })
], controller.registration)
    
router.post('/login', controller.login)
router.get('/user', middleware, controller.getUsers)

module.exports = router