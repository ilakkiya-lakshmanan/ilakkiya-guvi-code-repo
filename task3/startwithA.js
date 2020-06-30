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
    var res=[];
    for(var i=0;i<friends.length;i++)
    {
        if(friends[i].startsWith("A"))
        {
            res.push(friends[i]);
        }
    }
    console.log(res.join());