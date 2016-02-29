(function(){
	'use strict'
	app.controller('CarDetailCtrl', ['$scope', 'RESTservice', '$stateParams', 
	function ($scope, RESTservice, $stateParams) {
		$scope.carId = $stateParams.carId;
		$scope.car = {};
		RESTservice.getCar($scope.carId)
			.then(function (res) {
				$scope.car = res.data;
				$scope.mainImageUrl = res.data.images[0];
			});
		$scope.setImage = function(imageUrl) {
	      $scope.mainImageUrl = imageUrl;
	    };
	}]);
}())