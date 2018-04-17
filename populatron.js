const fs = require("fs");
const parse = require("csv-parse");

const totalPopulation = (inputPath) => {
  fs.readFile(inputPath, "utf8", function(err, data) {
    if (err) {
      return 0;
    }
    parse(data, { comment: "#" }, function(err, output) {
      if (err) {
        return 0;
      }
      let population = 0;
      for (let i = 1; i < output.length; i++) {
        population += Number.parseInt(output[i][2]);
      }
      return population;
    });
  });
};

totalPopulation("./cities.csv").onFinished;

module.exports = {
  totalPopulation(onFinished) {},
};
