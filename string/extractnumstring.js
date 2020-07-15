var input="AB23C5D0";
var part=/[a-zA-Z]/g;
var extstring=input.match(part).join("");
var partn=/[0-9]/g;
var extnum=input.match(partn);
var add=extnum;
var sum=0;
for(var i=0;i<add.length;i++)
{
    sum=sum+parseInt(add[i]);
    

}
var result=extstring+sum;
console.log(result);