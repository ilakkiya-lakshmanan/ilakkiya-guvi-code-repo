var str=["string",3];
var s=str[0].split("");
var n=str[1]-1;
var result=[];
if(str[1]>0)
{
for(var i=n;i<s.length;i=i+parseInt(str[1]))
{
  result.push(s[i]);
}
console.log(result.join(" "));
}
else
{
console.log(s.join(""));

}
