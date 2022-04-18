function rentalCarCost(d) {
    let result;
    if(d < 3){
      result = (d*40);
    }else if(d < 7){
      result = ((d*40) - 20);
    }else if(d >= 7){
      result = ((d*40) - 50);
    }else {
      result = "Whatever";
    }
  }

  //This did not work and I don't really know why?