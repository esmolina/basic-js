const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let set = {};
  let result = [];
  for (let i = 0; i < names.length; i++) {
    set[names[i]] ? (set[names[i]]++) : (set[names[i]]= 1);
    set[names[i]] === 1 ? result.push(names[i]) : result.push(`${names[i]}(${set[names[i]]-1})`);
  }

  setRename = {};
  let resultRename = []
  for (let j = 0; j < result.length; j++) {
    setRename[result[j]] ? (setRename[result[j]]++) : (setRename[result[j]]= 1);
    setRename[result[j]] === 1 ? resultRename.push(result[j]) : resultRename.push(`${result[j]}(${setRename[result[j]]-1})`);
  }

  return resultRename;
}

module.exports = {
  renameFiles
};
