'use strict'

const _ = require('lodash');
const Utils = require('../utils/utils');

/**
 * Generates the primes up to limit n.
 * Implementation is based on the Sieve of Eratosthenes, see:
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param n the limit
 * @return list of all primes smaller than n
 */
 //TODO currently generates primes up to limit n, but
 // needs to generate the first n primes
function generate(n) {
  let numbers = {};
  for (let i = 2; i < n; i++) {
    numbers[i] = true;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (numbers[i]) {
      for (let j = i ^ 2; j < n; j += i) {
        numbers[j] = false;
      }
    }
  }
  let primeIndexes =  _.pickBy(numbers, Utils.isTruthy);
  return _.keys(primeIndexes);
}

module.exports = {
  generate
}
