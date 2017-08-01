import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text      : { type: String, required: true },
    completed   : { type: Boolean }
});

mongoose.model('Todo', TodoSchema);
