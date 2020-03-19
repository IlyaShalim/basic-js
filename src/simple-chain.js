const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
    
  },
  addLink(value) {
    this.chains.push(value)
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chains.length - 1){
      this.chains = [];
      throw new Error('Error');
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    results = '';
    for (let i = 0; i < this.chains.length; i++){
      results += `( ${this.chains[i]} )`;
      if (i < this.chains.length - 1)
      {
        results += '~~'
      }
    }
    this.chains = [];
    return results;
  }
};

module.exports = chainMaker;
