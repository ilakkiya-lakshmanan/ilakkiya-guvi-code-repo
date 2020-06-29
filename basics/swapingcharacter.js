var temp;
var data="codekata".split("");
var l=data.length;
if(l%2==0)
{
    for(var i=0;i<l-1;i+=2)
    {
        var a=data[i];
        var b=data[i+1]; 
        data[i]=b;
        data[i+1]=a;
    }
    console.log(data.join(""));

}
