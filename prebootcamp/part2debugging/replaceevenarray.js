var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = 0;
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 != 0) {
            inner_array[j] = "\"even\"";
            str_all+=inner_array[j];
        }
    }
}
console.log(numsArr);
