var mongoose = require('mongoose').set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {
    mongoose
};