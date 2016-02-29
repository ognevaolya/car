(function(){
    'use strict';
    app.factory('RESTservice', ['$http', '$q', 
    function($http, $q){
        var Service = {
            getCar: function (id) {
                return $http.get('cars/' + id + '.json');
            },
            getCars: function () {
                return $http.get('cars/cars.json');
            },
            login: function(data) {
                return $http.post('/login', data);
            }
        }
        return Service;
    }]);
}())

