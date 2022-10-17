const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  let logoArr =  members.map(function(item) {
    if ((typeof  item) === "string") {
      for (let i = 0; i < item.length; i++) {
        let count = 0;
        if (item[i] !== ' ') {return item[i].toUpperCase()}
        else {count++};
      }
    }
    return '';
  });
  return logoArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
