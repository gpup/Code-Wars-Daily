function isIsogram(str){
  //check for duplicates and return boolean. case sensitive
  for(let i = 0; i <= str.length; i++) {
      for(let j = i+1; j <= str.length; j++){
        if(str.toLowerCase()[j] == str.toLowerCase()[i]){
          return false;
        }
      }
    }
    return true;
  }

//   ok i had to look this one up and found the double for loop. but i nailed the placement of toLowerCase.