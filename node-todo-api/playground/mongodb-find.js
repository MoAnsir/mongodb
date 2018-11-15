const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDb server');
    const db = client.db('todoApp');

    db.collection('todos').insertOne({
        text: 'Some text',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON)
    })

    client.close();
});