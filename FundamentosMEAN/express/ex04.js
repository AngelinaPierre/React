const express = require('express')
const server = express()

server.route('/clientes')
  .get(
    (req,res) => res.send('Lista de Clientes')
  )
  .post(
    (req,res) => res.send('Novo Cliente')
  )
  .put(
    (req,res) => res.send('Altera Cliente')
  )
  .delete(
    (req,res) => res.send('Remove Cliente')
  )
  .patch(
    (req,res) => res.send('Patch cliente')
  )
  .copy(
    (req,res) => res.send('Copiando Cliente')
  )
  // nao aparece +status=200 ok
  .head(
    (req, res) => res.send('Head Cliente')
  )
  .options(
    (req,res) => res.send('Option Cliente')
  )
  .link(
    (req,res) => res.send('Link Cliente')
  )
  .unlink(
    (req,res) => res.send('Unlink CLiente')
  )
  .purge(
    (req,res) => res.send('Purge Cliente')
  )
  .lock(
    (req,res) => res.send('Lock Cliente')
  )
  .unlock(
    (req,res) => res.send('Unlock Cliente')
  )
  .propfind(
    (req, res) => res.send('Propfind Cliente')
  )



server.listen(3000, () => console.log('BACKEND is running...'))
