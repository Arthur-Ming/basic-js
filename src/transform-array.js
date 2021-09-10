import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }
  let localArr = [...arr]

  for (let i = 0; i < localArr.length; i++) {

    const item = localArr[i]

    if (item === '--discard-prev') {
      if (i === 0) {
        localArr.splice(i, 1)
        i--
      } else {
        localArr.splice(i - 1, 2)
        i -= 2
      }
    }
    if (item === '--double-prev') {
      if (i === 0) {
        localArr.splice(i, 1)
        i--
      }
      else {
        localArr = [...localArr.slice(0, i), ...localArr.slice(i - 1, i), ...localArr.slice(i + 1)]
        i++

      }
    }
    if (item === '--double-next') {
      if (i + 1 === localArr.length) {
        localArr.splice(i, 1)
      } else {
        localArr = [...localArr.slice(0, i), ...localArr.slice(i + 1, i + 2), ...localArr.slice(i + 1)]
      }
    }
    if (item === '--discard-next') {
      if (i + 1 === localArr.length) {
        localArr.splice(i, 1)
      } else {
        if (localArr[i + 2] === '--double-prev' || localArr[i + 2] === '--discard-prev') {
          localArr = [...localArr.slice(0, i), ...localArr.slice(i + 3)]
        } else {
          localArr = [...localArr.slice(0, i), ...localArr.slice(i + 2)]
        }
        i--
      }
    }
  }
  return localArr
}
