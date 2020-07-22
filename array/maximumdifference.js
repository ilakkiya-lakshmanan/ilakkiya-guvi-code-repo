var n=5;
var array=[1,2,3,4,5];
var diff=array[1]-array[0];
for(var i=0;i<array.length;i++)
{
for(var j=i+1;j<array.length;j++)
{
    if(array[j]-array[i]>diff)
    {
        diff=array[j]-array[i];
    }
}
}
console.log(diff);