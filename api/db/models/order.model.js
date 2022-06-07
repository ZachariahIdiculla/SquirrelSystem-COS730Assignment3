const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = { Order }