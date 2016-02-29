(function(){
	'use strict'
	app.controller('ContactCtrl', ['$scope', 'RESTservice',
	function ($scope, RESTservice) {
		$scope.contactData = {};
		$scope.contact = function() {
			RESTservice.contact($scope.contactData);
			console.log($scope.contactData);
		}
	}]);
}())