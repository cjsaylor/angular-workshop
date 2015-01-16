define(function() {
    return ['$scope', 'catalog', function($scope, catalog) {
        this.selectedColors = [];
        catalog.availableColors()
            .then(function(colors) {
                $scope.colors = colors;
            });
        this.filterColor = function() {
            var selectedColors = this.selectedColors;
            var selected = Object.keys(selectedColors)
                .filter(function(color) {
                    return selectedColors[color];
                });
            $scope.$root.$emit('colorFiltered', selected);
        }.bind(this);
    }];
});
