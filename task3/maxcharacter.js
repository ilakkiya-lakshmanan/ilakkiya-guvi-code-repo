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
    var maxlength=0;
    var maxLengthName= "";
    for(var i=0;i<friends.length;i++)
    {
        if(friends[i].length>maxlength)
        {
            maxlength=friends[i].length;
            maxLengthName = friends[i];
            
        }
    }

    console.log(maxLengthName);
    