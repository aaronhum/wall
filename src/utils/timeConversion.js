// util function to convert inputed base unit to conversion unit
const timeConversion = (baseUnit, conversionUnit, input) => {
  // trim the inputs
  const baseUnitTrimmed = baseUnit.slice(0, baseUnit.length - 1);
  const conversionUnitTrimmed = conversionUnit.slice(
    0,
    conversionUnit.length - 1
  );

  // to simplify, heres the conversions from x to Seconds. Will use to convert all to seconds and then back to converted unit
  const xToSecondsConversions = {
    Centuries: 3.168809 * 10 ** -10,
    Days: 1.157407 * 10 ** -5,
    Decades: 3.168809 * 10 ** -9,
    Femtoseconds: 1 * 10 ** 15,
    Fortnights: 8.267196 * 10 ** -7,
    Hours: 2.777778 * 10 ** -4,
    Microseconds: 1000000,
    Millenium: 3.168809 * 10 ** -11,
    Milliseconds: 1000,
    Minutes: 0.01666667,
    Months: 3.802571 * 10 ** -7,
    Nanoseconds: 1 * 10 ** 9,
    Picoseconds: 1000000000000,
    Seconds: 1,
    SiderealYear: 3.168754 * 10 ** -8,
    Weeks: 1.653439 * 10 ** -6,
    Years: 3.168809 * 10 ** -8,
  };

  // base converted to meters
  const baseToSeconds = input / xToSecondsConversions[baseUnitTrimmed];

  // convert
  const converted = (
    baseToSeconds * xToSecondsConversions[conversionUnitTrimmed]
  ).toFixed(3); // Added toFixed(3) to round to 3 dec places

  // return
  return converted;
};

export default timeConversion;
