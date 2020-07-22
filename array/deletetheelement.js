var n=11;
var k=4;
var array=[1,2,3,4,5,7,8,7,10,11,12];
for(var i=array.length-1;i>=(n-k);i--)
{
    array.pop();
}
console.log(array.join(" "));