var N=3;
var L=2;
var R=6;
var s=(R-L);
var flag=0;
for(var i=1;i<=s;i++)
{
    if((L+i)==N)
    {
   flag=1;

    }
}
if(flag==1)
{
    console.log("yes");
}
else
{
    console.log("no");
}
