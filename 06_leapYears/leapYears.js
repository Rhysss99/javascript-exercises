const leapYears = function(year) {
    
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return true;
    
    } else {
        return false;
    }
};
//const year = 2001;
//const leapYearCheck = leapYears(year);
//console.log(leapYearCheck);
// Do not edit below this line
module.exports = leapYears;
