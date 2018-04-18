const fs = require("fs");
const parse = require("csv-parse");

module.exports = {
  //added a inputPath paramter because it made it easier for me to see that I was
  //passing paramters from the test.js
  totalPopulation(callback, inputPath = "./cities.csv") {
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
        //changed onFinished to callback to remove some of my confusion
        //this line was the hardest to figure out
        callback(population);
      });
    });
  },
};
