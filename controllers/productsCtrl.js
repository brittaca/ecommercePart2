app.controller('productsCtrl', function($scope, productsService) {

	$scope.products = productsService.getProducts();
})