var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var productCtrl = require('./features/products/productCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodePort = 3002;

var mongoUri = 'mongodb://localhost:27017/ecommercePart2'
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('mongodb LiftOFF!');
})

// var db = mongojs('catItems', ['cart']);

app.get('/api/products', productCtrl.read)

app.post('/api/products', productCtrl.create)

app.put('/api/products', productCtrl.update)

app.delete('/api/products', productCtrl.delete)






app.listen(nodePort, function() {
    console.log('listening on port ' +nodePort);
})