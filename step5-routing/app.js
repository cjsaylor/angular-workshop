(function() {
	"use strict";
    var app = angular.module('workshop', ['ngRoute']);

    var setLoadingDone = function() {
        this.loading = false;
    };

    // Config routes
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html'
            })
            .when('/checkout', {
                templateUrl: 'checkout.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

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

    app.directive('awCartAdd', ['cart', function(cart) {
        return {
            link: function(scope) {
                scope.addItem = function() {
                    cart.add(scope.item);
                }
            }
        };
    }]);

    app.directive('awCart', ['cart', function(cart) {
        return {
            controller: ['$scope', function($scope) {
                $scope.cart = cart.get();
                $scope.lineTotal = function(item) {
                    return item.price * item.quantity;
                };
                $scope.isEmpty = cart.isEmpty;
            }]
        }
    }]);

    app.directive('awCartList', function() {
        return {
            require: '^awCart',
            templateUrl: 'cart.html'
        }
    });

    // View filter that capitalizes words
    // Use: {{ sentence | capitalize }}
    app.filter('capitalize', function() {
        return function(input) {
            return input.split(' ').map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            }).join(' ');
        };
    });

    app.filter('colors', function() {
        return function(input, colors) {
            if (!colors.length) {
                return input;
            }
            return input.filter(function(item) {
                return colors.indexOf(item.color) >= 0;
            });
        }
    });

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

    app.service('cart', function() {
        var cart = {
            items: {},
            total: 0
        };

        var add = function(item) {
            if (!cart.items[item.id]) {
                item.quantity = 1;
                cart.items[item.id] = item;
            } else {
                cart.items[item.id].quantity++;
            }
            cart.total = getTotal();
        };

        var get = function() {
            return cart;
        };

        var getTotal = function() {
            var total = 0;
            if (isEmpty()) {
                return total;
            }
            Object.keys(cart.items).forEach(function(id) {
                total += cart.items[id].price * cart.items[id].quantity;
            });

            return total;
        }

        var isEmpty = function() {
            return Object.keys(cart.items).length === 0;
        }

        return {
            add: add,
            get: get,
            isEmpty: isEmpty
        };
    })

}());
