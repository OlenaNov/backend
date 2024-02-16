
const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const app = require("./app");
require('dotenv').config();




// const { Item, Order } = require('./service/schemas');


const PORT = process.env.PORT || 3000;

const DB_HOST = process.env.DB_HOST;

// const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

// { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true, 
//     promiseLibrary: global.Promise,
//     useFindAndModify: false 
// }
const connection = mongoose.connect(DB_HOST);

connection.then(() => {
    app.listen(PORT, () => 
    console.log(`Server running. Use our API on port: ${PORT}`))
}).catch(err => console.log(`Server not running.Error message: ${err.message}`));





// const result = order.save();


// findOne([query], [options]);
// findOneAndRemove([query], [options]);
// remove([query], [options]);
// update([query], [update], [options]);
// findOneAndRemove([query], [update], [options]);