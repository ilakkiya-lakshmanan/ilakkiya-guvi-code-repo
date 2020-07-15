function reverseVowels(str){
 
    var vowels = "aeiouAEIOU";
    
    var vowelsToReverse = [];
    
    for(i = 0 ; i< str.length ; i++){
        //console.log(str[i],vowels.indexOf(str[i]));
        
    if(vowels.indexOf(str[i]) > -1){
    vowelsToReverse.push(str[i]);
    console.log(vowelsToReverse)
    }
    }
    var strArray = str.split('');
    console.log(strArray);
    var lastIndex = vowelsToReverse.length - 1;
    console.log(lastIndex);
    
    for( i = 0 ;i < strArray.length ; i++){
    if(vowels.indexOf(strArray[i]) > -1){
    strArray[i] = vowelsToReverse[lastIndex];
    lastIndex -- ;
    console.log(strArray);

    }
    }
    if(str !== strArray.join(''))
    return strArray.join('');
    else
    return "no vowels to replace";
   }


console.log(reverseVowels("hello world"));
