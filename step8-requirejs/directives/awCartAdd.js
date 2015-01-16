define(function() {
    return ['cart', function(cart) {
        return {
            link: function(scope) {
                scope.addItem = function() {
                    cart.add(scope.item);
                }
            }
        };
    }];
});
