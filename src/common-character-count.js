const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


// function getCommonCharacterCount(firstString, secondString) {
//     let firstArray = firstString.split('').sort();
//     let secondArray = secondString.split('').sort();
//     let pairs = 0;
//     for (let i = 0; i < firstArray.length; i++) {
//         for (let j = 0; j < secondArray.length; j++){
//             while ((secondArray.length || i !== firstArray.length) ) {
//                 if (firstArray[i] === secondArray[j]) {
//                     pairs++;
//                     secondArray.splice(j, 1);
//                     break;
//                 }
//             }
//         }
//     }
//
//
//     console.log (firstArray);
//     console.log (secondArray);
//     console.log (pairs);
//     return pairs;
//
// }


function getCommonCharacterCount(firstString, secondString) {
    let pairs = 0;
    let firstSet = {};
    let secondSet = {};

    for (let i = 0; i < firstString.length; i++) {
        firstSet[firstString[i]] ? (firstSet[firstString[i]]++) : (firstSet[firstString[i]] = 1) ;
    }

    for (let j = 0; j < secondString.length; j++) {
        secondSet[secondString[j]] ? (secondSet[secondString[j]]++) : (secondSet[secondString[j]] = 1) ;
    }


    for (let keyOne in firstSet) {
        for (let keyTwo in secondSet) {
            let extraPairs;
            if (keyOne === keyTwo) {
                pairs += Math.min(firstSet[keyOne ], secondSet[keyTwo]);
            }
        }
    }
    return pairs;
}


module.exports = {
  getCommonCharacterCount
};

//
// firstString = 'aabcc';
// secondString = 'adcaa';
//
// function getCommonCharacterCount(firstString, secondString) {
//     let firstArray = firstString.split('').sort();
//     let secondArray = secondString.split('').sort();
//     let pairs = 0;
//     for (let i = 0; i < firstArray.length; i++) {
//         for (let j = 0; j < secondArray.length; j++){
//             while (secondArray.length && i !== firstArray.length) {
//                 if (firstArray[i] === secondArray[j]) {
//                     pairs++;
//                     secondArray.splice(j, 1);
//                     i++;
//                     j === 0;
//                 }
//
//             }
//         }
//     }
//
//
//     console.log(firstArray);
//     console.log(secondArray);
//     console.log(pairs);
//     return pairs;
//
// }
//
// getCommonCharacterCount(firstString, secondString)