const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderItems: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: {
        type: Number,
        default: 0
    }
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = { Order }