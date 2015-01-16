define([
    'angular',

    'controllers/catalog',
    'controllers/filter',

    'filters/capitalize',
    'filters/sizes',

    'services/catalog'
], function(
    angular,

    catalogController,
    filterController,

    capitalize,
    sizes,

    catalogService
) {
    var catalog = angular.module('catalog', []);

    catalog
        .controller('Catalog', catalogController)
        .controller('Filter', filterController);

    catalog
        .filter('capitalize', capitalize)
        .filter('sizes', sizes);

    catalog.service('catalog', catalogService);
}); 
