var n=10;
var d=[10000, 9000 ,8000 ,7000 ,6000, 5000, 40000, 3000 ,2000 ,1000];
var min=Math.min(...d);
var pos;
for(var i=0;i<d.length;i++)
{
if(min===d[i])
{
    pos=i;
}
}
console.log("dealer"+pos);