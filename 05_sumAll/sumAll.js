const sumAll = function(num1, num2) {
    let sum=0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1<0 || num2<0) return "ERROR";
    for(let i= Math.min(num1,num2); i<=Math.max(num1,num2);i++){
        sum+=i;
    }
    return sum;
};

//use
//const num1 = 5;
//const num2 = 10;
//const sum = sumAll(num1, num2);
//console.log(sum); // Output: 45

// Do not edit below this line
module.exports = sumAll;
