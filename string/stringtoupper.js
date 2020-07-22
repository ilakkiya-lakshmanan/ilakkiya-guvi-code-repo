var str=["string",1];
var s=str[0].split("");
var n=str[1]-1;
if(str[1]>0)
{
for(var i=n;i<s.length;i=i+str[1])
{
  s[i]=s[i].toUpperCase();
}
console.log(s.join(""));
}
else
{
    console.log(s.join(""));

}
