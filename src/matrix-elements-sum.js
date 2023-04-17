const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let accum = 0;
  let zeroExist = false;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      accum += matrix[i][j];
      if(matrix[i][j] == 0 && accum != 0 && !zeroExist)
        zeroExist = true;
      }
      if(zeroExist)
        break;
  }
  return accum;
}

module.exports = {
  getMatrixElementsSum
};
