'use strict'

const _ = require('lodash');
const Utils = require('../utils/utils');

/**
 * Generates a list of the first n primes.
 * Implementation is based on the Sieve of Eratosthenes, see:
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param n the amount of primes to generate
 * @return list of the first n primes
 */
function generate(n) {
  let numbers = {};
  let limit;
  if (n <= 5) {
    limit = 12;
  } else {
    limit = getUpperBounds(n);
  }
  for (let i = 2; i < limit; i++) {
    numbers[i] = true;
  }

  // since the used upper bound is quite optimistic,
  // this generates way too many primes
  // --> could be improved to stop once we have our n primes
  // however, if we have an efficient way to determine whether we
  // have generated enough primes, we wouldn't need the upper 
  // bound at all
  for (let i = 2; i < Math.sqrt(limit); i++) {
    if (numbers[i]) {
      for (let j = Math.pow(i, 2); j < limit; j += i) {
        numbers[j] = false;
      }
    }
  }

  //keeps only keys (aka numbers) = true, meaning they are primes
  let primeIndexes = _.pickBy(numbers, Utils.isTruthy);
  let sublist = _.slice(_.keys(primeIndexes), 0, n);
  return _.map(sublist, (val) => {
    return parseInt(val);
  });
}



/**
 * Gets the approximation for an upper bound for the nth prime,
 * for n >= 6
 * Based on https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
 */
function getUpperBounds(n) {
  return Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));
}

module.exports = {
  generate,
  getUpperBounds
}
