var temp;
var data=[1,2,3,4,5];
for(var j=1;j<data.length;j+=2)
{
    temp=data[j-1];
    data[j-1]=data[j];
    data[j]=temp;
}
console.log(data);
