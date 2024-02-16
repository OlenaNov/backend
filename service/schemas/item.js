const { Schema, model, default: mongoose } = require("mongoose");

const itemSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required' ]},
    price: {
        type: Number,
        required: [true, 'Price is required']},
});

// export const Item = mongoose.model('item', item);
module.exports = mongoose.model('Item', itemSchema);

// module.exports = Item;