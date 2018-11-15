//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Benny', age: 34};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connent to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     test: 'Walk the dog',
    //     completed: true
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to Todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Henny',
    //     age: 65,
    //     location: 'London'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to Todo', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});