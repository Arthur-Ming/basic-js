import { NotImplementedError } from '../extensions/index.js';

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
export default function dateSample(sampleActivity) {
  if (!isFinite(sampleActivity) || typeof sampleActivity !== 'string') return false;

  const N = parseFloat(sampleActivity)

  if (N <= 0 || N >= MODERN_ACTIVITY || isNaN(N)) return false

  const LN2 = Math.LN2;
  return Math.ceil(Math.log(MODERN_ACTIVITY / N) / (LN2 / HALF_LIFE_PERIOD))
}
