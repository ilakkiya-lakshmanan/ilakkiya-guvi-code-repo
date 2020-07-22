var string="raja";
var vowel="aeiou"

var sum=0;
for(var i=0;i<string.length;i++)
{
    if(vowel.indexOf(string[i])>-1)
    {
    var ascii=string.charCodeAt(string[i]);
    sum=sum+ascii;
    }
    
}
if(sum%8===0)
{
    console.log("1");
}
else{
    console.log("0");
}