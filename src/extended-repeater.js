const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

/*
str = 'STRING';
options = {
  repeatTimes: 3, // количество повторений
  separator: '**', //строка, разделяющая повторения
  addition: 'PLUS', // дополнительная строка, которая будет добавляться при каждом повторении строки str
  additionRepeatTimes: 3, //устанавливает количество повторений добавления
  additionSeparator: '00',//это строка, разделяющая повторения сложения
}
*/

function repeater(str, options) {
  let mainString = {
    text: str,
    repeat: options.repeatTimes,
    delim: options.separator,
  };

  let extraString = {
    text: options.addition,
    repeat: options.additionRepeatTimes,
    delim: options.additionSeparator,
  };

  if(!mainString.delim) {
    mainString.delim = '+';
  }
  if(!extraString.delim) {
    extraString.delim = '|';
  }

  if (extraString.text === undefined) {delete extraString.text};

  function simpleRepeat(obj) {
    let result = [];
    result.push(`${obj.text}`);


    if (!obj.repeat) { // simple way, not repeat
      return result;
    }

    else { // have repeat, have delim
      for (let i = 0; i < obj.repeat - 1; i++) {
        result.push(`${obj.delim}${obj.text}`);
      }
      return result;
    }
  }

  let target = [];
  if (!("text" in extraString)) { // simple way, extraString - none
    target.push(simpleRepeat(mainString).join(''));
  } else {
    if (!mainString.repeat) {
      target.push('');
    } else (mainString.repeat && mainString.delim)
    { // (mainString[repeat] && mainString[delim])
      target.push(`${mainString.text}${simpleRepeat(extraString).join('')}`);
      for (k = 1; k <= mainString.repeat - 1; k++) {
        target.push(`${mainString.delim}${mainString.text}${simpleRepeat(extraString).join('')}`)
      }
    }
  }

  return target.join('');
}


module.exports = {
  repeater
};
