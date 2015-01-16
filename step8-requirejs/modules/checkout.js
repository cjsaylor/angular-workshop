define([
    'angular',

    'controllers/checkout',

    'directives/awCardExpiration',

    'modules/cart'
], function(
    angular,

    checkoutController,

    awCardExpiration
) {
    var checkout = angular.module('checkout', [
        'cart'
    ]);

    checkout.controller('Checkout', checkoutController);

    checkout.directive('awCardExpiration', awCardExpiration);

    return checkout;
});
