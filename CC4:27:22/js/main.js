var isSquare = function(n){
    const s = Math.sqrt(n)
    if(s >= 0 && (Math.sqrt(n) * s)){
      return true;
    }else if(s === 3){
      return false;
    }else{
      return false;
    }
  }

  //this so did not work

  //this did

  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

  //so much simpler