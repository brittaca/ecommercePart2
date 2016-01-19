var app = angular.module('catRoutes', [ui.router]);

app.config(function ($stateProvider $urlRouterProvider, $httpProvider) {

	$state.Provider 

		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '/templates/admin.html',
		})

		.state('products', {
			url: '/products',
			templateUrl: '/templates/products.html'
		})
})

