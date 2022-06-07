const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser')

const { Order } = require('./db/models/order.model');

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

app.post('/orders', (req,res) => {
    //Create a new order
    let orderItems = req.body.orderItems;

    let newOrder = new Order({
        orderItems
    });
    newOrder.save().then((orderDoc) => {
        res.send(orderDoc);
    }) 
});

app.patch('/orders/:id', (req,res) => {
    //Update an order
    Order.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

app.delete('/orders/:id', (req,res) => {
    //Delete an order
    Order.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
        deleteTasksFromList(removedListDoc._id);
    })
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})