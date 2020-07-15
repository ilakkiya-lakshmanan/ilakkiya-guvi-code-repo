var input="anz";
var length=input.length-1;
var a=input.startsWith('a') || input.startsWith('A');
var z=input.endsWith('z') || input.endsWith('Z');
var m=input.charAt(parseInt(length/2));

if((a && z && m =='m') ||(a && z && m =='M')){
    console.log("yes");
    
}else{
    console.log("no");
    
}