define([
    'angular',
    'angularRoute',

    'modules/cart',
    'modules/catalog',
    'modules/checkout'
], function(angular) {
    var app = angular.module('workshop', [
        'ngRoute',
        'catalog',
        'cart',
        'checkout'
    ]);

    // Config routes
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html'
            })
            .when('/checkout', {
                controller: 'Checkout',
                templateUrl: 'checkout.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

    return app;   
});
