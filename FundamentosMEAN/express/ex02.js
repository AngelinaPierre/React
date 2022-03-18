const express = require('express')
const server = express()

// midlware 1 - mapeamento raiz
server.get('/', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
// midlware 2 - mapeamento raiz
server.get('/', function(req,res){
  console.log('Resposta...')
  res.send('<h1> Olá Express!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
