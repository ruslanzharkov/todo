const mongoose = require('mongoose');
const Todo = require('../../server/models/Todo');


describe('Database Tests', function() {

    describe('Connection test', function() {
        mongoose.connect('mongodb://localhost:27017/todos');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to database!');
        });
    });

    describe('Test Database', function() {
        it('New name saved to test database', function(done) {
            var testNote = Todo({
                text: 'Test note',
                completed: false
            });

            testNote.save(done);
        });
        it('Dont save incorrect format to database', function(done) {
            var wrongSave = Todo({
                notName: 'Not important note'
            });
            wrongSave.save(err => {
                if(err) { return done(); }
                throw new Error('Should generate error!');
            });
        });
        it('Should retrieve data from test database', function(done) {
            Todo.find({text: 'Awesome todo!'}, (err, name) => {
                if(err) {throw err;}
                if(name.length === 0) {throw new Error('No data!');}
                done();
            });
        });
    });
});