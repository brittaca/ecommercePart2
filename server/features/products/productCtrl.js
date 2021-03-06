var productModel = require('product');

module.export = {
	read: function(req, res) {
		Product.find(req.query)
		.exec(function(err, result) {
			if(err) return res.status(500).send(err);
			else res.send(result);
		})
	},

	create: function(req, res) {
		var product = new productModel(req.body);

		Product.save(function(err, result) {
			if(err) return res.status(500).send(err);
			else res.send(result);
		})
	},

	update: function(req, res) {
		Product.findByIdAndUpdate(req.query.id, req.body, function(err, result) {
			if(err) return res.status(500).send(err);
			else res.send(result);
		})
	},

	delete: function(req, res) {
		Product.findByIdAndRemove(req.query.id, function(err, result) {
			if(err) return res.status(500).send(err);
			else res.send(result);
		})
	}
}