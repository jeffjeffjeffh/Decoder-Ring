const { expect } = require("chai");
const { polybius, encodeString, decodeString } = require("../src/polybius");

describe("encodeString", () => {
  it("should return the correct string of numbers and spaces for a given string", () => {
    const actual = encodeString("Birds are not real");
    const expected = "2142244134 112451 334344 24511113";
    expect(actual).to.equal(expected);
  });
});

describe("decodeString", () => {
  it("should correctly decode the given sequence of numbers, preserving spaces", () => {
    const actual = decodeString("2142244134 112451 334344 24511113");
    const expected = "b(i/j)rds are not real";
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should encode the string if encode is true", () => {
    const actual = polybius("Birds are not real", true);
    const expected = "2142244134 112451 334344 24511113";
    expect(actual).to.equal(expected);
  });
  it("should decode the string if encode is false and amount of numbers is even", () => {
    const actual = polybius("2142244134 112451 334344 24511113", false);
    const expected = "b(i/j)rds are not real";
    expect(actual).to.equal(expected);
  });
  it("should return false if the amount of numbers to be decoded is odd", () => {
    const actual = polybius("12345", false);
    expect(actual).to.be.false;
  });
});
