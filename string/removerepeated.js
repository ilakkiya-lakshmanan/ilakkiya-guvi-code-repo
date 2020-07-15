var input="hi john arun john cena ilaki cena hi";
var arr=input.split(" ");
var res = [];
var index = [];
var res = [];

for(var i=0;i<arr.length;i++){
 index[i] = arr.indexOf(arr[i]);
}

for(var i=0;i<index.length;i++){
   for(var j=1;j<index.length;j++){
       if(i!=j &&  index[j]==index[i]){
       arr[i] = "";
       arr[j] = "";
        break;
       }
   }
}

for(var i=0; i<arr.length;i++){
    if(arr[i]!=""){
        res.push(arr[i]);
    }
}

console.log(res.join(" "));


