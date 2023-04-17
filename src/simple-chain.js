const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength: () => {
    return chainMaker.chain.length;
  },
  addLink: (value) => {
    chainMaker.chain.push(value);
    return chainMaker;
  },
  removeLink: (position) => {
    if(isNaN(position) || position - 1 <= 0 || position -1 > chainMaker.chain.length)
      throw new Error("You can't remove incorrect link!");
      chainMaker.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain: () => {
     chainMaker.chain.reverse();
     return chainMaker;
  },
  finishChain: () => {
    return chainMaker.chain.map(chainItem => `( ${chainItem} )`).join('~~');
  }
};

module.exports = {
  chainMaker
};
