const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connent to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({test: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({test: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Penny'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5beb138b89435c47385361cf')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});