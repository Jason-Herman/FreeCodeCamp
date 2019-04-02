function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var bool = false;
    var len1 = str.length;
    var len2 = target.length;
    if (target == str.substring(len1-len2, len1)) {
        bool = true
    }
    return bool;
  }
  
  console.log(confirmEnding("Bastian", "n"));