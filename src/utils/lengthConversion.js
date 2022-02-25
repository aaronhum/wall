// util function to convert inputed base unit to conversion unit
const lengthConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to meters. Will use to convert all to meters and then back to converted unit
  const xToMetersConversions = {
    Inches: 39.37008,
    Feet: 3.28084,
    Yards: 1.093613,
    Miles: 6.213712 * 10 ** -4,
    Millimeters: 1000,
    Centimeters: 100,
    Meters: 1,
    Kilometers: 0.001,
  };

  // base converted to meters
  const baseToMeters = input / xToMetersConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToMeters * xToMetersConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default lengthConversion;
