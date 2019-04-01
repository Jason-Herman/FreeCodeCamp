function factorialize(num) {
    var tot = 1;
    for(var x = 1; x <= num; x++){
        tot *= x;
    }
    return tot;
  }
  
  console.log(factorialize(5));