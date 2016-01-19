var express = require('express');
var mongojs = require('mongojs');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var cors = require('cors');

var ObjectId = mongodb.ObjectId;
var app = express();

app.use(bodyParser.json());

var nodePort = 3002;

var db = mongojs('catItems', ['cart']);

app.get('/api/products', function(req, res) {
   
    db.cart.find({}, function(err, result) {
        res.send(result);
    })
})

app.get('/api/products/:id', function(req, res) {
   var itemFinding = ObjectId(req.params.id)
   
    db.cart.find({_id: itemFinding}, function(err, result) {
        res.send(result);
    })
})

app.post('/api/products', function(req, res) {
    var dataInsert = req.body;
    db.cart.insert(dataInsert, function(err, result) {
        if(err) {
            res.status(500).end();
        }
        return res.send(result);
    })
})

app.put('/api/products/:id', function(req, res) {
    var idModifying = ObjectId(req.params.id);
    
    var objModifying = {
        query: {_id: idModifying},
        update: {$set: req.body},
        new: false
    };
    
    db.cart.findAndModify(objModifying, function(err, result) {
        res.send(result);
    })
})

// app.delete('/api/products/:id', function(req, res) {
//     var idDeleting = ObjectId(req.params.id);
    
//     db.cart.remove({_id: idDeleting}, function(err, result) {
//         if(err || result.n === 0) {
//             res.status(500).send('Failed to delete');
//         }
//         res.send(result);
//     })
// })






app.listen(nodePort, function() {
    console.log('listening on port ' +nodePort);
})