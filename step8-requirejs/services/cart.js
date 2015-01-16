define(function() {
    var cart = {
        items: {},
        total: 0
    };

    var Cart = function() {};

    var getTotal = function() {
        var total = 0;
        if (this.isEmpty()) {
            return total;
        }
        Object.keys(cart.items).forEach(function(id) {
            total += cart.items[id].price * cart.items[id].quantity;
        });

        return total;
    };

    Cart.prototype.add = function(item) {
        if (!cart.items[item.id]) {
            item.quantity = 1;
            cart.items[item.id] = item;
        } else {
            cart.items[item.id].quantity++;
        }
        cart.total = getTotal.call(this);
    };

    Cart.prototype.get = function() {
        return cart;
    };

    Cart.prototype.isEmpty = function() {
        return Object.keys(cart.items).length === 0;
    };

    return Cart;
});
