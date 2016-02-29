(function(){
    'use strict'
    app.controller('HomeCtrl', ['$scope','RESTservice', 
    function ($scope, RESTservice) {
        $scope.cars = [];
        RESTservice.getCars()
            .then(function (res) {
                $scope.cars = res.data;
            });
    }]);
}())