function repeatStringNumTimes(str, num) {
    var retStr = ""
    for(var i = 0; i<num; i++){
        retStr = retStr + str;
    }
    return retStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));