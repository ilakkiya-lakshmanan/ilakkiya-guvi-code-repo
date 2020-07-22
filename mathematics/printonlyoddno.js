var input=[2134],output=[];
var number=input.toString();
var only_odd=[];
for(var i=0;i<number.length;i++)
{
    output.push(number.charAt(i));
}
for(var j=0;j<output.length;j++)
{
    if(output[j]%2 !== 0)
    {
only_odd.push(output[j]);
    }
}
result=only_odd.length;
if(result>0)
{
    console.log(only_odd.join(" "));
}
else
{
    console.log("-1");
}

