const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
routes.get('/users/:id', UserController.show)

module.exports = routes;