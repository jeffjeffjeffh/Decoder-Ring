// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];

  function encodeString(string) {
    const arr = string.toLowerCase().split("");
    const newArr = arr.map((letter) => {
      if (!letter.match(/[a-z]/)) return letter;
      if (letter === "i" || letter === "j") return 42;
      for (let i = 0; i < cipher.length; i++) {
        for (let j = 0; j < cipher.length; j++) {
          if (cipher[i][j] === letter) {
            result = `${i + 1}${j + 1}`;
            return result;
          }
        }
      }
    });
    return newArr.join("");
  }

  function decodeString(string) {
    let message = "";
    for (let i = 0; i < string.length; i += 2) {
      if (!string[i].match(/[0-9]/)) {
        message = message.concat(string[i]);
        i++;
      }
      const numA = Number(string[i]) - 1;
      const numB = Number(string[i + 1]) - 1;
      const letter = cipher[numA][numB];
      message = message.concat(letter);
    }
    return message;
  }

  function polybius(input, encode = true) {
    let result;
    if (encode) {
      result = encodeString(input);
    } else {
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        if (!input[i].match(" ")) {
          count++;
        }
      }
      if (count % 2 != 0) return false;
      result = decodeString(input);
    }
    return result;
  }

  return {
    polybius,
    encodeString,
    decodeString,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius,
  encodeString: polybiusModule.encodeString,
  decodeString: polybiusModule.decodeString,
};
