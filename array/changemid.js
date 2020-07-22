var str="helloj";
var s=str.split("");
var length=str.length-1;
if(length%2==0)
{
var n=length/2;
s[n]="*";
console.log(s.join(""));
}
else
{
    var k=parseInt(length/2);
    s[k]="*";
    s[k+1]="*";
console.log(s.join(""));
}