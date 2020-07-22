var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    var friends=friends1.concat(friends2);
    
    console.log("First Element of Array",friends[0]);
    console.log("Last Element of Array",friends[friends.length-1]);
    console.log("Middle Element of Array",friends[((friends.length)/2)]);
    friends.push("Ilakkiya");
    friends.unshift("Arun");
    
    for(var i=0;i<friends.length;i++)
    {
         var input=`  Mr${friends[i]}`;
         console.log(input);
    }


