var data=[5,6,7,9,10,1];
var min=data[0];
for(var i=1;i<data.length;i++)
{
    if(data[i]<min)
    {
        min=data[i];
    }
}
console.log(min);