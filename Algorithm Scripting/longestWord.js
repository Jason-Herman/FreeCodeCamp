function findLongestWordLength(str) {
    var arr = str.split(" ");
    var long = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i].length > long) {
            long = arr[i].length;
        }
    }
    return long;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));