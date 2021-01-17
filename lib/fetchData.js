const fs = require("fs");
const request = require("request");

const outputFile = "/home/nikhil/Code/gpPoacher/testdata_4";

const keepOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) !== -1);
const tossOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) === -1);

const fetchData = async (albumUrl) => {
  console.log("fetch data here! albumUrl: ", albumUrl);

  request(albumUrl, (error, response, body) => {
    if (error === null) {
      // console.log('body: ', body);
      const lines = body.split("\n");
      let lineWithUrls = keepOccurrences(lines, "https://lh3.googleusercontent.com");
      lineWithUrls = keepOccurrences(lineWithUrls, "null,[]");
      // lineWithUrls = tossOccurrences(lineWithUrls, "<title>");
      // lineWithUrls = keepOccurrences(lineWithUrls, "</script>");
      lineWithUrls = tossOccurrences(lineWithUrls, "video");
      // lineWithUrls = tossOccurrences(lineWithUrls, "myaccount");

      // console.log("lineWithUrls: ", lineWithUrls);
      // console.log("lineWithUrls.length: ", lineWithUrls.length);

      fs.writeFileSync(outputFile, "");
      lineWithUrls.forEach((item) => {
        fs.appendFileSync(outputFile, item);
        fs.appendFileSync(outputFile, "\n");
      });
    }
  });
};

module.exports = { fetchData };
