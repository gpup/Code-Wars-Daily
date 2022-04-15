// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P:Are you given an empty array or undefined? What then? Are you always given digits?
//R:Whatever number was given, it is now split up into an array and the order of the number is passed.
//E:If we were given 9238 => [8,3,2,9]
//                   330=> [0,3,3]
//                   undefined => not a number
//P:Make a function that takes in a number
function reversArray(num){
    //make number a string and split it
    let numArray = num.toString().split('').reverse()
    //reverse array 
    return parseInt(numArray)
    //make array integers again and return 
}

reverseArray(9238)
