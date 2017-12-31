const MultiTable = require('../multiplication-table/multi-table');
const Prime = require('../primes/primes');

function generatePrimeTable(n){
  let primes = Prime.generate(n);
  return MultiTable.generate(primes);
}

module.exports = {
  generatePrimeTable
};
