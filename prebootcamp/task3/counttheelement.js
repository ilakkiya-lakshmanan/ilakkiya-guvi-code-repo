
    var arr1=[1,2,3,4,5];
    var arr2=[];
    function countArrElements(arr){
        var idx =0;
        var ctr =0;
        while(arr[idx]){
            ctr++;
            idx++;
        }
        return ctr;
    }
   

    console.log(countArrElements(arr1));
    console.log(countArrElements(arr2));
    
    
    