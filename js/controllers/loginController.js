(function(){
    'use strict'
    app.controller('LoginCtrl',['$scope', 'RESTservice', 
	function ($scope, RESTservice) {
		$scope.loginData = {};
		$scope.submit = function() {
			RESTservice.login($scope.loginData);
			console.log($scope.loginData);
		}
	}]);
}())