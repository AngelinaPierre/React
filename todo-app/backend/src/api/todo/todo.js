const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        requeired: true,
    },
    done: {
        type: Boolean,
        requeired: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = restful.model('Todo', todoSchema)