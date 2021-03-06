const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connent to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

     db.collection('Todos').find().toArray().then((docs) => {
         console.log('Todos:');
         console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('Unable to fetch todos', err);
     });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    //db.collection('Users').find({name: 'Penny'}).toArray().then((docs) => {
    //    console.log(JSON.stringify(docs, undefined, 2));
    //});

    //client.close();
});