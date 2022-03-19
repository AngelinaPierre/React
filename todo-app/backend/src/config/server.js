const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const AllowCors = require('./cors')
// criando uma instancia do express e atribuindo a variavel server
const server = express()

// criando middlewares para as requisições.
server.use(bodyParser.urlencoded({
    extended: true,
}))
server.use(bodyParser.json())
// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.use(AllowCors)
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})

module.exports = server
