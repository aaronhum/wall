// util function to convert inputed base unit to conversion unit
const volumeConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to liters. Will use to convert all to liters and then back to converted unit
  const xToLitersConversions = {
    tsp: 202.8848,
    tbs: 67.62826,
    Ounce: 1.056691,
    Cupc: 4.226766,
    Cupl: 4.166667,
    Pint: 2.113383,
    Quart: 1.0566916,
    Gallon: 0.264172901,
    itsp: 168.9364,
    itbs: 56.31213,
    iOunce: 35.19508,
    iCup: 3.519508,
    iPint: 1.759754,
    iQuart: 0.879877,
    iGallon: 0.2199692,
    Liters: 1,
    Milliliters: 1000,
    cuInches: 61.02374,
    cuFeet: 0.03531467,
    cuYards: 0.001307951,
    cuCentimeters: 1000,
  };

  // base converted to meters
  const baseToLiters = input / xToLitersConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToLiters * xToLitersConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default volumeConversion;
