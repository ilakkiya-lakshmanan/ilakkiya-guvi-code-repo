let friends=[
    "Mari", 
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var flag=false;
    function dataHandling(input,name){
    for (var i = 0; i < input.length; i++) {
        if(input[i]==name){
flag=true;
        }
    }
    
    }
  let found=  dataHandling(friends,"Jeff");
  console.log(flag);

