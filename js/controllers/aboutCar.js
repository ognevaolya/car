(function(){
	'use strict'
	app.controller('AboutCar', ['$scope','RESTservice',
	function ($scope, RESTservice) {
		$scope.cars = [];
        RESTservice.getCars()
            .then(function (res) {
                $scope.cars = res.data;
            });
	}]);
}())