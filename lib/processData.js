const { writeToFile } = require("./writeData");

const keepOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) !== -1);
const tossOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) === -1);

const processData = (rawBody) => {
  let lineWithUrls = rawBody.split("\n");
  lineWithUrls = keepOccurrences(lineWithUrls, "https://lh3.googleusercontent.com");
  lineWithUrls = keepOccurrences(lineWithUrls, "null,[]");
  lineWithUrls = tossOccurrences(lineWithUrls, "video");

  writeToFile(lineWithUrls);
};

module.exports = { processData };
