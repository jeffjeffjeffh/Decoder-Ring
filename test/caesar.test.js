/*
const { expect } = require("chai");
const { caesar, getLetterValues, changeValues } = require("../src/caesar");

describe("caesar", () => {
  it("Should return false if shift is equal to 0", () => {
    const actual = caesar("string", 0);
    expect(actual).to.be.false;
  });
  it("Should return false if shift is greater than 25", () => {
    const actual = caesar("string", 26);
    expect(actual).to.be.false;
  });
  it("Should return false if shift is less than -25", () => {
    const actual = caesar("string", -26);
    expect(actual).to.be.false;
  });
  it("Should correctly encode a string with spaces and punctuation", () => {
    const actual = caesar("This is a test!", 5, true);
    const expected = "ymnx nx f yjxy!";
    expect(actual).to.equal(expected);
  });
  it("Should correctly decode a string with spaces and punctuation", () => {
    const actual = caesar("Ymnx nx f yjxy!", 5, false);
    const expected = "this is a test!";
    expect(actual).to.equal(expected);
  });
});

describe("changeValues", () => {
  it("Should change values by shifting five to the left", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = -5;
    const actual = changeValues(values, shift);
    const expected = [120, 118, 122, 110, 118, 109];
    expect(actual).to.eql(expected);
  });

  it("Should change values by shifting five to the right", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = 5;
    const actual = changeValues(values, shift);
    const expected = [104, 102, 106, 120, 102, 119];
    expect(actual).to.eql(expected);
  });

  it("Should change values by shifting ten to the left", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = -10;
    const actual = changeValues(values, shift);
    const expected = [115, 113, 117, 105, 113, 104];
    expect(actual).to.eql(expected);
  });

  it("Should change values by shifting ten to the right", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = 10;
    const actual = changeValues(values, shift);
    const expected = [109, 107, 111, 99, 107, 98];
    expect(actual).to.eql(expected);
  });
});

describe("getLetterValues", () => {
  it("Should return an array of correct UTF-16 values for a string", () => {
    const expected = [83, 116, 114, 105, 110, 103, 32, 33];
    const actual = getLetterValues("String !");
    expect(actual).to.eql(expected);
  });
});
*/
