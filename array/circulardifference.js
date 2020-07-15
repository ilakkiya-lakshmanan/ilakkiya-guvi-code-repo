var input=[50,65,85,98,35,95];
var diff=15;
var res=[];
var k=0;
for(var i=0;i<input.length;i++)
{
    if(i==input.length-1){
        k = 0;
    }else{
        k=i+1;
    }
    
        if(Math.abs(input[k]-input[i])>diff)
        {
            res.push("1");
            
        }
        else
        {
            res.push("0");
        }
    
}
console.log(res.join(" "));