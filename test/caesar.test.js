const { expect } = require("chai");
const {
  caesar,
  getLetterValues,
  changeMessage,
  translateValues,
  changeValues,
} = require("../src/caesar");

describe("caesar", () => {});

describe("changeValues", () => {
  it("Should change values by shifting five to the left", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = -5;
    const actual = changeValues(values, shift);
    const expected = [120, 118, 122, 110, 118, 109];
    expect(actual).to.equal(expected);
  });

  it("Should change values by shifting five to the right", () => {
    const values = [99, 97, 101, 115, 97, 114];
    const shift = 5;
    const actual = changeValues(values, shift);
    const expected = [104, 102, 1060, 120, 102, 119];
    expect(actual).to.equal(expected);
  });
});

describe("getLetterValues", () => {
  it("Should return the UTF code values of a string as an array", () => {
    const str = "caesar";
    const actual = getLetterValues(str);
    const expected = [99, 97, 101, 115, 97, 114];
    expect(actual).to.eql(expected);
  });
});
