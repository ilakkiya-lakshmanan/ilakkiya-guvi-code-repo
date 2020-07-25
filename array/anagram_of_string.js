
var str=["kabali","kabail","kaba","kaabali","kaab"];
var temp=str[0].split("").sort().join("");
var count=0;
for(var i=0;i<str.length;i++)
{
   str[i]=str[i].replace(/[^\w]/g, '').toLowerCase();
   str[i]=str[i].split("").sort().join("");

if(str[i]===temp)
{
    count++;
    
}
}
console.log(count);