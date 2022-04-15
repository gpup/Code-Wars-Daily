// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: 
//R: Return a new arr with each value doubled 
//E:If given [2,3,4], return [4,6,8]
//  If we are given [4,5,6], return [8,10,12]
//P:
//Make a function that takes in an array
function doubled(arr){
   return arr.map(e=>e*2)
}
//map through the arr and multiply each element by 2