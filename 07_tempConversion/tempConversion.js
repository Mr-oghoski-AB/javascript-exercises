const convertToCelsius = function(fahren) {
  let celsius = parseFloat((fahren - 32) * 5/9);
  celsius = Number(celsius.toFixed(1))
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = parseFloat((celsius * 9/5) + 32);
  fahrenheit = Number(fahrenheit.toFixed(1))
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
