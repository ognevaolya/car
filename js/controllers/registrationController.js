(function(){
	'use strict'
	app.controller('RegistrationCtrl', ['$scope', 'RESTservice',
	function ($scope, RESTservice) {
		$scope.registrationData = {};
		$scope.registration = function() {
			RESTservice.registration($scope.registrationData);
			console.log($scope.registrationData);
		}
	}]);
}())