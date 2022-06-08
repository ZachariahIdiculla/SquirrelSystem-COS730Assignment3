const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName: {
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

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = { Inventory }