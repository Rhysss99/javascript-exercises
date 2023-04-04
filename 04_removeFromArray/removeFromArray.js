 var removeFromArray = function(myArray, ...args) { //takes an array called myArray and arbitrary no of arguments
   return myArray.filter(val => !args.includes(val)) //creates new array that only includes elements that are not included in additional arguments passed to function
 }
//Used like so:
// const myArray = [1,2,3,4,5];
// const newArr = removeFromArray(arr, 2, 4);
// console.log(newArr); //output [1,3,5]

// Do not edit below this line
module.exports = removeFromArray;
