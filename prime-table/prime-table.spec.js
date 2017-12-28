'use strict'

const expect = require('chai').expect;
const PrimeTable = require('./prime-table');


describe('PrimeTable module', () => {

  it('generates the prime tables', () => {
    expect(PrimeTable.generatePrimeTable(3)).to.eql([
      [
        null, 2, 3, 5
      ],
      [
        2, 4, 6, 10
      ],
      [
        3, 6, 9, 15
      ],
      [
        5, 10, 15, 25
      ]
    ]);
  });

  it('generates a table with lots of primes', () => {
    let table = PrimeTable.generatePrimeTable(46);
    expect(table[0]).to.eql([null, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
  });

});
