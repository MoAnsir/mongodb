const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connent to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').find({
        _id: new ObjectID('5bd19c428c2c80554df30075')
    }).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});