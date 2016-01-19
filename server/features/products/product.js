var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
	name: {type: String, lowercase: true},
	price: {type: Number, min: 3, index: true},
	category: {type: String, lowercase: true, index: true},
	size: {
		type: String,
		lowercase: true,
		enum: [
			'extra small',
			'small',
			'medium',
			'large',
			'extra large'
			],
		index: true;
	}
});




module.exports = mongoose.model('Product', productSchema);
