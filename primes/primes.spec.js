'use strict'

const Primes = require('./Primes')
const expect = require('chai').expect

describe('Primes moduel', () => {
  describe('generate primes', () => {
    it('should export a function', () => {
      expect(Primes.generate).to.be.a('function')
    })
  })
})
