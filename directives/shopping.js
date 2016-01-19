app.directive('shopping', function() {

	return {
		restrict: 'E',
		templateUrl: '/templates/products.html'
		scope: {

		}
	},
	controller: '/controllers/productsCtrl.js'
})