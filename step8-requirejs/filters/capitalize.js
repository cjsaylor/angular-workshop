define(function() {
    return function(input) {
        return input.split(' ').map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        }).join(' ');
    };
});
