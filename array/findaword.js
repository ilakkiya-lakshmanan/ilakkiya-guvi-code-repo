var str="hello guvi geek guvi";
var find="guvi";
var s=str.split(" ");
var count=0;
for(var i=0;i<str.length;i++)
{
    if(s[i]===find)
    {
count++;
    }
}
if(count>0)
{
    console.log(count);
}
else{
    console.log("-1");
}
