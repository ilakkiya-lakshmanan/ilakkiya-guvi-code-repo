var input="((}})";
var stack=[];
var map={'(':')',
'{':'}',
'[':']'
};

var flag=1;
for(var i=0;i<input.length;i++)
{
    if(input[i]==='('||input[i]==='{'||input[i]==='[')
    {
        stack.push(input[i]);
    }
    else 
    {
        let last=stack.pop();
        if(input[i]!=map[last])
        {
            flag=0;
        }
    }
}
if(stack.length!=0)
{
    flag=0;
}
if(flag==0)
{
    console.log("0");
}
else{
    console.log("1");
}