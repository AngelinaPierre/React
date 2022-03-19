const express = require('express')

module.exports = function(server){
    //Api Routes
    const router = express.Router()
    server.use('/api', router)

    //todo routes
    const todoService = require('../api/todo/todoService')
    //registrando rotas - registro dos verbos http?
    todoService.register(router,'/todos')
}