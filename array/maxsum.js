
var arr=[-1,-2,-3,-4];
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                
                }
        }
    }
    
        left =leftIndex,
        right = rightIndex,
        final_max_sum_subArray=max_so_far;
}
console.log(final_max_sum_subArray);


