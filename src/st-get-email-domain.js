import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@' && email[i + 1] !== '.') {
      return email.slice(i + 1)
    }
  }
}
