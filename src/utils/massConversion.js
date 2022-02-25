// util function to convert inputed base unit to conversion unit
const massConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to liters. Will use to convert all to liters and then back to converted unit
  const xToKiloConversions = {
    Pounds: 2.204623,
    Grains: 15432.36,
    Drams: 564.3834,
    mOunces: 35.27396,
    Tons: 0.001102311,
    Grams: 1000,
    Kilograms: 1,
    MetricTons: 0.001,
  };

  // base converted to meters
  const baseToKilos = input / xToKiloConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToKilos * xToKiloConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default massConversion;
