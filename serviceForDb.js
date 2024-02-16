const Order = require('./service/schemas/order');

const getAllOrders = async () => {
    return Order.find();
};

const getOrderById = async id => {
    return Order.findOne({_id: id});
};

// const getOrderByIName = async name => {
//     return Order.findOne({ name: name });
// };

const createOrder = async ({ name, date, total, totalPrice, status, items }) => {
    return Order.create({ name, date, total, totalPrice, status, items });
};

const updateOrder = async (id, fields) => {
    return Order.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeOrder = async id => {
    return Order.findByIdAndRemove({ _id: id });
};


const getAllItems = async () => {
    return Item.find();
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    removeOrder,
    getAllItems,
};