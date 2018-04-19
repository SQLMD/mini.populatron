const fs = require("fs");
const parse = require("csv-parse");

module.exports = {
  totalPopulation(onFinished, inputPath = "./cities.csv") {
    fs.readFile(inputPath, "utf8", function(err, data) {
      if (err) {
        return 0;
      }
      parse(data, {}, function(err, output) {
        if (err) {
          return 0;
        }
        let population = 0;
        for (let i = 1; i < output.length; i++) {
          population += Number.parseInt(output[i][2]);
        }
        onFinished(population);
      });
    });
  },
};
