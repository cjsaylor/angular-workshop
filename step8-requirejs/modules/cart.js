define([
    'angular',

    'services/cart',

    'directives/awCartAdd',
    'directives/awCart',
    'directives/awCartList'
], function(
    angular,

    cartService,

    awCartAdd,
    awCart,
    awCartList
) {
    var cart = angular.module('cart', []);

    cart.service(cartService);
    
    cart
        .directive('awCartAdd', awCartAdd)
        .directive('awCart', awCart)
        .directive('awCartList', awCartList);

    return cart;
});
