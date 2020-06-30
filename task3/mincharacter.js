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
    var minlength=1000000;
    var minLengthName= "";
    for(var i=0;i<friends.length;i++)
    {
        if(friends[i].length<minlength)
        {
            minlength=friends[i].length;
            minLengthName = friends[i];
            
        }
    }

    console.log(minLengthName);
    