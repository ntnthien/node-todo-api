// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(uri, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to inser todo', err);
    //     }
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5959ec43a0d26d615ea7d1a7')
    //  }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Daniel'
    }).toArray().then((docs) => {
        console.log('User');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.close();
});

