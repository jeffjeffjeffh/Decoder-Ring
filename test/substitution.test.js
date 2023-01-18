const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if given cipher does not have exactly 26 characters", () => {
    const input = "birds are not real";
    const cipher = "123456789";
    const actual = substitution(input, cipher);
    const expected = false;
    expect(actual).to.be.false;
  });

  it("should return false if cipher contains repeated characters", () => {
    const input = "birds are not real";
    const cipher = "aacdefghijklmnopqrstuvwxyz";
    const actual = substitution(input, cipher);
    expect(actual).to.be.false;
  });

  it("should return a properly decoded message", () => {
    const input = "qxgsh pgt cdi gtpa";
    const cipher = "pqrstuvwxyzabcdefghijklmno";
    const actual = substitution(input, cipher, false);
    expect(actual).to.equal("birds are not real");
  });

  it("should return a properly encoded message", () => {
    const input = "birds are not real";
    const cipher = "pqrstuvwxyzabcdefghijklmno";
    const actual = substitution(input, cipher, true);
    expect(actual).to.equal("qxgsh pgt cdi gtpa");
  });
});
