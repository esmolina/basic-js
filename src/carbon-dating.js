const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  let test = sampleActivity / 1;
  if ((typeof test) === "number" && test <= 15 && test > 0 && test !== Infinity) {
    let x = sampleActivity / 15;
    let logBase = 1 / 2;
    let periods = (Math.log(x) / Math.log(logBase)) * 5730;
    return Math.ceil(periods);
  }
  return false;
}

module.exports = {
  dateSample
};
