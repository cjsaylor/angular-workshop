define(function() {
    return function() {
        return function(input, colors) {
            if (!colors.length) {
                return input;
            }
            return input.filter(function(item) {
                return colors.indexOf(item.color) >= 0;
            });
        };
    };
});
