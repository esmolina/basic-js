const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arr = n.toString().split('');
  let arrNumbersForSort = [];
  for (let i = 0; i < arr.length; i++) {
    let copyArr = [...arr];
    copyArr.splice(i, 1);
    arrNumbersForSort.push(copyArr.join(''));
  }

  for (let j = 0; j < arrNumbersForSort.length; j++) {
    arrNumbersForSort[j] = Number(arrNumbersForSort[j]);
  }
  // arrNumbersForSort.forEach(item => item = Number(item)); ???

  arrNumbersForSort.sort((a,b) => b - a);

  return arrNumbersForSort[0];
}

module.exports = {
  deleteDigit
};
