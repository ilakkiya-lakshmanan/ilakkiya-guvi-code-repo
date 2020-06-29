var a=[1,2];
var b=[5,6,2,6,7];
var isrepeat=false;
for(var i=0;i<a.length;i++)
{
    for(var j=1;j<b.length;j++)
    {
        if(a[i]==a[j]);
        {
           isrepeat=true; 
        }


    }
    
}
if(isrepeat)
{
    console.log("yes")
}
else{
    console.log("no")
}
