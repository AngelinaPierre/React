const Todo = require('./todo')

Todo.method([
    'get','post','put','delete'
])

Todo.updateOptions({
    new: true,
    runValidators: true,
})

module.exports = Todo