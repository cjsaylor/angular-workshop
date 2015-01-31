define([
    'angular',

    'controllers/catalog',
    'controllers/filter',

    'filters/capitalize',
    'filters/colors',

    'services/catalog'
], function(
    angular,

    catalogController,
    filterController,

    capitalize,
    colors,

    catalogService
) {
    var catalog = angular.module('catalog', []);

    catalog
        .controller('Catalog', catalogController)
        .controller('Filter', filterController);

    catalog
        .filter('capitalize', capitalize)
        .filter('colors', colors);

    catalog.service('catalog', catalogService);
}); 
