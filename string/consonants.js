var input="i am ilakkiya";
var str=input.toLowerCase();
var strconsonant="";
var flag=-1;
for(var i=0;i<str.length;i++)
{
if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u")
{
    strconsonant +=str[i];
    flag=0;
}

}
console.log(strconsonant);
if(flag==-1)
{
    console.log("-1");
}