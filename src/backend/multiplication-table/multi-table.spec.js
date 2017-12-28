'use strict'

const MultiTable = require('./multi-table')
const expect = require('chai').expect
const _ = require('lodash');

describe('Multiplication-table module', () => {
  it('has a function', () => {
    expect(MultiTable.generate).to.be.a('function');
  });

  it('creates a table', () => {
    expect(MultiTable.generate([2, 3, 5])).to.eql([
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

  it('creates a big table', () => {
    let table = MultiTable.generate(_.range(100));
    expect(table).to.have.lengthOf(101);
    expect(table[0]).to.have.lengthOf(101);
    expect(table[100][100]).to.eql(99 * 99);
  });
});
