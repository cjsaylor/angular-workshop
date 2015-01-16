# Scope

In Angular, there is a single over-arching scope (`$rootScope`) that all other scopes inherit. Many different elements
of Angular create scopes as part of the their function such as controllers and directives. The scope is a mechanism used
to communicate model information to the view layer. It can also act as a means of communicating between isolated scopes 
of other elements by way of event emission.

[More indepth information on scopes](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)

## Assignment

In this assignment, we're going to create a controller called `Catalog` that will expose some item information
to the view in order for it to consume and show a list of those items.

1. Construct an Angular controller (`Catalog`).
2. Modify `index.html` to have the #catalog element use the `Catalog` controller via an `ng-controller` directive.
3. Modify `index.html` to remove the hardcoded items in the list and use an `ng-repeat` using the exposed
   item list from the `Catalog` controller.
