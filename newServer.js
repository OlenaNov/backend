// const express = require('express');
// const { connectToDb, getDb } = require('./db');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const ITEMS = require('./item.json');
// const LIST = require('./orders-list.json');
// const ORDERS = require('./orders.json');

// const PORT = 3000;


// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// let db;
// const orders = ORDERS;

// connectToDb(err => {
//     if (!err) {
//         app.listen(PORT, (err) => {
//             err ? console.log(err) : console.log(`Listening port ${PORT}`);
//             });
//     db = getDb();
//     } else {
//         console.log(`DB connection error ${err}`);
//     }
// });

// app.get('/items', (req, res) => {
//     console.log(res);
//     const items = ITEMS;

//     db
//     .collection('items')
//     .find()
//     .toArray(item => 
//         items.push(item))
//     .then(() => {
//         res
//         .status(200)
//         .json(items);
//     })
//     .catch(() => {
//         res
//         .status(500)
//         .json({ error: "Error"})
//     });

// });

// app.get('/po-list', (req, res) => {
//     console.log(res);
//     const list = LIST;

//     db
//     .collection('po-list')
//     .find()
//     .toArray(item => 
//         list.push(item))
//     .then(() => {
//         res
//         .status(200)
//         .json(list);
//     })
//     .catch(() => {
//         res
//         .status(500)
//         .json({ error: "Error"})
//     });

// });

// app.get('/orders', (req, res) => {
//     console.log(res);
//     // const orders = ORDERS;

//     db
//     .collection('orders')
//     .find()
//     .toArray(item => 
//         orders.push(item))
//     .then(() => {
//         res
//         .status(200)
//         .json(orders);
//     })
//     .catch(() => {
//         res
//         .status(500)
//         .json({ error: "Error"})
//     });

// });

// app.post('/orders', (req, res) => {
//     console.log(req.body);
//     const newOrder = req.body;
//     // const orders = ORDERS;

//     if(newOrder) {
//         orders.push(newOrder);
//     };

//     db
//     .collection('orders')
//     .find(req.nameOrder)
//     .toArray(item => 
//         orders.push(item))
//     .then(() => {
//         res
//         .status(201)
//         .json({order: newOrder});
//     })
//     .catch(() => {
//         res
//         .status(500)
//         .json({ error: "Error"})
//     });

// });