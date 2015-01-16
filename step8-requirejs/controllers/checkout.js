define(function() {
    return ['$scope', '$location', 'cart', function($scope, $location, cart) {
        if (cart.isEmpty()) {
            $location.path('/');
        }
        $scope.expirationMonths = Array.apply(null, Array(12)).map(function(el, i) {
            return ('00' + (i + 1)).substr(-2, 2); 
        });
        $scope.expirationYears = Array.apply(null, Array(10)).map(function(el, i) {
            return parseInt(new Date().getFullYear()) + i;
        });
    }];
});
