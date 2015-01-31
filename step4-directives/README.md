# Directives

Directives are a means of connecting your application to html elements. Directives are
applyed by html attributes (or custom tag names) on the dom. They can be used from anything
from attaching an html template to attaching data to the scope of that attribute. You have
already used directives up until this point: `ng-app`, `ng-repeat`, `ng-controller`.

[More indepth information on filters](https://code.angularjs.org/1.3.10/docs/guide/directive)

## Assignment

1. Create a directive named `awCart` that uses the `cart` service to call `get()` and expose
   the cart contents to to scope. Also:
   * The directive should expose a method to calculate the line total of an item on the cart.
   * Expose `isEmpty` method from the cart service to the scope.
2. Create a directive called `awCartList` that requires the controller of the directive from `awCart`
   and uses a template `cart.html` that contains everything under `ul.media-list` of the `#cart`
   component.
3. Create a directive call `awCartAdd` that exposes the `add` method from the `cart` service. Use this
   directive to enable the "add item" button to add an item to the cart.
