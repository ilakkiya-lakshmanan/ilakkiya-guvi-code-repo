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
    function dataHandling(input){
    //Your code goes here
    console.log(input.sort().join());
    }
    dataHandling(friends);