# Routing

Angular provides a route system that works off of a hash-based URI from the URL. This routing
system is packaged in a standalone module called "ngRoute". In this tutorial, the "ngRoute" module
is provided under `lib/angular-route.js`.

[More indepth information on routing](https://code.angularjs.org/1.3.10/docs/api/ngRoute)

## Assignment

1. Include `lib/angular-route.js` in the `index.html`.
2. Copy `checkout.html` to your working directory if your working directory is not this directory.
3. Move the body of `index.html` (from the `div.row` and below under the main `div.container`) into a new `main.html`
4. Insert an `ng-view` directive on the `div.container` that contained the contents of `main.html`.
5. Configure the `app` module by injecting the `$routeProvider` into the configuration block
   and add the following routes:
   * '/' - This should load the `main.html` as a template.
   * '/checkout' - This should load the `checkout.html` as a template.
   * Add a default route that redirects to '/'.
