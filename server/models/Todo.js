const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text      : { type: String, required: true },
    completed   : { type: Boolean }
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
