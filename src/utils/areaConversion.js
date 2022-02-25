// util function to convert inputed base unit to conversion unit
const areaConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to Acres. Will use to convert all to Acres and then back to converted unit
  const xToAcresConversions = {
    Acres: 1,
    Ares: 40.4686,
    Barns: 40468600000000000000000000000000,
    Hectares: 0.404686,
    Roods: 4.000004,
    sqInches: 6.272646 * 10 ** 6,
    sqFeet: 43560.04,
    sqYards: 4840.004,
    sqMiles: 0.001562501,
    sqMillimeters: 4.04686 * 10 ** 9,
    sqCentimeters: 40468600,
    sqMeters: 4046.86,
  };

  // base converted to meters
  const baseToAcres = input / xToAcresConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToAcres * xToAcresConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default areaConversion;
