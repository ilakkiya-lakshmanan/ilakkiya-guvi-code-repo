var str="codekata";
var rev=str.split("").reverse().join("");
var con=[];
var length=rev.length-1;
for(var i=0;i<=length;i++)
{
    if(i<length)
    {
    con.push(rev[i]+"_");
    }
    else if(i===length)
    {
        con.push(rev[i]);
    }
}
console.log(con.join(""));
