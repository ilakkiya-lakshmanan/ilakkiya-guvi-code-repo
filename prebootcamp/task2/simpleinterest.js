var data=[200,1.1,51];

var principal = parseFloat(data[0]);
var rate =parseFloat(data[1]);
var time =parseFloat(data[2]);
var interest=(principal*time*rate)/100;
console.log(interest.toFixed(2));


