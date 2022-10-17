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
  let result = [];
  let maxDeep = matrix.length;
  let maxWidth = matrix[0].length;

  function checking(Y, X) {
    return Y >= 0 && Y < maxDeep && X >=0 && X < maxWidth && matrix[Y][X];
  }

  for (let i = 0; i < matrix.length; i++) {
    let line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;

      /*
      for (let offsetY = -1; offsetY <= 1; offsetY++) {
        for (let offsetX = -1; offsetX <= 1; offsetX++) {
          if (checking(i + offsetY, j + offsetX) && !(offsetX === 0 && offsetY === 0)) {
            count++;
          }
        }
      }
      */

      for (let n = j - 1; n <= j + 1; n++) {
        if (checking(i - 1, n)) {
          count++;
        }
        if (checking(i + 1, n)) {
          count++;
        }
      }
      if (checking(i, j - 1)) {
        count++;
      }
      if (checking(i, j + 1)) {
        count++;
      }

      line.push(count);
    }
    result.push(line)
  }
  return result;
}

module.exports = {
  minesweeper
};
