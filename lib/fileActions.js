const fs = require("fs");

const writeToFile = (content) => {
  const outputFile = "/home/nikhil/Code/gpPoacher/testdata_8";

  fs.writeFileSync(outputFile, "");
  content.forEach((item) => {
    fs.appendFileSync(outputFile, item);
    fs.appendFileSync(outputFile, "\n");
  });
};

module.exports = { writeToFile };
