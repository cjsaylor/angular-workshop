(function() {
	"use strict";
    var app = angular.module('workshop', []);

    app.controller('Catalog', ['$scope', function($scope) {
        $scope.items = [
            {  
                "id":1,
                "name":"Brown Shirt",
                "color":"brown",
                "price":15
            },
            {  
                "id":2,
                "name":"White Shirt",
                "color":"white",
                "price":15
            },
            {  
                "id":3,
                "name":"Yellow Shirt",
                "color":"yellow",
                "price":15
            },
        ];
    }]);

}());
