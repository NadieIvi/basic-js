const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getSquareRowBombs(arr, indexes){
      return indexes.reduce((accumulator, i) => {
        return arr[i] === true ? ++accumulator : accumulator
      }, 0);
  }
  let bombMatrix = JSON.parse(JSON.stringify(matrix));
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        let bombs = 0;
        for(let squareRow = i-1; squareRow <= i+1; squareRow++){
          if(Array.isArray(matrix[squareRow])){
            if(squareRow != i){
              bombs += getSquareRowBombs(matrix[squareRow], [j-1,j,j+1]);
            }else{
               bombs += getSquareRowBombs(matrix[squareRow], [j-1,j+1]);
            }
          }
        }
        bombMatrix[i][j] = bombs;
    }
  }
  return bombMatrix;
}

module.exports = {
  minesweeper
};
