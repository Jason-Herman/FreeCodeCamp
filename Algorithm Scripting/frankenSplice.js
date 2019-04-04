function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    newArr = []
    for (let i= 0; i<arr2.length;i++){
        if (i == n){
            for (let j=0; j<arr1.length;j++){
                newArr.push(arr1[j])
            }
        }
        newArr.push(arr2[i])
    }
    return newArr;
  }
  
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));