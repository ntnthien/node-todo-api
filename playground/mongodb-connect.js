// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

var user = {
    name: 'Daniel',
    age: 23
};

var {name} = user;
console.log(name);

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

    //     console.log(JSON.stringify(result.ops));
    // });

    // Insert new doc into Users (name, age, localtion)

    // db.collection('Users').insertOne({
    //     name: 'Daniel',
    //     age: '23',
    //     location: 'Ho Chi Minh'
    // }, (err, result) => {
    //     if (err) {
    //          return console.log('Unable to inser todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })

    db.close();
});

