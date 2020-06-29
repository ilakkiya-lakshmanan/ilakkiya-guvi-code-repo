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
    var length=friends.length;
    var avg=length/2;
    console.log("average of all",avg);
    for(var i=0;i<friends.length;i++)
    {
        var l=friends[i].length;
        var a=l/2;
        console.log("length of" ,friends[i],l);
        console.log("Average of length",a);
    }