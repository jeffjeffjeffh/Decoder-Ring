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
    ["d", "i/j", "o", "t", "y"],
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

  function decodeString(string) {}

  function polybius(input, encode = true) {
    let result;
    if (encode) {
      result = encodeString(input);
    } else {
      if (input.length % 2 != 0) return false;
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
