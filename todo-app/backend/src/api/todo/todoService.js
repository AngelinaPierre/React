const Todo = require('./todo')

Todo.methods([
    'get','post','put','delete',
])

// tras a resposta atualizada
Todo.updateOptions({
    new: true,
    runValidators: true,
})

module.exports = Todo