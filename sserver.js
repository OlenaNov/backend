// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const URL = 'mongodb+srv://OlenaNov:0668829151n@cluster0.t22rnxt.mongodb.net/?retryWrites=true&w=majority/po';

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

// const PurchaseOrder = mongoose.model('PurchaseOrder', {
//     name: String,
//     status: String,
//     lineItems: [
//       {
//         name: String,
//         amount: Number
//       }
//     ]
// });

// app.get('/items', async (req, res) => {
//     try {
//         const purchaseOrders = await PurchaseOrder.find();
//         res.json(purchaseOrders);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/po-list', (req, res) => {
//     // Implement logic for '/po-list'
// });

// app.get('/orders', (req, res) => {
//     // Implement logic for '/orders'
// });

// app.post('/orders', async (req, res) => {
//     try {
//         const newOrder = req.body;
//         const createdOrder = await PurchaseOrder.create(newOrder);
//         res.status(201).json({ order: createdOrder });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
