import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const res = []

  for (let i = 0; i < str.length; i++) {
    const temp = []
    temp.push(str[i])
    let x = i + 1;
    while (str[i] === str[x]) {
      temp.push(str[x])
      x++
    }
    res.push(temp)
    i = x - 1
  }

  return res.map(item => (item.length === 1 ? '' : item.length) + item[0]).join('')
}
