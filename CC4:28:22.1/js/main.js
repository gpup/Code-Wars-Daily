function oddOrEven(array) {
    //probably need to run reduce on array
   //check if sum is % 2 === 0
   //return odd or even
   let sum = array.reduce((a,b) => a + b, 0);
   if(sum % 2 === 0){
     return "even";
   //This one apparently is not necessary
   }else if(!array.length){
     return "even";
   }else{
     return "odd";
   }
 };