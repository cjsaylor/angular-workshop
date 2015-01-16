(function(window) {
    window.require.config({
        baseUrl: '/step8-requirejs',
        paths: {
            angular: '../lib/angular',
            angularRoute: '../lib/angular-route'
        },
        shim: {
            'angular' : {'exports' : 'angular'},
            'angularRoute': ['angular']
        },
        priority: [
            'angular'
        ]
    });

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = "NG_DEFER_BOOTSTRAP!";

    window.require([
        'angular',
        'modules/app'
    ], function(angular, app) {
        angular.element().ready(function() {
            angular.resumeBootstrap([app['name']]);
        });
    });
}(window));
