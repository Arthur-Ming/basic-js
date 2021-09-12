import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  vigenereTable = [];

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  creatVigenereTable() {
    this.vigenereTable = []
    this.alphabet.forEach(() => {
      this.vigenereTable.push([... this.alphabet])
      this.alphabet.push(this.alphabet.shift())
    })
  }
  creatKey(message, key) {
    let n = ''
    for (let i = 0, x = 0; i < message.length; i++, x++) {
      const sign = message[i].toUpperCase()
      if (this.alphabet.includes(sign)) {
        if (x >= key.length) x = 0
        n += key[x]
      }
      else {
        n += message[i]
        x--
      }
    }
    return n
  }

  constructor(direct = true) {
    this.direct = direct
    this.creatVigenereTable()
  }
  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!')
    const createdkey = this.creatKey(message, key)
    let encrypted = ''
    for (let i = 0; i < message.length; i++) {
      const row = this.alphabet.indexOf(message[i].toUpperCase())
      const column = this.alphabet.indexOf(createdkey[i].toUpperCase())
      row === -1 ? encrypted += message[i] : encrypted += this.vigenereTable[row][column]
    }
    return this.direct ? encrypted : encrypted.split('').reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!')
    const createdkey = this.creatKey(message, key)
    let decrypted = ''
    for (let i = 0; i < message.length; i++) {
      const column = this.alphabet.indexOf(createdkey[i].toUpperCase())
      if (column !== - 1) {
        let row = 0
        while (this.vigenereTable[row][column] !== message[i].toUpperCase()) {
          row++
        }
        decrypted += this.vigenereTable[row][0]
      } else {
        decrypted += createdkey[i]
      }
    }
    return this.direct ? decrypted : decrypted.split('').reverse().join('')
  }
}
