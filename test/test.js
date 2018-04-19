const populatron = require("../populatron");
const { expect } = require("chai");
// Setup
const expected = 561453504;

describe("populatron", () => {
  it("should find total population with an inputPath parameter", (done) => {
    const test = (actual) => {
      expect(actual).to.equal(expected);
      done();
    };

    populatron.totalPopulation(test, "./cities.csv");
  });

  it("should find total population", (done) => {
    // Exercise
    populatron.totalPopulation((actual) => {
      // Assert
      expect(actual).to.equal(expected);
      // Teardown
      done();
    });
  });
});
