// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(uri, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Delete Many
    // db.collection('Todos').deleteMany({text: 'Something123123'}).then((result) => {
    //     console.log(result);
    // });
    
    // Delete one
    // db.collection('Todos').deleteOne({text: 'Something123123'}).then((result) => {
    //     console.log(result);
    // });
    

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Daniel'});
});

