// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function decodeMessage(input, cipher) {
    let decoded = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        decoded += input[i];
      } else {
        decoded += alphabet[cipher.indexOf(input[i])];
      }
    }
    return decoded;
  }

  function encodeMessage(input, cipher) {
    let encoded = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        encoded += input[i];
      } else {
        encoded += cipher[alphabet.indexOf(input[i])];
      }
    }
    return encoded;
  }

  function substitution(input, cipher, encode = true) {
    if (!cipher || cipher.length != 26) return false;
    message = input.toLowerCase();
    // Make sure no duplicate letters or symbols are present
    for (let i = 0; i < cipher.length; i++) {
      if (cipher.includes(cipher[i], i + 1)) return false;
    }
    if (encode) {
      message = encodeMessage(message, cipher);
    } else {
      message = decodeMessage(message, cipher);
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
