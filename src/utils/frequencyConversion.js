// util function to convert inputed base unit to conversion unit
const lengthConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to Hertz. Will use to convert all to Hertz and then back to converted unit
  const xToHertzConversions = {
    Exahertz: 1 * 10 ** -18,
    Gigahertz: 1 * 10 ** -9,
    Hertz: 1,
    Kilohertz: 0.001,
    Megahertz: 1 * 10 ** -6,
    Microhertz: 1000000,
    Millihertz: 1000,
    Petahertz: 1 * 10 ** -15,
    Terahertz: 1 * 10 ** -12,
  };

  // base converted to meters
  const baseToHertz = input / xToHertzConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToHertz * xToHertzConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default lengthConversion;
