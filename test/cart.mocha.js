describe('Cart Module', function() {

    describe('Adding an item to the cart', function() {
        var cart;
        beforeEach(module('cart'));
        beforeEach(inject(function(_cart_) {    
            cart = _cart_;
        }));

        it('should contain the item I just added.', function() {
            cart.add({ id: 1, price: 5 });
            expect(cart.get()).to.have.property('items');
            expect(cart.get().items[1]).to.have.property('id', 1);
        });
        it('should increase the total value of the cart', function() {
            cart.add({ id: 1, price: 5 });
            cart.add({ id: 2, price: 3 });
            expect(cart.get().total).to.be.equal(8);
        });
        it('should not be empty', function() {
            expect(cart.isEmpty()).to.be.true();
            cart.add({ id: 1, price: 3 });
            expect(cart.isEmpty()).to.be.false();
        });
    });

    describe('exposing cart service add to the scope', function() {
        var cart, $compile, $rootScope;
        beforeEach(module('cart'));
        beforeEach(inject(function(_cart_, _$rootScope_, _$compile_) {
            cart = _cart_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('should add the addItem method to the scope.', function() {
            var element = $compile('<a href="" aw-cart-add></a>')($rootScope);
            $rootScope.$digest();
            expect($rootScope).to.have.ownProperty('addItem');
        });
        it('should add an item to the cart when calling the scope method', function() {
            var element = $compile('<a href="" aw-cart-add></a>')($rootScope);
            $rootScope.$digest();
            $rootScope.item = {
                id: 1,
                price: 3
            };
            $rootScope.addItem();
            expect(cart.isEmpty()).to.be.false();
            expect(cart.get().items[1]).to.have.property('id', 1);
        });
    })
});
