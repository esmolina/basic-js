const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) {
    return {};
  }

  // let domainsProprerties = domains.map(function(item) {
  //     let arr = item.split('.');
  //     let setProperties = {};
  //     let deepOfArr = arr.length;
  //     if (deepOfArr === 3) {
  //         setProperties[`.${arr[2]}`] = 1;
  //         setProperties[`${arr[2]}.${arr[1]}`] = 1;
  //         setProperties[`${arr[2]}.${arr[1]}.${arr[0]}`] = 1;
  //     } else  { // if (deepOfArr === 2)
  //         setProperties[`.${arr[2]}`] = 1;
  //         setProperties[`${arr[1]}.${arr[0]}`] = 1;
  //     }
  //     return setProperties;
  // });

  let domainsProprerties = domains.map(function(item) {
    let arr = item.split('.');
    let setProperties = [];
    let deepOfArr = arr.length;
    if (deepOfArr === 3) {
      setProperties.push(`.${arr[2]}`);
      setProperties.push(`.${arr[2]}.${arr[1]}`);
      setProperties.push(`.${arr[2]}.${arr[1]}.${arr[0]}`);
    } else  { // if (deepOfArr === 2)
      setProperties.push(`.${arr[1]}`);
      setProperties.push(`.${arr[1]}.${arr[0]}`);
    }
    return setProperties;
  });

  let commonArray = [];
  for (let i = 0; i < domainsProprerties.length; i++) {
    commonArray = [...commonArray, ...domainsProprerties[i]];
  }

  let result = {};
  for (let j = 0; j < commonArray.length; j++) {
    result[commonArray[j]] ? (result[commonArray[j]]++) : (result[commonArray[j]]= 1) ;
  }

  return result;
}

module.exports = {
  getDNSStats
};
