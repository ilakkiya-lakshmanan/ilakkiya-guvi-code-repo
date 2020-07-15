var input="guvi";
var str=input.toLowerCase();
var flag=0;
for(var i=0;i<str.length;i++)
{
    switch(str[i])
    {

    
    case 'a':flag=1; 
    break;
    case 'e':flag=1;
    break;
    case 'i':flag=1;
     break;
    case 'o':flag=1; 
    break;
    case 'u':flag=1;
     break;
    }}
if(flag==1){
    console.log("yes");
}
else{
    console.log("no");
}
