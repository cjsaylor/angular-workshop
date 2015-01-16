define(function() {
    var setLoadingDone = function() {
        this.loading = false;
    };
    return ['$scope', 'catalog', function($scope, catalog) {
        $scope.loading = true;
        $scope.selectedColors = [];
        catalog.retrieve()
            .then(function(items) {
                $scope.items = items;
            })
            .finally(setLoadingDone.bind($scope));
        $scope.$root.$on('colorFiltered', function(e, colors) {
            $scope.selectedColors = colors;
        });
    }];
});
