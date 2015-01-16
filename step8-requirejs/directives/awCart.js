define(function() {
    return ['cart', function(cart) {
        return {
            controller: ['$scope', function($scope) {
                $scope.cart = cart.get();
                $scope.lineTotal = function(item) {
                    return item.price * item.quantity;
                };
                $scope.isEmpty = cart.isEmpty;
            }]
        }
    }];
});
