const populatron = require("../populatron");
const { expect } = require("chai");

describe("populatron", () => {
  it("should find total population", (done) => {
    // Setup
    const expected = 561453504;
    // Exercise
    // Moved callback to a named function so I could conceptualize better
    const test = (actual) => {
      expect(actual).to.equal(expected);
      //Teaf Down
      done();
    };

    populatron.totalPopulation("./cities.csv", test);
  });
});
