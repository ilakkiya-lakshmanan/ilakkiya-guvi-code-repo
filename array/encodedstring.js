var string="RADAR";
var lower_case_string=string.toLowerCase();
var str=lower_case_string.split("");
var encoded;
var result;
for(var i=0;i<str.length;i++)
{
    var ascii=str.charCodeAt(i);
    encoded=(ascii+3).fromCharCode();
encoded.push(result[i]);
result=encoded.join("");
}
console.log(result.touppe);

