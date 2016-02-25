'use strict';

var index = angular.module('index', ['ngRoute', 'ngResource']); 

	index.controller('HomeCtrl', function ($scope) {
		$scope.cars = [
    	{"number": 1,
		"id": "bmw-x1",
		"imageUrl" : "	img/bmw-x1.jpg",
		"name": "BMW-X1",
		"information": "The X1's turbo four-cylinder (228 horsepower, 258 pounds-feet of torque) has adequate power for just about all situations, but noticeable — and inconsistent — accelerator lag hampers things from a standstill. Still, once you get past the initial gremlins, power comes early and stays late, and the standard eight-speed automatic transmission finds the right gear without too much delay."},
		{"number": 2,
		"id": "ford-escape",
		"imageUrl" : "img/ford-escape.jpg",
		"name": "Ford Escape",
		"information": "A trio of engines are available, and I found the optional turbocharged 2.0-liter four-cylinder in my test SE model to be just right. With 231 horsepower, it's the most robust engine in the stable, providing quick, smooth takeoffs and not a hint of turbo lag. The Escape's six-speed automatic aptly delivers power on demand for strain-free highway passing and hill climbs."},
		{"number": 3,
		"id": "audi-q7",
		"imageUrl" : "img/audi-q7.jpg",
		"name": "Audi-Q7",
		"information": "A trio of engines are available, and I found the optional turbocharged 2.0-liter four-cylinder in my test SE model to be just right. With 231 horsepower, it's the most robust engine in the stable, providing quick, smooth takeoffs and not a hint of turbo lag. The Escape's six-speed automatic aptly delivers power on demand for strain-free highway passing and hill climbs."},
		{"number": 4,
		"id": "jaguar-xf",
		"imageUrl" : "img/jaguar-xf.jpg",
		"name": "Jaguar-XF",
		"information": "A trio of engines are available, and I found the optional turbocharged 2.0-liter four-cylinder in my test SE model to be just right. With 231 horsepower, it's the most robust engine in the stable, providing quick, smooth takeoffs and not a hint of turbo lag. The Escape's six-speed automatic aptly delivers power on demand for strain-free highway passing and hill climbs."}
        ];
	});

	index.config([
		'$routeProvider', '$locationProvider', 
		function($routeProvide) {
		$routeProvide
			.when('/', {
				templateUrl:'/home.html',
				controller:'HomeCtrl'
			})
			.when('/contact', {
				templateUrl:'/contact.html',
				controller:'ContactCtrl'
			})
			.when('/aboutCar', {
				templateUrl:'/aboutCar.html',
				controller:'AboutCar'
			 })
			.when('/cars/:carId', {
				templateUrl:'template/car-detail.html',
				controller: 'CarDetailCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

index.controller('ContactCtrl', function ($scope, $http, $location) {

});

index.controller('AboutCar', function ($scope, $http, $location) {

});

index.controller('HomeCtrl', [
  '$scope','$http', '$location', 'Car', 
  function ($scope, $http, $location, Car) {
    Car.query({carId: 'cars'}, function (data) {
      $scope.cars = data;
    })
  $scope.cars = Car.query();
  }
]);

index.controller('CarDetailCtrl', function ($scope, $http, $location, $routeParams) {
	$scope.carId = $routeParams.carId;
	var url = 'cars/'+$routeParams.carId+'.json';

	$http.get(url).success(function (data) {
		$scope.car = data;
		$scope.mainImageUrl = data.images[0];
	});
	$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
});

index.factory('Car', [
  '$resource', function ($resource) {
    return $resource('cars/:carId.:format', {
      carId: 'cars',
      format: 'json',
      apiKey: 'someKeyThis'
      /* http://localhost:8000/phones/phones.json?apiKey=someKeyThis */
    }, {
      update: {method: 'PUT', params: {carId: '@car'}, isArray: true}
    });
  }
]);