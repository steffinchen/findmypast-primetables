'use strict'

const Utils = require('./utils')
const expect = require('chai').expect

describe('Utils module', () => {
  it('should export a truthy function', () => {
    expect(Utils.isTruthy).to.be.a('function')
  });

  it('returns true for all truthy values', () =>{
    expect(Utils.isTruthy(true)).to.be.true;
    expect(Utils.isTruthy(1)).to.be.true;
    expect(Utils.isTruthy('test')).to.be.true;
  });

  it('returns false for all falsy values', () =>{
    expect(Utils.isTruthy(false)).to.be.false;
    expect(Utils.isTruthy(0)).to.be.false;
    expect(Utils.isTruthy(undefined)).to.be.false;
  });
});
