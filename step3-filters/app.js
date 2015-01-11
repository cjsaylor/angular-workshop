(function() {
	"use strict";
    var app = angular.module('workshop', []);

    var setLoadingDone = function() {
        this.loading = false;
    };

    app.controller('Catalog', ['$scope', 'catalog', function($scope, catalog) {
        $scope.loading = true;
        $scope.selectedColors = [];
        catalog.retrieve()
            .then(function(items) {
                $scope.items = items;
            })
            .finally(setLoadingDone.bind($scope));
        $scope.$root.$on('colorFiltered', function(e, colors) {
            $scope.selectedColors = colors;
        });
    }]);

    app.controller('Filter', ['$scope', 'catalog', function($scope, catalog) {
        this.selectedColors = [];
        catalog.availableColors()
            .then(function(colors) {
                $scope.colors = colors;
            });
        this.filterColor = function() {
            var selectedColors = this.selectedColors;
            var selected = Object.keys(selectedColors)
                .filter(function(color) {
                    return selectedColors[color];
                });
            $scope.$root.$emit('colorFiltered', selected);
        }.bind(this);
    }]);

    // View filter that capitalizes words
    // Use: {{ sentence | capitalize }}
    app.filter('capitalize', function() {
        return function(input) {
            return input.split(' ').map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            }).join(' ');
        };
    });

    app.filter('sizes', function() {
        return function(input, colors) {
            if (!colors.length) {
                return input;
            }
            return input.filter(function(item) {
                return colors.indexOf(item.color) >= 0;
            });
        }
    })

    app.service('catalog', ['$http', '$q', function($http, $q) {
        var catalogCache;
        var retrieve = function() {
            var deferred = $q.defer();
            if (catalogCache) {
                deferred.resolve(catalogCache);
            } else {
                $http.get('../data/catalog.json')
                    .success(function(items) {
                        catalogCache = items;
                    })
                    .success(deferred.resolve)
                    .error(deferred.reject);
            }
            return deferred.promise;
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
