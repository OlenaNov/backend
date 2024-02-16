// const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');

// const URL = 'mongodb+srv://OlenaNov:0668829151n@cluster0.t22rnxt.mongodb.net/?retryWrites=true&w=majority/po';

// let dbConnection;

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient
//         .connect(URL)
//         .then(client => {
//             console.log('Connected to MongoDB');
//             dbConnection = client.db();
//             return cb();
//         })
//         .catch(err => cb(err));
//     },
//     getDb: () => dbConnection
// }