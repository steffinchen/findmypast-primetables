'use strict'

const PrimeTable = require('./prime-table/prime-table')
const _ = require('lodash')

main();

function main(){
  let input = process.argv[2];
  let table = PrimeTable.generatePrimeTable(input);
  _.forEach(table, (row) => {
    let printRow = ' | ';
    _.forEach(row, (column) => {
      column = (column == null ? ' ' : column);
      printRow += column +' | ';
    });
    console.log(printRow);
  });
}
