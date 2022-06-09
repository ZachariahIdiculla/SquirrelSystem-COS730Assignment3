const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser')

const { Order } = require('./db/models/order.model');
const { Inventory } = require('./db/models/inventory.model');

app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.get('/orders', (req,res) => {
    //Get array of all orders from DB
    Order.find({}).then((orders) => {
        res.send(orders)
    });
})

app.get('/inventory', (req,res) => {
    //Get array of all orders from DB
    Inventory.find({}).then((inventory) => {
        res.send(inventory)
    });
})

app.post('/orders', (req,res) => {
    //Create a new order
    let orderItems = req.body.orderItems;
    let price = req.body.price;

    let newOrder = new Order({
        orderItems,
        price
    });
    newOrder.save().then((orderDoc) => {
        res.send(orderDoc);
    }) 
});

app.post('/inventory', (req,res) => {
    //Create a new inventory
    let itemName = req.body.itemName;
    let price = req.body.price;

    let newItem = new Inventory({
        itemName,
        price
    });
    newItem.save().then((inventoryDoc) => {
        res.send(inventoryDoc);
    }) 
});


app.delete('/orders/:id', (req,res) => {
    //Delete an order
    Order.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})

app.delete('/inventory/:id', (req,res) => {
    //Delete an order
    Inventory.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})