const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit-32)*5/9;
  var celsiusRound = Math.round(celsius*10)/10;
  return celsiusRound;
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius*9/5)+32;
  var fahrenheitRound = Math.round(fahrenheit*10)/10;
  return fahrenheitRound;

};
//use
//const fahrenheit=68;
//const celsius = convertToCelsius(fahrenheit);
//console.log(celsius);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
