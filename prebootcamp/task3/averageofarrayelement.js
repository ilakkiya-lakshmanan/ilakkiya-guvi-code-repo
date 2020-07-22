const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
var count=0;
for(var i=0;i<friendsInfo.length;i++)
{
    if(typeof friendsInfo[i]=="number")
    {
        count++;
    }
}
console.log(count);
