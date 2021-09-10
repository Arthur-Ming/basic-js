import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {

  const arr1 = [...s1];
  const arr2 = [...s2];

  return arr1.reduce((res, item) => {
    if (arr2.includes(item)) {
      arr2.splice(arr2.indexOf(item), 1)
      res++
    }
    return res
  }, 0)
}
