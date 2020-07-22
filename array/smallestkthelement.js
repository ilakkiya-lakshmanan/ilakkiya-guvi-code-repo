var n=5;
var k=4;
var array=[1,1,1,1,5];
var uniqueArray=[];
var result=null;
for(i=0; i < array.length; i++){
    if(uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}

var s=uniqueArray.sort(function(a, b){return a-b});
result=(s[k-1]);
if(result>0)
{
    console.log(result);
}
else
{
    console.log("-1");
}