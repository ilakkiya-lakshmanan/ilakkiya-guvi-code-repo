var string="abcd efgh ijkl";
var spt=string.split(" ");
var result=[];
for(var i=0;i<spt.length;i++)
{
    if(i===0||i%2===0)
    {
        var upp=spt[i];
       
     upp=  upp.toUpperCase();
        result.push(upp);
        
    }
    else if(i===1|| i%2!==0)
    {
        var low=spt[i];
      low= low.toLowerCase();

        result.push(low);
    }
}
console.log(result.join(" "));