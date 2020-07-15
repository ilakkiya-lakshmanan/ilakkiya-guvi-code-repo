var string="arun";
var mapping = {};
    for(var i = 0; i < string.length; i++) {
        var letter = string[i].toString();
        mapping[letter] = mapping[letter] + 1 || 1;
        console.log(letter,mapping[letter]);
        
    }
    var unique = '';
    for (var letter in mapping) {
        if (mapping[letter] === 1)
            unique += letter;
    }
console.log(unique);