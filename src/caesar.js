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
      if (value >= 97 && value <= 122) {
        value += shift;
        if (value < 97) {
          value += 26;
        } else if (value > 122) {
          value -= 26;
        }
      }
      return value;
    });
    return newValues;
  }

  // Main function
  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;
    if (!encode) shift *= -1;
    const values = getLetterValues(input.toLowerCase());
    const newValues = changeValues(values, shift);
    let result = String.fromCharCode(...newValues);
    return result;
  }

  return {
    caesar,
    getLetterValues,
    changeValues,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
  getLetterValues: caesarModule.getLetterValues,
  changeValues: caesarModule.changeValues,
};
