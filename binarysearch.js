function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
    while(arr[middle] !== elem){
        if(elem < arr[middle]){
            end = middle -1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    return middle;
}

binarySearch([1,3,4,7,8,10,12,13,15,16,18], 7)