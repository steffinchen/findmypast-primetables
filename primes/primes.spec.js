'use strict'

const Primes = require('./Primes')
const expect = require('chai').expect

describe('Primes moduel', () => {
  describe('generate primes', () => {
    it('should export a function', () => {
      expect(Primes.generate).to.be.a('function')
    })

    it('generates the first 3 primes', () => {
      expect(Primes.generate(3)).to.eql([2, 3, 5]);
    });

    it('generates the first 10 primes', () => {
      expect(Primes.generate(10)).to.eql([
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29
      ]);
    });

    it('generates 10000 primes in less than 1 sec', () => {
      var start = process.hrtime();

      var result = Primes.generate(10000);

      expect(result).to.have.lengthOf(10000);
      var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
      expect(elapsed).to.be.below(1000);
    });

    it('generates 20000 primes in less than 2 sec', () => {
      var start = process.hrtime();

      var result = Primes.generate(20000);

      expect(result).to.have.lengthOf(20000);
      var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
      expect(elapsed).to.be.below(2000);
    });
  })
})
