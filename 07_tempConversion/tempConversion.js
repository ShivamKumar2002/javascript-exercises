const ftoc = function(temperature) {
  let inFahrenheit = (temperature - 32) * (5 / 9)
  return Math.round(inFahrenheit * 10) / 10;
};

const ctof = function(temperature) {
  let inCelsius = (temperature * 9 / 5) + 32;
  return Math.round(inCelsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
