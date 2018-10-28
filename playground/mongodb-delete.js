const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connent to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name: 'Lenny'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bd112b58f2b1216f0b3fe2a')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});