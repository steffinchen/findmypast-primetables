'use strict'

const _ = require('lodash');

/**
 * Generates a multiplication table as a 2D-Array.
 * The header is used for both column and row headers,
 * the data is filled in by multiplying the row and column header.
 * @param header an array of numbers describing the header
 * @return a 2D array containing the row and column headers and the
 * result of the multiplication as data
 */
function generate(header) {
  let result = [
    [null, ...header]
  ];

  _.map(_.range(header.length), (row) => {
    result[row + 1] = [];
    result[row + 1][0] = header[row];
    _.map(_.range(header.length), (col) => {
      result[row + 1][col + 1] = header[row] * header[col];
    });
  });
  return result;
}

module.exports = {
  generate
}
