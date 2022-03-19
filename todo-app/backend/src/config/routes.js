const express = require('express')

module.exports = function(server){
    //Api Routes
    const router = express.Router()
    //todo routes
    server.use('/api', router)
    const todoService = require('../api/todo/todoService')
    //registrando rotas - registro dos verbos http?
    todoService.register(router,'/todos')

}