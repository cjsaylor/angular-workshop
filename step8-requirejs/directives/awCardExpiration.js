define(function() {
    return function() {
        var currentYear = new Date().getFullYear();
        var currentMonth = new Date().getMonth() + 1;
        return {
            require: 'ngModel',
            scope: {
                month: '=awMonth',
                year: '=awYear'
            },
            link: function(scope, el, attr, ctrl) {
                ctrl.$setValidity('expired', true);
                scope.$watch('[month, year]', function(value) {
                    if (!scope.month && !scope.year) {
                        return;
                    }
                    if (scope.year !== currentYear) {
                        ctrl.$setValidity('expired', true);
                        return;
                    }
                    ctrl.$setValidity('expired', parseInt(scope.month) >= currentMonth);
                });
            }
        };
    };
});
