// util function to convert inputed base unit to conversion unit
const temperatureConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, convert all to celcius and then back to conversion unit

  // first convert base to celcius
  let baseToC = 0;
  switch (baseUnitTrimmed) {
    case "F":
      baseToC = (input - 32) * (5 / 9);
      break;
    case "C":
      baseToC = input;
      break;
    case "K":
      baseToC = input - 273.5;
      break;
    case "R":
      baseToC = (input - 491.67) * (5 / 9);
      break;
    default:
      break;
  }

  // then convert from C to conversion unit
  let converted = 0;
  switch (conversionUnitTrimmed) {
    case "F":
      converted = baseToC * (9 / 5) + 32;
      break;
    case "C":
      converted = baseToC;
      break;
    case "K":
      converted = baseToC + 273.5;
      break;
    case "R":
      converted = baseToC * (9 / 5) + 491.67;
      break;
    default:
      break;
  }

  // return
  return converted; // toFixed(3) to round to 3 decimal places;
};

export default temperatureConversion;
