define(function() {
    var catalogCache;
    var Catalog = function($http, $q) {
        this.$http = $http;
        this.$q = $q;
    };

    var proto = Catalog.prototype;

    proto.retrieve = function() {
        var deferred = this.$q.defer();
        if (catalogCache) {
            return catalogCache;
        } else {
            this.$http.get('../data/catalog.json')
                .success(deferred.resolve)
                .error(deferred.reject);
        }
        return catalogCache = deferred.promise;
    };

    proto.availableColors = function() {
        return this.retrieve()
            // Map the colors
            .then(function(items) {
                return items.map(function(item) {
                    return item.color;
                });
            })
            // Filter out duplicates
            .then(function(colors) {
                var seen = {};
                return colors.filter(function(color) {
                    return seen[color] ? false : seen[color] = true;
                });
            });
    };

    return ['$http', '$q', Catalog];
});
