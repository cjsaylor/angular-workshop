(function() {
	"use strict";
    var app = angular.module('workshop', []);

    app.controller('Catalog', ['$scope', '$http', function($scope, $http) {
        $scope.loading = true;
        $http.get('../data/catalog.json')
            .then(function(data) {
                $scope.items = data.data;
            })
            .finally(function() {
                $scope.loading = false;
            });
    }]);

}());
