var n=3;
var sum=0;
var sqrt=[];
for(var i=1;i<=n;i++)
{
sum=(sum+i);
var sq=Math.pow(sum,2);
sqrt.push(sq);


}
console.log(sqrt.join(" "));