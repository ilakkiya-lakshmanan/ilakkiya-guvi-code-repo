var num = [8, 12];
var primefactors = [];
for (var i = 0; i < num.length; i++) {
    while (parseInt(num[i]) % 2 == 0) {
        primefactors.push(2);
        num[i] = parseInt(num[i]) / 2;
        
        
    }
}
    var sqrtNum = Math.sqrt(num[i]);
    console.log(sqrtNum);
    for (var j = 3; j <= sqrtNum; j++) {
        while (num[i] % j == 0) {
            primefactors.push(j);
            num[i] = num[i] / j;
        }

        if (num[i] > 2) {
            primefactors.push(num[i]);
        }
    
    }

console.log(primefactors);