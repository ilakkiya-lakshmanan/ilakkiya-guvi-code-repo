var userInput=3;
var n=[];
if(userInput>0)
{
for(var i=1;i<=userInput;i++)
{
    var mul=9*i;
     n.push(mul);
     var result=n.join(" ");

}  
console.log(result);
}
else
{
console.log("NULL");
}