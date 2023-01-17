// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // This function returns an array of each character's UTF-16 decimal value.
  function getLetterValues(str) {
    const messageValues = [];
    for (let i = 0; i < str.length; i++) {
      messageValues.push(str.charCodeAt(i));
    }
    return messageValues;
  }

  // This function shifts the values based on the shift variable,
  // and also handles wrapping the values to the other side of the alphabet if needed.
  // It leaves non-alphabet characters alone.
  function changeValues(values, shift) {
    const newValues = values.map((value) => {
      // Uppercase
      if (value >= 75 && value <= 90) {
        value += shift;
        if (value < 75) {
          value += 25;
        } else if (value > 90) {
          value -= 25;
        }
        // Lowercase
      } else if (value >= 97 && value <= 122) {
        value += shift;
        if (value < 97) {
          value += 25;
        } else if (value > 122) {
          value -= 25;
        }
      }
    });
    return newValues;
  }

  function translateValues(arr) {
    const message = String.fromCharCode(...arr);
    return message;
  }

  // This function calls all the little helper functions,
  // and returns the final message back to caesar()
  const changeMessage = (str, shift) => {
    const values = getLetterValues(str);
    const newValues = changeValues(values, shift);
    let message = translateValues(newValues);
  };

  // "Main" function
  function caesar(input, shift, encode = true) {
    if (!encode) shift *= -1;
    let message = changeMessage(input, shift);
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
  getLetterValues: caesarModule.getLetterValues,
  changeMessage: caesarModule.changeMessage,
  translateValues: caesarModule.translateValues,
  changeValues: caesarModule.changeValues,
};