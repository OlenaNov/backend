const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
    name: {
        type: String,
        unique: true, 
        required: [true, 'Name is required']},
    date: {
        type: String,
        required: [true, 'Date is required']},
    total: {
        type: Number,
        required: [true, 'Total is required']},
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required']},
    status: {
        type: Boolean,
        required: [true, 'Status price is required']
    },
    items: Array,
});

// const Order = mongoose.model('order', order);
module.exports = mongoose.model('Order', orderSchema);

// module.exports = Order;