import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0
    }

    let max = 1;
    for (const item of arr) {
      let sum = 1;
      if (Array.isArray(item)) {
        sum += this.calculateDepth(item)
        if (sum > max) {
          max = sum
        }
      }
    }
    return max
  }
}

