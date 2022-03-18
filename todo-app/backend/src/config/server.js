const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
// criando uma instancia do express e atribuindo a variavel server
const server = express()

// criando middlewares para as requisições.
server.use(bodyParser.urlencoded({
    extended: true,
}))
server.use(bodyParser.json())
// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})

