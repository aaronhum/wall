// util function to convert inputed base unit to conversion unit
const memoryConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to megabyte. Will use to convert all to megabyte and then back to converted unit
  const xToMegabyteConversions = {
    Bits: 8000000,
    Bytes: 1000000,
    Gibibits: 0.007450581,
    Gibibytes: 9.313226 * 10 ** -4,
    Gigabits: 0.008,
    Gigabytes: 0.001,
    Kibibits: 7812.5,
    Kibibytes: 976.5625,
    Kilobits: 8000,
    Kilobytes: 1000,
    Mebibits: 7.629395,
    Mebibytes: 0.9536743,
    Megabits: 8,
    Megabytes: 1,
    Pebibits: 7.105427 * 10 ** -9,
    Pebibytes: 8.881784 * 10 ** -10,
    Petabytes: 1 * 10 ** -9,
    Tebibits: 7.275958 * 10 ** -6,
    Tebibytes: 9.094947 * 10 ** -7,
    Terabits: 8 * 10 ** -6,
    Terabytes: 1 * 10 ** -6,
  };

  // base converted to meters
  const baseToMB = input / xToMegabyteConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToMB * xToMegabyteConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default memoryConversion;
