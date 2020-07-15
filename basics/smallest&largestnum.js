var data=[1,2,3,4,5];
var maxlength=data[0];
var minlength=data[0];
for (var i=0;i<data.length;i++)
{
    if(data[i]>maxlength)
    {
        maxlength=data[i];
    }
    else if(data[i]<minlength)
    minlength=data[i];

}
console.log(minlength);
console.log(maxlength);