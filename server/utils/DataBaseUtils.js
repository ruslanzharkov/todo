const Todo = require('../models/Todo');

class DataBaseUtils {

    listTodo(req, res) {
        return Todo.find()
            .then((todos) => res.send(todos));
    }

    createTodo(data) {
        const todo = new Todo({
            text: data.text,
            completed: false
        });

        return todo.save();
    }


    updateTodo(req, res) {
        return Todo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then((todos) => res.send(todos));
    }


    deleteTodo(id) {
        return Todo.findById(id).remove();
    }
}

module.exports = new DataBaseUtils();
