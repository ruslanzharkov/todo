import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Todo';

const Todo = mongoose.model('Todo');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listTodo() {
    return Todo.find();
}

export function createTodo(data) {
    const todo = new Todo({
        text: data.text,
        completed: false
    });

    return todo.save();
}

export function updateTodo(id, data) {
    return Todo.findByIdAndUpdate({_id: id}, data);
}

export function deleteTodo(id) {
    return Todo.findById(id).remove();
}

