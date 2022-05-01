function squareDigits(num){
    //split square reduction and join num
    return Number(num.toString().split('').map(elem => elem*elem).join(''))
  };
  
  //Didn't get this one. Need to look into toString() and Number(). Also i first wanted to go with reduce. .map is correct.