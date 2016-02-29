(function(){
	'use strict'
	app.config([
		'$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'/home.html',
				controller:'HomeCtrl'
			})
			.state('contact', {
				url: "/contact",
				templateUrl:'/contact.html',
				controller:'ContactCtrl'
			})
			.state('aboutCar', {
				url: "/aboutCar",
				templateUrl:'/aboutCar.html',
				controller:'AboutCar'
			 })
			.state('car', {
				url: "/cars/:carId",
				templateUrl:'template/car-detail.html',
				controller: 'CarDetailCtrl'
			})
			.state('registration', {
				url: "/registration",
				templateUrl:'/template/registration.html',
				controller:'RegistrationCtrl'
			})
			.state('privacy', {
				url: "/privacy",
				templateUrl:'/privacy.html',
				controller:'PrivacyCtrl'
			})
			.state('login', {
				url: "/login",
				templateUrl:'/template/login.html',
				controller:'LoginCtrl'
			});
	}]);
}())