var n=2;
var input=["arun",5000,"ilakkiya",50000,"kala",4000 ];
var salary=[];
var name=[];
for(var i=0;i<input.length;i++)
{
    if(i==0 || (i%2==0))
    {
        name[i]=input[i];
        
    }
    else
    {
        salary[i]=input[i];
        
    }
}
var result={};
console.log(salary);
name.forEach((key,i)=>result[key]=salary[i]);
   console.log(result);

