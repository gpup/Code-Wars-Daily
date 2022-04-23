function sumArray(array) {
    array = array || []
//order elements ascending
   return array
     .sort((a,b) => a - b)
//remove highest and lowest element
     .slice(1, -1)
//sum remaining elements
     .reduce((a,b) => a + b, 0)
  }