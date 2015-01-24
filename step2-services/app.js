(function() {
	"use strict";
    var app = angular.module('workshop', []);

    var setLoadingDone = function() {
        this.loading = false;
    };

    app.controller('Catalog', ['$scope', 'catalog', function($scope, catalog) {
        $scope.loading = true;
        catalog.retrieve()
            .then(function(items) {
                $scope.items = items;
            })
            .finally(setLoadingDone.bind($scope));
    }]);

    app.controller('Filter', ['$scope', 'catalog', function($scope, catalog) {
        catalog.availableColors()
            .then(function(colors) {
                $scope.colors = colors;
            });
    }]);

    app.service('catalog', ['$http', '$q', function($http, $q) {
        var catalogCache;
        var retrieve = function() {
            var deferred = $q.defer();
            if (catalogCache) {
                return catalogCache;
            } else {
                $http.get('../data/catalog.json')
                    .success(deferred.resolve)
                    .error(deferred.reject);
            }
            return catalogCache = deferred.promise;
        };

        var availableColors = function() {
            return retrieve()
                // Map the colors
                .then(function(items) {
                    return items.map(function(item) {
                        return item.color;
                    });
                })
                // Filter out duplicates
                .then(function(colors) {
                    var seen = {};
                    return colors.filter(function(color) {
                        return seen[color] ? false : seen[color] = true;
                    });
                });
        }
        return {
            retrieve: retrieve,
            availableColors: availableColors
        };
    }]);

}());
