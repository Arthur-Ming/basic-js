import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {

  const arr = domains.map(item => '.' + item.split('.').reverse().join('.'))
  const resArr = arr.map(item => arr.filter((i) => i.includes(item)))

  return resArr.reduce((res, item) => ({
    ...res,
    '.com': arr.length,
    [item[0]]: item.length
  }), {})
}
