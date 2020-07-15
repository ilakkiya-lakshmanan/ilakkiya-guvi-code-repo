var input="abc";
var ascii;
var asciivalue;
var add=0;
for(var i=0;i<input.length;i++)
{
var ascii=input.charAt(i);
var asciivalue=ascii.charCodeAt();
add=add+asciivalue;

}
console.log(add);