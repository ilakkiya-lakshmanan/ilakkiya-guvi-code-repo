var a=1;
flag=0;
if(a<=3)
{
    flag=0;
}
else if(a%2==0 || a%3==0)
{
    flag=1;
}
if(flag==0)
{
    console.log("no");
}
else
{
    console.log("yes");
}
