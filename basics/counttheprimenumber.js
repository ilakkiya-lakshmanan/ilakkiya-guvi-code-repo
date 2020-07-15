var L=2;
var R=7;
var count=0;
var prime=[];
for(var i=2;i<=R;i++)
{
prime[i]=true;
}
prime[0]=false;
prime[1]=false;
for(var p=2;p*p<=R;p++)
{
    if(prime[p]==true)
    {
        for(var j=p*p;j<=R;j+=p)
        {
            prime[j]=false;
        
        }
    }
}
for(var k=L;k<=R;k++)
{
    if(prime[k]==true)
    {
        count++;
    }
}
console.log(count);
