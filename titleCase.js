function titleCase(str) {
    var wordsArr = str.split(' ')
    console.log(wordsArr);
    let capStr = '';
    for (let i=0;i<wordsArr.length;i++){
      let word = wordsArr[i].split('');
      word[0] = word[0].toUpperCase();
      for (let j = 1; j< word.length; j++){
        word[j] = word[j].toLowerCase();
      }
      console.log(word);
      let strWord = word.join('');
      capStr = capStr + strWord
      if (i < wordsArr.length -1) {
        capStr = capStr + " ";
      }

    }
    return capStr;
  }
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));