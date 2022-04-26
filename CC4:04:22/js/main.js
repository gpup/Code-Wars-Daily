function positiveSum(arr) {
    return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0);
  }
  
  //mine didn't work, but this is pretty slick