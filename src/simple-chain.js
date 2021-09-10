import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length ||
      typeof position !== 'number' || !Number.isInteger(position)) {
      this.chain = []
      throw Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.finish = [...this.chain]
    this.chain = []
    return this.finish.join('~~')
  }
};
