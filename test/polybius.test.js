const { expect } = require("chai");
const { polybius, encodeString, decodeString } = require("../src/polybius");

describe("encodeString", () => {
  it("should return an answer in the form of a string", () => {
    const actual = encodeString("Birds are not real");
    expect(actual).to.be.string;
  });
  it("should return the correct string of numbers and spaces for a given string", () => {
    const actual = encodeString("Birds are not real");
    const expected = "2142244134 112451 334344 24511113";
    expect(actual).to.equal(expected);
  });
});
